import React from 'react';
import './ContactPage.css'; // Reusing styles for simplicity

const PatentSummaryPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <main className="contact-container">
        <h2>Patent Summary</h2>
        <p>This is where the confidential patent summary will be displayed for approved users.</p>
        <p><strong>[TOP SECRET CONTENT]</strong></p>
      </main>
    </div>
  );
};

export default PatentSummaryPage; 