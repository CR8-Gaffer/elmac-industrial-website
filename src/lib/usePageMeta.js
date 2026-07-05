import { useEffect } from "react";

function ensureMeta(attr, name) {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  return el;
}

// Per-route title + description. Titles are what search results and shared
// links show; keep them under ~60 chars where possible.
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    ensureMeta("property", "og:title").setAttribute("content", title);
    if (description) {
      ensureMeta("name", "description").setAttribute("content", description);
      ensureMeta("property", "og:description").setAttribute("content", description);
    }
  }, [title, description]);
}
