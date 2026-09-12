"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

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
        <span aria-hidden="true">{"{km}"}</span>
      </a>

      <nav className="km-nav-desk" aria-label="Primary">
        {LINKS.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="km-nav-end">
        <ThemeToggle />
        <button
          type="button"
          className="km-menu-btn"
          aria-expanded={open}
          aria-controls="km-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
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
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
