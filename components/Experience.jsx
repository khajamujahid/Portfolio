"use client";

import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="km-exp" id="experience" aria-labelledby="km-exp-title">
      <div className="km-section-head">
        <p className="km-kicker">Experience</p>
        <h2 id="km-exp-title" className="km-display">
          Where I&apos;ve shipped
        </h2>
      </div>

      <ol className="km-exp-list">
        {experience.map((job) => (
          <li key={job.meta} className="km-exp-item">
            <div className="km-exp-top">
              <div>
                <h3>{job.company}</h3>
                <p className="km-exp-role">{job.role}</p>
              </div>
              <p className="km-exp-meta">
                <span className="km-mono">{job.years}</span>
                <span>{job.location}</span>
              </p>
            </div>
            <ul>
              {job.bullets.slice(0, 3).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
