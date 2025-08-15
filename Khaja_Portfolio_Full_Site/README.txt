Khaja Mujahiddin Mohammed — Portfolio Website
Generated: 2025-08-15

WHAT'S INCLUDED
- index.html               Full site with sections (Home, About, Projects, Experience, Skills, Education, Certifications, Contact)
- css/main.css             Styles (dark/light toggle, responsive, focus states)
- js/main.js               Animations, charts, PDF generator, counters, cursor, easter egg
- assets/*                 Images & favicon placeholders (replace with your own)
- docs/NOTES.txt           Quick note

FEATURES
- GSAP hero animation + AOS scroll animations
- Project cards with 3D tilt + hover micro-interactions
- Skill visualizations using Chart.js (Radar + Bar)
- Live counters for years/dashboards/pipelines via IntersectionObserver
- Dark/Light theme toggle (saved in localStorage)
- Custom cursor with magnetic buttons
- Konami Code / 7x‑click easter egg → shows "Secret Lab" with confetti
- Contact form (Formspree / Netlify forms supported)
- Auto‑generated PDF Resume: builds a printable resume from site content using html2pdf.js

RARE ADDITIONS (how they work)
1) Magnetic Buttons:
   - In JS, we listen for the mousemove inside .magnetic elements and translate them slightly toward the cursor.
2) Secret Lab (Easter Egg):
   - Unlock via ↑↑↓↓←→←→BA or clicking the brand name 7 times. Toggles a modal with confetti canvas animation.
3) Client‑side PDF Resume:
   - Button “Download PDF Resume” turns the #printable section into a PDF via html2pdf (no server required).

HOW TO CUSTOMIZE
1) Replace assets:
   - /assets/headshot.jpg → your photo
   - /assets/project*.png → project screenshots
2) Update links:
   - Edit GitHub/LinkedIn/email inside the hero and Contact section in index.html.
   - Replace contact FORM_ENDPOINT in the <form> action with your Formspree endpoint.
3) Update skills/charts:
   - Edit the datasets in js/main.js (labels and values).
4) Projects:
   - Replace titles, descriptions, tags, and links in the Projects section.
5) Resume PDF:
   - Update the hidden #printable content to match your latest resume details.

DEPLOYMENT
- GitHub Pages (static):
  1) Push all files to a repo (e.g., Portfolio)
  2) Repo → Settings → Pages → Deploy from Branch: main, folder / (root)
  3) Your site will be live at https://<username>.github.io/<reponame>/
- Netlify: Drag‑and‑drop this folder or link the repo.
- Vercel: Import repository → deploy

ACCESSIBILITY & PERFORMANCE
- Semantic sections, focus states, reduced‑motion friendly animations.
- Images use loading="lazy"; scripts defer; charts initialize after DOMContentLoaded.

LICENSES
- External libraries served via CDN: GSAP, AOS, Chart.js, html2pdf.js, VanillaTilt. Check their licenses before bundling locally.
