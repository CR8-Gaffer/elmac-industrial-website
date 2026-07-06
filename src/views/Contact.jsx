import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import track from "../lib/track.js";

const PROJECT_TYPES = [
  ["installation", "Kitchen exhaust installation"],
  ["defit", "Kitchen exhaust defit / removal"],
  ["canopy-installation", "Canopy installation"],
  ["fan-replacement", "Exhaust fan replacement"],
  ["ductwork-access-upgrades", "Ductwork & access upgrades"],
  ["system-remediation", "System remediation / fix existing"],
  ["not-sure", "Not sure — need an inspection"],
];

const STAGES = ["Operating venue", "Under fitout / construction", "Tenancy exit", "Planning / pre-lease"];
const ROLES = ["Venue owner / operator", "Builder / shopfitter", "Landlord / property agent", "Chef / kitchen manager", "Facilities manager", "Other"];
const TIMELINES = ["As soon as possible", "Within 2–4 weeks", "1–3 months", "Planning ahead"];
const SCOPES = ["Single item — fan, access panels or similar", "Partial system", "Full system", "Multi-site / group"];

const field =
  "w-full rounded-lg border border-white/[0.14] bg-white/5 px-3.5 py-3 text-[0.95rem] text-white placeholder-[#67727b] focus:border-accent focus:bg-accent/[0.08] focus:outline-none";
const label = "font-mono text-[0.66rem] uppercase tracking-[0.1em] text-[#93A0A9]";
const check = "h-4 w-4 shrink-0 accent-[#44c8f4]";

