'use client';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <h2 id="about-title">About</h2>
      <p>
        Data Engineer & Data Scientist with 4+ years of experience building scalable cloud-based analytics
        platforms, machine learning pipelines, and interactive BI dashboards. Skilled in NLP, Computer Vision,
        GenAI (LLMs, RAG), and real-time data engineering using AWS, Python, and Spark. 
        Proven impact: reduced cloud costs by 15%, improved forecasting accuracy with LSTMs, and automated
        reporting cycles by 40% across business domains.
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
