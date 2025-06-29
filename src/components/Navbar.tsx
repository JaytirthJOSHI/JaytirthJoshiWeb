import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaGithub } from 'react-icons/fa';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            Jaytirth Joshi
          </Link>
        </div>
        
        <div className="navbar-links">
          <Link 
            to="/book" 
            className="nav-link"
            title="Book a Call"
          >
            <FaPhone /> Book a Call
          </Link>
          <Link 
            to="/api-data" 
            className="nav-link"
            title="View GitHub Activity"
          >
            <FaGithub /> View My GitHub Activity
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;