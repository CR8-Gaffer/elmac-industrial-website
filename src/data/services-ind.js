// Elmac Industrial service content. LIVE = full detail pages (I1: installation,
// defit). The rest are card-level stubs until I2 — cards route to /contact
// with the service preselected, never to a dead page.

export const SERVICE_CARDS = [
  { n: "01", t: "Kitchen Exhaust Installation", b: "Complete systems for new venues, refits and failed-system replacements — access, airflow and the maintenance cycle designed in.", slug: "installation", live: true },
  { n: "02", t: "Kitchen Exhaust Defit", b: "Clean, practical removal for tenancy exits, renovations and closures — site condition and future refit in mind.", slug: "defit", live: true },
  { n: "03", t: "Canopy Installation", b: "Canopies matched to the cooking load, the layout and the maintenance cycle.", slug: "canopy-installation", live: false },
  { n: "04", t: "Exhaust Fan Replacement", b: "Better performance, better access, longer life — not just restored operation.", slug: "fan-replacement", live: false },
  { n: "05", t: "Ductwork & Access Upgrades", b: "If it can't be accessed, it can't be maintained. Panels, modifications, serviceability.", slug: "ductwork-access-upgrades", live: false },
  { n: "06", t: "System Remediation", b: "Fixing what poor design, rushed installation or age left behind.", slug: "system-remediation", live: false },
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
    pathway: "Fits all three pathways — a Practical Compliance install for a first café, through to Premium Long-Life systems for hotels and groups. The serviceability details above are never the corner we cut.",
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
};
