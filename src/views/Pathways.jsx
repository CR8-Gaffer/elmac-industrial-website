import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import AccessNote from "../components/AccessNote.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import usePageMeta from "../lib/usePageMeta.js";

const PATHWAYS = [
  {
    key: "practical",
    name: "Practical Compliance Setup",
    who: "Smaller venues, first-time operators, lease requirements, budget-sensitive projects.",
    solves: "Gets a kitchen capturing, compliant and fully serviceable without spending on finish it doesn't need.",
    finish: "Standard commercial gauge, standard-size consumables, essential access provisioning, right-sized fan. Neat, honest, built to be maintained.",
    protectBudget: "Finish level, acoustic refinements, integrated ceiling detailing, automation — none of these affect safety or serviceability.",
    neverCut: "Capture sizing against the actual cooking load, sealed joints, drainage fall, hand-safe filter access, a fan that can be opened.",
  },
  {
    key: "performance",
    name: "Performance Upgrade",
    who: "Operating venues living with airflow, noise, grease, odour or access pain — systems that technically run and still cost money.",
    solves: "Targeted interventions ranked by effect per dollar: access retrofits, fan upgrades, sealing and balance correction, capture fixes.",
    finish: "Keeps what's sound, upgrades what fails. The system afterwards should clean fully, run quieter, and stop generating the same complaints.",
    protectBudget: "Phasing — risk items first, comfort items scheduled across quarters. Diagnosis sets the order so every dollar lands on the right problem.",
    neverCut: "The diagnosis itself. Guessing which symptom to treat is how venues pay three times for one fault.",
  },
  {
    key: "premium",
    name: "Premium Long-Life System",
    who: "High-volume kitchens, hotels, group venues, major fitouts, sites planning in decades.",
    solves: "A system that loafs where others strain: capacity margin, low-noise plant, full access provisioning, finishes fit for open kitchens.",
    finish: "Heavier gauge, integrated detailing, upgraded filtration and acoustic treatment, documentation pack to match the asset's life.",
    protectBudget: "Honestly? Little needs protecting — but nothing here is decoration. Every premium dollar buys lifespan, capacity or serviceability.",
    neverCut: "Same three as everyone: access, sealing, sizing. Premium doesn't exempt a system from the fundamentals — it just exceeds them.",
  },
];

export default function Pathways() {
  usePageMeta(
    "Budget Pathways — Practical to Premium Kitchen Exhaust | Elmac Industrial",
    "Three honest levels of kitchen exhaust build: Practical Compliance Setup, Performance Upgrade and Premium Long-Life System — who each suits, where budget is protected, and what never gets cut."
  );
  const [active, setActive] = useState("practical");
  const p = PATHWAYS.find((x) => x.key === active);

  return (
    <>
      <section className="wrap pb-2 pt-[clamp(52px,8vw,96px)]">
        <Reveal>
          <span className="eyebrow">Budget pathways</span>
          <h1 className="display-wide balance mt-3.5 max-w-[24ch] text-[clamp(2rem,4.4vw,3.3rem)] font-extrabold uppercase tracking-[-0.01em]">
            A budget-friendly system still needs to be serviceable.
          </h1>
          <p className="mt-4 max-w-[58ch] text-[1.08rem] text-steel-600">
            Not cheap versus expensive — three honest levels of build, each with a legitimate place. The job of the
            inspection is telling you which one your site actually needs, including when it's the cheaper one.
          </p>
          <AccessNote label="The line that never moves" className="mt-6 max-w-[62ch]">
            Access, duct sealing and fan sizing are identical obligations at every tier. A quote that gets cheaper by
            touching any of those isn't a budget option — it's a future remediation project with a deposit.
          </AccessNote>
        </Reveal>
      </section>

      <section className="wrap pb-[clamp(60px,8vw,110px)] pt-9">
        <Reveal>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Pathway selector">
            {PATHWAYS.map((x, i) => (
              <button
                key={x.key}
                onClick={() => setActive(x.key)}
                className={`rounded-lg border px-4 py-2.5 text-[0.9rem] font-bold transition-colors ${
                  active === x.key
                    ? "border-accent bg-accent/10 text-accent-deep"
                    : "border-steel-200 bg-white text-steel-600 hover:border-steel-400"
                }`}
              >
                <span className="mr-2 font-mono text-[0.68rem]">{String(i + 1).padStart(2, "0")}</span>
                {x.name}
              </button>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-steel-200 bg-white">
            <div className="border-b border-steel-200 bg-paper px-6 py-4">
              <h2 className="text-[1.25rem] font-extrabold tracking-[-0.01em]">{p.name}</h2>
            </div>
            <div className="grid gap-px bg-steel-200 md:grid-cols-2">
              {[
                ["Who it suits", p.who],
                ["What it solves", p.solves],
                ["Level of finish & serviceability", p.finish],
                ["Where budget is protected", p.protectBudget],
              ].map(([k, v]) => (
                <div key={k} className="bg-white px-6 py-5">
                  <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-accent-deep">{k}</span>
                  <p className="mt-2 text-[0.94rem] leading-relaxed text-steel-700">{v}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-steel-200 bg-[#e8730c]/[0.06] px-6 py-5">
              <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-[#b05c10]">
                ▲ Where cutting becomes dangerous
              </span>
              <p className="mt-2 text-[0.94rem] font-semibold leading-relaxed text-steel-700">{p.neverCut}</p>
            </div>
          </div>
          <p className="mt-7 max-w-[62ch] rounded-lg border-l-2 border-accent bg-accent/[0.06] px-4.5 py-3.5 text-[0.98rem] font-semibold text-ink">
            We'll tell you which pathway your site actually needs — including when it's the cheaper one.
          </p>
        </Reveal>
      </section>

      <section className="bg-ink py-[clamp(48px,7vw,88px)] text-white">
        <div className="wrap flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <h2 className="balance text-[clamp(1.5rem,2.8vw,2.1rem)] font-extrabold tracking-[-0.02em]">
              Which pathway fits your site?
            </h2>
            <p className="mt-2 max-w-[52ch] text-[#AEB8C0]">The inspection answers that in an hour — measured, not guessed.</p>
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
