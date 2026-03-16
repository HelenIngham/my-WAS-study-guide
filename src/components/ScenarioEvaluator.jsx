// components/ScenarioEvaluator.jsx
import React, { useState } from 'react';
import './ScenarioEvaluator.css';

/**
 * ScenarioEvaluator Component
 * Allows users to evaluate accessibility scenarios as 'Failure' or 'Bad Practice'.
 * 
 * Props:
 * - scenarios: Array<{ id, text, type: 'failure' | 'bad-practice', explanation }>
 * - title?: string
 */
const ScenarioEvaluator = ({ scenarios = [], title = "Activity: Failure or Bad Practice?" }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (scenarioId, choice) => {
    if (showResults) return;
    setUserAnswers(prev => ({ ...prev, [scenarioId]: choice }));
  };

  const getScore = () => {
    return scenarios.filter(s => userAnswers[s.id] === s.type).length;
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  return (
    <section className="scenario-evaluator" aria-labelledby="eval-title">
      <h2 id="eval-title">{title}</h2>
      <p>Assess each scenario and decide if it is a normative <strong>Failure</strong> of WCAG or simply a <strong>Bad Practice</strong>.</p>
      
      <div className="scenario-list">
        {scenarios.map((scenario) => {
          const isSelected = userAnswers[scenario.id];
          const isCorrect = userAnswers[scenario.id] === scenario.type;
          
          let cardClass = "scenario-card";
          if (showResults) {
            cardClass += isCorrect ? " correct" : " incorrect";
          }

          return (
            <div key={scenario.id} className={cardClass}>
              <p className="scenario-text">{scenario.text}</p>
              
              <div className="scenario-options" role="radiogroup" aria-label={`Evaluation for: ${scenario.text}`}>
                <button
                  className={`eval-btn ${userAnswers[scenario.id] === 'failure' ? 'selected' : ''}`}
                  onClick={() => handleSelect(scenario.id, 'failure')}
                  disabled={showResults}
                  aria-pressed={userAnswers[scenario.id] === 'failure'}
                >
                  Failure
                </button>
                <button
                  className={`eval-btn ${userAnswers[scenario.id] === 'bad-practice' ? 'selected' : ''}`}
                  onClick={() => handleSelect(scenario.id, 'bad-practice')}
                  disabled={showResults}
                  aria-pressed={userAnswers[scenario.id] === 'bad-practice'}
                >
                  Bad Practice
                </button>
              </div>

              {showResults && (
                <div className={`feedback ${isCorrect ? 'success' : 'error'}`} role="alert">
                  <span className="feedback-header">
                    {isCorrect ? '✓ Correct' : '✗ Incorrect'} - {scenario.type === 'failure' ? 'Failure' : 'Bad Practice'}
                  </span>
                  <p>{scenario.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="eval-summary">
        {!showResults ? (
          <button 
            className="reset-btn" 
            onClick={() => setShowResults(true)}
            disabled={Object.keys(userAnswers).length < scenarios.length}
          >
            Check All Scenarios
          </button>
        ) : (
          <div>
            <p role="status">You identified {getScore()} out of {scenarios.length} correctly.</p>
            <button className="reset-btn" onClick={handleReset}>Try Again</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScenarioEvaluator;
