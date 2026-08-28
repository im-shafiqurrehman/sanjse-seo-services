import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import { createHmac, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { MongoClient, ObjectId } from 'mongodb';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = Number(process.env.PORT || 3001);
const isProduction = process.env.NODE_ENV === 'production';
const currentFile = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFile);
const mongoUri = process.env.MONGO_URI || process.env.Mongo_URI;
const databaseName = process.env.MONGO_DB_NAME || 'sanjseSeo';
const sessionSecret = process.env.SESSION_SECRET || randomBytes(32).toString('hex');
const configuredFrontendUrl = process.env.FRONTEND_URL || process.env.APP_URL;
const deployedFrontendOrigins = [
  'https://sanjse-seo-services-frontend.vercel.app',
  'https://www.sanjoseagencyseo.com',
  'https://sanjoseagencyseo.com',
];
const allowedFrontendOrigins = new Set(
  [...deployedFrontendOrigins, configuredFrontendUrl]
    .filter((origin): origin is string => Boolean(origin))
    .map((origin) => origin.replace(/\/$/, '')),
);
const isVercelDeployment = process.env.VERCEL === '1';
const sessionCookie = (token: string, maxAge = 60 * 60 * 24) => `sanjse_session=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=${isVercelDeployment ? 'None' : 'Lax'}${isVercelDeployment || isProduction ? '; Secure' : ''}`;
const mongoClient = mongoUri ? new MongoClient(mongoUri) : null;
let database: ReturnType<MongoClient['db']> | null = null;
let databaseConnection: Promise<void> | null = null;

app.use(express.json({ limit: '20kb' }));
app.use((request, response, next) => {
  const requestOrigin = request.headers.origin;
  if (requestOrigin && allowedFrontendOrigins.has(requestOrigin.replace(/\/$/, ''))) {
    response.setHeader('Access-Control-Allow-Origin', requestOrigin);
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.setHeader('Vary', 'Origin');
  }
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,OPTIONS');
  if (request.method === 'OPTIONS') {
    response.sendStatus(204);
    return;
  }
  next();
});

const requiredEnvironment = ['CONTACT_EMAIL', 'SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];
const hasPlaceholderValue = (value: string | undefined) => !value || /^(you@example\.com|your-app-password|MY_|YOUR_)/i.test(value);
const missingEnvironment = requiredEnvironment.filter((name) => hasPlaceholderValue(process.env[name]));

const mailTransport = missingEnvironment.length === 0
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== 'false',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

const usersCollection = () => database?.collection('users');
const auditRequestsCollection = () => database?.collection('auditRequests');
const contactRequestsCollection = () => database?.collection('contactRequests');

const ensureDatabase = async () => {
  if (database || !mongoClient) return;
  databaseConnection ??= mongoClient.connect().then(async () => {
    database = mongoClient.db(databaseName);
    await usersCollection()!.createIndex({ email: 1 }, { unique: true });
    await auditRequestsCollection()!.createIndex({ createdAt: -1 });
    await contactRequestsCollection()!.createIndex({ createdAt: -1 });
  });
  await databaseConnection;
};

app.use(async (_request, response, next) => {
  try {
    await ensureDatabase();
    next();
  } catch (error) {
    console.error('Unable to connect to MongoDB:', error);
    response.status(503).json({ error: 'Database is not available.' });
  }
});

const hashPassword = (password: string) => {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
};

const verifyPassword = (password: string, storedPassword: string) => {
  const [salt, storedHash] = storedPassword.split(':');
  if (!salt || !storedHash) return false;
  const hash = scryptSync(password, salt, 64);
  const expectedHash = Buffer.from(storedHash, 'hex');
  return hash.length === expectedHash.length && timingSafeEqual(hash, expectedHash);
};

const createSessionToken = (userId: string, role: string) => {
  const payload = Buffer.from(JSON.stringify({ userId, role, exp: Date.now() + 1000 * 60 * 60 * 24 })).toString('base64url');
  const signature = createHmac('sha256', sessionSecret).update(payload).digest('base64url');
  return `${payload}.${signature}`;
};

const getSession = (request: express.Request) => {
  const token = request.headers.cookie?.match(/(?:^|;\s*)sanjse_session=([^;]+)/)?.[1];
  if (!token) return null;
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return null;
  const expectedSignature = createHmac('sha256', sessionSecret).update(payload).digest('base64url');
  if (signature !== expectedSignature) return null;
  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString()) as { userId: string; role: string; exp: number };
    return session.exp > Date.now() ? session : null;
  } catch {
    return null;
  }
};

