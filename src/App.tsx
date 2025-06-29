import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import ChatPage from './pages/ChatPage';
import PatentAccessPage from './pages/PatentAccessPage';
import PatentSummaryPage from './pages/PatentSummaryPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import './App.css';
import AppWithSuspense from './pages/HomePage';
import TravelMapPage from './pages/TravelMapPage';
// import SEO from './components/SEO';
// import GoogleAnalytics from './components/GoogleAnalytics';
// import PerformanceMonitor from './components/PerformanceMonitor';

const App: React.FC = () => {
  // Replace with your actual Google Analytics Measurement ID
  // const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

  return (
    <Router>
      {/* <SEO /> */}
      {/* <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} /> */}
      {/* <PerformanceMonitor enabled={process.env.NODE_ENV === 'production'} /> */}
      <main className="container">
        <Routes>
          <Route path="/" element={<AppWithSuspense />} />
          <Route path="/portfolio" element={<PortfolioPage />}>
            <Route path=":projectId" element={<ProjectDetailPage />} />
          </Route>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/patent-access" element={<PatentAccessPage />} />
          <Route path="/patent-summary" element={<PatentSummaryPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/travel-map" element={<TravelMapPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;