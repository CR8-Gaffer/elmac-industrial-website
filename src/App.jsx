import { useEffect, useState } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import Home from "./views/Home.jsx";
import Services from "./views/Services.jsx";
import ServiceDetailInd from "./views/ServiceDetailInd.jsx";
import Contact from "./views/Contact.jsx";
import Pathways from "./views/Pathways.jsx";
import WhySpecialists from "./views/WhySpecialists.jsx";
import SystemNotes from "./views/SystemNotes.jsx";
import SystemNoteDetail from "./views/SystemNoteDetail.jsx";
import About from "./views/About.jsx";
import Privacy from "./views/Privacy.jsx";
import NotFound from "./views/NotFound.jsx";
import MagneticButton from "./components/MagneticButton.jsx";
import StickyCta from "./components/StickyCta.jsx";
import track from "./lib/track.js";

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
  `whitespace-nowrap rounded-md px-2.5 py-2 text-[0.88rem] font-semibold tracking-[0.01em] transition-colors ${
    isActive
      ? "text-white after:mt-1 after:block after:h-0.5 after:rounded after:bg-accent"
      : "text-[#C9D0D6] hover:bg-white/5 hover:text-white"
  }`;

export default function App() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  // Site-wide CTA + phone click events; label distinguishes which CTA fired.
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const label = (a.textContent || "").trim().slice(0, 60);
      const mobile = String(window.innerWidth < 768);
      if (href.startsWith("tel:")) track("phone_click", { label, mobile });
      else if (href.includes("/contact")) track("cta_click", { label, mobile });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-md">
        <div className="wrap flex h-16 items-center gap-3">
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
            <NavLink to="/pathways" className={navLink}>
              Pathways
            </NavLink>
            <NavLink to="/system-notes" className={navLink}>
              System Notes
            </NavLink>
            <NavLink to="/about" className={navLink}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLink}>
              Contact
            </NavLink>
            <div className="mt-2 grid gap-2 border-t border-white/10 pt-3 md:hidden">
              <Link
                to="/contact"
                className="rounded-lg bg-accent px-4 py-3 text-center text-[0.92rem] font-bold text-ink no-underline"
              >
                Request a Free Site Inspection
              </Link>
              <a
                href="tel:1800435622"
                className="rounded-lg border border-white/[0.25] px-4 py-3 text-center text-[0.92rem] font-bold text-white no-underline"
              >
                Call 1800 4 ELMAC (1800 435 622)
              </a>
            </div>
          </nav>
          <a
            href="tel:1800435622"
            className="hidden xl:inline-flex items-center whitespace-nowrap rounded-lg border border-white/[0.25] px-3.5 py-2.5 text-[0.85rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent"
          >
            1800 4 ELMAC
          </a>
          <MagneticButton
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-accent px-3 py-2.5 text-[0.82rem] font-bold text-ink hover:bg-[#57bce8] lg:px-4 lg:text-[0.85rem]"
          >
            <span className="xl:hidden">Free Site Inspection</span>
            <span className="hidden xl:inline">Request a Free Site Inspection</span>
          </MagneticButton>
        </div>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetailInd />} />
          <Route path="/pathways" element={<Pathways />} />
          <Route path="/why-specialists" element={<WhySpecialists />} />
          <Route path="/system-notes" element={<SystemNotes />} />
          <Route path="/system-notes/:slug" element={<SystemNoteDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <StickyCta />

      <footer className="border-t border-white/10 bg-ink-3 pb-8 pt-10 text-[0.84rem] text-steel-400">
        <div className="wrap grid gap-8 md:grid-cols-[1.15fr_0.75fr_1.1fr]">
          <div>
            <Brand className="text-base" />
            <p className="mt-3.5 max-w-[40ch] leading-relaxed">
              Dedicated commercial kitchen exhaust specialists — installation, defit, replacement and upgrade,
              designed for the day after handover. Adelaide &amp; South Australia.
            </p>
            <p className="mt-3 font-mono text-[0.7rem] tracking-[0.04em] text-steel-300">
              Elmac Industrial Services · ABN 19 526 766 573
            </p>
            <p className="mt-3.5 font-mono text-[0.64rem] uppercase leading-relaxed tracking-[0.12em] text-steel-400">
              Part of the Elmac family —{" "}
              <a
                href="https://cr8-gaffer.github.io/elmac-website/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel-300 underline-offset-2 hover:text-accent"
              >
                Elmac Cleaning Services
              </a>{" "}
              maintains what we build.
            </p>
          </div>
          <div>
            <div className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-steel-400">Explore</div>
            <div className="mt-3 grid gap-2">
              {[
                ["Services", "/services"],
                ["Pathways", "/pathways"],
                ["Why specialists matter", "/why-specialists"],
                ["System Notes", "/system-notes"],
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Privacy", "/privacy"],
              ].map(([t, to]) => (
                <Link key={to} to={to} className="text-[#B9C2CA] no-underline hover:text-accent">
                  {t}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-1 inline-block w-fit rounded-lg bg-accent px-4 py-2.5 text-[0.85rem] font-bold text-ink no-underline hover:bg-[#57bce8]"
              >
                Request a Free Site Inspection
              </Link>
            </div>
          </div>
          <div>
            <div className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-steel-400">Contact</div>
            <div className="mt-3 grid gap-2">
              <span className="font-bold text-white">Benn Cox</span>
              <span className="-mt-1.5 text-[0.8rem]">Managing Director — Elmac Industrial Services</span>
              <a href="tel:+61487000699" className="text-[#B9C2CA] no-underline hover:text-accent">
                +61 487 000 699
              </a>
              <a href="mailto:benn@elmacindustrial.com.au" className="text-[#B9C2CA] no-underline hover:text-accent">
                benn@elmacindustrial.com.au
              </a>
              <a href="tel:1800435622" className="text-[#B9C2CA] no-underline hover:text-accent">
                1800 4 ELMAC / 1800 435 622
              </a>
              <span className="text-[0.8rem]">24/7 phone availability for urgent site issues</span>
              <span>30 Chapman Road, Hackham SA 5163</span>
            </div>
          </div>
        </div>
        <div className="wrap mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-6">
          <span>© {new Date().getFullYear()} Elmac Industrial Services · ABN 19 526 766 573 · Proudly South Australian.</span>
          <span className="font-mono tracking-[0.08em]">PGE342023 · AS 1668.2 where applicable · Rev. Jul 2026</span>
        </div>
      </footer>
    </div>
  );
}
