import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import AccessNote from "../components/AccessNote.jsx";
import DuctlineDiagram from "../components/DuctlineDiagram.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import DimensionDivider from "../components/DimensionDivider.jsx";
import usePageMeta from "../lib/usePageMeta.js";

// Decision pathways, not rigid products — a trade-specific decision guide.
const PATHWAYS = [
  {
    id: "lease-ready",
    label: "Lease-Ready Compliance Works",
    core: "A practical system still needs to be serviceable.",
    who: "Smaller venues, new operators, tenancy handovers, make-good requirements, practical reopening needs.",
    triggers: "A lease clause, a landlord letter, a reopening date, a handover inspection.",
    looks: "The minimum work that genuinely satisfies the requirement — scoped clearly, staged sensibly, with limitations stated instead of hidden.",
    inclusions: "Right-sized canopy or repairs, essential access provisioning, sealed connections, licensed disconnections or terminations, handover documentation.",
    dontIgnore: "Access, sealing and sizing. Practical constraints are workable; invisible future problems are not.",
    when: [
      "You're opening, exiting or satisfying a lease requirement and need exhaust works that are fit-for-purpose without unnecessary extras.",
      "Typical situation: a first-time operator taking over a moderate-load kitchen; a tenancy exit with a make-good schedule; a venue that needs to trade next month, not next quarter.",
    ],
    assess: ["What the lease or landlord actually requires — in writing", "The real cooking load, not the previous tenant's", "Existing system condition: what's sound enough to keep", "Access and roof conditions that set the practical limits"],
    works: ["Fit-for-purpose canopy supply or rectification", "Essential access panels at the points that matter most", "Sealed duct connections and licensed service terminations", "Clear written scope with staging where cash flow needs it"],
    accessNote: "Saving money at install stage should not mean hiding the next maintenance problem inside the ceiling.",
    ignored: "The cheapest possible works, done blind, become the leaking joints and inaccessible runs that the next five years of cleaning reports keep flagging — and that make-good inspections keep failing.",
    next: ["Request a Free Site Inspection", "/contact"],
  },
  {
    id: "performance-access",
    label: "Performance & Access Upgrade",
    core: "A system can run and still be wrong.",
    who: "Venues with weak extraction, noisy or failed fans, poor access, leaking ductwork, repeated grease issues, systems that fight every clean.",
    triggers: "The kitchen smokes at peak. The fan gets louder every month. Every cleaning report flags the same section. The inspection didn't go well.",
    looks: "Why the system behaves the way it does — diagnosis before intervention, ranked by effect per dollar.",
    inclusions: "Access retrofits, fan replacement or relocation, duct sealing and correction, airflow and balance fixes.",
    dontIgnore: "The diagnosis. Treating symptoms in random order is how venues pay three times for one fault.",
    when: [
      "The kitchen operates, but the exhaust system generates ongoing friction: airflow, noise, odour, access, or the same defect flagged cycle after cycle.",
      "Typical situation: an established venue whose reports carry the same limitation lines every service; a fan on its third repair; extraction that was adequate until the menu changed.",
    ],
    assess: ["Airflow against the current cooking load", "Fan condition, placement and serviceability", "Ductwork sealing, fall and cleanable access", "What previous cleaning reports keep flagging — the misses tell the story"],
    works: ["Access doors where the grease path is currently unreachable", "Fan replacement sized and mounted for the next decade, not the last one", "Sealing, fall correction and duct modifications", "Staged programs where the budget needs the risk items first"],
    accessNote: "If technicians cannot access the grease path, the system cannot be maintained properly — no matter how good the clean is.",
    ignored: "Friction compounds: the skipped section accumulates fire load, the strained fan fails on a Friday night, and the odour complaint becomes a tenancy dispute. Running is not the same as right.",
    next: ["Review an existing system", "/contact?service=system-remediation"],
  },
  {
    id: "long-life",
    label: "Long-Life System Fitout",
    core: "Good installation should make the next five years easier, not just the opening week.",
    who: "High-volume kitchens, premium venues, hotels and groups, major refurbishments, operators planning beyond handover.",
    triggers: "A major fitout, a flagship site, a group standard being set, an operator who has owned a bad system before and refuses to again.",
    looks: "The system as a long-term asset: layout, access provisioning, component quality and documentation to match the venue's horizon.",
    inclusions: "Full access planning, capacity margin, low-noise plant where it matters, stronger documentation, layouts designed around the service cycle.",
    dontIgnore: "The same three as everyone — access, sealing, sizing. A long-life spec exceeds the fundamentals; it never substitutes for them.",
    when: [
      "The venue plans in years and volumes, and the cost that matters is total cost of ownership — every future clean, service and outage — not just the install quote.",
      "Typical situation: a hotel kitchen line, a group rolling a standard across venues, a high-volume operator whose last system taught them what unserviceable costs.",
    ],
    assess: ["Cooking line design and realistic peak load, with margin", "Full-route access planning — every bend, every panel, mapped before fabrication", "Fan strategy: capacity, acoustics, serviceability, controls", "Documentation needs: as-installed drawings, service cycle, group standards"],
    works: ["Heavier-gauge construction and integrated detailing where visible", "Access provisioning beyond minimums — built for fast, complete servicing", "Low-noise, service-friendly fan installations with proper isolation", "A handover pack the maintenance cycle can actually run on"],
    accessNote: "The best time to think about the first clean is before the system is installed.",
    ignored: "High-volume kitchens punish shortcuts fastest. A premium venue with a strained, unserviceable system pays for it in noise complaints, emergency callouts and cleans that never quite finish.",
    next: ["Discuss a fitout", "/contact?service=installation"],
  },
];

