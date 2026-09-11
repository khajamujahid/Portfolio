export const contacts = {
  email: "khajamujahiddin@gmail.com",
  phone: "+13477365812",
  linkedin: "https://www.linkedin.com/in/khaja-muj-76b529410",
  github: "https://github.com/khajamujahid",
  resume: "/Khaja_Mujahiddin_Resume.pdf"
};

export const projects = [
  {
    title: "VERITAS HITL Platform",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
    desc: "Human-in-the-loop multimodal fake news detection: Gemini extracts verifiable claims (strict Pydantic schema), Google Fact Check API feeds forensic reports, plus image/video forensics (ELA, EXIF, reverse search). Celery + Redis workers keep the API responsive; React/Tailwind dashboard; Docker Compose.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid/veritas-hitl-platform" }],
    tags: ["Python", "Gemini", "Celery", "Redis", "React", "Docker"],
    preview: `claim = gemini.extract(article)
facts = fact_check_api.verify(claim)
report = forensics.ela(image)`,
    featured: true,
    stage: "veritas"
  },
  {
    title: "MIKA OS / Clinical AI Agent",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    desc: "Full-stack clinical RAG companion: FastAPI + LangChain retrieves from ChromaDB (HuggingFace embeddings) before Gemini generation over synthetic patient data. Hallucination guardrails constrain answers to retrieved context; Next.js 3D clinical UI.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid/Clinical-AI-Agent" }],
    tags: ["FastAPI", "LangChain", "RAG", "ChromaDB", "Next.js"],
    preview: `docs = chroma.similarity_search(q, k=4)
answer = gemini.generate(context=docs)
assert grounded(answer, docs)`,
    featured: true,
    stage: "mika"
  },
  {
    title: "Cloud Data Pipeline Optimization",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    desc: "Cloud-oriented ETL/ELT pipeline work focused on throughput, cost, and reliability — batch + streaming patterns for analytics-ready data on cloud object storage and warehouses.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid/Cloud-Based-Data-Pipeline-Optimization" }],
    tags: ["ETL", "Cloud", "Python", "Data Engineering"],
    preview: `job = pipeline.stage("extract").transform().load()
metrics = job.run(parallelism=8)
assert metrics.sla_met`,
    featured: true,
    stage: "pipeline"
  },
  {
    title: "Pedestrian & Cyclist Segmentation (U-Net)",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=crop",
    desc: "Pixel-level segmentation of pedestrians and cyclists in urban scenes using a U-Net architecture — computer vision engineering for perception-style tasks.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid/-Self-Driving-Car-Pedestrian-and-Cyclist-Segmentation" }],
    tags: ["Computer Vision", "U-Net", "Deep Learning", "Python"],
    preview: `mask = unet.predict(frame)
overlay = colorize(mask)
iou = evaluate(overlay, labels)`
  },
  {
    title: "Multimodal Fake News Detection",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop",
    desc: "Research-oriented multimodal misinformation detector that fuses text and visual signals — the academic counterpart to VERITAS, targeting ~85% accuracy on claim verification benchmarks.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid/Multimodel-Fake-News-Detection" }],
    tags: ["NLP", "Computer Vision", "Python", "ML"],
    preview: `feats = fuse(text_emb, image_emb)
score = classifier.predict(feats)
label = "misinfo" if score > τ else "credible"`
  },
  {
    title: "SVHN Dataset Analysis",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    desc: "Street View House Numbers (SVHN) exploration and transfer-learning analysis — digit recognition on real-world, noisy street imagery with classic CV evaluation workflows.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid/-Street-View-House-Numbers-Dataset-Analysis" }],
    tags: ["PyTorch", "Transfer Learning", "CV", "Python"],
    preview: `ds = load_svhn(split="train")
model = transfer_learn(backbone="resnet")
acc = evaluate(model, ds.test)`
  },
  {
    title: "Customer Segmentation (ML)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    desc: "Unsupervised customer segmentation with clustering techniques to surface actionable cohorts for marketing and product decisions — feature engineering through cluster profiling.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid/Customer-Segmentation-Using-Machine-Learning" }],
    tags: ["Clustering", "scikit-learn", "Python", "Analytics"],
    preview: `X = scale(features)
labels = kmeans.fit_predict(X)
profiles = summarize(df, labels)`
  },
  {
    title: "Retail Sales Analysis Dashboard",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    desc: "Interactive retail sales analytics dashboard covering revenue trends, category performance, and operational KPIs for decision-ready reporting.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid/Retail-Sales-Analysis-Dashboard" }],
    tags: ["Dashboard", "BI", "SQL", "Analytics"],
    preview: `kpi = sales.revenue.by("region")
chart = dashboard.add(kpi, type="trend")
export(chart, format="png")`
  },
  {
    title: "Adventure Works Analytics",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=800&auto=format&fit=crop",
    desc: "End-to-end analysis of Adventure Works manufacturing and bike-sales data — insights and decision support for growth, efficiency, and product performance.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahiddin/Adventure_Works" }],
    tags: ["Power BI", "SQL", "Analytics", "Manufacturing"],
    preview: `model = adventure_works.star_schema()
report = build_kpis(model)
publish(report)`
  },
  {
    title: "Automobile Sales Dashboard",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
    desc: "Norway automobile sales dashboard analyzing brand performance and market dynamics with interactive visuals for comparative brand insights.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahiddin/Automobile_cars" }],
    tags: ["Power BI", "Dashboard", "Market Analysis"],
    preview: `by_brand = sales.group("brand").sum("units")
rank = by_brand.sort(desc=True)
dashboard.card(rank)`
  },
  {
    title: "E-Commerce Power BI Dashboard",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    desc: "Sales analysis report for an e-commerce store with KPIs and charts for profit, sales volume, and quantity — built for clear operational storytelling.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahiddin/E-Commerce-PowerBI" }],
    tags: ["Power BI", "E-Commerce", "KPI", "Analytics"],
    preview: `profit = orders.sum("profit")
qty = orders.sum("qty")
page.add_kpis([profit, qty, aov])`
  },
  {
    title: "HR Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    desc: "Power BI HR analytics report that makes workforce metrics easy to explore across states and categories for business stakeholders.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahiddin/HR-Analytics-Dashboard" }],
    tags: ["Power BI", "HR", "Dashboard", "Analytics"],
    preview: `attrition = hr.filter(status="left")
view = slice(attrition, by=["state", "dept"])
publish(view)`
  },
  {
    title: "Manufacturing Analytics",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    desc: "Manufacturing sales dashboards and MySQL-backed reporting for yearly performance — operational reports tailored to plant and product stakeholders.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahiddin/Manufacturing-Analytics" }],
    tags: ["Power BI", "MySQL", "Manufacturing", "Reporting"],
    preview: `yearly = sql.query("SELECT year, sales FROM facts")
dashboard = build_yearly(yearly)
export(dashboard)`
  },
  {
    title: "Comparative Company Analysis",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    desc: "Side-by-side company dataset comparison with forecasting overlays — an interactive dashboard for clearer competitive and planning decisions.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahiddin/Comparitive_Analysis" }],
    tags: ["Power BI", "Forecasting", "Analytics"],
    preview: `a, b = load_companies()
forecast = compare_forecast(a, b, horizon=12)
dashboard.plot(forecast)`
  },
  {
    title: "Power BI Sales Dashboard",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop",
    desc: "E-commerce sales dashboard in Power BI focused on clean KPI storytelling — revenue, volume, and category performance at a glance.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahiddin/Powerbi" }],
    tags: ["Power BI", "Sales", "Dashboard"],
    preview: `page = pbix.add_page("Sales")
page.kpi("Revenue").chart("Category Mix")
refresh(page)`
  }
];

