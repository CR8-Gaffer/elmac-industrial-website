# Elmac Cleaning Services — website

Three-page marketing site (Home / Services / Contact). React 19 + Vite +
Tailwind v4 + [Motion](https://motion.dev). Deployed to GitHub Pages via the
workflow in `.github/workflows/deploy.yml` on every push to `main`.

## Editing
- Copy lives in `src/views/*.jsx` — service descriptions in `Services.jsx`.
- Imagery in `public/assets/` (Higgsfield-generated concept imagery; swap in
  real job photography with the same filenames).
- Before/after sliders (`src/components/BeforeAfter.jsx`) take `before` and
  `after` image URLs — the before panes are painted placeholders until real
  job photos are supplied.

## Local dev
```bash
npm install
npm run dev      # dev server
npm run build    # production build → dist/
```

## Notes
- Router is HashRouter for zero-config GitHub Pages hosting; switch to
  BrowserRouter + 404 fallback when a custom domain is attached.
- Contact form opens the visitor's mail client (mailto). Swap in a form
  endpoint (e.g. re-point the submit handler) before heavy promotion.
- Partner hero slides are placeholders pending approved Crows / 36ers /
  Adelaide Oval partnership photography.
