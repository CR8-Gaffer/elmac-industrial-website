// Mono key-value strip in job-file style: SITE CLASS: X · ACCESS: Y · CYCLE: Z
export default function SpecBlock({ items = [], dark = false, className = "" }) {
  return (
    <div
      className={`flex flex-wrap gap-x-7 gap-y-2 border-y px-0.5 py-3 ${
        dark ? "border-white/[0.14]" : "border-steel-200"
      } ${className}`}
    >
      {items.map(([k, v]) => (
        <div key={k} className="font-mono text-[0.66rem] uppercase tracking-[0.12em]">
          <span className={dark ? "text-white/40" : "text-steel-400"}>{k}: </span>
          <span className={`font-semibold ${dark ? "text-white/75" : "text-steel-700"}`}>{v}</span>
        </div>
      ))}
    </div>
  );
}
