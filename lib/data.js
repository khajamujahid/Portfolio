export const contacts = {
  email: "khajamujahiddin@gmail.com",
  phone: "+13477365812",
  linkedin: "https://www.linkedin.com/in/khaja-mujahiddin-mohammed-baaa171b8/",
  twitter: "https://twitter.com/Khaja7262",
  github: "https://github.com/khajamujahid",
  instagram: "https://instagram.com/khaja_2310",
  resume: "/Khaja_Mujahiddin_Resume.pdf"
};

export const projects = [
  { title:"Fake News Detection (Multimodal ML)", image:"https://source.unsplash.com/featured/?news,ai", desc:"Built a multimodal ML model combining NLP-based text features and metadata to classify news as real or fake. Achieved 85% accuracy using TensorFlow, Hugging Face Transformers, and Scikit-learn. Automated data preprocessing & retraining with Apache Airflow and deployed on Hugging Face Spaces for real-time inference.", links:[{label:"GitHub", url:"https://github.com/khajamujahid"}], tags:["NLP","MLOps","TensorFlow","Hugging Face","Airflow"] },
  { title:"Self-Driving Car: Pedestrian & Cyclist Segmentation", image:"https://source.unsplash.com/featured/?autonomous,car,vision", desc:"Developed a U-Net semantic segmentation model in TensorFlow for real-time detection of pedestrians and cyclists in urban environments. Annotated a large-scale dataset, applied OpenCV preprocessing, and integrated outputs into evaluation pipelines for continuous monitoring.", links:[{label:"GitHub", url:"https://github.com/khajamujahid"}], tags:["Deep Learning","Computer Vision","U-Net","OpenCV"] },
  { title:"E-Commerce Sales Dashboard", image:"https://source.unsplash.com/featured/?dashboard,data", desc:"Designed an annual sales reporting dashboard in Power BI to analyze customer behavior and sales trends (2017–2020). Identified a 43% sales loss in 2020 and enabled strategic recovery planning. Visualizations include Top/Bottom Customers, Top Products, and Profit by Category.", links:[{label:"GitHub", url:"https://github.com/khajamujahid"}], tags:["Power BI","Analytics","DAX","Data Modeling"] },
  { title:"Customer Segmentation (K-Means + PCA)", image:"https://source.unsplash.com/featured/?clusters,analytics", desc:"Implemented K-Means clustering for segmentation based on purchasing patterns. Performed feature engineering and PCA for dimensionality reduction and better visualization. Visualized segments in Power BI to support targeted marketing (improved efficiency by 10%).", links:[{label:"GitHub", url:"https://github.com/khajamujahid"}], tags:["Machine Learning","K-Means","PCA","Power BI"] },
  { title:"Street View House Numbers (SVHN) Classification", image:"https://source.unsplash.com/featured/?street,house,number", desc:"Developed a CNN model in TensorFlow to classify digits from street images, achieving 93% accuracy. Applied normalization and augmentation for robustness. Evaluated with confusion matrices and classification reports.", links:[{label:"GitHub", url:"https://github.com/khajamujahid"}], tags:["Deep Learning","CNN","TensorFlow","Image Processing"] },
  { title:"Cloud-based ETL Pipeline Optimization", image:"https://source.unsplash.com/featured/?cloud,aws,data", desc:"Developed and optimized a cloud-based ETL pipeline using AWS S3, RDS, Lambda, and Redshift/EMR. Reduced processing time by 30% via parallelism and efficient job scheduling. Implemented robust error handling and alerts for high reliability.", links:[{label:"GitHub", url:"https://github.com/khajamujahid"}], tags:["AWS","ETL","Airflow","Lambda","Redshift","EMR"] }
];

