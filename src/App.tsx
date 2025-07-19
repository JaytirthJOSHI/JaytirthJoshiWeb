import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SEO from './components/SEO';
import GoogleAnalytics from './components/GoogleAnalytics';
import PerformanceMonitor from './components/PerformanceMonitor';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import AIAssistant from './components/AIAssistant';
import { ThemeProvider } from './contexts/ThemeContext';

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



// Simple Test Component
const TestComponent = () => (
  <div style={{
    backgroundColor: '#0a192f',
    color: '#64ffda',
    padding: '2rem',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <h1>React App is Loading!</h1>
    <p>If you can see this, React is working.</p>
  </div>
);

const App: React.FC = () => {
  // Replace with your actual Google Analytics Measurement ID
  const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

  // Add console logging for debugging
  console.log('App component loading...');

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
            <TestComponent />
          </main>
          <BackToTop />
          <AIAssistant />
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;