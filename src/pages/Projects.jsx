import React from "react";
import "../styles/projectsStyles.css";

const Projects = () => {
  const projects = [
    {
      title: "Tienda Online",
      description: `
        Este proyecto consistió en desarrollar una tienda online completa, 
        implementando tanto el frontend como el backend. 
        Se utilizó React con Vite para el desarrollo del frontend, 
        mientras que el backend fue construido utilizando PHP puro 
        con una base de datos en MySQL. Entre las funcionalidades destacadas se incluyen:
        - Gestión de usuarios (registro, inicio de sesión y perfiles).
        - Catálogo de productos dinámico.
        - Carrito de compras con funcionalidad de pagos.
        - Panel de administración para gestionar productos y usuarios.
      `,
      technologies: ["React", "Vite", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Portafolio Personal",
      description: `
        Este proyecto es un portafolio personal diseñado para mostrar mis habilidades, 
        proyectos, y experiencia como desarrollador. 
        Incluye diferentes secciones como 'Acerca de', 'Habilidades', 'Proyectos', 'Contacto', 
        e información adicional. Fue desarrollado utilizando React con Vite para una experiencia 
        rápida y optimizada. El diseño es completamente responsive para adaptarse a cualquier dispositivo.
      `,
      technologies: ["React", "Vite", "JavaScript"],
    },
  ];

  return (
    <div className="projects-container">
      {/* Fondo animado */}
      <div className="projects-background"></div>

      {/* Contenido principal */}
      <div className="projects-content">
        <h1 className="projects-title">Mis Proyectos</h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <h3 className="tech-title">Tecnologías Utilizadas:</h3>
              <ul className="tech-list">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="tech-item">{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
