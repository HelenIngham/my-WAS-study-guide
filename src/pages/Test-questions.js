// pages/TestQuestions.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { questions } from "../data/questions";

function TestQuestions() {
  const [currentSet, setCurrentSet] = useState(1);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleSetChange = (e) => {
    setCurrentSet(Number(e.target.value));
    resetQuiz();
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setShowExplanation({});
    setCurrentQuestionIndex(0);
    setQuizStarted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    window.scrollTo(0, 0);
  };

  const handleOptionChange = (questionId, optionIdx) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const toggleExplanation = (questionId) => {
    setShowExplanation((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  const goToNext = () => {
    if (currentQuestionIndex < allQuestionsInSet.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      window.scrollTo(0, 0);
    }
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  const currentSetData = questions.filter((q) => q.set === currentSet);
  // Flatten questions from domain blocks for easier processing
  const allQuestionsInSet = currentSetData.flatMap(block => 
    block.questions.map(q => ({ ...q, domainTitle: block.domain }))
  );

  const totalQuestions = allQuestionsInSet.length;
  const correctAnswersCount = allQuestionsInSet.reduce((acc, q) => {
    return acc + (userAnswers[q.id] === q.answer - 1 ? 1 : 0);
  }, 0);

  const scorePercentage = Math.round((correctAnswersCount / totalQuestions) * 100);
  const isPass = scorePercentage >= 70;

  // Domain tracking logic
  const domainStats = allQuestionsInSet.reduce((acc, q) => {
    const domain = q.domainTitle;
    if (!acc[domain]) {
      acc[domain] = { total: 0, correct: 0 };
    }
    acc[domain].total++;
    if (userAnswers[q.id] === q.answer - 1) {
      acc[domain].correct++;
    }
    return acc;
  }, {});

  const domainLinks = {
    "Domain I": "/domain-one",
    "Domain II": "/domain-two",
    "Domain III": "/domain-three"
  };

  const getRevisionLevel = (percentage) => {
    if (percentage >= 90) return { label: "Mastered", class: "badge-success", feedback: "Excellent work!" };
    if (percentage >= 70) return { label: "Proficient", class: "badge-info", feedback: "Good, but some review could help." };
    if (percentage >= 50) return { label: "Needs Revision", class: "badge-warning", feedback: "Focus on this area during your studies." };
    return { label: "Critical Revision", class: "badge-secondary", feedback: "This domain needs significant attention." };
  };

  const currentQuestion = allQuestionsInSet[currentQuestionIndex];

  return (
    <div className="container py-4">
      <style>{`
        .quiz-results-banner {
          border: none !important;
          box-shadow: var(--shadow-md);
          color: white !important;
          border-radius: 12px !important;
          padding: 2rem !important;
        }
        .pass-banner {
          background: linear-gradient(135deg, var(--green-800) 0%, var(--green-900) 100%) !important;
        }
        .fail-banner {
          background: linear-gradient(135deg, var(--dark-50) 0%, var(--dark-100) 100%) !important;
        }
        .result-icon {
          font-size: 3rem;
          background: rgba(255,255,255,0.15);
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.3);
        }
        .domain-breakdown-card {
          border-radius: 12px !important;
          border: 1px solid var(--neutral-200);
          padding: 1.5rem !important;
        }
        .bg-success-light {
          background-color: var(--green-100) !important;
          color: var(--green-900) !important;
        }
        .bg-success-very-light {
          background-color: var(--green-0) !important;
          border: 1px solid var(--green-200) !important;
        }
        .review-question-card {
           padding: 0 !important;
           margin-bottom: 2.5rem !important;
        }
        .review-question-card .p-4 {
           padding: 2rem !important;
        }
        .explanation-box {
          margin-top: 1.5rem;
          padding: 1.5rem;
          background-color: var(--blue-050);
          border-left: 6px solid var(--blue-700);
          border-radius: 8px;
          box-shadow: var(--shadow-inner);
        }
        .shadow-inner {
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06) !important;
        }
        .tracking-wider {
          letter-spacing: 0.05em;
        }
        .rounded-lg {
          border-radius: 12px !important;
        }
        .domain-row:hover {
          background-color: var(--neutral-100);
        }
        .opacity-90 { opacity: 0.9; }
        .opacity-20 { opacity: 0.2; }
        .get-revision-level-label {
          color: white !important;
        }
        
        /* Badges */
        .badge {
          display: inline-block;
          padding: 0.5em 0.8em;
          font-size: 0.85em;
          font-weight: 700;
          line-height: 1;
          text-align: center;
          white-space: nowrap;
          vertical-align: baseline;
          border-radius: 0.25rem;
        }
        .badge-pill, .rounded-pill {
          border-radius: 50rem !important;
        }
        .badge-success {
          background-color: var(--green-700);
          color: white;
        }
        .badge-info {
          background-color: var(--blue-700);
          color: white;
        }
        .badge-warning {
          background-color: var(--orange-700);
          color: white;
        }
        .badge-secondary {
          background-color: var(--neutral-850);
          color: white;
        }

        /* Buttons */
        .btn-primary {
          background-color: var(--pink-700);
          border-color: var(--pink-700);
          color: white;
        }
        .btn-primary:hover {
          background-color: var(--pink-800);
          border-color: var(--pink-800);
          color: white;
        }
        .btn-outline-primary {
          color: var(--pink-700);
          border-color: var(--pink-700);
          background-color: transparent;
        }
        .btn-outline-primary:hover {
          background-color: var(--pink-700);
          color: white;
        }
        .btn-info {
          background-color: var(--blue-700);
          border-color: var(--blue-700);
          color: white;
        }
        .btn-info:hover {
          background-color: var(--blue-800);
          border-color: var(--blue-800);
          color: white;
        }
        .btn-secondary {
          background-color: var(--neutral-700);
          border-color: var(--neutral-700);
          color: white;
        }
        .btn-secondary:hover {
          background-color: var(--neutral-800);
          border-color: var(--neutral-800);
          color: white;
        }
        .btn-light {
          background-color: var(--color-bg-white);
          border-color: var(--neutral-200);
          color: var(--neutral-850);
        }
        .btn-light:hover {
          background-color: var(--neutral-100);
          border-color: var(--neutral-300);
        }
        .btn-success {
          background-color: var(--green-700);
          border-color: var(--green-700);
          color: white;
        }
        .btn-success:hover {
          background-color: var(--green-800);
          border-color: var(--green-800);
          color: white;
        }

        .custom-radio .custom-control-input:checked ~ .custom-control-label::before {
          background-color: var(--pink-600);
          border-color: var(--pink-600);
        }

        .border-primary { border-color: var(--pink-600) !important; }
        .text-primary { color: var(--pink-700) !important; }
        .text-info { color: var(--blue-700) !important; }
        .text-success { color: var(--green-700) !important; }
        .text-danger { color: var(--red-700) !important; }
        
        .progress-bar {
          background-color: var(--pink-700);
        }
        
        /* Table styles */
        .table thead th {
          border-bottom: 2px solid var(--neutral-200);
          background-color: var(--neutral-100);
          color: var(--neutral-800);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }
      `}</style>
      <h1 className="mb-4">Test Questions</h1>
      
      {!quizStarted && !isSubmitted && (
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4 text-center">
            <h2 className="h4 mb-4">Select a Question Set to Begin</h2>
            <div className="mb-4 mx-auto" style={{ maxWidth: "300px" }}>
              <select
                id="set-select"
                className="form-control form-control-lg mb-3"
                value={currentSet}
                onChange={handleSetChange}
                aria-label="Select Question Set"
              >
                {[1, 2, 3, 4, 5, 6].map((setNum) => (
                  <option key={setNum} value={setNum}>
                    Set {setNum} (75 Questions)
                  </option>
                ))}
              </select>
              <p className="text-muted">Pass mark: 70% (53/75 correct)</p>
            </div>
            <button className="btn btn-primary btn-lg px-5" onClick={startQuiz}>
              Start Quiz
            </button>
          </div>
        </div>
      )}

      {isSubmitted && (
        <div 
          className={`quiz-results-banner mb-5 border rounded ${isPass ? 'pass-banner' : 'fail-banner'}`}
          role="alert"
          aria-live="polite"
        >
          <div className="d-flex align-items-center mb-3">
            <div className="result-icon mr-3" aria-hidden="true">
              {isPass ? '✅' : '📊'}
            </div>
            <div>
              <h2 className="h3 mb-0">Quiz Result: {isPass ? "PASS" : "FAIL"}</h2>
              <p className="h5 mb-0 opacity-90">Overall Score: {scorePercentage}% ({correctAnswersCount}/{totalQuestions} correct)</p>
            </div>
          </div>
          
          <hr className="border-white opacity-20" />
          
          <div className="mt-4 bg-white text-dark rounded-lg shadow-sm domain-breakdown-card">
            <h3 className="h5 mb-4 d-flex align-items-center">
              <span className="mr-2">📊</span> Domain Breakdown & Feedback
            </h3>
            <div className="table-responsive">
              <table className="table table-hover borderless mb-0" aria-label="Score breakdown by domain">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className="py-3">Domain</th>
                    <th scope="col" className="text-center py-3">Score</th>
                    <th scope="col" className="py-3">Status</th>
                    <th scope="col" className="py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(domainStats).map(([domain, stats]) => {
                    const percentage = Math.round((stats.correct / stats.total) * 100);
                    const level = getRevisionLevel(percentage);
                    const shortDomain = Object.keys(domainLinks).find(key => domain.includes(key)) || domain;
                    
                    return (
                      <tr key={domain} className="domain-row">
                        <td className="align-middle pr-4" style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--neutral-850)' }}>
                          {domain}
                        </td>
                        <td className="text-center align-middle">
                          <div className="h5 mb-0 font-weight-bold">{percentage}%</div>
                          <div className="small text-muted">{stats.correct}/{stats.total}</div>
                        </td>
                        <td className="align-middle">
                          <span className={`badge ${level.class} p-2 px-3 d-inline-block rounded-pill mb-1`}>
                            {level.label}
                          </span>
                          <div className="small text-muted d-none d-md-block" style={{ lineHeight: '1.2' }}>
                            {level.feedback}
                          </div>
                        </td>
                        <td className="align-middle">
                          {domainLinks[shortDomain] && (
                            <Link 
                              to={domainLinks[shortDomain]} 
                              className="btn btn-sm btn-outline-primary rounded-pill px-3"
                              aria-label={`Study ${shortDomain} again`}
                            >
                              Study
                            </Link>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-light btn-lg px-5 shadow-sm rounded-pill" onClick={resetQuiz} aria-label="Restart Quiz or Try Another Set">
              Restart Quiz / Try Another Set
            </button>
          </div>
        </div>
      )}

      {quizStarted && !isSubmitted && (
        <div className="quiz-interface">
          <div className="d-flex justify-content-between align-items-center mb-4 bg-light p-3 rounded border">
            <span className="h6 mb-0">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
            <div className="progress w-50" style={{ height: "10px" }}>
              <div 
                className="progress-bar" 
                role="progressbar" 
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                aria-valuenow={currentQuestionIndex + 1}
                aria-valuemin="1"
                aria-valuemax={totalQuestions}
              ></div>
            </div>
            <button className="btn btn-outline-secondary btn-sm" onClick={resetQuiz}>Exit Quiz</button>
          </div>

          <div className="question-card mb-4 p-4 border rounded shadow-sm bg-white">
            <div className="options-list mb-4" role="radiogroup" aria-labelledby={`q${currentQuestion.id}-text`}>
              <h3 id={`q${currentQuestion.id}-text`} className="h5 mb-4">{currentQuestion.question}</h3>
              {currentQuestion.options.map((option, idx) => {
                const isSelected = userAnswers[currentQuestion.id] === idx;
                return (
                  <div 
                    key={idx} 
                    className={`custom-control custom-radio mb-3 p-3 rounded border ${isSelected ? 'border-primary bg-light' : 'border-light'}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleOptionChange(currentQuestion.id, idx)}
                  >
                    <input
                      type="radio"
                      id={`q${currentQuestion.id}-opt${idx}`}
                      name={`q${currentQuestion.id}`}
                      className="custom-control-input"
                      checked={isSelected}
                      onChange={() => handleOptionChange(currentQuestion.id, idx)}
                    />
                    <label className="custom-control-label ml-2 w-100" htmlFor={`q${currentQuestion.id}-opt${idx}`} style={{ cursor: "pointer" }}>
                      <span className="font-weight-bold mr-2">{idx + 1}.</span> {option}
                    </label>
                  </div>
                );
              })}
            </div>

            <div className="d-flex justify-content-between mt-5 pt-3 border-top">
              <button 
                className="btn btn-outline-primary px-4" 
                onClick={goToPrevious}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              
              {currentQuestionIndex === totalQuestions - 1 ? (
                <button className="btn btn-success btn-lg px-5" onClick={handleSubmit}>
                  Submit Quiz
                </button>
              ) : (
                <button className="btn btn-primary px-5" onClick={goToNext}>
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {isSubmitted && (
        <div className="review-mode mt-5">
          <h2 className="h4 mb-4 border-bottom pb-2">Review Your Answers</h2>
          {allQuestionsInSet.map((q, idx) => {
            const isCorrect = userAnswers[q.id] === q.answer - 1;
            const questionLabel = `Question ${idx + 1}: ${isCorrect ? 'Correct' : 'Incorrect'}`;
            
            return (
              <section 
                key={q.id} 
                className={`review-question-card mb-5 p-0 border rounded-lg shadow-sm bg-white overflow-hidden ${!isCorrect ? 'border-secondary' : 'border-success'}`}
                aria-label={questionLabel}
              >
                <div className={`p-3 d-flex justify-content-between align-items-center ${isCorrect ? 'bg-success-light' : 'bg-light border-bottom'}`}>
                  <span className="h6 mb-0 font-weight-bold text-uppercase tracking-wider">
                    Question {idx + 1}
                  </span>
                  <span className={`badge ${isCorrect ? 'badge-success' : 'badge-secondary'} px-3 py-2 rounded-pill shadow-sm`}>
                    {isCorrect ? '✓ Correct' : 'Incorrect'}
                  </span>
                </div>

                <div className="p-4">
                  <p className="h5 mb-4" style={{ lineHeight: '1.4' }}>{q.question}</p>
                  
                  <div className="options-list mb-4" role="list">
                    {q.options.map((option, optIdx) => {
                      const isSelected = userAnswers[q.id] === optIdx;
                      const isCorrectOption = q.answer - 1 === optIdx;
                      
                      let optionClass = "p-3 rounded-lg mb-2 d-flex align-items-start border ";
                      if (isCorrectOption) optionClass += "border-success bg-success-very-light text-dark shadow-sm";
                      else if (isSelected && !isCorrectOption) optionClass += "border-secondary bg-light text-dark";
                      else optionClass += "border-light bg-light text-muted opacity-80";

                      return (
                        <div key={optIdx} className={optionClass} role="listitem">
                          <span className="font-weight-bold mr-3" style={{ minWidth: '20px' }}>{optIdx + 1}.</span> 
                          <div className="flex-grow-1">
                            {option}
                            {isSelected && !isCorrectOption && (
                              <div className="mt-1 small font-weight-bold text-danger">
                                <span className="mr-1">⚠️</span> Your Answer
                              </div>
                            )}
                            {isCorrectOption && (
                              <div className="mt-1 small font-weight-bold text-success">
                                <span className="mr-1">✨</span> Correct Answer
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 pt-3 border-top">
                    <button
                      type="button"
                      className={`btn btn-sm ${showExplanation[q.id] ? 'btn-secondary' : 'btn-info'} px-4 rounded-pill`}
                      onClick={() => toggleExplanation(q.id)}
                      aria-expanded={!!showExplanation[q.id]}
                      aria-controls={`explanation-${q.id}`}
                    >
                      {showExplanation[q.id] ? "Hide Explanation" : "Show Explanation"}
                    </button>
                    {showExplanation[q.id] && (
                      <div 
                        id={`explanation-${q.id}`}
                        className="explanation-box"
                      >
                        <div className="mb-3">
                          <h4 className="h6 text-uppercase text-muted font-weight-bold small mb-2">Detailed Explanation</h4>
                          <p className="mb-0 text-dark" style={{ fontSize: '1.05rem' }}>
                            <strong>{q.answer}. {q.answerText}</strong>
                          </p>
                        </div>
                        {q.distractors && q.distractors.length > 0 && (
                          <div>
                            <h4 className="h6 text-uppercase text-muted font-weight-bold small mb-2">Common Misconceptions</h4>
                            <p className="mb-0 small text-muted italic">
                              Distractors often focus on: {q.distractors.join(", ")}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TestQuestions;