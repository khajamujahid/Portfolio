"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * Original per-letter magnetic hover — not copied from any third-party site.
 * Letters ease toward the pointer within a local radius, then spring home.
 */
export default function MagneticName({ children, className = "" }) {
  const text = typeof children === "string" ? children : String(children ?? "");
  const letterRefs = useRef([]);
  const rafRef = useRef(0);
  const targetsRef = useRef([]);
  const currentRef = useRef([]);
  const activeRef = useRef(false);
  const [reduce, setReduce] = useState(false);

  const chars = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    targetsRef.current = chars.map(() => ({ x: 0, y: 0 }));
    currentRef.current = chars.map(() => ({ x: 0, y: 0 }));
    letterRefs.current = letterRefs.current.slice(0, chars.length);
  }, [chars]);

  const tick = useCallback(() => {
    const letters = letterRefs.current;
    const targets = targetsRef.current;
    const currents = currentRef.current;
    let moving = false;

    for (let i = 0; i < letters.length; i += 1) {
      const el = letters[i];
      const t = targets[i];
      const c = currents[i];
      if (!el || !t || !c) continue;

      c.x += (t.x - c.x) * 0.2;
      c.y += (t.y - c.y) * 0.2;

      if (Math.abs(t.x - c.x) > 0.04 || Math.abs(t.y - c.y) > 0.04) {
        moving = true;
      } else {
        c.x = t.x;
        c.y = t.y;
      }

      el.style.transform = `translate3d(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px, 0)`;
    }

    if (moving || activeRef.current) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      rafRef.current = 0;
    }
  }, []);

  const startLoop = useCallback(() => {
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [tick]);

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    },
    []
  );

  function onPointerMove(e) {
    if (reduce) return;
    activeRef.current = true;
    const letters = letterRefs.current;
    const radius = 110;
    const maxPull = 16;

    for (let i = 0; i < letters.length; i += 1) {
      const el = letters[i];
      if (!el || el.dataset.space === "1") {
        if (targetsRef.current[i]) {
          targetsRef.current[i].x = 0;
          targetsRef.current[i].y = 0;
        }
        continue;
      }

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const strength = Math.max(0, 1 - dist / radius);
      const pull = maxPull * strength * strength;

      targetsRef.current[i] = {
        x: (dx / dist) * pull,
        y: (dy / dist) * pull
      };
    }

    startLoop();
  }

  function onPointerLeave() {
    if (reduce) return;
    activeRef.current = false;
    targetsRef.current = targetsRef.current.map(() => ({ x: 0, y: 0 }));
    startLoop();
  }

  const rootClass = ["km-magnetic", className].filter(Boolean).join(" ");

  if (reduce) {
    return <span className={rootClass}>{text}</span>;
  }

  return (
    <span
      className={rootClass}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {chars.map((ch, i) => {
        const isSpace = ch === " ";
        return (
          <span
            key={`${i}-${ch}`}
            ref={(node) => {
              letterRefs.current[i] = node;
            }}
            className={isSpace ? "km-letter km-letter-space" : "km-letter"}
            data-space={isSpace ? "1" : "0"}
            aria-hidden="true"
          >
            {isSpace ? "\u00A0" : ch}
          </span>
        );
      })}
      <span className="km-magnetic-sr">{text}</span>
    </span>
  );
}
