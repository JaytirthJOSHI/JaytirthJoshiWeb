import React from 'react';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './BookPage.css';

const BookPage: React.FC = () => {
  return (
    <div className="book-page">
      <div className="book-header">
        <h1>Book a Call</h1>
        <p>Schedule a meeting to discuss opportunities, collaborations, or just connect!</p>
      </div>

      <div className="booking-content">
        <div className="booking-info">
          <h2>Let's Connect</h2>
          <div className="info-items">
            <div className="info-item">
              <FaCalendar className="info-icon" />
              <div>
                <h3>Flexible Scheduling</h3>
                <p>Choose a time that works best for you</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaClock className="info-icon" />
              <div>
                <h3>30-Minute Sessions</h3>
                <p>Quick calls to discuss opportunities</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Virtual Meetings</h3>
                <p>Video calls via Google Meet or Zoom</p>
              </div>
            </div>
          </div>
          
          <div className="booking-note">
            <h3>What to Expect</h3>
            <ul>
              <li>Brief introduction and background</li>
              <li>Discussion about potential opportunities</li>
              <li>Q&A about my work and experience</li>
              <li>Next steps and follow-up</li>
            </ul>
          </div>
        </div>

        <div className="calendar-container">
          <h2>Select Your Preferred Time</h2>
          <div className="calendar-embed">
            <iframe
              src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2JV_1sKu5WKJhAcB7lig_XEIgVF7WpPUCc_NDZndyT2oNyUqNvQaWK6U8SDWiiYne187z4DJmJ"
              width="100%"
              height="600"
              frameBorder="0"
              title="Book a call with Jaytirth Joshi"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="booking-footer">
        <h3>Can't find a suitable time?</h3>
        <p>Feel free to reach out directly via email or LinkedIn, and I'll be happy to arrange a custom meeting time.</p>
        <div className="contact-alternatives">
          <a href="mailto:jaytirthjayjoshi@gmail.com" className="contact-link">
            Send Email
          </a>
          <a href="https://www.linkedin.com/in/jaytirthjoshi" target="_blank" rel="noopener noreferrer" className="contact-link">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookPage; 