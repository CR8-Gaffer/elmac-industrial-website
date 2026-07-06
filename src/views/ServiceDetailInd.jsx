import { Link, Navigate, useParams } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import SpecBlock from "../components/SpecBlock.jsx";
import AccessNote from "../components/AccessNote.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import Doctrine from "../components/Doctrine.jsx";
import DuctlineDiagram from "../components/DuctlineDiagram.jsx";
import FailurePoint from "../components/FailurePoint.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import { SERVICE_PAGES } from "../data/services-ind.js";
import { DOCTRINE_BY_SLUG } from "../data/doctrine.js";

const A = (f) => `${import.meta.env.BASE_URL}assets/${f}`;

function Meta({ svc }) {
  usePageMeta(svc.meta.title, svc.meta.desc);
  return null;
}

export default function ServiceDetailInd() {
  const { slug } = useParams();
  const svc = SERVICE_PAGES[slug];
  if (!svc) return <Navigate to="/services" replace />;

  return (
    <>
      <Meta svc={svc} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src={A(svc.image)}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,24,28,0.95)_0%,rgba(20,24,28,0.82)_55%,rgba(20,24,28,0.6)_100%)]" />
        <div className="wrap relative py-[clamp(52px,8vw,100px)]">
          <Reveal>
            <span className="eyebrow eyebrow--accent">{svc.code}</span>
            <h1 className="display-wide balance mt-4 max-w-[22ch] text-[clamp(1.8rem,4.2vw,3.1rem)] font-extrabold uppercase leading-[1.08] tracking-[-0.01em]">
              {svc.title}
            </h1>
            <p className="mt-5 max-w-[58ch] text-[clamp(0.98rem,1.45vw,1.1rem)] text-[#C6CFD6]">{svc.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                to={svc.cta.to}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]"
              >
                {svc.cta.label}
              </MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-5.5 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent"
              >
                Request a site inspection
              </Link>
            </div>
            <SpecBlock dark className="mt-9 max-w-[680px]" items={svc.spec} />
          </Reveal>
        </div>
      </section>

      {/* WHAT GOES WRONG */}
      <section className="py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Done as a sideline</span>
            <h2 className="balance mt-3.5 max-w-[28ch] text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              What goes wrong when this isn't someone's specialty.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {svc.wrong.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.07}>
                <div className="h-full rounded-xl border border-steel-200 bg-white p-6">
                  <h3 className="text-[1.05rem] font-extrabold">{r.t}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-steel-600">{r.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE LOOK FOR */}
      {svc.lookFor && (
        <section className="border-t border-steel-200 bg-white py-[clamp(48px,7vw,88px)]">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">What we look for</span>
              <h2 className="balance mt-3.5 max-w-[28ch] text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                Field observations from the maintenance side.
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {svc.lookFor.map((t, i) => (
                <Reveal key={i} delay={(i % 3) * 0.06}>
                  <div className="h-full border-l-2 border-steel-300 py-1 pl-5">
                    <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-steel-400">
                      OBS.{String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-steel-700">{t}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SYSTEM DIAGRAM */}
      {svc.diagram && (
        <section className="border-t border-steel-200 bg-white pb-[clamp(48px,7vw,88px)]">
          <div className="wrap">
            <Reveal>
              {svc.diagram === "ductline" ? <DuctlineDiagram /> : <FailurePoint />}
            </Reveal>
          </div>
        </section>
      )}

      {/* SCOPE + ACCESS NOTE */}
      <section className="border-y border-steel-200 bg-paper py-[clamp(48px,7vw,88px)]">
        <div className="wrap grid items-start gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">Scope</span>
            <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              What the work includes.
            </h2>
            <AccessNote className="mt-6">{svc.accessNote}</AccessNote>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200">
              {svc.scope.map((t, i) => (
                <div key={t} className="flex items-center gap-3.5 bg-paper px-5 py-4">
                  <span className="font-mono text-[0.72rem] font-bold text-accent-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.94rem] font-semibold text-ink">{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAINTENANCE-INFORMED DETAILS */}
      <section className="py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The maintenance-informed difference</span>
            <h2 className="balance mt-3.5 max-w-[28ch] text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Details we get right because we're usually the ones who come back.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {svc.maintenance.map(([t, b], i) => (
              <Reveal key={t} delay={(i % 2) * 0.06}>
                <div className="h-full rounded-xl border border-steel-200 bg-white p-6">
                  <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-accent-deep">
                    DET.{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2.5 text-[1.02rem] font-extrabold">{t}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-steel-600">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {svc.budget ? (
            <Reveal delay={0.1}>
              <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200 md:grid-cols-2">
                <div className="bg-white p-6">
                  <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-accent-deep">
                    Lease-ready approach
                  </span>
                  <p className="mt-2.5 text-[0.94rem] leading-relaxed text-steel-700">{svc.budget.practical}</p>
                </div>
                <div className="bg-paper p-6">
                  <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-accent-deep">
                    Long-life approach
                  </span>
                  <p className="mt-2.5 text-[0.94rem] leading-relaxed text-steel-700">{svc.budget.premium}</p>
                </div>
              </div>
              <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-steel-600">
                Either way: access, sealing and sizing are never the corner we cut.
              </p>
            </Reveal>
          ) : (
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[62ch] rounded-lg border-l-2 border-accent bg-accent/[0.06] px-4.5 py-3.5 text-[0.95rem] font-semibold text-ink">
                {svc.pathway}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* DEFECTS PREVENTED */}
      {svc.defects && (
        <section className="border-y border-steel-200 bg-white py-[clamp(48px,7vw,88px)]">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">Prevented here</span>
              <h2 className="balance mt-3.5 max-w-[28ch] text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                Common defects this work quietly deletes.
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {svc.defects.map((t, i) => (
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
      )}

      {/* PROCESS */}
      {svc.defects && (
        <section className="py-[clamp(48px,7vw,88px)]">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">How it runs</span>
              <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                Inspect to document — no surprises.
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Inspect", "Site, system, access and services — measured, not assumed."],
                ["Scope", "Fixed scope in writing; exclusions named plainly."],
                ["Recommend", "The pathway the site actually needs — including the cheaper one."],
                [svc.processVerb || "Install / upgrade", "Licensed trades, contained work, site left operational."],
                ["Test", "Airflow and operation verified before we call it done."],
                ["Document", "What was done, what we found, what to watch — handed over."],
              ].map(([t, b], i) => (
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
      )}

      {/* CTA */}
      <section className="bg-ink py-[clamp(52px,8vw,96px)] text-white">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <Doctrine n={DOCTRINE_BY_SLUG[slug] || 21} dark center />
            <h2 className="balance max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              Start with an inspection — we'll tell you what your site actually needs.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton
                to={svc.cta.to}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]"
              >
                {svc.cta.label}
              </MagneticButton>
              <a
                href="tel:1800435622"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-6 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent"
              >
                1800 4 ELMAC
              </a>
            </div>
            <p className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/45">
              <span>Pairs with:</span>
              {svc.related.map(([t, to]) => (
                <Link key={to} to={to} className="text-white/70 underline-offset-4 hover:text-accent">
                  {t}
                </Link>
              ))}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
