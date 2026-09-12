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
      setAuth((v) =>
        Math.min(99.9, Math.max(99.1, +(v + (Math.random() * 0.08 - 0.03)).toFixed(2)))
      );
    }, 450);
    return () => window.clearInterval(id);
  }, [running]);

  const pct = Math.max(8, Math.min(100, ((120 - latency) / 80) * 100));

  return (
    <section className="km-labs" id="labs" aria-labelledby="km-labs-title">
      <div className="km-section-head">
        <p className="km-kicker">Labs</p>
        <h2 id="km-labs-title" className="km-display">
          Tiny live benches
        </h2>
        <p className="km-lede">
          Playful meters inspired by Optum latency targets and Staples authorization
          reliability — illustrative only, not production telemetry.
        </p>
      </div>

      <div className="km-labs-grid">
        <article className="km-panel km-lab">
          <h3>Kafka → API latency</h3>
          <p>Pulse a synthetic downstream path toward the sub-100ms band.</p>
          <div className="km-meter" aria-hidden="true">
            <span style={{ width: `${pct}%` }} />
          </div>
          <p className="km-mono km-lab-readout">{latency.toFixed(0)} ms p95</p>
          <button type="button" className="km-chip-btn" onClick={() => setRunning((v) => !v)}>
            {running ? "Pause stream" : "Start stream"}
          </button>
        </article>

        <article className="km-panel km-lab">
          <h3>Auth success band</h3>
          <p>Payment gateway reliability hovering near the 99.7% mark from Staples work.</p>
          <p className="km-mono km-lab-readout">{auth.toFixed(2)}%</p>
          <button
            type="button"
            className="km-chip-btn"
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