const MATRIX = [
  ["Best suited for", "Lease-driven works, smaller venues, handovers", "Operating venues with system friction", "High-volume and long-horizon venues"],
  ["Typical trigger", "Lease clause, reopening date, make-good", "Weak airflow, noise, repeated report findings", "Major fitout, group standard, flagship site"],
  ["Primary focus", "Fit-for-purpose compliance, clear scope", "Diagnosis, then targeted correction", "Serviceability and lifespan from day one"],
  ["Access planning", "Essential points covered", "Retrofitted where the misses are", "Full-route provisioning, mapped pre-fabrication"],
  ["Fan / duct considerations", "Sound, right-sized, sealed", "Replace or relocate what's failing, seal what leaks", "Capacity margin, acoustics, service-friendly mounts"],
  ["Documentation", "Scope + handover record", "Findings + works record", "Full as-installed pack + service cycle"],
  ["Future maintenance impact", "Serviceable within practical limits", "Repeat findings closed out", "Every future service faster, fuller, cheaper"],
  ["Best next step", "Site inspection", "System review", "Fitout discussion"],
];

const DECIDE = [
  ["Choose Lease-Ready Compliance Works if:", ["You're opening, exiting or satisfying lease requirements", "You need a practical system without unnecessary extras", "The venue has a moderate cooking load", "You need clear scope and sensible staging"], "lease-ready"],
  ["Choose Performance & Access Upgrade if:", ["Extraction feels weak, or the kitchen smokes at peak", "The fan is noisy or unreliable", "The system is difficult or unsafe to clean", "Previous reports keep flagging the same issue"], "performance-access"],
  ["Choose Long-Life System Fitout if:", ["The kitchen is high-volume", "The venue is part of a group or hotel", "You plan to hold the site long-term", "You want stronger access and serviceability from day one"], "long-life"],
];

