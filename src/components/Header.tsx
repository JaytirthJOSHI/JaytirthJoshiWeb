import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><RouterNavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</RouterNavLink></li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500} spy={true} offset={-80} activeClass="active">
              About
            </ScrollLink>
          </li>
          <li><RouterNavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</RouterNavLink></li>
          <li><RouterNavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</RouterNavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;