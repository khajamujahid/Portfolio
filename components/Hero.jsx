"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import KmSculpture from "@/components/KmSculpture";

const CTAS = [
  { href: "#work", label: "→ view my projects" },
  { href: "#about", label: "→ learn more" }
];

export default function Hero({ ready }) {
  const reduce = useReducedMotion();
  const show = ready || reduce;
  const [dance, setDance] = useState(false);

  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduce ? 0 : 0.08 * i,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const triggerDance = () => {
    if (reduce) return;
    setDance(true);
    window.setTimeout(() => setDance(false), 1600);
  };

  return (
    <section className="km-hero" id="top" aria-labelledby="km-name">
      <div className="km-hero-drift" aria-hidden="true">
        <span className="km-blob km-blob-a" />
        <span className="km-blob km-blob-b" />
        <span className="km-blob km-blob-c" />
        <span className="km-float-shape km-float-brace-l" />
        <span className="km-float-shape km-float-brace-r" />
        <span className="km-float-shape km-float-orb" />
      </div>

      <div className="km-hero-stage">
        <motion.div
          className={`km-hero-sculpture-wrap${dance ? " is-dancing" : ""}`}
          custom={0}
          variants={rise}
          initial="hidden"
          animate={show ? "show" : "hidden"}
        >
          <KmSculpture dancing={dance} />
        </motion.div>

        <div className="km-hero-copy">
          <span className="km-hero-circle" aria-hidden="true" />

          <motion.h1
            id="km-name"
            className="km-hero-display"
            custom={1}
            variants={rise}
            initial="hidden"
            animate={show ? "show" : "hidden"}
          >
            <button
              type="button"
              className="km-name-hit"
              onClick={triggerDance}
              aria-label="Play KM letter dance"
            >
              <span className="km-hero-line">
                <span className="km-outline">HEY, I AM</span>{" "}
                <span className="km-solid km-hero-nameblock">
                  <span className="km-hero-namewave">
                    KHAJA MUJAHIDDIN
                    <svg className="km-wave" viewBox="0 0 800 48" preserveAspectRatio="none" aria-hidden="true">
                      <path
                        d="M0 24 C50 6 100 42 150 24 S250 6 300 24 S400 42 450 24 S550 6 600 24 S700 42 800 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <br className="km-hero-br" />
                  <span className="km-solid"> MOHAMMED</span>
                </span>
              </span>

              <span className="km-hero-line km-hero-line-nick">
                <span className="km-outline">BUT YOU CAN CALL ME</span>{" "}
                <span className="km-solid">KEVIN</span>
              </span>
            </button>
          </motion.h1>

          <motion.p
            className="km-roles"
            custom={2}
            variants={rise}
            initial="hidden"
            animate={show ? "show" : "hidden"}
          >
            I am a senior software engineer · backend &amp; data platforms
          </motion.p>

          <motion.ul
            className="km-hero-links"
            custom={3}
            variants={rise}
            initial="hidden"
            animate={show ? "show" : "hidden"}
          >
            {CTAS.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
