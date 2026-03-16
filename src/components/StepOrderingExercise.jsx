// components/StepOrderingExercise.jsx
import React, { useState } from 'react';
import './StepOrderingExercise.css';

/**
 * StepOrderingExercise - An accessible component for ordering items.
 *
 * Props:
 * - steps: Array<{ id: string, label: string, correctOrder: number }>
 * - title?: string
 * - intro?: string
 */
export default function StepOrderingExercise({
  steps = [],
  title = 'Practice: Order the Steps',
  intro = 'Select the correct order for each step in the methodology.',
}) {
  const [userOrders, setUserOrders] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (stepId, order) => {
    setUserOrders((prev) => ({
      ...prev,
      [stepId]: parseInt(order, 10),
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    steps.forEach((step) => {
      if (userOrders[step.id] === step.correctOrder) {
        correct++;
      }
    });
    return correct;
  };

  const handleReset = () => {
    setUserOrders({});
    setShowResults(false);
  };

  return (
    <section className="ordering-section" aria-labelledby="ordering-heading">
      <h2 id="ordering-heading">{title}</h2>
      <p>{intro}</p>

      <div className="ordering-list">
        {steps.map((step) => {
          const isCorrect = userOrders[step.id] === step.correctOrder;
          let statusClass = '';
          if (showResults) {
            statusClass = isCorrect ? 'correct' : 'incorrect';
          }

          return (
            <div key={step.id} className={`ordering-item ${statusClass}`}>
              <div className="step-label">
                <strong>{step.label}</strong>
              </div>
              <div className="order-select">
                <label htmlFor={`order-${step.id}`} className="visually-hidden">
                  Position for {step.label}
                </label>
                <select
                  id={`order-${step.id}`}
                  value={userOrders[step.id] || ''}
                  onChange={(e) => handleSelect(step.id, e.target.value)}
                  disabled={showResults}
                >
                  <option value="">-- Choose Position --</option>
                  {steps.map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                {showResults && !isCorrect && (
                  <span className="correct-feedback" role="status">
                    Correct position: {step.correctOrder}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="ordering-actions">
        {!showResults ? (
          <button className="submit-btn" onClick={() => setShowResults(true)}>
            Check Order
          </button>
        ) : (
          <>
            <p className="result-status" role="status">
              You ordered {calculateScore()} of {steps.length} correctly!
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
