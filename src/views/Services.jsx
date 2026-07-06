import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import AccessNote from "../components/AccessNote.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import { SERVICE_CARDS } from "../data/services-ind.js";

export default function Services() {
  usePageMeta(
    "Kitchen Exhaust Services — Install, Defit, Upgrade | Elmac Industrial",
    "Six ways we work on commercial kitchen exhaust systems: installation, defit, canopy installation, exhaust fan replacement, ductwork and access upgrades, system remediation. Adelaide, SA."
  );

  return (
    <>
      <section className="wrap pb-2 pt-[clamp(52px,8vw,96px)]">
        <Reveal>
          <span className="eyebrow">Service capability</span>
          <h1 className="display-wide balance mt-3.5 max-w-[22ch] text-[clamp(2rem,4.4vw,3.3rem)] font-extrabold uppercase tracking-[-0.01em]">
            One system. Every stage of its life.
          </h1>
          <p className="mt-4 max-w-[58ch] text-[1.08rem] text-steel-600">
            Installation, defit, canopy, fan replacement, access upgrades and remediation across Adelaide and
            regional SA. Kitchens keep trading: works are staged around service, after-hours where the venue
            cannot stop. Every job runs the same discipline: inspect, scope in writing, build for serviceability,
            document the handover.
          </p>
          <AccessNote className="mt-6 max-w-[62ch]">
            Future cleaning access is considered during installation planning on every job — a system that cannot be
            maintained properly will eventually become a problem, usually an expensive one.
          </AccessNote>
        </Reveal>
      </section>

      <section className="wrap grid gap-4 pb-[clamp(60px,8vw,110px)] pt-9 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_CARDS.map((s, i) => (
          <Reveal key={s.n} delay={(i % 3) * 0.06}>
            <Link
              to={s.live ? `/services/${s.slug}` : `/contact?service=${s.slug}`}
              className={`group flex h-full flex-col rounded-xl border p-6 no-underline transition-colors ${
                s.live ? "border-accent/[0.35] bg-accent/[0.04] hover:border-accent" : "border-steel-200 bg-white hover:border-accent/60"
              }`}
            >
              <span className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-accent-deep">
                SERVICE {s.n}
              </span>
              <h2 className="mt-3 text-[1.12rem] font-extrabold leading-snug text-ink">{s.t}</h2>
              <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-steel-600">{s.b}</p>
              <span className="mt-4 text-[0.86rem] font-bold text-accent-deep group-hover:underline">
                {s.live ? "Full service detail →" : "Discuss this work →"}
              </span>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="border-t border-steel-200 bg-white py-[clamp(44px,6vw,72px)]">
        <div className="wrap flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <h2 className="balance max-w-[28ch] text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold tracking-[-0.02em]">
              Not sure which service your site needs?
            </h2>
            <p className="mt-2 max-w-[54ch] text-steel-600">
              That's what the inspection is for. We measure, we look at access and airflow, and we recommend the
              pathway — including when the most practical option is the right one.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3.5 text-[0.95rem] font-bold text-ink no-underline transition-colors hover:bg-[#57bce8]"
            >
              Request a Free Site Inspection
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
