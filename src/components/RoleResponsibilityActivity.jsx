// components/RoleResponsibilityActivity.jsx
import React, { useState } from 'react';
import './RoleResponsibilityActivity.css';

/**
 * RoleResponsibilityActivity - An accessible component for matching roles to accessibility responsibilities.
 *
 * Props:
 * - roles: Array<{ id: string, name: string, description: string, correctResponsibilities: string[] }>
 * - allResponsibilities: Array<{ id: string, text: string }>
 * - title?: string
 * - intro?: string
 */
export default function RoleResponsibilityActivity({
  roles = [],
  allResponsibilities = [],
  title = 'Activity: Roles and Responsibilities',
  intro = 'Match each role in the product life cycle to their corresponding accessibility responsibility.',
}) {
  const [selections, setSelections] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (roleId, responsibilityId) => {
    setSelections((prev) => ({
      ...prev,
      [roleId]: responsibilityId,
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    roles.forEach((role) => {
      if (role.correctResponsibilities.includes(selections[role.id])) {
        correct++;
      }
    });
    return correct;
  };

  const handleReset = () => {
    setSelections({});
    setShowResults(false);
  };

  return (
    <section className="role-responsibility-section" aria-labelledby="rra-heading">
      <h2 id="rra-heading">{title}</h2>
      <p>{intro}</p>

      <div className="role-responsibility-grid">
        {roles.map((role) => {
          const isCorrect = role.correctResponsibilities.includes(selections[role.id]);
          let statusClass = '';
          if (showResults) {
            statusClass = isCorrect ? 'correct' : 'incorrect';
          }

          return (
            <div key={role.id} className={`role-row ${statusClass}`}>
              <div className="role-info">
                <strong>{role.name}</strong>
                <p className="role-description">{role.description}</p>
              </div>
              <div className="responsibility-select">
                <label htmlFor={`select-${role.id}`} className="visually-hidden">
                  Responsibility for {role.name}
                </label>
                <select
                  id={`select-${role.id}`}
                  value={selections[role.id] || ''}
                  onChange={(e) => handleSelect(role.id, e.target.value)}
                  disabled={showResults}
                >
                  <option value="">-- Choose Responsibility --</option>
                  {allResponsibilities.map((resp) => (
                    <option key={resp.id} value={resp.id}>
                      {resp.text}
                    </option>
                  ))}
                </select>
                {showResults && !isCorrect && (
                  <div className="correct-feedback" role="status">
                    Correct options: {role.correctResponsibilities.map(id => allResponsibilities.find(r => r.id === id)?.text).join(', ')}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="role-responsibility-actions">
        {!showResults ? (
          <button 
            className="submit-btn" 
            onClick={() => setShowResults(true)}
            disabled={Object.keys(selections).length < roles.length}
          >
            Check My Answers
          </button>
        ) : (
          <>
            <p className="result-status" role="status">
              You matched {calculateScore()} of {roles.length} roles correctly!
            </p>
            <button className="reset-btn" onClick={handleReset}>
              Try Again
            </button>
          </>
        )}
      </div>
    </section>
  );
}
