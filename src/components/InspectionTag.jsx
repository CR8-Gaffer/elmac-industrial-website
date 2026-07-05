// Report-language chip reused across the site: ▲ defect · ● status · ◆ access · № note
const KINDS = {
  defect: { sym: "▲", cls: "border-[#b05c10]/40 bg-[#b05c10]/[0.08] text-[#b05c10]" },
  status: { sym: "●", cls: "border-accent/40 bg-accent/[0.08] text-accent-deep" },
  access: { sym: "◆", cls: "border-steel-300 bg-white text-steel-600" },
  note: { sym: "№", cls: "border-steel-300 bg-paper text-steel-600" },
};

export default function InspectionTag({ kind = "note", children, className = "" }) {
  const k = KINDS[kind] || KINDS.note;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[4px] border px-2 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.1em] ${k.cls} ${className}`}
    >
      <span aria-hidden="true">{k.sym}</span>
      {children}
    </span>
  );
}
