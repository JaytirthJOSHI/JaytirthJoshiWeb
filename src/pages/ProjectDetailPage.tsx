import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <div>
      <h3>Project Details</h3>
      <p>Details for project: {projectId}</p>
    </div>
  );
};

export default ProjectDetailPage; 