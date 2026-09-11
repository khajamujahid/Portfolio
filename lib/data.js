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
    tags: ["Python", "Gemini", "Celery", "Redis", "React", "Docker"]
  },
  {
    title: "MIKA OS / Clinical AI Agent",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    desc: "Full-stack clinical RAG companion: FastAPI + LangChain retrieves from ChromaDB (HuggingFace embeddings) before Gemini generation over synthetic patient data. Hallucination guardrails constrain answers to retrieved context; Next.js 3D clinical UI.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid/Clinical-AI-Agent" }],
    tags: ["FastAPI", "LangChain", "RAG", "ChromaDB", "Next.js"]
  },
  {
    title: "Pedestrian & Cyclist Segmentation (U-Net)",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=crop",
    desc: "Pixel-level segmentation of pedestrians and cyclists in urban scenes using a U-Net architecture — computer vision engineering for perception-style tasks.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid/-Self-Driving-Car-Pedestrian-and-Cyclist-Segmentation" }],
    tags: ["Computer Vision", "U-Net", "Deep Learning", "Python"]
  }
];

export const experience = [
  {
    role: "Senior Software Engineer - Data Platform",
    meta: "Optum (UnitedHealth Group) • Hartford, CT • Jul 2025 – Present",
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
    meta: "Staples • Chennai, India • Jan 2022 – Jul 2023",
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
    meta: "SRIK Consulting (Client: BMW Group) • Hyderabad, India • Aug 2019 – Dec 2021",
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
