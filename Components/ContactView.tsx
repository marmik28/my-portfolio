import React, { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import { MARMIK, STATS } from "./portfolio-data";

const CARDS: { k: string; v: string; href: string; external: boolean }[] = [
  { k: "Email", v: MARMIK.email, href: `mailto:${MARMIK.email}`, external: false },
  { k: "GitHub", v: MARMIK.github, href: MARMIK.githubUrl, external: true },
  { k: "LinkedIn", v: MARMIK.linkedin, href: MARMIK.linkedinUrl, external: true },
  { k: "Résumé", v: MARMIK.resume, href: MARMIK.resumeUrl, external: true },
];

const ContactView: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    if (!resumeOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setResumeOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [resumeOpen]);

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
          {CARDS.map((c) => {
            const isResume = c.k === "Résumé";
            return (
              <a
                key={c.k}
                className="eb-contact-card"
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  track("contact_click", { type: c.k });
                  if (isResume) {
                    e.preventDefault();
                    setResumeOpen(true);
                  }
                }}
              >
                <div className="eb-card-k">{c.k} ↗</div>
                <div className="eb-card-v">{c.v}</div>
              </a>
            );
          })}
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

      {resumeOpen && (
        <div
          className="eb-resume-modal"
          onClick={() => setResumeOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Résumé preview"
        >
          <div
            className="eb-resume-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="eb-resume-modal-bar">
              <span className="eb-resume-modal-title">{MARMIK.resume}</span>
              <div className="eb-resume-modal-actions">
                <a
                  className="eb-resume-modal-btn eb-resume-modal-open-tab"
                  href={MARMIK.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("resume_open_tab")}
                >
                  Open in new tab ↗
                </a>
                <a
                  className="eb-resume-modal-btn"
                  href={MARMIK.resumeUrl}
                  download
                  onClick={() => track("resume_download")}
                >
                  Download
                </a>
                <button
                  type="button"
                  className="eb-resume-modal-close"
                  aria-label="Close"
                  onClick={() => setResumeOpen(false)}
                >
                  ✕
                </button>
              </div>
            </div>
            <iframe
              className="eb-resume-modal-frame"
              src={MARMIK.resumeUrl}
              title="Résumé"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactView;
