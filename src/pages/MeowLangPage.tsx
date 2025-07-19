import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaGraduationCap, FaLightbulb, FaHeart } from 'react-icons/fa';
import { Fade, Slide } from 'react-awesome-reveal';
import MeowLangPageSEO from '../components/MeowLangPageSEO';
import './MeowLangPage.css';

const MeowLangPage: React.FC = () => {
  const features = [
    {
      icon: FaGraduationCap,
      title: 'Educational',
      description: 'Perfect for learning programming concepts in a fun, approachable way',
      color: '#8b5cf6'
    },
    {
      icon: FaHeart,
      title: 'Feline-Friendly',
      description: 'Every command is inspired by cat sounds - meow, purr, hiss, and more!',
      color: '#ef4444'
    },
    {
      icon: FaCode,
      title: 'Fast & Lightweight',
      description: 'Quick execution with minimal resource usage',
      color: '#06b6d4'
    },
    {
      icon: FaExternalLinkAlt,
      title: 'Web-Ready',
      description: 'Run directly in your browser with our interactive playground',
      color: '#10b981'
    }
  ];

  const codeExamples = [
    {
      title: 'Hello World',
      code: `meow meow meow
purr purr purr
meow meow meow
purr purr purr
meow meow meow`,
      description: 'A simple "Hello World" program in MeowLang'
    },
    {
      title: 'Counter Loop',
      code: `meow meow meow meow meow
purr purr purr purr purr
meow meow meow meow meow
purr purr purr purr purr`,
      description: 'Demonstrating loops and counters'
    }
  ];

  return (
    <>
      <MeowLangPageSEO />
      <div className="meowlang-page">
      {/* Hero Section */}
      <section className="meowlang-hero">
        <Fade direction="down" triggerOnce>
          <div className="hero-content">
            <h1>🐱 MeowLang</h1>
            <p className="hero-subtitle">
              A feline-friendly esoteric programming language where every command sounds like a cat!
            </p>
            <div className="hero-stats">
              <div className="stat">
                <FaCode className="stat-icon" />
                <span className="stat-number">5</span>
                <span className="stat-label">Commands</span>
              </div>
              <div className="stat">
                <FaHeart className="stat-icon" />
                <span className="stat-number">100%</span>
                <span className="stat-label">Cat Sounds</span>
              </div>
              <div className="stat">
                <FaLightbulb className="stat-icon" />
                <span className="stat-number">∞</span>
                <span className="stat-label">Possibilities</span>
              </div>
            </div>
            <div className="hero-buttons">
              <a 
                href="http://meow.joshi1.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button primary"
              >
                <FaExternalLinkAlt /> Launch Playground
              </a>
              <a 
                href="https://github.com/JaytirthJOSHI/meowlang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                <FaGithub /> View Code
              </a>
            </div>
          </div>
        </Fade>
      </section>

      {/* Why I Made It Section */}
      <section className="why-section">
        <Slide direction="up" triggerOnce>
          <h2>Why I Created MeowLang</h2>
          <div className="why-content">
            <div className="why-text">
              <h3>🎓 Educational Innovation</h3>
              <p>
                I created MeowLang to make programming more accessible and fun for beginners. 
                Traditional programming languages can be intimidating with their complex syntax, 
                so I wanted to create something that would break down those barriers.
              </p>
              
              <h3>🐱 Creative Programming</h3>
              <p>
                The idea came from combining my love for cats with programming education. 
                By using familiar cat sounds as commands, learners can focus on programming 
                concepts rather than memorizing complex syntax.
              </p>
              
              <h3>⚡ Technical Challenge</h3>
              <p>
                Building an esoteric programming language was a great way to explore 
                compiler design, language theory, and web-based development. It's a 
                testament to how even the most whimsical ideas can teach serious technical skills.
              </p>
              
              <h3>🌐 Web-First Approach</h3>
              <p>
                I wanted to make it immediately accessible to anyone with a browser. 
                No downloads, no installations - just pure programming fun that works 
                anywhere, anytime.
              </p>
            </div>
          </div>
        </Slide>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <Slide direction="up" triggerOnce>
          <h2>What Makes MeowLang Special</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ '--accent-color': feature.color } as React.CSSProperties}
              >
                <feature.icon className="feature-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </Slide>
      </section>

      {/* Code Examples */}
      <section className="code-section">
        <Slide direction="up" triggerOnce>
          <h2>Code Examples</h2>
          <div className="code-examples">
            {codeExamples.map((example, index) => (
              <div key={index} className="code-example">
                <h3>{example.title}</h3>
                <div className="code-block">
                  <pre><code>{example.code}</code></pre>
                </div>
                <p className="code-description">{example.description}</p>
              </div>
            ))}
          </div>
        </Slide>
      </section>

      {/* Technical Details */}
      <section className="technical-section">
        <Slide direction="up" triggerOnce>
          <h2>Technical Implementation</h2>
          <div className="technical-grid">
            <div className="technical-card">
              <h3>Language Design</h3>
              <ul>
                <li>Inspired by Brainfuck but with cat sounds</li>
                <li>5 core commands: meow, purr, hiss, etc.</li>
                <li>Simple instruction set for complex programs</li>
                <li>Perfect for educational purposes</li>
              </ul>
            </div>
            <div className="technical-card">
              <h3>Web Implementation</h3>
              <ul>
                <li>Pure JavaScript implementation</li>
                <li>Real-time code execution</li>
                <li>Interactive playground interface</li>
                <li>No server-side processing needed</li>
              </ul>
            </div>
            <div className="technical-card">
              <h3>Educational Value</h3>
              <ul>
                <li>Teaches programming fundamentals</li>
                <li>Demonstrates language design concepts</li>
                <li>Shows compiler/interpreter principles</li>
                <li>Makes complex concepts approachable</li>
              </ul>
            </div>
          </div>
        </Slide>
      </section>

      {/* Call to Action */}
      <section className="meowlang-cta">
        <Fade triggerOnce>
          <div className="cta-content">
            <h2>Ready to Code Like a Cat?</h2>
            <p>Jump into the interactive playground and start writing your first MeowLang program!</p>
            <div className="cta-buttons">
              <a 
                href="http://meow.joshi1.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button primary"
              >
                🐱 Launch Playground
              </a>
              <a 
                href="/portfolio" 
                className="cta-button secondary"
              >
                View Other Projects
              </a>
            </div>
          </div>
        </Fade>
      </section>
    </div>
    </>
  );
};

export default MeowLangPage; 