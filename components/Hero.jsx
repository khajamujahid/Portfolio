"use client";

import SignalSculpture from "@/components/SignalSculpture";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div>
        <p className="hero-topline">
          <span className="status-dot" aria-hidden="true" />
          Currently at Optum
        </p>
        <h1 id="hero-title" className="hero-title">
          I make systems
          <br />
          <em>dependable.</em>
        </h1>
        <p className="hero-copy">
          Senior Software Engineer shipping distributed ETL, low-latency APIs, and applied AI —
          from Optum data platforms to Staples payments and BMW connected vehicles. Throughput up
          35%. Latency under 100ms. Uptime that holds under pressure.
        </p>
        <a className="cta-round" href="#work">
          Enter
          <br />
          the work
        </a>
      </div>
      <SignalSculpture />
    </section>
  );
}
