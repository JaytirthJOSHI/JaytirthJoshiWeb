import React, { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import SentimentAnalyzer from '../components/SentimentAnalyzer';
import MedicalAIGenerator from '../components/MedicalAIGenerator';
import AIShowcasePageSEO from '../components/AIShowcasePageSEO';
import { FaBrain, FaRobot, FaChartLine, FaStethoscope, FaMagic, FaEye, FaMicrophone, FaCode } from 'react-icons/fa';
import './AIShowcasePage.css';

const AIShowcasePage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const aiCapabilities = [
    {
      id: 'nlp',
      title: 'Natural Language Processing',
      icon: FaBrain,
      description: 'Advanced text analysis, understanding, and generation',
      features: ['Medical text simplification', 'Multi-language support', 'Context understanding'],
      color: '#8b5cf6'
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      icon: FaChartLine,
      description: 'Pattern recognition and predictive analytics',
      features: ['Sentiment analysis', 'Classification models', 'Predictive insights'],
      color: '#06b6d4'
    },
    {
      id: 'medical-ai',
      title: 'Medical AI',
      icon: FaStethoscope,
      description: 'Healthcare-focused AI applications',
      features: ['Dr. Fatafat analyzer', 'Medical report parsing', 'Patient education'],
      color: '#10b981'
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      icon: FaEye,
      description: 'Image and visual data processing',
      features: ['Medical imaging', 'Document analysis', 'Visual recognition'],
      color: '#f59e0b'
    },
    {
      id: 'voice-ai',
      title: 'Voice AI',
      icon: FaMicrophone,
      description: 'Speech processing and voice interfaces',
      features: ['Voice-to-text', 'Speech synthesis', 'Voice commands'],
      color: '#ef4444'
    },
    {
      id: 'automation',
      title: 'AI Automation',
      icon: FaCode,
      description: 'Intelligent workflow automation',
      features: ['Report generation', 'Data processing', 'Smart routing'],
      color: '#8b5cf6'
    }
  ];

  const interactiveDemos = [
    {
      id: 'chat-assistant',
      title: 'AI Chat Assistant',
      description: 'Conversational AI that knows about my work and experience',
      component: 'chat',
      icon: FaRobot
    },
    {
      id: 'sentiment-analysis',
      title: 'Real-time Sentiment Analysis',
      description: 'Analyze emotional tone and sentiment in text',
      component: 'sentiment',
      icon: FaChartLine
    },
    {
      id: 'medical-generator',
      title: 'Medical AI Content Generator',
      description: 'Generate patient-friendly medical explanations',
      component: 'medical',
      icon: FaStethoscope
    }
  ];

  const achievements = [
    {
      title: 'HealthSathi Platform',
      description: '10,000+ users helped with AI-powered medical explanations',
      metric: '10K+ Users',
      icon: FaStethoscope
    },
    {
      title: 'Dr. Fatafat AI',
      description: 'Patented medical report analyzer simplifying complex medical data',
      metric: 'Patented',
      icon: FaBrain
    },
    {
      title: 'Multi-language Support',
      description: 'AI systems supporting English, Chinese, Hindi, and Gujarati',
      metric: '4 Languages',
      icon: FaMagic
    },
    {
      title: 'Fortune 500 Recognition',
      description: 'Recognition from Microsoft, Apple, and Google for AI innovation',
      metric: 'Fortune 500',
      icon: FaChartLine
    }
  ];

  return (
    <>
      <AIShowcasePageSEO />
      <div className="ai-showcase-page">
      {/* Hero Section */}
      <section className="ai-hero">
        <Fade direction="down" triggerOnce>
          <h1>AI Innovation Showcase</h1>
          <p className="hero-subtitle">
            Experience cutting-edge AI technologies developed by Jaytirth Joshi
          </p>
          <div className="hero-stats">
            <div className="stat">
              <FaBrain className="stat-icon" />
              <span className="stat-number">10K+</span>
              <span className="stat-label">Users Helped</span>
            </div>
            <div className="stat">
              <FaStethoscope className="stat-icon" />
              <span className="stat-number">1</span>
              <span className="stat-label">Patent Secured</span>
            </div>
            <div className="stat">
              <FaRobot className="stat-icon" />
              <span className="stat-number">6</span>
              <span className="stat-label">AI Systems</span>
            </div>
          </div>
        </Fade>
      </section>

      {/* AI Capabilities Grid */}
      <section className="ai-capabilities">
        <Slide direction="up" triggerOnce>
          <h2>AI Expertise & Capabilities</h2>
          <div className="capabilities-grid">
            {aiCapabilities.map((capability) => (
              <div 
                key={capability.id} 
                className="capability-card"
                style={{ '--accent-color': capability.color } as React.CSSProperties}
              >
                <div className="capability-header">
                  <capability.icon className="capability-icon" />
                  <h3>{capability.title}</h3>
                </div>
                <p className="capability-description">{capability.description}</p>
                <ul className="capability-features">
                  {capability.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Slide>
      </section>

      {/* Interactive Demos */}
      <section className="interactive-demos">
        <Slide direction="up" triggerOnce>
          <h2>Interactive AI Demonstrations</h2>
          <p className="section-subtitle">Try these live AI systems powered by advanced machine learning</p>
          
          <div className="demo-selector">
            {interactiveDemos.map((demo) => (
              <button
                key={demo.id}
                className={`demo-button ${activeDemo === demo.id ? 'active' : ''}`}
                onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
              >
                <demo.icon className="demo-icon" />
                <div className="demo-info">
                  <span className="demo-title">{demo.title}</span>
                  <span className="demo-description">{demo.description}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="demo-container">
            {activeDemo === 'sentiment' && <SentimentAnalyzer />}
            {activeDemo === 'medical' && <MedicalAIGenerator />}
            {activeDemo === 'chat' && (
              <div className="chat-demo-notice">
                <FaRobot className="notice-icon" />
                <p>The AI Chat Assistant is available on every page! Look for the floating AI button in the bottom-right corner.</p>
              </div>
            )}
            {!activeDemo && (
              <div className="demo-placeholder">
                <FaMagic className="placeholder-icon" />
                <p>Select a demonstration above to experience AI in action</p>
              </div>
            )}
          </div>
        </Slide>
      </section>

      {/* Achievements Section */}
      <section className="ai-achievements">
        <Slide direction="up" triggerOnce>
          <h2>AI Innovation Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <achievement.icon className="achievement-icon" />
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                  <span className="achievement-metric">{achievement.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </section>

      {/* Technical Stack */}
      <section className="tech-stack">
        <Slide direction="up" triggerOnce>
          <h2>AI Technology Stack</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Machine Learning</h3>
              <div className="tech-tags">
                <span className="tech-tag">TensorFlow</span>
                <span className="tech-tag">PyTorch</span>
                <span className="tech-tag">Scikit-learn</span>
                <span className="tech-tag">Pandas</span>
                <span className="tech-tag">NumPy</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Natural Language Processing</h3>
              <div className="tech-tags">
                <span className="tech-tag">Transformers</span>
                <span className="tech-tag">BERT</span>
                <span className="tech-tag">GPT Models</span>
                <span className="tech-tag">spaCy</span>
                <span className="tech-tag">NLTK</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Healthcare AI</h3>
              <div className="tech-tags">
                <span className="tech-tag">Medical NLP</span>
                <span className="tech-tag">FHIR Standards</span>
                <span className="tech-tag">Clinical Data</span>
                <span className="tech-tag">Medical Imaging</span>
                <span className="tech-tag">Patient Analytics</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Deployment & Infrastructure</h3>
              <div className="tech-tags">
                <span className="tech-tag">AWS/Azure</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">Kubernetes</span>
                <span className="tech-tag">REST APIs</span>
                <span className="tech-tag">Microservices</span>
              </div>
            </div>
          </div>
        </Slide>
      </section>

      {/* Call to Action */}
      <section className="ai-cta">
        <Fade triggerOnce>
          <div className="cta-content">
            <h2>Ready to Innovate with AI?</h2>
            <p>Let's discuss how AI can transform your healthcare technology projects</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Start a Conversation
              </a>
              <a href="/portfolio" className="cta-button secondary">
                View Projects
              </a>
            </div>
          </div>
        </Fade>
      </section>
    </div>
    </>
  );
};

export default AIShowcasePage; 