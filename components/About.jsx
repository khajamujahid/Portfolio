'use client';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <h2 id="about-title">About</h2>
      <p>
        As a senior-level data engineer and analyst with more than 5 years of experience, currently serving as a Data Engineer at Optum, I design scalable analytics platforms and machine-learning pipelines across healthcare, telecom, and retail. I have delivered end-to-end cloud data solutions on Azure and AWS, including a Medallion lakehouse architecture and automated feature-engineering pipelines that cut data-prep latency by 30%. By building production-grade NLP and predictive models and creating interactive BI dashboards, I translate complex data into actionable insights. Aiming to apply this expertise to accelerate data-driven decision-making and improve outcomes for a forward-thinking organization.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h3>Core Strengths</h3>
          <ul>
            <li>Cloud Data Architecture (AWS, Azure Data Lake, Databricks)</li>
            <li>Medallion Lakehouse & ETL/ELT Pipelines (PySpark, dbt, Airflow)</li>
            <li>Machine Learning & NLP (Whisper, Transformer Models, Deep Learning)</li>
            <li>Interactive BI & Dashboards (Power BI, Tableau)</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Domains</h3>
          <ul>
            <li>Healthcare Analytics (Clinical AI, HIPAA/PCI Compliance)</li>
            <li>Telecom Signal Intelligence & Speech Processing</li>
            <li>Enterprise Financial Reporting & Anomaly Detection</li>
            <li>FinOps & Cloud Cost Optimization</li>
          </ul>
        </div>
        <div className="about-card code">
          <h3>Live Snippet</h3>
          <pre><code>{`# Example PySpark Transformation Pipeline
from pyspark.sql import SparkSession
from pyspark.sql.functions import col

def process_bronze_to_silver(df):
    """
    Cleans raw data and writes to Silver zone 
    in Delta Lake format.
    """
    clean_df = df.filter(col("status") == "active") \\
                 .dropDuplicates(["transaction_id"])
                 
    clean_df.write.format("delta") \\
            .mode("append") \\
            .save("/mnt/datalake/silver/transactions")
            
    return "Data processing complete"`}</code></pre>
        </div>
      </div>
    </section>
  );
}
