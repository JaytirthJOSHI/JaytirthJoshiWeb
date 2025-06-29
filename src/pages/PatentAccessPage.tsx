import React, { useState } from 'react';
import './ContactPage.css'; // Reusing styles for simplicity

const PatentAccessPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed) {
      const recipient = 'JaytirthJoshi@outlook.com';
      const subject = 'Patent Access Request | Legal Enquiry | Jaytirth Joshi Website';
      const body = `Hello,

I am requesting access to the patent summary.

My details are as follows:
Full Name: ${fullName}
Email: ${email}
About Me / Reason for Request: ${aboutMe || 'N/A'}

I have read and agree to the terms of the Non-Disclosure Agreement presented on the website.

Thank you,
${fullName}
`;
      
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      setSubmitted(true);
    } else {
      alert('You must agree to the NDA to proceed.');
    }
  };

  if (submitted) {
    return (
      <div className="page-wrapper">
        <main className="contact-container">
          <h2>Redirecting...</h2>
          <p>Your email client should now be open with a pre-filled message. Please review and send it to complete your request.</p>
          <p>If you are not redirected, please ensure you have a default email client configured in your browser or that pop-ups are not blocked.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <main className="contact-container">
        <h2>Patent Summary Access Request</h2>
        <div className="nda-section">
          <h3>Non-Disclosure Agreement (NDA)</h3>
          <div className="nda-text">
            <p>This Non-Disclosure Agreement ("Agreement") is entered into for the purpose of preventing the unauthorized disclosure of Confidential Information (as defined below) regarding the patent summary you are about to access.</p>
            <p>The undersigned hereby agrees that the Confidential Information received will be used solely for evaluation purposes and will not be disclosed, published, or disseminated to any third party without prior written consent. The confidentiality obligations shall remain in effect indefinitely.</p>
            <p>By checking the box below, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="aboutMe">About Me / Reason for Request (Optional)</label>
            <textarea
              id="aboutMe"
              rows={4}
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
            />
          </div>
          <div className="form-group-checkbox">
            <input
              type="checkbox"
              id="agreement"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
            />
            <label htmlFor="agreement">I have read and agree to the terms of the Non-Disclosure Agreement.</label>
          </div>
          <button type="submit" className="submit-btn">Request Access</button>
        </form>
      </main>
    </div>
  );
};

export default PatentAccessPage; 