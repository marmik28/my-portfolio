import React from "react";
import { EXPERIENCE, MARMIK } from "./portfolio-data";

const AboutView: React.FC = () => {
  return (
    <div className="eb-about eb-fade">
      <div>
        <div className="eb-section-label">03 · About</div>
        <h2 className="eb-about-heading">
          A developer
          <br />
          <span className="eb-accent">who ships.</span>
        </h2>
        <p className="eb-about-bio">{MARMIK.longBio}</p>

        <div className="eb-about-facts">
          <div>
            <div className="eb-fact-k">Based</div>
            <div>Montréal, QC</div>
          </div>
          <div>
            <div className="eb-fact-k">Status</div>
            <div className="eb-status">● Open to roles</div>
          </div>
          <div>
            <div className="eb-fact-k">Years coding</div>
            <div>5+</div>
          </div>
        </div>
      </div>

      <div>
        <div className="eb-section-label">Experience · log</div>
        <div className="eb-exp-log">
          {EXPERIENCE.map((e) => (
            <div key={e.co} className="eb-exp-row">
              <div className="eb-exp-when">{e.when}</div>
              <div>
                <div className="eb-exp-role">{e.role}</div>
                <div className="eb-exp-co">{e.co}</div>
                <div className="eb-exp-what">{e.what}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="eb-offkb">─ Off the keyboard ─</div>
        <p className="eb-offkb-text">
          Loves making products. Loves learning. Plays cricket and runs the 5K
          when the weather allows.
        </p>
      </div>
    </div>
  );
};

export default AboutView;
