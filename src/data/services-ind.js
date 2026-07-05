// Elmac Industrial service content. LIVE = full detail pages (I1: installation,
// defit). The rest are card-level stubs until I2 — cards route to /contact
// with the service preselected, never to a dead page.

export const SERVICE_CARDS = [
  { n: "01", t: "Kitchen Exhaust Installation", b: "Complete systems for new venues, refits and failed-system replacements — access, airflow and the maintenance cycle designed in.", slug: "installation", live: true },
  { n: "02", t: "Kitchen Exhaust Defit", b: "Clean, practical removal for tenancy exits, renovations and closures — site condition and future refit in mind.", slug: "defit", live: true },
  { n: "03", t: "Canopy Installation", b: "Canopies matched to the cooking load, the layout and the maintenance cycle.", slug: "canopy-installation", live: true },
  { n: "04", t: "Exhaust Fan Replacement", b: "Better performance, better access, longer life — not just restored operation.", slug: "fan-replacement", live: true },
  { n: "05", t: "Ductwork & Access Upgrades", b: "If it can't be accessed, it can't be maintained. Panels, modifications, serviceability.", slug: "ductwork-access-upgrades", live: true },
  { n: "06", t: "System Remediation", b: "Fixing what poor design, rushed installation or age left behind.", slug: "system-remediation", live: true },
];