const requireAdmin = (request: express.Request, response: express.Response, next: express.NextFunction) => {
  const session = getSession(request);
  if (!session || session.role !== 'admin') {
    response.status(401).json({ error: 'Admin authentication required.' });
    return;
  }
  request.adminSession = session;
  next();
};

declare global {
  namespace Express {
    interface Request {
      adminSession?: { userId: string; role: string; exp: number };
    }
  }
}

app.get('/api/health', (_request, response) => {
  response.json({ ok: true, emailConfigured: Boolean(mailTransport), databaseConnected: Boolean(database) });
});

app.get('/api/auth/me', async (request, response) => {
  const session = getSession(request);
  if (!session || !usersCollection()) {
    response.json({ authenticated: false });
    return;
  }
  const user = await usersCollection()!.findOne({ _id: new ObjectId(session.userId) }, { projection: { passwordHash: 0 } });
  response.json(user ? { authenticated: true, user } : { authenticated: false });
});

app.post('/api/auth/signup', async (request, response) => {
  const { name, email, password } = request.body ?? {};
  const safeName = String(name || '').trim();
  const safeEmail = String(email || '').trim().toLowerCase();
  if (!database) return response.status(503).json({ error: 'Database is not connected yet.' });
  if (safeName.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail) || typeof password !== 'string' || password.length < 8) {
    return response.status(400).json({ error: 'Use a valid name, email, and password of at least 8 characters.' });
  }
  if (await usersCollection()!.findOne({ email: safeEmail })) return response.status(409).json({ error: 'An account with this email already exists.' });
  const role = process.env.ADMIN_EMAIL?.toLowerCase() === safeEmail ? 'admin' : 'user';
  const result = await usersCollection()!.insertOne({ name: safeName, email: safeEmail, passwordHash: hashPassword(password), role, createdAt: new Date() });
  response.setHeader('Set-Cookie', sessionCookie(createSessionToken(result.insertedId.toHexString(), role)));
  return response.status(201).json({ user: { id: result.insertedId, name: safeName, email: safeEmail, role } });
});

app.post('/api/auth/signin', async (request, response) => {
  const { email, password } = request.body ?? {};
  const safeEmail = String(email || '').trim().toLowerCase();
  const user = database && await usersCollection()!.findOne({ email: safeEmail });
  if (!user || typeof password !== 'string' || !verifyPassword(password, user.passwordHash)) return response.status(401).json({ error: 'Invalid email or password.' });
  response.setHeader('Set-Cookie', sessionCookie(createSessionToken(user._id.toHexString(), user.role)));
  return response.json({ user: { id: user._id, name: user.name, email: user.email, role: user.role } });
});

app.post('/api/auth/signout', (_request, response) => {
  response.setHeader('Set-Cookie', sessionCookie('', 0));
  response.json({ ok: true });
});

