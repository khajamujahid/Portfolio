'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { skillsList } from '@/lib/data';
const RadarChart = dynamic(()=>import('./RadarChart'), { ssr:false });

export default function Skills(){
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <h2 id="skills-title">Skills</h2>
      <div className="skills-grid">
        <motion.div className="skills-list" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
          <ul>{skillsList.map(s=>(<li key={s.cat}><strong>{s.cat}:</strong> {s.items.join(', ')}</li>))}</ul>
        </motion.div>
        <motion.div className="skills-chart" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
          <div style={{background:'var(--card)', border:'1px solid var(--line)', borderRadius:16, padding:8}}><RadarChart/></div>
        </motion.div>
      </div>
    </section>
  );
}
