import React from 'react';
import profileImage from '../assets/Images/jaytirth-joshi-casual-portrait.jpeg';

const OfflinePage: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a192f',
      color: '#e6f1ff',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <img 
        src={profileImage} 
        alt="Jaytirth Joshi smiling" 
        style={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          border: '3px solid #64ffda',
          marginBottom: 20,
          objectFit: 'cover',
          boxShadow: '0 4px 24px rgba(100,255,218,0.2)'
        }}
      />
      <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>Offline Mode</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>
        Oops! You're offline.<br/>
        Even the best innovators need a connection.<br/>
        <span role="img" aria-label="wifi">📡</span> <span role="img" aria-label="rocket">🚀</span>
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: '10px 28px',
          background: 'none',
          border: '2px solid #64ffda',
          borderRadius: 8,
          color: '#64ffda',
          fontWeight: 600,
          fontSize: '1rem',
          cursor: 'pointer',
          marginBottom: 16,
          transition: 'background 0.2s, color 0.2s'
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#64ffda', e.currentTarget.style.color = '#0a192f')}
        onMouseOut={e => (e.currentTarget.style.background = 'none', e.currentTarget.style.color = '#64ffda')}
      >
        Try Again
      </button>
      <div style={{ marginTop: 18, fontSize: '0.95rem', opacity: 0.7 }}>
        <span role="img" aria-label="lightbulb">💡</span> Pro tip: Bookmark this site for offline inspiration!
      </div>
    </div>
  );
};

export default OfflinePage;