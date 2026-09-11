'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { contacts } from '@/lib/data';
import TechMarquee from '@/components/TechMarquee';

const SNIPPET = `POST /events  →  Kafka  →  FastAPI workers
p95 latency:  < 100ms   uptime: 99.9%
stack: Python · Java · TypeScript · AWS EKS`;

export default function Hero() {
  return (
    <section id="home" className="section hero hero-bento" aria-labelledby="hero-title">
      <canvas id="bg-canvas" aria-hidden="true"></canvas>

      <div className="hero-grid">
        <motion.div
          className="hero-main"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/profile.jpg"
            width={160}
            height={160}
            alt="Khaja Mujahiddin Mohammed"
            className="hero-avatar"
            priority
            sizes="(max-width: 640px) 120px, 160px"
          />
          <p className="eyebrow">Available for SWE / Backend / AI roles</p>
          <h1 id="hero-title">
            <span className="hi">Hi, I&apos;m</span>{' '}
            <span className="name">Khaja Mujahiddin Mohammed</span>
          </h1>
          <p className="headline">
            Senior Software Engineer building resilient backends, event-driven platforms, and grounded AI systems.
          </p>
          <div className="domain-badges" role="list">
            <span className="badge" role="listitem">Backend platforms</span>
            <span className="badge" role="listitem">Kafka / microservices</span>
            <span className="badge" role="listitem">RAG with guardrails</span>
            <span className="badge" role="listitem">AWS · K8s · Observability</span>
          </div>
          <div className="hero-cta">
            <a href="#labs" className="btn primary">Try live labs</a>
            <a href="#projects" className="btn">Projects</a>
            <a href={contacts.resume} className="btn" download>Resume</a>
          </div>
          <div className="metrics">
            <div className="metric"><strong>5+ yrs</strong><span>Shipping prod systems</span></div>
            <div className="metric"><strong>35%</strong><span>Throughput lift</span></div>
            <div className="metric"><strong>&lt;100ms</strong><span>Peak API latency</span></div>
            <div className="metric"><strong>99.9%</strong><span>Black Friday uptime</span></div>
          </div>
        </motion.div>

        <motion.aside
          className="hero-side"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="terminal-card">
            <div className="terminal-bar">
              <span /><span /><span />
              <em>platform-status.sh</em>
            </div>
            <pre>{SNIPPET}</pre>
          </div>
          <div className="signal-cards">
            <div className="signal">
              <strong>Optum</strong>
              <span>Data platform microservices · FastAPI · Kafka</span>
            </div>
            <div className="signal">
              <strong>Staples</strong>
              <span>Payments gateway · 99.7% auth success</span>
            </div>
            <div className="signal">
              <strong>BMW</strong>
              <span>50k+ vehicle telemetry · gRPC · EKS</span>
            </div>
          </div>
        </motion.aside>
      </div>
      <TechMarquee />
    </section>
  );
}
