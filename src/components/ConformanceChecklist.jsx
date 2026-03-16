import React, { useState } from 'react';
import './ConformanceChecklist.css';

/**
 * ConformanceChecklist Component
 * A learning activity where users evaluate if a scenario meets all 5 Conformance Requirements.
 * 
 * Props:
 * - scenario: { text: string, requirements: { [key: number]: { met: boolean, reason: string } } }
 * - title?: string
 */
const ConformanceChecklist = ({ 
  scenario = {
    text: "A web application has a multi-step checkout process. All pages in the process meet Level AA, except for the 'Thank You' page which has color contrast issues. The site claims AA conformance for the entire process.",
    requirements: {
      1: { met: true, reason: "The individual pages (mostly) target AA." },
      2: { met: true, reason: "Full pages are considered." },
      3: { met: false, reason: "Not all web pages in the process conform at the specified level ('Thank You' page fails)." },
      4: { met: true, reason: "Uses accessibility-supported technologies." },
      5: { met: true, reason: "No non-conforming content blocks access." }
    }
  },
  title = "Activity: Conformance Check"
}) => {
  const [checked, setChecked] = useState({});
  const [showResults, setShowResults] = useState(false);

  const requirementsList = [
    { id: 1, name: "1. Conformance Level", desc: "Satisfies all SC for the level (or alternate version)." },
    { id: 2, name: "2. Full Pages", desc: "Conformance is for full pages only." },
    { id: 3, name: "3. Complete Processes", desc: "All pages in a process must conform." },
    { id: 4, name: "4. Accessibility-Supported", desc: "Only accessibility-supported ways of using technologies." },
    { id: 5, name: "5. Non-Interference", desc: "Non-conforming technologies don't block access." }
  ];

  const handleCheck = (id) => {
    if (showResults) return;
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleVerify = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setChecked({});
    setShowResults(false);
  };

  return (
    <section className="conformance-checklist" aria-labelledby="checklist-title">
      <h2 id="checklist-title">{title}</h2>
      <div className="scenario-box">
        <h3>Scenario:</h3>
        <p>{scenario.text}</p>
      </div>

      <p>Which of the 5 Conformance Requirements are <strong>MET</strong> in this scenario? (Check all that apply)</p>

      <ul className="checklist-items">
        {requirementsList.map(req => (
          <li key={req.id} className={`checklist-item ${showResults ? (scenario.requirements[req.id].met === !!checked[req.id] ? 'correct' : 'incorrect') : ''}`}>
            <label className="checkbox-container">
              <input 
                type="checkbox" 
                checked={!!checked[req.id]} 
                onChange={() => handleCheck(req.id)}
                disabled={showResults}
              />
              <span className="checkmark"></span>
              <div className="req-text">
                <strong>{req.name}</strong>
                <span className="req-desc">{req.desc}</span>
              </div>
            </label>
            {showResults && (
              <div className={`feedback-note ${scenario.requirements[req.id].met ? 'met' : 'not-met'}`} role="status">
                {scenario.requirements[req.id].met ? '✓ Met' : '✗ Not Met'} - {scenario.requirements[req.id].reason}
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="checklist-actions">
        {!showResults ? (
          <button className="verify-btn" onClick={handleVerify}>Verify Requirements</button>
        ) : (
          <button className="reset-btn" onClick={handleReset}>Try Another Scenario</button>
        )}
      </div>
    </section>
  );
};

export default ConformanceChecklist;
