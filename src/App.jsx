import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css"; // Importamos los estilos

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Título del portafolio */}
        <header className="portfolio-header">
          <h1 className="portfolio-title">Mi Portafolio</h1>
        </header>

        {/* Barra de navegación */}
        <nav className="nav-bar">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                Acerca de
              </Link>
            </li>
            <li>
              <Link to="/skills" className="nav-link">
                Habilidades
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link">
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Definición de rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
