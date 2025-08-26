'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { contacts } from '@/lib/data';
import TechMarquee from '@/components/TechMarquee';

export default function Hero() {
  return (
    <section id="home" className="section hero" aria-labelledby="hero-title">
      {/* animated network background */}
      <canvas id="bg-canvas" aria-hidden="true"></canvas>

      {/* full-width cover photo behind the avatar */}
      <div className="hero-cover" aria-hidden="true">
        <Image
          src="/hero-bg.jpg"     // <-- your banner in /public
          alt=""                 // decorative
          fill
          priority
          sizes="100vw"
          className="hero-cover-img"
        />
        <div className="hero-cover-overlay" />
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* round avatar */}
        <Image
          src="/profile.jpg"     // <-- your avatar in /public
          width={140}
          height={140}
          alt="Khaja Mujahiddin Mohammed"
          className="hero-avatar"
          priority
          sizes="(max-width: 768px) 128px, 140px"
        />

        <h1 id="hero-title">
          <span className="hi">Hi, I&apos;m</span>{' '}
          <span className="name">Khaja Mujahiddin Mohammed</span>
        </h1>

        <p className="headline">
          Data Scientist &amp; Cloud Engineer — NLP • Computer Vision • MLOps • AWS
        </p>

        <div className="domain-badges" role="list">
          <span className="badge" role="listitem" aria-label="NLP">NLP</span>
          <span className="badge" role="listitem" aria-label="Deep Learning">Deep Learning</span>
          <span className="badge" role="listitem" aria-label="Machine Learning">ML</span>
          <span className="badge" role="listitem" aria-label="Data Visualization">Data Viz</span>
        </div>

        <div className="hero-cta">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn">Contact</a>
          <a href={contacts.resume} className="btn" download>Resume</a>
        </div>

        <div className="subheadlines" aria-label="Highlights">
          <span>3+ years • Data Science &amp; Cloud</span>
          <span>85% accuracy • Multimodal NLP</span>
          <span>30% faster ETL • AWS + Airflow</span>
          <span>20–30% faster decisions • Power BI</span>
        </div>

        <div className="metrics">
          <div className="metric"><strong>3+ yrs</strong><span>Experience</span></div>
          <div className="metric"><strong>85%</strong><span>Fake News Acc.</span></div>
          <div className="metric"><strong>-30%</strong><span>ETL Time</span></div>
          <div className="metric"><strong>20–30%</strong><span>Ops Speed</span></div>
        </div>

        <TechMarquee />
      </motion.div>
    </section>
  );
}
