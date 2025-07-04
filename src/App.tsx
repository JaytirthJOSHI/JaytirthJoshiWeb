import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import ChatPage from './pages/ChatPage';
import PatentAccessPage from './pages/PatentAccessPage';
import PatentSummaryPage from './pages/PatentSummaryPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import ApiDataPage from './pages/ApiDataPage';
import BookPage from './pages/BookPage';
import './App.css';
import AppWithSuspense from './pages/HomePage';
import TravelMapPage from './pages/TravelMapPage';
import SEO from './components/SEO';
import GoogleAnalytics from './components/GoogleAnalytics';
import PerformanceMonitor from './components/PerformanceMonitor';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import NotFoundPage from './pages/NotFoundPage';
import CookiesPage from './pages/CookiesPage';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div 
          role="alert"
          aria-live="polite"
          style={{ 
            padding: '2rem', 
            textAlign: 'center', 
            color: '#e6f1ff',
            backgroundColor: '#0a192f',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>Something went wrong</h1>
          <p>Please refresh the page or try again later.</p>
          <button 
            onClick={() => window.location.reload()}
            aria-label="Refresh the page to try again"
            style={{
              padding: '10px 20px',
              backgroundColor: '#64ffda',
              color: '#0a192f',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Component
const LoadingSpinner = () => (
  <div 
    role="status"
    aria-live="polite"
    aria-label="Loading content"
    style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#0a192f',
      color: '#64ffda'
    }}
  >
    <div 
      aria-hidden="true"
      style={{
        width: '50px',
        height: '50px',
        border: '3px solid #64ffda',
        borderTop: '3px solid transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}
    ></div>
    <span className="sr-only">Loading...</span>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const App: React.FC = () => {
  // Replace with your actual Google Analytics Measurement ID
  const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <SEO />
          <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
          <PerformanceMonitor enabled={process.env.NODE_ENV === 'production'} />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="container" role="main" aria-label="Main content">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<AppWithSuspense />} />
                <Route path="/portfolio" element={<PortfolioPage />}>
                  <Route path=":projectId" element={<ProjectDetailPage />} />
                </Route>
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/api-data" element={<ApiDataPage />} />
                <Route path="/book" element={<BookPage />} />
                <Route path="/patent-access" element={<PatentAccessPage />} />
                <Route path="/patent-summary" element={<PatentSummaryPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
                <Route path="/travel-map" element={<TravelMapPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <BackToTop />
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;