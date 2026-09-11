'use client';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <h2 id="about-title">About</h2>
      <p>
        Senior Software Engineer with mid-level experience designing and operating high-throughput
        microservices, distributed pipelines, and cloud backend platforms. Proven track record of
        end-to-end service ownership — from architectural design and SOLID object-oriented
        implementation to CI/CD, observability, and production support. Core expertise in Python,
        Java, TypeScript, SQL/NoSQL databases, and event-driven architectures. I lead code reviews,
        drive code quality standards, and scale mission-critical platforms toward 99.99% availability.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h3>Core Strengths</h3>
          <ul>
            <li>Backend microservices (Python/FastAPI, Java/Spring Boot)</li>
            <li>Event-driven systems (Kafka, SQS) &amp; low-latency APIs</li>
            <li>Cloud platforms (AWS ECS/EKS, Azure) with Docker &amp; Kubernetes</li>
            <li>Observability, CI/CD, and production ownership</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Domains</h3>
          <ul>
            <li>Healthcare data platforms (Optum / UnitedHealth Group)</li>
            <li>B2B payments &amp; high-throughput retail transactions</li>
            <li>Connected-vehicle telemetry &amp; dealer platforms (BMW)</li>
            <li>RAG / multimodal AI products with human-in-the-loop workflows</li>
          </ul>
        </div>
        <div className="about-card code">
          <h3>Live Snippet</h3>
          <pre><code>{`# Example FastAPI + Kafka producer pattern
from fastapi import FastAPI
from aiokafka import AIOKafkaProducer

app = FastAPI()
producer: AIOKafkaProducer | None = None

@app.on_event("startup")
async def startup():
    global producer
    producer = AIOKafkaProducer(bootstrap_servers="kafka:9092")
    await producer.start()

@app.post("/events")
async def publish(event: dict):
    await producer.send_and_wait("platform.events", event)
    return {"status": "queued"}`}</code></pre>
        </div>
      </div>
    </section>
  );
}
