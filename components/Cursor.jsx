"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -80, y: -80 });
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = "ontouchstart" in window && navigator.maxTouchPoints > 0;
    if (!fine || motion || touch) return undefined;

    setOn(true);
    document.documentElement.classList.add("km-has-cursor");

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("km-has-cursor");
    };
  }, []);

  if (!on) return null;

  return (
    <div
      className="km-cursor"
      aria-hidden="true"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    >
      <span className="km-cursor-dot" />
    </div>
  );
}
