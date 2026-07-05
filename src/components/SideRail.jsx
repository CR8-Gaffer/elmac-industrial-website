import { useEffect, useState } from "react";

// Sticky side-rail section nav for long pages — mono labels, active tick.
// Renders only on very wide viewports where it sits outside the content wrap.
export default function SideRail({ items = [] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting);
        if (vis.length) {
          setActive(vis.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Page sections"
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 min-[1480px]:block"
    >
      <ul className="m-0 grid list-none gap-3 p-0">
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`group flex items-center gap-2.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] no-underline transition-colors ${
                active === id ? "text-accent-deep" : "text-steel-400 hover:text-steel-600"
              }`}
            >
              <span
                className={`h-px transition-all duration-300 ${
                  active === id ? "w-5 bg-accent" : "w-3 bg-steel-300 group-hover:w-4"
                }`}
              />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
