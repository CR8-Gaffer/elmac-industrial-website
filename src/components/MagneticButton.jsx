import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

/**
 * CTA with magnetic hover physics (Motion useMotionValue + spring).
 * Falls back to a plain link under prefers-reduced-motion.
 */
export default function MagneticButton({ to, href, children, className = "", strength = 0.3 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const onMove = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = to ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );

  return (
    <motion.span
      ref={ref}
      style={reduce ? undefined : { x: sx, y: sy, display: "inline-block" }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="inline-block"
    >
      {inner}
    </motion.span>
  );
}
