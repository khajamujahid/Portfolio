'use client';
import { motion } from 'framer-motion';
export default function Certifications(){
  const certs = [
    "AWS Cloud Practitioner — EduBridge",
    "Google Data Analytics — Coursera",
    "HackerRank SQL — 5 Star",
    "MySQL Developer — Udemy",
    "PGDCA (Post Graduate Diploma in Computer Applications)",
    "Data Analytics & Visualization Virtual Experience — Forage"
  ];
  return (
    <section id="certifications" className="section" aria-labelledby="certs-title">
      <h2 id="certs-title">Certifications</h2>
      <motion.ul className="cert-list" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
        {certs.map(c=> <li key={c}>{c}</li>)}
      </motion.ul>
    </section>
  );
}
