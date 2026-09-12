"use client";

import { useEffect, useState } from "react";
import Splash from "@/components/Splash";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import LiveLabs from "@/components/LiveLabs";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";

export default function HomePage() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const failsafe = window.setTimeout(() => setBooted(true), 3200);
    return () => window.clearTimeout(failsafe);
  }, []);

  return (
    <>
      <Splash onDone={() => setBooted(true)} />
      <Cursor />
      <NavBar revealed={booted} />
      <main id="main">
        <Hero ready={booted} />
        <Projects />
        <LiveLabs />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}
