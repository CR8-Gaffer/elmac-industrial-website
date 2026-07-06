// Buyer-diligence block: named contact + operating credentials. Restrained and
// factual — this exists for landlords, builders, FMs and operators running
// procurement checks, not for decoration.
const CREDENTIALS = [
  ["ABN", "19 526 766 573"],
  ["Insurance", "$20M public liability insurance"],
  ["SWMS", "Supplied as required for project works"],
  ["Documentation", "Compliance certificates, photo reports and requested records issued as required"],
  ["Standards", "All works are scoped and completed with reference to relevant Australian Standards, including AS 1668.2 where applicable"],
  ["Inspections", "Site inspections and quotations are free and no obligation"],
  ["Availability", "24/7 phone availability for urgent site issues"],
];

export default function TrustBlock({ dark = false, className = "" }) {
  const card = dark ? "border-white/[0.12] bg-white/[0.04]" : "border-steel-200 bg-white";
  const divide = dark ? "divide-white/10" : "divide-steel-200";
  const keyCls = dark ? "text-[#7f8b94]" : "text-steel-400";
  const valCls = dark ? "text-[#DCE3E8]" : "text-steel-700";
  const nameCls = dark ? "text-white" : "text-ink";

  return (
    <div className={`grid gap-4 lg:grid-cols-[0.9fr_1.1fr] ${className}`}>
      <div className={`rounded-xl border p-6 ${card}`}>
        <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-accent-deep">
          Who you'll deal with
        </span>
        <h3 className={`mt-3 text-[1.2rem] font-extrabold ${nameCls}`}>Benn Cox</h3>
        <p className={`text-[0.9rem] font-semibold ${valCls}`}>Managing Director — Elmac Industrial Services</p>
        <div className={`mt-4 grid gap-2 text-[0.94rem] ${valCls}`}>
          <a href="tel:+61487000699" className="font-bold text-accent-deep no-underline hover:underline">
            +61 487 000 699
          </a>
          <a href="mailto:benn@elmacindustrial.com.au" className="font-bold text-accent-deep no-underline hover:underline">
            benn@elmacindustrial.com.au
          </a>
          <a href="tel:1800435622" className="no-underline hover:underline">
            1800 4 ELMAC <span className="font-mono text-[0.85rem]">(1800 435 622)</span>
          </a>
        </div>
        <p className={`mt-4 text-[0.86rem] leading-relaxed ${dark ? "text-[#93A0A9]" : "text-steel-600"}`}>
          Your enquiry goes to Benn directly — not a call centre. We respond according to site urgency, project
          stage and client deadline requirements.
        </p>
      </div>
      <div className={`overflow-hidden rounded-xl border ${card}`}>
        <div className={`grid divide-y ${divide}`}>
          {CREDENTIALS.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[110px_1fr] items-baseline gap-3 px-5 py-3">
              <span className={`font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] ${keyCls}`}>{k}</span>
              <span className={`text-[0.88rem] leading-relaxed ${valCls}`}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
