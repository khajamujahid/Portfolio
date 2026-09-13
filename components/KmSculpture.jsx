"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Glossy inflated KM monogram for the hero.
 * Prefers /public/km-monogram.png when present; ships original SVG tubes otherwise.
 */
export default function KmSculpture({ dancing = false } = { className = "" }) {
  const [pngReady, setPngReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const probe = new window.Image();
    probe.onload = () => {
      if (!cancelled) setPngReady(true);
    };
    probe.onerror = () => {
      if (!cancelled) setPngReady(false);
    };
    probe.src = `/km-monogram.png?t=${Date.now()}`;
    return () => {
      cancelled = true;
    };
  }, []);

  if (pngReady) {
    return (
      <div className={`km-sculpture ${className}`} aria-hidden="true">
        <Image
          src="/km-monogram.png"
          alt=""
          width={720}
          height={720}
          className={`km-sculpture-img${dancing ? " is-dancing" : ""}`}
          priority
        />
      </div>
    );
  }

  return (
    <div className={`km-sculpture ${className}`} aria-hidden="true">
      <svg
        className="km-sculpture-svg"
        viewBox="0 0 420 420"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <defs>
          <linearGradient id="kmGradK" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9ef0d8" />
            <stop offset="35%" stopColor="#8ec5ff" />
            <stop offset="70%" stopColor="#d4b8ff" />
            <stop offset="100%" stopColor="#ffc9a8" />
          </linearGradient>
          <linearGradient id="kmGradM" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd6a8" />
            <stop offset="40%" stopColor="#c9b6ff" />
            <stop offset="75%" stopColor="#8fd3ff" />
            <stop offset="100%" stopColor="#78ffd1" />
          </linearGradient>
          <linearGradient id="kmShine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id="kmSoftShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#606887" floodOpacity="0.28" />
          </filter>
        </defs>

        <ellipse cx="210" cy="368" rx="150" ry="22" fill="#606887" opacity="0.12" />

        <g filter="url(#kmSoftShadow)">
          {/* K vertical stem */}
          <path
            d="M78 70
               C58 70 48 88 52 112
               L68 300
               C72 328 92 342 118 336
               C142 330 152 308 148 282
               L132 112
               C128 86 102 70 78 70 Z"
            fill="url(#kmGradK)"
          />
          {/* K upper arm */}
          <path
            d="M118 150
               C128 128 148 118 172 122
               L248 158
               C278 172 292 198 278 224
               C266 246 238 250 212 238
               L148 208
               C128 198 112 176 118 150 Z"
            fill="url(#kmGradK)"
          />
          {/* K lower arm */}
          <path
            d="M128 210
               C148 198 172 204 190 220
               L268 292
               C286 310 282 340 254 350
               C230 358 208 346 196 326
               L140 248
               C126 228 118 220 128 210 Z"
            fill="url(#kmGradM)"
          />
          <path
            d="M86 92 C78 92 74 102 76 118 L88 270 C90 286 100 292 112 288 C122 284 126 272 124 256 L112 118 C110 100 98 92 86 92 Z"
            fill="url(#kmShine)"
            opacity="0.55"
          />
        </g>

        <g filter="url(#kmSoftShadow)">
          {/* M left stem */}
          <path
            d="M198 86
               C178 80 162 96 166 120
               L188 310
               C192 336 214 348 238 340
               C258 334 268 312 264 288
               L242 120
               C238 96 220 90 198 86 Z"
            fill="url(#kmGradM)"
          />
          {/* M middle valley */}
          <path
            d="M214 108
               C230 100 248 108 258 128
               L292 220
               C300 240 318 242 330 226
               L360 140
               C372 114 396 108 412 124
               C428 140 424 168 408 186
               L360 268
               C340 296 300 300 276 274
               L246 218
               C234 198 214 192 198 204
               C182 216 178 192 190 168
               L214 108 Z"
            fill="url(#kmGradK)"
          />
          {/* M right stem */}
          <path
            d="M348 86
               C328 78 312 94 316 118
               L338 308
               C342 334 364 348 388 340
               C408 334 418 312 414 288
               L392 118
               C388 94 370 90 348 86 Z"
            fill="url(#kmGradM)"
          />
          <path
            d="M206 108 C196 104 190 114 192 128 L210 286 C212 300 224 306 234 300 C242 296 246 284 244 270 L226 128 C224 112 216 110 206 108 Z"
            fill="url(#kmShine)"
            opacity="0.5"
          />
        </g>

        <circle cx="96" cy="108" r="10" fill="#fff" opacity="0.55" />
        <circle cx="230" cy="128" r="8" fill="#fff" opacity="0.45" />
        <circle cx="370" cy="112" r="9" fill="#fff" opacity="0.5" />
      </svg>
    </div>
  );
}
