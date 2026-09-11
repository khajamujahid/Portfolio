"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/data";

function VeritasStage() {
  const [claim, setClaim] = useState(
    "A viral post claims a new study proved coffee cures migraines overnight."
  );
  const [report, setReport] = useState(null);

  const inspect = () => {
    const lower = claim.toLowerCase();
    const risk =
      /cure|overnight|guaranteed|secret|100%/.test(lower) ? "elevated" :
      /study|research|reported/.test(lower) ? "moderate" : "low";
    setReport({
      risk,
      claims: 1,
      sources: risk === "elevated" ? 0 : 2,
      note:
        risk === "elevated"
          ? "Language cues suggest overclaiming. Flag for fact-check + image forensics."
          : risk === "moderate"
            ? "Claim is checkable. Route to Fact Check API and ELA on attached media."
            : "Weak sensational markers. Still verify provenance before publishing."
    });
  };

  return (
    <div className="mini-panel" aria-live="polite">
      <h4>Inspect claim</h4>
      <textarea
        className="claim-input"
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        aria-label="Claim text to inspect"
      />
      <button type="button" className="chip" onClick={inspect}>
        Run forensics pass
      </button>
      {report && (
        <div className="claim-result">
          Risk: <strong>{report.risk}</strong> · extracted claims {report.claims} ·
          corroborating sources {report.sources}
          <br />
          {report.note}
        </div>
      )}
    </div>
  );
}

function MikaStage() {
  const nodes = [
    { id: "q", label: "Query", detail: "Clinical question enters the agent" },
    { id: "r", label: "Retrieve", detail: "ChromaDB + HuggingFace embeddings (k=4)" },
    { id: "g", label: "Ground", detail: "Guardrails constrain generation to context" },
    { id: "a", label: "Answer", detail: "Gemini responds only from retrieved docs" }
  ];
  const [active, setActive] = useState("r");
  const current = nodes.find((n) => n.id === active);

  return (
    <div className="mini-panel">
      <h4>RAG pipeline</h4>
      <div className="rag-nodes" role="list">
        {nodes.map((n, i) => (
          <button
            key={n.id}
            type="button"
            className={`rag-node${active === n.id ? " is-active" : ""}`}
            onClick={() => setActive(n.id)}
            role="listitem"
          >
            <span aria-hidden="true">{i + 1}</span>
            {n.label}
          </button>
        ))}
      </div>
      <p className="claim-result" style={{ marginTop: "0.85rem" }}>
        <strong>{current.label}</strong> — {current.detail}
      </p>
    </div>
  );
}

function PipelineStage() {
  const [running, setRunning] = useState(false);
  const [fills, setFills] = useState([42, 58, 35]);

  const run = () => {
    setRunning(true);
    setFills([
      70 + Math.floor(Math.random() * 25),
      65 + Math.floor(Math.random() * 30),
      55 + Math.floor(Math.random() * 40)
    ]);
    window.setTimeout(() => setRunning(false), 700);
  };

  const rows = [
    { name: "Extract", metric: `${fills[0]} MB/s` },
    { name: "Transform", metric: `${Math.max(12, 110 - fills[1])} ms` },
    { name: "Load", metric: `${fills[2]}% SLA` }
  ];

  return (
    <div className="mini-panel">
      <h4>Cloud pipeline pulse</h4>
      <div className="pipeline-viz">
        {rows.map((row, i) => (
          <div className="pipe-row" key={row.name}>
            <span className="mono">{row.name}</span>
            <div className="pipe-bar" aria-hidden="true">
              <div className="pipe-fill" style={{ width: `${fills[i]}%` }} />
            </div>
            <span className="pipe-metric">{row.metric}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="chip"
        style={{ marginTop: "0.85rem" }}
        onClick={run}
        aria-busy={running}
      >
        {running ? "Running…" : "Simulate batch"}
      </button>
    </div>
  );
}

const STAGES = {
  veritas: VeritasStage,
  mika: MikaStage,
  pipeline: PipelineStage
};

const TINTS = ["violet", "gold", "blue"];

export default function Projects() {
  const featured = useMemo(
    () => projects.filter((p) => p.featured).slice(0, 3),
    []
  );
  const rest = useMemo(() => projects.filter((p) => !p.featured), []);

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title" className="section-title">
            Built to be inspected.
          </h2>
        </div>
        <p className="section-note">
          Independent tools and platform work — forensics, clinical RAG, and cloud pipelines with
          interactive stages you can poke.
        </p>
      </div>

      <div className="featured-stack">
        {featured.map((project, index) => {
          const Stage = STAGES[project.stage] || PipelineStage;
          return (
            <article
              key={project.title}
              className={`feature-card feature-card--${TINTS[index % TINTS.length]}`}
            >
              <div className="feature-copy">
                <div>
                  <p className="feature-kicker">Featured 0{index + 1}</p>
                  <h3 className="feature-title">{project.title}</h3>
                  <p className="feature-desc">{project.desc}</p>
                  <div className="feature-tags">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="feature-links">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      className="link-arrow"
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="feature-stage">
                <Stage />
              </div>
            </article>
          );
        })}
      </div>

      <div className="section-head" style={{ marginTop: "3.5rem", marginBottom: "1.25rem" }}>
        <h3 className="section-title" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
          More from the lab
        </h3>
        <p className="section-note">The rest of the GitHub shelf — analytics, CV, and BI builds.</p>
      </div>

      <div className="project-grid">
        {rest.map((project) => (
          <article className="project-tile" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="feature-tags">
              {project.tags.slice(0, 3).map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            {project.links?.[0] && (
              <a
                className="link-arrow"
                href={project.links[0].url}
                target="_blank"
                rel="noreferrer"
              >
                Open project <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
