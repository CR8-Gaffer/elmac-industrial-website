// System Notes — Elmac Industrial's practical knowledge base. Handbook, not
// blog: numbered sections, one real question per entry, answered by people
// who see these systems after installation. Sibling grammar to the wider
// Elmac handbook; entries carry SN codes.

export const SECTIONS = {
  1: { title: "Design & airflow", blurb: "Why systems perform — or quietly don't." },
  2: { title: "Access & serviceability", blurb: "The details that decide every future service." },
  3: { title: "Fans & equipment", blurb: "Replace, repair, relocate — argued honestly." },
  4: { title: "Defit & tenancy", blurb: "Exits, handbacks and landlord expectations." },
  5: { title: "Budget & pathways", blurb: "Where money is protected, and where corners bite." },
};

export const NOTES = [
  {
    slug: "why-access-doors-matter",
    code: "SN 2.01",
    cornerstone: true,
    section: 2,
    q: "Why do access doors matter before the first clean?",
    verdict: "Because the day the system is installed is the only day access is cheap.",
    body: [
      "Every kitchen exhaust system will be cleaned dozens of times across its life — that's not optional, it's the compliance cycle. Each of those services can only reach what the installation allowed it to reach. A duct run without access panels isn't 'clean enough'; it's permanently excluded from every service, forever, while grease accumulates in the one place nobody can see.",
      "The economics are lopsided in a way few owners ever get shown. A panel fitted during installation is a minor line item. The same panel retrofitted later costs multiples — and the years in between are paid for in limitation notes on cleaning reports, fire load sitting above the cooking, and audit questions with awkward answers.",
      "This is the clearest example of why installation and maintenance shouldn't be strangers. An installer who never sees the system again has no reason to think about the twenty-sixth service. We do — because the wider Elmac team performs those services, and 'inaccessible section' is the defect they document more than any other.",
    ],
    field:
      "Across the maintenance side's reports, missing access is the most common defect flagged — more than damaged filters, more than failing fans. Almost every one traces back to a decision made, or not made, on installation day.",
    take: "Access should be designed before the first service is due — not discovered missing at it.",
    doctrine: 21,
    related: ["what-makes-a-system-serviceable", "why-cheap-ductwork-becomes-expensive"],
    offramp: ["Ductwork & access upgrades", "/services/ductwork-access-upgrades"],
    meta: "Why duct access doors matter from installation day: the lopsided economics of panels, permanent exclusion from cleaning, and what maintenance reports reveal about the most common installation defect.",
  },
  {
    slug: "replace-or-repair-exhaust-fan",
    code: "SN 3.01",
    section: 3,
    q: "When should an exhaust fan be replaced rather than repaired?",
    verdict: "When the failure will repeat — repair fixes the fan, replacement can fix the reason.",
    body: [
      "Bearings, belts and motors can all be renewed, and where a fan is fundamentally healthy and well-located, repair is the honest recommendation. The decision turns on why it failed. A fan killed by age after fifteen good years earns a like-for-like successor. A fan dead at four years was murdered by something — grease load on the impeller, heat it wasn't rated for, vibration from imbalance, or a location that guaranteed it would never be serviced.",
      "Replacement day is also the cheapest day for every improvement that's been impossible since installation: relocating to a serviceable position, fitting a hinged base, sizing with real margin instead of nameplate optimism, isolating vibration properly. The crane or roof access is already there; the marginal cost of doing it right is at its lowest point in the system's life.",
      "The wrong answer is the reflex like-for-like swap. Same unit, same position, same killer — same funeral, four years out.",
    ],
    field:
      "Our maintenance crews open more exhaust fans than anyone in the state, and the pattern is consistent: the fans that die young are almost always the fans nobody could service. Grease builds on the impeller, balance goes, bearings follow. The 'noisy fan' complaint is usually this story, half-told.",
    take: "If the old fan died young, the replacement should fix the reason why — or it inherits the killer.",
    doctrine: 1,
    related: ["what-makes-a-system-serviceable", "budget-vs-premium-what-changes"],
    offramp: ["Exhaust fan replacement", "/services/fan-replacement"],
    meta: "Replace or repair a commercial kitchen exhaust fan: how failure cause decides, why replacement day is the cheapest day to fix location and access, and the like-for-like trap.",
  },
  {
    slug: "what-makes-a-system-serviceable",
    code: "SN 2.02",
    section: 2,
    q: "What actually makes a kitchen exhaust system serviceable?",
    verdict: "Four things: reachable surfaces, openable equipment, standard consumables, and geometry that doesn't fight the cleaner.",
    body: [
      "Reachable surfaces means access panels at every change of direction and along long runs — placed where a technician can open them safely, by hand, in under a minute. Panels behind fixed equipment or above fragile ceilings are decoration.",
      "Openable equipment means fans on hinged or accessible mounts, filters that drop out by hand at safe height, and isolation switches where the person servicing can reach them. Standard consumables means filter sizes that exist in exchange stock — odd custom sizes wait on cleaning every single cycle, forever.",
      "Geometry that doesn't fight the cleaner means minimal dead legs, sensible fall so grease drains where intended, and no internal corners a scraper can't address. None of this appears on a compliance certificate at handover — all of it decides what every service costs and covers for the next twenty years.",
    ],
    field:
      "You can read serviceability straight off a venue's cleaning invoices and reports: serviceable systems get cleaned fully, quickly and at consistent prices. Unserviceable ones accumulate limitation notes, longer visits and quiet price creep — the system taxing its owner annually for decisions made once.",
    take: "A system can pass certification and still be painful to own. Serviceability is the difference you live with.",
    doctrine: 24,
    related: ["why-access-doors-matter", "why-cheap-ductwork-becomes-expensive"],
    offramp: ["Kitchen exhaust installation", "/services/installation"],
    meta: "The four properties that make a commercial kitchen exhaust system serviceable — reachable surfaces, openable equipment, standard consumables, cleanable geometry — and how they show up in cleaning invoices.",
  },
  {
    slug: "why-cheap-ductwork-becomes-expensive",
    code: "SN 1.01",
    section: 1,
    q: "Why does cheap ductwork become expensive?",
    verdict: "Because ductwork faults don't announce themselves — they invoice you slowly, through other line items.",
    body: [
      "Thin gauge flexes and works its joints loose; unsealed seams weep grease into ceiling voids; missing fall lets grease pool at low points instead of draining; tight bends built to save material load faster and clean slower. None of these failures is dramatic. Each shows up disguised as something else: a longer cleaning visit, a persistent odour, a stain on a ceiling tile, a limitation note.",
      "The genuinely expensive part arrives later: grease inside a ceiling void is a fire path and a tenancy dispute in waiting, and remediating hidden duct problems means opening ceilings — the same work that would have cost little in open air during construction.",
      "This isn't an argument for gold-plating. Standard commercial gauge, properly sealed and properly supported, is not expensive. The trap is the quote that undercuts it, because the difference was never visible on handover day — only on every day after.",
    ],
    field:
      "When our maintenance side traces a grease leak into a neighbouring tenancy or a ceiling stain, the endpoint is almost always the same: a joint that was never sealed properly, or a run with no fall, installed by the cheaper quote years earlier. The venue paid the difference many times over before anyone found the cause.",
    take: "The cheapest ductwork is rarely cheap. It just invoices you slowly, under other names.",
    doctrine: 10,
    related: ["what-makes-a-system-serviceable", "why-access-doors-matter"],
    offramp: ["System remediation", "/services/system-remediation"],
    meta: "How cheap kitchen exhaust ductwork costs more over time: unsealed joints, missing fall, thin gauge and tight bends — invisible at handover, invoiced through cleaning, leaks and remediation.",
  },
  {
    slug: "what-landlords-expect-at-tenancy-exit",
    code: "SN 4.01",
    section: 4,
    q: "What do landlords actually expect when a kitchen tenancy ends?",
    verdict: "Make-good to the lease, made safe by licensed trades, and evidence of both — bond disputes live in the gaps between those three.",
    body: [
      "Most food tenancy leases require make-good: the exhaust infrastructure removed or reinstated per the schedule, services terminated safely, penetrations sealed and weatherproofed, and the tenancy returned broom-clean. The landlord's agent inspects against that schedule — and against the memory of every bad exit they've ever processed.",
      "The traps are consistent: live gas or electrical connections left 'for the demo crew', roof penetrations capped cosmetically but not weatherproofed, grease trails through common areas during removal, and no record of the final condition. Any one of them converts a routine handback into a bond negotiation.",
      "The counterintuitive advice: involve the exhaust defit early, not last. Removal order, containment and licensed disconnection are cheaper to plan than to argue about — and if the next tenant is already known, preserving penetrations and services for the incoming system can save both sides real money.",
    ],
    field:
      "The defits that go badly are almost never about the removal itself — they're about evidence. The exiting tenant who hands over condition photos and disconnection records ends the conversation before it starts. The one who doesn't spends weeks in email threads about a capped pipe.",
    take: "A clean exit is a documentation exercise wearing overalls. Photograph everything, terminate nothing without a licence.",
    doctrine: 18,
    related: ["why-cheap-ductwork-becomes-expensive", "budget-vs-premium-what-changes"],
    offramp: ["Kitchen exhaust defit", "/services/defit"],
    meta: "What landlords expect at commercial kitchen tenancy exit: make-good to the lease schedule, licensed disconnections, weatherproofed penetrations, and the evidence file that prevents bond disputes.",
  },
  {
    slug: "budget-vs-premium-what-changes",
    code: "SN 5.01",
    section: 5,
    q: "Budget setup vs premium upgrade — what actually changes?",
    verdict: "Finish, margin and lifespan change. Access, sealing and sizing must not — that's the line between economical and dangerous.",
    body: [
      "A practical budget system uses standard-gauge materials, standard-size consumables, essential access provisioning and a right-sized fan without acoustic refinements. It is not a lesser system where it counts: it captures properly, seals properly, and can be fully serviced. Plenty of good venues run exactly this for decades.",
      "Premium spending buys real things: heavier gauge for longer life, low-noise fans for acoustic-sensitive sites, fuller access provisioning than the minimum, integrated finishes for open kitchens, and capacity margin that keeps the system loafing instead of straining. For high-volume kitchens and long-term sites, that margin pays for itself in lifespan and running cost.",
      "What must never move between tiers: capture sizing against the actual cooking load, sealed joints, drainage fall, safe filter access, and a fan that can be serviced. A quote that gets cheaper by touching any of those isn't a budget option — it's a future remediation project with a deposit.",
    ],
    field:
      "The systems our maintenance side struggles with are rarely 'budget' systems — they're systems where the wrong things were economised. A modest, standard build with honest access outperforms an expensive one with a fan nobody can open, every time.",
    take: "Spend less on finish if you need to. Never spend less on access, sealing or sizing — those aren't features, they're the system.",
    doctrine: 4,
    related: ["what-makes-a-system-serviceable", "replace-or-repair-exhaust-fan"],
    offramp: ["Kitchen exhaust installation", "/services/installation"],
    meta: "What actually changes between a budget kitchen exhaust setup and a premium system — where money is legitimately saved, what premium spend really buys, and the three things no tier may compromise.",
  },
];

export const noteBySlug = (slug) => NOTES.find((n) => n.slug === slug);
