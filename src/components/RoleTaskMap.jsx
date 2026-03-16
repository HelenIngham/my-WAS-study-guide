// components/RoleTaskMap.jsx
import React, { useState } from 'react';
import './RoleTaskMap.css';

/**
 * RoleTaskMap component - An interactive activity for mapping tasks to the appropriate role/support type.
 *
 * Props:
 * - tasks: Array<{ id: string, text: string, correctCategory: string }>
 * - categories: Array<{ id: string, label: string }>
 * - title?: string
 */
export default function RoleTaskMap({
  tasks = [],
  categories = [],
  title = 'Interactive Activity: Mapping Accessibility Expert Roles',
}) {
  const [selections, setSelections] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (taskId, categoryId) => {
    if (submitted) return;
    setSelections((prev) => ({
      ...prev,
      [taskId]: categoryId,
    }));
  };

  const calculateScore = () => {
    return tasks.reduce((acc, task) => {
      return selections[task.id] === task.correctCategory ? acc + 1 : acc;
    }, 0);
  };

  const handleReset = () => {
    setSelections({});
    setSubmitted(false);
  };

  return (
    <section className="role-task-map" aria-labelledby="rtm-heading">
      <h2 id="rtm-heading">{title}</h2>
      <p className="rtm-instruction">
        Accessibility experts provide different types of support depending on whether they are assisting purchasers or vendors. 
        Select the correct category for each task.
      </p>

      <div className="rtm-grid">
        <div className="rtm-header-row" aria-hidden="true">
          <div className="rtm-task-header">Task</div>
          {categories.map((cat) => (
            <div key={cat.id} className="rtm-category-header">{cat.label}</div>
          ))}
        </div>

        {tasks.map((task) => (
          <fieldset key={task.id} className="rtm-task-row">
            <legend className="rtm-task-text">{task.text}</legend>
            <div className="rtm-options">
              {categories.map((cat) => {
                const isSelected = selections[task.id] === cat.id;
                const isCorrect = task.correctCategory === cat.id;
                let statusClass = '';
                if (submitted) {
                   if (isSelected && isCorrect) statusClass = 'correct';
                   if (isSelected && !isCorrect) statusClass = 'incorrect';
                   if (!isSelected && isCorrect) statusClass = 'missed';
                }

                return (
                  <label 
                    key={cat.id} 
                    className={`rtm-option ${isSelected ? 'selected' : ''} ${statusClass}`}
                  >
                    <input
                      type="radio"
                      name={`task-${task.id}`}
                      value={cat.id}
                      checked={isSelected}
                      onChange={() => handleSelect(task.id, cat.id)}
                      disabled={submitted}
                    />
                    <span className="rtm-option-label">{cat.label}</span>
                  </label>
                );
              })}
            </div>
            {submitted && (
              <div className="rtm-feedback" role="status">
                {selections[task.id] === task.correctCategory ? (
                   <span className="feedback-correct">✓ Correct</span>
                ) : (
                   <span className="feedback-incorrect">✗ Incorrect. Correct: {categories.find(c => c.id === task.correctCategory)?.label}</span>
                )}
              </div>
            )}
          </fieldset>
        ))}
      </div>

      <div className="rtm-actions">
        {!submitted ? (
          <button 
            className="submit-btn" 
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(selections).length < tasks.length}
          >
            Check My Answers
          </button>
        ) : (
          <div className="rtm-results">
            <p className="rtm-score" role="status">
              You correctly categorized {calculateScore()} out of {tasks.length} tasks.
            </p>
            <button className="reset-btn" onClick={handleReset}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
