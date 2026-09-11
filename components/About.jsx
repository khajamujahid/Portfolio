'use client';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <img className="wavy" src="/wavy-top.svg" alt="" />
      <div className="section-head">
        <h2 id="about-title">About me</h2>
      </div>
      <p className="lede about-lede">
        My name is Khaja, and I love building systems that feel intentional — fast APIs, clean event flows,
        and AI that stays honest to its sources. With 5+ years across healthcare, payments, and connected vehicles,
        I work the full backend pipeline: design, implementation, CI/CD, observability, and production ownership.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h3>What I obsess over</h3>
          <ul>
            <li>Latency, throughput, and boring reliability</li>
            <li>SOLID services you can hand to a teammate</li>
            <li>Guarded RAG — retrieval before generation</li>
            <li>Runbooks, ADRs, and kind code review</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Where I&apos;ve shipped</h3>
          <ul>
            <li>Optum — data platform microservices</li>
            <li>Staples — B2B payment gateway</li>
            <li>BMW (via SRIK) — vehicle telemetry</li>
            <li>Side systems — VERITAS HITL &amp; Clinical RAG</li>
          </ul>
        </div>
        <div className="about-card code">
          <h3>A little snippet</h3>
          <pre><code>{`@app.post("/events")
async def publish(event: Event):
    await producer.send_and_wait(
        "platform.events",
        event.model_dump_json().encode(),
    )
    return {"status": "queued"}`}</code></pre>
        </div>
      </div>
      <p className="lede about-lede" style={{ marginTop: 22 }}>
        Mission: combine creative systems thinking with a whole lot of polish — experiences that spark trust, not just demos.
      </p>
    </section>
  );
}