export default function Pathways() {
  usePageMeta(
    "Kitchen Exhaust Pathways — Lease-Ready to Long-Life | Elmac Industrial",
    "A practical decision guide for commercial kitchen exhaust work: Lease-Ready Compliance Works, Performance & Access Upgrades, and Long-Life System Fitouts — matched to the venue, not just the quote."
  );

  return (
    <>
      {/* 1 · HERO */}
      <section className="relative isolate overflow-hidden bg-ink py-[clamp(52px,8vw,96px)] text-white">
        <img src={`${import.meta.env.BASE_URL}assets/ind-site-measure.jpg`} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,24,28,0.95)_0%,rgba(20,24,28,0.78)_55%,rgba(20,24,28,0.5)_100%)]" />
        <div className="wrap">
          <Reveal>
            <span className="eyebrow eyebrow--accent">Pathways</span>
            <h1 className="display-wide balance mt-4 max-w-[22ch] text-[clamp(1.9rem,4.4vw,3.2rem)] font-extrabold uppercase leading-[1.08] tracking-[-0.01em]">
              Choose the right kitchen exhaust pathway for the venue, not just the quote.
            </h1>
            <p className="mt-5 max-w-[58ch] text-[clamp(1rem,1.5vw,1.12rem)] text-[#C6CFD6]">
              Three levels of build, matched to the kitchen, the site and the maintenance cycle — and we'll tell
              you when the most practical option is the right one.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]">
                Request a Free Site Inspection
              </MagneticButton>
              <Link to="/contact?service=system-remediation" className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-5.5 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent">
                Review an existing system
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 · WHY PATHWAYS MATTER */}
      <section className="py-[clamp(48px,7vw,88px)]">
        <div className="wrap grid items-start gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <span className="eyebrow">Why pathways matter</span>
            <h2 className="balance mt-3.5 max-w-[24ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Not every venue needs the same level of work — and being oversold is as wasteful as underbuilding.
            </h2>
            <p className="mt-4 max-w-[54ch] text-[1.02rem] text-steel-600">
              Some venues need lease-ready compliance works. Some need to correct a system that runs but fights
              everyone who touches it. Some need a fitout designed for volume, access and the decade ahead. These are
              decision pathways, not fixed packages — the inspection tells us which one the site actually needs, and
              we'll say so even when it's the least of the three.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-xl border border-steel-200 bg-white p-6">
              <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-accent-deep">
                What the pathway is matched to
              </span>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
                {["Cooking load", "Lease requirements", "Budget reality", "Landlord expectations", "Site access", "Roof conditions", "Future maintenance", "Compliance expectations", "Operator plans"].map((t, i) => (
                  <div key={t} className="flex items-baseline gap-2.5 text-[0.92rem] font-medium text-steel-700">
                    <span className="font-mono text-[0.62rem] font-bold text-steel-400">{String(i + 1).padStart(2, "0")}</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="wrap mt-[clamp(28px,4vw,48px)]">
          <Reveal delay={0.12}>
            <DuctlineDiagram />
            <p className="mt-4 max-w-[60ch] text-[0.95rem] text-steel-600">
              Whatever the pathway, the system is judged against the same line: can every point on the
              grease path be reached, sealed and serviced? That question decides more of the next five
              years than the install price does.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3 · THREE PATHWAYS OVERVIEW */}
      <section className="border-y border-steel-200 bg-white py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The three pathways</span>
            <h2 className="balance mt-3.5 max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              What level of kitchen exhaust work do you actually need?
            </h2>
          </Reveal>
          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {PATHWAYS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.07}>
                <div className={`flex h-full flex-col rounded-xl border p-6 border-steel-200 bg-paper`}>
                  <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-accent-deep">
                    Pathway {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2.5 text-[1.15rem] font-extrabold leading-snug">{p.label}</h3>
                  <p className="mt-2 text-[0.9rem] font-semibold text-steel-700">{p.core}</p>
                  <div className="mt-4 grid gap-3 text-[0.88rem] leading-relaxed text-steel-600">
                    <p><strong className="font-bold text-ink">Suits:</strong> {p.who}</p>
                    <p><strong className="font-bold text-ink">Triggers:</strong> {p.triggers}</p>
                    <p><strong className="font-bold text-ink">We look at:</strong> {p.looks}</p>
                    <p><strong className="font-bold text-ink">Common inclusions:</strong> {p.inclusions}</p>
                    <p><strong className="font-bold text-ink">Don't ignore:</strong> {p.dontIgnore}</p>
                  </div>
                  <a href={`#${p.id}`} className="mt-5 text-[0.88rem] font-bold text-accent-deep no-underline hover:underline">
                    Full pathway detail ↓
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · DETAILED PATHWAY SECTIONS */}
      {PATHWAYS.map((p, i) => (
        <section key={p.id} id={p.id} className={`scroll-mt-24 py-[clamp(48px,7vw,88px)] ${i % 2 ? "border-y border-steel-200 bg-white" : ""}`}>
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">Pathway {String(i + 1).padStart(2, "0")} in detail</span>
              <h2 className="balance mt-3.5 max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                {p.label}
              </h2>
              <p className="mt-3 text-[1.05rem] font-bold text-accent-deep">{p.core}</p>
              <div className="mt-4 grid max-w-[68ch] gap-3 text-[1rem] leading-relaxed text-steel-600">
                {p.when.map((t, x) => (
                  <p key={x}>{t}</p>
                ))}
              </div>
            </Reveal>
            <div className="mt-8 grid items-start gap-[clamp(24px,4vw,48px)] lg:grid-cols-2">
              <Reveal>
                <span className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.16em] text-steel-400">What we assess</span>
                <div className="mt-3 grid gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200">
                  {p.assess.map((t, x) => (
                    <div key={t} className={`flex items-center gap-3 px-5 py-3.5 ${i % 2 ? "bg-paper" : "bg-white"}`}>
                      <span className="font-mono text-[0.68rem] font-bold text-accent-deep">{String(x + 1).padStart(2, "0")}</span>
                      <span className="text-[0.92rem] font-medium text-steel-700">{t}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <span className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.16em] text-steel-400">Common works</span>
                <div className="mt-3 grid gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200">
                  {p.works.map((t, x) => (
                    <div key={t} className={`flex items-center gap-3 px-5 py-3.5 ${i % 2 ? "bg-paper" : "bg-white"}`}>
                      <span className="font-mono text-[0.68rem] font-bold text-accent-deep">{String(x + 1).padStart(2, "0")}</span>
                      <span className="text-[0.92rem] font-medium text-steel-700">{t}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.08}>
              <div className="mt-6 grid items-start gap-4 lg:grid-cols-[1fr_1fr]">
                <AccessNote>{p.accessNote}</AccessNote>
                <div className="rounded-lg border border-steel-200 bg-white px-4.5 py-3.5">
                  <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-steel-400">If ignored</span>
                  <p className="mt-1.5 text-[0.94rem] leading-relaxed text-steel-700">{p.ignored}</p>
                </div>
              </div>
              <Link to={p.next[1]} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-[0.92rem] font-bold text-ink no-underline transition-colors hover:bg-[#57bce8]">
                {p.next[0]} →
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      {/* 5 · COMPARISON MATRIX */}
      <section className="py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Side by side</span>
            <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              The pathways compared.
            </h2>
            <p className="mt-3 max-w-[56ch] text-[0.98rem] text-steel-600">
              Decision pathways, not fixed packages — every scope is written for the site after inspection.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-7 overflow-x-auto rounded-xl border border-steel-200">
              <table className="w-full min-w-[760px] border-collapse bg-white text-left">
                <thead>
                  <tr className="border-b-2 border-ink bg-paper">
                    <th className="px-4 py-3.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-steel-400"></th>
                    {PATHWAYS.map((p) => (
                      <th key={p.id} className="px-4 py-3.5 text-[0.88rem] font-extrabold text-ink">{p.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MATRIX.map(([row, a, b, c], i) => (
                    <tr key={row} className={i % 2 ? "bg-paper/60" : "bg-white"}>
                      <td className="px-4 py-3 font-mono text-[0.64rem] font-bold uppercase tracking-[0.1em] text-steel-400">{row}</td>
                      {[a, b, c].map((v, x) => (
                        <td key={x} className="px-4 py-3 text-[0.86rem] leading-relaxed text-steel-700">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 · DECISION GUIDE */}
      <section className="border-y border-steel-200 bg-white py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Decision guide</span>
            <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Not sure which pathway fits?
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {DECIDE.map(([title, items, target], i) => (
              <Reveal key={target} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-xl border border-steel-200 bg-paper p-6">
                  <h3 className="text-[0.98rem] font-extrabold text-ink">{title}</h3>
                  <ul className="m-0 mt-3 grid flex-1 list-none gap-2 p-0">
                    {items.map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-[0.9rem] leading-relaxed text-steel-700">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <a href={`#${target}`} className="mt-4 text-[0.86rem] font-bold text-accent-deep no-underline hover:underline">
                    See this pathway ↑
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-[62ch] rounded-lg border-l-2 border-accent bg-accent/[0.06] px-4.5 py-3.5 text-[0.98rem] font-semibold text-ink">
              Still unsure? That's what the inspection is for — we'll recommend the sensible pathway, including when
              it's the least of the three.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7 · BUILT FROM WHAT MAINTENANCE TEACHES */}
      <section className="py-[clamp(44px,6vw,72px)]">
        <div className="wrap">
          <Reveal>
            <DimensionDivider label="the maintenance-informed advantage" />
            <div className="mx-auto mt-7 max-w-[68ch] text-center">
              <h2 className="balance text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold tracking-[-0.02em]">
                Built from what maintenance teaches.
              </h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-steel-600">
                The wider Elmac team sees what happens to kitchen exhaust systems after they've been operating for
                months and years. That experience is why these pathways weigh access, cleaning, airflow and future
                servicing — not just installation day. Most installers rarely see their systems again. Elmac does.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8 · CTA */}
      <section className="bg-ink py-[clamp(48px,7vw,88px)] text-white">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <h2 className="balance max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              The inspection decides the pathway — measured, not guessed.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]">
                Request a Free Site Inspection
              </MagneticButton>
              <a href="tel:1800435622" className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-6 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent">
                1800 4 ELMAC
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
