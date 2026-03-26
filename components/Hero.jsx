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
          Senior Data Engineer | Azure & AWS Lakehouse Architect | PySpark • Python • NLP
        </p>

        <div className="domain-badges" role="list">
          <span className="badge" role="listitem">Data Engineering</span>
          <span className="badge" role="listitem">Medallion Architecture</span>
          <span className="badge" role="listitem">NLP / Whisper</span>
          <span className="badge" role="listitem">PySpark</span>
          <span className="badge" role="listitem">Cloud Native</span>
        </div>

        <div className="hero-cta">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn">Contact</a>
          <a href={contacts.resume} className="btn" download>Resume</a>
        </div>

        <div className="subheadlines" aria-label="Highlights">
          <span>6+ years scaling analytics pipelines (Healthcare, Telecom, Retail)</span>
          <span>Architecting Medallion Lakehouses on Azure & AWS</span>
          <span>Deploying NLP & Predictive Models</span>
        </div>

        <div className="metrics">
          <div className="metric"><strong>6+ yrs</strong><span>Experience</span></div>
          <div className="metric"><strong>30%</strong><span>Faster Data Prep</span></div>
          <div className="metric"><strong>NLP</strong><span>Whisper & VAD</span></div>
          <div className="metric"><strong>MS</strong><span>Data Science</span></div>
        </div>

        <TechMarquee />
      </motion.div>
    </section>
  );
}
