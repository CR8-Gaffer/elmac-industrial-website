import { DOCTRINE } from "../data/doctrine.js";

// Quiet numbered epigraph — the doctrine surfaces one line per page, never
// the list. `dark` for ink sections, `center` for centered CTA bands.
export default function Doctrine({ n, dark = false, center = false }) {
  const line = DOCTRINE[n];
  if (!line) return null;
  return (
    <figure
      className={`m-0 ${
        center ? "mx-auto mb-7 max-w-[52ch] text-center" : "mt-7 max-w-[52ch] border-l-2 pl-4 " + (dark ? "border-white/[0.25]" : "border-steel-300")
      }`}
    >
      <figcaption
        className={`font-mono text-[0.6rem] font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-white/[0.4]" : "text-steel-400"
        }`}
      >
        Elmac Doctrine · Nº {String(n).padStart(2, "0")}
      </figcaption>
      <p
        className={`mt-1.5 text-[0.95rem] font-semibold leading-relaxed ${
          dark ? "text-white/[0.75]" : "text-steel-600"
        }`}
      >
        {line}
      </p>
    </figure>
  );
}
