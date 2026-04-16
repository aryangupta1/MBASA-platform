# MBASA — MBA Student Association

> The one-stop hub for student comms, connection, and opportunities.  
> Built to scale across cohorts and collaborate with other MBA bodies.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aryangupta1/MBASA-platform)

---

## About

**MBASA** (MBA Digital & Tech Student Association) is the central digital platform connecting the brightest minds of the future. This repository is the official public website — designed directly from Figma wireframes and populated with content from the MBASA brainstorming board.

**Live site:** [mbasa.vercel.app](https://mbasa.vercel.app)  
**GitHub:** [github.com/aryangupta1/MBASA-platform](https://github.com/aryangupta1/MBASA-platform)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Fonts | Libre Baskerville (headings) · Archivo (body) — Google Fonts |
| Icons | [Lucide React](https://lucide.dev) |
| Dark mode | [next-themes](https://github.com/pacocoursey/next-themes) |
| Deployment | [Vercel](https://vercel.com) |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, pillars, problems, promise |
| `/about` | Mission, values, what we do |
| `/events` | Upskilling, socialising, competitions |
| `/publications` | Journal, newsletters, opinion pieces |
| `/committee` | Executive team + org chart (grid / tree toggle) |
| `/partners` | Partnership tiers and sponsorship info |
| `/contact` | Contact form + social links |

---

## Design

- **Primary colour:** `#003152` (dark navy — from Figma)
- **Accent colour:** `#89cff0` (sky blue — from Figma)
- **Headings:** Libre Baskerville, SemiBold
- **Body:** Archivo, Regular / Light
- **Modes:** Light + Dark (system preference + manual toggle)

Assets (logo, hero image) are downloaded directly from the Figma file via the Figma REST API.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) ≥ 20 (use `nvm` — see `.nvmrc` or run `nvm use 20`)
- npm ≥ 9

### Install & run locally

```bash
# Clone the repo
git clone https://github.com/aryangupta1/MBASA-platform.git
cd MBASA-platform

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build   # builds and lints
npm run start   # runs the production build locally
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
mbasa-website/
├── public/
│   └── images/
│       ├── hero-bg.jpg          # Hero background (compressed from Figma)
│       ├── mbasa-logo.png       # White+sky logo (hero / dark mode nav)
│       └── mbasa-logo-nav.png   # Dark logo (light mode nav)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout — fonts, metadata, ThemeProvider
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Tailwind + custom variant (dark mode)
│   │   ├── not-found.tsx        # Custom 404
│   │   ├── about/
│   │   ├── committee/           # Org chart with grid/tree toggle
│   │   ├── contact/
│   │   ├── events/
│   │   ├── partners/
│   │   └── publications/
│   └── components/
│       ├── Navbar.tsx           # Responsive nav — light/dark Figma-accurate
│       ├── Footer.tsx
│       └── ThemeProvider.tsx    # next-themes wrapper
├── next.config.ts
├── tailwind.config (via postcss.config.mjs)
├── tsconfig.json
└── package.json
```

---

## Deploying to Vercel

1. Push to GitHub (already done)
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import `aryangupta1/MBASA-platform`
4. Set **Root Directory** to `mbasa-website`
5. Click **Deploy** — Vercel auto-detects Next.js

### Environment variables (optional)

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for Open Graph metadata | `https://mbasa.vercel.app` |

---

## Content Sources

All content is sourced directly from the MBASA Figma files:

- **Wireframe & design:** [Figma design file](https://www.figma.com/design/3zyllF7JkrrdYcH0oOlBe0/Untitled)
- **Content & strategy:** [MBASA Brainstorming board (FigJam)](https://www.figma.com/board/4k6QqVSW3v0PiJuBBtgUg3/MBASA-brain-storming)

---

## Key Features

- **Figma-accurate design** — colours, fonts, logo, and layout pulled directly from the Figma API
- **Light / Dark mode** — system preference + manual sun/moon toggle in the navbar
- **Interactive org chart** — Committee page toggles between a grid view and a collapsible tree view built from the exact FigJam connector map
- **Fully static** — all 8 routes are pre-rendered at build time (Next.js SSG)
- **Optimised images** — hero image compressed 93% (7.8 MB → 528 KB), served as AVIF/WebP via Vercel's image pipeline

---

## Contributing

This is a student-run project. To contribute:

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes following the existing patterns
4. Open a pull request

For committee members with direct access, push to `main` only after running `npm run build` locally.

---

## Licence

© 2025 MBASA — MBA Digital & Tech Student Association.  
All rights reserved. Not for redistribution without permission.