app.post('/api/audit-requests', async (request, response) => {
  const { fullName, businessName, email, phone, websiteUrl, primaryGoal, currentTraffic, message, website } = request.body ?? {};

  if (website) {
    response.status(400).json({ error: 'Invalid submission.' });
    return;
  }

  if (!fullName || !businessName || !email || !websiteUrl) {
    response.status(400).json({ error: 'Please complete all required fields.' });
    return;
  }

  if (!auditRequestsCollection()) {
    response.status(503).json({ error: 'Database is not connected yet.' });
    return;
  }

  await auditRequestsCollection()?.insertOne({
    fullName: String(fullName).trim(),
    businessName: String(businessName).trim(),
    email: String(email).trim(),
    phone: String(phone || '').trim(),
    websiteUrl: String(websiteUrl).trim(),
    primaryGoal: String(primaryGoal || '').trim(),
    currentTraffic: String(currentTraffic || '').trim(),
    message: String(message || '').trim(),
    status: 'pending',
    createdAt: new Date(),
  });

  const safeEmail = String(email).trim();
  const subject = `New SEO audit request from ${String(fullName).trim()}`;
  const text = [
    'New SEO audit request',
    '',
    `Name: ${String(fullName).trim()}`,
    `Business: ${String(businessName).trim()}`,
    `Email: ${safeEmail}`,
    `Phone: ${String(phone || 'Not provided').trim()}`,
    `Website: ${String(websiteUrl).trim()}`,
    `Primary goal: ${String(primaryGoal || 'Not provided').trim()}`,
    `Current traffic: ${String(currentTraffic || 'Not provided').trim()}`,
    '',
    'Challenges or competitors:',
    String(message || 'Not provided').trim(),
  ].join('\n');

  try {
    if (!mailTransport) {
      console.error(`Email service is not configured. Missing: ${missingEnvironment.join(', ')}`);
      response.status(202).json({ ok: true, warning: 'Saved, but email notification is unavailable.' });
      return;
    }
    await mailTransport.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: safeEmail,
      subject,
      text,
    });
    response.status(202).json({ ok: true });
  } catch (error) {
    console.error('Unable to send audit request email:', error);
    response.status(500).json({ error: 'We could not send your request. Please try again.' });
  }
});

app.post('/api/contact-requests', async (request, response) => {
  const { name, email, phone, message, website } = request.body ?? {};
  const safeName = String(name || '').trim();
  const safeEmail = String(email || '').trim();
  const safePhone = String(phone || '').trim();
  const safeMessage = String(message || '').trim();

  if (website) {
    response.status(400).json({ error: 'Invalid submission.' });
    return;
  }

  if (!safeName || !safeEmail || !safeMessage) {
    response.status(400).json({ error: 'Please complete all required fields.' });
    return;
  }

  if (safeName.length < 2 || safeName.length > 100) {
    response.status(400).json({ error: 'Please enter a valid name.' });
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail) || safeEmail.length > 254) {
    response.status(400).json({ error: 'Please enter a valid email address.' });
    return;
  }

  if (safePhone && !/^[+()\d\s.-]{7,20}$/.test(safePhone)) {
    response.status(400).json({ error: 'Please enter a valid phone number.' });
    return;
  }

  if (safeMessage.length < 10 || safeMessage.length > 5000) {
    response.status(400).json({ error: 'Please provide a message between 10 and 5,000 characters.' });
    return;
  }

  if (!contactRequestsCollection()) {
    response.status(503).json({ error: 'Database is not connected yet.' });
    return;
  }

  await contactRequestsCollection()?.insertOne({
    name: safeName,
    email: safeEmail,
    phone: safePhone,
    message: safeMessage,
    status: 'pending',
    createdAt: new Date(),
  });

  const text = [
    'New contact form message',
    '',
    `Name: ${safeName}`,
    `Email: ${safeEmail}`,
    `Phone: ${safePhone || 'Not provided'}`,
    '',
    'Message:',
    safeMessage,
  ].join('\n');

  const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] || character);
  const html = `
    <div style="margin:0;background:#f4f7fb;padding:32px 16px;font-family:Arial,sans-serif;color:#102a43">
      <div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #d9e2ec;border-radius:12px;overflow:hidden">
        <div style="background:#0a2540;padding:24px 28px;color:#ffffff">
          <div style="font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#e5c882;font-weight:700">Sanjose SEO Services</div>
          <h1 style="margin:8px 0 0;font-size:24px;line-height:1.3">New Contact Form Message</h1>
        </div>
        <div style="padding:28px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:10px 0;color:#627d98;width:120px">Name</td><td style="padding:10px 0;font-weight:700">${escapeHtml(safeName)}</td></tr>
            <tr><td style="padding:10px 0;color:#627d98;border-top:1px solid #e6edf3">Email</td><td style="padding:10px 0;border-top:1px solid #e6edf3"><a href="mailto:${escapeHtml(safeEmail)}" style="color:#1e40af">${escapeHtml(safeEmail)}</a></td></tr>
            <tr><td style="padding:10px 0;color:#627d98;border-top:1px solid #e6edf3">Phone</td><td style="padding:10px 0;border-top:1px solid #e6edf3">${escapeHtml(safePhone || 'Not provided')}</td></tr>
          </table>
          <div style="margin-top:24px;padding:18px;background:#f8fafc;border-left:4px solid #d4af37;border-radius:4px">
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#627d98;font-weight:700;margin-bottom:8px">Message</div>
            <div style="font-size:15px;line-height:1.7;white-space:pre-wrap">${escapeHtml(safeMessage)}</div>
          </div>
          <a href="mailto:${escapeHtml(safeEmail)}" style="display:inline-block;margin-top:24px;background:#1e40af;color:#ffffff;text-decoration:none;padding:12px 18px;border-radius:6px;font-weight:700;font-size:14px">Reply to ${escapeHtml(safeName)}</a>
        </div>
        <div style="padding:16px 28px;background:#f8fafc;color:#829ab1;font-size:12px">Submitted through the Sanjose SEO website contact form.</div>
      </div>
    </div>`;

  try {
    if (!mailTransport) {
      console.error(`Email service is not configured. Missing: ${missingEnvironment.join(', ')}`);
      response.status(202).json({ ok: true, warning: 'Saved, but email notification is unavailable.' });
      return;
    }
    await mailTransport.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: safeEmail,
      subject: `New contact message from ${safeName}`,
      text,
      html,
    });
    response.status(202).json({ ok: true });
  } catch (error) {
    console.error('Unable to send contact form email:', error);
    response.status(500).json({ error: 'We could not send your message. Please try again.' });
  }
});

