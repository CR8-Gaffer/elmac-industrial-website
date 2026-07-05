import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "../components/Reveal.jsx";
import SpecBlock from "../components/SpecBlock.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import DimensionDivider from "../components/DimensionDivider.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import { SERVICE_CARDS } from "../data/services-ind.js";

const A = (f) => `${import.meta.env.BASE_URL}assets/${f}`;

const OBSERVATIONS = [
  "The most common defect our maintenance side flags is a missing access panel — installed once, it costs a hundred dollars; absent, it costs every single service for the life of the system.",
  "We regularly meet exhaust fans that cannot be safely opened by the people paid to clean them. Someone chose that location on installation day.",
  "Systems that pass certification can still be miserable to own. Compliance is the floor — serviceability is the difference you live with.",
];

const PROBLEMS = [
  "Poor or missing duct access",
  "Weak airflow and smoky cooklines",
  "Leaking ductwork and grease migration",
  "Noisy or underperforming fans",
  "Unserviceable runs and dead legs",
  "Compliance issues built in by design",
];

const PATHWAYS = [
  ["Lease-Ready Compliance Works", "Smaller venues, new operators, lease requirements. Fit-for-purpose build, essential access, compliant airflow — honest, staged and buildable."],
  ["Performance & Access Upgrade", "For kitchens living with airflow, noise, grease or access pain. Targeted interventions, ranked by effect per dollar."],
  ["Long-Life System Fitout", "High-volume kitchens, hotels, groups, major fitouts. Heavier gauge, full access provisioning, low-noise fans, decade horizon."],
];

const PROCESS = [
  ["Inspect", "Site, services, structure, access — measured, not assumed."],
  ["Scope", "Fixed scope in writing; exclusions named plainly."],
  ["Recommend", "The pathway your site actually needs — including the cheaper one."],
  ["Install / Defit", "Licensed trades, contained work, sites left operational."],
  ["Test", "Airflow verified, commissioning completed."],
  ["Document", "As-installed drawings, certificates, the service cycle handed over."],
];

