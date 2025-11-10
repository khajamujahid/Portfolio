'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { contacts } from '@/lib/data';
import TechMarquee from '@/components/TechMarquee';

export default function Hero() {
  return (
    <section id="home" className="section hero" aria-labelledby="hero-title">
      {/* animated network canvas stays */}
      <canvas id="bg-canvas" aria-hidden="true"></canvas>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Bigger avatar */}
        <Image
          src="/profile.jpg"                 // put your photo at /public/profile.jpg
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
          Entry-Level Data Scientist | SQL • Python • Power BI | MS Data Science (May 2025) | AWS | Gen AI
        </p>

        <div className="domain-badges" role="list">
          <span className="badge" role="listitem">NLP</span>
          <span className="badge" role="listitem">R Programming</span>
          <span className="badge" role="listitem">Deep Learning</span>
          <span className="badge" role="listitem">ML</span>
          <span className="badge" role="listitem">Python</span>
        </div>

        <div className="hero-cta">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn">Contact</a>
          <a href={contacts.resume} className="btn" download>Resume</a>
        </div>

        <div className="subheadlines" aria-label="Highlights">
          <span>Recent M.S. Data Science graduate with 4-month US internship.</span>
          <span>85% accuracy • Multimodal NLP</span>
          <span>30% faster ETL • AWS + Airflow</span>
          <span>20–30% faster decisions • Power BI</span>
        </div>

        <div className="metrics">
          <div className="metric"><strong>4 mo</strong><span>US Internship</span></div>
          <div className="metric"><strong>8–10</strong><span>Production Dashboards</span></div>
          <div className="metric"><strong>50+</strong><span>Active Users</span></div>
          <div className="metric"><strong>85%</strong><span>Fake-News Accuracy</span></div>
          <div className="metric"><strong>20–30%</strong><span>Ops Speed</span></div>
          
        </div>

        <TechMarquee />
      </motion.div>
    </section>
  );
}
