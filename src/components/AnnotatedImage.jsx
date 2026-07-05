import { motion, useReducedMotion } from "motion/react";

// Photo with numbered inspection markers + mono legend — "what we look for"
// made visual. markers: [{ n, x, y, label }] with x/y as percentages.
export default function AnnotatedImage({ src, alt = "", markers = [], caption, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <figure className={className}>
      <div className="reg-ticks relative overflow-visible">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-steel-200">
          <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
          {markers.map((m, i) => (
            <motion.span
              key={m.n}
              className="absolute grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[4px] border border-white/70 bg-ink/80 font-mono text-[0.68rem] font-bold text-white backdrop-blur-[2px]"
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
              initial={reduce ? false : { opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px 0px" }}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.12 }}
              aria-hidden="true"
            >
              {m.n}
              <span className="absolute -left-2 top-1/2 h-px w-2 bg-white/50" />
              <span className="absolute -right-2 top-1/2 h-px w-2 bg-white/50" />
            </motion.span>
          ))}
        </div>
      </div>
      {markers.length > 0 && (
        <ul className="mt-4 grid list-none gap-1.5 p-0 sm:grid-cols-2">
          {markers.map((m) => (
            <li key={m.n} className="flex items-baseline gap-2.5 font-mono text-[0.7rem] tracking-[0.04em] text-steel-600">
              <span className="font-bold text-accent-deep">{String(m.n).padStart(2, "0")}</span>
              {m.label}
            </li>
          ))}
        </ul>
      )}
      {caption && <figcaption className="img-caption">{caption}</figcaption>}
    </figure>
  );
}
