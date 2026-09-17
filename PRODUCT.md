# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Potential employers** (recruiters, hiring managers, engineering teams): evaluating Aaron for software engineering roles. They need to quickly understand his skills, experience, and the quality of his work.
- **Tech community** (fellow developers, open-source collaborators): discovering Aaron's projects and technical interests. They need to explore his work and get in touch.

## Product Purpose

A personal developer portfolio that presents Aaron Justin Cayanan as a software engineer — showcasing projects, experience, skills, and providing contact channels. Success means a visitor understands his capabilities and can reach him within seconds of landing.

## Positioning

Software engineer with full-stack capabilities (frontend, backend, AI/ML integration, and robotics education). Bridges technical implementation with design thinking.

## Operating Context

Visitors arrive from job applications, LinkedIn, GitHub profiles, or direct referrals. The site is a single-page scroll with anchor navigation. Deployed via FTP to traditional web hosting.

## Capabilities and Constraints

- Single-page application with scroll-based section navigation
- React 18 + Vite 5 + Tailwind CSS 4
- All content data lives in `src/data.json` (personal info, tech stack, experience, education)
- No TypeScript (PropTypes for prop validation)
- No test framework configured
- FTP deployment via GitHub Actions on push to `master`
- `vite.config.js` uses `base: './'` for relative asset paths — must be preserved
- `react-router-dom` is installed but unused (anchor hash links for navigation)
- No mobile hamburger menu currently
- Several unused/legacy components exist in `src/cards/` and `src/components/`

## Brand Commitments

- Name: Aaron Justin Cayanan
- Location: San Diego, CA
- Identity: Software engineer (updated from "full-stack developer" in data.json)
- Voice: Professional, direct, no hype

## Evidence on Hand

- Profile photo: `src/assets/pfp.jpg`
- Technology icons: `public/` directory (frontend, backend, database, tools subdirectories)
- Social icons: `src/assets/` (email, GitHub, LinkedIn SVGs)
- Experience logos: mix of local assets and external CDN URLs (some may break)
- Portfolio data: `src/data.json`

## Product Principles

1. Content leads — the work speaks, not decorative chrome
2. Functional over flashy — every element earns its place
3. Fast to scan — key information visible without deep scrolling
4. Accessible on any device — responsive and keyboard-navigable
