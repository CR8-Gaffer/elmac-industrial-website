import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import DimensionDivider from "../components/DimensionDivider.jsx";
import usePageMeta from "../lib/usePageMeta.js";

const CHANGES = [
  ["Access panels placed off the cleaning scope", "A generalist follows the drawing. A specialist knows where the scraper needs to reach — because their maintenance side documents every miss."],
  ["Fans mounted for the person who opens them", "Hinged bases and service clearance aren't in most install quotes. They're the difference between a fan that lasts and one that dies loaded."],
  ["Filter banks specced for real exchange cycles", "Standard sizes, hand access, safe height — details invisible at handover that decide whether the weekly cycle actually happens."],
  ["Geometry the cleaner doesn't fight", "Fall that drains, seams that seal, bends that can be worked. Systems shaped by what happens at service number twenty-six."],
];

const AUDIENCES = [
  ["Builders & shopfitters", "One trade, one licence line, certification paperwork on time, and a subcontractor who doesn't create defects your handover inherits."],
  ["Chefs & operators", "A kitchen that captures at peak service, filters your staff can actually handle, and a system that doesn't fight the people maintaining it."],
  ["Landlords & agents", "Installs that protect the asset, defits that make good properly, and documentation at both ends of the tenancy."],
];

export default function WhySpecialists() {
  usePageMeta(
    "Why Dedicated Kitchen Exhaust Specialists Matter | Elmac Industrial",
    "Most companies that install kitchen exhaust systems do it as a sideline. Elmac Industrial does only this — and its sibling company maintains these systems for decades. Why that changes the installation."
  );

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink py-[clamp(52px,8vw,96px)] text-white">
        <img src={`${import.meta.env.BASE_URL}assets/ind-fan-mount.jpg`} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,24,28,0.95)_0%,rgba(20,24,28,0.78)_55%,rgba(20,24,28,0.5)_100%)]" />
        <div className="wrap">
          <Reveal>
            <span className="eyebrow eyebrow--accent">Why specialists matter</span>
            <h1 className="display-wide balance mt-4 max-w-[20ch] text-[clamp(1.9rem,4.4vw,3.2rem)] font-extrabold uppercase leading-[1.08] tracking-[-0.01em]">
              Kitchen exhaust is usually somebody's side job.
            </h1>
            <p className="mt-5 max-w-[56ch] text-[clamp(1rem,1.5vw,1.12rem)] text-[#C6CFD6]">
              HVAC contractors, stainless fabricators, shopfitters, builders — most companies that install these
              systems do other things for a living, and it shows a few years later. Elmac Industrial exists because
              this system deserves a company of its own.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The feedback loop nobody else has</span>
            <h2 className="balance mt-3.5 max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              "Most installers rarely see their systems again. Elmac does."
            </h2>
            <p className="mt-4 max-w-[58ch] text-[1.02rem] text-steel-600">
              An installer who never returns has no way to learn what their choices cost. Because the wider Elmac
              team cleans and maintains kitchen exhaust systems for a living, every awkward fan, missing panel and
              uncleanable bend they meet becomes installation knowledge here. The maintenance side is our quality
              feedback loop — decades deep, running weekly.
            </p>
            <DimensionDivider label="what that loop changes on install day" className="mt-8" />
          </Reveal>
          <div className="mt-2 grid gap-x-[clamp(32px,5vw,72px)] md:grid-cols-2">
            {CHANGES.map(([t, b], i) => (
              <Reveal key={t} delay={(i % 2) * 0.05} className="h-full">
                <div className="h-full border-b border-steel-200 py-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[1.02rem] font-extrabold text-ink">{t}</h3>
                      <p className="mt-1.5 text-[0.92rem] leading-relaxed text-steel-600">{b}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-steel-200 bg-white py-[clamp(48px,7vw,88px)]">
        <div className="wrap grid items-start gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <span className="eyebrow">Scope discipline</span>
            <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              What we deliberately don't do.
            </h2>
            <p className="mt-4 max-w-[50ch] text-[1rem] text-steel-600">
              No general HVAC. No shopfitting. No general fabrication contracts. No mechanical services catalogues.
              Narrow scope isn't a limitation — it's the reason every crew, tool and drawing here is tuned to one
              system type. When a job needs trades outside our lane, we say so and work beside them.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200">
              {AUDIENCES.map(([t, b]) => (
                <div key={t} className="bg-paper px-6 py-5">
                  <h3 className="text-[1rem] font-extrabold text-ink">{t}</h3>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-steel-600">{b}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-[clamp(52px,8vw,96px)] text-white">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <h2 className="balance max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              One system type. Every stage of its life. That's the whole pitch.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]">
                Request a site inspection
              </MagneticButton>
              <Link to="/system-notes" className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-6 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent">
                Read the System Notes →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
