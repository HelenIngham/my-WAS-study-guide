// components/CategorizationExercise.jsx
import React, { useState } from 'react';
import './CategorizationExercise.css';

/**
 * Reusable Categorization Exercise component
 * 
 * Props:
 * - items: Array<{ id: string, label: string, correctCategory: string }>
 * - categories: Array<{ id: string, label: string }>
 * - title?: string
 * - intro?: string
 */
export default function CategorizationExercise({
  items = [],
  categories = [],
  title = 'Categorization Exercise',
  intro = 'Assign each item to its correct category.',
}) {
  const [selections, setSelections] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (itemId, categoryId) => {
    setSelections((prev) => ({
      ...prev,
      [itemId]: categoryId,
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    items.forEach((item) => {
      if (selections[item.id] === item.correctCategory) {
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
    <section className="categorization-section" aria-labelledby="cat-heading">
      <h2 id="cat-heading">{title}</h2>
      <p>{intro}</p>

      <div className="categorization-grid">
        {items.map((item) => {
          const isCorrect = selections[item.id] === item.correctCategory;
          let statusClass = '';
          if (showResults) {
            statusClass = isCorrect ? 'correct' : 'incorrect';
          }

          return (
            <div key={item.id} className={`categorization-row ${statusClass}`}>
              <div className="item-label">
                <strong>{item.label}</strong>
              </div>
              <div className="category-select">
                <label htmlFor={`select-${item.id}`} className="visually-hidden">
                  Category for {item.label}
                </label>
                <select
                  id={`select-${item.id}`}
                  value={selections[item.id] || ''}
                  onChange={(e) => handleSelect(item.id, e.target.value)}
                  disabled={showResults}
                >
                  <option value="">-- Choose Category --</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                {showResults && !isCorrect && (
                  <span className="correct-feedback">
                    Correct: {categories.find(c => c.id === item.correctCategory)?.label}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="categorization-actions">
        {!showResults ? (
          <button className="submit-btn" onClick={() => setShowResults(true)}>
            Check Answers
          </button>
        ) : (
          <>
            <p className="result-status" role="status">
              You got {calculateScore()} of {items.length} correct!
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
