"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export default function NavBar() {
  const dialogRef = useRef(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("km-theme");
    const next = saved === "light" || saved === "dark" ? saved : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("km-theme", next);
  };

  const openMenu = () => dialogRef.current?.showModal();
  const closeMenu = () => dialogRef.current?.close();

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a className="brand" href="#main" aria-label="Khaja Mujahiddin home">
          <span className="monogram" aria-hidden="true">
            km
          </span>
          <span className="brand-text">
            <span className="brand-name">Khaja Mujahiddin</span>
            <span className="brand-sub">Backend · Data · Applied AI</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
              <span className="nav-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={openMenu}
            aria-label="Open menu"
          >
            ≡
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="mobile-dialog"
        aria-label="Mobile navigation"
        onClick={(e) => {
          if (e.target === dialogRef.current) closeMenu();
        }}
      >
        <div className="mobile-dialog-inner">
          <button type="button" className="icon-btn" onClick={closeMenu} aria-label="Close menu">
            ×
          </button>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
              <span className="nav-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </dialog>
    </header>
  );
}
