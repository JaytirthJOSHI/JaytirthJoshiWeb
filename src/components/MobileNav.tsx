import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUser, FaEnvelope, FaPhone, FaMap } from 'react-icons/fa';
import './MobileNav.css';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile nav when route changes
    setIsOpen(false);
  }, [location]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/portfolio', label: 'Portfolio', icon: FaUser },
    { path: '/contact', label: 'Contact', icon: FaEnvelope },
    { path: '/book', label: 'Book Call', icon: FaPhone },
    { path: '/travel-map', label: 'Travel', icon: FaMap },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={`mobile-nav-toggle ${isScrolled ? 'scrolled' : ''}`}
        onClick={toggleNav}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
        <nav className={`mobile-nav ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="mobile-nav-header">
            <h3>Jaytirth Joshi</h3>
            <p>CEO & Founder of HealthSathi</p>
          </div>

          <ul className="mobile-nav-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={toggleNav}
                  >
                    <Icon className="nav-icon" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mobile-nav-footer">
            <div className="social-links">
              <a
                href="https://linkedin.com/in/jaytirthjoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaUser />
              </a>
              <a
                href="https://health-sathi.org"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="HealthSathi"
              >
                <FaHome />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileNav; 