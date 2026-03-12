// components/MultipleChoiceQuiz.jsx
import React, { useState } from 'react';
import './MultipleChoiceQuiz.css';

/**
 * Reusable Multiple Choice Quiz component
 *
 * Props:
 * - questions: Array<{ id: number|string, question: string, options: string[], correct: number }>
 * - title?: string (heading for the quiz section)
 * - classNamePrefix?: string (optional BEM-style prefix)
 */
export default function MultipleChoiceQuiz({
  questions = [],
  title = 'Knowledge Check',
  classNamePrefix,
  isAccordion = true,
}) {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleQuizAnswer = (questionId, answerIndex) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) correct++;
    });
    return correct;
  };

  const handleReset = () => {
    setQuizAnswers({});
    setShowResults(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const p = classNamePrefix;
  const quizSectionCls = p ? `${p}__quizSection` : 'quiz-section';
  const quizHeadingCls = p ? `${p}__quizHeading` : 'quiz-heading';
  const quizQuestionCls = p ? `${p}__quizQuestion` : 'quiz-question';
  const quizOptionsCls = p ? `${p}__quizOptions` : 'quiz-options';
  const quizOptionCls = p ? `${p}__quizOption` : 'quiz-option';
  const quizActionsCls = p ? `${p}__quizActions` : 'quiz-actions';
  const submitBtnCls = p ? `${p}__submitBtn` : 'submit-btn';
  const resetBtnCls = p ? `${p}__resetBtn` : 'reset-btn';
  const resultCls = p ? `${p}__quizResult` : 'quiz-result';
  const summaryCls = p ? `${p}__quizSummary` : 'quiz-summary';

  const content = (
    <form onSubmit={handleSubmit}>
      {questions.map((q) => (
        <fieldset key={q.id} className={quizQuestionCls}>
          <div className={quizOptionsCls} role="group" aria-labelledby={`question-legend-${q.id}`}>
              <legend id={`question-legend-${q.id}`}>{q.question}</legend>
            {q.options.map((option, oIndex) => {
              let statusClass = '';
              if (showResults) {
                if (oIndex === q.correct) {
                  statusClass = 'correct';
                } else if (quizAnswers[q.id] === oIndex) {
                  statusClass = 'incorrect';
                }
              }

              return (
                <label
                  key={oIndex}
                  className={`${quizOptionCls} ${statusClass}`}
                >
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={oIndex}
                    checked={quizAnswers[q.id] === oIndex}
                    onChange={() => handleQuizAnswer(q.id, oIndex)}
                    disabled={showResults}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}

      <div className={quizActionsCls}>
        {!showResults ? (
          <button type="submit" className={submitBtnCls}>
            Check Answers
          </button>
        ) : (
          <>
            <p className={resultCls} role="status">
              You scored {calculateScore()} out of {questions.length}!
            </p>
            <button
              type="button"
              className={resetBtnCls}
              onClick={handleReset}
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </form>
  );

  if (isAccordion) {
    return (
      <section className={`${quizSectionCls} quiz-accordion`}>
        <details open={isOpen} onToggle={(e) => setIsOpen(e.target.open)}>
          <summary className={summaryCls}>
            <h2 id="quiz-heading" className={quizHeadingCls} style={{ display: 'inline', margin: 0 }}>
              {title}
            </h2>
          </summary>
          <div className="quiz-accordion-content" aria-labelledby="quiz-heading">
            {content}
          </div>
        </details>
      </section>
    );
  }

  return (
    <section className={quizSectionCls} aria-labelledby="quiz-heading">
      <h2 id="quiz-heading" className={quizHeadingCls}>{title}</h2>
      {content}
    </section>
  );
}
