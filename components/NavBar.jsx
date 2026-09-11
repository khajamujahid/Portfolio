'use client';
import { useState } from 'react';
import { contacts } from '@/lib/data';

const LINKS = [
  { id: 'about', label: 'about' },
  { id: 'labs', label: 'labs' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'contact', label: 'contact' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a className="brand" href="#home">KM</a>
      <nav className="nav" aria-label="Primary">
        <button className="nav-toggle btn" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="nav-list" type="button">☰</button>
        <ul id="nav-list" aria-expanded={open}>
          {LINKS.map((l) => (
            <li key={l.id}><a onClick={() => setOpen(false)} href={`#${l.id}`}>{l.label}</a></li>
          ))}
          <li><a href={contacts.resume} download>résumé</a></li>
          <li><a href={contacts.linkedin} target="_blank" rel="noopener">linkedin</a></li>
          <li><a href={contacts.github} target="_blank" rel="noopener">github</a></li>
          <li><a href={`mailto:${contacts.email}`}>email</a></li>
        </ul>
      </nav>
    </header>
  );
}
