import React from "react";
import phpImage from "../assets/images/desarrollo_aplicaciones_php.jpg";
import mysqlImage from "../assets/images/mysql.jpg";
import javascriptImage from "../assets/images/javascript.jpg";
import pythonImage from "../assets/images/python.jpg";
import profileImage from "../assets/images/mi_foto.jpg"; // Asegúrate de tener esta imagen en tu proyecto
import excelImage from "../assets/images/excel.jpg";
import "../styles/aboutStyles.css";

const About = () => {
  const courses = [
    {
      title: "Desarrollo de Aplicaciones Web con PHP",
      startDate: "01 Septiembre, 2023",
      endDate: "06 Octubre, 2023",
      hours: "80 horas",
      image: phpImage,
    },
    {
      title: "Construcción de Bases de Datos con MySQL",
      startDate: "04 Diciembre, 2023",
      endDate: "28 Diciembre, 2023",
      hours: "48 horas",
      image: mysqlImage,
    },
    {
      title: "Desarrollo de aplicaciones web en tiempo real con JavaScript y Node.js",
      startDate: "01 septiembre, 2024",
      endDate: "03 octubre, 2024",
      hours: "48 horas",
      image: javascriptImage,
    },
    {
      title: "Variables y estructuras de control en Python",
      startDate: "03 noviembre, 2024",
      endDate: "03 diciembre, 2024",
      hours: "48 horas",
      image: pythonImage,
    },
    {
      title: "Manejo de herramientas microsoft office 2016:Excel",
      startDate: "20 agosto, 2023",
      endDate: "19 septiembre, 2023",
      hours: "40 horas",
      image: excelImage,
    },
  ];

  const handleClick = (imagePath) => {
    if (imagePath) {
      window.open(imagePath, "_blank");
    } else {
      alert("La imagen no está disponible.");
    }
  };

  return (
    <div className="about-container">
      {/* Fondo animado */}
      <div className="about-background"></div>

      {/* Contenido principal */}
      <div className="about-content">
        <h1 className="about-title">Acerca de mí</h1>

        {/* Sección de perfil */}
        <div className="profile-section">
          <img src={profileImage} alt="Edwin de Jesús Restrepo Atehortúa" className="profile-image" />
          <div className="profile-details">
  <h2>Edwin de Jesús Restrepo Atehortúa</h2>
  <p>
    Soy tecnólogo en Análisis y Desarrollo de Software, egresado del SENA, con un fuerte interés en el desarrollo web y las tecnologías emergentes. Mi pasión por aprender y resolver problemas de manera creativa me impulsa a enfrentar nuevos desafíos y colaborar en proyectos que generen un impacto positivo.
  </p>
  <p>
    Durante mi formación, adquirí habilidades en el desarrollo de aplicaciones web con React, manejo de bases de datos MySQL, programación en PHP y fundamentos de Python. Además, tengo un interés por explorar nuevas herramientas y tecnologías para ampliar mis capacidades y ofrecer soluciones innovadoras.
  </p>
  <p>
    El diseño y el dibujo son otras áreas que me apasionan, y esto me ha permitido desarrollar una visión estética que aplico en cada proyecto, siempre buscando un equilibrio entre funcionalidad y diseño.
  </p>
  <p>
    <strong>Lo que quiero aprender:</strong> Desarrollo móvil, inteligencia artificial, y arquitecturas avanzadas de software.
  </p>
  <p>
    A continuación, encontrarás la descripción de algunos de los cursos que he realizado como parte de mi proceso educativo, los cuales complementan mi perfil profesional y mi búsqueda de nuevas oportunidades en el campo.
  </p>
</div>

        </div>

        {/* Sección de cursos relevantes */}
        <h3 className="about-title">Cursos Relevantes</h3>
        <ul className="courses-list">
          {courses.map((course, index) => (
            course.title && (
              <li
                key={index}
                className="course-item"
                onClick={() => handleClick(course.image)}
              >
                <h4 className="course-title">{course.title}</h4>
                <p className="course-details">
                  <strong>Fecha:</strong>{" "}
                  {course.startDate || "No disponible"} -{" "}
                  {course.endDate || "No disponible"}
                </p>
                <p className="course-details">
                  <strong>Duración:</strong> {course.hours || "No disponible"}
                </p>
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
