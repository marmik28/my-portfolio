import React, { useRef } from "react";
import type { Page } from "./portfolio-data";
import { ISSUE_INDEX, MARQUEE_ITEMS } from "./portfolio-data";
import { useMouseInRef, useMediaQuery } from "./portfolio-hooks";

function MarqueeGroup() {
  return (
    <span className="eb-marquee-group">
      {MARQUEE_ITEMS.map((it, i) => (
        <React.Fragment key={it}>
          {it}
          {i < MARQUEE_ITEMS.length - 1 && (
            <>
              {" "}
              <span className="eb-star">✦</span>{" "}
            </>
          )}
        </React.Fragment>
      ))}
    </span>
  );
}

const HomeView: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
  const ref = useRef<HTMLDivElement>(null);
  const m = useMouseInRef(ref);
  const isDesktop = useMediaQuery("(min-width: 900px) and (pointer: fine)");
  const showCrosshair = isDesktop && m.active;

  return (
    <div ref={ref} className="eb-home eb-fade">
      {/* Live crosshair cursor */}
      {showCrosshair && (
        <>
          <div className="eb-crosshair-h" style={{ top: `${m.y * 100}%` }} />
          <div className="eb-crosshair-v" style={{ left: `${m.x * 100}%` }} />
          <div
            className="eb-crosshair-label"
            style={{ left: `${m.x * 100}%`, top: `${m.y * 100}%` }}
          >
            x{((m.x * 1280) | 0).toString().padStart(4, "0")} y
            {((m.y * 800) | 0).toString().padStart(4, "0")}
          </div>
        </>
      )}

      {/* Masthead meta */}
      <div className="eb-home-meta">
        <span>№ 001 — The Developer Issue</span>
        <span>Toronto · Montréal · Remote</span>
        <span>MMXXVI</span>
      </div>

      {/* Hero grid */}
      <div className="eb-hero-grid">
        <div className="eb-hero-vert">
          ↳ Software developer, product builder, Solana protocol engineer
        </div>
        <div className="eb-hero-main">
          <div className="eb-hero-kicker">★ Featured · Portfolio</div>
          <h1 className="eb-hero-name">
            Marmik
            <br />
            <span className="eb-accent">Patel.</span>
          </h1>
        </div>
      </div>

      {/* Lower row: blurb · index · currently · CTAs */}
      <div className="eb-home-lower">
        <div>
          <div className="eb-label">Editor&rsquo;s note</div>
          <p className="eb-editor-note">
            &ldquo;Driven to turn ideas into{" "}
            <span className="eb-shout">real shipped things</span> — elegant,
            efficient, ruthlessly small.&rdquo;
          </p>
        </div>

        <div>
          <div className="eb-label">In this issue</div>
          <ol className="eb-issue-list">
            {ISSUE_INDEX.map((row) => (
              <li key={row.name} className="eb-issue-item">
                <span>{row.name}</span>
                <span>{row.page}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="eb-label">Currently</div>
          <div className="eb-currently">
            Shipping <b>Voyager</b>&rsquo;s settlement layer. Learning more{" "}
            <b>MEV mechanics</b>. Reading <i>Designing Data-Intensive Apps</i>.
            Playing pickup basketball Tuesdays.
          </div>
        </div>

        <div className="eb-cta-col">
          <button
            className="eb-btn eb-btn-primary"
            onClick={() => setPage("work")}
          >
            <span>Read the work</span>
            <span>→</span>
          </button>
          <button
            className="eb-btn eb-btn-ghost"
            onClick={() => setPage("contact")}
          >
            <span>Contact</span>
            <span>↗</span>
          </button>
        </div>
      </div>

      {/* Marquee */}
      <div className="eb-marquee" aria-hidden="true">
        <div className="eb-marquee-track">
          <MarqueeGroup />
          <MarqueeGroup />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
