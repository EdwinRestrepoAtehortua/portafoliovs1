import React, { useState } from "react";
import "../styles/HomeStyles.css";
import profileImage from "../assets/images/mi_foto.jpg"; // Asegúrate de tener esta imagen en tu proyecto
import MathGame from "./MathGame"; // Importar el componente del juego
import Clock from "./Clock"; // Importar el componente Clock

const Home = () => {
  const [showMathGame, setShowMathGame] = useState(false);

  const toggleMathGame = () => {
    setShowMathGame(!showMathGame);
  };

  return (
    <div className="home-container">
      <div className="home-background"></div>
      <div className="home-content">
        <img
          src={profileImage}
          alt="Edwin de Jesús Restrepo Atehortúa"
          className="profile-image"
        />
        <h1 className="home-title">¡Bienvenido a mi portafolio!</h1>
        <p className="home-description">
          Este es un espacio donde comparto mi progreso, habilidades, y proyectos
          desarrollados durante mi formación académica. Aunque estoy en la etapa
          final de mis estudios, estoy emocionado por la oportunidad de aplicar
          mis conocimientos en entornos reales, contribuyendo al desarrollo de
          soluciones innovadoras mientras sigo aprendiendo y creciendo como
          profesional en el ámbito del desarrollo de software.
        </p>

        {/* Texto que invita a jugar 
        <p className="home-invite">
          Si estás aburrido, en mi portafolio puedes divertirte con un juego sencillo
          de matemáticas.
        </p>*/}

        {/* Botón para activar el juego */}
        {/*<button className="home-button" onClick={toggleMathGame}>
          {showMathGame ? "Dejar de jugar" : "Jugar Matemáticas"}
        </button>*/}

        {/* Mostrar el juego si el estado es verdadero */}
        {showMathGame && <MathGame />}
      </div>

      {/* Aquí se integra el reloj */}
      {/*<Clock />*/}
    </div>
  );
};

export default Home;
