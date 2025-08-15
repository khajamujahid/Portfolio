
document.addEventListener('DOMContentLoaded',()=>{
  const themeBtn=document.querySelector('#themeToggle');
  function setTheme(m){document.documentElement.classList.toggle('light',m==='light');localStorage.setItem('theme',m);themeBtn.textContent=m==='dark'?'☀️ Light':'🌙 Dark'}
  setTheme(localStorage.getItem('theme')||'dark'); themeBtn.onclick=()=>setTheme(localStorage.getItem('theme')==='dark'?'light':'dark');

  // custom cursor + magnetic
  const dot=document.querySelector('.cursor-dot'); window.addEventListener('mousemove',e=>{dot.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
  document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect(); el.style.transform=`translate(${(e.clientX-(r.left+r.width/2))*0.1}px, ${(e.clientY-(r.top+r.height/2))*0.1}px)`}); el.addEventListener('mouseleave',()=>el.style.transform='translate(0,0)')});

  // GSAP hero
  if(window.gsap){gsap.from('.hero h1',{y:18,opacity:0,duration:.6}); gsap.from('.hero p',{y:10,opacity:0,duration:.4,delay:.2}); gsap.from('.cta .btn',{y:8,opacity:0,stagger:.08,duration:.3,delay:.3});}
  if(window.AOS){AOS.init({duration:600, once:true});}
  if(window.VanillaTilt){VanillaTilt.init(document.querySelectorAll('.tilt'),{max:6,speed:400,glare:true,'max-glare':.25});}

  // Counters
  const io=new IntersectionObserver(es=>{es.forEach(ent=>{if(ent.isIntersecting){const el=ent.target; let cur=0, end=+el.dataset.counter||0, step=Math.ceil(end/50); const t=setInterval(()=>{cur+=step; if(cur>=end){cur=end; clearInterval(t)} el.textContent=cur},20); io.unobserve(el)}})}); document.querySelectorAll('[data-counter]').forEach(n=>io.observe(n));

  // Chart.js
  if(window.Chart){const rad=document.getElementById('skillRadar'); new Chart(rad,{type:'radar', data:{labels:['ML/DL','NLP','CV','Data Eng','Cloud','BI'],datasets:[{data:[85,80,75,80,85,80],label:'Skill',fill:true,backgroundColor:'rgba(122,162,255,.25)',borderColor:'#7aa2ff'}]},options:{plugins:{legend:{display:false}},scales:{r:{ticks:{display:false},grid:{color:'rgba(255,255,255,.1)'},angleLines:{color:'rgba(255,255,255,.1)'}}}});
  const bar=document.getElementById('skillBars'); new Chart(bar,{type:'bar',data:{labels:['Python','SQL','TensorFlow','PyTorch','Spark','Airflow','AWS','Power BI'],datasets:[{data:[90,85,80,75,70,80,85,85],backgroundColor:'rgba(82,209,178,.5)',borderColor:'#52d1b2'}]},options:{plugins:{legend:{display:false}},scales:{x:{grid:{display:false}},y:{beginAtZero:true,grid:{color:'rgba(255,255,255,.1)'}}}});}

  // Konami or 7 clicks on brand
  const seq=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']; let idx=0;
  window.addEventListener('keydown',e=>{ if(e.key==seq[idx]||e.key.toLowerCase()==seq[idx]){idx++; if(idx===seq.length){document.getElementById('secretLab').classList.add('open'); idx=0;}} else idx=0; });
  let clicks=0; document.querySelector('.brand-name').addEventListener('click',()=>{clicks++; if(clicks>=7){document.getElementById('secretLab').classList.add('open'); clicks=0;}});

  // PDF
  const btn=document.getElementById('downloadPDF'); if(btn) btn.onclick=()=>{ if(window.html2pdf){html2pdf().from(document.getElementById('printable')).set({margin:.5,filename:'Khaja_Mujahiddin_Resume.pdf',html2canvas:{scale:2},jsPDF:{unit:'in',format:'a4'}}).save();} else alert('html2pdf not loaded'); };
});
