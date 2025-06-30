import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/Images/jaytirth-joshi-casual-portrait.jpeg';
import './HomePage.css';

const quotes = [
  "Innovation is seeing what everybody has seen and thinking what nobody has thought.",
  "The best way to predict the future is to invent it.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "AI is the new electricity. Just as electricity transformed almost everything 100 years ago, today AI will transform every industry.",
  "Leadership is not about being in charge. It is about taking care of those in your charge."
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const NotFoundPage: React.FC = () => {
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
        alt="Jaytirth Joshi looking thoughtful" 
        style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          border: '3px solid #64ffda',
          marginBottom: 24,
          objectFit: 'cover',
          boxShadow: '0 4px 24px rgba(100,255,218,0.2)'
        }}
      />
      <h1 style={{ fontSize: '2.5rem', marginBottom: 8 }}>404: Lost in Innovation</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: 24 }}>
        Looks like you've wandered off the map—don't worry, even AI innovators get lost sometimes!<br/>
        <span role="img" aria-label="robot">🤖</span> <span role="img" aria-label="compass">🧭</span>
      </p>
      <blockquote style={{ fontStyle: 'italic', color: '#64ffda', marginBottom: 32 }}>
        "{getRandomQuote()}"
      </blockquote>
      <Link to="/" style={{
        padding: '12px 32px',
        background: 'none',
        border: '2px solid #64ffda',
        borderRadius: 8,
        color: '#64ffda',
        fontWeight: 600,
        fontSize: '1.1rem',
        textDecoration: 'none',
        transition: 'background 0.2s, color 0.2s',
        marginBottom: 16,
        display: 'inline-block'
      }}
      onMouseOver={e => (e.currentTarget.style.background = '#64ffda', e.currentTarget.style.color = '#0a192f')}
      onMouseOut={e => (e.currentTarget.style.background = 'none', e.currentTarget.style.color = '#64ffda')}
      >
        Back to Home
      </Link>
      <div style={{ marginTop: 24, fontSize: '1rem', opacity: 0.7 }}>
        <span role="img" aria-label="lightbulb">💡</span> Fun fact: Jaytirth once built an AI that could explain medical reports to his grandma!
      </div>
    </div>
  );
};

export default NotFoundPage;