import React, { useState, useEffect } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
}

const GitHubStats: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats
        const statsResponse = await fetch('https://api.github.com/users/JaytirthJOSHI');
        if (!statsResponse.ok) {
          throw new Error('Failed to fetch GitHub stats');
        }
        const statsData = await statsResponse.json();
        setStats(statsData);

        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/JaytirthJOSHI/repos?sort=updated&per_page=6');
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="github-stats">
        <h3>GitHub Statistics</h3>
        <p>Loading GitHub data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="github-stats">
        <h3>GitHub Statistics</h3>
        <p>Error loading GitHub data: {error}</p>
      </div>
    );
  }

  // Count languages
  const languageCounts = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const topLanguages = Object.entries(languageCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  return (
    <div className="github-stats">
      <h3>GitHub Statistics</h3>
      
      {stats && (
        <div className="stats-overview">
          <div className="stat-item">
            <span className="stat-number">{stats.public_repos}</span>
            <span className="stat-label">Repositories</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.following}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>
      )}

      {topLanguages.length > 0 && (
        <div className="languages-section">
          <h4>Top Languages</h4>
          <div className="languages-grid">
            {topLanguages.map(([language, count]) => (
              <div key={language} className="language-item">
                <span className="language-name">{language}</span>
                <span className="language-count">{count} repos</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="repos-section">
        <h4>Recent Repositories</h4>
        <div className="repos-grid">
          {repos.map(repo => (
            <div key={repo.id} className="repo-item">
              <h5>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h5>
              {repo.description && <p>{repo.description}</p>}
              <div className="repo-meta">
                {repo.language && <span className="repo-language">{repo.language}</span>}
                <span className="repo-stars">⭐ {repo.stargazers_count}</span>
                <span className="repo-forks">🍴 {repo.forks_count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="github-link">
        <a href="https://github.com/JaytirthJOSHI" target="_blank" rel="noopener noreferrer">
          View Full GitHub Profile →
        </a>
      </div>
    </div>
  );
};

export default GitHubStats; 