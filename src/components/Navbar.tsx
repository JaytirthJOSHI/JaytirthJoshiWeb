import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { theme, setTheme, isDark } = useTheme();

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme(isDark ? 'light' : 'dark');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            Jaytirth Joshi
          </Link>
        </div>
        
        <div className="navbar-links">
          <button 
            onClick={toggleTheme}
            className="nav-link theme-toggle"
            title={theme === 'system' ? `System Mode (${isDark ? 'Dark' : 'Light'})` : (isDark ? "Switch to Light Mode" : "Switch to Dark Mode")}
            aria-label={theme === 'system' ? `System Mode (${isDark ? 'Dark' : 'Light'})` : (isDark ? "Switch to Light Mode" : "Switch to Dark Mode")}
          >
            {isDark ? <FaSun /> : <FaMoon />}
            {theme === 'system' ? ` System (${isDark ? 'Dark' : 'Light'})` : (isDark ? ' Light Mode' : ' Dark Mode')}
          </button>
          <Link 
            to="/cookies" 
            className="nav-link"
            title="Cookie Awareness"
          >
            🍪 Cookies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;