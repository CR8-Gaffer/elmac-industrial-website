// The redline annotation as a component: safety orange, technical markers
// only — access notes, compliance callouts, failure warnings.
export default function AccessNote({ label = "Access note", children, className = "" }) {
  return (
    <aside
      className={`rounded-lg border-l-2 border-[#e8730c] bg-[#e8730c]/[0.07] px-4.5 py-3.5 ${className}`}
    >
      <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#b05c10]">
        ▲ {label}
      </span>
      <p className="mt-1.5 text-[0.94rem] leading-relaxed text-steel-700">{children}</p>
    </aside>
  );
}
