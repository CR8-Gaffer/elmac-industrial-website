# Elmac Industrial — website

Dedicated specialist site: commercial kitchen exhaust installation, defit, replacement and upgrade. South Australia.

- **Stack:** React 19 · Vite 6 · Tailwind v4 (`@tailwindcss/vite`) · Motion · self-hosted Archivo + IBM Plex Mono.
- **Routing:** BrowserRouter with real paths — the build script copies `index.html` into each route directory plus `404.html`, so GitHub Pages serves every URL 200. Routes: `/`, `/services`, `/services/installation`, `/services/defit`, `/contact`.
- **Base path:** `vite.config.js` → `base: "/elmac-industrial-website/"`. At elmacindustrial.com.au cutover: change to `"/"` and update sitemap/robots/OG URLs.
- **Design system:** graphite/stainless tokens; family cyan `#44C8F4` for actions only; safety orange `#E8730C` strictly for technical markers (AccessNote). Component kit shared with the sibling Elmac site; several components are staged for later phases and currently unused by design.
- **Deploy:** push to `main` → GitHub Actions builds and publishes to Pages (deploy retries once on transient Pages failures).
