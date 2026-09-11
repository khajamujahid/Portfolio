'use client';
import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOPICS = ['payments.auth', 'telemetry.vehicle', 'platform.events'];

function KafkaLab() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [running, setRunning] = useState(true);
  const [events, setEvents] = useState([]);
  const [throughput, setThroughput] = useState(0);

  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => {
      const latency = Math.floor(18 + Math.random() * 70);
      const payload = {
        id: Math.random().toString(36).slice(2, 8),
        topic,
        latency,
        ts: new Date().toLocaleTimeString(),
      };
      setEvents((prev) => [payload, ...prev].slice(0, 8));
      setThroughput((t) => Math.min(1200, Math.round(t * 0.86 + (900 + Math.random() * 280) * 0.14)));
    }, 700);
    return () => clearInterval(id);
  }, [running, topic]);

  return (
    <div className="lab-panel">
      <div className="lab-toolbar">
        <label>
          Topic
          <select value={topic} onChange={(e) => setTopic(e.target.value)}>
            {TOPICS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
        <button className="btn" type="button" onClick={() => setRunning((r) => !r)}>
          {running ? 'Pause stream' : 'Resume stream'}
        </button>
        <div className="lab-metric"><strong>{throughput}</strong><span>msg/s</span></div>
      </div>
      <div className="kafka-rail" aria-hidden="true">
        <span className="kafka-node">Producer</span>
        <span className="kafka-wire" />
        <span className="kafka-node accent">Kafka</span>
        <span className="kafka-wire" />
        <span className="kafka-node">Consumer</span>
      </div>
      <ul className="event-feed">
        <AnimatePresence initial={false}>
          {events.map((e) => (
            <motion.li
              key={e.id + e.ts}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              <code>{e.ts}</code>
              <span className="pill">{e.topic}</span>
              <span>id={e.id}</span>
              <span className={e.latency < 50 ? 'ok' : 'warn'}>{e.latency}ms</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <pre className="lab-code">{`await producer.send_and_wait("${topic}", event)
# target: sub-100ms downstream API latency`}</pre>
    </div>
  );
}

const CORPUS = [
  { id: 'chunk-12', text: 'Patient reports mild headache; vitals stable; no fever.', score: 0.91 },
  { id: 'chunk-07', text: 'Prior meds: amlodipine 5mg daily. No known drug allergies.', score: 0.84 },
  { id: 'chunk-19', text: 'Imaging deferred; follow-up in 2 weeks if symptoms persist.', score: 0.71 },
];

function RagLab() {
  const [query, setQuery] = useState('Summarize current symptoms and meds');
  const [hits, setHits] = useState([]);
  const [answer, setAnswer] = useState('');
  const [guarded, setGuarded] = useState(true);

  const run = () => {
    const ranked = [...CORPUS].sort((a, b) => b.score - a.score);
    setHits(ranked);
    if (guarded) {
      setAnswer(
        'Based on retrieved notes only: mild headache, stable vitals, amlodipine 5mg daily, NKA. Imaging deferred with 2-week follow-up. (Hallucination guardrails: no claims outside retrieved context.)'
      );
    } else {
      setAnswer(
        'Unguarded mode would invent unsupported details. Keep guardrails ON for clinical RAG.'
      );
    }
  };

  useEffect(() => { run(); }, []);

  return (
    <div className="lab-panel">
      <div className="lab-toolbar">
        <input
          aria-label="RAG query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask the clinical RAG agent…"
        />
        <label className="toggle">
          <input type="checkbox" checked={guarded} onChange={(e) => setGuarded(e.target.checked)} />
          Guardrails
        </label>
        <button className="btn primary" type="button" onClick={run}>Retrieve</button>
      </div>
      <div className="rag-grid">
        <div>
          <h4>Retrieved chunks</h4>
          <ul className="chunk-list">
            {hits.map((h) => (
              <li key={h.id}>
                <div className="chunk-meta"><code>{h.id}</code><span>{Math.round(h.score * 100)}%</span></div>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Grounded answer</h4>
          <div className="answer-box">{answer}</div>
          <pre className="lab-code">{`retriever = ChromaDB(embeddings="hf")
docs = retriever.similarity_search(query, k=3)
answer = gemini.generate(context=docs, guardrails=True)`}</pre>
        </div>
      </div>
    </div>
  );
}

function LatencyLab() {
  const [load, setLoad] = useState(40);
  const p95 = useMemo(() => Math.round(28 + load * 1.15 + (load > 70 ? (load - 70) * 2.2 : 0)), [load]);
  const cacheHit = useMemo(() => Math.max(42, Math.round(92 - load * 0.35)), [load]);

  return (
    <div className="lab-panel">
      <div className="lab-toolbar">
        <label className="slider">
          Simulated traffic
          <input type="range" min={10} max={100} value={load} onChange={(e) => setLoad(Number(e.target.value))} />
        </label>
        <div className="lab-metric"><strong>{p95}ms</strong><span>p95 API</span></div>
        <div className="lab-metric"><strong>{cacheHit}%</strong><span>Redis hit</span></div>
      </div>
      <div className="latency-bars" aria-hidden="true">
        <div className="bar" style={{ width: `${Math.min(100, p95 / 1.8)}%` }} />
      </div>
      <p className="lab-caption">
        Pattern from Staples/Optum work: multi-tier Redis + indexed Postgres to keep p95 near sub-100ms under load.
      </p>
      <pre className="lab-code">{`@cache(ttl=30, backend="redis")
def reporting_api(region_id):
    return db.query(optimized_index).fetch(region_id)`}</pre>
    </div>
  );
}

const TABS = [
  { id: 'kafka', label: 'Kafka stream', blurb: 'Live event bus like payments & telemetry platforms', Comp: KafkaLab },
  { id: 'rag', label: 'Clinical RAG', blurb: 'Retrieve → ground → answer with guardrails', Comp: RagLab },
  { id: 'latency', label: 'Latency lab', blurb: 'Feel how cache + load shape p95', Comp: LatencyLab },
];

export default function LiveLabs() {
  const [tab, setTab] = useState('kafka');
  const active = TABS.find((t) => t.id === tab) || TABS[0];
  const Comp = active.Comp;

  return (
    <section id="labs" className="section labs" aria-labelledby="labs-title">
      <div className="section-head">
        <p className="eyebrow">Interactive</p>
        <h2 id="labs-title">Live engineering labs</h2>
        <p className="lede">
          Click around — these mini demos mirror how I build backend platforms, event pipelines, and grounded AI systems.
        </p>
      </div>
      <div className="lab-tabs" role="tablist" aria-label="Labs">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            className={tab === t.id ? 'lab-tab active' : 'lab-tab'}
            onClick={() => setTab(t.id)}
            type="button"
          >
            <strong>{t.label}</strong>
            <span>{t.blurb}</span>
          </button>
        ))}
      </div>
      <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
        <Comp />
      </motion.div>
    </section>
  );
}
