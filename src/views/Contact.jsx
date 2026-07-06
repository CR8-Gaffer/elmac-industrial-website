import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import TrustBlock from "../components/TrustBlock.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import track from "../lib/track.js";

// FormSubmit.co — account-less static form relay to benn@elmacindustrial.com.au.
// The first submission triggers a one-click activation email to that inbox;
// until it's activated (or if the relay ever errors) the mailto + copy fallback
// carries the enquiry, so nothing is ever lost. To move to Formspree/Basin
// later, replace this URL only — payload and states already fit.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/benn@elmacindustrial.com.au";
const EMAIL = "benn@elmacindustrial.com.au";

const ENQUIRY_TYPES = [
  ["installation", "Installation"],
  ["defit", "Defit"],
  ["fan-replacement", "Fan replacement"],
  ["canopy-installation", "Canopy installation"],
  ["ductwork-access-upgrades", "Ductwork / access upgrade"],
  ["system-remediation", "System remediation"],
  ["tender", "Tender / drawings review"],
  ["urgent", "Urgent issue"],
  ["other", "Other"],
];
// Legacy / soft-intent params map to a neutral type, never a wrong one.
const PARAM_ALIASES = { "not-sure": "other" };

const STAGES = ["Operating venue", "Under fitout / construction", "Tenancy exit", "Planning / pre-lease"];
const ROLES = ["Venue owner / operator", "Builder / shopfitter", "Landlord / property agent", "Chef / kitchen manager", "Facilities manager", "Other"];
const TIMELINES = ["As soon as possible", "Within 2–4 weeks", "1–3 months", "Planning ahead"];
const SCOPES = [
  "Access door / small upgrade",
  "Exhaust fan replacement",
  "Canopy or ductwork works",
  "Defit / make-good",
  "Full system install or fitout",
  "System remediation",
  "Multiple sites / group enquiry",
  "Not sure yet",
];

const field =
  "w-full rounded-lg border border-white/[0.14] bg-white/5 px-3.5 py-3 text-[0.95rem] text-white placeholder-[#67727b] focus:border-accent focus:bg-accent/[0.08] focus:outline-none";
const label = "font-mono text-[0.66rem] uppercase tracking-[0.1em] text-[#93A0A9]";
const check = "h-4 w-4 shrink-0 accent-[#44c8f4]";

