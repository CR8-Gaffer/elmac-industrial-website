import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "motion/react";

/**
 * Draggable before/after reveal.
 *  - `after` / `before` image URLs are optional; painted stainless
 *    placeholders render until real job photography is supplied.
 *  - The first slider on a page can `tease`: a gentle automatic wipe when it
 *    first scrolls into view, teaching the interaction without a label.
 */
export default function BeforeAfter({ before, after, note = "Placeholder — your before / after photo", tease = false }) {
  const ref = useRef(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const teased = useRef(false);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!tease || teased.current || !inView || reduce) return;
    teased.current = true;
    const controls = animate(50, 72, {
      duration: 0.9,
      delay: 0.35,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: setPos,
      onComplete: () => {
        animate(72, 50, { duration: 0.7, ease: "easeInOut", onUpdate: setPos });
      },
    });
    return () => controls.stop();
  }, [tease, inView, reduce]);

  const fromClientX = (clientX) => {
    const r = ref.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-2xl border border-steel-200 shadow-[0_20px_40px_-28px_rgba(14,37,73,0.5)]"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        fromClientX(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && fromClientX(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      {/* AFTER pane (base) */}
      <div
        className={`absolute inset-0 ${after ? "" : "pane-after"}`}
        style={after ? { background: `url(${after}) center/cover no-repeat` } : undefined}
      >
        <span className="absolute right-3 top-3 rounded-md bg-accent/85 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#0A2A44]">
          After
        </span>
      </div>

      {/* BEFORE pane (clipped) */}
      <div
        className={`absolute inset-0 ${before ? "" : "pane-before"}`}
        style={{
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
          ...(before ? { background: `url(${before}) center/cover no-repeat` } : {}),
        }}
      >
        <span className="absolute left-3 top-3 rounded-md bg-ink/60 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          Before
        </span>
      </div>

      {note && (
        <span className="absolute bottom-2.5 left-3 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-white/70 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
          {note}
        </span>
      )}

      {/* divider + grip */}
      <div
        className="absolute inset-y-0 w-0.5 -translate-x-px bg-white shadow-[0_0_0_1px_rgba(14,37,73,0.15)]"
        style={{ left: `${pos}%` }}
      />
      <div
        className="absolute top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_6px_18px_-6px_rgba(0,0,0,0.5)]"
        style={{ left: `${pos}%` }}
      >
        <span className="-tracking-[1px] text-[0.9rem] font-extrabold text-ink">‹ ›</span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        aria-label="Reveal after cleaning"
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
