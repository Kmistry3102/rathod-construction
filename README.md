# Rathod Construction

Single-page marketing site for Rathod Construction, built with Next.js 16, React 19 and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Structure

- `src/app` – layout, page, metadata routes
- `src/features/*` – one folder per page section (hero, about, services, projects, …)
- `src/components` – shared layout, UI, motion and form components
- `src/data` – site content (company, services, projects, testimonials, images)

Deployed on Vercel at https://www.rathodconstruction.in.
