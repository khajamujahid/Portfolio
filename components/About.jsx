'use client';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="section-head">
        <p className="eyebrow">About</p>
        <h2 id="about-title">Engineer first. Storyteller second.</h2>
      </div>
      <p className="lede about-lede">
        I design and operate high-throughput microservices, distributed pipelines, and cloud backends end to end —
        architecture, SOLID implementation, CI/CD, observability, and on-call. Python, Java, TypeScript, and
        event-driven systems are my home turf. I also ship grounded AI products with retrieval guardrails, not demos that hallucinate.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h3>How I work</h3>
          <ul>
            <li>Own services from design → production → MTTR</li>
            <li>Prefer boring reliability over fragile cleverness</li>
            <li>Lead reviews; mentor juniors; write ADRs &amp; runbooks</li>
            <li>Measure: latency, throughput, coverage, uptime</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Where I&apos;ve had impact</h3>
          <ul>
            <li>Healthcare data platforms (Optum / UHG)</li>
            <li>B2B payments at Black Friday scale (Staples)</li>
            <li>Connected-vehicle telemetry (BMW via SRIK)</li>
            <li>Multimodal HITL + clinical RAG side projects</li>
          </ul>
        </div>
        <div className="about-card code">
          <h3>Signature snippet</h3>
          <pre><code>{`# FastAPI + Kafka — reliable publish path
@app.post("/events")
async def publish(event: Event):
    await producer.send_and_wait(
        "platform.events",
        event.model_dump_json().encode(),
    )
    metrics.inc("events_published")
    return {"status": "queued"}`}</code></pre>
        </div>
      </div>
    </section>
  );
}
