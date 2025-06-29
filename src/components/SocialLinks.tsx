import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/Images/jaytirth-joshi-professional-headshot.png';
import './SocialLinks.css';

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <div className="profile-photo">
        <img src={profileImage} alt="Jaytirth Joshi" />
      </div>
      <div className="social-icons">
        <a 
          href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=jaytirthjoshi" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          title="Connect on LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/JaytirthJOSHI" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          title="View GitHub Projects"
        >
          <FaGithub />
        </a>
        <a 
          href="mailto:jaytirthjoshi@example.com"
          aria-label="Email Contact"
          title="Send Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks; 