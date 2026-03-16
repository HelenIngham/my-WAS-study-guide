// components/PrioritizationChallenge.jsx
import React, { useState } from 'react';
import './PrioritizationChallenge.css';

/**
 * PrioritizationChallenge Component
 * A new learning activity where users rank accessibility issues based on a given scenario.
 */
const PrioritizationChallenge = ({ scenario, issues = [] }) => {
  const [userRanking, setUserRanking] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const toggleIssue = (issue) => {
    if (userRanking.some(i => i.id === issue.id)) {
      setUserRanking(userRanking.filter(i => i.id !== issue.id));
    } else {
      setUserRanking([...userRanking, issue]);
    }
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const newRanking = [...userRanking];
    [newRanking[index - 1], newRanking[index]] = [newRanking[index], newRanking[index - 1]];
    setUserRanking(newRanking);
  };

  const moveDown = (index) => {
    if (index === userRanking.length - 1) return;
    const newRanking = [...userRanking];
    [newRanking[index + 1], newRanking[index]] = [newRanking[index], newRanking[index + 1]];
    setUserRanking(newRanking);
  };

  const checkRanking = () => {
    setShowFeedback(true);
  };

  const resetRanking = () => {
    setUserRanking([]);
    setShowFeedback(false);
  };

  const isCorrect = userRanking.length === issues.length && 
    userRanking.every((issue, index) => issue.correctRank === index + 1);

  return (
    <section className="prioritization-challenge" aria-labelledby="challenge-title">
      <h3 id="challenge-title">Activity: Prioritization Challenge</h3>
      <div className="scenario-card">
        <h4>Scenario</h4>
        <p>{scenario}</p>
      </div>

      <div className="challenge-columns">
        <div className="available-issues">
          <h4>Select Issues to Rank</h4>
          <div className="issue-buttons">
            {issues.map((issue) => (
              <button
                key={issue.id}
                className={`issue-select-btn ${userRanking.some(i => i.id === issue.id) ? 'selected' : ''}`}
                onClick={() => toggleIssue(issue)}
                disabled={showFeedback}
                aria-pressed={userRanking.some(i => i.id === issue.id)}
              >
                {issue.title}
              </button>
            ))}
          </div>
        </div>

        <div className="ranking-area">
          <h4>Your Priority List (Top to Bottom)</h4>
          <ol className="user-ranking-list">
            {userRanking.map((issue, index) => (
              <li key={issue.id} className="ranking-item">
                <span className="rank-number">{index + 1}</span>
                <span className="rank-title">{issue.title}</span>
                <div className="rank-controls">
                  <button 
                    onClick={() => moveUp(index)} 
                    disabled={index === 0 || showFeedback}
                    aria-label={`Move ${issue.title} up`}
                  >
                    ↑
                  </button>
                  <button 
                    onClick={() => moveDown(index)} 
                    disabled={index === userRanking.length - 1 || showFeedback}
                    aria-label={`Move ${issue.title} down`}
                  >
                    ↓
                  </button>
                  <button 
                    onClick={() => toggleIssue(issue)} 
                    disabled={showFeedback}
                    aria-label={`Remove ${issue.title}`}
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
            {userRanking.length === 0 && (
              <li className="ranking-placeholder">Select issues from the left to start ranking.</li>
            )}
          </ol>
        </div>
      </div>

      <div className="challenge-actions">
        <button 
          className="check-btn" 
          onClick={checkRanking} 
          disabled={userRanking.length < issues.length || showFeedback}
        >
          Check My Priority
        </button>
        <button className="reset-btn" onClick={resetRanking}>Reset</button>
      </div>

      {showFeedback && (
        <div className={`feedback-panel ${isCorrect ? 'correct' : 'incorrect'}`} aria-live="polite">
          <h4>{isCorrect ? 'Great Job!' : 'Consider Your Choices'}</h4>
          <p>
            {isCorrect 
              ? 'Your prioritization aligns well with accessibility best practices. High-impact blockers are addressed first, followed by high-traffic pages and low-effort fixes.' 
              : 'While prioritization can be subjective, standard practice is to prioritize high-impact blockers on critical paths first.'}
          </p>
          {!isCorrect && (
            <div className="correct-order">
              <h5>Recommended Order:</h5>
              <ol>
                {[...issues].sort((a, b) => a.correctRank - b.correctRank).map(issue => (
                  <li key={issue.id}>{issue.title}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default PrioritizationChallenge;
