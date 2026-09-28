# Rodrigo Figueiredo — Portfolio

The source for [my portfolio](https://rodrigofigueiredo.vercel.app/): a small, content-led site about human problems and useful systems. It introduces my GenAI engineering work, professional background, and four short project stories:

- **Influencer Monitor** — my current computer vision and generative AI work at DEUS, detecting logos and identifying brands in Instagram and TikTok images and videos. This is ongoing work without numerical impact claims.
- **ATLaS** — an LLM-powered HR knowledge platform developed for my master's thesis at DEUS. Its published figures are evaluation results.
- **GranitOS** — an operations application for Granitos de Boelhe. The roughly three days of administrative work saved per month is a business estimate.
- **Visol Timesheet** — an attendance and working-time application for Visol Proteção Solar, with a qualitative outcome.

The illustrations and workflow labels are conceptual. This repository contains no business records, employee data, private application code, or links to those applications.

## Built with

- Next.js App Router, React, and TypeScript
- Static export with pre-rendered HTML for the homepage and each project route
- CSS artwork and responsive layouts, with light and dark themes
- A small client-side theme switch that starts from the system preference and remembers a manual choice

The site includes a skip link, visible keyboard focus, and reduced-motion styles. It has no API, database, contact form, analytics SDK, or runtime secrets.

## Run locally

Use a recent Node.js version supported by the installed Next.js release.

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>. To check and serve the production export:

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

The static output is written to `out/`; `npm start` serves it at <http://localhost:4173>. `out/` and `node_modules/` are generated locally and excluded from Git.

## Update the content

| File | What to edit |
| --- | --- |
| `src/content/projects.ts` | Case-study copy, outcomes, tags, and workflow labels |
| `src/content/profile.ts` | Experience, education, and technical focus |
| `src/app/page.tsx` | Homepage introduction, About, method, and contact copy |
| `src/components/Artwork.tsx` | Conceptual project illustrations |
| `src/app/globals.css` | Colors, layout, motion, and responsive styles |

Professional background and the Influencer Monitor description were checked against my LinkedIn profile on 28 September 2026.

Keep outcome language precise: Influencer Monitor is ongoing work; ATLaS figures are evaluation results; GranitOS time saved is an estimate; Visol Timesheet has no numerical impact claim. Do not add real HR, salary, attendance, client, or business records to the public site.

## Deployment

The portfolio is hosted on Vercel at <https://rodrigofigueiredo.vercel.app/>. `next.config.ts` enables static export, and `vercel.json` configures the Next.js build, locked dependency installation, and trailing slashes. Vercel's Next.js adapter manages the build output automatically.

The Vercel project `rodrigofigueiredo` is connected to the personal GitHub repository `rodrigogfigueiredo/portfolio`, with `main` as the production branch. Vercel builds and publishes production updates from that branch and provides preview deployments for pull requests. No environment variables are needed.

Build and inspect the site before publishing changes. `.vercel/` contains local project links and is excluded from Git. `.openai/hosting.json` records the previous ChatGPT Sites deployment, which redirects visitors to Vercel using a browser script while preserving the path, query, and fragment. The redirect requires JavaScript; the old pages remain readable without it.
