import React from 'react';
import './Projects.css';
import projectImage1 from '../../assets/project-placeholder-1.svg';
import projectImage2 from '../../assets/project-placeholder-2.svg';

const projectsData = [
  {
    title: 'Your Project Title 1',
    description: 'A brief, compelling description of your project. What problem does it solve? What technologies were used?',
    image: projectImage1,
    liveLink: '#', // Replace with your live project link
    codeLink: 'https://github.com/DHURANTHAM007', // Replace with your repo link
  },
  {
    title: 'Your Project Title 2',
    description: 'Describe another one of your awesome projects here. Focus on the impact and your role in it.',
    image: projectImage2,
    liveLink: '#',
    codeLink: 'https://github.com/DHURANTHAM007',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="section projects-section">
      <h2 className="section-title"><span>03.</span> My Work</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;