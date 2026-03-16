// components/RemediationStrategyPicker.jsx
import React, { useState } from 'react';
import './RemediationStrategyPicker.css';

/**
 * RemediationStrategyPicker Component
 * A new learning activity to help users choose the best remediation strategy based on constraints.
 * 
 * Props:
 * - scenarios: Array<{ 
 *     id, 
 *     context: string, 
 *     options: Array<{ label, strategy, explanation, isCorrect }>,
 *     feedback: string 
 *   }>
 */
const RemediationStrategyPicker = ({ scenarios = [], title = "Activity: Choosing the Best Remediation Strategy" }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentScenario = scenarios[currentScenarioIndex];

  const handleOptionClick = (index) => {
    if (showFeedback) return;
    setSelectedOption(index);
    setShowFeedback(true);
  };

  const nextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setCompleted(true);
    }
  };

  const restart = () => {
    setCurrentScenarioIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setCompleted(false);
  };

  if (scenarios.length === 0) return null;

  if (completed) {
    return (
      <div className="strategy-picker completed" role="status">
        <h3>Activity Complete!</h3>
        <p>You've explored all the remediation scenarios. Remember, the best strategy depends on the specific context and constraints of your project.</p>
        <button onClick={restart} className="strategy-btn-primary">Restart Activity</button>
      </div>
    );
  }

  return (
    <section className="strategy-picker" aria-labelledby="picker-title">
      <h2 id="picker-title">{title}</h2>
      <div className="scenario-container">
        <p className="scenario-progress">Scenario {currentScenarioIndex + 1} of {scenarios.length}</p>
        <div className="scenario-context">
          <h3>Context:</h3>
          <p>{currentScenario.context}</p>
        </div>

        <div className="options-grid" role="radiogroup" aria-label="Select the best strategy">
          {currentScenario.options.map((option, index) => {
            let btnClass = "strategy-option-btn";
            if (showFeedback) {
              if (index === selectedOption) {
                btnClass += option.isCorrect ? " correct" : " incorrect";
              } else if (option.isCorrect) {
                btnClass += " was-correct";
              }
            } else if (selectedOption === index) {
              btnClass += " selected";
            }

            return (
              <button
                key={index}
                className={btnClass}
                onClick={() => handleOptionClick(index)}
                disabled={showFeedback}
                aria-pressed={selectedOption === index}
              >
                <span className="option-label">{option.label}</span>
                <span className="option-strategy">{option.strategy}</span>
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className={`strategy-feedback ${currentScenario.options[selectedOption].isCorrect ? 'success' : 'error'}`} role="alert">
            <h4>{currentScenario.options[selectedOption].isCorrect ? 'Recommended Strategy' : 'Alternative Strategy'}</h4>
            <p>{currentScenario.options[selectedOption].explanation}</p>
            <button onClick={nextScenario} className="strategy-btn-primary">
              {currentScenarioIndex < scenarios.length - 1 ? 'Next Scenario' : 'Finish'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RemediationStrategyPicker;
