# Dr. Sumit Sinha — Cardiology website

A responsive, search-friendly **Next.js (Node.js)** website for Dr. Sumit Sinha, DM Cardiology. Sunday OPD at Dr. Rungta Clinic, K.G. Road, Ara, Bihar.

## Development

Requires Node.js 20.9+ (prefer a Hostinger-supported Node.js LTS version).

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm install
npm run build
npm run start
```

The Next.js server listens on the `PORT` environment variable (defaults to 3000). Do not deploy the source folder as static files without a build.

## Hostinger

1. Confirm your Hostinger plan includes **Node.js application hosting** (some shared plans do not).
2. In hPanel, create a Node.js application and connect the GitHub repository if Git integration is available.
3. Set the install/build/start commands to `npm install`, `npm run build`, and `npm run start` (or follow the Hostinger Node.js app UI's startup procedure).
4. Set `NODE_ENV=production`, `NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN`, and configure the domain/SSL.
5. Ensure Hostinger uses the detected Node.js version compatible with Next.js 16 and supports the app's port environment.
6. Redeploy after edits and verify /robots.txt, /sitemap.xml and the mobile homepage.

## Before publication

Update `lib/site.js` with the **verified** phone, WhatsApp number and final site URL. The booking button currently scrolls to the clinic location rather than submitting an appointment. Confirm exact OPD timings, all qualifications and procedural counts, and any relevant registration details with the doctor before publication. Replace decorative illustration with an approved professional portrait if desired.

No patient data is collected and no appointment form is submitted. Do not add patient testimonials, treatment guarantees or misleading superlatives. Keep content compliant with applicable professional conduct and advertising requirements.
