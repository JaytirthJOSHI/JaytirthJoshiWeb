import React from 'react';
import Card from './Card';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <Card>
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;