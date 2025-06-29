import React from 'react';
import './TermsAndConditionsPage.css';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="tnc-container">
      <h1>Terms and Conditions</h1>
      <p>Last updated: [Date]</p>

      <h2>1. Agreement to Terms</h2>
      <p>
        By using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
      </p>

      <h2>2. Intellectual Property Rights</h2>
      <p>
        The content on this website is the property of HealthSathi and is protected by copyright and other intellectual property laws.
      </p>

      <h2>3. Prohibited Activities</h2>
      <p>
        You may not access or use the site for any purpose other than that for which we make the site available.
      </p>

      <h2>4. Governing Law</h2>
      <p>
        These Terms and Conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
      </p>

      <h2>5. Contact Us</h2>
      <p>
        To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:jaytirthjayjoshi@gmail.com">jaytirthjayjoshi@gmail.com</a>
      </p>
    </div>
  );
};

export default TermsAndConditionsPage;