import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import usePageMeta from "../lib/usePageMeta.js";

const SECTIONS = [
  [
    "What we collect",
    "When you send an enquiry, we collect what you put in the form: your name, company or venue, role, email, phone number, site address or suburb, the type and approximate scope of work, venue stage, timeline or deadline, whether plans are available, and anything you write in the message field.",
  ],
  [
    "Why we collect it",
    "To respond to your enquiry, understand the site and the work, arrange a free, no-obligation site inspection where suitable, review plans you send through, and prepare a written proposal. Site access details are used only to plan and carry out the work.",
  ],
  [
    "Who receives it",
    "Enquiries go to Benn Cox, Managing Director of Elmac Industrial Services, and are shared only with the Elmac staff who need them to scope, schedule or perform the work.",
  ],
  [
    "How it's used",
    "Enquiry details are used for quoting, scheduling, performing the works and keeping normal business records — proposals, service records and completion documentation. We do not sell enquiry information, and we do not pass it to third parties for marketing.",
  ],
  [
    "How long we keep it",
    "Enquiry and job information is kept as a normal business record — long enough to handle your enquiry, honour any works and documentation that follow, and meet standard record-keeping obligations. If you'd like your enquiry details removed, ask and we'll do it unless a record must be retained.",
  ],
  [
    "Questions",
    "For anything about your information, contact Benn Cox at benn@elmacindustrial.com.au or call 1800 4 ELMAC (1800 435 622).",
  ],
];

export default function Privacy() {
  usePageMeta(
    "Privacy | Elmac Industrial Services",
    "How Elmac Industrial Services collects, uses and retains enquiry information — plain English, no marketing lists, no selling of your details."
  );

  return (
    <>
      <section className="bg-ink py-[clamp(44px,6vw,72px)] text-white">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow eyebrow--accent">Privacy</span>
            <h1 className="display-wide balance mt-4 max-w-[22ch] text-[clamp(1.7rem,3.6vw,2.6rem)] font-extrabold uppercase leading-[1.1] tracking-[-0.01em]">
              What happens to your enquiry details.
            </h1>
            <p className="mt-4 max-w-[56ch] text-[#C6CFD6]">
              Plain English: we use what you send us to scope and do the work. Nothing is sold, and nothing goes to
              marketing lists.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(44px,6vw,72px)]">
        <div className="wrap max-w-[820px]">
          {SECTIONS.map(([t, b], i) => (
            <Reveal key={t} delay={(i % 3) * 0.04}>
              <div className="border-b border-steel-200 py-6">
                <h2 className="flex items-baseline gap-3 text-[1.1rem] font-extrabold">
                  <span className="font-mono text-[0.68rem] font-bold text-accent-deep">{String(i + 1).padStart(2, "0")}</span>
                  {t}
                </h2>
                <p className="mt-2.5 text-[0.98rem] leading-relaxed text-steel-700">{b}</p>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <p className="mt-8 text-[0.9rem] text-steel-600">
              Elmac Industrial Services · ABN 19 526 766 573 · 30 Chapman Road, Hackham SA 5163
            </p>
            <Link to="/contact" className="mt-3 inline-block font-bold text-accent-deep no-underline hover:underline">
              Back to contact →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
