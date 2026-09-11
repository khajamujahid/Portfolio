'use client';
export default function TechMarquee(){
  const logos = [
    { name: 'Python', svg: '<path d="M20 12a8 8 0 0 1-8 8h-4a4 4 0 0 1-4-4V9a5 5 0 0 1 5-5h5v4H9a1 1 0 0 0-1 1v7a2 2 0 0 0 2 2h2a4 4 0 0 0 4-4h4z" />' },
    { name: 'Java', svg: '<path d="M12 2c2 3-2 4 0 7 3-1 5 2 3 4-4 3-9-1-7-5 1-2 3-3 4-6zM8 20h8M9 17h6" />' },
    { name: 'TypeScript', svg: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M12 12v6" />' },
    { name: 'FastAPI', svg: '<path d="M5 12h14M12 5l7 7-7 7" />' },
    { name: 'Spring Boot', svg: '<path d="M12 3a9 9 0 1 0 9 9"/><circle cx="12" cy="12" r="3" />' },
    { name: 'Kafka', svg: '<circle cx="7" cy="12" r="2"/><circle cx="17" cy="7" r="2"/><circle cx="17" cy="17" r="2"/><path d="M9 12h6M15 8l-4 3M15 16l-4-3" />' },
    { name: 'AWS', svg: '<path d="M3 14l9-6 9 6-9 6-9-6z"/>' },
    { name: 'Docker', svg: '<rect x="3" y="10" width="3" height="3"/><rect x="7" y="10" width="3" height="3"/><rect x="11" y="10" width="3" height="3"/><rect x="7" y="6" width="3" height="3"/><path d="M2 15h18a3 3 0 0 1-3 3H8a6 6 0 0 1-6-6" />' },
    { name: 'Kubernetes', svg: '<polygon points="12,3 21,8 21,16 12,21 3,16 3,8" />' },
    { name: 'PostgreSQL', svg: '<ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v6c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 13c0 1.7 3.1 3 7 3s7-1.3 7-3" />' }
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