export default function Contact() {
  usePageMeta(
    "Request a Free Site Inspection | Elmac Industrial",
    "Free, no-obligation site inspections and quotations for commercial kitchen exhaust work across Adelaide and South Australia — installation, defit, fan replacement, access upgrades and remediation."
  );

  const [params] = useSearchParams();
  const rawParam = params.get("service");
  const preset =
    ENQUIRY_TYPES.find(([k]) => k === (PARAM_ALIASES[rawParam] || rawParam))?.[0] || "other";
  const [enquiry, setEnquiry] = useState(preset);
  const [deadline, setDeadline] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | fallback
  const [composed, setComposed] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (rawParam) track("preselect_used", { service: rawParam });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const g = (n) => e.target.elements[n]?.value ?? "";
    const enquiryLabel = ENQUIRY_TYPES.find(([k]) => k === enquiry)?.[1] || "Other";
    const scope = g("scope");
    const fields = {
      name: g("name"),
      company: g("business"),
      role: g("role"),
      email: g("email"),
      phone: g("phone"),
      site: g("venue"),
      address: g("address"),
      enquiry_type: enquiryLabel,
      scope: scope || "Not sure yet",
      stage: g("stage"),
      timeline: g("timeline"),
      deadline: deadline ? g("deadlineDate") || "yes — date TBC" : "no",
      plans: e.target.elements.plans?.checked ? "YES" : "no",
      message: g("notes"),
    };
    const lines = [
      `Name: ${fields.name}`,
      `Company / venue: ${fields.company}`,
      `Role: ${fields.role}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone}`,
      `Site: ${fields.site}`,
      `Site address / suburb: ${fields.address}`,
      `Type of enquiry: ${fields.enquiry_type}`,
      `Approximate scope: ${fields.scope}`,
      `Venue stage: ${fields.stage}`,
      `Timeline: ${fields.timeline}`,
      `Lease / project deadline: ${fields.deadline}`,
      `Plans available: ${fields.plans}`,
      "",
      `Message: ${fields.message}`,
    ];
    const scopeTag = scope && scope !== "Not sure yet" ? `[${scope.split(" / ")[0].split(" or ")[0]}] ` : "";
    const subject =
      (deadline || enquiry === "urgent" ? "[DEADLINE] " : "") +
      scopeTag +
      "Site inspection request — " +
      (fields.company || fields.site || fields.name);
    const body = lines.join("\n");
    setComposed({ subject, body });
    setCopied(false);

    if (FORM_ENDPOINT) {
      setStatus("sending");
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            ...fields,
            _subject: subject,
            _template: "table",
            _captcha: "false",
            _honey: "",
          }),
        });
        const data = await res.json().catch(() => null);
        if (!res.ok || !data || String(data.success) === "false") throw new Error(`endpoint ${res.status}`);
        setStatus("success");
        track("form_submit_success", { enquiry, scope: fields.scope, deadline: String(deadline) });
        return;
      } catch {
        setStatus("error");
        track("form_submit_error", { enquiry });
        track("fallback_rendered", { reason: "endpoint_error" });
        return;
      }
    }

    // No endpoint configured yet: mailto attempt + always-visible copy fallback.
    setStatus("fallback");
    track("form_submit_success", { enquiry, scope: fields.scope, deadline: String(deadline), transport: "mailto" });
    track("fallback_rendered", { reason: "no_endpoint" });
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const copyEnquiry = async () => {
    if (!composed) return;
    const text = `To: ${EMAIL}\nSubject: ${composed.subject}\n\n${composed.body}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      track("enquiry_copy", { fallback: "clipboard" });
    } catch {
      setCopied(false);
    }
  };

  const showFallback = composed && (status === "error" || status === "fallback");

  return (
    <section className="bg-ink py-[clamp(52px,8vw,100px)] text-white">
      <div className="wrap grid gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <span className="eyebrow eyebrow--accent">Request a Free Site Inspection</span>
          <h1 className="display-wide balance mt-3.5 text-[clamp(1.9rem,3.8vw,2.8rem)] font-extrabold uppercase tracking-[-0.01em]">
            Tell us about the site — we'll help determine the right next step.
          </h1>
          <p className="mt-4 max-w-[54ch] text-[#AEB8C0]">
            Site inspections and quotations are free and no obligation, across Adelaide and South Australia.
            Working from drawings on a tender? Send them through for review.
          </p>
          <p className="mt-4 text-[0.95rem] text-[#AEB8C0]">
            Working to a lease, fitout or failed-fan deadline?{" "}
            <a
              className="font-bold text-accent no-underline hover:underline"
              href="tel:1800435622"
              onClick={() => track("phone_click", { from: "contact-intro" })}
            >
              Call 1800 4 ELMAC (1800 435 622)
            </a>{" "}
            so the urgency is clear. Phones are available 24/7 for urgent site issues.
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

          {status === "success" ? (
            <div className="mt-8 rounded-xl border border-accent/[0.5] bg-accent/[0.08] p-6">
              <h2 className="text-[1.15rem] font-extrabold text-accent">Enquiry received.</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-[#DCE3E8]">
                It's gone straight to Benn Cox. We respond according to site urgency, project stage and client
                deadline requirements — if it's urgent, call{" "}
                <a className="font-bold text-accent no-underline hover:underline" href="tel:1800435622">1800 4 ELMAC (1800 435 622)</a>{" "}
                any time.
              </p>
            </div>
          ) : (
            <form className="mt-8 grid gap-4" onSubmit={submit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label className={label} htmlFor="n">Name</label>
                  <input id="n" name="name" required placeholder="Your name" className={field} />
                </div>
                <div className="grid gap-1.5">
                  <label className={label} htmlFor="b">Company / venue</label>
                  <input id="b" name="business" placeholder="Company / venue group / builder" className={field} />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label className={label} htmlFor="v">Site name</label>
                  <input id="v" name="venue" placeholder="Site this enquiry is for" className={field} />
                </div>
                <div className="grid gap-1.5">
                  <label className={label} htmlFor="a">Site address / suburb</label>
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
                <legend className={`${label} px-1.5`}>Type of enquiry</legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {ENQUIRY_TYPES.map(([k, t]) => (
                    <label key={k} className="flex cursor-pointer items-center gap-2.5 text-[0.9rem] text-[#DCE3E8]">
                      <input type="radio" name="etype" className={check} checked={enquiry === k} onChange={() => setEnquiry(k)} />
                      {t}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label className={label} htmlFor="sc">Approximate scope</label>
                  <select id="sc" name="scope" defaultValue="Not sure yet" className={`${field} appearance-none`}>
                    {SCOPES.map((s) => <option key={s} className="text-ink">{s}</option>)}
                  </select>
                </div>
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
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <label className="flex cursor-pointer items-center gap-2.5 text-[0.9rem] text-[#DCE3E8]">
                  <input
                    type="checkbox"
                    className={check}
                    checked={deadline}
                    onChange={(e) => {
                      setDeadline(e.target.checked);
                      if (e.target.checked) track("deadline_selected", {});
                    }}
                  />
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
                <label className={label} htmlFor="m">Message — site, access &amp; system notes</label>
                <textarea id="m" name="notes" rows="4" placeholder="Ceiling/roof access, existing system condition, cooking load, anything useful…" className={`${field} min-h-[100px] resize-y`} />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 justify-self-start rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink transition-colors hover:bg-[#57bce8] disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send enquiry"}
              </button>
              {status === "error" && (
                <p className="font-mono text-[0.78rem] font-bold text-[#F5A057]">
                  The form couldn't send just now — nothing is lost. Copy your enquiry below and email it, or call
                  1800 4 ELMAC (1800 435 622).
                </p>
              )}
              <p className="font-mono text-[0.7rem] tracking-[0.02em] text-[#67727b]">
                No email app on this machine? Submit anyway — your enquiry appears below with a copy button, ready
                to paste into webmail addressed to {EMAIL}.
              </p>
              <p className="font-mono text-[0.7rem] tracking-[0.02em] text-[#67727b]">
                Have plans or photos? Attach them when your email opens — they speed up scoping considerably. See
                how enquiry details are handled in our{" "}
                <Link to="/privacy" className="text-[#93A0A9] underline hover:text-accent">privacy statement</Link>.
              </p>

              {showFallback && (
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
                    <a className="font-bold text-accent no-underline hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>{" "}
                    — or call <a className="font-bold text-accent no-underline hover:underline" href="tel:1800435622">1800 4 ELMAC (1800 435 622)</a>.
                  </p>
                  <pre className="mt-3 max-h-[220px] overflow-auto whitespace-pre-wrap rounded-lg bg-ink-3/80 p-4 font-mono text-[0.76rem] leading-relaxed text-[#DCE3E8]">
{`Subject: ${composed.subject}\n\n${composed.body}`}
                  </pre>
                </div>
              )}
            </form>
          )}
        </Reveal>

        <Reveal delay={0.1} className="grid content-start gap-5 self-start">
          <TrustBlock dark />
          <div className="overflow-hidden rounded-2xl border border-white/[0.12]">
            {[
              ["Address", "30 Chapman Road, Hackham SA 5163"],
              ["Region", "Adelaide · South Australia"],
              ["Licence", <span key="li" className="font-mono text-[0.9rem]">PGE342023 · AS 1668.2 where applicable</span>],
              [
                "What happens next",
                <ol key="wn" className="m-0 grid list-none gap-1.5 p-0 text-[0.88rem]">
                  <li>1 · We review the site details, plans or issue description</li>
                  <li>2 · We confirm urgency, access and project stage</li>
                  <li>3 · Free, no-obligation site inspection — or plans review where suitable</li>
                  <li>4 · We scope the works: access, airflow, serviceability</li>
                  <li>5 · Written proposal (valid 30 days)</li>
                  <li>6 · Custom components: 50% deposit before manufacture begins</li>
                  <li>7 · On completion: compliance certificates, photo reports and requested records issued as required</li>
                </ol>,
              ],
              [
                "Commercial terms",
                <ul key="ct" className="m-0 grid list-none gap-1.5 p-0 text-[0.85rem]">
                  <li>Quotes valid 30 days · payment 14 days net</li>
                  <li>50% deposit to begin manufacture of custom components</li>
                  <li>Confirmed bookings need 24 hours' notice to cancel or reschedule — otherwise a standard callout fee of 25% of install cost may apply</li>
                  <li>Post-service: advise within 7 days if any follow-up or revisit is required</li>
                  <li className="text-[#7f8b94]">Elmac can only be held liable for the extent of works performed. Pre-existing defects and parts not supplied or manufactured by Elmac are assessed separately.</li>
                </ul>,
              ],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-white/10 px-5.5 py-5 last:border-b-0">
                <div className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#7f8b94]">{k}</div>
                <div className="mt-1.5 text-[0.98rem] text-[#EAEFF2]">{v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
