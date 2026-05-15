import React from "react";
import type { Page } from "./portfolio-data";
import { useTick } from "./portfolio-hooks";

const ITEMS: { key: Page; label: string }[] = [
  { key: "home", label: "01 · Index" },
  { key: "work", label: "02 · Work" },
  { key: "about", label: "03 · About" },
  { key: "contact", label: "04 · Contact" },
];

const Nav: React.FC<{ page: Page; setPage: (p: Page) => void }> = ({
  page,
  setPage,
}) => {
  const t = useTick(1000);
  const time = t
    ? t.toLocaleTimeString("en-CA", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Toronto",
        hour12: false,
      })
    : "--:--";

  return (
    <nav className="eb-nav">
      <div className="eb-brand">
        <div className="eb-brand-mark">M</div>
        <span>Marmik / Vol. 04</span>
      </div>

      <div className="eb-nav-items">
        {ITEMS.map((it) => (
          <button
            key={it.key}
            className={`eb-nav-btn${page === it.key ? " is-active" : ""}`}
            onClick={() => setPage(it.key)}
            aria-current={page === it.key ? "page" : undefined}
          >
            {it.label}
          </button>
        ))}
      </div>

      <div className="eb-nav-meta">
        <span className="eb-nav-meta-extra">Montréal</span>
        <span className="eb-nav-meta-extra" suppressHydrationWarning>
          {time} EST
        </span>
        <span className="eb-status">● Available</span>
      </div>
    </nav>
  );
};

export default Nav;
