// Schematic elevation of a kitchen exhaust grease path: canopy → filter bank →
// duct run → access doors → fan → discharge. Safety orange marks every point
// a service technician must be able to reach.
const STEEL = "#8c9aa6";
const STEEL_DARK = "#55636f";
const INK = "#1a1f24";
const ACCENT = "#44c8f4";
const SAFETY = "#e8730c";

const mono = {
  fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
  letterSpacing: "0.08em",
};

function AccessMarker({ x, y, n }) {
  return (
    <g>
      <circle cx={x} cy={y} r="11" fill={SAFETY} />
      <text x={x} y={y + 3.5} textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" style={mono}>
        {n}
      </text>
    </g>
  );
}

export default function DuctlineDiagram({ className = "" }) {
  return (
    <figure className={className}>
      <div className="overflow-x-auto rounded-xl border border-steel-200 bg-white p-5">
        <svg
          viewBox="0 0 920 330"
          className="min-w-[720px]"
          role="img"
          aria-labelledby="ductline-title ductline-desc"
        >
          <title id="ductline-title">The grease path, end to end</title>
          <desc id="ductline-desc">
            Schematic of a kitchen exhaust system from canopy and filter bank through the duct run,
            access doors and fan to discharge, with every required service access point marked.
          </desc>

          {/* registration ticks along the top */}
          {Array.from({ length: 23 }, (_, i) => (
            <line key={i} x1={30 + i * 40} y1="14" x2={30 + i * 40} y2={i % 5 === 0 ? 26 : 20} stroke={STEEL} strokeWidth="1" opacity="0.5" />
          ))}

          {/* roof line */}
          <line x1="620" y1="96" x2="905" y2="96" stroke={STEEL_DARK} strokeWidth="1.5" strokeDasharray="7 5" />
          <text x="905" y="88" textAnchor="end" fontSize="10" fill={STEEL_DARK} style={mono}>ROOF LINE</text>

          {/* cookline base */}
          <line x1="30" y1="290" x2="250" y2="290" stroke={INK} strokeWidth="2.5" />
          <text x="140" y="310" textAnchor="middle" fontSize="10" fill={STEEL_DARK} style={mono}>COOKLINE</text>

          {/* canopy */}
          <path d="M 55 200 L 225 200 L 205 160 L 75 160 Z" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          {/* filter bank */}
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={92 + i * 26} y="182" width="20" height="12" fill="none" stroke={STEEL_DARK} strokeWidth="1.5" />
          ))}
          <text x="140" y="146" textAnchor="middle" fontSize="11" fontWeight="600" fill={INK} style={mono}>CANOPY + FILTER BANK</text>

          {/* riser from canopy */}
          <rect x="122" y="112" width="36" height="48" fill="none" stroke={INK} strokeWidth="2.5" />

          {/* horizontal duct run — slight fall back toward the canopy */}
          <path d="M 158 112 L 640 104" fill="none" stroke={INK} strokeWidth="2.5" />
          <path d="M 158 148 L 640 140" fill="none" stroke={INK} strokeWidth="2.5" />
          {/* flanged joints */}
          {[300, 460].map((x) => (
            <line key={x} x1={x} y1={112 - (x - 158) * 0.0166} x2={x} y2={148 - (x - 158) * 0.0166} stroke={STEEL_DARK} strokeWidth="1.5" />
          ))}
          <text x="400" y="170" textAnchor="middle" fontSize="10" fill={STEEL_DARK} style={mono}>DUCT RUN — FALL BACK TO CANOPY</text>

          {/* riser to fan */}
          <rect x="640" y="56" width="40" height="86" fill="none" stroke={INK} strokeWidth="2.5" />

          {/* fan housing above roof line */}
          <rect x="618" y="34" width="84" height="34" rx="4" fill="none" stroke={INK} strokeWidth="2.5" />
          <circle cx="660" cy="51" r="10" fill="none" stroke={STEEL_DARK} strokeWidth="1.5" />
          <path d="M 660 41 L 660 61 M 650 51 L 670 51" stroke={STEEL_DARK} strokeWidth="1.2" />
          <text x="660" y="24" textAnchor="middle" fontSize="11" fontWeight="600" fill={INK} style={mono}>FAN</text>

          {/* discharge */}
          <path d="M 702 44 L 760 44" stroke={INK} strokeWidth="2.5" />
          <path d="M 752 36 L 766 44 L 752 52" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinejoin="round" />
          <text x="790" y="48" fontSize="10" fill={STEEL_DARK} style={mono}>DISCHARGE</text>

          {/* airflow arrows */}
          {[{ x: 140, y: 220, r: -90 }, { x: 230, y: 127, r: 0 }, { x: 390, y: 124, r: 0 }, { x: 550, y: 121, r: 0 }, { x: 660, y: 100, r: -90 }].map((a, i) => (
            <g key={i} transform={`translate(${a.x} ${a.y}) rotate(${a.r})`}>
              <path d="M -8 -5 L 4 0 L -8 5" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinejoin="round" />
            </g>
          ))}

          {/* access points — the orange line */}
          <AccessMarker x={205} y={130} n="A1" />
          <AccessMarker x={380} y={126} n="A2" />
          <AccessMarker x={545} y={123} n="A3" />
          <AccessMarker x={702} y={92} n="A4" />

          {/* legend */}
          <g transform="translate(640 210)">
            <rect x="-14" y="-16" width="290" height="112" rx="8" fill="#f5f7f8" stroke="#cbd4db" strokeWidth="1" />
            <circle cx="0" cy="0" r="8" fill={SAFETY} />
            <text x="16" y="4" fontSize="10" fill={INK} style={mono}>A1–A4 · REQUIRED SERVICE ACCESS</text>
            <path d="M -6 24 L 6 29 L -6 34" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinejoin="round" />
            <text x="16" y="33" fontSize="10" fill={INK} style={mono}>AIRFLOW / GREASE PATH</text>
            <line x1="-8" y1="56" x2="8" y2="56" stroke={STEEL_DARK} strokeWidth="1.5" strokeDasharray="5 4" />
            <text x="16" y="60" fontSize="10" fill={INK} style={mono}>ROOF PENETRATION</text>
            <text x="-2" y="84" fontSize="9.5" fill={STEEL_DARK} style={mono}>IF A1–A4 CAN'T BE REACHED,</text>
            <text x="-2" y="97" fontSize="9.5" fill={STEEL_DARK} style={mono}>THE SYSTEM CAN'T BE MAINTAINED.</text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-steel-600">
        Fig. 01 — The grease path, canopy to discharge. Every marked point must stay reachable for the life of the system.
      </figcaption>
    </figure>
  );
}
