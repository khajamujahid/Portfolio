'use client';
import { motion } from 'framer-motion';
import { educationList } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="edu-title">
      <h2 id="edu-title">Education</h2>
      <div className="timeline" style={{ borderLeft: 'none', margin: 0 }}>
        {educationList.map((edu, i) => (
          <motion.article 
            key={i} 
            className="tl-card" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{ marginBottom: '16px' }}
          >
            <h3>{edu.title}</h3>
            <p className="meta" style={{ color: 'var(--muted)', marginBottom: '8px' }}>
              {edu.place}
            </p>
            <ul>
              {edu.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
