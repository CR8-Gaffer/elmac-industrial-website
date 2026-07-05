import { motion, useReducedMotion } from "motion/react";

// Documentary image that wipes in left-to-right on first view.
export default function RevealImage({ src, alt = "", className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
    />
  );
}
