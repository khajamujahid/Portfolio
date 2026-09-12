"use client";

import { educationList, stackLine } from "@/lib/data";

export default function About() {
  return (
    <section className="km-about" id="about" aria-labelledby="km-about-title">
      <div className="km-about-story">
        <p className="km-kicker">About</p>
        <h2 id="km-about-title" className="km-display">
          New Haven, systems, and a compiler nickname
        </h2>
        <p>
          I&apos;m Khaja Mujahiddin Mohammed — a senior software engineer for backend and
          data platforms, based in New Haven, Connecticut. I like systems that stay
          quiet when traffic spikes and pipelines that tell you the truth.
        </p>
        <p>
          I earned an M.S. in Data Science at the University of New Haven after a
          B.Tech in Hyderabad. These days I work at Optum on distributed ETL and
          microservice platforms. Before that: B2B payments at Staples, then vehicle
          telemetry for BMW Group through SRIK Consulting.
        </p>
        <p>
          When a problem needs retrieval, I reach for RAG. When it needs throughput,
          I reach for Kafka, Kubernetes, and a well-observed API.
        </p>
      </div>

      <aside className="km-about-side">
        <div className="km-panel">
          <p className="km-kicker">Stack</p>
          <ul className="km-stack">
            {stackLine.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="km-panel">
          <p className="km-kicker">School</p>
          <ul className="km-school">
            {educationList.map((ed) => (
              <li key={ed.title}>
                <strong>{ed.title}</strong>
                <span>{ed.place}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
