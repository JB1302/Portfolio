import React from "react";
import "../styles/Boilerplate.css";

function Boilerplate() {
  console.log('El componente Boilerplate se está ejecutando.'); // Mensaje de depuración
  return (
    <section className="boilerplate">
      <div className="header">1</div>
      <div className="leftSide">2</div>
      <div className="main">3</div>
      <div className="rightside">4</div>

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
