import { Counter } from "./Counter.js";

// 
export default function Page() {
  return (
    // <div style={{ maxWidth: 980, margin: "0 auto", padding: "40px 20px", fontFamily: "system-ui" }}>
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "56px 20px" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center",marginBottom: 40, }}>
        <div style={{ fontWeight: 800 }}>Naga Mutya Kumar Kumtsam</div>
        <div style={{ display: "flex", gap: 20, fontWeight: 500 }}>
          <a href="#academic-project">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Tech Stack</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header style={{marginTop :70,marginBottom:90,padding:"56px 48px",borderRadius:24,background:"linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        border:"1px solid rgba(255,255,255,0.12)",maxWidth:980,}}>
        <div style={{ fontSize: 13, opacity: 0.75, marginBottom: 14 }}>
          Backend + Data Engineering
        </div>
        <h1 style={{ fontSize: 52, lineHeight: 1.08, margin: 0 }}>
          Backend & Data Engineer
        </h1>
        <p style={{fontSize: 18,lineHeight: 1.65,opacity: 0.9,maxWidth: 720,marginTop: 18,}}>
          Backend & Data Engineer with 6+ years of experience building reliable ETL pipelines,
          analytics-ready datasets, and backend services for enterprise systems, with strong
          expertise in Python and SQL and hands-on experience across Azure Databricks/Spark,
          orchestration, and production support in cloud environments.
          </p>


        <p style={{ opacity: 0.7, marginTop: 18, marginBottom: 0 }}>
          Python • SQL • Azure Databricks • Spark • Azure Data Factory • Airflow • Java • .NET • PostgreSQL • AWS
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 26 }}>
          <a href="#experience">
          <button>Experience</button>
          </a>
          <a href="https://www.linkedin.com/in/nagamutyakumarkumtsam/" target="_blank" rel="noreferrer">
          <button>LinkedIn</button>
          </a>
          <a href="https://github.com/Subhash532" target="_blank" rel="noreferrer">
          <button>GitHub</button>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
          <button>Resume</button>
          </a>
        </div>
        </header>

      <section id="experience" style={{ marginTop: 50 }}>
        <h2>Experience</h2>
        <p style={{ lineHeight: 1.7 }}>
          <b>Data Engineer</b> — Designed and supported cloud-based data pipelines using Azure Databricks,
    Spark, Python, and SQL. Built analytics-ready datasets, implemented data quality checks, and
    handled production monitoring and troubleshooting.
          <br />
          <b>Software Engineer</b> — Developed backend services and REST APIs using Java and .NET, optimized
    SQL performance, and supported CI/CD and monitoring workflows in cloud environments.
        </p>
      </section>

      <section id="academic-project" style={{ marginTop: 70 }}>
  <h2>Academic Project</h2>

  <div
    style={{
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(255,255,255,0.04)",
      borderRadius: 16,
      padding: 18,
      marginTop: 16,
    }}
  >
    <div style={{ fontWeight: 800, fontSize: 16 }}>
      Predicting Customer Bookings
    </div>

    <p style={{ opacity: 0.9, lineHeight: 1.6, marginTop: 10 }}>
      Built a data-driven machine learning pipeline using the Hotel Booking Demand dataset to predict customer
      booking outcomes. Implemented data preprocessing, feature engineering, model training, and evaluation
      using Python.
    </p>

    <p style={{ opacity: 0.85, marginTop: 10 }}>
      <b>Outcome:</b> Achieved ~90% accuracy on evaluation metrics and developed a reusable data preprocessing
      pipeline for structured datasets.
    </p>

    <div style={{ opacity: 0.75, fontSize: 13, marginTop: 12 }}>
      Python • Pandas • Scikit-learn • Feature Engineering • Data Preprocessing
    </div>
  </div>
</section>

      <section id="stack" style={{ marginTop: 70 }}>
        <h2>Tech Stack</h2>
        <ul style={{ lineHeight: 1.9 }}>
              <li><b>Languages:</b> Python, SQL, Java, C#</li>
              <li><b>Data Engineering:</b> Azure Databricks, Spark, Azure Data Factory, SSIS, Talend, Airflow</li>
              <li><b>Backend:</b> Spring Boot, .NET Core, REST APIs, Microservices</li>
              <li><b>Databases:</b> PostgreSQL, SQL Server, Oracle, MySQL</li>
              <li><b>Cloud & DevOps:</b> Azure, AWS, Docker, CI/CD, Monitoring</li>
        </ul>
      </section>

      <section id="contact" style={{ marginTop: 50, marginBottom: 70 }}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:nkumtsam@gmail.com">nkumtsam@gmail.com</a></p>
        <p>
          LinkedIn:{" "}
          <a href= "https://www.linkedin.com/in/nagamutyakumarkumtsam/" target="_blank" rel="noreferrer">
            linkedin.com/in/nagamutyakumarkumtsam
          </a>
        </p>
      </section>
    </div>
  );
}

