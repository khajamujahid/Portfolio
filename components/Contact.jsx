'use client';
import { contacts } from '@/lib/data';

export default function Contact(){
  const openEmail = (e)=>{
    e.preventDefault();
    const name = encodeURIComponent(e.target.name.value.trim());
    const body = encodeURIComponent(e.target.message.value.trim());
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    window.location.href = `mailto:${contacts.email}?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <p><strong>Email:</strong> <a href={`mailto:${contacts.email}`}>{contacts.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:+13477365812">+1 (347) 736-5812</a></p>
          <p><strong>LinkedIn:</strong> <a href={contacts.linkedin} target="_blank" rel="noopener">{contacts.linkedin.replace('https://www.linkedin.com/','/')}</a></p>
          <p><strong>GitHub:</strong> <a href={contacts.github} target="_blank" rel="noopener">{contacts.github.replace('https://','/')}</a></p>
          <p><strong>Twitter:</strong> <a href={contacts.twitter} target="_blank" rel="noopener">@Khaja7262</a></p>
          <p><strong>Instagram:</strong> <a href={contacts.instagram} target="_blank" rel="noopener">@khaja_2310</a></p>
        </div>
        <form className="contact-card" onSubmit={openEmail} aria-label="Contact form">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message" rows={4} required></textarea>
          <button type="submit" className="btn primary">Send via Email</button>
          <p className="muted">The form opens your mail client with a prefilled email.</p>
        </form>
      </div>
    </section>
  );
}
