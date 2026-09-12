"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

function CompileMark() {
  return (
    <svg
      className="km-compile-mark"
      viewBox="0 0 120 120"
      width="88"
      height="88"
      aria-hidden="true"
    >
      <path
        className="km-compile-stroke"
        d="M38 18 C20 18 16 32 16 44 C16 52 10 56 10 60 C10 64 16 68 16 76 C16 88 20 102 38 102"
      />
      <path
        className="km-compile-stroke"
        d="M82 18 C100 18 104 32 104 44 C104 52 110 56 110 60 C110 64 104 68 104 76 C104 88 100 102 82 102"
      />
      <line className="km-compile-stroke" x1="42" y1="40" x2="68" y2="50" />
      <line className="km-compile-stroke" x1="68" y1="50" x2="48" y2="76" />
      <line className="km-compile-stroke" x1="42" y1="40" x2="48" y2="76" />
      <circle className="km-compile-node" cx="42" cy="40" r="4.5" />
      <circle className="km-compile-node" cx="68" cy="50" r="4.5" />
      <circle className="km-compile-node" cx="48" cy="76" r="4.5" />
      <circle className="km-compile-pulse" cx="54" cy="56" r="7" />
    </svg>
  );
}

export default function Splash({ onDone }) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hold = reduce ? 200 : 2100;
    const hide = window.setTimeout(() => setVisible(false), hold);
    return () => window.clearTimeout(hide);
  }, [reduce]);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="km-splash"
          role="status"
          aria-live="polite"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.15 : 0.55, ease: "easeInOut" }}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <CompileMark />
          </motion.div>
          <p className="km-splash-line">
            <span className="km-mono">Booting Kevin…</span>
            <span className="km-cursor-blink" aria-hidden="true">
              ▍
            </span>
          </p>
          <p className="km-splash-sub">Compiling portfolio…</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
