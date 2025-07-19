import React, { useState } from 'react';
import { FaStethoscope, FaBrain, FaMagic, FaDownload, FaCopy, FaSpinner } from 'react-icons/fa';
import './MedicalAIGenerator.css';

interface GeneratedContent {
  type: string;
  title: string;
  content: string;
  timestamp: Date;
  wordCount: number;
}

const MedicalAIGenerator: React.FC = () => {
  const [selectedType, setSelectedType] = useState('explanation');
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [recentGenerations, setRecentGenerations] = useState<GeneratedContent[]>([]);

  const contentTypes = [
    { id: 'explanation', label: 'Medical Explanation', icon: FaStethoscope, description: 'Simplify complex medical terms' },
    { id: 'summary', label: 'Research Summary', icon: FaBrain, description: 'Summarize medical research' },
    { id: 'patient-guide', label: 'Patient Guide', icon: FaMagic, description: 'Create patient education content' },
    { id: 'diagnostic-aid', label: 'Diagnostic Aid', icon: FaStethoscope, description: 'Generate diagnostic insights' }
  ];

  const generateContent = async () => {
    if (!topic.trim() || isGenerating) return;

    setIsGenerating(true);

    const prompts = {
      explanation: `You are a medical AI expert like Dr. Fatafat. Explain "${topic}" in simple, patient-friendly language. Break down complex medical terms and make it easy to understand for non-medical people. Include what it means, why it matters, and any important considerations.`,
      summary: `You are a medical AI research assistant. Create a concise, professional summary of recent research or findings related to "${topic}". Include key findings, implications, and clinical relevance.`,
      'patient-guide': `You are creating patient education content about "${topic}". Write a comprehensive but accessible guide that helps patients understand their condition, treatment options, and what to expect. Use encouraging, supportive language.`,
      'diagnostic-aid': `You are a medical AI diagnostic assistant. Provide insights about "${topic}" including common symptoms, diagnostic approaches, differential diagnoses, and when to seek immediate medical attention. Note: This is for educational purposes only.`
    };

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
              content: `You are Jaytirth Joshi's medical AI system, similar to Dr. Fatafat. You have expertise in healthcare AI, medical communication, and patient education. Always provide accurate, helpful, and accessible medical information while emphasizing that this is educational content and not a substitute for professional medical advice.`
            },
            {
              role: 'user',
              content: prompts[selectedType as keyof typeof prompts]
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const data = await response.json();
      const aiResponse = data.choices?.[0]?.message?.content || 'Sorry, I encountered an error generating content.';

      const content: GeneratedContent = {
        type: selectedType,
        title: `${contentTypes.find(t => t.id === selectedType)?.label}: ${topic}`,
        content: aiResponse,
        timestamp: new Date(),
        wordCount: aiResponse.split(' ').length
      };

      setGeneratedContent(content);
      setRecentGenerations(prev => [content, ...prev.slice(0, 4)]); // Keep 5 recent generations
    } catch (error) {
      console.error('Content generation error:', error);
      const errorContent: GeneratedContent = {
        type: selectedType,
        title: `Error generating content for: ${topic}`,
        content: 'Sorry, I encountered an error while generating content. Please try again with a different topic or content type.',
        timestamp: new Date(),
        wordCount: 0
      };
      setGeneratedContent(errorContent);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  const downloadAsText = (content: GeneratedContent) => {
    const element = document.createElement('a');
    const file = new Blob([`${content.title}\n\n${content.content}`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${content.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      generateContent();
    }
  };

  return (
    <div className="medical-ai-generator">
      <div className="generator-header">
        <h3>
          <FaBrain className="header-icon" />
          Medical AI Content Generator
        </h3>
        <p>Experience Jaytirth's medical AI expertise - Generate patient-friendly explanations and healthcare content</p>
      </div>

      <div className="content-types">
        {contentTypes.map(type => (
          <button
            key={type.id}
            className={`type-button ${selectedType === type.id ? 'active' : ''}`}
            onClick={() => setSelectedType(type.id)}
          >
            <type.icon className="type-icon" />
            <div className="type-info">
              <span className="type-label">{type.label}</span>
              <span className="type-description">{type.description}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="generator-input">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a medical topic (e.g., 'diabetes', 'MRI scan', 'blood pressure')..."
          disabled={isGenerating}
          maxLength={100}
        />
        <button
          onClick={generateContent}
          disabled={!topic.trim() || isGenerating}
          className="generate-button"
        >
          {isGenerating ? (
            <>
              <FaSpinner className="spinning" />
              Generating...
            </>
          ) : (
            <>
              <FaMagic />
              Generate
            </>
          )}
        </button>
      </div>

      {generatedContent && (
        <div className="generated-content">
          <div className="content-header">
            <h4>{generatedContent.title}</h4>
            <div className="content-meta">
              <span>{generatedContent.wordCount} words</span>
              <span>{generatedContent.timestamp.toLocaleTimeString()}</span>
            </div>
          </div>
          
          <div className="content-body">
            <p>{generatedContent.content}</p>
          </div>
          
          <div className="content-actions">
            <button
              onClick={() => copyToClipboard(generatedContent.content)}
              className="action-button"
            >
              <FaCopy />
              Copy
            </button>
            <button
              onClick={() => downloadAsText(generatedContent)}
              className="action-button"
            >
              <FaDownload />
              Download
            </button>
          </div>
          
          <div className="ai-disclaimer">
            <p><strong>Disclaimer:</strong> This content is generated by AI for educational purposes only. Always consult healthcare professionals for medical advice.</p>
          </div>
        </div>
      )}

      {recentGenerations.length > 0 && (
        <div className="recent-generations">
          <h4>Recent Generations</h4>
          <div className="generations-list">
            {recentGenerations.map((generation, index) => (
              <div
                key={index}
                className="generation-item"
                onClick={() => setGeneratedContent(generation)}
              >
                <div className="generation-info">
                  <span className="generation-title">{generation.title}</span>
                  <span className="generation-meta">
                    {generation.wordCount} words • {generation.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <div className="generation-type">
                  {contentTypes.find(t => t.id === generation.type)?.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="generator-features">
        <div className="feature-showcase">
          <h4>AI Capabilities Demonstrated</h4>
          <div className="capabilities-grid">
            <div className="capability">
              <FaStethoscope className="capability-icon" />
              <span>Medical Knowledge</span>
            </div>
            <div className="capability">
              <FaBrain className="capability-icon" />
              <span>NLP Processing</span>
            </div>
            <div className="capability">
              <FaMagic className="capability-icon" />
              <span>Content Generation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalAIGenerator; 