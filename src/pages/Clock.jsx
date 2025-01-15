// src/components/Clock.js
import React, { useState, useEffect } from "react";
import "../styles/ClockStyles.css";
const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Función para actualizar la hora cada segundo
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // Actualizar cada segundo

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <h3>{time}</h3>
    </div>
  );
};

export default Clock;
