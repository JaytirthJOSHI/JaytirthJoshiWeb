import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const projectDetails = {
    healthsathi: {
      title: 'HealthSathi',
      description: 'AI-Powered Medical Information Platform',
      details: 'HealthSathi is an innovative platform designed to bridge the communication gap in healthcare. Our key solution, Dr. Fatafat, uses AI to analyze and simplify complex medical reports, making them easy for anyone to understand.',
      technologies: ['React', 'Node.js', 'AI/ML', 'Healthcare APIs'],
      link: 'https://www.healthsathi.org'
    },
    'dr-fatafat': {
      title: 'Dr. Fatafat',
      description: 'AI Medical Report Analyzer',
      details: 'Dr. Fatafat is our flagship AI solution that analyzes complex medical reports and provides clear, understandable explanations. It helps patients understand their medical data without needing medical expertise.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Healthcare Data'],
      link: 'https://www.healthsathi.org/dr-fatafat'
    },
    'patent-system': {
      title: 'Patent Management System',
      description: 'Healthcare Innovation Patent',
      details: 'A comprehensive patent management system for healthcare innovations. This system helps track, manage, and protect intellectual property in the healthcare technology space.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Patent APIs'],
      link: '/patent-access'
    }
  };

  const project = projectDetails[projectId as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="project-detail">
        <h3>Project Not Found</h3>
        <p>The requested project could not be found.</p>
        <Link to="/portfolio">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <h3>{project.description}</h3>
      <p>{project.details}</p>
      
      <div className="project-technologies">
        <h4>Technologies Used:</h4>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="project-actions">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
        <Link to="/portfolio" className="back-link">
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailPage; 