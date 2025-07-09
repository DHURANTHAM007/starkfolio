import React from 'react';
import './Skills.css';
import { FaPenNib, FaFilm, FaLaptopCode, FaObjectGroup } from 'react-icons/fa';

const skillsData = [
  { name: 'Content Writing', icon: <FaPenNib /> },
  { name: 'Storytelling', icon: <FaFilm /> },
  { name: 'Web Development', icon: <FaLaptopCode /> },
  { name: 'Figma (UI/UX)', icon: <FaObjectGroup /> },
];

const Skills = () => {
  return (
    <section className="section">
      <h2 className="section-title"><span>02.</span> My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;