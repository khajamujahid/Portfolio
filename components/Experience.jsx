"use client";

import { useState } from "react";
import { experience } from "@/lib/data";

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">Experience</p>
          <h2 id="exp-title" className="section-title">
            The stakes change.
            <br />
            The care doesn’t.
          </h2>
        </div>
        <p className="section-note">
          Healthcare data platforms, retail payments, and connected vehicles — one instinct: build
          it so someone else can rely on it.
        </p>
      </div>

      <div className="exp-list">
        {experience.map((job, index) => {
          const isOpen = open === index;
          const panelId = `exp-panel-${index}`;
          return (
            <div className="exp-item" key={job.meta} data-open={isOpen ? "true" : "false"}>
              <button
                type="button"
                className="exp-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <span className="exp-year">{job.year}</span>
                <span className="exp-main">
                  <span className="exp-company">{job.company}</span>
                  <span className="exp-role">
                    {job.role} · {job.location}
                  </span>
                </span>
                <span className="exp-toggle" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="exp-panel" id={panelId}>
                <div className="exp-panel-inner">
                  <div className="exp-body">
                    <div>
                      <div className="outcome-row">
                        {job.outcomes?.map((o) => (
                          <div className="outcome-pill" key={o.label}>
                            <strong>{o.label}</strong>
                            <span>{o.detail}</span>
                          </div>
                        ))}
                      </div>
                      <div className="exp-tags">
                        {job.tags?.map((t) => (
                          <span className="tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="exp-bullets">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
