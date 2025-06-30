import React, { useState, useEffect, useRef } from 'react';
import { FaTrophy, FaStar, FaCalendar, FaAward } from 'react-icons/fa';
import './JaysNews.css';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  category: 'achievement' | 'recognition' | 'competition';
  link?: string;
}

const JaysNews: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Forbes Under 30 Nominee",
      description: "Nominated for Forbes Under 30 in the Healthcare category for revolutionizing medical communication through AI-powered solutions. This recognition reflects the impact HealthSathi is making in patient empowerment and healthcare accessibility.",
      date: "January 2025",
      icon: <FaStar className="news-icon" />,
      category: 'recognition'
    },
    {
      id: 2,
      title: "2nd Place - YMB Pitch Competition",
      description: "Secured 2nd place at the prestigious YMB (Young Millionaire Builders) Pitch Competition, presenting HealthSathi's innovative approach to healthcare communication. Competed against top young entrepreneurs and received recognition for our AI-driven solution.",
      date: "December 2024",
      icon: <FaTrophy className="news-icon" />,
      category: 'competition'
    },
    {
      id: 3,
      title: "Microsoft Youth Business Hackathon Winner",
      description: "First Place Winner of the Global Microsoft Youth Business Hackathon (Divergent Team), showcasing innovative solutions in healthcare technology and AI implementation.",
      date: "2024",
      icon: <FaAward className="news-icon" />,
      category: 'achievement'
    },
    {
      id: 4,
      title: "HealthSathi Reaches 10,000+ Users",
      description: "HealthSathi's AI platform has successfully helped over 10,000 users understand their medical reports, making healthcare information more accessible and empowering patients worldwide.",
      date: "Ongoing",
      icon: <FaStar className="news-icon" />,
      category: 'achievement'
    }
  ];

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.news-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleItemClick = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleItemClick(id);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="jays-news" 
      className={`jays-news-section ${isVisible ? 'visible' : ''}`}
      aria-label="Jay's News and Achievements"
    >
      <div className="container">
        <div className="news-header">
          <h2>Jay's News</h2>
          <p>Recent achievements and recognition in healthcare AI innovation</p>
        </div>

        <div className="news-grid" role="list" aria-label="News items">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className={`news-card ${activeItem === item.id ? 'active' : ''} ${item.category}`}
              onClick={() => handleItemClick(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              role="button"
              tabIndex={0}
              aria-expanded={activeItem === item.id}
              aria-describedby={`news-description-${item.id}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="news-card-header">
                <div className="news-icon-container" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="news-meta">
                  <h3>{item.title}</h3>
                  <div className="news-date">
                    <FaCalendar aria-hidden="true" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>

              <div 
                className={`news-content ${activeItem === item.id ? 'expanded' : ''}`}
                id={`news-description-${item.id}`}
                aria-hidden={activeItem !== item.id}
              >
                <p>{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-link"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Learn more about ${item.title}`}
                  >
                    Learn More →
                  </a>
                )}
              </div>

              <div className="news-category-badge" aria-label={`Category: ${item.category}`}>
                {item.category === 'achievement' && 'Achievement'}
                {item.category === 'recognition' && 'Recognition'}
                {item.category === 'competition' && 'Competition'}
              </div>
            </div>
          ))}
        </div>

        <div className="news-footer">
          <p>
            <strong>Stay updated</strong> with Jay's latest achievements and healthcare AI innovations
          </p>
        </div>
      </div>
    </section>
  );
};

export default JaysNews;