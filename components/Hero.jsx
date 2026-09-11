'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { contacts } from '@/lib/data';
import TechMarquee from '@/components/TechMarquee';

export default function Hero() {
  return (
    <section id="home" className="section hero" aria-labelledby="hero-title">
      <canvas id="bg-canvas" aria-hidden="true"></canvas>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/profile.jpg"
          width={200}
          height={200}
          alt="Khaja Mujahiddin Mohammed"
          className="hero-avatar"
          priority
          sizes="(max-width: 640px) 150px, 200px"
        />

        <h1 id="hero-title">
          <span className="hi">Hi, I&apos;m</span>{' '}
          <span className="name">Khaja Mujahiddin Mohammed</span>
        </h1>

        <p className="headline">
          Senior Software Engineer | Backend &amp; Data Platforms
        </p>

        <div className="domain-badges" role="list">
          <span className="badge" role="listitem">Backend Engineering</span>
          <span className="badge" role="listitem">Microservices</span>
          <span className="badge" role="listitem">Kafka / Event-Driven</span>
          <span className="badge" role="listitem">Python &amp; Java</span>
          <span className="badge" role="listitem">AWS / Kubernetes</span>
        </div>

        <div className="hero-cta">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn">Contact</a>
          <a href={contacts.resume} className="btn" download>Resume</a>
        </div>

        <div className="subheadlines" aria-label="Highlights">
          <span>5+ years owning high-throughput microservices &amp; data platforms</span>
          <span>Python, Java, FastAPI, Spring Boot, Kafka, PostgreSQL</span>
          <span>Shipping RAG / agentic AI systems with production guardrails</span>
        </div>

        <div className="metrics">
          <div className="metric"><strong>5+ yrs</strong><span>Experience</span></div>
          <div className="metric"><strong>35%</strong><span>Throughput Lift</span></div>
          <div className="metric"><strong>99.9%</strong><span>Peak Uptime</span></div>
          <div className="metric"><strong>MS</strong><span>Data Science</span></div>
        </div>

        <TechMarquee />
      </motion.div>
    </section>
  );
}
