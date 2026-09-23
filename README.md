# Rodrigo Figueiredo · Portfolio

A content-led portfolio about useful AI and practical software. Built with Next.js App Router, React, and TypeScript; exported as static HTML so each case study has a direct route and the same build can run on ChatGPT Sites or a static host.

## Work locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000` while developing. For the production export:

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

The export is written to `out/`; `npm start` serves it at `http://localhost:4173`. The site has no API, database, analytics SDK, contact form, or runtime secrets.

## Edit content

- `src/content/projects.ts` contains all three case studies, the card copy, outcomes, and workflow labels.
- `src/app/page.tsx` contains the homepage introduction, About, method, and contact copy.
- `src/app/globals.css` contains the light and dark color tokens and responsive design.

The ATLaS evaluation figures come from Rodrigo's public LinkedIn experience description. The GranitOS time saving is an approximate estimate supplied by the business. Visol Timesheet uses a qualitative outcome. Artwork uses shapes and synthetic labels; do not add real employee, salary, attendance, or client records to the public site.

## Hosting

`.openai/hosting.json` declares the static `out` directory for ChatGPT Sites. Build and review locally before saving and deploying a Sites version. If Sites is unavailable for the account or cannot publish publicly, deploy the same static export to Vercel. No custom domain is configured.
