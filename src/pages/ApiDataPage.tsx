import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './ApiDataPage.css';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

const ApiDataPage: React.FC = () => {
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch GitHub repositories
        const githubResponse = await fetch('https://api.github.com/users/JaytirthJOSHI/repos?sort=updated&per_page=6');
        const githubData = await githubResponse.json();
        
        if (githubResponse.ok) {
          setGithubRepos(githubData);
        } else {
          console.error('GitHub API error:', githubData);
          setError('Unable to fetch GitHub data');
        }

      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="api-page">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Fetching GitHub data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="api-page">
        <div className="error-message">
          <h2>Error Loading Data</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="api-page">
      <div className="api-header">
        <h1>GitHub Activity</h1>
        <p>Real-time data from my GitHub repositories showcasing my latest projects and contributions</p>
      </div>

      <div className="api-content">
        <div className="github-section">
          <h2>My GitHub Projects</h2>
          <div className="repos-grid">
            {githubRepos.map(repo => (
              <div key={repo.id} className="repo-card">
                <div className="repo-header">
                  <h3>{repo.name}</h3>
                  <div className="repo-stats">
                    <span className="stars">⭐ {repo.stargazers_count}</span>
                    {repo.language && <span className="language">{repo.language}</span>}
                  </div>
                </div>
                <p className="repo-description">
                  {repo.description || 'No description available'}
                </p>
                <div className="repo-footer">
                  <span className="updated">Updated: {formatDate(repo.updated_at)}</span>
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="repo-link"
                  >
                    <FaExternalLinkAlt /> View Repository
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="api-info">
        <h3>Technical Implementation</h3>
        <div className="tech-details">
          <div className="tech-item">
            <FaCode />
            <div>
              <h4>GitHub API</h4>
              <p>Fetches real-time repository data from GitHub's REST API</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDataPage; 