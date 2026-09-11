import { educationList, skillsList } from "@/lib/data";

export default function About() {
  const stack = skillsList
    .flatMap((g) => g.items)
    .slice(0, 12)
    .join(" · ");

  const ms = educationList[0];

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="about-grid">
        <div aria-hidden="true" className="km-mark">
          km
        </div>
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="section-title">
            Curiosity is my default setting.
          </h2>
          <p>
            I’m Khaja. I started in connected-vehicle platforms, moved through high-throughput
            payment systems, and now build data platforms at Optum. I like the moment a messy
            distributed problem collapses into a clean contract — and the discipline to keep it
            observable after launch.
          </p>
          <p>
            Most side projects begin with an irritation: fake news that travels too fast, clinical
            answers that need grounding, pipelines that miss their SLA. Then I build until the
            system can explain itself.
          </p>

          <div className="about-meta">
            <div className="meta-card">
              <strong>{ms.title}</strong>
              <span>{ms.place}</span>
              {ms.bullets?.[0] && <p style={{ marginTop: "0.55rem" }}>{ms.bullets[0]}</p>}
            </div>
            <div className="meta-card">
              <strong>Usually within reach</strong>
              <p className="stack-line">{stack}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
