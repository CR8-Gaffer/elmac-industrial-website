import { Link, Navigate, useParams } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Doctrine from "../components/Doctrine.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import { noteBySlug } from "../data/systemnotes.js";

function Meta({ note }) {
  usePageMeta(`${note.q} | System Notes | Elmac Industrial`, note.meta);
  return null;
}

export default function SystemNoteDetail() {
  const { slug } = useParams();
  const note = noteBySlug(slug);
  if (!note) return <Navigate to="/system-notes" replace />;
  const related = (note.related || []).map(noteBySlug).filter(Boolean);

  return (
    <>
      <Meta note={note} />

      <article className="wrap max-w-[860px] pb-[clamp(48px,7vw,80px)] pt-[clamp(48px,7vw,88px)]">
        <Reveal>
          <nav className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-steel-400">
            <Link to="/system-notes" className="text-accent-deep no-underline hover:underline">System Notes</Link>
            {" / "}{note.code}
            {note.cornerstone && <span className="ml-2 text-accent-deep">★ Cornerstone</span>}
          </nav>
          <h1 className="balance mt-4 text-[clamp(1.7rem,3.8vw,2.7rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            {note.q}
          </h1>
          <p className="mt-5 border-l-2 border-accent pl-4 text-[clamp(1.05rem,1.6vw,1.2rem)] font-bold leading-relaxed text-ink">
            {note.verdict}
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-7 grid gap-5 text-[1.02rem] leading-[1.75] text-steel-700">
            {note.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 rounded-xl border border-steel-200 bg-white p-6">
            <h2 className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.16em] text-accent-deep">
              What we see on real sites
            </h2>
            <p className="mt-2.5 text-[0.98rem] leading-relaxed text-steel-700">{note.field}</p>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-6 rounded-lg border-l-2 border-accent bg-accent/[0.06] px-5 py-4 text-[1.02rem] font-bold text-ink">
            {note.take}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <Doctrine n={note.doctrine} />
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-steel-400">
              Last reviewed · July 2026
            </span>
          </div>
        </Reveal>
      </article>

      <section className="border-t border-steel-200 bg-white py-[clamp(40px,5vw,64px)]">
        <div className="wrap max-w-[860px]">
          <Reveal>
            <h2 className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-steel-400">Related notes</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} to={`/system-notes/${r.slug}`} className="group rounded-xl border border-steel-200 bg-paper p-4.5 no-underline transition-colors hover:border-accent/60">
                  <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-accent-deep">{r.code}</span>
                  <div className="mt-1.5 text-[0.9rem] font-bold leading-snug text-ink group-hover:underline">{r.q}</div>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-[0.95rem] text-steel-600">
              The service behind this note:{" "}
              <Link to={note.offramp[1]} className="font-bold text-accent-deep no-underline hover:underline">
                {note.offramp[0]} →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-[clamp(44px,6vw,72px)] text-white">
        <div className="wrap flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <h2 className="balance text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold tracking-[-0.02em]">
              Want this answered for your specific system?
            </h2>
            <p className="mt-2 max-w-[52ch] text-[#AEB8C0]">An inspection reads your site the way this note reads the general case.</p>
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
