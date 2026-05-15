import React, { useState } from "react";
import { PROJECTS } from "./portfolio-data";

const WorkView: React.FC = () => {
  const [open, setOpen] = useState(PROJECTS[0].id);
  const active = PROJECTS.find((p) => p.id === open) ?? PROJECTS[0];
  const num = `0${PROJECTS.findIndex((p) => p.id === active.id) + 1}`;

  return (
    <div className="eb-work eb-fade">
      <div>
        <div className="eb-section-label">02 · Selected work</div>
        <h2 className="eb-work-heading">
          Things I <span className="eb-accent">actually</span> shipped.
        </h2>

        <div className="eb-work-list">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              className={`eb-work-item${open === p.id ? " is-active" : ""}`}
              onClick={() => setOpen(p.id)}
            >
              <span className="eb-work-item-name">
                0{i + 1}. {p.name}
              </span>
              <span className="eb-work-item-year">{p.year}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="eb-work-detail">
        <div className="eb-work-detail-body">
          <div className="eb-work-kicker">{active.kicker}</div>
          <h3 className="eb-work-name">{active.name}</h3>
          <p className="eb-work-summary">{active.summary}</p>
          <p className="eb-work-text">{active.detail}</p>

          <div className="eb-metrics">
            {active.metrics.map((mt) => (
              <div key={mt.k} className="eb-metric">
                <div className="eb-metric-k">{mt.k}</div>
                <div className="eb-metric-v">{mt.v}</div>
              </div>
            ))}
          </div>

          <div className="eb-stack">
            {active.stack.map((s) => (
              <span key={s} className="eb-tag">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="eb-work-bignum" aria-hidden="true">
          {num}
        </div>
      </div>
    </div>
  );
};

export default WorkView;
