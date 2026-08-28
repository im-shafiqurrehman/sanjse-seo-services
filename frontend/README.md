<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Sanjse SEO Services

React/Vite frontend for Sanjse SEO Services. The Express backend lives in `../backend`.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies in `frontend/` and `backend/`:
   `cd frontend && npm install && cd ../backend && npm install`
2. Set `CONTACT_EMAIL`, `SMTP_USER`, and `SMTP_PASS` in `backend/.env`. For Gmail, use an app password.
3. Start the backend in one terminal:
   `cd backend && npm run dev`
4. Start the frontend in another terminal:
   `cd frontend && npm run dev`

The frontend runs at `http://localhost:3000` and proxies `/api` requests to the backend at `http://localhost:3001`.

The audit form sends `POST /api/audit-requests`. The backend emails submissions to `CONTACT_EMAIL` and sets the visitor email as `Reply-To`.
