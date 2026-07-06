import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import usePageMeta from "../lib/usePageMeta.js";

export default function NotFound() {
  usePageMeta(
    "Page Not Found | Elmac Industrial",
    "That page doesn't exist. Head back to Elmac Industrial's home page, services or contact — or call 1800 4 ELMAC."
  );

  return (
    <section className="bg-ink py-[clamp(72px,12vw,140px)] text-white">
      <div className="wrap max-w-[640px]">
        <Reveal>
          <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#e8730c]">
            ▲ 404 — Page not found
          </span>
          <h1 className="display-wide balance mt-4 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold uppercase leading-[1.1] tracking-[-0.01em]">
            This page doesn't exist.
          </h1>
          <p className="mt-4 max-w-[48ch] text-[#C6CFD6]">
            The address may have been mistyped, or the page has moved. Everything on the site is reachable from
            here:
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" className="inline-flex items-center rounded-lg bg-accent px-5 py-3 text-[0.95rem] font-bold text-ink no-underline hover:bg-[#57bce8]">
              Home
            </Link>
            <Link to="/services" className="inline-flex items-center rounded-lg border border-white/[0.25] px-5 py-3 text-[0.95rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent">
              Services
            </Link>
            <Link to="/contact" className="inline-flex items-center rounded-lg border border-white/[0.25] px-5 py-3 text-[0.95rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent">
              Contact
            </Link>
            <a href="tel:1800435622" className="inline-flex items-center rounded-lg border border-white/[0.25] px-5 py-3 text-[0.95rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent">
              Call 1800 4 ELMAC
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
