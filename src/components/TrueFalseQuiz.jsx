// components/TrueFalseQuiz.jsx
import React from 'react';
import './TrueFalseQuiz.css';

/**
 * Reusable True/False Quiz component
 *
 * Props:
 * - questions: Array<{ id: string, text: string, correct: boolean, explanation?: string }>
 * - title?: string (heading for the quiz section)
 * - intro?: string (short introduction paragraph)
 * - classNamePrefix?: string (BEM-style prefix to match page-specific CSS, e.g., 'en301549').
 *   When provided, the component will generate classNames like `${p}__quiz`, `${p}__question`, etc.
 *   If omitted, generic quiz-* classes will be used (quiz-section, quiz-question, quiz-options, etc.).
 * - onComplete?: (result: { correctCount: number, total: number, incorrect: Array<QuestionWithAnswer> }) => void
 */
export default function TrueFalseQuiz({
  questions = [],
  title = 'Knowledge Check',
  intro = '',
  classNamePrefix,
  onComplete,
}) {
  const [answers, setAnswers] = React.useState({}); // { [id]: boolean }
  const [submitted, setSubmitted] = React.useState(false);
  const [showReview, setShowReview] = React.useState(false);

  const allAnswered = questions.every((q) => answers[q.id] === true || answers[q.id] === false);

  const results = React.useMemo(() => {
    const entries = questions.map((q) => {
      const userAnswer = answers[q.id];
      const isCorrect = userAnswer === q.correct;
      return { ...q, userAnswer, isCorrect };
    });
    const correctCount = entries.filter((e) => e.isCorrect).length;
    const incorrect = entries.filter((e) => submitted && !e.isCorrect);
    return { entries, correctCount, total: questions.length, incorrect };
  }, [answers, questions, submitted]);

  function setAnswer(questionId, value) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setSubmitted(false);
    setShowReview(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setShowReview(false);
    if (onComplete) {
      const { entries, correctCount, total, incorrect } = results;
      onComplete({ entries, correctCount, total, incorrect });
    }
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
    setShowReview(false);
  }

  // Helper to resolve class names according to prefix
  const cn = React.useMemo(() => {
    if (!classNamePrefix) {
      return {
        section: 'quiz-section',
        title: '',
        intro: 'quiz-intro',
        form: 'quiz-form',
        question: 'quiz-question',
        legend: 'quiz-legend',
        options: 'quiz-options',
        option: 'quiz-option',
        actions: 'quiz-actions',
        btn: 'submit-btn',
        btnSecondary: 'reset-btn',
        hint: 'quiz-hint',
        score: 'quiz-result',
        feedback: 'quiz-feedback',
        feedbackCorrect: 'correct',
        feedbackIncorrect: 'incorrect',
        review: 'quiz-review',
        reviewTitle: 'quiz-review-title',
        reviewList: 'quiz-review-list',
        reviewItem: 'quiz-review-item',
        reviewQuestion: 'quiz-review-question',
        reviewMeta: 'quiz-review-meta',
        reviewExplanation: 'quiz-review-explanation',
      };
    }
    const p = classNamePrefix;
    return {
      section: `${p}__quiz`,
      title: '',
      intro: `${p}__quizIntro`,
      form: `${p}__quizForm`,
      question: `${p}__question`,
      legend: `${p}__questionLegend`,
      options: `${p}__options`,
      option: `${p}__option`,
      actions: `${p}__quizActions`,
      btn: `${p}__btn`,
      btnSecondary: `${p}__btn ${p}__btn--secondary`,
      hint: `${p}__quizHint`,
      score: `${p}__score`,
      feedback: `${p}__feedback`,
      feedbackCorrect: `${p}__feedback--correct`,
      feedbackIncorrect: `${p}__feedback--incorrect`,
      review: `${p}__review`,
      reviewTitle: `${p}__reviewTitle`,
      reviewList: `${p}__reviewList`,
      reviewItem: `${p}__reviewItem`,
      reviewQuestion: `${p}__reviewQuestion`,
      reviewMeta: `${p}__reviewMeta`,
      reviewExplanation: `${p}__reviewExplanation`,
    };
  }, [classNamePrefix]);

  return (
    <section className={cn.section} aria-labelledby="true-false-quiz-title">
      <h2 id="true-false-quiz-title">{title}</h2>
      {intro ? <p className={cn.intro} dangerouslySetInnerHTML={{ __html: intro }} /> : null}

      <form onSubmit={handleSubmit} className={cn.form}>
        {questions.map((q, index) => {
          const currentValue = answers[q.id]; // true/false/undefined
          const showPerQuestionFeedback = submitted && (currentValue === true || currentValue === false);
          const isCorrect = showPerQuestionFeedback ? currentValue === q.correct : null;

          return (
            <fieldset key={q.id} className={cn.question}>
              <legend className={cn.legend}>
                {index + 1}. {q.text}
              </legend>

              <div className={cn.options} role="radiogroup" aria-label={`Question ${index + 1}`}>
                <label className={cn.option}>
                  <input
                    type="radio"
                    name={q.id}
                    value="true"
                    checked={currentValue === true}
                    onChange={() => setAnswer(q.id, true)}
                  />
                  True
                </label>

                <label className={cn.option}>
                  <input
                    type="radio"
                    name={q.id}
                    value="false"
                    checked={currentValue === false}
                    onChange={() => setAnswer(q.id, false)}
                  />
                  False
                </label>
              </div>

              {showPerQuestionFeedback && (
                <p
                  className={`${cn.feedback} ${isCorrect ? cn.feedbackCorrect : cn.feedbackIncorrect}`}
                >
                  <strong>{isCorrect ? 'Correct.' : 'Incorrect.'}</strong>{' '}
                  {q.explanation ? <span>{q.explanation}</span> : null}
                </p>
              )}
            </fieldset>
          );
        })}

        <div className={cn.actions}>
          <button type="submit" className={cn.btn} disabled={!allAnswered}>
            Check answers
          </button>

          <button type="button" className={cn.btnSecondary} onClick={handleReset}>
            Reset
          </button>

          {submitted && (
            <button
              type="button"
              className={cn.btnSecondary}
              onClick={() => setShowReview((prev) => !prev)}
            >
              {showReview ? 'Hide review' : 'Review incorrect answers'}
            </button>
          )}
        </div>

        {!allAnswered && (
          <p className={cn.hint} role="status">
            Answer all questions to enable <strong>Check answers</strong>.
          </p>
        )}

        {submitted && (
          <div className={cn.score} role="status" aria-live="polite">
            Score: <strong>{results.correctCount}</strong> / {results.total}
          </div>
        )}

        {submitted && showReview && (
          <div className={cn.review} aria-label="Incorrect answers review">
            {results.incorrect.length === 0 ? (
              <p className={cn.reviewTitle}>Nice work—no incorrect answers to review.</p>
            ) : (
              <>
                <h3 className={cn.reviewTitle}>Questions to review</h3>
                <ul className={cn.reviewList}>
                  {results.incorrect.map((q) => (
                    <li key={q.id} className={cn.reviewItem}>
                      <div className={cn.reviewQuestion}>
                        <strong>{q.text}</strong>
                      </div>
                      <div className={cn.reviewMeta}>
                        Your answer: <strong>{q.userAnswer === true ? 'True' : q.userAnswer === false ? 'False' : '—'}</strong>
                        {' · '}
                        Correct answer: <strong>{q.correct ? 'True' : 'False'}</strong>
                      </div>
                      {q.explanation ? (
                        <div className={cn.reviewExplanation}>{q.explanation}</div>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </form>
    </section>
  );
}
