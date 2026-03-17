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

  // Domain error tracking
  const domainErrors = {
    "Domain I": 0,
    "Domain II": 0,
    "Domain III": 0
  };

  allQuestionsInSet.forEach(q => {
    if (userAnswers[q.id] !== q.answer - 1) {
      if (q.domainTitle.includes("Domain I")) domainErrors["Domain I"]++;
      else if (q.domainTitle.includes("Domain II")) domainErrors["Domain II"]++;
      else if (q.domainTitle.includes("Domain III")) domainErrors["Domain III"]++;
    }
  });

  const worstDomain = Object.keys(domainErrors).reduce((a, b) => domainErrors[a] >= domainErrors[b] ? a : b);

  const domainLinks = {
    "Domain I": "/domain-one",
    "Domain II": "/domain-two",
    "Domain III": "/domain-three"
  };

  const currentQuestion = allQuestionsInSet[currentQuestionIndex];

  return (
    <div className="container py-4">
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
        <div className={`mb-5 p-4 border rounded ${isPass ? 'bg-success text-white' : 'bg-danger text-white'}`}>
          <h2 className="h3">Result: {isPass ? "PASS" : "FAIL"}</h2>
          <p className="h5">Score: {scorePercentage}% ({correctAnswersCount}/{totalQuestions} correct)</p>
          <hr className="border-white" />
          <div className="mt-3">
            <p className="mb-1">Based on your results, you had the most difficulty with <strong>{worstDomain}</strong> ({domainErrors[worstDomain]} incorrect).</p>
            <p className="mb-3">We recommend you review the following section:</p>
            <Link to={domainLinks[worstDomain]} className="btn btn-light font-weight-bold">
              Study {worstDomain} again
            </Link>
          </div>
          <button className="btn btn-outline-light mt-4 d-block" onClick={resetQuiz}>
            Restart Quiz / Try Another Set
          </button>
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
            <h3 className="h5 mb-4">{currentQuestion.question}</h3>
            <div className="options-list mb-4">
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
            return (
              <div key={q.id} className={`question-card mb-4 p-4 border rounded shadow-sm bg-white ${!isCorrect ? 'border-danger' : 'border-success'}`}>
                <p className="h6 text-muted mb-2">Question {idx + 1}</p>
                <p className="h5 mb-3">{q.question}</p>
                
                <div className="options-list mb-3">
                  {q.options.map((option, optIdx) => {
                    const isSelected = userAnswers[q.id] === optIdx;
                    const isCorrectOption = q.answer - 1 === optIdx;
                    
                    let optionClass = "p-2 rounded mb-1 ";
                    if (isCorrectOption) optionClass += "bg-success text-white";
                    else if (isSelected && !isCorrectOption) optionClass += "bg-danger text-white";
                    else optionClass += "bg-light";

                    return (
                      <div key={optIdx} className={optionClass}>
                        {optIdx + 1}. {option}
                        {isSelected && !isCorrectOption && <span className="ml-2 small">(Your Answer)</span>}
                        {isCorrectOption && <span className="ml-2 small">(Correct Answer)</span>}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-3">
                  <button
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => toggleExplanation(q.id)}
                  >
                    {showExplanation[q.id] ? "Hide Explanation" : "Show Explanation"}
                  </button>
                  {showExplanation[q.id] && (
                    <div className="mt-3 p-3 bg-light border-left border-info rounded">
                      <p className="mb-1"><strong>Distractors:</strong> {q.distractors.join(", ")}</p>
                      <p className="mb-0"><strong>Correct Answer:</strong> {q.answer}. {q.answerText}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TestQuestions;