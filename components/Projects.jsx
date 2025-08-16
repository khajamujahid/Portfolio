'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
const allTags = Array.from(new Set(projects.flatMap(p=>p.tags))).sort();

export default function Projects(){
  const [active, setActive] = useState(null);
  const [tag, setTag] = useState('All');
  const filtered = tag==='All' ? projects : projects.filter(p=>p.tags.includes(tag));
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <h2 id="projects-title">Projects</h2>
      <div style={{display:'flex', gap:8, flexWrap:'wrap', marginBottom:10}}>
        {['All', ...allTags].map(t=>(
          <button key={t} onClick={()=>setTag(t)} className="btn" style={{borderColor: tag===t ? 'var(--accent)' : 'var(--line)'}}>{t}</button>
        ))}
      </div>
      <div className="projects-grid">
        {filtered.map((p, i)=> (
          <motion.article key={p.title} className="project-card" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.05}} onClick={()=>setActive(p)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt={`Representative image for ${p.title} (Unsplash)`} loading="lazy"/>
            <div className="project-info"><h3>{p.title}</h3><p>{p.tags.join(' · ')}</p></div>
          </motion.article>
        ))}
      </div>
      {active && (
        <div className="modal-backdrop" onClick={()=>setActive(null)}>
          <motion.div className="modal" initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} onClick={e=>e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.image} alt={`Image for ${active.title}`}/>
            <div className="modal-body">
              <h3>{active.title}</h3>
              <p>{active.desc}</p>
              <div className="modal-tags">{active.tags.map(t=> <span key={t}>{t}</span>)}</div>
              <div style={{display:'flex', gap:10, paddingBottom:12}}>
                {active.links.map(l=>(<a className="btn" key={l.url} href={l.url} target="_blank" rel="noopener">{l.label}</a>))}
              </div>
              <button className="btn" onClick={()=>setActive(null)}>Close</button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
