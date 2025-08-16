'use client';
export default function TechMarquee(){
  const logos = [
    { name: 'Python', svg: '<path d="M20 12a8 8 0 0 1-8 8h-4a4 4 0 0 1-4-4V9a5 5 0 0 1 5-5h5v4H9a1 1 0 0 0-1 1v7a2 2 0 0 0 2 2h2a4 4 0 0 0 4-4h4z" />' },
    { name: 'TensorFlow', svg: '<path d="M4 12 12 7l8 5-3 1.8v4.2l-5 3-5-3v-4.2zM12 7v14" />' },
    { name: 'PyTorch', svg: '<circle cx="18" cy="12" r="2"/><path d="M12 3v9a7 7 0 1 0 7 7" />' },
    { name: 'AWS', svg: '<path d="M3 14l9-6 9 6-9 6-9-6z"/>' },
    { name: 'Docker', svg: '<rect x="3" y="10" width="3" height="3"/><rect x="7" y="10" width="3" height="3"/><rect x="11" y="10" width="3" height="3"/><rect x="7" y="6" width="3" height="3"/><path d="M2 15h18a3 3 0 0 1-3 3H8a6 6 0 0 1-6-6" />' },
    { name: 'Kubernetes', svg: '<polygon points="12,3 21,8 21,16 12,21 3,16 3,8" />' },
    { name: 'Spark', svg: '<path d="M3 18l9-15 3 5 6 1-9 9-2-5-7 5z" />' },
    { name: 'Power BI', svg: '<rect x="3" y="10" width="3" height="8"/><rect x="8" y="7" width="3" height="11"/><rect x="13" y="4" width="3" height="14"/>' },
    { name: 'Tableau', svg: '<path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6v4M18 14v4M6 14v4M18 6v4"/>' },
    { name: 'Hugging Face', svg: '<circle cx="9" cy="10" r="1.2"/><circle cx="15" cy="10" r="1.2"/><path d="M6 14c2 2 8 2 10 0" />' }
  ];
  return (
    <div className="marquee-wrap" aria-label="Technologies">
      <div className="marquee-track">
        {logos.concat(logos).map((l, i)=>(
          <div key={i} className="logo">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{__html:l.svg}}/>
            <span>{l.name}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .marquee-wrap{ overflow:hidden; border-top:1px solid var(--line); border-bottom:1px solid var(--line); margin-top:18px; background: color-mix(in srgb, var(--surface) 50%, transparent); width:100%; }
        .marquee-track{ display:flex; gap:24px; padding:10px 0; animation: scroll 22s linear infinite; will-change: transform; }
        .logo{ display:flex; align-items:center; gap:8px; color: var(--muted); padding: 0 8px; white-space:nowrap; }
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}