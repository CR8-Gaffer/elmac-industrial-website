// Section divider drawn like a dimension line: |———— label ————|
// Linework is decorative (aria-hidden per element); the label stays exposed
// to assistive tech because it carries real content.
export default function DimensionDivider({ label, className = "", dark = false }) {
  const line = dark ? "bg-white/[0.18]" : "bg-steel-300";
  const tick = dark ? "bg-white/[0.35]" : "bg-steel-400";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`h-3 w-px ${tick}`} aria-hidden="true" />
      <span className={`h-px flex-1 ${line}`} aria-hidden="true" />
      {label && (
        <span
          className={`font-mono text-[0.6rem] uppercase tracking-[0.2em] ${
            dark ? "text-white/55" : "text-steel-600"
          }`}
        >
          {label}
        </span>
      )}
      <span className={`h-px flex-1 ${line}`} aria-hidden="true" />
      <span className={`h-3 w-px ${tick}`} aria-hidden="true" />
    </div>
  );
}
