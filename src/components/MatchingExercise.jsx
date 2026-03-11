// components/MatchingExercise.jsx
import React, { useState } from 'react';
import './MatchingExercise.css';

/**
 * Reusable Matching Exercise component
 *
 * Props:
 * - pairs: Array<{ term: string, definition: string }>
 * - correctMatches: { [term: string]: string }
 * - title?: string
 * - intro?: string
 * - classNamePrefix?: string
 */
export default function MatchingExercise({
  pairs = [],
  correctMatches = {},
  title = 'Practice: Match the Terms',
  intro = 'Match each concept with its correct definition.',
  classNamePrefix,
}) {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (term, definition) => {
    setAnswers((prev) => ({
      ...prev,
      [term]: definition,
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(answers).forEach((term) => {
      if (answers[term] === correctMatches[term]) {
        correct++;
      }
    });
    return correct;
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  const p = classNamePrefix;
  const sectionCls = p ? `${p}__matchingSection` : 'matching-section';
  const exerciseCls = p ? `${p}__matchingExercise` : 'matching-exercise';
  const rowCls = p ? `${p}__matchingRow` : 'matching-row';
  const termCls = p ? `${p}__termCell` : 'term-cell';
  const selectCls = p ? `${p}__selectCell` : 'select-cell';
  const actionsCls = p ? `${p}__matchingActions` : 'matching-actions';
  const resultCls = p ? `${p}__matchResult` : 'match-result';
  const submitBtnCls = p ? `${p}__submitBtn` : 'submit-btn';
  const resetBtnCls = p ? `${p}__resetBtn` : 'reset-btn';

  return (
    <section className={sectionCls} aria-labelledby="matching-heading">
      <h2 id="matching-heading">{title}</h2>
      <p>{intro}</p>

      <div className={exerciseCls}>
        {pairs.map((pair, index) => {
          const isCorrect = answers[pair.term] === correctMatches[pair.term];
          let statusClass = '';
          if (showResults) {
            statusClass = isCorrect ? 'correct' : 'incorrect';
          }

          return (
            <div key={index} className={rowCls}>
              <div className={termCls}>
                <strong>{pair.term}</strong>
              </div>
              <div className={selectCls}>
                <label
                  htmlFor={`match-${index}`}
                  className="visually-hidden"
                >
                  Select definition for {pair.term}
                </label>
                <select
                  id={`match-${index}`}
                  value={answers[pair.term] || ''}
                  onChange={(e) => handleSelect(pair.term, e.target.value)}
                  disabled={showResults}
                  className={statusClass}
                >
                  <option value="">-- Select --</option>
                  {pairs.map((p, i) => (
                    <option key={i} value={p.definition}>
                      {p.definition}
                    </option>
                  ))}
                </select>
                {showResults && !isCorrect && (
                  <span className="correct-answer">
                    Correct: {correctMatches[pair.term]}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className={actionsCls}>
        {!showResults ? (
          <button
            className={submitBtnCls}
            onClick={() => setShowResults(true)}
          >
            Check Answers
          </button>
        ) : (
          <>
            <p className={resultCls} role="status">
              You matched {calculateScore()} of {pairs.length} correctly!
            </p>
            <button className={resetBtnCls} onClick={handleReset}>
              Try Again
            </button>
          </>
        )}
      </div>
    </section>
  );
}
