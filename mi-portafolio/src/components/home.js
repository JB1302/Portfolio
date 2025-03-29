import React from "react";
import Contact from "./contact";
import Projects from "./projects";

import "../styles/home.css";

function Home() {
  return (
    <div className="landing">
      <div className="contenedorHome">
        <div className="contenedorIzquierdo">

        <p className="nombre">Jonathan Barrantes</p>
        <h1>Backend & Data Engineer</h1>
          <p className="homeIntro">Passionate about backend development and data engineering, I specialize in building efficient, scalable, and high-performance systems. My expertise lies in designing robust architectures, optimizing databases, and automating processes to enhance efficiency and reliability.

          <br></br>
          <br></br>

          I enjoy tackling complex problems, writing clean and maintainable code, and continuously learning new technologies to improve my craft. With a strong foundation in software development and data-driven solutions, I strive to create impactful and innovative applications that drive real-world results.</p>

          <button>Contactar</button>

        </div>
        <div className="contenedorDerecho">
          <img src="./imagenes/home.png" alt="Home" />
        </div>

      </div>

       <h1>Contact</h1>
       <Contact />


       <h1>My Projects</h1>
       <Projects />


    </div>
  );
}

export default Home;