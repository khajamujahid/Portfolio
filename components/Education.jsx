'use client';
import { motion } from 'framer-motion';
import { university } from '@/lib/data';

export default function Education(){
  return (
    <section id="education" className="section" aria-labelledby="edu-title">
      <h2 id="edu-title">Education</h2>
      <div className="cards">
        <motion.article className="card" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
          <h3>{university.title}</h3>
          <p className="meta">{university.place}</p>
          <ul>{university.bullets.map((b,i)=>(<li key={i}>{b}</li>))}</ul>
        </motion.article>
      </div>
    </section>
  );
}
