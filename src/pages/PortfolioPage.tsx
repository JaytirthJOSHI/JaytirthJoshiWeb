import React from 'react';
import './PortfolioPage.css';

const PortfolioPage: React.FC = () => {
  return (
    <div className="portfolio-container">
      <h1>HealthSathi</h1>
      <h2>AI-Powered Medical Information</h2>
      <p>
        HealthSathi is an innovative platform designed to bridge the communication gap in healthcare. Our key solution, Dr. Fatafat, uses AI to analyze and simplify complex medical reports, making them easy for anyone to understand.
      </p>
      <div className="cta-buttons">
        <a href="https://www.healthsathi.org" target="_blank" rel="noopener noreferrer" className="cta-button">
          Visit HealthSathi Website
        </a>
      </div>
    </div>
  );
};

export default PortfolioPage;