import React from "react";
import { Outlet, Link } from "react-router-dom"; // Importa Link
import "../styles/Boilerplate.css";

function Boilerplate() {
  return (
    <section className="boilerplate">
      <div className="header">
        <div className="headerLeft">
        <img src="%PUBLIC_URL%/imagenes/data-engineer.png" alt="Data Engineer" />

          <div className="tituloPagina">
            <p><strong>Turning Data</strong></p>
            <p><strong>Into Solutions</strong></p>
          </div>
        </div>
        <div className="headerRight">
          <Link to="/" className="btn btn-primary">HOME</Link>
          <Link to="/contact" className="btn btn-primary">CONTACT</Link>
          <Link to="/projects" className="btn btn-primary">PROJECTS</Link>
        </div>
      </div>
      <div className="leftSide"></div>
      <div className="main">
        <Outlet /> {/* Renderiza los componentes hijos aquí */}
      </div>
      <div className="rightside"></div>
      <div className="footer">
        <div className="footerLeft">
          <p><strong>- Email:</strong> Jstevenbarrantes@gmail.com</p>
          <p><strong>- GitHub:</strong> JB1302</p>
          <p><strong>- LinkedIn:</strong> Steven Barrantes</p>
        </div>
        <div className="footerdivider"></div>
        <div className="footerRight">
          <p>Feel free to reach out for collaboration or just to chat about development, data engineering, or tech in general.</p>
        </div>
      </div>
    </section>
  );
}

export default Boilerplate;