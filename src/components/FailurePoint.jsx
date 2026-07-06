// Elevation of a typical underperforming exhaust run with the five failure
// points our maintenance side traces most defects back to. Companion piece to
// DuctlineDiagram: same schematic language, orange shifted from "access
// provided" to "failure found".
const STEEL = "#8c9aa6";
const STEEL_DARK = "#55636f";
const INK = "#1a1f24";
const SAFETY = "#e8730c";

const mono = {
  fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
  letterSpacing: "0.08em",
};

const FAULTS = [
  ["F1", "Unsealed flange joint — grease weep into the ceiling"],
  ["F2", "No fall — grease pools in the flat run"],
  ["F3", "No access panel — a span no scraper can reach"],
  ["F4", "Fan rigid-mounted, no service clearance"],
  ["F5", "Roof penetration never sealed off properly"],
];

function Fault({ x, y, n }) {
  return (
    <g>
      <path d={`M ${x} ${y - 12} L ${x + 11} ${y + 7} L ${x - 11} ${y + 7} Z`} fill={SAFETY} />
      <text x={x} y={y + 4.5} textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff" style={mono}>
        {n}
      </text>
    </g>
  );
}

export default function FailurePoint({ className = "" }) {
  return (
    <figure className={className}>
      <div className="overflow-x-auto rounded-xl border border-steel-200 bg-white p-5">
        <svg
          viewBox="0 0 920 330"
          className="min-w-[720px]"
          role="img"
          aria-labelledby="failure-title failure-desc"
        >
          <title id="failure-title">Where installed systems actually fail</title>
          <desc id="failure-desc">
            Schematic of a poorly installed kitchen exhaust run marking the five recurring failure
            points: unsealed joints, flat runs with no fall, missing access panels, rigid-mounted
            fans and unsealed roof penetrations.
          </desc>

          {/* registration ticks */}
          {Array.from({ length: 23 }, (_, i) => (
            <line key={i} x1={30 + i * 40} y1="14" x2={30 + i * 40} y2={i % 5 === 0 ? 26 : 20} stroke={STEEL} strokeWidth="1" opacity="0.5" />
          ))}

          {/* roof line */}
          <line x1="600" y1="92" x2="905" y2="92" stroke={STEEL_DARK} strokeWidth="1.5" strokeDasharray="7 5" />
          <text x="905" y="84" textAnchor="end" fontSize="10" fill={STEEL_DARK} style={mono}>ROOF LINE</text>

          {/* canopy stub at left */}
          <path d="M 45 250 L 185 250 L 170 215 L 60 215 Z" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <text x="115" y="275" textAnchor="middle" fontSize="10" fill={STEEL_DARK} style={mono}>CANOPY</text>

          {/* riser */}
          <rect x="98" y="160" width="34" height="55" fill="none" stroke={INK} strokeWidth="2.5" />

          {/* long DEAD-FLAT duct run (the fault: no fall) */}
          <line x1="132" y1="160" x2="600" y2="160" stroke={INK} strokeWidth="2.5" />
          <line x1="132" y1="194" x2="600" y2="194" stroke={INK} strokeWidth="2.5" />
          {/* pooled grease in the flat run */}
          <path d="M 240 194 Q 300 184 360 194 Z" fill={STEEL} opacity="0.45" />
          {/* leaking joint */}
          <line x1="210" y1="160" x2="210" y2="194" stroke={STEEL_DARK} strokeWidth="1.5" />
          {[0, 1, 2].map((i) => (
            <circle key={i} cx="210" cy={206 + i * 12} r="2.2" fill={SAFETY} opacity={0.8 - i * 0.22} />
          ))}
          {/* second joint, intact */}
          <line x1="450" y1="160" x2="450" y2="194" stroke={STEEL_DARK} strokeWidth="1.5" />
          <text x="366" y="146" textAnchor="middle" fontSize="10" fill={STEEL_DARK} style={mono}>FLAT RUN — NO FALL, NO ACCESS</text>

          {/* riser to fan */}
          <rect x="600" y="60" width="38" height="134" fill="none" stroke={INK} strokeWidth="2.5" />

          {/* fan hard against the roof, no clearance */}
          <rect x="580" y="30" width="78" height="32" rx="4" fill="none" stroke={INK} strokeWidth="2.5" />
          <circle cx="619" cy="46" r="9" fill="none" stroke={STEEL_DARK} strokeWidth="1.5" />
          <text x="619" y="20" textAnchor="middle" fontSize="11" fontWeight="600" fill={INK} style={mono}>FAN</text>
          {/* clearance hatch marks showing it's jammed against plant */}
          <rect x="672" y="30" width="52" height="32" fill="none" stroke={STEEL} strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="698" y="76" textAnchor="middle" fontSize="9" fill={STEEL} style={mono}>PLANT</text>

          {/* fault markers */}
          <Fault x={210} y={132} n="F1" />
          <Fault x={300} y={132} n="F2" />
          <Fault x={520} y={132} n="F3" />
          <Fault x={560} y={44} n="F4" />
          <Fault x={619} y={110} n="F5" />

          {/* legend */}
          <g transform="translate(700 130)">
            <rect x="-16" y="-20" width="228" height="172" rx="8" fill="#f5f7f8" stroke="#cbd4db" strokeWidth="1" />
            {FAULTS.map(([n, label], i) => (
              <g key={n} transform={`translate(0 ${i * 30})`}>
                <path d="M 0 -8 L 8 6 L -8 6 Z" fill={SAFETY} />
                <text x="0" y="3.5" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" style={mono}>{n}</text>
                <text x="18" y="2" fontSize="8.5" fill={INK} style={mono}>{label.split(" — ")[0].toUpperCase()}</text>
                <text x="18" y="13" fontSize="7.5" fill={STEEL_DARK} style={mono}>{label.split(" — ")[1].toUpperCase()}</text>
              </g>
            ))}
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-steel-600">
        Fig. 02 — The five failure points our maintenance side traces most defects back to. All five are invisible at handover.
      </figcaption>
    </figure>
  );
}
