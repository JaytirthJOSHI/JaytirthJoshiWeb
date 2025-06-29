import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Let's discuss opportunities, collaborations, or just say hello!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-details">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>+1 (770) 376-5867</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>jaytirthjayjoshi@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <div>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/jaytirthjoshi" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/jaytirthjoshi
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/JaytirthJOSHI" target="_blank" rel="noopener noreferrer">
                  github.com/JaytirthJOSHI
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>Marietta, Georgia, United States</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Me a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me more about your inquiry..."
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="contact-footer">
        <h3>Let's Connect!</h3>
        <p>I'm always open to discussing new opportunities, collaborations, or innovative projects. Whether you have a question about my work, want to collaborate, or just want to say hello, I'd love to hear from you!</p>
      </div>
    </div>
  );
};

export default ContactPage; 