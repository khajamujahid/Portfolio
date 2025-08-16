'use client';
import { useState, useRef, useEffect } from 'react';
import { botAnswers } from '@/lib/data';

export default function Chatbot(){
  const [open, setOpen] = useState(false);
  const [boot, setBoot] = useState(false);
  const [msgs, setMsgs] = useState([]);
  const inputRef = useRef(null);
  useEffect(()=>{ if(open && !boot){ addMsg('bot',"Hi! Ask me about skills, projects, cloud tools, ML experience, or how to contact me."); setBoot(true); } },[open, boot]);
  const addMsg = (sender, text)=> setMsgs(m=>[...m,{sender,text}]);
  const reply = (q)=>{
    const lower = q.toLowerCase();
    if (lower.includes('skill')) return botAnswers.skills;
    if (/(cloud|aws|azure|gcp)/i.test(lower)) return botAnswers.cloud;
    if (/(project|impact)/i.test(lower)) return botAnswers.impact;
    if (/(ml|machine|deep|vision|nlp)/i.test(lower)) return botAnswers.ml;
    if (/(contact|email|linkedin|github|reach)/i.test(lower)) return botAnswers.contact;
    return "I can answer about skills, projects, ML experience, cloud tools, and contact details. Try the quick buttons!";
  };
  const send = (val)=>{ if(!val) return; addMsg('user', val); setTimeout(()=> addMsg('bot', reply(val)), 250); };
  return (
    <>
      <button className="chatbot-button" aria-label="Open chat" onClick={()=>setOpen(true)}>💬</button>
      {open && (
        <div className="chatbot">
          <div className="chatbot-header"><strong>Ask Khaja (Bot)</strong><button onClick={()=>setOpen(false)} aria-label="Close">✕</button></div>
          <div className="chatbot-messages">{msgs.map((m,i)=> <div key={i} className={`msg ${m.sender}`}>{m.text}</div>)}</div>
          <div className="chatbot-quick">
            <button onClick={()=>send("What are your main technical skills?")}>Skills</button>
            <button onClick={()=>send("Most impactful project?")}>Impact</button>
            <button onClick={()=>send("Cloud platforms & tools?")}>Cloud</button>
            <button onClick={()=>send("Experience with machine learning?")}>ML</button>
            <button onClick={()=>send("How can I contact you?")}>Contact</button>
          </div>
          <form className="chatbot-form" onSubmit={(e)=>{e.preventDefault(); const v=inputRef.current.value.trim(); inputRef.current.value=''; send(v);}}>
            <input ref={inputRef} type="text" placeholder="Type a question…" aria-label="Type your question"/>
            <button className="btn primary" aria-label="Send">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
