<<<<<<< HEAD
# Neethika Prathigadapa — Portfolio

This is my personal portfolio website — an interactive, full-stack site built to showcase my work in ML research, safety-critical AI, and full-stack engineering. It doubles as a living resume: research labs, professional experience, education, selected projects, and publications, all in one place, with a downloadable resume and a working contact form.

**Live site:** _add your deployed URL here once live_

## What's on the site

- **Introduction** — animated 3D hero section
- **Research** — labs, advisors, funding, and focus areas
- **About** — professional summary with a visual
- **Skills** — languages, ML/DL, neuroscience research tooling, HPC, full-stack & cloud, data/observability
- **Experience** — research assistantships, internships, and certifications
- **Education** — degrees, GPA, and focus areas
- **Projects** — selected builds with impact, tech stack, and live/repo links
- **Publications** — research papers with abstracts and citations
- **Resume** — downloadable as PDF or plain text
- **Contact** — working form backed by a real API route (email delivery via SMTP)

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
=======
# Portfolio Website Monorepo

Main application source is in:

- `portfolio/`

Quick start:
>>>>>>> e1424400ee89ddab7d5ea95bc5232dbb4d2397c7

```bash
cd portfolio
npm install
cp .env.example .env.local
npm run dev
```

<<<<<<< HEAD
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

## Project Structure

```
portfolio/
├── app/
│   ├── api/contact/route.ts   # Contact form API (Zod-validated, Nodemailer)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/                # Section components (hero, nav, skills, etc.)
├── data/
│   └── portfolio-data.ts      # Single source of truth for all site content
└── public/                    # Resume files, images, static assets
```

## About Me

I'm Neethika Prathigadapa — working across ML research, safety-critical AI, and full-stack engineering. This site is where I bring my research, projects, and experience together in one place, so feel free to reach out through the contact form if you'd like to connect.
=======
Open `http://localhost:3000` in your browser.

For deployment, see `portfolio/README.md`.
>>>>>>> e1424400ee89ddab7d5ea95bc5232dbb4d2397c7
