export const contacts = {
  email: "muhammedshoaib835@gmail.com",
  phone: "+13477365812",
  linkedin: "https://www.linkedin.com/in/mujahiddin-md-6b21b1390/",
  github: "https://github.com/khajamujahid",
  resume: "/Khaja_Mujahiddin_Resume.pdf"
};

export const projects = [
  {
    title: "Real-Time Customer Segmentation",
    image: "https://raw.githubusercontent.com/khajamujahid/real-time-segmentation/main/demo.gif",
    desc: "Capstone | AWS S3 → Glue → PySpark → K-Means + PCA → Live Power BI dashboard. Automated weekly retraining.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid/real-time-segmentation" }],
    tags: ["AWS", "PySpark", "Power BI", "MLOps"]
  },
  {
    title: "AdventureWorks Sales Dashboard",
    image: "https://raw.githubusercontent.com/khajamujahid/adventureworks-dashboard/main/screenshot.png",
    desc: "3-page Power BI dashboard | YoY revenue, Top-10 products, Geographic heatmaps | DAX + drill-throughs.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid/adventureworks-dashboard" }],
    tags: ["Power BI", "DAX", "SQL"]
  },
  {
    title: "Multimodal Fake News Detector",
    image: "https://huggingface.co/spaces/khajamujahid/truthlens/resolve/main/thumbnail.png",
    desc: "Major Semester Project | Airflow + Hugging Face Transformers | 85% accuracy | Live on Hugging Face Spaces.",
    links: [{ label: "Demo", url: "https://huggingface.co/spaces/khajamujahid/truthlens" }],
    tags: ["NLP", "Airflow", "Hugging Face"]
  },
  {
    title: "Microsoft Fabric Real-Time Intelligence",
    image: "https://raw.githubusercontent.com/khajamujahid/fabric-real-time/main/dashboard.png",
    desc: "KQL + Eventstream → Live Power BI | Completed Microsoft Learn trophy.",
    links: [{ label: "GitHub", url: "https://github.com/khajamujahid/fabric-real-time" }],
    tags: ["Fabric", "KQL", "Real-Time"]
  }
];
export const experience = [
  {
    role: "Data Scientist Intern",
    meta: "Innover Global • Aurora, IL • Aug 2025 – Present",
    bullets: [
      "Building prototype real-time pipeline: Kinesis → Glue → Lambda → S3 (100K+ events/day)",
      "K-Means + PCA customer segmentation model in PySpark",
      "Interactive Power BI dashboards with DAX slicers for stakeholders"
    ]
  },
  {
    role: "Jr. Data Analyst (started as intern)",
    meta: "SRIK Consulting • Hyderabad, India • Sep 2020 – Jul 2023",
    bullets: [
      "Delivered 8–10 production Power BI dashboards (50+ users) with Row-Level Security",
      "Automated weekly refreshes using Python + SQLAlchemy → saved 8 hrs/analyst/week",
      "Built star-schema models from MySQL, SQL Server, Excel, REST APIs"
    ]
  }
];

export const skillsList = [
  { cat:"Programming & Scripting", items:["Python","SQL","PySpark","R","Bash","PowerShell"] },
  { cat:"Data Engineering & Big Data", items:["ETL Pipelines","Apache Spark","Kafka","Hadoop","Databricks","Snowflake","Redshift","SSIS","Talend","Informatica"] },
  { cat:"Cloud Platforms", items:["AWS (EC2, S3, RDS, Glue, Lambda, Kinesis, SNS, IAM, SageMaker)","Azure (Data Factory, Databricks, Synapse, Power BI Gateway)","GCP (BigQuery)"] },
  { cat:"Databases", items:["SQL Server","Oracle","MySQL","PostgreSQL","MongoDB","Teradata","Cassandra"] },
  { cat:"Machine Learning & AI", items:["Scikit-learn","TensorFlow","PyTorch","ARIMA","Prophet","LSTM","NLP (spaCy, NLTK, Transformers)"] },
  { cat:"GenAI & LLMs", items:["OpenAI GPT-4","LangChain","Hugging Face Transformers","RAG","Llama Index","Semantic Search","Chatbot Development"] },
  { cat:"Visualization & BI", items:["Power BI (DAX, RLS, Power Query)","Tableau","Excel (Power Pivot, Power View)","R Shiny"] },
  { cat:"DevOps & Orchestration", items:["Docker","Kubernetes","Apache Airflow","Jenkins CI/CD","Terraform","Control-M"] },
  { cat:"Version Control & Collaboration", items:["Git","GitHub","JIRA","Agile/Scrum"] }
];

export const university = {
  title: "Master’s in Data Science",
  place: "University of New Haven, CT, USA · Aug 2023 — May 2025",
  bullets: [
    "Coursework: Advanced Machine Learning, Deep Learning, NLP, Cloud-Based MLOps, Big Data Analytics.",
    "Hands-on: Spark ETL on AWS EMR, model retraining with SageMaker Pipelines.",
    "Key Projects: Multimodal Fake News Detection (85% accuracy), Pedestrian & Cyclist Segmentation (U-Net)."
  ]
};
