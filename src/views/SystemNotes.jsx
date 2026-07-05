import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Doctrine from "../components/Doctrine.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import { NOTES, SECTIONS } from "../data/systemnotes.js";

// Practical knowledge base — numbered sections, one real question per entry,
// answered by people who see these systems after installation.
export default function SystemNotes() {
  usePageMeta(
    "System Notes — Kitchen Exhaust Design, Access & Serviceability | Elmac Industrial",
    "A practical knowledge base on commercial kitchen exhaust systems: access doors, fan replacement decisions, serviceability, ductwork economics, tenancy exits and pathway choices — from specialists who see systems after installation."
  );

  const sections = Object.entries(SECTIONS)
    .map(([id, s]) => ({ id: Number(id), ...s, notes: NOTES.filter((n) => n.section === Number(id)) }))
    .filter((s) => s.notes.length);

  return (
    <>
      <section className="wrap pb-2 pt-[clamp(52px,8vw,96px)]">
        <Reveal>
          <span className="eyebrow">System Notes</span>
          <h1 className="display-wide balance mt-3.5 max-w-[24ch] text-[clamp(2rem,4.4vw,3.3rem)] font-extrabold uppercase tracking-[-0.01em]">
            What these systems teach you after handover.
          </h1>
          <p className="mt-4 max-w-[58ch] text-[1.08rem] text-steel-600">
            A working knowledge base, not a blog: one real question per entry, answered plainly by specialists who see
            kitchen exhaust systems long after the installers have left. It grows as the questions do.
          </p>
          <Doctrine n={28} />
        </Reveal>
      </section>

      <section className="wrap flex flex-col gap-[clamp(32px,5vw,56px)] pb-[clamp(60px,8vw,110px)] pt-10">
        {sections.map((s) => (
          <Reveal key={s.id}>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b-2 border-ink pb-3">
                <span className="font-mono text-[0.8rem] font-bold text-accent-deep">§{s.id}</span>
                <h2 className="text-[clamp(1.2rem,2.2vw,1.6rem)] font-extrabold tracking-[-0.015em]">{s.title}</h2>
                <span className="text-[0.88rem] text-steel-400">{s.blurb}</span>
              </div>
              <div className="mt-4 grid gap-3">
                {s.notes.map((n) => (
                  <Link
                    key={n.slug}
                    to={`/system-notes/${n.slug}`}
                    className={`group flex flex-wrap items-baseline gap-x-4 gap-y-1 rounded-xl border px-5 py-4 no-underline transition-colors ${
                      n.cornerstone
                        ? "border-accent/[0.4] bg-accent/[0.05] hover:border-accent"
                        : "border-steel-200 bg-white hover:border-accent/60"
                    }`}
                  >
                    <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent-deep">
                      {n.code}
                      {n.cornerstone && " ★"}
                    </span>
                    <span className="flex-1 basis-[280px] text-[1rem] font-bold text-ink group-hover:underline">{n.q}</span>
                    <span className="hidden text-[0.86rem] text-steel-400 md:inline">{n.verdict.slice(0, 60)}…</span>
                    <span className="font-bold text-accent-deep">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-steel-600">
          New entries as real questions arrive — sections open when their first entry does.
        </p>
      </section>

      <section className="bg-ink py-[clamp(48px,7vw,88px)] text-white">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <h2 className="balance max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              Got a system that raises questions these notes don't answer?
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-[#AEB8C0]">
              Bring them to an inspection — reading a real system beats reading the general case.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]">
                Request a site inspection
              </MagneticButton>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-6 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent">
                View services →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
