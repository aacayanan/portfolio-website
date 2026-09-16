# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Aaron Justin Cayanan, built as a single-page React application with scroll-based section navigation. Deployed via FTP to traditional web hosting on push to `master`.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Production build (output: `./dist`)
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

No test framework is configured.

## Tech Stack

- **React 18.3** (functional components, hooks, PropTypes — no TypeScript)
- **Vite 5** with `@vitejs/plugin-react` (Babel)
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin (uses `@import "tailwindcss"` and `@theme` blocks)
- **react-router-dom 7.8** — listed as dependency but not currently used; navigation uses anchor hash links

## Architecture

**Single-page app with 4 scroll-animated sections:** Home → Experience → Skills → Projects. Each section uses IntersectionObserver for scroll-triggered `float-up` animations (defined in `App.jsx`).

**Component hierarchy:**
```
App.jsx
├── Navbar (fixed top, section links)
├── Home → HeroCard + RadialMenu
├── Experience → ExperienceCard/EducationCard (tab switcher)
│   ├── ExperienceCard → ExperienceContent (work timeline)
│   └── EducationCard → EducationContent (edu timeline)
├── Skills → TechCard (tech icons grid)
└── Projects (placeholder)
```

**Key files:**
- `src/data.json` — All portfolio content (personal info, tech stack, experience, education). Components import and render from this.
- `src/App.jsx` — Root component, IntersectionObserver setup, section layout
- `vite.config.js` — Uses `base: './'` for relative asset paths (required for FTP subdirectory deployment)

**Component pattern:** Cards (`src/cards/`) are container components that map over arrays to render Content components (`src/components/`). All styling is Tailwind utility classes.

## Deployment

CI/CD via GitHub Actions (`.github/workflows/deploy.yml`): push to `master` triggers `npm ci` → `vite build` → FTP upload of `./dist` using `airvzxf/ftp-deployment-action@v2.11.13`. Requires GitHub secrets: `FTP_SERVER`, `FTP_USER`, `FTP_PASSWORD`.

**Important:** `vite.config.js` sets `base: './'` — do not change this or the production site will break (blank screen from incorrect asset paths).

## Codebase Notes

- `data.json` is in `.gitignore` but exists in the repo (committed before the ignore rule was added). Editing it affects production content.
- `TechComponent.jsx`, `PortfolioCard.jsx`, `ContactCard.jsx`, and `AboutCard.jsx` exist in `src/` but are not currently imported anywhere — they are unused/legacy components.
- The IntersectionObserver pattern in `App.jsx` is duplicated 4 times with near-identical code. A custom `useScrollReveal` hook would reduce this duplication.
- `@tailwindcss/language-server` is listed as a runtime dependency but belongs in devDependencies.
- `EducationContent.jsx` declares its function as `ExperienceContent` (naming mismatch with file name).
