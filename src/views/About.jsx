import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import SpecBlock from "../components/SpecBlock.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import usePageMeta from "../lib/usePageMeta.js";

const HOW = [
  ["Inspect first", "Every quote starts on site with a tape measure, not a template."],
  ["Scope in writing", "Inclusions numbered, exclusions named plainly — nothing absorbed and skimped."],
  ["Build for service", "Access, sealing and sizing designed for the decades after handover."],
  ["Document the handover", "Drawings, certificates and the recommended service cycle, delivered with the keys."],
];

export default function About() {
  usePageMeta(
    "About Elmac Industrial — Kitchen Exhaust Specialists, SA",
    "Elmac Industrial is the dedicated kitchen exhaust installation, defit and upgrade arm of the Elmac family — specialists informed by decades of maintenance experience across South Australia."
  );

  return (
    <>
      <section className="bg-ink py-[clamp(52px,8vw,96px)] text-white">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow eyebrow--accent">About</span>
            <h1 className="display-wide balance mt-4 max-w-[20ch] text-[clamp(1.9rem,4.4vw,3.2rem)] font-extrabold uppercase leading-[1.08] tracking-[-0.01em]">
              One system type, done properly.
            </h1>
            <p className="mt-5 max-w-[56ch] text-[clamp(1rem,1.5vw,1.12rem)] text-[#C6CFD6]">
              Elmac Industrial is the dedicated installation, defit and upgrade arm for commercial kitchen exhaust
              systems within the Elmac family — a South Australian, family-owned operation with more than thirty
              years around these systems.
            </p>
            <SpecBlock
              dark
              className="mt-9 max-w-[680px]"
              items={[
                ["Base", "Hackham, South Australia"],
                ["Licence", "PGE342023"],
                ["Standards", "AS1668 & AS1668.2"],
                ["Family", "Elmac Cleaning Services"],
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(48px,7vw,88px)]">
        <div className="wrap grid items-start gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <span className="eyebrow">The family logic</span>
            <h2 className="balance mt-3.5 text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Cleaning Services sees what fails. Industrial builds systems to avoid those failures.
            </h2>
            <p className="mt-4 max-w-[54ch] text-[1.02rem] text-steel-600">
              Because the wider Elmac team maintains and cleans kitchen exhaust systems long after installation, we
              understand which details matter once the kitchen is operating. Our maintenance work shows us what poor
              installation creates — Elmac Industrial exists to build systems that remain practical, serviceable and
              compliant after handover.
            </p>
            <p className="mt-4 max-w-[54ch] text-[1.02rem] text-steel-600">
              The two companies stay in their lanes: they maintain, we build. What they share is the knowledge loop —
              and a family standard for documentation that both sides deliver without being asked.
            </p>
            <a
              href="https://cr8-gaffer.github.io/elmac-website/"
              className="mt-5 inline-block font-bold text-accent-deep no-underline hover:underline"
            >
              Elmac Cleaning Services — maintenance &amp; compliance →
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200">
              {HOW.map(([t, b], i) => (
                <div key={t} className="flex items-start gap-3.5 bg-white px-6 py-5">
                  <span className="font-mono text-[0.7rem] font-bold text-accent-deep">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[1rem] font-extrabold text-ink">{t}</h3>
                    <p className="mt-1 text-[0.9rem] leading-relaxed text-steel-600">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-[clamp(48px,7vw,88px)] text-white">
        <div className="wrap flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <h2 className="balance text-[clamp(1.5rem,2.8vw,2.1rem)] font-extrabold tracking-[-0.02em]">
              Talk to people who work on one system type, every day.
            </h2>
            <p className="mt-2 max-w-[52ch] text-[#AEB8C0]">Installs, defits, replacements and fixes — start with the inspection.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <MagneticButton to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3.5 text-[0.95rem] font-bold text-ink hover:bg-[#57bce8]">
              Request a site inspection
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
