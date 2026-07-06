// Analytics event helper. No-op until an analytics snippet exists on the page —
// picks up Plausible (window.plausible) or GA4 (window.gtag) automatically the
// moment either script is added to index.html, so events are wired now and
// start flowing the day the account is created.
export default function track(event, props = {}) {
  try {
    if (typeof window.plausible === "function") window.plausible(event, { props });
    else if (typeof window.gtag === "function") window.gtag("event", event, props);
  } catch {
    // analytics must never break the page
  }
}
