import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import PatentAccessPage from './pages/PatentAccessPage';
import PatentSummaryPage from './pages/PatentSummaryPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import './App.css';
import AppWithSuspense from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <main className="container">
        <Routes>
          <Route path="/" element={<AppWithSuspense />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="project/:projectId" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/patent-access" element={<PatentAccessPage />} />
          <Route path="/patent-summary" element={<PatentSummaryPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;