export default function Home() {
  usePageMeta(
    "Elmac Industrial — Kitchen Exhaust Installation, Defit & Upgrade Specialists, Adelaide",
    "Dedicated commercial kitchen exhaust system specialists: installation, defit, canopy installation, fan replacement, ductwork and access upgrades, system remediation — installed with maintenance in mind. SA."
  );
  const reduce = useReducedMotion();

  return (
    <>
      {/* 1 · HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img src={A("svc-install.jpg")} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,24,28,0.95)_0%,rgba(20,24,28,0.78)_55%,rgba(20,24,28,0.5)_100%)]" />
        <div className="wrap relative py-[clamp(56px,10vw,120px)]">
          <motion.span
            className="eyebrow eyebrow--accent"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Elmac Industrial — kitchen exhaust specialists
          </motion.span>
          <motion.h1
            className="display-wide balance mt-4 max-w-[17ch] text-[clamp(2rem,4.8vw,3.6rem)] font-extrabold uppercase leading-[1.06] tracking-[-0.01em]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            Kitchen exhaust systems installed with <span className="text-accent">maintenance in mind</span>.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-[52ch] text-[clamp(1rem,1.5vw,1.14rem)] text-[#C6CFD6]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
          >
            Install, defit, replacement and upgrade specialists for commercial kitchen exhaust systems — South
            Australia. This is all we do, and we design it for the day after handover.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <MagneticButton to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]">
              Request a site inspection
            </MagneticButton>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-5.5 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent">
              View services
            </Link>
          </motion.div>
          <SpecBlock
            dark
            className="mt-9 max-w-[720px]"
            items={[
              ["Licence", "PGE342023"],
              ["Standards", "AS1668 & AS1668.2"],
              ["Scope", "Install · defit · upgrade"],
              ["Region", "South Australia"],
            ]}
          />
        </div>
      </section>

      {/* 2 · SPECIALIST STATEMENT */}
      <section className="border-b border-steel-200 bg-white py-[clamp(48px,7vw,88px)]">
        <div className="wrap grid items-center gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="eyebrow">The specialist difference</span>
            <h2 className="balance mt-3.5 max-w-[24ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              For most installers, kitchen exhaust is a sideline. For us, it's the whole company.
            </h2>
            <p className="mt-4 max-w-[54ch] text-[1.02rem] text-steel-600">
              HVAC contractors, fabricators and shopfitters install exhaust systems between other jobs. Elmac
              Industrial does one thing: commercial kitchen exhaust — designed, manufactured, installed, removed and
              upgraded by people who work on these systems every week.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200">
              {[
                ["KES only", "One system type. Every job. No sidelines."],
                ["Full scope", "Design → manufacture → install → commission, under one licence."],
                ["Lifecycle view", "From first fitout to defit — we work every stage of the system's life."],
              ].map(([t, d], i) => (
                <div key={t} className="flex items-start gap-3.5 bg-paper px-5 py-4">
                  <span className="font-mono text-[0.7rem] font-bold text-accent-deep">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="text-[0.96rem] font-extrabold text-ink">{t}</div>
                    <div className="mt-0.5 text-[0.86rem] text-steel-600">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 · MAINTENANCE-INFORMED ADVANTAGE */}
      <section className="blueprint py-[clamp(52px,8vw,96px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Why it's different here</span>
            <h2 className="balance mt-3.5 max-w-[24ch] text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold leading-[1.12] tracking-[-0.02em]">
              "Most installers rarely see their systems again. <span className="text-accent-deep">Elmac does.</span>"
            </h2>
            <p className="mt-4 max-w-[56ch] text-[1.02rem] text-steel-600">
              Because the wider Elmac team maintains and cleans kitchen exhaust systems long after installation, we
              know exactly which details matter once the kitchen is operating — and which shortcuts invoice you
              slowly for a decade.
            </p>
            <Link to="/why-specialists" className="mt-4 inline-block font-bold text-accent-deep no-underline hover:underline">
              Why dedicated specialists matter →
            </Link>
            <DimensionDivider label="observations from the maintenance side" className="mt-8" />
          </Reveal>
          <div className="mt-2 grid gap-x-[clamp(32px,5vw,72px)] lg:grid-cols-3">
            {OBSERVATIONS.map((t, i) => (
              <Reveal key={i} delay={i * 0.06} className="h-full">
                <div className="h-full border-b border-steel-200 py-6 lg:border-b-0">
                  <span className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.16em] text-steel-400">
                    OBS.{String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2.5 text-[0.96rem] leading-relaxed text-steel-700">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · CORE SERVICES */}
      <section className="border-y border-steel-200 bg-white py-[clamp(52px,8vw,96px)]">
        <div className="wrap">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Services</span>
              <h2 className="balance mt-3.5 max-w-[24ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                Six ways we work on the same system.
              </h2>
            </div>
            <Link to="/services" className="font-semibold text-accent-deep no-underline hover:underline">
              All services →
            </Link>
          </Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CARDS.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 0.06}>
                <Link
                  to={s.live ? `/services/${s.slug}` : `/contact?service=${s.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-steel-200 bg-paper p-6 no-underline transition-colors hover:border-accent/60"
                >
                  <span className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-accent-deep">
                    SERVICE {s.n}
                  </span>
                  <h3 className="mt-3 text-[1.08rem] font-extrabold leading-snug text-ink">{s.t}</h3>
                  <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-steel-600">{s.b}</p>
                  <span className="mt-4 text-[0.85rem] font-bold text-accent-deep group-hover:underline">
                    {s.live ? "Full service detail →" : "Discuss this work →"}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · PATHWAYS */}
      <section className="py-[clamp(52px,8vw,96px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Pathways</span>
            <h2 className="balance mt-3.5 max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              A practical system still needs to be serviceable.
            </h2>
            <p className="mt-4 max-w-[56ch] text-[1.02rem] text-steel-600">
              We support three honest levels of build — and we'll tell you which one your site actually needs,
              including when it's the cheaper one. What never gets cut: access, duct sealing, fan sizing.
            </p>
            <Link to="/pathways" className="mt-4 inline-block font-bold text-accent-deep no-underline hover:underline">
              The full pathway guide →
            </Link>
          </Reveal>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {PATHWAYS.map(([t, b], i) => (
              <Reveal key={t} delay={i * 0.07}>
                <div className={`h-full rounded-xl border p-6 ${i === 2 ? "border-accent/[0.35] bg-accent/[0.05]" : "border-steel-200 bg-white"}`}>
                  <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-accent-deep">
                    Pathway {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[1.08rem] font-extrabold">{t}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-steel-600">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · PROBLEMS PREVENTED */}
      <section className="border-y border-steel-200 bg-white py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Prevented at installation</span>
            <h2 className="balance mt-3.5 max-w-[28ch] text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              The problems good installation quietly deletes.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((t, i) => (
              <Reveal key={t} delay={(i % 3) * 0.05}>
                <div className="flex items-start gap-3 rounded-lg border border-steel-200 bg-paper px-5 py-4">
                  <span className="mt-0.5 font-mono text-[0.8rem] font-bold text-[#b05c10]">▲</span>
                  <span className="text-[0.94rem] font-medium text-steel-700">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · PROCESS */}
      <section className="py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Install sequence</span>
            <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Inspect to document — six steps, no surprises.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map(([t, b], i) => (
              <Reveal key={t} delay={(i % 3) * 0.05}>
                <div className="h-full rounded-xl border border-steel-200 bg-white p-5">
                  <span className="font-mono text-[0.7rem] font-bold text-accent-deep">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-[1rem] font-extrabold">{t}</h3>
                  <p className="mt-1.5 text-[0.86rem] leading-relaxed text-steel-600">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8 · THE ELMAC RELATIONSHIP */}
      <section className="border-y border-steel-200 bg-white py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">One family, two disciplines</span>
            <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200 md:grid-cols-2">
              <div className="bg-paper p-7">
                <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-steel-400">
                  Elmac Cleaning Services
                </span>
                <h3 className="mt-2.5 text-[1.2rem] font-extrabold">Sees what fails.</h3>
                <p className="mt-2 text-[0.94rem] leading-relaxed text-steel-600">
                  Thirty years maintaining and cleaning kitchen exhaust systems across SA &amp; NT — including the
                  ones other people installed badly.
                </p>
                <a
                  href="https://cr8-gaffer.github.io/elmac-website/"
                  className="mt-4 inline-block text-[0.88rem] font-bold text-accent-deep no-underline hover:underline"
                >
                  Maintenance &amp; compliance cleaning →
                </a>
              </div>
              <div className="bg-white p-7">
                <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-accent-deep">
                  Elmac Industrial
                </span>
                <h3 className="mt-2.5 text-[1.2rem] font-extrabold">Builds systems to avoid those failures.</h3>
                <p className="mt-2 text-[0.94rem] leading-relaxed text-steel-600">
                  Our maintenance work shows us what poor installation creates. Elmac Industrial exists to build
                  systems that remain practical, serviceable and compliant after handover.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9 · CTA */}
      <section className="bg-ink py-[clamp(56px,9vw,100px)] text-white">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <h2 className="balance max-w-[26ch] text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              Planning an install, facing a defit, or living with a bad system?
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-[#AEB8C0]">
              Start with a site inspection. We measure, we scope, and we tell you what the site actually needs.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]">
              Request a site inspection
            </MagneticButton>
            <a href="tel:1800435622" className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-6 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent">
              1800 4 ELMAC
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
