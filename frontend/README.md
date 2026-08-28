<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Sanjse SEO Services

Next.js frontend for Sanjse SEO Services. The Express backend lives in `../backend`.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies in `frontend/` and `backend/`:
   `cd frontend && npm install && cd ../backend && npm install`
2. Set `CONTACT_EMAIL`, `SMTP_USER`, and `SMTP_PASS` in `backend/.env`. For Gmail, use an app password.
3. Start the backend in one terminal:
   `cd backend && npm run dev`
4. Start the frontend in another terminal:
   `cd frontend && npm run dev`

The frontend runs at `http://localhost:3000` and proxies `/api` requests to the backend at `http://localhost:3001` during local development.

## Vercel Deployment

Deploy `frontend/` and `backend/` as separate Vercel projects.

Frontend project:

- Root Directory: `frontend`
- Framework Preset: Next.js
- Environment variable: `NEXT_PUBLIC_BACKEND_URL=https://<backend-project>.vercel.app`

Backend project:

- Root Directory: `backend`
- Environment variables: copy `backend/.env.example` into the Vercel project settings.
- Set `FRONTEND_URL=https://<frontend-project>.vercel.app`.
- Keep `MONGO_URI`, `SESSION_SECRET`, SMTP values, and `ADMIN_EMAIL` configured in Vercel, not in Git.

The backend `vercel.json` exposes `index.ts` as a Node serverless function. The frontend uses `src/lib/api.ts` to send requests to the deployed backend URL.

The audit form sends `POST /api/audit-requests`. The backend emails submissions to `CONTACT_EMAIL` and sets the visitor email as `Reply-To`.
