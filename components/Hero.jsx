'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { contacts } from '@/lib/data';
import TechMarquee from '@/components/TechMarquee';

export default function Hero() {
  return (
    <section id="home" className="section hero" aria-labelledby="hero-title">
      <div className="hero-lars">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Senior Software Engineer</p>
          <h1 id="hero-title">
            <span className="hi">Hey there — I&apos;m</span>
            <span className="name">Khaja Mujahiddin Mohammed</span>
          </h1>
          <p className="headline">
            I craft resilient backends, event-driven platforms, and grounded AI systems —
            with the polish of a product thinker and the rigor of someone who&apos;s been on-call.
          </p>
          <div className="domain-badges" role="list">
            <span className="badge" role="listitem">FastAPI · Spring Boot</span>
            <span className="badge" role="listitem">Kafka · microservices</span>
            <span className="badge" role="listitem">RAG with guardrails</span>
            <span className="badge" role="listitem">AWS · Kubernetes</span>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="btn primary">See projects</a>
            <a href="#labs" className="btn">Play with labs</a>
            <a href={contacts.resume} className="btn" download>Résumé</a>
          </div>
          <div className="metrics">
            <div className="metric"><strong>5+ yrs</strong><span>shipping prod</span></div>
            <div className="metric"><strong>35%</strong><span>throughput lift</span></div>
            <div className="metric"><strong>&lt;100ms</strong><span>peak API latency</span></div>
            <div className="metric"><strong>99.9%</strong><span>BF uptime</span></div>
          </div>
        </motion.div>

        <motion.div
          className="hero-side"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <div className="window-frame" aria-hidden="false">
            <div className="window-chrome"><i /><i /><i /></div>
            <div className="window-body">
              <Image
                src="/profile.jpg"
                width={160}
                height={160}
                alt="Khaja Mujahiddin Mohammed"
                className="hero-avatar"
                priority
              />
              <p className="window-title">khaja.exe</p>
              <p className="window-sub">Backend &amp; Data Platforms · New Haven, CT</p>
            </div>
          </div>
        </motion.div>
      </div>
      <TechMarquee />
    </section>
  );
}
