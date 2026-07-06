// Post-build per-route head injection. The GitHub Pages SPA strategy copies
// dist/index.html into every route directory so deep links return 200 — this
// script then rewrites each copy's <title>, description, canonical and Open
// Graph tags, and appends route-appropriate JSON-LD (Service / FAQPage), so
// crawlers and social scrapers see per-route metadata without executing JS.
//
// DNS CUTOVER: flip SITE to "https://www.elmacindustrial.com.au" and BASE to ""
// in the same commit that changes vite.config.js base to "/".
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { SERVICE_PAGES } from "../src/data/services-ind.js";
import { NOTES } from "../src/data/systemnotes.js";

const SITE = "https://cr8-gaffer.github.io";
const BASE = "/elmac-industrial-website";
const ORIGIN = `${SITE}${BASE}`;

const ENTITY = {
  "@type": "LocalBusiness",
  name: "Elmac Industrial Services",
  identifier: "ABN 19 526 766 573",
  telephone: "+61-1800-435-622",
  email: "benn@elmacindustrial.com.au",
  address: { "@type": "PostalAddress", streetAddress: "30 Chapman Road", addressLocality: "Hackham", addressRegion: "SA", postalCode: "5163", addressCountry: "AU" },
  areaServed: ["Adelaide", "South Australia"],
};

const STATIC_ROUTES = {
  "": {
    title: "Commercial Kitchen Exhaust Installation Adelaide | Elmac Industrial",
    desc: "Commercial kitchen exhaust installation, defit, fan replacement, canopy installation, access upgrades and system remediation across Adelaide and South Australia. Installed with maintenance in mind.",
  },
  services: {
    title: "Commercial Kitchen Exhaust Services Adelaide | Elmac Industrial",
    desc: "Installation, defit, canopy installation, exhaust fan replacement, ductwork and access upgrades, system remediation — commercial kitchen exhaust across Adelaide and South Australia.",
  },
  pathways: {
    title: "Kitchen Exhaust Upgrade Options Adelaide — Compliance to Long-Life | Elmac Industrial",
    desc: "Three levels of commercial kitchen exhaust work: Lease-Ready Compliance Works, Performance & Access Upgrades and Long-Life System Fitouts — matched to the venue, not just the quote.",
  },
  "why-specialists": {
    title: "Why Dedicated Kitchen Exhaust Installers Matter | Elmac Industrial",
    desc: "Most companies install kitchen exhaust as a sideline. Elmac Industrial does only this — informed by the Elmac team's maintenance experience across Adelaide and South Australia.",
  },
  "system-notes": {
    title: "Kitchen Exhaust System Notes — Access, Fans, Serviceability | Elmac Industrial",
    desc: "A practical knowledge base on commercial kitchen exhaust systems: access doors, fan replacement decisions, serviceability, ductwork economics, tenancy exits and pathway choices.",
  },
  about: {
    title: "About Elmac Industrial Services — Kitchen Exhaust Specialists Adelaide",
    desc: "Elmac Industrial Services (ABN 19 526 766 573) is the dedicated kitchen exhaust installation, defit and upgrade arm of the Elmac family — Adelaide and South Australia.",
  },
  contact: {
    title: "Request a Free Site Inspection | Elmac Industrial",
    desc: "Free, no-obligation site inspections and quotations for commercial kitchen exhaust work across Adelaide and South Australia. Call 1800 4 ELMAC (1800 435 622) — 24/7 for urgent site issues.",
  },
  privacy: {
    title: "Privacy | Elmac Industrial Services",
    desc: "How Elmac Industrial Services collects, uses and retains enquiry information — plain English, no marketing lists, no selling of your details.",
  },
};

const routes = { ...STATIC_ROUTES };

for (const [slug, svc] of Object.entries(SERVICE_PAGES)) {
  routes[`services/${slug}`] = {
    title: svc.meta.title,
    desc: svc.meta.desc,
    jsonld: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: svc.title,
      serviceType: svc.meta.title.split("|")[0].trim(),
      description: svc.meta.desc,
      url: `${ORIGIN}/services/${slug}/`,
      provider: ENTITY,
      areaServed: ["Adelaide", "South Australia"],
    },
  };
}

for (const n of NOTES) {
  routes[`system-notes/${n.slug}`] = {
    title: `${n.q} | Elmac Industrial`,
    desc: n.meta,
    jsonld: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [{
        "@type": "Question",
        name: n.q,
        acceptedAnswer: { "@type": "Answer", text: n.verdict },
      }],
    },
  };
}

const esc = (s) => s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

function rewrite(html, { title, desc, jsonld }, url, { noindex = false } = {}) {
  // Function replacements throughout — string replacements treat $-sequences
  // specially, which would corrupt heads the day a title contains "$".
  html = html
    .replace(/<title>[^<]*<\/title>/, () => `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, (_, a, b) => `${a}${esc(desc)}${b}`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, (_, a, b) => `${a}${esc(title)}${b}`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, (_, a, b) => `${a}${esc(desc)}${b}`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, (_, a, b) => `${a}${url}${b}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, (_, a, b) => `${a}${esc(title)}${b}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, (_, a, b) => `${a}${esc(desc)}${b}`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, "");
  const extras = [`<link rel="canonical" href="${url}">`];
  if (noindex) extras.push(`<meta name="robots" content="noindex">`);
  if (jsonld) extras.push(`<script type="application/ld+json">${JSON.stringify(jsonld)}</script>`);
  return html.replace("</head>", () => `${extras.join("")}</head>`);
}

let done = 0;
for (const [route, meta] of Object.entries(routes)) {
  const file = route ? `dist/${route}/index.html` : "dist/index.html";
  if (!existsSync(file)) {
    console.error(`MISSING: ${file}`);
    process.exitCode = 1;
    continue;
  }
  const url = route ? `${ORIGIN}/${route}/` : `${ORIGIN}/`;
  writeFileSync(file, rewrite(readFileSync(file, "utf8"), meta, url));
  done++;
}

// 404 shell: correct title, noindexed, canonical pointing home.
if (existsSync("dist/404.html")) {
  writeFileSync(
    "dist/404.html",
    rewrite(readFileSync("dist/404.html", "utf8"),
      { title: "Page Not Found | Elmac Industrial", desc: "That page doesn't exist. Head back to Elmac Industrial's home page, services or contact — or call 1800 4 ELMAC." },
      `${ORIGIN}/`, { noindex: true })
  );
  done++;
}
console.log(`inject-heads: ${done} files rewritten`);