app.get('/api/admin/leads', requireAdmin, async (_request, response) => {
  const [auditRequests, contactRequests] = await Promise.all([
    auditRequestsCollection()?.find().sort({ createdAt: -1 }).limit(200).toArray() || [],
    contactRequestsCollection()?.find().sort({ createdAt: -1 }).limit(200).toArray() || [],
  ]);
  response.json({
    auditRequests: auditRequests.map((lead) => ({ ...lead, status: lead.status || 'pending' })),
    contactRequests: contactRequests.map((lead) => ({ ...lead, status: lead.status || 'pending' })),
  });
});

app.patch('/api/admin/leads/:type/:id/status', requireAdmin, async (request, response) => {
  const { type, id } = request.params;
  const { status } = request.body ?? {};
  const collection = type === 'audit' ? auditRequestsCollection() : type === 'contact' ? contactRequestsCollection() : null;
  if (!collection || !ObjectId.isValid(id)) {
    response.status(400).json({ error: 'Invalid lead.' });
    return;
  }
  if (!['pending', 'received', 'completed'].includes(status)) {
    response.status(400).json({ error: 'Invalid lead status.' });
    return;
  }
  const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { status, updatedAt: new Date() } });
  if (!result.matchedCount) {
    response.status(404).json({ error: 'Lead not found.' });
    return;
  }
  response.json({ ok: true, status });
});

if (isProduction) {
  const clientDirectory = path.resolve(currentDirectory, '../frontend/dist');
  app.use(express.static(clientDirectory));
  app.get('*', (_request, response) => response.sendFile(path.join(clientDirectory, 'index.html')));
}

const start = async () => {
  await ensureDatabase();
  console.log(`MongoDB connected to ${databaseName}`);
  const server = app.listen(port, () => {
    console.log(`Sanjose backend listening on http://localhost:${port}`);
    if (missingEnvironment.length > 0) {
      console.warn(`Email is disabled until these variables are set: ${missingEnvironment.join(', ')}`);
    }
  });
  server.on('error', (error: NodeJS.ErrnoException) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Stop the existing backend process or set a different PORT.`);
      process.exit(1);
    }
    console.error('Unable to start the backend:', error);
    process.exit(1);
  });
};

if (process.env.VERCEL !== '1') {
  void start();
}

export default app;