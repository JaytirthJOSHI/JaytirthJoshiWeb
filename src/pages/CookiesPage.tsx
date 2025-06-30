import React, { useEffect, useState } from 'react';

function parseUserAgent(ua: string) {
  // Basic browser detection
  let browser = 'Unknown';
  let version = '';
  let os = 'Unknown';

  if (/Chrome\/(\d+\.\d+)/.test(ua) && !/Edge\//.test(ua) && !/OPR\//.test(ua)) {
    browser = 'Chrome';
    version = ua.match(/Chrome\/(\d+\.\d+)/)?.[1] || '';
  } else if (/Safari\/(\d+\.\d+)/.test(ua) && /Version\/(\d+\.\d+)/.test(ua)) {
    browser = 'Safari';
    version = ua.match(/Version\/(\d+\.\d+)/)?.[1] || '';
  } else if (/Firefox\/(\d+\.\d+)/.test(ua)) {
    browser = 'Firefox';
    version = ua.match(/Firefox\/(\d+\.\d+)/)?.[1] || '';
  } else if (/Edg\/(\d+\.\d+)/.test(ua)) {
    browser = 'Edge';
    version = ua.match(/Edg\/(\d+\.\d+)/)?.[1] || '';
  } else if (/OPR\/(\d+\.\d+)/.test(ua)) {
    browser = 'Opera';
    version = ua.match(/OPR\/(\d+\.\d+)/)?.[1] || '';
  }

  if (/Mac OS X ([\d_]+)/.test(ua)) {
    os = 'macOS ' + (ua.match(/Mac OS X ([\d_]+)/)?.[1].replace(/_/g, '.') || '');
  } else if (/Windows NT ([\d.]+)/.test(ua)) {
    os = 'Windows ' + (ua.match(/Windows NT ([\d.]+)/)?.[1] || '');
  } else if (/Linux/.test(ua)) {
    os = 'Linux';
  } else if (/iPhone OS ([\d_]+)/.test(ua)) {
    os = 'iOS ' + (ua.match(/iPhone OS ([\d_]+)/)?.[1].replace(/_/g, '.') || '');
  } else if (/Android ([\d.]+)/.test(ua)) {
    os = 'Android ' + (ua.match(/Android ([\d.]+)/)?.[1] || '');
  }

  return { browser, version, os };
}

// const IPINFO_TOKEN = process.env.REACT_APP_IPINFO_TOKEN;

const CookiesPage: React.FC = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [lastVisit, setLastVisit] = useState<string | null>(null);
  const [browserInfo, setBrowserInfo] = useState({ browser: '', version: '', os: '' });
  // const [ip, setIp] = useState('');
  // const [location, setLocation] = useState('');

  useEffect(() => {
    // Get and update visit count
    const count = parseInt(localStorage.getItem('visitCount') || '0', 10) + 1;
    setVisitCount(count);
    localStorage.setItem('visitCount', count.toString());

    // Get and update last visit
    const now = new Date().toLocaleString();
    setLastVisit(localStorage.getItem('lastVisit'));
    localStorage.setItem('lastVisit', now);

    // Get browser info
    setBrowserInfo(parseUserAgent(navigator.userAgent));

    // Fetch IP and location info
    // fetch(`https://ipinfo.io/json?token=${IPINFO_TOKEN}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setIp(data.ip);
    //     setLocation(`${data.city || ''}, ${data.region || ''}, ${data.country || ''}`);
    //   })
    //   .catch(() => {
    //     setIp('Unavailable');
    //     setLocation('Unavailable');
    //   });
  }, []);

  const clearData = () => {
    localStorage.removeItem('visitCount');
    localStorage.removeItem('lastVisit');
    setVisitCount(0);
    setLastVisit(null);
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', background: '#112240', color: '#e6f1ff', borderRadius: 12, padding: '2rem', boxShadow: '0 4px 24px rgba(100,255,218,0.08)' }}>
      <h1 style={{ color: '#64ffda' }}>🍪 Cookie Awareness</h1>
      <p>
        This page shows you <strong>exactly</strong> what a simple website cookie (or localStorage) can track about your visit—no server, no hidden tricks!
      </p>
      <ul style={{ textAlign: 'left', margin: '2rem 0' }}>
        <li><strong>Number of visits:</strong> {visitCount}</li>
        <li><strong>Last visit:</strong> {lastVisit ? lastVisit : 'This is your first visit!'}</li>
        <li><strong>Your browser:</strong> {browserInfo.browser} {browserInfo.version}</li>
        <li><strong>Your OS:</strong> {browserInfo.os}</li>
        {/* <li><strong>Your public IP:</strong> {ip}</li>
        <li><strong>Your approximate location:</strong> {location}</li> */}
      </ul>
      <button onClick={clearData} style={{ background: '#64ffda', color: '#0a192f', border: 'none', borderRadius: 6, padding: '0.7rem 1.5rem', fontWeight: 600, cursor: 'pointer', marginBottom: 16 }}>
        Clear My Data
      </button>
      <p style={{ fontSize: '0.95em', opacity: 0.8, marginTop: 24 }}>
        <span role="img" aria-label="info">ℹ️</span> This is just for education—real cookies and IP-based services can track even more, especially on big sites!
      </p>
    </div>
  );
};

export default CookiesPage;