import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaPaperPlane, FaSpinner, FaTimes, FaExpand, FaCompress } from 'react-icons/fa';
import './AIAssistant.css';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Jaytirth's AI assistant. I can answer questions about his work, experience, projects like HealthSathi, and his expertise in medical AI. What would you like to know?",
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const systemPrompt = `You are an AI assistant representing Jaytirth Joshi, a Medical AI innovator and CEO & Founder of HealthSathi. Here's key information about him:

BACKGROUND:
- High school student from Marietta, Georgia
- CEO & Founder of HealthSathi (AI-powered medical platform)
- Has a healthcare AI patent
- Leads a 15+ person startup team
- Spoken at Harvard, Microsoft, Emory, and other institutions
- Works with governments of US, India, China, UAE
- Multilingual (English, Gujarati, Chinese, Hindi)

EXPERTISE:
- AI/ML Subject Matter Expert (SME)
- Healthcare technology and medical innovation
- Medical AI, specifically Dr. Fatafat (AI medical report analyzer)
- Entrepreneurship and startup leadership
- Healthcare communication and patient education

ACHIEVEMENTS:
- Forbes Under 30 Nominee (Healthcare category)
- 2nd Place - YMB Pitch Competition
- Microsoft Youth Business Hackathon Winner
- HealthSathi has 10,000+ users
- Recognition from Fortune 500 companies (Microsoft, Apple, Google)

PROJECTS:
- HealthSathi: AI platform simplifying medical information
- Dr. Fatafat: AI that analyzes and explains medical reports
- Patent management system for healthcare innovations

Be helpful, knowledgeable, and enthusiastic about Jaytirth's work. Answer questions about his experience, projects, and expertise. If asked about technical details, demonstrate deep understanding of AI/ML and healthcare applications.`;

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('https://ai.hackclub.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.slice(-5).map(msg => ({ role: msg.role, content: msg.content })),
            { role: 'user', content: inputValue }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      const aiResponse = data.choices?.[0]?.message?.content || 'Sorry, I encountered an error. Please try again.';

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error connecting to the AI service. Please try again later.',
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const suggestedQuestions = [
    "Tell me about HealthSathi and Dr. Fatafat",
    "What's Jaytirth's experience with AI/ML?",
    "How does the medical report analyzer work?",
    "What recognition has Jaytirth received?",
    "What programming languages does Jaytirth use?"
  ];

  return (
    <>
      {/* AI Assistant Toggle Button */}
      <div className={`ai-assistant-toggle ${isOpen ? 'hidden' : ''}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="toggle-button"
          aria-label="Open AI Assistant"
        >
          <FaRobot />
          <span>Ask AI about Jaytirth</span>
        </button>
      </div>

      {/* AI Assistant Chat Window */}
      {isOpen && (
        <div className={`ai-assistant-container ${isExpanded ? 'expanded' : ''}`}>
          <div className="ai-assistant-header">
            <div className="header-info">
              <FaRobot className="header-icon" />
              <div>
                <h3>AI Assistant</h3>
                <span className="status">Ask me about Jaytirth's work</span>
              </div>
            </div>
            <div className="header-controls">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="control-button"
                aria-label={isExpanded ? "Minimize" : "Expand"}
              >
                {isExpanded ? <FaCompress /> : <FaExpand />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="control-button"
                aria-label="Close AI Assistant"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          <div className="ai-assistant-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.role}`}>
                <div className="message-content">
                  <div className="message-text">{message.content}</div>
                  <div className="message-time">{formatTime(message.timestamp)}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message assistant">
                <div className="message-content">
                  <div className="message-text">
                    <FaSpinner className="spinning" /> Thinking...
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="suggested-questions">
              <p>Try asking:</p>
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputValue(question)}
                  className="suggested-question"
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          <div className="ai-assistant-input">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about Jaytirth's work..."
              disabled={isLoading}
              className="message-input"
            />
            <button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="send-button"
              aria-label="Send message"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant; 