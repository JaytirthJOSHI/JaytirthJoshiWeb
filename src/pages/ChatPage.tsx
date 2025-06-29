import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './ChatPage.css';

const ChatPage: React.FC = () => {
  return (
    <Fade triggerOnce>
      <div className="chat-container">
        <h1>Book a Call</h1>
        <p>
          Schedule a meeting with me to discuss your project, collaboration opportunities, or just to have a conversation. 
          I'm always excited to connect with fellow developers, entrepreneurs, and creative minds!
        </p>
        
        <div className="calendar-embed">
          <iframe
            src="https://calendar.app.google/UakyRHiXVbtzopLv9"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Book a Call Calendar"
          ></iframe>
        </div>
        
        <div className="chat-info">
          <h3>What to expect:</h3>
          <ul>
            <li>Quick 15-30 minute conversation</li>
            <li>Discuss your project requirements</li>
            <li>Explore collaboration opportunities</li>
            <li>Technical consultation and advice</li>
            <li>General networking and mentorship</li>
          </ul>
          
          <p className="contact-alternative">
            Can't find a suitable time? Feel free to <a href="mailto:jaytirth.joshi@gmail.com">email me directly</a> and I'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default ChatPage; 