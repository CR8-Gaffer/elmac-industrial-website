// Operator's aside in the margin-note register — a simplified hanging annotation.
export default function MarginNote({ children, className = "" }) {
  return (
    <aside
      className={`max-w-[46ch] border-l-2 border-steel-300 py-1 pl-4 font-mono text-[0.72rem] leading-relaxed tracking-[0.03em] text-steel-600 ${className}`}
    >
      <span className="font-semibold text-steel-700">N.B. </span>
      {children}
    </aside>
  );
}
