import React from "react";
import "../styles/Boilerplate.css";

function Boilerplate() {
  console.log('El componente Boilerplate se está ejecutando.'); // Mensaje de depuración
  return (
    <section className="boilerplate">
      <p>El componente Boilerplate se está renderizando.</p>
      <div className="header">1</div>
      <div className="leftSide">2</div>
      <div className="main">3</div>
      <div className="rightside">4</div>
      <div className="footer">5</div>
    </section>
  );
}

export default Boilerplate;
