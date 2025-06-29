import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaRocket } from 'react-icons/fa';
import './PortfolioPage.css';

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      id: 'healthsathi',
      title: 'HealthSathi',
      description: 'AI-Powered Medical Information Platform',
      longDescription: 'A comprehensive healthcare platform that bridges communication gaps between patients and medical professionals using advanced AI technology.',
      technologies: ['React', 'Node.js', 'AI/ML', 'Healthcare API'],
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/JaytirthJOSHI/healthsathi',
      liveUrl: 'https://healthsathi.com',
      featured: true
    },
    {
      id: 'dr-fatafat',
      title: 'Dr. Fatafat',
      description: 'AI Medical Report Analyzer',
      longDescription: 'An intelligent AI system that analyzes medical reports and provides clear, understandable explanations to patients.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Medical AI'],
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/JaytirthJOSHI/dr-fatafat',
      liveUrl: null,
      featured: true
    },
    {
      id: 'patent-system',
      title: 'Patent Management System',
      description: 'Healthcare Innovation Patent',
      longDescription: 'A comprehensive system for managing healthcare innovation patents and intellectual property.',
      technologies: ['React', 'TypeScript', 'Patent API', 'Legal Tech'],
      image: '/api/placeholder/400/250',
      githubUrl: null,
      liveUrl: null,
      featured: false
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>Portfolio</h1>
        <p>Explore my projects and innovations in healthcare technology and AI</p>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              {project.featured && <span className="featured-badge">Featured</span>}
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.longDescription}</p>
              
              <div className="project-technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <Link to={`/portfolio/${project.id}`} className="project-link primary">
                  <FaRocket /> View Details
                </Link>
                
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                    <FaGithub /> Code
                  </a>
                )}
                
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nested route outlet */}
      <Outlet />
    </div>
  );
};

export default PortfolioPage;