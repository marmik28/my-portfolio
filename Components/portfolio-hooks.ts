import { useEffect, useState, type RefObject } from "react";

// Mouse position within a target element, normalized to 0..1.
export function useMouseInRef<T extends HTMLElement>(ref: RefObject<T>) {
  const [p, setP] = useState({ x: 0.5, y: 0.5, active: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setP({
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
        active: true,
      });
    };
    const onLeave = () => setP((s) => ({ ...s, active: false }));

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);

  return p;
}

// Ticking clock for live "now" displays. Returns null until mounted to
// keep server and client markup identical during hydration.
export function useTick(ms = 1000) {
  const [t, setT] = useState<Date | null>(null);

  useEffect(() => {
    setT(new Date());
    const id = setInterval(() => setT(new Date()), ms);
    return () => clearInterval(id);
  }, [ms]);

  return t;
}

// Reactive media-query match.
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);

  return matches;
}