export const experience = [
  {
    role: "Senior Software Engineer - Data Platform",
    company: "Optum (UnitedHealth Group)",
    location: "Hartford, CT",
    year: "2025 — now",
    period: "Jul 2025 – Present",
    meta: "Optum (UnitedHealth Group) • Hartford, CT • Jul 2025 – Present",
    outcomes: [
      { label: "35% higher throughput", detail: "ETL & microservice platform" },
      { label: "sub-100ms latency", detail: "Kafka + SQS at peak load" },
      { label: "40% lower MTTR", detail: "CloudWatch + Datadog" }
    ],
    tags: ["Python", "FastAPI", "PySpark", "Kafka", "AWS", "Azure", "Docker"],
    bullets: [
      "Owned design and deployment of distributed ETL and microservice platform components using Python, FastAPI, and PySpark on AWS/Azure, improving throughput by 35%.",
      "Architected resilient REST APIs and async messaging pipelines with Kafka and SQS, cutting downstream API latency to sub-100ms at peak loads.",
      "Implemented rigorous CI/CD workflows using GitHub Actions and Docker, reducing integration bugs by 25% and achieving zero-downtime releases.",
      "Established comprehensive logging and observability with CloudWatch and Datadog, decreasing Mean Time to Resolution (MTTR) by 40%.",
      "Mentored 4 junior engineers, led weekly code reviews, and enforced SOLID object-oriented standards across cross-functional teams."
    ]
  },
  {
    role: "Software Engineer",
    company: "Staples",
    location: "Chennai, India",
    year: "2022 — 2023",
    period: "Jan 2022 – Jul 2023",
    meta: "Staples • Chennai, India • Jan 2022 – Jul 2023",
    outcomes: [
      { label: "99.7% auth success", detail: "B2B payment gateway" },
      { label: "99.9% uptime", detail: "Black Friday peaks" },
      { label: "600ms p95", detail: "down from 800ms reporting APIs" }
    ],
    tags: ["Java 17", "Spring Boot", "PostgreSQL", "Redis", "MongoDB"],
    bullets: [
      "Re-architected core B2B payment gateway microservices using Java 17, Spring Boot, and PostgreSQL, lifting authorization success from 97% to 99.7%.",
      "Optimized relational database queries, indexing strategies, and multi-tier Redis caching, slashing p95 reporting API response times from 800ms to 600ms.",
      "Engineered near-real-time data synchronization between MongoDB order datastores and PostgreSQL warehouses across 40+ regional markets.",
      "Built robust unit and integration test suites in JUnit and PyTest, maintaining 90%+ code coverage across all production services.",
      "Participated in 24/7 on-call rotation for high-throughput transactional services, maintaining 99.9% uptime during Black Friday peaks."
    ]
  },
  {
    role: "Software Engineer",
    company: "SRIK Consulting (Client: BMW Group)",
    location: "Hyderabad, India",
    year: "2019 — 2021",
    period: "Aug 2019 – Dec 2021",
    meta: "SRIK Consulting (Client: BMW Group) • Hyderabad, India • Aug 2019 – Dec 2021",
    outcomes: [
      { label: "50,000+ vehicles", detail: "telemetry ingestion" },
      { label: "3× release cadence", detail: "EKS microservices" },
      { label: "5-day integrations", detail: "down from 3 weeks" }
    ],
    tags: ["Java", "gRPC", "Kafka Streams", "PostgreSQL", "Redis", "AWS EKS"],
    bullets: [
      "Developed async vehicle telemetry ingestion services for 50,000+ connected vehicles using Java, gRPC, and Kafka Streams.",
      "Designed partitioned PostgreSQL and Redis schemas for 100M+ configuration records, accelerating dealer feature onboarding by 50%.",
      "Containerized enterprise legacy monolith into Docker microservices deployed on AWS EKS, increasing release frequency 3x.",
      "Constructed backward-compatible gRPC and Protobuf API contracts, reducing cross-team platform integration times from 3 weeks to 5 days.",
      "Authored architectural decision records (ADRs), runbooks, and wiki operational documentation for 15+ distributed microservices."
    ]
  }
];

