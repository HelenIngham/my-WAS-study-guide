// components/SeverityPrioritizationMatrix.jsx
import React, { useState } from 'react';
import './SeverityPrioritizationMatrix.css';

/**
 * SeverityPrioritizationMatrix Component
 * A learning activity to help users prioritize accessibility issues based on Impact and Effort.
 * 
 * Props:
 * - issues: Array<{ id, title, impact: 'High'|'Medium'|'Low', effort: 'High'|'Medium'|'Low', description }>
 */
const SeverityPrioritizationMatrix = ({ issues = [] }) => {
  const [selectedIssue, setSelectedIssue] = useState(null);

  const getPriority = (impact, effort) => {
    if (impact === 'High' && effort === 'Low') return { label: 'P1: Critical / Low Effort', class: 'priority-p1' };
    if (impact === 'High' && effort === 'Medium') return { label: 'P2: Critical / Medium Effort', class: 'priority-p2' };
    if (impact === 'High' && effort === 'High') return { label: 'P3: Critical / High Effort', class: 'priority-p3' };
    if (impact === 'Medium' && effort === 'Low') return { label: 'P2: High / Low Effort', class: 'priority-p2' };
    if (impact === 'Medium' && effort === 'Medium') return { label: 'P3: High / Medium Effort', class: 'priority-p3' };
    if (impact === 'Medium' && effort === 'High') return { label: 'P4: High / High Effort', class: 'priority-p4' };
    if (impact === 'Low' && effort === 'Low') return { label: 'P3: Low / Low Effort', class: 'priority-p3' };
    return { label: 'P5: Low Priority', class: 'priority-p5' };
  };

  return (
    <section className="priority-matrix-activity" aria-labelledby="matrix-title">
      <h3 id="matrix-title">Activity: Prioritizing Accessibility Issues</h3>
      <p>Select an issue to see its impact, effort, and recommended prioritization.</p>
      
      <div className="matrix-layout">
        <div className="issue-list-sidebar" role="listbox" aria-label="Accessibility Issues">
          {issues.map((issue) => (
            <button
              key={issue.id}
              className={`issue-item-btn ${selectedIssue?.id === issue.id ? 'active' : ''}`}
              onClick={() => setSelectedIssue(issue)}
              aria-selected={selectedIssue?.id === issue.id}
            >
              {issue.title}
            </button>
          ))}
        </div>

        <div className="issue-detail-panel" aria-live="polite">
          {selectedIssue ? (
            <div className="issue-detail-content">
              <h4>{selectedIssue.title}</h4>
              <p className="issue-description">{selectedIssue.description}</p>
              
              <div className="issue-stats">
                <div className="stat-box">
                  <span className="stat-label">Impact:</span>
                  <span className={`stat-value impact-${selectedIssue.impact.toLowerCase()}`}>
                    {selectedIssue.impact}
                  </span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Effort:</span>
                  <span className={`stat-value effort-${selectedIssue.effort.toLowerCase()}`}>
                    {selectedIssue.effort}
                  </span>
                </div>
              </div>

              <div className={`priority-badge ${getPriority(selectedIssue.impact, selectedIssue.effort).class}`}>
                <strong>Recommendation:</strong> {getPriority(selectedIssue.impact, selectedIssue.effort).label}
              </div>
            </div>
          ) : (
            <div className="issue-placeholder">
              <p>Please select an issue from the list to analyze.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SeverityPrioritizationMatrix;
