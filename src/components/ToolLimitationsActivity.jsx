// components/ToolLimitationsActivity.jsx
import React, { useState } from 'react';
import './ToolLimitationsActivity.css';

/**
 * ToolLimitationsActivity Component
 * Interactive activity where users classify tasks as suitable for 
 * 'Automated Tools', 'Manual Testing', or 'Both'.
 * 
 * Props:
 * - tasks: Array<{ id, text, category: 'automated' | 'manual' | 'both', explanation }>
 * - title?: string
 */
const ToolLimitationsActivity = ({ 
  tasks = [], 
  title = "Activity: Automated vs. Manual Testing" 
}) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (taskId, choice) => {
    if (showResults) return;
    setUserAnswers(prev => ({ ...prev, [taskId]: choice }));
  };

  const getScore = () => {
    return tasks.filter(t => userAnswers[t.id] === t.category).length;
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  const categories = [
    { id: 'automated', label: 'Automated' },
    { id: 'manual', label: 'Manual' },
    { id: 'both', label: 'Both' }
  ];

  return (
    <section className="tool-limitations-activity" aria-labelledby="tla-title">
      <h2 id="tla-title" className="tla-heading">{title}</h2>
      <p className="tla-intro">Determine whether the following accessibility checks can be performed by <strong>Automated Tools</strong>, require <strong>Manual Testing</strong>, or a combination of <strong>Both</strong>.</p>
      
      <div className="tla-list">
        {tasks.map((task) => {
          const isSelected = userAnswers[task.id];
          const isCorrect = userAnswers[task.id] === task.category;
          
          let cardClass = "tla-card";
          if (showResults) {
            cardClass += isCorrect ? " tla-correct" : " tla-incorrect";
          }

          return (
            <div key={task.id} className={cardClass}>
              <p className="tla-task-text">{task.text}</p>
              
              <div className="tla-options" role="radiogroup" aria-label={`Testing method for: ${task.text}`}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`tla-btn ${userAnswers[task.id] === cat.id ? 'tla-selected' : ''}`}
                    onClick={() => handleSelect(task.id, cat.id)}
                    disabled={showResults}
                    aria-pressed={userAnswers[task.id] === cat.id}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {showResults && (
                <div className={`tla-feedback ${isCorrect ? 'tla-success' : 'tla-error'}`} role="alert">
                  <p className="tla-feedback-header">
                    <strong>{isCorrect ? '✓ Correct' : '✗ Incorrect'}</strong> - {categories.find(c => c.id === task.category).label}
                  </p>
                  <p className="tla-explanation">{task.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="tla-summary">
        {!showResults ? (
          <button 
            className="tla-submit-btn" 
            onClick={() => setShowResults(true)}
            disabled={Object.keys(userAnswers).length < tasks.length}
          >
            Check All Tasks
          </button>
        ) : (
          <div className="tla-results-summary">
            <p className="tla-score" role="status">You correctly identified {getScore()} out of {tasks.length} tasks.</p>
            <button className="tla-reset-btn" onClick={handleReset}>Try Again</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolLimitationsActivity;
