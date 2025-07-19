import React, { useState } from 'react';
import { FaSmile, FaFrown, FaMeh, FaHeart, FaThumbsUp, FaChartLine } from 'react-icons/fa';
import './SentimentAnalyzer.css';

interface SentimentResult {
  sentiment: 'positive' | 'negative' | 'neutral';
  confidence: number;
  emotions: string[];
  analysis: string;
}

const SentimentAnalyzer: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<SentimentResult | null>(null);
  const [recentAnalyses, setRecentAnalyses] = useState<Array<{ text: string; sentiment: string; timestamp: Date }>>([]);

  const analyzeSentiment = async () => {
    if (!feedback.trim() || isAnalyzing) return;

    setIsAnalyzing(true);
    
    try {
      const response = await fetch('https://ai.hackclub.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `You are an advanced sentiment analysis AI. Analyze the given text and return ONLY a JSON response with this exact format:
{
  "sentiment": "positive|negative|neutral",
  "confidence": 0.95,
  "emotions": ["excited", "impressed", "curious"],
  "analysis": "Brief explanation of the sentiment and emotional tone"
}

Be precise and accurate. The confidence should be between 0 and 1.`
            },
            {
              role: 'user',
              content: `Analyze the sentiment of this feedback about Jaytirth Joshi's portfolio: "${feedback}"`
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to analyze sentiment');
      }

      const data = await response.json();
      const aiResponse = data.choices?.[0]?.message?.content || '';
      
      try {
        // Extract JSON from the response
        const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const sentimentData = JSON.parse(jsonMatch[0]);
          setResult(sentimentData);
          
          // Add to recent analyses
          setRecentAnalyses(prev => [
            { text: feedback.substring(0, 50) + '...', sentiment: sentimentData.sentiment, timestamp: new Date() },
            ...prev.slice(0, 4) // Keep only 5 recent analyses
          ]);
        } else {
          throw new Error('Invalid JSON response');
        }
      } catch (parseError) {
        // Fallback analysis
        const sentiment = feedback.toLowerCase().includes('great') || feedback.toLowerCase().includes('amazing') || feedback.toLowerCase().includes('excellent') ? 'positive' : 
                         feedback.toLowerCase().includes('bad') || feedback.toLowerCase().includes('terrible') || feedback.toLowerCase().includes('awful') ? 'negative' : 'neutral';
        
        setResult({
          sentiment: sentiment as 'positive' | 'negative' | 'neutral',
          confidence: 0.7,
          emotions: sentiment === 'positive' ? ['positive'] : sentiment === 'negative' ? ['negative'] : ['neutral'],
          analysis: 'Basic sentiment analysis performed'
        });
      }
    } catch (error) {
      console.error('Sentiment analysis error:', error);
      setResult({
        sentiment: 'neutral',
        confidence: 0.5,
        emotions: ['uncertain'],
        analysis: 'Unable to analyze sentiment at this time'
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return <FaSmile className="sentiment-icon positive" />;
      case 'negative': return <FaFrown className="sentiment-icon negative" />;
      default: return <FaMeh className="sentiment-icon neutral" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return '#10b981';
      case 'negative': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getConfidenceBar = (confidence: number) => {
    return (
      <div className="confidence-bar">
        <div 
          className="confidence-fill" 
          style={{ 
            width: `${confidence * 100}%`,
            backgroundColor: result ? getSentimentColor(result.sentiment) : '#6b7280'
          }}
        />
      </div>
    );
  };

  return (
    <div className="sentiment-analyzer">
      <div className="analyzer-header">
        <h3>
          <FaChartLine className="header-icon" />
          AI Sentiment Analysis
        </h3>
        <p>Share your thoughts about Jaytirth's work and see real-time AI sentiment analysis</p>
      </div>

      <div className="analyzer-input">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Share your feedback about Jaytirth's portfolio, projects, or expertise..."
          rows={4}
          maxLength={500}
          disabled={isAnalyzing}
        />
        <div className="input-footer">
          <span className="char-count">{feedback.length}/500</span>
          <button
            onClick={analyzeSentiment}
            disabled={!feedback.trim() || isAnalyzing}
            className="analyze-button"
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Sentiment'}
          </button>
        </div>
      </div>

      {result && (
        <div className="sentiment-result">
          <div className="result-header">
            {getSentimentIcon(result.sentiment)}
            <div className="sentiment-info">
              <span className="sentiment-label">{result.sentiment.toUpperCase()}</span>
              <span className="confidence-text">Confidence: {(result.confidence * 100).toFixed(1)}%</span>
            </div>
          </div>
          
          {getConfidenceBar(result.confidence)}
          
          <div className="emotions-tags">
            {result.emotions.map((emotion, index) => (
              <span key={index} className="emotion-tag">
                {emotion}
              </span>
            ))}
          </div>
          
          <p className="analysis-text">{result.analysis}</p>
        </div>
      )}

      {recentAnalyses.length > 0 && (
        <div className="recent-analyses">
          <h4>Recent Sentiment Trends</h4>
          <div className="analyses-list">
            {recentAnalyses.map((analysis, index) => (
              <div key={index} className="analysis-item">
                {getSentimentIcon(analysis.sentiment)}
                <span className="analysis-preview">{analysis.text}</span>
                <span className="analysis-time">
                  {analysis.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="analyzer-features">
        <div className="feature-item">
          <FaHeart className="feature-icon" />
          <span>Emotion Detection</span>
        </div>
        <div className="feature-item">
          <FaThumbsUp className="feature-icon" />
          <span>Confidence Scoring</span>
        </div>
        <div className="feature-item">
          <FaChartLine className="feature-icon" />
          <span>Real-time Analysis</span>
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalyzer; 