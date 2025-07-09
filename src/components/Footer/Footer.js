import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <p>Designed & Built by Anjosh J A with React.js</p>
        <p>© {new Date().getFullYear()} @Dhurantham007</p>
    </footer>
  );
};

export default Footer;