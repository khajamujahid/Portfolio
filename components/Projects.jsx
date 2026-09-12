"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  const [active, setActive] = useState(null);
  const [hover, setHover] = useState(0);
  const dialogRef = useRef(null);
  const lastFocus = useRef(null);
  const titleId = useId();

  useEffect(() => {
    if (active == null) return undefined;
    const node = dialogRef.current;
    const previous = lastFocus.current;
    node?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key !== "Tab" || !node) return;
      const focusable = node.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    document.body.classList.add("km-nav-lock");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("km-nav-lock");
      previous?.focus?.();
    };
  }, [active]);

  const current = active != null ? projects[active] : null;

  function open(index, event) {
    lastFocus.current = event.currentTarget;
    setActive(index);
  }

  return (
    <section className="km-work" id="work" aria-labelledby="km-work-title">
      <div className="km-work-sticky">
        <p className="km-kicker">Selected work</p>
        <h2 id="km-work-title" className="km-display">
          Projects
        </h2>
        <p className="km-lede">
          Fifteen builds across backend platforms, RAG systems, computer vision, and
          analytics. Click a row for the write-up and source.
        </p>
        <p className="km-count km-mono">{String(projects.length).padStart(2, "0")} entries</p>

        <div className="km-preview-frame" aria-hidden="true">
          {projects.map((item, i) => (
            <img
              key={item.title}
              src={item.image}
              alt=""
              className={i === hover ? "is-on" : ""}
            />
          ))}
        </div>
      </div>

      <ul className="km-rows">
        {projects.map((item, i) => (
          <li key={item.title}>
            <button
              type="button"
              className="km-row"
              onClick={(e) => open(i, e)}
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
            >
              <span className="km-row-left">
                <span className="km-row-title">{item.title}</span>
                {item.isNew && <span className="km-new">new</span>}
              </span>
              <span className="km-row-cat">{item.category}</span>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {current && (
          <motion.div
            className="km-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.aside
              ref={dialogRef}
              className="km-drawer-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              tabIndex={-1}
              initial={{ x: "28%" }}
              animate={{ x: 0 }}
              exit={{ x: "28%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" className="km-close" onClick={() => setActive(null)}>
                Close
              </button>
              <img className="km-drawer-img" src={current.image} alt="" />
              <p className="km-kicker">{current.category}</p>
              <h3 id={titleId}>{current.title}</h3>
              <p className="km-drawer-desc">{current.desc}</p>
              <pre className="km-code">
                <code>{current.preview}</code>
              </pre>
              <ul className="km-tags">
                {current.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="km-drawer-links">
                {current.links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                    → {link.label}
                  </a>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
