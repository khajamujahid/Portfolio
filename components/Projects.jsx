'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

const PREVIEWS = {
  'VERITAS HITL Platform': `claim = gemini.extract(article)
facts = fact_check_api.verify(claim)
report = forensics.ela(image)`,
  'MIKA OS / Clinical AI Agent': `docs = chroma.similarity_search(q, k=4)
answer = gemini.generate(context=docs)
assert grounded(answer, docs)`,
  'Pedestrian & Cyclist Segmentation (U-Net)': `mask = unet.predict(frame)
overlay = colorize(mask)
iou = evaluate(overlay, labels)`,
};

export default function Projects() {
  const [active, setActive] = useState(null);
  const [tag, setTag] = useState('All');
  const filtered = tag === 'All' ? projects : projects.filter((p) => p.tags.includes(tag));

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <img className="wavy" src="/wavy-bottom.svg" alt="" />
      <div className="section-head">
        <h2 id="projects-title">Projects</h2>
        <p className="lede">Click a window — each one is a system I&apos;ve built and shipped.</p>
      </div>
      <div className="filter-row">
        {['All', ...allTags].map((t) => (
          <button key={t} type="button" onClick={() => setTag(t)} className={tag === t ? 'btn chip active' : 'btn chip'}>{t}</button>
        ))}
      </div>
      <div className="projects-grid">
        {filtered.map((p, i) => (
          <motion.article
            key={p.title}
            className="project-card rich"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setActive(p)}
            onKeyDown={(e) => e.key === 'Enter' && setActive(p)}
            role="button"
            tabIndex={0}
          >
            <div className="window-project">
              <div className="window-chrome"><i /><i /><i /></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="thumb" src={p.image} alt="" loading="lazy" />
              <span className="file-chip">.sys</span>
            </div>
            <div className="project-info">
              <h3>{p.title}</h3>
              <div className="modal-tags">{p.tags.slice(0, 4).map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          </motion.article>
        ))}
      </div>

      {active && (
        <div className="modal-backdrop" onClick={() => setActive(null)}>
          <motion.div className="modal" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.image} alt="" />
            <div className="modal-body">
              <h3>{active.title}</h3>
              <p>{active.desc}</p>
              <pre className="lab-code">{PREVIEWS[active.title]}</pre>
              <div className="modal-tags">{active.tags.map((t) => <span key={t}>{t}</span>)}</div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 8 }}>
                {active.links.map((l) => (
                  <a className="btn primary" key={l.url} href={l.url} target="_blank" rel="noopener">{l.label}</a>
                ))}
                <button className="btn" type="button" onClick={() => setActive(null)}>Close</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
