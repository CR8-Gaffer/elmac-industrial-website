import { motion, useReducedMotion } from "motion/react";

/**
 * Scroll-triggered reveal. Content starts fully visible for reduced-motion
 * users and crawlers; otherwise it slides+fades in as it enters the viewport.
 */
export default function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.65, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
