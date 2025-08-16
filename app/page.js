'use client';
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Chatbot from '@/components/Chatbot';

export default function Page(){
  useEffect(()=>{
    const canvas = document.getElementById('bg-canvas'); if(!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true }); let nodes = []; const NODE_COUNT = 60;
    function resize(){ canvas.width = innerWidth * devicePixelRatio; canvas.height = innerHeight * devicePixelRatio; }
    window.addEventListener('resize', resize); resize();
    function init(){ nodes = Array.from({length:NODE_COUNT},()=>({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, vx:(Math.random()-0.5)*0.4, vy:(Math.random()-0.5)*0.4 })); } init();
    let raf; const draw = ()=>{
      ctx.fillStyle = document.documentElement.classList.contains('light') ? 'rgba(247,251,255,0.7)' : 'rgba(11,18,32,0.5)';
      ctx.fillRect(0,0,canvas.width,canvas.height);
      for(let i=0;i<nodes.length;i++){ const n1=nodes[i]; n1.x+=n1.vx; n1.y+=n1.vy; if(n1.x<0||n1.x>canvas.width) n1.vx*=-1; if(n1.y<0||n1.y>canvas.height) n1.vy*=-1;
        ctx.beginPath(); ctx.arc(n1.x,n1.y,2*devicePixelRatio,0,Math.PI*2); ctx.fillStyle='#6ea8feaa'; ctx.fill();
        for(let j=i+1;j<nodes.length;j++){ const n2=nodes[j]; const dx=n1.x-n2.x, dy=n1.y-n2.y; const dist2=dx*dx+dy*dy;
          if(dist2<(180*devicePixelRatio)**2){ const alpha=1-Math.sqrt(dist2)/(180*devicePixelRatio); ctx.strokeStyle=`rgba(46,180,255,${alpha*0.4})`; ctx.beginPath(); ctx.moveTo(n1.x,n1.y); ctx.lineTo(n2.x,n2.y); ctx.stroke(); } } }
      raf=requestAnimationFrame(draw);
    }; draw();
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  },[]);

  return (
    <>
      <NavBar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Skills/>
        <Education/>
        <Certifications/>
        <Contact/>
      </main>
      <footer className="section" style={{paddingTop:24, paddingBottom:24, textAlign:'center', color:'var(--muted)', borderTop:'1px solid var(--line)', background:'color-mix(in srgb, var(--bg) 85%, transparent)'}}>
        © {new Date().getFullYear()} Khaja Mujahiddin Mohammed. All rights reserved.
      </footer>
      <Chatbot/>
    </>
  );
}
