import React from "react";
import "../styles/contact.css";
function Contact() {
  return( 
    <div className="contact">
        <div className="contact__media">
            <img src="./imagenes/contact-img.png" alt="Contact" />
        </div>
        <div className="contact__content">
            <h3>Reach Out</h3>
            <p>I'd love to connect with you! Whether you're interested in a collaboration, have a question about my work, or simply want to chat about technology, feel free to reach out.</p>

            <h3>How to Reach Me</h3>
            <p>For inquiries, project collaborations, or just to say hello: 

              <a href="mailto:Jstevenbarrantes@gmail.com" className="linked-link">  Jstevenbarrantes@gmail.com</a>

            <br></br>
            <br></br>

            Explore my projects and repositories at 
            <a href="https://github.com/JB1302" target="_blank" rel="noreferrer" className="linked-link">  JB1302</a>
            </p>

            <h3>Other Platforms!</h3>
            <p>Feel free to reach me on LinkedIn At:
            <br></br>
            <a href="https://www.linkedin.com/in/jonathanbj/" target="_blank" rel="noreferrer" className="linked-link">  https://www.linkedin.com/in/jonathanbj/</a>
            </p>
        </div>
    </div>
  );
}

export default Contact;
