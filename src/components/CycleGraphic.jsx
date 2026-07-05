import { motion, useReducedMotion } from "motion/react";

// The preventive cycle drawn as a line that draws itself on scroll —
// filters on the short cadence, KES on the risk cycle, review annually.
const NODES = [
  { x: 8, label: "Filter exchange", sub: "2–8-weekly" },
  { x: 38, label: "KES clean", sub: "quarterly – annual" },
  { x: 68, label: "Deep clean / washdown", sub: "as the site needs" },
  { x: 92, label: "Annual review", sub: "cycles re-checked" },
];

export default function CycleGraphic({ className = "" }) {
  const reduce = useReducedMotion();
  return (
    <div className={`overflow-x-auto ${className}`}>
      <svg viewBox="0 0 400 92" className="min-w-[560px] w-full" role="img" aria-label="Elmac preventive maintenance cycle: filter exchange, KES cleaning, deep cleans and an annual review">
        <motion.line
          x1="16" y1="30" x2="384" y2="30"
          stroke="var(--accent)" strokeWidth="1.5"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
        {NODES.map((n, i) => {
          const cx = 16 + (n.x / 100) * 368;
          return (
            <motion.g
              key={n.label}
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px 0px" }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.2 }}
            >
              <circle cx={cx} cy="30" r="5" fill="var(--paper)" stroke="var(--accent-deep)" strokeWidth="1.5" />
              <circle cx={cx} cy="30" r="1.8" fill="var(--accent-deep)" />
              <text x={cx} y="52" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8.5" fontWeight="600" fill="var(--ink)">
                {n.label}
              </text>
              <text x={cx} y="64" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fill="var(--steel-600)">
                {n.sub}
              </text>
            </motion.g>
          );
        })}
        <text x="16" y="14" fontFamily="var(--font-mono)" fontSize="7" letterSpacing="1.5" fill="var(--steel-600)">
          THE CYCLE — REPEATS WITHOUT ANYONE HAVING TO REMEMBER
        </text>
      </svg>
    </div>
  );
}
