// components/SuccessCriteriaMapper.jsx
import React, { useState } from 'react';
import './SuccessCriteriaMapper.css';

/**
 * SuccessCriteriaMapper component
 * 
 * An interactive activity where users map specific accessibility issues (scenarios) 
 * to the correct WCAG Success Criterion.
 * 
 * Props:
 * - scenarios: Array<{ id: string, description: string, options: string[], correctOption: string, explanation: string }>
 * - title?: string
 */
export default function SuccessCriteriaMapper({
  scenarios = [],
  title = 'WCAG Success Criteria Mapping Activity',
}) {
  const [userSelections, setUserSelections] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (scenarioId, option) => {
    if (submitted) return;
    setUserSelections((prev) => ({
      ...prev,
      [scenarioId]: option,
    }));
  };

  const isCorrect = (scenarioId) => {
    const scenario = scenarios.find((s) => s.id === scenarioId);
    return userSelections[scenarioId] === scenario.correctOption;
  };

  const calculateScore = () => {
    return scenarios.reduce((acc, s) => (isCorrect(s.id) ? acc + 1 : acc), 0);
  };

  const handleReset = () => {
    setUserSelections({});
    setSubmitted(false);
  };

  return (
    <section className="sc-mapper-container" aria-labelledby="sc-mapper-title">
      <h2 id="sc-mapper-title" className="sc-mapper-heading">{title}</h2>
      <p className="sc-mapper-intro">
        Read each scenario and select the most appropriate WCAG Success Criterion it relates to.
      </p>

      <div className="sc-scenarios-list">
        {scenarios.map((scenario) => (
          <fieldset key={scenario.id} className={`sc-scenario-item ${submitted ? (isCorrect(scenario.id) ? 'sc-correct' : 'sc-incorrect') : ''}`}>
            <legend className="sc-scenario-desc"><strong>Scenario:</strong> {scenario.description}</legend>
            
            <div className="sc-options-grid">
              {scenario.options.map((option) => (
                <label key={option} className={`sc-option-label ${userSelections[scenario.id] === option ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name={`scenario-${scenario.id}`}
                    value={option}
                    checked={userSelections[scenario.id] === option}
                    onChange={() => handleSelect(scenario.id, option)}
                    disabled={submitted}
                  />
                  {option}
                </label>
              ))}
            </div>

            {submitted && (
              <div className="sc-feedback" role="alert">
                <p>
                  <strong>{isCorrect(scenario.id) ? 'Correct!' : 'Incorrect.'}</strong>
                  {!isCorrect(scenario.id) && ` Correct answer: ${scenario.correctOption}.`}
                </p>
                <p className="sc-explanation">{scenario.explanation}</p>
              </div>
            )}
          </fieldset>
        ))}
      </div>

      <div className="sc-mapper-actions">
        {!submitted ? (
          <button 
            className="sc-submit-btn" 
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(userSelections).length < scenarios.length}
          >
            Check Answers
          </button>
        ) : (
          <div className="sc-results-summary">
            <p className="sc-score" role="status">
              You correctly mapped {calculateScore()} out of {scenarios.length} scenarios.
            </p>
            <button className="sc-reset-btn" onClick={handleReset}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
