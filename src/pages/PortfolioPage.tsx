import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './PortfolioPage.css';

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      id: 'healthsathi',
      title: 'HealthSathi',
      description: 'AI-Powered Medical Information Platform'
    },
    {
      id: 'dr-fatafat',
      title: 'Dr. Fatafat',
      description: 'AI Medical Report Analyzer'
    },
    {
      id: 'patent-system',
      title: 'Patent Management System',
      description: 'Healthcare Innovation Patent'
    }
  ];

  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      <h2>My Projects</h2>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/portfolio/${project.id}`} className="project-link">
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* Nested route outlet */}
      <Outlet />
    </div>
  );
};

export default PortfolioPage;