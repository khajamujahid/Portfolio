"use client";

import { useEffect, useState } from "react";

export default function LiveLabs() {
  const [latency, setLatency] = useState(86);
  const [auth, setAuth] = useState(99.7);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return undefined;
    const id = window.setInterval(() => {
      setLatency((v) => Math.max(42, Math.min(118, v + (Math.random() * 18 - 9))));
      setAuth((v) => Math.min(99.9, Math.max(99.1, +(v + (Math.random() * 0.08 - 0.03)).toFixed(2))));
    }, 450);
    return () => window.clearInterval(id);
  }, [running]);

  const pct = Math.max(8, Math.min(100, ((120 - latency) / 80) * 100));

  return (
    <section className="section labs" aria-labelledby="labs-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">Live labs</p>
          <h2 id="labs-title" className="section-title">
            Feel the numbers move.
          </h2>
        </div>
        <p className="section-note">
          Tiny interactive demos inspired by Optum latency targets and Staples authorization
          reliability — illustrative only.
        </p>
      </div>

      <div className="labs-grid">
        <article className="lab-card">
          <h3>Kafka → API latency</h3>
          <p>Pulse a synthetic downstream path toward the sub-100ms band.</p>
          <div className="latency-meter" aria-hidden="true">
            <div className="latency-fill" style={{ width: `${pct}%` }} />
          </div>
          <p className="mono gold">{latency.toFixed(0)} ms p95</p>
          <button type="button" className="chip" onClick={() => setRunning((v) => !v)}>
            {running ? "Pause stream" : "Start stream"}
          </button>
        </article>

        <article className="lab-card">
          <h3>Auth success band</h3>
          <p>Payment gateway reliability hovering near the 99.7% mark from Staples work.</p>
          <p className="mono gold" style={{ fontSize: "1.8rem", margin: "0.5rem 0 1rem" }}>
            {auth.toFixed(2)}%
          </p>
          <button
            type="button"
            className="chip"
            onClick={() =>
              setAuth((v) => Math.min(99.9, +(v + Math.random() * 0.05).toFixed(2)))
            }
          >
            Nudge success
          </button>
        </article>
      </div>
    </section>
  );
}
