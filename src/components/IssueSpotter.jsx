import React, { useState } from 'react';
import './IssueSpotter.css';

/**
 * IssueSpotter Component
 * A learning activity where users identify accessibility issues in code or visual snippets.
 * 
 * Props:
 * - issues: Array<{ id: string, title: string, snippet: string, options: string[], correctOption: string, explanation: string }>
 * - title: string
 */
export default function IssueSpotter({ issues = [], title = 'Interactive: Identify the Issue' }) {
  const [currentIssueIndex, setCurrentIssueIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentIssue = issues[currentIssueIndex];

  const handleOptionSelect = (option) => {
    if (showFeedback) return;
    setSelectedOption(option);
  };

  const handleCheck = () => {
    setShowFeedback(true);
    if (selectedOption === currentIssue.correctOption) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIssueIndex < issues.length - 1) {
      setCurrentIssueIndex(currentIssueIndex + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIssueIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="issue-spotter-container completed">
        <h3>Activity Complete!</h3>
        <p className="score-summary" role="status">
          You identified {score} out of {issues.length} issues correctly.
        </p>
        <button onClick={handleReset} className="reset-btn">Try Again</button>
      </div>
    );
  }

  return (
    <section className="issue-spotter-container" aria-labelledby="issue-spotter-title">
      <h3 id="issue-spotter-title">{title}</h3>
      <div className="issue-counter">Issue {currentIssueIndex + 1} of {issues.length}</div>
      
      <div className="issue-content">
        <div className="snippet-container">
          <p className="snippet-label">Review the snippet below:</p>
          <pre className="code-snippet">
            <code>{currentIssue.snippet}</code>
          </pre>
        </div>

        <fieldset className="options-container" disabled={showFeedback}>
          <legend>Which accessibility issue is present here?</legend>
          {currentIssue.options.map((option, index) => (
            <label key={index} className={`option-label ${selectedOption === option ? 'selected' : ''}`}>
              <input
                type="radio"
                name="issue-option"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
              />
              {option}
            </label>
          ))}
        </fieldset>
      </div>

      <div className="issue-actions">
        {!showFeedback ? (
          <button 
            onClick={handleCheck} 
            disabled={!selectedOption}
            className="check-btn"
          >
            Check Answer
          </button>
        ) : (
          <div className="feedback-area" role="alert">
            <p className={`feedback-status ${selectedOption === currentIssue.correctOption ? 'correct' : 'incorrect'}`}>
              {selectedOption === currentIssue.correctOption ? '✅ Correct!' : '❌ Incorrect.'}
            </p>
            <p className="explanation"><strong>Explanation:</strong> {currentIssue.explanation}</p>
            <button onClick={handleNext} className="next-btn">
              {currentIssueIndex < issues.length - 1 ? 'Next Issue' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
