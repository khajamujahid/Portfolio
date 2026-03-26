export const contacts = {
  email: "khajamujahiddin@gmail.com",
  phone: "+13477365812",
  linkedin: "https://www.linkedin.com/in/mujahiddin-md-6b21b1390/",
  github: "https://github.com/khajamujahid",
  resume: "/Khaja_Mujahiddin_Resume.pdf"
};

export const projects = [
  {
    title: "NLP-Driven Speech Analytics Platform",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop",
    desc: "End-to-end speech processing pipeline utilizing Whisper transformer and Voice Activity Detection to transcribe and segment audio recordings. Built distributed processing pipelines in PySpark and Databricks.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid" }],
    tags: ["NLP", "PySpark", "Databricks", "Whisper", "Azure"]
  },
  {
    title: "Enterprise Lakehouse Analytics Platform",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    desc: "Scalable Medallion data architecture integrating ERP and operational datasets across Azure Data Lake. Implemented ETL workflows using PySpark, SQL, and Airflow.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid" }],
    tags: ["Azure", "Medallion", "Airflow", "Power BI"]
  },
  {
    title: "Multimodal Fake News Detection",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
    desc: "Advanced classification model leveraging Deep Learning and NLP techniques to identify misinformation across text and media formats.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid" }],
    tags: ["Deep Learning", "NLP", "Machine Learning"]
  },
  {
    title: "Pedestrian & Cyclist Segmentation",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=crop",
    desc: "Computer vision project utilizing U-Net architecture for precise pixel-level segmentation of pedestrians and cyclists in urban environments.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid" }],
    tags: ["Computer Vision", "U-Net", "Deep Learning"]
  },
  {
    title: "Real-Time Customer Segmentation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    desc: "AWS S3 → Glue → PySpark → K-Means + PCA → Live Power BI dashboard. Automated weekly retraining.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid/real-time-segmentation" }],
    tags: ["AWS", "PySpark", "Power BI", "MLOps"]
  }
];

export const experience = [
  {
    role: "Data Engineer",
    meta: "Optum • Hartford, CT • Jan 2025 – Present",
    bullets: [
      "Architected scalable ETL and data ingestion pipelines on AWS and Azure with Databricks, Lambda, and Step Functions.",
      "Engineered automated feature engineering pipelines utilizing PySpark and SQL, reducing data preparation latency by 30%.",
      "Designed high-performance relational and NoSQL data structures in ADLS Gen2 for downstream machine-learning workflows.",
      "Streamlined orchestration workflows using Airflow and dbt, and implemented data observability frameworks.",
      "Applied FinOps principles to optimize cloud compute usage, reducing operational costs."
    ]
  },
  {
    role: "Associate Data Engineer",
    meta: "Staples • Chennai, India • Oct 2021 – Jul 2023",
    bullets: [
      "Implemented a Medallion Lakehouse architecture in Azure Data Lake (Bronze/Silver/Gold) to unify multi-brand ERP datasets.",
      "Designed scalable ETL workflows using PySpark and SQL to transform high-volume financial transaction datasets.",
      "Developed automated reporting and visualization layers in Power BI and Spotfire.",
      "Optimized SQL query performance across Snowflake and Azure Synapse environments."
    ]
  },
  {
    role: "Data Analyst",
    meta: "Verizon • Hyderabad, India • Aug 2019 – Sep 2021",
    bullets: [
      "Developed high-throughput Spark and Python data pipelines in Azure Databricks processing millions of daily telecom records.",
      "Deployed NLP transcription workflows using Whisper and Voice Activity Detection (VAD) models.",
      "Executed serverless analytics with AWS Athena to analyze acoustic metadata.",
      "Designed Power BI dashboards visualizing regional network performance and signal degradation metrics."
    ]
  }
];

export const skillsList = [
  { cat:"Languages", items:["Python", "pandas", "NumPy", "scikit-learn", "SQL", "PostgreSQL", "MySQL", "Snowflake", "R", "PySpark"] },
  { cat:"Machine Learning & AI", items:["NLP", "Deep Learning", "Feature Engineering", "Statistical Modeling", "A/B Testing", "Transformer Models", "Voice Activity Detection", "Prompt Engineering"] },
  { cat:"Data Engineering", items:["Apache Spark", "Delta Lake", "Kafka", "Hadoop Ecosystem", "ETL/ELT Pipelines", "Medallion Architecture"] },
  { cat:"Cloud Platforms", items:["Azure", "Databricks", "Data Factory", "Synapse", "ADLS Gen2", "AWS", "S3", "SageMaker", "Athena", "Lambda", "Glue", "EMR"] },
  { cat:"MLOps & DataOps", items:["Airflow", "dbt", "MLflow", "Docker", "Kubernetes", "Terraform", "CI/CD", "Git", "Great Expectations", "Data Observability"] },
  { cat:"Visualization & BI", items:["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly", "Excel"] },
  { cat:"Architecture & Governance", items:["Lakehouse Architecture", "Star/Snowflake Schemas", "Data Lineage", "Data Governance", "HIPAA/PCI Compliance", "FinOps"] }
];

export const educationList = [
  {
    title: "Master of Science, Data Science",
    place: "University of New Haven · West Haven, CT · Aug 2023 — May 2025",
    bullets: [
      "Coursework: Advanced Machine Learning, Deep Learning, NLP, Cloud-Based MLOps, Big Data Analytics.",
      "Key Projects: Multimodal Fake News Detection (85% accuracy), Pedestrian & Cyclist Segmentation (U-Net)."
    ]
  },
  {
    title: "Bachelor of Technology, Mechanical Engineering",
    place: "Sreenidhi Institute of Science & Technology · Hyderabad, India · Jun 2017 — May 2021",
    bullets: [
      "Foundation in quantitative analysis, mathematics, and engineering principles.",
      "Transitioned into data and analytics through hands-on programming and statistical modeling projects."
    ]
  }
];

export const botAnswers = {
  skills: "My top skills include Python, PySpark, SQL, Azure Databricks, AWS, Medallion Architecture, and Machine Learning (NLP, Transformers).",
  cloud: "I design scalable analytics platforms across Azure (Databricks, Synapse, ADLS Gen2) and AWS (S3, Lambda, Glue, Athena).",
  impact: "I implemented a Medallion Lakehouse cutting data-prep latency by 30%, and deployed an NLP-driven speech analytics platform using Whisper models.",
  ml: "I hold an MS in Data Science and specialize in NLP, transformer models (Whisper, Hugging Face), and predictive healthcare platforms.",
  contact: "You can reach me at khajamujahiddin@gmail.com or connect with me on LinkedIn!"
};
