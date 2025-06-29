import React, { useState, useEffect } from 'react';

interface LinkedInProfile {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  headline: string;
  summary: string;
  location: {
    name: string;
  };
  industry: string;
  publicProfileUrl: string;
}

interface LinkedInData {
  profile: LinkedInProfile | null;
  loading: boolean;
  error: string | null;
}

const LinkedInData: React.FC = () => {
  const [data, setData] = useState<LinkedInData>({
    profile: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchLinkedInData = async () => {
      try {
        // Note: LinkedIn API requires OAuth authentication
        // For demo purposes, we'll show mock data that represents your profile
        // In production, you'd need to implement OAuth flow
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock LinkedIn data based on your actual profile
        const mockProfile: LinkedInProfile = {
          id: "jaytirthjoshi",
          firstName: "Jaytirth",
          lastName: "Joshi",
          profilePicture: "https://media.licdn.com/dms/image/C4E03AQHqXqXqXqXqXq/profile-displayphoto-shrink_800_800/0/1234567890?e=1234567890&v=beta&t=1234567890",
          headline: "CEO & Founder at HealthSathi | AI/ML SME | Healthcare Innovation",
          summary: "Passionate entrepreneur and AI innovator focused on bridging healthcare communication gaps through technology. Leading HealthSathi to revolutionize medical information accessibility.",
          location: {
            name: "Marietta, Georgia, United States"
          },
          industry: "Healthcare Technology",
          publicProfileUrl: "https://www.linkedin.com/in/jaytirthjoshi"
        };

        setData({
          profile: mockProfile,
          loading: false,
          error: null
        });
      } catch (error) {
        setData({
          profile: null,
          loading: false,
          error: 'Failed to load LinkedIn data'
        });
      }
    };

    fetchLinkedInData();
  }, []);

  if (data.loading) {
    return (
      <div className="linkedin-container">
        <div className="linkedin-loading">
          <div className="loading-spinner"></div>
          <p>Loading LinkedIn profile...</p>
        </div>
      </div>
    );
  }

  if (data.error) {
    return (
      <div className="linkedin-container">
        <div className="linkedin-error">
          <p>Unable to load LinkedIn data</p>
          <a href="https://www.linkedin.com/in/jaytirthjoshi" target="_blank" rel="noopener noreferrer">
            View Profile on LinkedIn
          </a>
        </div>
      </div>
    );
  }

  if (!data.profile) {
    return null;
  }

  return (
    <div className="linkedin-container">
      <div className="linkedin-header">
        <h3>LinkedIn Profile</h3>
        <a 
          href={data.profile.publicProfileUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          View Full Profile →
        </a>
      </div>
      
      <div className="linkedin-profile">
        <div className="profile-header">
          <div className="profile-info">
            <h4>{data.profile.firstName} {data.profile.lastName}</h4>
            <p className="headline">{data.profile.headline}</p>
            <p className="location">📍 {data.profile.location.name}</p>
            <p className="industry">🏢 {data.profile.industry}</p>
          </div>
        </div>
        
        <div className="profile-summary">
          <h5>About</h5>
          <p>{data.profile.summary}</p>
        </div>
        
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Team Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1</span>
            <span className="stat-label">Patent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInData; 