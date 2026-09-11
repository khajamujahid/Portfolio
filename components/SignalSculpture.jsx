"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MODES = ["knot", "orbit", "wave"];
const COUNT = 220;

function seedParticles(w, h) {
  return Array.from({ length: COUNT }, (_, i) => {
    const t = (i / COUNT) * Math.PI * 2;
    return {
      x: w * 0.5 + Math.cos(t * 3) * (w * 0.18),
      y: h * 0.5 + Math.sin(t * 2) * (h * 0.18),
      vx: 0,
      vy: 0,
      r: 1.1 + (i % 4) * 0.35,
      phase: t
    };
  });
}

export default function SignalSculpture() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const rafRef = useRef(0);
  const modeRef = useRef("knot");
  const [mode, setMode] = useState("knot");
  const reducedRef = useRef(false);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = parent.clientWidth;
    const h = Math.max(parent.clientHeight, 360);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!particlesRef.current.length) {
      particlesRef.current = seedParticles(w, h);
    }
  }, []);

  const scatter = useCallback((cx, cy) => {
    particlesRef.current.forEach((p) => {
      const dx = p.x - cx;
      const dy = p.y - cy;
      const d = Math.hypot(dx, dy) || 1;
      const force = Math.min(18, 2200 / (d * d));
      p.vx += (dx / d) * force;
      p.vy += (dy / d) * force;
    });
  }, []);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    let t0 = performance.now();
    const tick = (now) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const elapsed = (now - t0) / 1000;
      const modeNow = modeRef.current;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(0,0,0,0.04)";
      ctx.fillRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5;
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        let tx = cx;
        let ty = cy;

        if (modeNow === "knot") {
          const a = p.phase + elapsed * 0.55;
          tx = cx + Math.cos(a) * (w * 0.22) + Math.cos(a * 2.2) * (w * 0.08);
          ty = cy + Math.sin(a * 1.4) * (h * 0.22) + Math.sin(a * 3.1) * (h * 0.06);
        } else if (modeNow === "orbit") {
          const ring = 0.12 + (i % 5) * 0.05;
          const a = p.phase + elapsed * (0.35 + (i % 3) * 0.08);
          tx = cx + Math.cos(a) * w * ring;
          ty = cy + Math.sin(a) * h * ring * 0.85;
        } else {
          const row = Math.floor(i / 20);
          const col = i % 20;
          tx = (col / 19) * w * 0.82 + w * 0.09;
          ty =
            h * 0.5 +
            Math.sin(elapsed * 1.4 + col * 0.35 + row * 0.2) * (28 + row * 4) +
            (row - 5) * 10;
        }

        if (!reducedRef.current) {
          p.vx += (tx - p.x) * 0.045;
          p.vy += (ty - p.y) * 0.045;
          if (mouseRef.current.active) {
            const dx = p.x - mouseRef.current.x;
            const dy = p.y - mouseRef.current.y;
            const d = Math.hypot(dx, dy) || 1;
            if (d < 90) {
              p.vx += (dx / d) * 0.8;
              p.vy += (dy / d) * 0.8;
            }
          }
          p.vx *= 0.86;
          p.vy *= 0.86;
          p.x += p.vx;
          p.y += p.vy;
        } else {
          p.x = tx;
          p.y = ty;
        }

        const alpha = 0.35 + (i % 7) * 0.08;
        ctx.beginPath();
        ctx.fillStyle = `rgba(230, 205, 140, ${alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // soft connector accents
      ctx.strokeStyle = "rgba(230, 205, 140, 0.08)";
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i += 12) {
        const a = particles[i];
        const b = particles[(i + 7) % particles.length];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 90) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    if (!reducedRef.current) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      // static frame
      tick(performance.now());
    }

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [resize]);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  const onPointerMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    };
  };

  const onPointerLeave = () => {
    mouseRef.current.active = false;
  };

  const onClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    scatter(e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <div className="hero-stage" aria-label="Interactive particle sculpture">
      <span className="sculpture-hint mono">move to bend · click to scatter</span>
      <canvas
        ref={canvasRef}
        className="sculpture-canvas"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        onClick={onClick}
        role="img"
        aria-label="Gold particle field sculpture"
      />
      <div className="sculpture-controls" role="group" aria-label="Sculpture modes">
        {MODES.map((m) => (
          <button
            key={m}
            type="button"
            className="chip"
            aria-pressed={mode === m}
            onClick={() => setMode(m)}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}
