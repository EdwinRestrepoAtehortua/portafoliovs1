// src/components/MathGame.js
import React, { useState } from "react";
import "../styles/mathgame.css";
const MathGame = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [userAnswer, setUserAnswer] = useState("");

  // Generar una nueva pregunta
  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let questionText = `${num1} ${operation} ${num2}`;
    let correctAnswer;

    switch (operation) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      case '/':
        correctAnswer = num1 / num2;
        questionText = `${num1 * num2} / ${num1}`; // Para evitar decimales
        break;
      default:
        correctAnswer = 0;
    }

    setCurrentQuestion({ questionText, correctAnswer });
  };

  const checkAnswer = () => {
    if (parseFloat(userAnswer) === currentQuestion.correctAnswer) {
      setScore(score + 1);
      alert("¡Correcto!");
    } else {
      alert(`Incorrecto. La respuesta correcta era ${currentQuestion.correctAnswer}`);
    }
    setUserAnswer("");
    generateQuestion();
  };

  // Iniciar el juego
  React.useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <div className="math-game">
      <h2>Juego de Matemáticas</h2>
      <div className="question">{currentQuestion.questionText}</div>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Tu respuesta"
      />
      <button onClick={checkAnswer}>Responder</button>
      <div>Puntaje: {score}</div>
    </div>
  );
};

export default MathGame;
