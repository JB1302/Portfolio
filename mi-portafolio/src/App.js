import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Boilerplate from "./components/boilerplate";
import Home from "./components/home";
import Contact from "./components/contact";
import Projects from "./components/projects";

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/Portfolio/' : '';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Boilerplate />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
