# danielnswz.github.io

Personal portfolio for **Daniel Klie** — Software Engineer (Full-Stack · Distributed Systems · Cloud).
Live at **https://danielnswz.github.io**.

## Stack
- **Vite + React 18 + TypeScript**
- **Tailwind CSS** with dark-mode (class) theming — dark default, light toggle persisted to `localStorage`.
- Fonts: Plus Jakarta Sans (UI) + JetBrains Mono (labels/code).
- Static SPA deployed via GitHub Pages with a GitHub Actions workflow.

## Getting started
```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build      # type-check + production build to /dist
npm run preview    # preview the built site
npm run typecheck  # strict TS check
```

## Google Analytics

Google Analytics 4 (GA4) is configured with Measurement ID **G-87K7JTQ90L** via the gtag.js snippet in `index.html`. Page views are tracked automatically. Custom events:

- **`contact_submit`** — fires when the Contact form is submitted.

To change the Measurement ID, edit the snippet in `index.html`.

## Project layout
```
src/
  components/   UI: Nav, Hero, About, Experience, Projects, Skills,
                Qualifications, Contact, Footer, ThemeToggle, icons
  data/        content.ts — centralized biographical data (drives all sections)
  hooks/       useTheme, useActiveSection (scroll-spy)
  App.tsx      section composition
  main.tsx     React root
  index.css    Tailwind layers + design tokens
```
To update any content (name, roles, projects, skills, links), edit **`src/data/content.ts`**.

## Deploy to GitHub Pages
1. Push to `main`.
2. The `.github/workflows/deploy.yml` action builds and publishes.
3. In repo Settings → Pages, choose **Source: GitHub Actions**.
4. Your site will be live at `https://<username>.github.io`. (For a `*.github.io` user-page repo, `base: "/"` in `vite.config.ts` is correct out of the box.)

## Notes
- All copy is derived from `CV-2026.tex` (April 2025 revision). Resume PDF is served from `public/CV-Daniel-Klie.pdf`.
- Respects `prefers-reduced-motion`.
- Fully keyboard-navigable; focus rings on all interactive elements.