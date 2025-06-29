import React, { useCallback, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; 
import { Fade, Slide } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import './HomePage.css';
import profileSuitImage from '../assets/Images/profile-suit.png';
import profileCasualImage from '../assets/Images/profile-casual.jpeg';
// import TravelMap from '../components/TravelMap'; // Temporarily removed

// Data arrays for your profile
const experienceData = [
  {
    title: 'Chief Executive Officer and Founder',
    company: 'HealthSathi',
    duration: 'May 2024 - Present (1 year 2 months)',
    location: 'Marietta, Georgia, United States',
    description: 'I founded HealthSathi to bridge the healthcare communication gap by providing clear, AI-powered explanations of medical reports. Our AI, Dr. Fatafat, simplifies complex medical data, empowering patients, especially in developing countries, to make informed health decisions with privacy and ease.',
    contributions: [
      'Developed, launched, and patented an industry-shaping AI for healthcare.',
      'Led a 15+ member team to develop and improve AI-driven healthcare solutions.',
      'Gained recognition by multiple Fortune 500 companies: Microsoft, Apple, Google.',
      'Gained 10,000k active users.',
    ],
  },
  {
    title: 'AI/ML SME (Subject Matter Expert)',
    company: 'Freedom Seal Global',
    duration: 'January 2025 - Present (6 months)',
    location: 'Seattle, Washington, United States',
    description: 'AI and Business consulting. Working with a landscape of ways on how we can implement AI in different systems and social purposes.',
    contributions: [],
  },
  {
    title: 'Genral Ward, ICU, OT Intern Shadowing + Apprenticeship',
    company: 'Kimaya Heart Institute and Research Centre LLP',
    duration: 'June 2024 - August 2024 (3 months)',
    location: 'Palanpur, Gujarat, India',
    description: 'During my internship at Kimaya Heart Institute and Research Centre LLP, I gained hands-on experience in the cardiovascular unit and ICU, actively participating in open-heart surgeries like Coronary Artery Bypass Grafts (CABGs) and Coronary Angioplasties.',
    contributions: [
        'Observed in complex cardiac surgeries and critical care management.',
        'Engaged in ICU operations, learning emergency interventions and patient monitoring.',
        'Gained expertise in cardiac anatomy, surgical protocols, and post-op care.',
        'This experience deepened my understanding of open-heart surgery, intensive care, and emergency response in high-pressure medical environments.',
    ]
  },
  {
    title: 'Medical Social Work Intern',
    company: 'Government of India Official',
    duration: 'July 2024 - July 2024 (1 month)',
    location: 'Sirohi, Rajasthan, India',
    description: 'See Project for More Info',
    contributions: [],
  },
  {
    title: 'Laboratory Technician Intern',
    company: 'Labstar Pathology',
    duration: 'May 2024 - July 2024 (3 months)',
    location: 'Palanpur, Gujarat, India',
    description: '',
    contributions: [],
  },
  {
    title: 'Medical, OPD, ER Apprentice',
    company: 'Ratanba Multi Specialty Hospital',
    duration: 'May 2024 - June 2024 (2 months)',
    location: 'Palanpur, Gujarat, India',
    description: '',
    contributions: [],
  },
  {
    title: 'Mentor and Teacher',
    company: 'KIDS STANDARD PUBLICATION INC, MICHIGAN',
    duration: 'August 2022 - May 2024 (1 year 10 months)',
    location: 'United States',
    description: 'I have tutored middle school and high school students in math and science for over 200 hours, helping them improve their understanding and skills in these subjects.',
    contributions: [],
  },
];

const educationData = [
    { school: 'Walton High School', degree: 'High School Diploma · (August 2022 - May 2026)'},
    { school: 'Shanghai Community International School', degree: 'MYP & PYP In IB · (January 2016 - January 2022)'},
];

const certificationsData = [
  { name: 'CS50x: Introduction to the Intellectual Enterprises of Computer Science and the Art of Programming' },
  { name: 'Microsoft Office Specialist: Word Associate (Office 2019)' },
  { name: 'Microsoft Office Specialist: PowerPoint Associate (Office 2019)' },
  { name: 'Introduction to Clinical Data' },
  { name: 'Introduction to Healthcare' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
};

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [isProfessional, setIsProfessional] = useState(true);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const handleJobToggle = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <div className="page-wrapper">
      <LanguageSwitcher />
      <section className="hero-section">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "#0a192f",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="content-overlay">
          <Fade direction="down" triggerOnce>
            <h1>{t('hero.name')}</h1>
            <h2>{t('hero.title')}</h2>
          </Fade>
          <Slide direction="up" triggerOnce>
            <p className="tagline">{t('hero.tagline')}</p>
            <div className="cta-buttons">
              <a href="#summary" className="cta-button">{t('hero.cta')}</a>
            </div>
          </Slide>
        </div>
      </section>

      <main className="profile-container">
        <Slide direction="up" triggerOnce>
          <section id="summary" className="profile-section with-image">
            <div className="profile-image-container">
              <img src={isProfessional ? profileSuitImage : profileCasualImage} alt="Jaytirth Joshi" className="profile-image"/>
              <button onClick={() => setIsProfessional(!isProfessional)} className="image-switch-button">
                {isProfessional ? 'Lock out' : 'Lock in'}
              </button>
            </div>
            <div className="summary-text">
              <h2>{t('summary.title')}</h2>
              <p>{t('summary.paragraph1')}</p>
              <p>{t('summary.paragraph2')}</p>
            </div>
          </section>
        </Slide>
        
        <Slide direction="up" triggerOnce>
          <section id="experience" className="profile-section">
            <h2>{t('experience.title')}</h2>
            {experienceData.map((job, index) => (
                <div key={index} className="job">
                    <div className="job-header" onClick={() => handleJobToggle(index)}>
                        <h3>{job.title}</h3>
                        <p className="company">{job.company}</p>
                        <span className={`job-toggle ${expandedJob === index ? 'expanded' : ''}`}></span>
                    </div>
                    <div className={`job-details ${expandedJob === index ? 'expanded' : ''}`}>
                        <p className="location">{job.location} | {job.duration}</p>
                        {job.description && <p>{job.description}</p>}
                        {job.contributions.length > 0 && (
                            <ul className="contributions">
                                {job.contributions.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
          </section>
        </Slide>
        
        <Slide direction="up" triggerOnce>
            <section id="education" className="profile-section">
              <h2>{t('education.title')}</h2>
              {educationData.map((edu, index) => (
                <div key={index} className="education-item">
                    <h3>{edu.school}</h3>
                    <p>{edu.degree}</p>
                </div>
              ))}
            </section>
        </Slide>
        
        <div className="grid-container">
          <Slide direction="up" triggerOnce>
              <section id="skills" className="profile-section">
                <h2>{t('skills.title')}</h2>
                <ul className="skills-list">
                    <li>{t('skills.skill1')}</li>
                    <li>{t('skills.skill2')}</li>
                    <li>{t('skills.skill3')}</li>
                </ul>
              </section>
          </Slide>
          <Slide direction="up" triggerOnce>
              <section id="languages" className="profile-section">
                <h2>{t('languages.title')}</h2>
                <ul className="skills-list">
                    <li>{t('languages.lang1')}</li>
                    <li>{t('languages.lang2')}</li>
                    <li>{t('languages.lang3')}</li>
                    <li>{t('languages.lang4')}</li>
                </ul>
              </section>
          </Slide>
        </div>

        <Slide direction="up" triggerOnce>
            <section id="certifications" className="profile-section">
              <h2>{t('certifications.title')}</h2>
              {certificationsData.map((cert, index) => (
                <div key={index} className="certification-item">
                    <p>{cert.name}</p>
                </div>
              ))}
            </section>
        </Slide>
        
        <Slide direction="up" triggerOnce>
          <section id="patents" className="profile-section">
            <h2>{t('patents.title')}</h2>
            <div className="patent-item">
              <h3>{t('patents.patent_title')}</h3>
              <p>{t('patents.patent_description')}</p>
              <div className="cta-buttons">
                  <Link to="/patent-access" className="cta-button">{t('patents.cta')}</Link>
              </div>
            </div>
          </section>
        </Slide>

        <Slide direction="up" triggerOnce>
          <section id="contact" className="profile-section contact-section">
            <h2>{t('contact.title')}</h2>
            <p>+1 (770) 376-5867</p>
            <p><a href="mailto:jaytirthjayjoshi@gmail.com">jaytirthjayjoshi@gmail.com</a></p>
            <p><a href="https://www.linkedin.com/in/jaytirthjoshi" target="_blank" rel="noopener noreferrer">linkedin.com/in/jaytirthjoshi</a></p>
          </section>
        </Slide>
      </main>
    </div>
  );
};

const Loader = () => (
  <div className="page-wrapper">
    <div>loading...</div>
  </div>
);

export default function AppWithSuspense() {
  return (
    <Suspense fallback={<Loader />}>
      <HomePage />
    </Suspense>
  );
}