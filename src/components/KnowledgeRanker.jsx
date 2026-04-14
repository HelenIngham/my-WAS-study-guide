import React, { useState, useEffect } from 'react';
import './KnowledgeRanker.css';

const KnowledgeRanker = ({ topics }) => {
  const [rankings, setRankings] = useState(() => {
    const saved = localStorage.getItem('was-knowledge-rankings');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('was-knowledge-rankings', JSON.stringify(rankings));
  }, [rankings]);

  const handleRankChange = (topicPath, level) => {
    setRankings((prev) => ({
      ...prev,
      [topicPath]: level,
    }));
  };

  const levels = [
    { value: 'red', label: 'Needs Study', class: 'ranker-option--red', icon: '🔴' },
    { value: 'amber', label: 'Getting There', class: 'ranker-option--amber', icon: '🟡' },
    { value: 'green', label: 'Mastered', class: 'ranker-option--green', icon: '🟢' },
  ];

  const stats = Object.values(rankings).reduce(
    (acc, val) => {
      acc[val]++;
      return acc;
    },
    { red: 0, amber: 0, green: 0 }
  );

  return (
    <div className="knowledge-ranker">
      <div className="ranker-list">
        {topics.map((topic) => (
          <div key={topic.path} className="ranker-item">
            <span className="ranker-item__label" id={`label-${topic.path.replace(/\//g, '-')}`}>
              {topic.label}
            </span>
            <div 
              className="ranker-options" 
              role="radiogroup" 
              aria-labelledby={`label-${topic.path.replace(/\//g, '-')}`}
            >
              {levels.map((level) => (
                <label 
                  key={level.value} 
                  className={`ranker-option ${level.class}`}
                >
                  <input
                    type="radio"
                    name={`rank-${topic.path}`}
                    value={level.value}
                    checked={rankings[topic.path] === level.value}
                    onChange={() => handleRankChange(topic.path, level.value)}
                    aria-label={`${level.label} for ${topic.label}`}
                  />
                  <span className="ranker-option__text" aria-hidden="true">
                    {level.icon} {level.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="ranker-summary" aria-live="polite">
        <h2>Your Progress Summary</h2>
        <div className="ranker-stats">
          <div className="stat-item">
            <span className="stat-value" style={{ color: 'var(--red-800)' }}>{stats.red}</span>
            <span className="stat-label">Needs Study</span>
          </div>
          <div className="stat-item">
            <span className="stat-value" style={{ color: 'var(--orange-800)' }}>{stats.amber}</span>
            <span className="stat-label">Getting There</span>
          </div>
          <div className="stat-item">
            <span className="stat-value" style={{ color: 'var(--green-800)' }}>{stats.green}</span>
            <span className="stat-label">Mastered</span>
          </div>
        </div>
        <p style={{ marginTop: '1.5rem', fontStyle: 'italic' }}>
          Your rankings are saved locally in your browser.
        </p>
        <button 
          onClick={() => { if(window.confirm('Reset all rankings?')) setRankings({}); }}
          className="btn btn-secondary"
          style={{ marginTop: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
        >
          Reset All Rankings
        </button>
      </div>
    </div>
  );
};

export default KnowledgeRanker;
