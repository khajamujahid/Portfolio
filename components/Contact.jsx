"use client";

import { useState } from "react";
import { contacts } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contacts.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="contact-bleed" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <h2 id="contact-title" className="contact-title">
          Let’s ship something that holds.
        </h2>
        <p className="contact-lead">
          Platforms, APIs, data pipelines, applied AI — if reliability is the brief, I’m in.
          A short note is enough to start.
        </p>

        <div className="contact-actions">
          <a className="contact-email" href={`mailto:${contacts.email}`}>
            <span aria-hidden="true">↗</span> {contacts.email}
          </a>
          <button type="button" className="copy-btn" onClick={copyEmail}>
            {copied ? "Copied" : "Copy address"} ⧉
          </button>
          <a
            className="contact-link"
            href={contacts.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a className="contact-link" href={contacts.resume} target="_blank" rel="noreferrer">
            Resume ↗
          </a>
          <a
            className="contact-link"
            href={contacts.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
