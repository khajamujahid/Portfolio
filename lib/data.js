export const contacts = {
  email: "khajamujahiddin@gmail.com",
  phone: "+13477365812",
  linkedin: "https://www.linkedin.com/in/khaja-mujahiddin-mohammed-baaa171b8/",
  github: "https://github.com/khajamujahid",
  resume: "/Khaja_Mujahiddin_Resume.pdf"
};

export const projects = [
  { 
    title:"Multimodal Fake News Detection", 
    image:"https://source.unsplash.com/featured/?news,ai", 
    desc:"Built a multimodal ML pipeline combining NLP-based text features and metadata to classify news as real or fake. Achieved 85% accuracy using TensorFlow and Hugging Face Transformers. Automated preprocessing and retraining with Apache Airflow and deployed on Hugging Face Spaces.", 
    links:[{label:"GitHub", url:"https://github.com/khajamujahid"}], 
    tags:["NLP","MLOps","TensorFlow","Hugging Face","Airflow"] 
  },
  { 
    title:"Pedestrian & Cyclist Segmentation (Self-Driving Car)", 
    image:"https://source.unsplash.com/featured/?autonomous,car,vision", 
    desc:"Developed a U-Net semantic segmentation model in TensorFlow for real-time detection of pedestrians and cyclists. Annotated a large dataset, applied OpenCV preprocessing, and integrated outputs into evaluation pipelines for monitoring.", 
    links:[{label:"GitHub", url:"https://github.com/khajamujahid"}], 
    tags:["Deep Learning","Computer Vision","U-Net","OpenCV"] 
  },
  { 
    title:"Cloud-based ETL Pipeline Optimization", 
    image:"https://source.unsplash.com/featured/?cloud,aws,data", 
    desc:"Designed and optimized a cloud ETL pipeline using AWS S3, RDS, Lambda, and Redshift/EMR. Reduced processing time by 30% through parallelism and efficient job scheduling. Implemented error handling and alerts for reliability.", 
    links:[{label:"GitHub", url:"https://github.com/khajamujahid"}], 
    tags:["AWS","ETL","Airflow","Lambda","Redshift","EMR"] 
  },
  { 
    title:"E-Commerce Sales Dashboard", 
    image:"https://source.unsplash.com/featured/?dashboard,data", 
    desc:"Created a Power BI dashboard analyzing customer behavior and sales trends (2017–2020). Identified a 43% sales loss in 2020, enabling strategic recovery. Visualizations include Top Products, Profit by Category, and Customer Retention KPIs.", 
    links:[{label:"GitHub", url:"https://github.com/khajamujahid"}], 
    tags:["Power BI","Analytics","DAX","Data Modeling"] 
  }
];

export const experience = [
  { 
    role:"AWS Data Engineer (AI/ML) — Staples", 
    meta:"Aug 2024 – Present · Boston, MA", 
    bullets:[
      "Built and deployed ML & NLP models (sentiment analysis, topic modeling, classification) using Python, spaCy, and NLTK.",
      "Developed real-time streaming pipelines with AWS Kinesis & SNS and automated ETL workflows using Glue & Lambda, improving efficiency by ~25%.",
      "Migrated and optimized ML workloads on AWS Cloud (EC2, S3, RDS), achieving 99.9% uptime across 5+ internal analytics applications.",
      "Performed time-series forecasting using ARIMA, Prophet, and LSTM models to predict demand trends and optimize resource allocation.",
      "Reduced cloud infrastructure costs by ~$5K annually via lifecycle policies and utilization monitoring.",
      "Deployed CI/CD pipelines with AWS CodePipeline & CodeBuild, reducing deployment cycles from 2 days to 4 hours.",
      "Applied IAM, VPC configurations, and CloudWatch monitoring to strengthen security and governance."
    ]
  },
  { 
    role:"Data Analyst (Azure) | Power BI Developer — SRIK Consulting Services", 
    meta:"Sep 2020 – July 2023 · Hyderabad, India", 
    bullets:[
      "Designed and developed 20+ Power BI dashboards integrating SQL Server, MySQL, and Excel for Finance, Operations, and HR teams (50+ stakeholders).",
      "Created advanced DAX measures and optimized models, improving decision accuracy and query performance by 35%.",
      "Built KPI dashboards and automated refresh pipelines with Power Query & Power BI Gateway, cutting reporting time from 5 to 2 days.",
      "Extracted and transformed data via SSIS, Python, and R to ensure reliable analytics datasets.",
      "Developed streaming apps with PySpark and Kafka on Hadoop clusters for real-time processing in healthcare and finance domains.",
      "Conducted customer profitability analysis and journey path optimization to enhance retention strategies.",
      "Automated repetitive tasks with PowerShell scripts, reducing manual intervention and improving efficiency."
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
