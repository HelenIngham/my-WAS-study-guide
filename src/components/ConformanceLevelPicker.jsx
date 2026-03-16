import React, { useState } from 'react';
import './ConformanceLevelPicker.css';

/**
 * ConformanceLevelPicker: A learning activity to choose the correct conformance level 
 * based on specific scenarios.
 * 
 * Props:
 * - scenarios: Array<{ id: string, context: string, targetLevel: 'A' | 'AA' | 'AAA' | 'EN 301 549' | 'None', rationale: string }>
 * - title?: string
 */
export default function ConformanceLevelPicker({
  scenarios = [],
  title = 'Practice: Identifying Conformance Targets',
}) {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const scenario = scenarios[currentScenarioIndex];
  const levels = ['A', 'AA', 'AAA', 'EN 301 549'];

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  const handleCheck = () => {
    if (!selectedLevel) return;
    setShowFeedback(true);
    if (selectedLevel === scenario.targetLevel) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setSelectedLevel('');
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentScenarioIndex(0);
    setSelectedLevel('');
    setShowFeedback(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <section className="conformance-picker finished" aria-labelledby="picker-title">
        <h2 id="picker-title">{title}</h2>
        <div className="feedback-content" role="status">
          <p>Activity Complete!</p>
          <p>You correctly identified {score} out of {scenarios.length} targets.</p>
          <button className="reset-btn" onClick={handleReset}>Try Again</button>
        </div>
      </section>
    );
  }

  return (
    <section className="conformance-picker" aria-labelledby="picker-title">
      <h2 id="picker-title">{title}</h2>
      <div className="scenario-container">
        <p className="scenario-count">Scenario {currentScenarioIndex + 1} of {scenarios.length}</p>
        <p className="scenario-context">{scenario.context}</p>
      </div>

      <div className="level-options" role="radiogroup" aria-labelledby="options-label">
        <p id="options-label" className="visually-hidden">Select the appropriate conformance level</p>
        {levels.map((level) => (
          <button
            key={level}
            className={`level-btn ${selectedLevel === level ? 'selected' : ''}`}
            onClick={() => handleLevelSelect(level)}
            disabled={showFeedback}
            aria-pressed={selectedLevel === level}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="actions">
        {!showFeedback ? (
          <button 
            className="check-btn" 
            onClick={handleCheck} 
            disabled={!selectedLevel}
          >
            Check Answer
          </button>
        ) : (
          <button className="next-btn" onClick={handleNext}>
            {currentScenarioIndex < scenarios.length - 1 ? 'Next Scenario' : 'View Results'}
          </button>
        )}
      </div>

      {showFeedback && (
        <div className={`feedback-box ${selectedLevel === scenario.targetLevel ? 'correct' : 'incorrect'}`} role="status">
          <p className="feedback-text">
            {selectedLevel === scenario.targetLevel ? 'Correct!' : 'Incorrect.'}
          </p>
          <p className="rationale">
            <strong>Target: {scenario.targetLevel}</strong><br />
            {scenario.rationale}
          </p>
        </div>
      )}
    </section>
  );
}
