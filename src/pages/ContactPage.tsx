import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  return (
    <Fade triggerOnce>
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. My inbox is always open, whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="contact-buttons">
          <a href="mailto:jaytirth.joshi@gmail.com" className="cta-button">
            Say Hello
          </a>
          <Link to="/chat" className="cta-button book-call-button">
            Book a Call
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default ContactPage; 