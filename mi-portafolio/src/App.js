import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Boilerplate from "./components/boilerplate";
import Home from "./components/home";
import Contact from "./components/contact";
import Projects from "./components/projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Boilerplate />}>
          <Route index element={<Home />} /> {/* Cambiado a <Home /> */}
          <Route path="contact" element={<Contact />} /> {/* Cambiado a <Contact /> */}
          <Route path="projects" element={<Projects />} /> {/* Cambiado a <Projects /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;