import React from "react";
import "../styles/contactStyles.css";

const Contact = () => {
  const phoneNumber = "3001055840";
  const email = "restrepoedwin172819@gmail.com";

  return (
    <div className="contact-container">
      {/* Fondo animado */}
      <div className="contact-background"></div>

      {/* Contenido principal */}
      <div className="contact-content">
        <h1 className="contact-title">CONTACTO</h1>
        <p className="contact-description">
          Si deseas contactarme, aquí tienes mis datos. Siempre estoy dispuesto a escuchar nuevas oportunidades y colaborar en proyectos interesantes. Además, he adquirido experiencia en el desarrollo de aplicaciones web utilizando tecnologías modernas como React, PHP y MySQL.
        </p>

        <div className="contact-info">
          {/* Sección de correo */}
          <div className="contact-item">
            <a href={`mailto:${email}`} className="contact-link">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Gmail Icon"
                className="contact-icon"
              />
              <span>{email}</span>
            </a>
          </div>

          {/* Sección de teléfono */}
          <div className="contact-item">
            <a
              href={`https://wa.me/57${phoneNumber}?text=Hola%2C%20me%20gustaría%20contactarme%20contigo.`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                alt="Phone Icon"
                className="contact-icon"
              />
              <span>{phoneNumber}</span>
            </a>
          </div>

          {/* Ícono de WhatsApp adicional */}
          <div className="contact-item">
            <a
              href={`https://wa.me/57${phoneNumber}?text=Hola%2C%20me%20gustaría%20contactarme%20contigo.`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
                alt="WhatsApp Icon"
                className="contact-icon"
              />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
