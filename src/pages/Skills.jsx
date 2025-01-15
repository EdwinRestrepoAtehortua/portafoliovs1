import React from 'react';
import "../styles/Skills.css";

const Skills = () => {
  const technicalSkills = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'Git/GitHub',
    'Bootstrap',
    'REST APIs',
  ];

  const softwareSkills = [
    'Visual Studio Code',
    'Android Studio',
    'Excel',
    'Word',
    'PowerPoint',
    'Canva',
    'Trello',
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">Habilidades</h2>
      <div className="skills-section">
        <h3 className="skills-subtitle">Habilidades Técnicas</h3>
        <ul className="skills-list">
          {technicalSkills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
      <div className="skills-section">
        <h3 className="skills-subtitle">Herramientas de Software</h3>
        <ul className="skills-list">
          {softwareSkills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
