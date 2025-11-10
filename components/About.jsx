'use client';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <h2 id="about-title">About</h2>
      <p>
        Recent Master’s in Data Science graduate (University of New Haven, May 2025, GPA 3.29) with hands-on experience building real-time AWS data pipelines (Kinesis → Glue → Lambda → S3), interactive Power BI dashboards with DAX, and Python automation (pandas, SQLAlchemy) during a 4-month Data Scientist internship at Innover Global (Aug 2025 – Present) and a 2.5-year part-time Jr. Data Analyst role at SRIK Consulting Services. Delivered 8–10 production Power BI dashboards used by 50+ stakeholders across finance and HR teams, automated monthly reporting workflows that saved ~8 hours per analyst per week, and developed a multimodal fake-news detection pipeline (Airflow + Hugging Face Transformers) as my capstone project, achieving 85% accuracy and deployed live on Hugging Face Spaces. Proficient in SQL, Python, Power BI (DAX, Power Query, RLS), PySpark, Flask APIs, and AWS cloud services. Additional academic projects include AdventureWorks sales analytics, Titanic survival prediction, and Microsoft Fabric real-time intelligence with KQL and Eventstream. Actively seeking Junior Data Analyst, BI Analyst, or entry-level Data Engineer roles in USA. Available immediately. Let’s connect!
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h3>Core Strengths</h3>
          <ul>
            <li>End-to-end ML & MLOps (AWS SageMaker, Airflow, MLflow)</li>
            <li>ETL/Data Engineering with Spark, Kafka & AWS Glue</li>
            <li>Interactive BI & Dashboards (Power BI, Tableau, R Shiny)</li>
            <li>Agile delivery & cross-functional stakeholder alignment</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Domains</h3>
          <ul>
            <li>Natural Language Processing (Sentiment, Summarization)</li>
            <li>Computer Vision (Segmentation, Detection)</li>
            <li>Forecasting & Predictive Analytics (ARIMA, Prophet, LSTM)</li>
            <li>Real-time Streaming Data Pipelines (Kinesis, Kafka)</li>
          </ul>
        </div>
        <div className="about-card code">
          <h3>Live Snippet</h3>
          <pre><code>{`# Example Airflow DAG: simple daily retraining job
from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime

def retrain():
    # load data, retrain model, log metrics
    print("Retraining pipeline executed")

with DAG("daily_retrain",
         start_date=datetime(2025,1,1),
         schedule="@daily",
         catchup=False) as dag:
    PythonOperator(
        task_id="retrain_model",
        python_callable=retrain
    )`}</code></pre>
        </div>
      </div>
    </section>
  );
}
