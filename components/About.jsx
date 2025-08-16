'use client';
export default function About(){
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <h2 id="about-title">About</h2>
      <p>
        Accomplished Data Scientist & Cloud Engineer with 3+ years of experience designing and deploying
        end-to-end data workflows, machine learning models, and cloud-based analytics solutions. Specialized in
        NLP, Computer Vision, MLOps, and real-time data engineering pipelines using AWS, Python, and Spark.
        Proven track record: automated 80% of manual tasks, improved forecast accuracy by 15%, and reduced
        decision-making time by 30%.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h3>Core Strengths</h3>
          <ul>
            <li>End-to-end ML & MLOps on AWS</li>
            <li>ETL/Data Engineering with Airflow & Spark</li>
            <li>Interactive BI: Power BI & Tableau</li>
            <li>Agile collaboration & stakeholder alignment</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Domains</h3>
          <ul>
            <li>Natural Language Processing (NLP)</li>
            <li>Computer Vision (Segmentation, Detection)</li>
            <li>Forecasting & Predictive Analytics</li>
            <li>Real-time Data Pipelines</li>
          </ul>
        </div>
        <div className="about-card code">
          <h3>Live Snippet</h3>
          <pre><code>{`# Airflow DAG: simple daily retraining job
from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime
def retrain():
    # load data, retrain model, log metrics
    pass
with DAG("daily_retrain", start_date=datetime(2025,1,1), schedule="@daily", catchup=False) as dag:
    PythonOperator(task_id="retrain_model", python_callable=retrain)`}</code></pre>
        </div>
      </div>
    </section>
  );
}
