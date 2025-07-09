import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-logo">
                    ANJOSH J A
                </a>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link" onClick={toggleMenu}>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;