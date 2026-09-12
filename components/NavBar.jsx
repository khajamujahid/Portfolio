"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import { contacts } from "@/lib/data";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

function KmMark() {
  return (
    <svg
      className="km-mark-svg"
      viewBox="0 0 48 48"
      width="44"
      height="44"
      aria-hidden="true"
    >
      {/* Organic squiggle KM — continuous line logo */}
      <path
        className="km-mark-path"
        d="M10 34
           C8 28 10 22 14 20
           C18 18 20 22 18 26
           C16 30 18 34 22 34
           C26 34 28 28 26 22
           C24 16 28 10 34 12
           C40 14 42 22 38 28
           C34 34 38 38 42 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="km-mark-path"
        d="M22 14 C20 10 16 10 14 14 C12 18 14 22 18 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle className="km-mark-node" cx="14" cy="14" r="2.2" fill="currentColor" />
      <circle className="km-mark-node" cx="42" cy="36" r="2.2" fill="currentColor" />
    </svg>
  );
}

function MenuDots({ open }) {
  return (
    <svg
      className="km-menu-dots"
      viewBox="0 0 48 48"
      width="40"
      height="40"
      aria-hidden="true"
    >
      {[12, 24, 36].map((y) =>
        [12, 24, 36].map((x) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r="2.8"
            fill="currentColor"
            opacity={open && x === 24 && y === 24 ? 0.35 : 1}
          />
        ))
      )}
    </svg>
  );
}

export default function NavBar({ revealed }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.classList.toggle("km-nav-lock", open);
    return () => document.body.classList.remove("km-nav-lock");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      className="km-nav"
      initial={false}
      animate={{
        opacity: revealed ? 1 : 0,
        y: revealed ? 0 : -12
      }}
      transition={{ duration: reduce ? 0.01 : 0.45, delay: revealed && !reduce ? 0.05 : 0 }}
    >
      <a className="km-mono-mark" href="#top" aria-label="Khaja Mujahiddin Mohammed — home">
        <KmMark />
        <span className="km-mark-label">
          <span className="km-mark-nick">khaja.exe</span>
          <span className="km-mark-sep">/</span>
          <span className="km-mark-full">khaja mujahiddin</span>
        </span>
      </a>

      <div className="km-nav-end">
        <a
          className="km-nav-in"
          href={contacts.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          IN
        </a>
        <ThemeToggle />
        <button
          type="button"
          className="km-menu-btn"
          aria-expanded={open}
          aria-controls="km-drawer"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuDots open={open} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="km-drawer"
            className="km-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="km-drawer-list">
              {LINKS.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ "--i": i }}
                >
                  <span className="km-drawer-idx" aria-hidden="true">
                    0{i + 1}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="km-drawer-socials">
              <a href={contacts.linkedin} target="_blank" rel="noreferrer">
                ↗ linkedin
              </a>
              <a href={contacts.github} target="_blank" rel="noreferrer">
                ↗ github
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
