import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header" role="banner">
      <nav role="navigation" aria-label="Main navigation">
        <ul role="menubar">
          <li role="none">
            <RouterNavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active" : ""}
              role="menuitem"
              aria-label="Go to home page"
            >
              Home
            </RouterNavLink>
          </li>
          <li role="none">
            <ScrollLink 
              to="about" 
              smooth={true} 
              duration={500} 
              spy={true} 
              offset={-80} 
              activeClass="active"
              role="menuitem"
              aria-label="Scroll to about section"
            >
              About
            </ScrollLink>
          </li>
          <li role="none">
            <RouterNavLink 
              to="/portfolio" 
              className={({ isActive }) => isActive ? "active" : ""}
              role="menuitem"
              aria-label="Go to portfolio page"
            >
              Portfolio
            </RouterNavLink>
          </li>
          <li role="none">
            <RouterNavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "active" : ""}
              role="menuitem"
              aria-label="Go to contact page"
            >
              Contact
            </RouterNavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;