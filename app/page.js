'use client';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import LiveLabs from '@/components/LiveLabs';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Chatbot from '@/components/Chatbot';

export default function Page() {
  return (
    <>
      <div className="parallax-bg" aria-hidden="true" />
      <div className="dot-bg" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="shapes-bg" src="/shapes-bg.svg" alt="" />
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <LiveLabs />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="footer-fun">Always curious. Always shipping.</div>
        © {new Date().getFullYear()} Khaja Mujahiddin Mohammed
      </footer>
      <Chatbot />
    </>
  );
}
