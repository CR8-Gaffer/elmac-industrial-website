import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "motion/react";

/**
 * Stat tile. Numeric values count up when scrolled into view;
 * non-numeric values (AS1851, SA·NT, PGE) render as-is.
 */
export default function Stat({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const numeric = typeof value === "number";
  const [shown, setShown] = useState(numeric ? 0 : value);

  useEffect(() => {
    if (!numeric) return;
    if (!inView) return;
    if (reduce) {
      setShown(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setShown(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, numeric, reduce, value]);

  return (
    <div ref={ref} className="bg-white px-4 py-5">
      <b className="block text-2xl font-extrabold tracking-tight tabular-nums">
        {shown}
        {suffix}
      </b>
      <span className="mt-1 block font-mono text-[0.68rem] uppercase tracking-[0.1em] text-steel-600">
        {label}
      </span>
    </div>
  );
}
