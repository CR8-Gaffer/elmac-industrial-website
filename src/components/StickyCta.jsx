import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Mobile-only conversion bar: appears after real scroll intent, never on the
// contact page itself. Two actions only — inspect or call.
export default function StickyCta() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Hysteresis: show past 440, hide only below 320. The 120px dead zone
    // stops momentum-scroll jitter at the boundary from double-toggling the bar.
    const onScroll = () => setShow((prev) => (prev ? window.scrollY > 320 : window.scrollY > 440));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.replace(/\/+$/, "") === "/contact") return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 px-4 pt-3 backdrop-blur-md transition-transform duration-150 ease-out md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2.5">
        <Link
          to="/contact"
          className="flex-1 rounded-lg bg-accent py-3 text-center text-[0.92rem] font-bold text-ink no-underline"
        >
          Request a site inspection
        </Link>
        <a
          href="tel:1800435622"
          className="rounded-lg border border-white/[0.25] px-4 py-3 text-center text-[0.92rem] font-bold text-white no-underline"
        >
          1800 4 ELMAC
        </a>
      </div>
    </div>
  );
}
