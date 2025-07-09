import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaInstagram, FaMedium } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section">
      <h2 className="section-title"><span>04.</span> Get In Touch</h2>
      <div className="contact-container">
        <p className="contact-message">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing story. Feel free to reach out.
        </p>
        <a href="mailto:anjosh753@gmail.com" className="email-button">Say Hello</a>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/anjosh007" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/DHURANTHAM007" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://medium.com/@anjosh753" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
          <a href="https://www.instagram.com/anjosh_007" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;