import { useEffect, useState } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import Home from "./views/Home.jsx";
import Services from "./views/Services.jsx";
import ServiceDetailInd from "./views/ServiceDetailInd.jsx";
import Contact from "./views/Contact.jsx";
import MagneticButton from "./components/MagneticButton.jsx";
import StickyCta from "./components/StickyCta.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function Brand({ className = "" }) {
  // Typed wordmark until an Industrial lockup of the new mark exists —
  // the current logo's sub-line reads "Cleaning Services".
  return (
    <Link
      to="/"
      className={`flex items-baseline gap-0.5 font-extrabold tracking-wide text-white no-underline text-[1.22rem] ${className}`}
    >
      <span className="display-wide italic text-accent">ELMAC</span>
      <small className="ml-2 -translate-y-0.5 font-mono text-[0.54rem] font-semibold uppercase tracking-[0.22em] text-steel-400">
        Industrial
      </small>
    </Link>
  );
}

const navLink = ({ isActive }) =>
  `rounded-md px-3 py-2 text-[0.88rem] font-semibold tracking-[0.01em] transition-colors ${
    isActive
      ? "text-white after:mt-1 after:block after:h-0.5 after:rounded after:bg-accent"
      : "text-[#C9D0D6] hover:bg-white/5 hover:text-white"
  }`;

export default function App() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-md">
        <div className="wrap flex h-16 items-center gap-5">
          <Brand />
          <button
            className="ml-auto grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            ≡
          </button>
          <nav
            className={`${
              open
                ? "absolute left-0 right-0 top-16 flex flex-col gap-1 border-b border-white/10 bg-ink-2 p-3"
                : "hidden"
            } md:static md:ml-auto md:flex md:flex-row md:gap-0.5 md:border-0 md:bg-transparent md:p-0`}
          >
            <NavLink to="/" end className={navLink}>
              Home
            </NavLink>
            <NavLink to="/services" end className={navLink}>
              Services
            </NavLink>
            <NavLink to="/services/installation" className={navLink}>
              Installation
            </NavLink>
            <NavLink to="/services/defit" className={navLink}>
              Defit
            </NavLink>
            <NavLink to="/contact" className={navLink}>
              Contact
            </NavLink>
          </nav>
          <MagneticButton
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-[0.85rem] font-bold text-ink hover:bg-[#57bce8]"
          >
            Request an inspection
          </MagneticButton>
        </div>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetailInd />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <StickyCta />

      <footer className="border-t border-white/10 bg-ink-3 pb-8 pt-10 text-[0.84rem] text-steel-400">
        <div className="wrap grid gap-8 md:grid-cols-[1.2fr_0.9fr_1fr]">
          <div>
            <Brand className="text-base" />
            <p className="mt-3.5 max-w-[40ch] leading-relaxed">
              Dedicated commercial kitchen exhaust specialists — installation, defit, replacement and upgrade,
              designed for the day after handover. South Australia.
            </p>
            <p className="mt-3.5 font-mono text-[0.64rem] uppercase leading-relaxed tracking-[0.12em] text-steel-400">
              Part of the Elmac family —{" "}
              <a href="https://cr8-gaffer.github.io/elmac-website/" className="text-steel-300 underline-offset-2 hover:text-accent">
                Elmac Cleaning Services
              </a>{" "}
              maintains what we build.
            </p>
          </div>
          <div>
            <div className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-steel-400">Services</div>
            <div className="mt-3 grid gap-2">
              {[
                ["Kitchen exhaust installation", "/services/installation"],
                ["Kitchen exhaust defit", "/services/defit"],
                ["All services", "/services"],
                ["Request a site inspection", "/contact"],
              ].map(([t, to]) => (
                <Link key={to} to={to} className="text-[#B9C2CA] no-underline hover:text-accent">
                  {t}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-steel-400">Contact</div>
            <div className="mt-3 grid gap-2">
              <a href="tel:1800435622" className="text-[#B9C2CA] no-underline hover:text-accent">
                1800 4 ELMAC
              </a>
              <a href="mailto:benn@elmac.au" className="text-[#B9C2CA] no-underline hover:text-accent">
                benn@elmac.au
              </a>
              <span>30 Chapman Road, Hackham SA 5163</span>
            </div>
          </div>
        </div>
        <div className="wrap mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-6">
          <span>© {new Date().getFullYear()} Elmac Industrial · Proudly South Australian.</span>
          <span className="font-mono tracking-[0.08em]">PGE342023 · AS1668 · AS1668.2 · Rev. Jul 2026</span>
        </div>
      </footer>
    </div>
  );
}
