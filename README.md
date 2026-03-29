# Algoryn Site

Marketing site for Algoryn Fabric, an open source ecosystem of infrastructure tools for Go teams. The current site presents the Algoryn positioning, the broader Fabric ecosystem, and highlights Pulse as the first available product.

The site is built as a static React application with Vite and deployed to GitHub Pages under `algoryn.io`.

## Overview

- Product focus: Algoryn Fabric and its ecosystem of focused infrastructure tools
- Current highlighted release: Pulse, described as load testing and chaos engineering in Go
- Deployment target: GitHub Pages
- Custom domain: `algoryn.io`

## Tech Stack

- React 18
- Vite 6
- TypeScript
- Tailwind CSS 4
- Motion for animation
- Lucide React for icons

## Project Structure

```text
.
├── .github/workflows/deploy.yml   # GitHub Pages build and deploy workflow
├── public/
│   ├── 404.html                   # SPA fallback for GitHub Pages
│   └── CNAME                      # Custom domain configuration
├── src/
│   ├── app/
│   │   ├── App.tsx                # Main landing page
│   │   └── components/            # Reusable UI and brand components
│   ├── imports/                   # Imported design assets
│   ├── main.tsx                   # App entry point
│   └── styles/                    # Global styles, fonts, theme, Tailwind
├── index.html
├── package.json
└── vite.config.ts
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

The production output is generated in `dist/`.

## Deployment

Deployment is handled through [`.github/workflows/deploy.yml`](/Users/josemanuel/github/algoryn-io/algoryn-site/.github/workflows/deploy.yml).

On every push to `main`, GitHub Actions:

1. Checks out the repository
2. Sets up Node.js 20
3. Installs dependencies with `npm install`
4. Builds the site with `npm run build`
5. Publishes the `dist/` output to GitHub Pages

The repository also includes:

- [`public/CNAME`](/Users/josemanuel/github/algoryn-io/algoryn-site/public/CNAME) to bind GitHub Pages to `algoryn.io`
- [`public/404.html`](/Users/josemanuel/github/algoryn-io/algoryn-site/public/404.html) to support SPA routing on GitHub Pages

## Content Notes

The site currently communicates:

- Algoryn as a Go-first, startup-oriented infrastructure tooling company
- Fabric as the umbrella ecosystem
- Pulse as the first public release
- A roadmap that references Relay, Beacon, Deploy, and Dev

If the messaging or product roadmap changes, update the copy in [`src/app/App.tsx`](/Users/josemanuel/github/algoryn-io/algoryn-site/src/app/App.tsx).

## Credits

See [`ATTRIBUTIONS.md`](/Users/josemanuel/github/algoryn-io/algoryn-site/ATTRIBUTIONS.md) for third-party attribution notes included with the project.
