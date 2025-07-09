import React from 'react';
import './Hero.css';
import profilePic from '../../assets/profile-pic.jpeg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Anjosh J A</h1>
          <p className="hero-subtitle">Content Writer <span className="separator">|</span> Cinephile</p>
          <p className="hero-description">
            Building narratives and crafting copy that clicks. Welcome to my digital workspace.
          </p>
          <a href="#projects" className="hero-cta-button">View My Work</a>
        </div>
        <div className="hero-image-container">
          <div className="arc-reactor">
            <img src={profilePic} alt="Anjosh J A" className="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;