export const skillsList = [
  { cat: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "C#", "SQL", "Go"] },
  { cat: "Backend & Web", items: ["Node.js", "FastAPI", "Spring Boot", "REST API", "GraphQL", "gRPC", "Microservices", "SOLID Principles"] },
  { cat: "Databases & Storage", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Snowflake", "SQL Server", "NoSQL"] },
  { cat: "Data & Event Streaming", items: ["Apache Kafka", "AWS SQS", "PySpark", "dbt", "Airflow", "ETL/ELT"] },
  { cat: "Cloud & DevOps", items: ["AWS (S3, Lambda, ECS, EKS)", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub Actions"] },
  { cat: "Testing & Observability", items: ["PyTest", "JUnit", "Prometheus", "Grafana", "Datadog", "ELK Stack", "OpenTelemetry"] }
];

export const educationList = [
  {
    title: "M.S., Data Science",
    place: "University of New Haven · New Haven, CT · Aug 2023 — May 2025",
    bullets: [
      "Coursework: advanced ML, deep learning, NLP, cloud MLOps, big data.",
      "Key projects: multimodal misinformation detection (~85% accuracy) and U-Net pedestrian/cyclist segmentation."
    ]
  },
  {
    title: "B.Tech",
    place: "Sreenidhi Institute of Science and Technology · Hyderabad, India · Jun 2017 — May 2021",
    bullets: []
  }
];

export const botAnswers = {
  skills: "My core stack is Python, Java, TypeScript, FastAPI, Spring Boot, Kafka, PostgreSQL/Redis, AWS, Docker, and Kubernetes — with strong CI/CD and observability habits.",
  cloud: "I build and operate backend platforms on AWS (S3, Lambda, ECS, EKS) and Azure, with Docker/Kubernetes, Terraform, and GitHub Actions for reliable releases.",
  impact: "At Optum I improved ETL/microservice throughput by 35% and cut API latency to sub-100ms; at Staples I lifted payment auth success to 99.7% and held 99.9% uptime on peak traffic.",
  ml: "I hold an MS in Data Science and ship AI systems like VERITAS HITL (multimodal forensics) and a clinical RAG agent with hallucination guardrails.",
  contact: "You can reach me at khajamujahiddin@gmail.com or connect on LinkedIn!"
};
