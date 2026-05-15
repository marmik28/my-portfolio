import React from "react";
import { MARMIK, STATS } from "./portfolio-data";

const CARDS: { k: string; v: string; href: string; external: boolean }[] = [
  { k: "Email", v: MARMIK.email, href: `mailto:${MARMIK.email}`, external: false },
  { k: "GitHub", v: MARMIK.github, href: MARMIK.githubUrl, external: true },
  { k: "LinkedIn", v: MARMIK.linkedin, href: MARMIK.linkedinUrl, external: true },
  { k: "Résumé", v: MARMIK.resume, href: MARMIK.resumeUrl, external: true },
];

const ContactView: React.FC = () => {
  return (
    <div className="eb-contact eb-fade">
      <div>
        <div className="eb-section-label">04 · Contact</div>
        <h2 className="eb-contact-heading">
          Let&rsquo;s
          <br />
          <span className="eb-accent">build</span> something.
        </h2>
        <p className="eb-contact-sub">
          The best collaborations start with a problem worth solving. Got one?
        </p>

        <div className="eb-contact-cards">
          {CARDS.map((c) => (
            <a
              key={c.k}
              className="eb-contact-card"
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
            >
              <div className="eb-card-k">{c.k} ↗</div>
              <div className="eb-card-v">{c.v}</div>
            </a>
          ))}
        </div>
      </div>

      <div>
        <div className="eb-section-label">By the numbers</div>
        <div className="eb-stats-list">
          {STATS.map((s) => (
            <div key={s.k} className="eb-stat-row">
              <span className="eb-stat-k">{s.k}</span>
              <span className="eb-stat-v">{s.v}</span>
            </div>
          ))}
        </div>

        <div className="eb-colophon">
          <div className="eb-colophon-label">{"// colophon"}</div>
          Set in Instrument Serif &amp; Inter Tight. Hand-built, no template.
          Printed once, served daily.
        </div>
      </div>
    </div>
  );
};

export default ContactView;
