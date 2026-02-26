# Developer Portfolio Website

Interactive full-stack portfolio for a technical resume.  
Includes:

- Introduction
- About (professional summary + visual image)
- Skills
- Experience
- Education
- Selected Projects
- Research Papers
- Resume download options (PDF + text)
- Contact form with backend API
- 3D hero section and motion-driven UX

## Stack Used

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion
- **3D/Visuals**: Three.js via React Three Fiber + Drei
- **Backend**: Next.js Route Handler (`/api/contact`), Zod validation, Nodemailer (SMTP)
- **Deployment**: Vercel (recommended), or any Node-compatible host

## What You Need To Install

Only these are required on your machine:

1. **Node.js 20+**
2. **npm 10+**

Everything else is installed through `npm install` from `package.json`.

## Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open: `http://localhost:3000`

## Run From Repository Root

If you are in the repo root (`/workspace`), run:

```bash
cd portfolio
npm install
cp .env.example .env.local
npm run dev
```

Then open: `http://localhost:3000`

## Configure Contact Form Email

The contact form endpoint is: `POST /api/contact`

Set these values in `.env.local`:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
CONTACT_FROM_EMAIL=portfolio@yourdomain.com
CONTACT_TO_EMAIL=your_inbox@yourdomain.com
```

If SMTP is not configured, form submissions are still accepted in development mode and logged server-side.

## Where To Edit Your Content

Update all your personal details here:

- `data/portfolio-data.ts`

Replace assets:

- `public/resume-neethika.pdf`
- `public/resume-neethika.txt`
- `public/about-visual.svg` (optional)

## Deploy Online (Vercel)

1. Push this repository to GitHub.
2. Import the repo into Vercel.
3. Set **Root Directory** to `portfolio` in Vercel project settings.
4. Add environment variables from `.env.example`.
5. Deploy.
6. Use the deployed URL in LinkedIn and job applications.

### One-time Vercel Checklist

- Framework preset: **Next.js**
- Build command: `npm run build` (default)
- Output setting: managed by Next.js
- Environment variables:
  - `SMTP_HOST`
  - `SMTP_PORT`
  - `SMTP_USER`
  - `SMTP_PASS`
  - `CONTACT_FROM_EMAIL`
  - `CONTACT_TO_EMAIL`

If email env vars are not configured, the contact endpoint still accepts messages but logs them server-side for development.

## Quality Checks

```bash
npm run lint
npm run build
```
