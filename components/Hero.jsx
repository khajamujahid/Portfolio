"use client";

import { motion, useReducedMotion } from "framer-motion";
import { contacts } from "@/lib/data";

const LINKS = [
  { href: "#work", label: "See my projects" },
  { href: "#about", label: "More about me" },
  { href: contacts.resume, label: "Résumé", external: true }
];

export default function Hero({ ready }) {
  const reduce = useReducedMotion();
  const show = ready || reduce;

  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: reduce ? 0 : 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <section className="km-hero" id="top" aria-labelledby="km-name">
      <div className="km-hero-drift" aria-hidden="true">
        <span className="km-blob km-blob-a" />
        <span className="km-blob km-blob-b" />
        <span className="km-blob km-blob-c" />
        <span className="km-float-token km-float-l">{"{"}</span>
        <span className="km-float-token km-float-r">{"}"}</span>
      </div>

      <div className="km-hero-copy">
        <motion.p
          className="km-stroke-line"
          custom={0}
          variants={rise}
          initial="hidden"
          animate={show ? "show" : "hidden"}
        >
          Hey, I&apos;m
        </motion.p>

        <motion.h1
          id="km-name"
          className="km-name"
          custom={1}
          variants={rise}
          initial="hidden"
          animate={show ? "show" : "hidden"}
        >
          <span>Khaja Mujahiddin</span>
          <span>Mohammed</span>
        </motion.h1>

        <motion.p
          className="km-nick-lead"
          custom={2}
          variants={rise}
          initial="hidden"
          animate={show ? "show" : "hidden"}
        >
          But you can call me
        </motion.p>

        <motion.div
          className="km-nick"
          custom={3}
          variants={rise}
          initial="hidden"
          animate={show ? "show" : "hidden"}
        >
          <span className="km-nick-brace" aria-hidden="true">
            {"<"}
          </span>
          <code className="km-nick-chip">
            khaja.exe
            <span className="km-cursor-blink" aria-hidden="true">
              ▍
            </span>
          </code>
          <span className="km-nick-brace" aria-hidden="true">
            {"/>"}
          </span>
        </motion.div>

        <motion.p
          className="km-roles"
          custom={4}
          variants={rise}
          initial="hidden"
          animate={show ? "show" : "hidden"}
        >
          Senior Software Engineer <span aria-hidden="true">·</span> Backend &amp; Data
          Platforms
        </motion.p>

        <motion.ul
          className="km-hero-links"
          custom={5}
          variants={rise}
          initial="hidden"
          animate={show ? "show" : "hidden"}
        >
          {LINKS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <span aria-hidden="true">→</span> {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
