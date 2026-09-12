"use client";

import { useEffect, useState } from "react";
import Splash from "@/components/Splash";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

export default function HomePage() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const failsafe = window.setTimeout(() => setBooted(true), 3200);
    return () => window.clearTimeout(failsafe);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("km-home");
    document.body.classList.add("km-home");
    return () => {
      document.documentElement.classList.remove("km-home");
      document.body.classList.remove("km-home");
    };
  }, []);

  return (
    <>
      <Splash onDone={() => setBooted(true)} />
      <NavBar revealed={booted} />
      <main id="main" className="km-home-main">
        <Hero ready={booted} />
      </main>
    </>
  );
}