export const SERVICE_PAGES = {
  installation: {
    code: "SERVICE 01",
    title: "Kitchen exhaust installation, designed for the day after handover.",
    meta: {
      title: "Kitchen Exhaust Installation Adelaide | Elmac Industrial",
      desc: "Commercial kitchen exhaust system installation — custom design, air-flow engineering and licensed installation to AS1668 & AS1668.2, with access and the maintenance cycle designed in. New venues, refits, replacements.",
    },
    lead: "For new venues, refits, refurbishments, compliance upgrades and failed-system replacements. We install systems with access, airflow and future maintenance in mind — because our wider team is usually the one who comes back to service them.",
    spec: [
      ["Standard", "AS1668 & AS1668.2"],
      ["Licence", "PGE342023 (plumbing · gas · electrical)"],
      ["Scope", "Design → manufacture → install → commission"],
      ["Stage", "New build · refit · replacement"],
    ],
    wrong: [
      { t: "Sideline installs, decade problems", b: "When exhaust is one job among many, the details that matter later get skipped: panels, fall, fan access. It works on handover day — the problems invoice you slowly." },
      { t: "Undersized systems fail twice", b: "Wrong capture velocity or duct sizing fails certification and chokes the kitchen on its first busy Friday. Retrofit costs multiples of doing it once." },
      { t: "Unlicensed connections are your liability", b: "Gas, electrical and plumbing connections need licensed contractors — certification, insurance and your sign-off all depend on it." },
    ],
    scope: [
      "System design and air-flow analysis engineering",
      "Custom canopy and duct manufacture",
      "Licensed installation — plumbing, gas and electrical",
      "Exhaust fan, discharge cowl and make-up air supply",
      "Roof penetrations, flashings and weatherproofing",
      "Commissioning, certification paperwork, handover pack",
    ],
    accessNote:
      "Future cleaning access is designed during installation planning, not discovered at the first service: access panels at every change of direction, fans mounted for one-person service, duct runs a technician can actually work.",
    maintenance: [
      ["Access panels", "At every bend and junction — a panel costs little on install day and years of drama when it doesn't exist."],
      ["Fan serviceability", "Hinged or accessible mounts so the fan can be opened and lifted without a crane and a prayer."],
      ["Cleanable geometry", "Minimal dead legs, sensible fall, no uncleanable internal corners — grease has nowhere to hide from the scraper."],
      ["Documentation", "As-installed drawings and the recommended service cycle handed over with the keys."],
    ],
    pathway: "Fits all three pathways — Lease-Ready Compliance Works for a first café, through to a Long-Life System Fitout for hotels and groups. The serviceability details above are never the corner we cut.",
    related: [["Kitchen Exhaust Defit", "/services/defit"]],
    cta: { label: "Discuss an install", to: "/contact?service=installation" },
    image: "svc-install.jpg",
  },

  defit: {
    code: "SERVICE 02",
    title: "Kitchen exhaust defit — clean removal, honest handback.",
    meta: {
      title: "Kitchen Exhaust Defit & Removal Adelaide | Elmac Industrial",
      desc: "Commercial kitchen exhaust defit for tenancy exits, landlord requirements, renovations and closures — canopies, ductwork and fans removed cleanly, penetrations made safe, site left ready for handback or refit.",
    },
    lead: "For tenancy exits, landlord requirements, renovations, closures and system replacements. Clean, practical removal of kitchen exhaust infrastructure — with the site's condition, the landlord's expectations and any future refit in mind.",
    spec: [
      ["Scope", "Canopy · duct · fan · make-safe"],
      ["Stage", "Tenancy exit · reno · closure"],
      ["Handback", "Penetrations capped · site broom-clean"],
      ["Licence", "PGE342023 disconnections"],
    ],
    wrong: [
      { t: "Defit is where bonds go to die", b: "Landlords inspect exits hard. Ragged penetrations, live services left hanging and grease trails through common areas turn a handback into a dispute." },
      { t: "Greasy systems travel badly", b: "A loaded duct pulled out carelessly spreads years of grease through a tenancy on its way to the skip. Removal order and containment matter." },
      { t: "Live services aren't demolition", b: "Gas, power and water connections into exhaust equipment need licensed disconnection — 'the demo crew will sort it' is how incidents start." },
    ],
    scope: [
      "Pre-defit inspection: services, condition, access, landlord requirements",
      "Licensed disconnection of gas, electrical and plumbing",
      "Contained removal of canopies, ductwork, fans and cowls",
      "Roof and ceiling penetrations capped and made weather-safe",
      "Waste, grease and materials disposed of properly",
      "Handback documentation — photos of final condition",
    ],
    accessNote:
      "If a refit is coming, tell us — penetrations, services and structure can be preserved and documented for the incoming system instead of made-safe twice at double the cost.",
    maintenance: [
      ["Containment first", "Loaded systems are wrapped and sectioned before they move — the tenancy stays clean while the dirty part leaves."],
      ["Make-safe that passes inspection", "Capped, sealed, weatherproofed and photographed — the standard a landlord's agent expects to find."],
      ["Refit-aware removal", "Where a new system follows, we remove to a line that the incoming install can build from."],
      ["Paper trail", "Condition photos and disconnection records — the exit file that ends bond arguments."],
    ],
    pathway: "Usually scoped as a fixed package after inspection. Pairs naturally with a new installation when the next tenant or concept is already known.",
    related: [["Kitchen Exhaust Installation", "/services/installation"]],
    cta: { label: "Plan a defit", to: "/contact?service=defit" },
    image: "doc-roof-array.jpg",
  },

  "canopy-installation": {
    code: "SERVICE 03",
    title: "Canopy installation — sized for the cooking, built for the cleaning.",
    meta: {
      title: "Commercial Kitchen Canopy Installation Adelaide | Elmac Industrial",
      desc: "Commercial kitchen canopy installation — sized to the cooking load and layout, with filter access, cleaning access and clearances designed in. New kitchens, replacements, upgraded cooking lines.",
    },
    lead: "For new kitchens, replacement canopies, upgraded cooking lines and practical layouts. A canopy should suit the cooking load, the kitchen layout and the maintenance cycle — not just the wall space it has to fill.",
    spec: [
      ["Sizing", "To the cooking load, not the wall"],
      ["Materials", "Commercial-grade stainless"],
      ["Access", "Filters & interior serviceable by hand"],
      ["Stage", "New kitchen · replacement · upgrade"],
    ],
    wrong: [
      { t: "Sized to the wall, not the wok", b: "A canopy that fits the space but not the cooking load smokes the kitchen out at peak service. Capture area and overhang come from what's underneath, not what's beside it." },
      { t: "Filters nobody can reach", b: "Filter banks mounted too high, too deep or behind obstructions turn a weekly two-minute task into a job that quietly stops happening." },
      { t: "Interiors that fight the cleaner", b: "Sharp internal returns, inaccessible plenums and unsealed seams make every future service slower and worse — the canopy technically works and is painful to own." },
    ],
    lookFor: [
      "The clearance between filter face and cooking equipment — get it wrong and either the filters load in days or a tall pot won't fit under the canopy.",
      "How the filter bank sits: our maintenance side handles thousands of filters a year, and the canopies that stay compliant are the ones where filters drop out by hand, at safe height, without tools.",
      "Where the grease goes when it isn't caught — gutters and drain points that actually collect, instead of seams that drip onto the pass.",
    ],
    scope: [
      "Canopy sizing against the cooking line and layout",
      "Commercial stainless canopy supply and installation",
      "Filter banks selected for hand access and standard sizes",
      "Grease gutters, drain points and sealed seams",
      "Connection into new or existing ductwork",
      "Clearances and splashback coordination with the fitout",
    ],
    accessNote:
      "Filter size matters later: standard-size filters can be exchanged from swap-out stock in minutes; odd custom sizes wait on cleaning every cycle. We spec standard where the design allows.",
    maintenance: [
      ["Hand-access filters", "Drop-out by hand at safe height — the difference between a filter cycle that happens and one that doesn't."],
      ["Cleanable interior", "Smooth internal geometry and sealed seams the maintenance crew can actually wipe down and degrease."],
      ["Real grease capture", "Gutters and drains that collect, positioned where the load actually forms."],
      ["Standard consumables", "Filter sizes chosen so replacements and exchange stock exist off the shelf."],
    ],
    defects: [
      "Undersized capture area over the cooking line",
      "Filters mounted beyond safe hand reach",
      "Unsealed seams dripping onto benches",
      "Custom filter sizes nobody stocks",
      "Plenums with no cleaning access",
      "Clearance conflicts with tall equipment",
    ],
    budget: {
      practical: "A right-sized standard canopy in commercial-grade stainless, hand-access filters, sealed seams. Modest venues don't need showpieces — they need capture, access and compliance that hold.",
      premium: "Heavier-gauge construction, integrated ceiling runs, low-profile lines for open kitchens, upgraded filtration and finish for front-of-house visibility. Same serviceability rules, higher spec everywhere else.",
    },
    processVerb: "Install",
    pathway: "",
    related: [["Kitchen Exhaust Installation", "/services/installation"], ["Ductwork & Access Upgrades", "/services/ductwork-access-upgrades"]],
    cta: { label: "Request a site inspection", to: "/contact?service=canopy-installation" },
    image: "svc-install.jpg",
  },

  "fan-replacement": {
    code: "SERVICE 04",
    title: "Exhaust fan replacement — better than the one that failed.",
    meta: {
      title: "Kitchen Exhaust Fan Replacement Adelaide | Elmac Industrial",
      desc: "Commercial kitchen exhaust fan replacement for failed, noisy, weak or badly located fans — sized properly, mounted for service access, with roof constraints handled. Replacement vs upgrade advice included.",
    },
    lead: "For failed, noisy, underperforming or badly located fans. Fan replacement should improve performance, access and long-term reliability — not just restore basic operation. If the old fan died young, the replacement should fix the reason why.",
    spec: [
      ["Failures", "Dead · noisy · weak · misplaced"],
      ["Mounting", "Service access designed in"],
      ["Location", "Roof · wall · inline"],
      ["Decision", "Replace vs upgrade — argued honestly"],
    ],
    wrong: [
      { t: "Like-for-like repeats the failure", b: "Swapping a dead fan for the same unit in the same spot buys you the same lifespan. If grease, heat or vibration killed it, the replacement inherits the killer." },
      { t: "The fan nobody can open", b: "Fans mounted without service access never get cleaned or balanced — grease builds on the impeller until noise, vibration and failure arrive on schedule." },
      { t: "Noise complaints are design complaints", b: "A screaming fan is usually undersized, loaded with grease, or the wrong type for the run. Louder isn't stronger — it's a symptom." },
    ],
    lookFor: [
      "Grease on the impeller — our maintenance crews open more exhaust fans than anyone, and an unbalanced, grease-loaded impeller is the most common reason 'the fan is noisy' and the most preventable killer of bearings.",
      "Whether the fan can actually be opened and lifted where it sits — hinged bases and access clearance decide if it ever gets serviced again.",
      "What the duct run is doing to the fan: undersized runs, tight bends and blocked filters make a healthy fan test like a dying one.",
    ],
    scope: [
      "Fan assessment: replace vs upgrade, argued with reasons",
      "Correct sizing against the system, not just the old nameplate",
      "Supply and installation — roof, wall and inline units",
      "Hinged or access-mounted bases for future service",
      "Licensed electrical connection and controls",
      "Roof penetrations, flashings and weatherproofing where relocation is needed",
    ],
    accessNote:
      "If the old fan location made service impossible, replacement day is the cheapest moment it will ever be to relocate or re-mount it. We'll price both before you decide.",
    maintenance: [
      ["Hinged access", "The fan opens for cleaning and inspection without dismantling half the roof."],
      ["Sized with margin", "Enough capacity that the fan isn't screaming at full load from day one."],
      ["Vibration isolated", "Mounts that stop the fan advertising itself through the building."],
      ["The killer fixed", "Whatever ended the old fan — grease load, heat, placement — addressed, not inherited."],
    ],
    defects: [
      "Like-for-like swaps that fail again",
      "Fans that cannot be opened in place",
      "Noise from undersizing or imbalance",
      "Poor placement blocking future access",
      "Unflashed or leaking roof penetrations",
      "Controls without isolation for service",
    ],
    budget: {
      practical: "A correctly sized, quality commercial unit with an access-aware mount and licensed connection. The reliability is in the sizing and mounting, not the badge.",
      premium: "Low-noise units for acoustic-sensitive sites, upgraded bearings and speed control, relocation to better positions, and monitoring-ready wiring for sites that plan ahead.",
    },
    processVerb: "Replace",
    pathway: "",
    related: [["Ductwork & Access Upgrades", "/services/ductwork-access-upgrades"], ["System Remediation", "/services/system-remediation"]],
    cta: { label: "Plan a replacement", to: "/contact?service=fan-replacement" },
    image: "doc-roof-array.jpg",
  },

  "ductwork-access-upgrades": {
    code: "SERVICE 05",
    title: "Ductwork & access upgrades — make the system maintainable.",
    meta: {
      title: "Duct Access Doors & Ductwork Upgrades Adelaide | Elmac Industrial",
      desc: "Access door installation, duct modifications and serviceability upgrades for commercial kitchen exhaust systems — because a system that cannot be accessed cannot be maintained properly.",
    },
    lead: "For access doors, duct modifications, serviceability improvements and compliance-focused upgrades. The rule is simple and unforgiving: if it cannot be accessed, it cannot be maintained properly — and unmaintained sections are where fire load lives.",
    spec: [
      ["Core work", "Access doors · duct mods"],
      ["Driver", "Serviceability & compliance"],
      ["Sites", "Operating kitchens — live-site aware"],
      ["Payoff", "Cheaper, faster, fuller cleans"],
    ],
    wrong: [
      { t: "The section nobody has ever cleaned", b: "Duct runs without access panels stay loaded for the life of the building. Every clean 'completes' around them, every report carries the same limitation, and the fire load just sits there." },
      { t: "Access that isn't", b: "Panels behind fixed equipment, above unrated ceilings or at heights nobody can safely work are decoration, not access." },
      { t: "Modifications by the lowest bidder", b: "Duct cut and patched without sealing, fall or fire-integrity in mind trades one problem for three." },
    ],
    lookFor: [
      "The limitation lines on cleaning reports — our maintenance side documents 'inaccessible section' more than any other defect, and every one of those lines is a purchase order this service closes.",
      "Changes of direction without panels: grease collects hardest exactly where ductwork bends, which is exactly where access is most often missing.",
      "Whether existing panels can be opened by one technician, safely, in under a minute — if not, they don't get opened.",
    ],
    scope: [
      "Access audit against the actual cleaning scope — where the misses are",
      "Access door supply and installation at changes of direction and long runs",
      "Duct modifications: rerouting, sealing, fall correction",
      "Serviceability improvements around fans, risers and plenums",
      "Live-kitchen scheduling — works staged around trade",
      "Documentation: what was added, where, and what it unlocks",
    ],
    accessNote:
      "A missing access panel is the single most common defect flagged across our maintenance work. Retrofitting one costs a fraction of what the unreachable section quietly accumulates in risk and rework.",
    maintenance: [
      ["Panels where grease lives", "At bends, junctions and long runs — placed off the cleaning scope, not off a drawing guess."],
      ["One-person operation", "Doors a technician can open safely and quickly, or they may as well not exist."],
      ["Sealed and sound", "Modifications that hold their sealing, fall and integrity — no new leaks for old ones."],
      ["Report-visible payoff", "The next cleaning report loses its limitation lines. That's the whole point."],
    ],
    defects: [
      "Permanently uncleanable duct sections",
      "Grease accumulating at unreachable bends",
      "Reports carrying the same limitation for years",
      "Panels blocked by equipment or height",
      "Leaking joints after amateur modifications",
      "Compliance findings on access grounds",
    ],
    budget: {
      practical: "Targeted panels at the worst-miss locations first — ranked by what the cleaning reports say gets skipped. Maximum unlocked access per dollar.",
      premium: "Full-system access provisioning to the standard a new install would carry, plus rerouting and fall correction where the original design fights maintenance.",
    },
    processVerb: "Upgrade",
    pathway: "",
    related: [["System Remediation", "/services/system-remediation"], ["Exhaust Fan Replacement", "/services/fan-replacement"]],
    cta: { label: "Ask about access improvements", to: "/contact?service=ductwork-access-upgrades" },
    image: "doc-depot-dawn.jpg",
  },

  "system-remediation": {
    code: "SERVICE 06",
    title: "System remediation — fixing what was left behind.",
    meta: {
      title: "Kitchen Exhaust System Remediation Adelaide | Elmac Industrial",
      desc: "Remediation for leaking, underperforming, inaccessible or badly installed kitchen exhaust systems — diagnosis first, then practical fixes, staged for budget where needed.",
    },
    lead: "For leaking, poorly installed, inaccessible or underperforming systems. We help venues fix the problems left behind by poor design, rushed installation or ageing infrastructure — starting with an honest diagnosis of why the system behaves the way it does.",
    spec: [
      ["Symptoms", "Leaks · smoke · noise · odour"],
      ["Method", "Diagnose first, fix second"],
      ["Delivery", "Phased where budget needs it"],
      ["Sites", "Operating venues — trade-aware"],
    ],
    wrong: [
      { t: "Treating symptoms on repeat", b: "Re-sealing the same joint, re-cleaning the same drip, re-tightening the same fan — without diagnosis, the same problems return on the same schedule, invoiced each time." },
      { t: "A system can run and still be a problem", b: "It technically works: the kitchen smokes a little, the fan is loud, the cleaners skip a section, the report carries limitations. None of it is broken enough to force action — all of it costs money." },
      { t: "The cheapest fix is rarely cheap", b: "The lowest quote usually addresses the visible half of the problem. If it recreates the same failure, you've paid twice to be where you started." },
    ],
    lookFor: [
      "Patterns across cleaning cycles — when our maintenance side sees the same drip, the same loading, the same limitation report after report, that's not a cleaning problem. It's an installation problem wearing a disguise.",
      "Where the grease actually travels versus where the design assumed it would — leaks and odour complaints almost always trace to a specific joint, fall error or pressure imbalance.",
      "What's worth keeping: remediation isn't replacement. Sound ductwork, a good canopy or a healthy fan stay; the failures around them get fixed.",
    ],
    scope: [
      "System diagnosis: airflow, sealing, fall, access, condition",
      "Leak identification and permanent sealing — evidence first, fix second",
      "Airflow correction: duct, fan and balance issues",
      "Access retrofits so the fixed system stays maintainable",
      "Component replacement only where diagnosis says so",
      "Phased remediation plans for budget-sensitive sites",
    ],
    accessNote:
      "Phasing is legitimate: fix the fire-load and leak risks now, schedule the serviceability and performance work across quarters. What doesn't work is fixing symptoms in random order — the diagnosis sets the sequence.",
    maintenance: [
      ["Diagnosis you can read", "Findings with photos and reasons — what's failing, why, and in what order to fix it."],
      ["Fixes that end repeat visits", "The joint sealed properly once beats the joint patched annually forever."],
      ["Keep what's good", "We remediate around sound components instead of quoting you a new system you don't need."],
      ["A system the cleaners can finish", "Remediation closes the gaps that made every previous clean incomplete."],
    ],
    defects: [
      "Grease leaks returning after every patch",
      "Kitchens that smoke at peak service",
      "Chronic noise and vibration",
      "Sections skipped by every clean",
      "Odour migrating to neighbouring tenancies",
      "Reports carrying the same findings for years",
    ],
    budget: {
      practical: "Phased remediation: risk items first (leaks, fire load, failing fans), serviceability and performance staged across the year. The diagnosis sets the order so every dollar lands on the right problem.",
      premium: "Full-system remediation in one program — sealing, access, airflow, fan and controls brought to the standard a new install would carry, without paying for a new install.",
    },
    processVerb: "Remediate",
    pathway: "",
    related: [["Ductwork & Access Upgrades", "/services/ductwork-access-upgrades"], ["Kitchen Exhaust Installation", "/services/installation"]],
    cta: { label: "Review an existing system", to: "/contact?service=system-remediation" },
    image: "doc-harness-check.jpg",
  },
};
