import React from "react";
import "../styles/projects.css"; // Asegúrate de que la ruta sea correcta

function Projects() {
    return( 
        <div className="landing">
          <div className="contenedorHome">
            <div className="contenedorIzquierdoProjects">
    
              <h1>VMS: Vehicle Repair</h1>
              <p>Technologies: Java, MySQL, Swing, Concurrent Programming, OOP 
              <br></br>
              <br></br>

              A client-server system designed to automate processes in auto repair shops, featuring secure user management, real-time notifications, automated billing, and repair tracking.
              <br></br>
              <br></br>

              <ul>
                <li>Scalable architecture with abstract class inheritance and socket-based communication.</li>
                <li>Optimized MySQL transactions with ACID compliance and SQL injection prevention.</li>
                <li>Intuitive Swing GUI for daily operations.</li>
              </ul>
              </p>

              <h1>ETL System for HR BI</h1>

              <p>
              Technologies: Python, Pandas, MySQL, SQLAlchemy, PowerBI 

              An ETL pipeline for HR analytics, including data extraction from Excel to JSON, data transformation, and secure loading into MySQL with real-time PowerBI dashboards.

              <ul>
                <li>Automated file naming and data cleaning for accurate analytics.</li>
                <li>Atomic transactions and modular design for scaling to new data sources.</li>
                <li>Direct integration with PowerBI for real-time insights.</li>
              </ul>
              </p>

    
            </div>
            <div className="contenedorDerechoProjects">
              <img src="/imagenes/projects.png" alt="Home" />
            </div>
    
          </div>
        </div>
    );
}
export default Projects;