// components/FixingVsRedesignActivity.jsx
import React, { useState } from 'react';
import './FixingVsRedesignActivity.css';

const scenarios = [
  {
    id: 1,
    title: "Scenario: Legacy E-commerce Checkout",
    description: "A large e-commerce site has a checkout process with multiple accessibility failures (lack of keyboard focus, missing labels, poor color contrast). The code is 10 years old and uses outdated frameworks.",
    options: [
      { label: "Fix Particular Issues", value: "fix", explanation: "Patching individual issues in outdated code may be a never-ending task and could introduce new bugs. It doesn't solve the underlying technical debt." },
      { label: "Complete Redesign", value: "redesign", explanation: "Correct! A redesign allows for modern, accessible patterns and frameworks to be implemented from the ground up, which is often more sustainable for legacy systems.", isCorrect: true }
    ]
  },
  {
    id: 2,
    title: "Scenario: Missing Alt Text in Blog Posts",
    description: "A modern, well-structured blog has several images without alternative text. The rest of the site is highly accessible and uses a current React framework.",
    options: [
      { label: "Fix Particular Issues", value: "fix", explanation: "Correct! Since the site is already modern and mostly accessible, fixing the specific issues (adding alt text) is the most efficient and feasible approach.", isCorrect: true },
      { label: "Complete Redesign", value: "redesign", explanation: "Redesigning the entire site just for missing alt text is overkill and wasteful of resources." }
    ]
  }
];

const FixingVsRedesignActivity = () => {
  const [answers, setAnswers] = useState({});

  const handleSelect = (scenarioId, value) => {
    setAnswers({ ...answers, [scenarioId]: value });
  };

  const reset = () => {
    setAnswers({});
  };

  return (
    <div className="fixing-redesign-activity">
      <h2>Activity: Fix vs. Redesign Decision</h2>
      <p>Analyze each scenario and decide if it's better to fix the specific issues or perform a complete redesign.</p>
      
      <div className="scenarios-grid">
        {scenarios.map((scenario) => (
          <div key={scenario.id} className="scenario-item">
            <h3>{scenario.title}</h3>
            <p className="scenario-desc">{scenario.description}</p>
            
            <div className="activity-options">
              {scenario.options.map((option) => {
                const isSelected = answers[scenario.id] === option.value;
                let btnClass = "activity-option-btn";
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
              <div className={`activity-feedback ${scenarios.find(s => s.id === scenario.id).options.find(o => o.value === answers[scenario.id]).isCorrect ? 'success' : 'error'}`}>
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

export default FixingVsRedesignActivity;
