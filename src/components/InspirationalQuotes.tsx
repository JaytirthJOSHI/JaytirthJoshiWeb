import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaSync } from 'react-icons/fa';
import './InspirationalQuotes.css';

interface Quote {
  id: number;
  text: string;
  author: string;
  category: 'innovation' | 'success' | 'leadership' | 'healthcare' | 'technology';
}

const InspirationalQuotes: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const quotes: Quote[] = [
    {
      id: 1,
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      category: 'innovation'
    },
    {
      id: 2,
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      category: 'leadership'
    },
    {
      id: 3,
      text: "The future of healthcare is not just about treating disease, but preventing it.",
      author: "Dr. Atul Gawande",
      category: 'healthcare'
    },
    {
      id: 4,
      text: "Technology is best when it brings people together.",
      author: "Matt Mullenweg",
      category: 'technology'
    },
    {
      id: 5,
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      category: 'success'
    },
    {
      id: 6,
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: 'success'
    },
    {
      id: 7,
      text: "AI is the new electricity. Just as electricity transformed almost everything 100 years ago, today I actually have a hard time thinking of an industry that I don't think AI will transform in the next several years.",
      author: "Andrew Ng",
      category: 'technology'
    },
    {
      id: 8,
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
      category: 'success'
    },
    {
      id: 9,
      text: "Healthcare is a human right, not a privilege.",
      author: "Dr. Paul Farmer",
      category: 'healthcare'
    },
    {
      id: 10,
      text: "The best leaders are those most interested in surrounding themselves with assistants and associates smarter than they are.",
      author: "John C. Maxwell",
      category: 'leadership'
    },
    {
      id: 11,
      text: "Innovation happens when you connect the dots between different fields.",
      author: "Reid Hoffman",
      category: 'innovation'
    },
    {
      id: 12,
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      category: 'success'
    },
    {
      id: 13,
      text: "Technology should improve your life, not become your life.",
      author: "Billy Cox",
      category: 'technology'
    },
    {
      id: 14,
      text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
      author: "Simon Sinek",
      category: 'leadership'
    },
    {
      id: 15,
      text: "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
      author: "Mark Zuckerberg",
      category: 'innovation'
    }
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const changeQuote = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentQuote(getRandomQuote());
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    setCurrentQuote(getRandomQuote());
    
    // Auto-change quote every 30 seconds
    const interval = setInterval(() => {
      changeQuote();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'innovation': return '#ff6b6b';
      case 'success': return '#4ecdc4';
      case 'leadership': return '#45b7d1';
      case 'healthcare': return '#96ceb4';
      case 'technology': return '#feca57';
      default: return '#64ffda';
    }
  };

  if (!currentQuote) return null;

  return (
    <section id="inspirational-quotes" className="inspirational-quotes-section">
      <div className="container">
        <div className="quotes-header">
          <h2>Daily Inspiration</h2>
          <p>Words that drive innovation and change</p>
        </div>

        <div className="quote-container">
          <div className={`quote-card ${isLoading ? 'loading' : ''}`}>
            <div className="quote-icon top">
              <FaQuoteLeft />
            </div>
            
            <div className="quote-content">
              <p className="quote-text">{currentQuote.text}</p>
              
              <div className="quote-author">
                <h4>— {currentQuote.author}</h4>
                <div 
                  className="category-badge"
                  style={{ backgroundColor: getCategoryColor(currentQuote.category) }}
                >
                  {currentQuote.category.charAt(0).toUpperCase() + currentQuote.category.slice(1)}
                </div>
              </div>
            </div>

            <div className="quote-icon bottom">
              <FaQuoteRight />
            </div>

            <button 
              className="refresh-button"
              onClick={changeQuote}
              disabled={isLoading}
              aria-label="Get new quote"
            >
              <FaSync className={isLoading ? 'spinning' : ''} />
            </button>
          </div>
        </div>

        <div className="quotes-footer">
          <p>
            <strong>New quote every 30 seconds</strong> or click the refresh button
          </p>
        </div>
      </div>
    </section>
  );
};

export default InspirationalQuotes;