export const experience = [
  { role:"AWS Cloud Practitioner — EduBridge Learning Pvt. Ltd.", meta:"Feb 2023 — May 2023 · Remote", bullets:[
    "Improved data processing efficiency by 25% through automated ETL pipelines in Python.",
    "Leveraged AWS EC2, S3, RDS, Redshift to optimize workflows (reduced system load by 20%).",
    "Integrated Apache Airflow & dbt for scheduled, scalable data transformations.",
    "Designed cloud-native architectures supporting large-scale analytics on AWS.",
    "Performed AWS cost optimization, saving ~15% via rightsizing & utilization monitoring."
  ]},
  { role:"Power BI Developer — SRIK Consulting Services Pvt. Ltd.", meta:"Sep 2020 — Feb 2023 · Hyderabad, India", bullets:[
    "Built 20+ interactive Power BI dashboards integrated with MySQL & Excel.",
    "Automated pipelines with SQL & Power Query, reducing manual errors.",
    "Designed KPI dashboards improving visibility by 30% & decision speed.",
    "Developed advanced DAX measures for time-series & custom metrics.",
    "Standardized data models and documentation for reusability across teams."
  ]},
  { role:"Data Analytics Intern — ExcelR Solutions", meta:"Oct 2022 — Jan 2023 · Remote", bullets:[
    "Designed Power BI/Tableau dashboards for KPI tracking & trends.",
    "Improved extraction accuracy by 30% via optimized SQL queries.",
    "Reduced reporting time by 25% through statistical & visual analyses.",
    "Built interactive reports to communicate insights to stakeholders.",
    "Collaborated in Agile sprints; presented findings to cross-functional teams."
  ]}
];

export const skillsList = [
  { cat:"Languages", items:["Python","SQL","Java (basic)","JavaScript (basic)"] },
  { cat:"Core Python Stack", items:["Pandas","NumPy","Matplotlib","Seaborn","Jupyter","Google Colab"] },
  { cat:"ML / DL", items:["TensorFlow","PyTorch","Scikit-learn","Hugging Face Transformers","CNN","U-Net","NLP","Computer Vision","Model Evaluation"] },
  { cat:"Data Engineering", items:["ETL Pipelines","Apache Airflow","dbt","Apache Spark","Hadoop","Data Warehousing","Streaming","Data Modeling","MLflow"] },
  { cat:"Cloud", items:["AWS (EC2, S3, RDS, Redshift, EMR, Lambda, SageMaker, IAM)","Snowflake"] },
  { cat:"DevOps", items:["Docker","Kubernetes","Terraform","Git","GitHub","GitLab","CI/CD"] },
  { cat:"BI & Analytics", items:["Power BI (DAX, Power Query, KPI Dashboards)","Tableau","Advanced Excel"] },
  { cat:"Databases", items:["MySQL","PostgreSQL","MongoDB","PL/SQL"] },
  { cat:"Other", items:["OpenCV","Power Query","ROI Analysis","Version Control"] }
];

export const university = {
  title: "Master’s in Data Science",
  place: "University of New Haven, CT, USA · Aug 2023 — May 2025",
  bullets: [
    "Coursework: Advanced Machine Learning, Deep Learning, Natural Language Processing, Cloud-Based MLOps, Big Data Analytics.",
    "Labs & Tools: Spark-based ETL on AWS EMR; automated model retraining with SageMaker Pipelines.",
    "Key Projects: Multimodal Fake News Detection (85% accuracy); Pedestrian & Cyclist Segmentation (U-Net)."
  ]
};

export const botAnswers = {
  skills: `Main technical skills:
- Python, SQL, TensorFlow, PyTorch, Scikit-learn
- AWS (EC2, S3, RDS, Redshift, EMR, Lambda, SageMaker), Spark, Airflow, dbt
- Power BI, Tableau, DAX, KPI dashboards
- Docker, Kubernetes, MLflow, ETL & Data Warehousing`,
  impact: `Most impactful project:
- Multimodal Fake News Detection: 85% accuracy using TensorFlow & Hugging Face.
- Automated preprocessing and retraining with Airflow; deployed on Hugging Face Spaces.`,
  cloud: `Cloud platforms & tools: Primarily AWS (EC2, S3, RDS, Redshift, EMR, Lambda, IAM, SageMaker). Experience with Snowflake and warehousing. Orchestration with Airflow & dbt.`,
  ml: `ML experience: NLP, Computer Vision (U-Net, CNN), Predictive Analytics, clustering (K-Means), model deployment (Hugging Face Spaces), MLOps with Airflow & MLflow.`,
  contact: `Reach me at:
- Email: khajamujahiddin@gmail.com
- LinkedIn: linkedin.com/in/khaja-mujahiddin-mohammed-baaa171b8
- GitHub: github.com/khajamujahid`
};
