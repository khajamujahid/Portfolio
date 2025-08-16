'use client';
import { useState, useEffect } from 'react';

export default function NavBar(){
  const [open, setOpen] = useState(false);
  const [clicks, setClicks] = useState(0);
  useEffect(()=>{ if (clicks===5){ alert("Easter egg unlocked 🎉: Data makes the world INDORABLE!"); setClicks(0); } },[clicks]);
  const [themeIcon, setThemeIcon] = useState('🌙');
  useEffect(()=>{ const saved = localStorage.getItem('themeMode'); if (saved==='light'){ document.documentElement.classList.add('light'); setThemeIcon('🌞'); } },[]);
  const toggleTheme = ()=>{ const isLight = document.documentElement.classList.toggle('light'); localStorage.setItem('themeMode', isLight?'light':'dark'); setThemeIcon(isLight?'🌞':'🌙'); };
  return (
    <header className="header">
      <a className="brand" onClick={()=>setClicks(c=>c+1)} href="#home">KM</a>
      <nav className="nav" aria-label="Primary">
        <button className="nav-toggle btn" onClick={()=>setOpen(o=>!o)} aria-expanded={open} aria-controls="nav-list">☰</button>
        <ul id="nav-list" aria-expanded={open}>
          {["home","about","projects","experience","skills","education","certifications","contact"].map(id=>(
            <li key={id}><a onClick={()=>setOpen(false)} href={`#${id}`}>{id[0].toUpperCase()+id.slice(1)}</a></li>
          ))}
        </ul>
      </nav>
      <button className="mode-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">{themeIcon}</button>
    </header>
  );
}
