// components/TestingPhaseActivity.jsx
import React, { useState } from 'react';
import './TestingPhaseActivity.css';

/**
 * TestingPhaseActivity Component
 * Interactive activity where users drag tools (or click buttons) 
 * to assign them to the correct Phase of the SDLC.
 */
const TestingPhaseActivity = ({ phases = [], tools = [] }) => {
  const [selections, setSelections] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (toolId, phaseId) => {
    if (showResults) return;
    setSelections(prev => ({ ...prev, [toolId]: phaseId }));
  };

  const calculateScore = () => {
    return tools.reduce((acc, tool) => {
      const toolData = tools.find(t => t.id === tool.id);
      return selections[tool.id] === toolData.correctPhase ? acc + 1 : acc;
    }, 0);
  };

  const handleReset = () => {
    setSelections({});
    setShowResults(false);
  };

  return (
    <div className="testing-phase-activity" aria-labelledby="tpa-title">
      <h2 id="tpa-title">Activity: Mapping Tools to SDLC Phases</h2>
      <p>Assign each testing tool or method to the most appropriate phase of the Software Development Life Cycle (SDLC).</p>
      
      <div className="tpa-grid">
        {tools.map((tool) => {
          const isCorrect = selections[tool.id] === tool.correctPhase;
          let feedbackClass = "";
          if (showResults) {
            feedbackClass = isCorrect ? "tpa-correct" : "tpa-incorrect";
          }

          return (
            <div key={tool.id} className={`tpa-tool-row ${feedbackClass}`}>
              <div className="tpa-tool-name">
                <strong>{tool.name}</strong>
              </div>
              <div className="tpa-phase-options">
                {phases.map((phase) => (
                  <button
                    key={phase.id}
                    className={`tpa-phase-btn ${selections[tool.id] === phase.id ? 'tpa-selected' : ''}`}
                    onClick={() => handleSelect(tool.id, phase.id)}
                    disabled={showResults}
                    aria-pressed={selections[tool.id] === phase.id}
                  >
                    {phase.label}
                  </button>
                ))}
              </div>
              {showResults && !isCorrect && (
                <div className="tpa-feedback-msg" role="alert">
                  Correct phase: {phases.find(p => p.id === tool.correctPhase)?.label}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="tpa-actions">
        {!showResults ? (
          <button 
            className="tpa-submit-btn" 
            onClick={() => setShowResults(true)}
            disabled={Object.keys(selections).length < tools.length}
          >
            Check Answers
          </button>
        ) : (
          <div className="tpa-summary">
            <p className="tpa-score" role="status">You matched {calculateScore()} of {tools.length} correctly.</p>
            <button className="tpa-reset-btn" onClick={handleReset}>Try Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestingPhaseActivity;
