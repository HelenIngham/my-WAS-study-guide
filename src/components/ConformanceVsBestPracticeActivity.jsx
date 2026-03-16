// components/ConformanceVsBestPracticeActivity.jsx
import React, { useState } from 'react';
import './ConformanceVsBestPracticeActivity.css';

const scenarios = [
  {
    id: 1,
    issue: "An image that conveys information lacks an alt attribute entirely.",
    options: [
      { label: "Normative Failure", value: "failure", explanation: "Correct! This is a direct failure of WCAG SC 1.1.1 Non-text Content.", isCorrect: true },
      { label: "Optional Best Practice", value: "best-practice", explanation: "Incorrect. While it is good practice, it's also a normative requirement for conformance." }
    ]
  },
  {
    id: 2,
    issue: "A decorative image is hidden with aria-hidden='true' but also has a redundant alt='' attribute.",
    options: [
      { label: "Normative Failure", value: "failure", explanation: "Incorrect. This does not violate a normative success criterion, though it might be redundant." },
      { label: "Optional Best Practice", value: "best-practice", explanation: "Correct! Using both is technically fine for conformance, but choosing one consistent method (like alt='') is a best practice for clean code.", isCorrect: true }
    ]
  },
  {
    id: 3,
    issue: "A link with the text 'Click here' is used, and the surrounding text does not provide context for the link's purpose.",
    options: [
      { label: "Normative Failure", value: "failure", explanation: "Correct! This fails SC 2.4.4 Link Purpose (In Context).", isCorrect: true },
      { label: "Optional Best Practice", value: "best-practice", explanation: "Incorrect. This is a conformance failure because the purpose cannot be determined from the link text alone or its context." }
    ]
  },
  {
    id: 4,
    issue: "A heading level 2 follows a heading level 1, even though a heading level 3 might be more semantically appropriate for the sub-section structure.",
    options: [
      { label: "Normative Failure", value: "failure", explanation: "Incorrect. WCAG does not normatively require headings to be nested in a perfect hierarchy, though it's strongly recommended." },
      { label: "Optional Best Practice", value: "best-practice", explanation: "Correct! Skipping levels or having a less-than-perfect hierarchy isn't a strict failure of 1.3.1 as long as the structure is present, but consistent nesting is a best practice for usability.", isCorrect: true }
    ]
  }
];

const ConformanceVsBestPracticeActivity = () => {
  const [answers, setAnswers] = useState({});

  const handleSelect = (scenarioId, value) => {
    setAnswers({ ...answers, [scenarioId]: value });
  };

  const reset = () => {
    setAnswers({});
  };

  return (
    <div className="conformance-activity">
      <h3>Activity: Failure or Best Practice?</h3>
      <p>Determine whether each issue below is a normative WCAG failure or an optional best practice.</p>
      
      <div className="conformance-scenarios">
        {scenarios.map((scenario) => (
          <div key={scenario.id} className="conformance-item">
            <p className="conformance-issue"><strong>Issue:</strong> {scenario.issue}</p>
            
            <div className="conformance-options">
              {scenario.options.map((option) => {
                const isSelected = answers[scenario.id] === option.value;
                let btnClass = "conformance-option-btn";
                if (isSelected) {
                  btnClass += option.isCorrect ? " correct" : " incorrect";
                }

                return (
                  <button
                    key={option.value}
                    className={btnClass}
                    onClick={() => handleSelect(scenario.id, option.value)}
                    aria-pressed={isSelected}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            {answers[scenario.id] && (
              <div className={`conformance-feedback ${scenarios.find(s => s.id === scenario.id).options.find(o => o.value === answers[scenario.id]).isCorrect ? 'success' : 'error'}`} role="alert">
                {scenarios.find(s => s.id === scenario.id).options.find(o => o.value === answers[scenario.id]).explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="reset-container">
        <button className="reset-btn" onClick={reset}>Reset Activity</button>
      </div>
    </div>
  );
};

export default ConformanceVsBestPracticeActivity;
