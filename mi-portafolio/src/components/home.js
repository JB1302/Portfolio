import React from "react";
import Contact from "./contact";
import Projects from "./projects";

import "../styles/home.css";

function Home() {
  return (
    <div className="landing">
      <section className="home-hero">
        <div className="home-hero__content">
          <p className="home-hero__name">Jonathan Barrantes</p>
          <h1 className="home-hero__title">Backend & Data Engineer</h1>
          <p className="home-hero__intro">
            Passionate about backend development and data engineering, I specialize in building efficient, scalable, and
            high-performance systems. My expertise lies in designing robust architectures, optimizing databases, and
            automating processes to enhance efficiency and reliability.
            <br />
            <br />
            I enjoy tackling complex problems, writing clean and maintainable code, and continuously learning new
            technologies to improve my craft. With a strong foundation in software development and data-driven
            solutions, I strive to create impactful and innovative applications that drive real-world results.
          </p>
          <button className="home-hero__cta">Contactar</button>
        </div>
        <div className="home-hero__media">
          <img src="./imagenes/home.png" alt="Developer at work" />
        </div>
      </section>

      <section className="home-section">
        <h2 className="home-section__title">Contact</h2>
        <Contact />
      </section>

      <section className="home-section">
        <h2 className="home-section__title">My Projects</h2>
        <Projects />
      </section>
    </div>
  );
}

export default Home;
