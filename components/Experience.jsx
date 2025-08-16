'use client';
import { motion } from 'framer-motion';
import { experience } from '@/lib/data';

export default function Experience(){
  return (
    <section id="experience" className="section" aria-labelledby="exp-title">
      <h2 id="exp-title">Experience</h2>
      <ol className="timeline">
        {experience.map((e,i)=>(
          <li key={i}>
            <motion.div className="tl-card" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.1}}>
              <h3>{e.role}</h3>
              <p className="meta">{e.meta}</p>
              <ul>{e.bullets.map((b, j)=>(<li key={j}>{b}</li>))}</ul>
            </motion.div>
          </li>
        ))}
      </ol>
    </section>
  );
}
