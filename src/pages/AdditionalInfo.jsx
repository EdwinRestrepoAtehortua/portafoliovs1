import React from "react";
import phpImage from "../assets/images/desarrollo_aplicaciones_php.jpg";
import mysqlImage from "../assets/images/mysql.jpg";
import javascriptImage from "../assets/images/javascript.jpg";
import pythonImage from "../assets/images/python.jpg";
const AdditionalInfo = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Información Adicional</h2>
      <p>Gracias por visitar mi portafolio.</p>
      <img
        src={phpImage}
        alt="Curso de PHP"
        style={{ width: "300px", borderRadius: "8px" }}
      />

     <img
        src={mysqlImage}
        alt="Curso de mysql"
        style={{ width: "300px", borderRadius: "8px" }}
      />

      <img
        src={javascriptImage}
        alt="Curso de mysql"
        style={{ width: "300px", borderRadius: "8px" }}
      />

     <img
        src={pythonImage}
        alt="Curso de python"
        style={{ width: "300px", borderRadius: "8px" }}
      />


    </div>
  );
};

export default AdditionalInfo;
