"use client";

import { contacts } from "@/lib/data";

export default function Contact() {
  return (
    <section className="km-contact" id="contact" aria-labelledby="km-contact-title">
      <p className="km-kicker">Contact</p>
      <h2 id="km-contact-title" className="km-display">
        Let&apos;s compile something
      </h2>
      <p className="km-lede">
        New Haven, CT. Open to backend, data-platform, and applied-ML conversations.
      </p>

      <a className="km-mail" href={`mailto:${contacts.email}`}>
        {contacts.email}
      </a>

      <ul className="km-contact-grid">
        <li>
          <a href={contacts.linkedin} target="_blank" rel="noreferrer">
            <span className="km-kicker">LinkedIn</span>
            <span>khaja-muj</span>
          </a>
        </li>
        <li>
          <a href={contacts.github} target="_blank" rel="noreferrer">
            <span className="km-kicker">GitHub</span>
            <span>khajamujahid</span>
          </a>
        </li>
        <li>
          <a href={`tel:${contacts.phone}`}>
            <span className="km-kicker">Phone</span>
            <span>{contacts.phoneDisplay}</span>
          </a>
        </li>
        <li>
          <a href={contacts.resume} target="_blank" rel="noreferrer">
            <span className="km-kicker">Résumé</span>
            <span>Download PDF</span>
          </a>
        </li>
      </ul>

      <footer className="km-foot">
        <p className="km-mono">{"{km}"} · khaja.exe</p>
        <p>© {new Date().getFullYear()} Khaja Mujahiddin Mohammed</p>
      </footer>
    </section>
  );
}
