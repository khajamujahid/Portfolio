export default function Manifesto() {
  return (
    <section className="manifesto" aria-labelledby="manifesto-title">
      <div className="manifesto-inner">
        <p className="manifesto-label">The through-line</p>
        <h2 id="manifesto-title" className="manifesto-quote">
          Ambition is a draft. <em className="gold" style={{fontStyle:"normal"}}>Engineering</em> makes it ship.
        </h2>
        <p className="manifesto-body">
          From telemetry for tens of thousands of vehicles to payment rails that clear on peak days
          and clinical-adjacent data platforms — my work lives where ambitious ideas meet people who
          need them to keep working. I care about the boring parts that make systems trustworthy:
          contracts, observability, and the last mile of latency.
        </p>
      </div>
    </section>
  );
}