export default function Contact() {
  usePageMeta(
    "Request a Site Inspection | Elmac Industrial",
    "Request a site inspection for kitchen exhaust installation, defit, fan replacement, ductwork and access upgrades or system remediation — Adelaide and South Australia."
  );

  const [params] = useSearchParams();
  const preset = PROJECT_TYPES.find(([k]) => k === params.get("service"))?.[0] || "not-sure";
  const [project, setProject] = useState(preset);
  const [deadline, setDeadline] = useState(false);
  const [note, setNote] = useState("Submits via your email app — or copy the enquiry below after submitting.");
  const [composed, setComposed] = useState(null);
  const [copied, setCopied] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const g = (n) => e.target.elements[n]?.value ?? "";
    const scope = g("scope");
    const lines = [
      `Name: ${g("name")}`,
      `Business: ${g("business")}`,
      `Venue / site: ${g("venue")}`,
      `Site address: ${g("address")}`,
      `Email: ${g("email")}`,
      `Phone: ${g("phone")}`,
      `I am: ${g("role")}`,
      `Project type: ${PROJECT_TYPES.find(([k]) => k === project)?.[1]}`,
      `Approximate scope: ${scope || "not stated"}`,
      `Venue stage: ${g("stage")}`,
      `Timeline: ${g("timeline")}`,
      `Lease / project deadline: ${deadline ? g("deadlineDate") || "yes — date TBC" : "no"}`,
      `Plans available: ${e.target.elements.plans.checked ? "YES" : "no"}`,
      "",
      `Site, access & system notes: ${g("notes")}`,
    ];
    const scopeTag = scope ? `[${scope.split(" — ")[0]}] ` : "";
    const subject =
      (deadline ? "[DEADLINE] " : "") + scopeTag + "Site inspection request — " + (g("business") || g("venue") || g("name"));
    const body = lines.join("\n");
    track("enquiry_submit", { project, scope: scope || "not stated", deadline: String(deadline) });
    setComposed({ subject, body });
    setCopied(false);
    window.location.href = `mailto:benn@elmac.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNote("Opening your email app… nothing happened? Your enquiry is ready to copy below.");
  };

  const copyEnquiry = async () => {
    if (!composed) return;
    const text = `To: benn@elmac.au\nSubject: ${composed.subject}\n\n${composed.body}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      track("enquiry_copy", { fallback: "clipboard" });
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="bg-ink py-[clamp(52px,8vw,100px)] text-white">
      <div className="wrap grid gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <span className="eyebrow eyebrow--accent">Request a site inspection</span>
          <h1 className="display-wide balance mt-3.5 text-[clamp(1.9rem,3.8vw,2.8rem)] font-extrabold uppercase tracking-[-0.01em]">
            Tell us about the site — we'll come and measure.
          </h1>
          <p className="mt-4 max-w-[52ch] text-[#AEB8C0]">
            Installs, defits, replacements and fixes across South Australia. The inspection is where every good
            system starts — and where we tell you what the site actually needs.
          </p>

          <p className="mt-4 text-[0.95rem] text-[#AEB8C0]">
            Working to a deadline? Don't wait on a form —{" "}
            <a className="font-bold text-accent no-underline hover:underline" href="tel:1800435622" onClick={() => track("call_click", { from: "contact-intro" })}>
              call 1800 4 ELMAC (1800 435 622)
            </a>
            . Deadline work is prioritised.
          </p>

          {deadline && (
            <div className="mt-6 rounded-xl border border-[#E8730C]/60 bg-[#E8730C]/10 px-5 py-4">
              <p className="text-[0.95rem] font-bold text-[#F5A057]">
                Working to a lease or project deadline? Don't wait on a form —{" "}
                <a className="text-white underline" href="tel:1800435622">call 1800 4 ELMAC (1800 435 622)</a>. Deadline
                work is prioritised.
              </p>
            </div>
          )}

          <form className="mt-8 grid gap-4" onSubmit={submit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <label className={label} htmlFor="n">Name</label>
                <input id="n" name="name" required placeholder="Your name" className={field} />
              </div>
              <div className="grid gap-1.5">
                <label className={label} htmlFor="b">Business</label>
                <input id="b" name="business" placeholder="Company / venue group / builder" className={field} />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <label className={label} htmlFor="v">Venue / site name</label>
                <input id="v" name="venue" placeholder="Site this enquiry is for" className={field} />
              </div>
              <div className="grid gap-1.5">
                <label className={label} htmlFor="a">Site address</label>
                <input id="a" name="address" placeholder="Street, suburb" className={field} />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <label className={label} htmlFor="e">Email</label>
                <input id="e" name="email" type="email" required placeholder="you@company.com.au" className={field} />
              </div>
              <div className="grid gap-1.5">
                <label className={label} htmlFor="p">Phone</label>
                <input id="p" name="phone" required placeholder="04XX XXX XXX" className={field} />
              </div>
            </div>

            <fieldset className="grid gap-2.5 rounded-xl border border-white/[0.14] p-4.5">
              <legend className={`${label} px-1.5`}>Project type</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {PROJECT_TYPES.map(([k, t]) => (
                  <label key={k} className="flex cursor-pointer items-center gap-2.5 text-[0.9rem] text-[#DCE3E8]">
                    <input type="radio" name="ptype" className={check} checked={project === k} onChange={() => setProject(k)} />
                    {t}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <label className={label} htmlFor="st">Venue stage</label>
                <select id="st" name="stage" className={`${field} appearance-none`}>
                  {STAGES.map((s) => <option key={s} className="text-ink">{s}</option>)}
                </select>
              </div>
              <div className="grid gap-1.5">
                <label className={label} htmlFor="ro">I am</label>
                <select id="ro" name="role" className={`${field} appearance-none`}>
                  {ROLES.map((s) => <option key={s} className="text-ink">{s}</option>)}
                </select>
              </div>
              <div className="grid gap-1.5">
                <label className={label} htmlFor="tl">Timeline</label>
                <select id="tl" name="timeline" className={`${field} appearance-none`}>
                  {TIMELINES.map((s) => <option key={s} className="text-ink">{s}</option>)}
                </select>
              </div>
              <div className="grid gap-1.5">
                <label className={label} htmlFor="sc">Approximate scope</label>
                <select id="sc" name="scope" defaultValue="" className={`${field} appearance-none`}>
                  <option value="" className="text-ink">Not sure yet</option>
                  {SCOPES.map((s) => <option key={s} className="text-ink">{s}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <label className="flex cursor-pointer items-center gap-2.5 text-[0.9rem] text-[#DCE3E8]">
                <input type="checkbox" className={check} checked={deadline} onChange={(e) => setDeadline(e.target.checked)} />
                There's a lease / project deadline
              </label>
              <label className="flex cursor-pointer items-center gap-2.5 text-[0.9rem] text-[#DCE3E8]">
                <input type="checkbox" name="plans" className={check} />
                Plans / drawings are available
              </label>
            </div>
            {deadline && (
              <div className="grid max-w-[240px] gap-1.5">
                <label className={label} htmlFor="dd">Deadline date</label>
                <input id="dd" name="deadlineDate" type="date" className={field} />
              </div>
            )}

            <div className="grid gap-1.5">
              <label className={label} htmlFor="m">Site, access &amp; system notes</label>
              <textarea id="m" name="notes" rows="4" placeholder="Ceiling/roof access, existing system condition, cooking load, anything useful…" className={`${field} min-h-[100px] resize-y`} />
            </div>

            <button type="submit" className="mt-1 justify-self-start rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink transition-colors hover:bg-[#57bce8]">
              Request site inspection
            </button>
            <p className="font-mono text-[0.74rem] tracking-[0.02em] text-[#7b8791]">{note}</p>
            <p className="font-mono text-[0.7rem] tracking-[0.02em] text-[#67727b]">
              No email app on this machine? Submit anyway — your enquiry appears below with a copy button, ready to
              paste into webmail addressed to benn@elmac.au.
            </p>
            <p className="font-mono text-[0.7rem] tracking-[0.02em] text-[#67727b]">
              Have plans or photos? Attach them when your email opens — they speed up scoping considerably.
            </p>

            {composed && (
              <div className="rounded-xl border border-accent/[0.4] bg-accent/[0.06] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent">
                    Your enquiry — ready to paste
                  </span>
                  <button
                    type="button"
                    onClick={copyEnquiry}
                    className="rounded-md border border-accent/60 px-3.5 py-1.5 text-[0.82rem] font-bold text-accent transition-colors hover:bg-accent hover:text-ink"
                  >
                    {copied ? "Copied ✓" : "Copy enquiry"}
                  </button>
                </div>
                <p className="mt-2.5 text-[0.85rem] text-[#AEB8C0]">
                  If your email app didn't open, paste this into any email to{" "}
                  <a className="font-bold text-accent no-underline hover:underline" href="mailto:benn@elmac.au">benn@elmac.au</a>{" "}
                  — or call <a className="font-bold text-accent no-underline hover:underline" href="tel:1800435622">1800 4 ELMAC (1800 435 622)</a>.
                </p>
                <pre className="mt-3 max-h-[220px] overflow-auto whitespace-pre-wrap rounded-lg bg-ink-3/80 p-4 font-mono text-[0.76rem] leading-relaxed text-[#DCE3E8]">
{`Subject: ${composed.subject}\n\n${composed.body}`}
                </pre>
              </div>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.1} className="self-start overflow-hidden rounded-2xl border border-white/[0.12]">
          {[
            ["Phone", <a key="ph" className="text-accent no-underline hover:underline" href="tel:1800435622">1800 4 ELMAC (1800 435 622)</a>],
            ["Email", <a key="em" className="text-accent no-underline hover:underline" href="mailto:benn@elmac.au">benn@elmac.au</a>],
            ["Address", "30 Chapman Road, Hackham SA 5163"],
            ["Licence", <span key="li" className="font-mono text-[0.9rem]">PGE342023 · AS1668 &amp; AS1668.2</span>],
            ["Region", "South Australia"],
            [
              "What happens next",
              <ol key="wn" className="m-0 grid list-none gap-1.5 p-0 text-[0.9rem]">
                <li>1 · We acknowledge your enquiry</li>
                <li>2 · Site inspection — measured, not assumed</li>
                <li>3 · Written scope with exclusions named</li>
                <li>4 · Works programmed to your timeline</li>
              </ol>,
            ],
          ].map(([k, v]) => (
            <div key={k} className="border-b border-white/10 px-5.5 py-5 last:border-b-0">
              <div className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#7f8b94]">{k}</div>
              <div className="mt-1.5 text-[1.02rem] text-[#EAEFF2]">{v}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
