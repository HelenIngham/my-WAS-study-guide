import React, { useState } from 'react';
import './KeyboardInteractionActivity.css';

/**
 * KeyboardInteractionActivity - A new learning activity where users identify the correct keyboard 
 * interactions for common UI components.
 */
export default function KeyboardInteractionActivity() {
  const [selectedTask, setSelectedTask] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const tasks = [
    {
      id: 1,
      component: 'Button',
      question: 'Which key(s) should trigger a button?',
      options: ['Space and Enter', 'Tab and Esc', 'Arrow Up/Down', 'Shift + Tab'],
      correct: 0,
      explanation: 'Buttons must be triggered by both Space and Enter keys for standard accessibility.'
    },
    {
      id: 2,
      component: 'Combobox / Dropdown',
      question: 'Which key typically opens a closed combobox?',
      options: ['Esc', 'Alt + Arrow Down', 'Delete', 'Shift + Enter'],
      correct: 1,
      explanation: 'Alt + Arrow Down or just Arrow Down are standard patterns for opening a closed combobox.'
    },
    {
      id: 3,
      component: 'Tab List',
      question: 'How should you navigate between tabs in a tablist once focus is on one?',
      options: ['Tabbing through each', 'Space and Enter', 'Arrow Keys (Left/Right)', 'Esc key'],
      correct: 2,
      explanation: 'The Roving Tabindex pattern uses Arrow Keys to move focus between tabs while keeping the Tab key for moving out of the tablist.'
    },
    {
      id: 4,
      component: 'Modal Dialog',
      question: 'What key should always dismiss a modal dialog?',
      options: ['Backspace', 'Escape', 'F4', 'Alt + Home'],
      correct: 1,
      explanation: 'The Escape (Esc) key is the standard requirement for dismissing/closing modal dialogs.'
    }
  ];

  const handleCheck = (index) => {
    const task = tasks[selectedTask];
    if (index === task.correct) {
      setFeedback(`Correct! ${task.explanation}`);
      setIsCorrect(true);
    } else {
      setFeedback(`Incorrect. Try again!`);
      setIsCorrect(false);
    }
  };

  const nextTask = () => {
    if (selectedTask < tasks.length - 1) {
      setSelectedTask(selectedTask + 1);
      setFeedback(null);
      setIsCorrect(false);
    }
  };

  const resetActivity = () => {
    setSelectedTask(0);
    setFeedback(null);
    setIsCorrect(false);
  };

  const currentTask = tasks[selectedTask];

  return (
    <section className="keyboard-interaction-activity" aria-labelledby="kia-title">
      <h3 id="kia-title">Practice: Keyboard Interaction Patterns</h3>
      <p>Identify the correct keyboard behavior for the following component:</p>
      
      <div className="task-container">
        <div className="task-header">
          <span className="task-badge">Task {selectedTask + 1} of {tasks.length}</span>
          <h4 className="task-component-name">{currentTask.component}</h4>
        </div>

        <p className="task-question">{currentTask.question}</p>

        <div className="options-grid">
          {currentTask.options.map((option, index) => (
            <button
              key={index}
              className="option-button"
              onClick={() => handleCheck(index)}
              disabled={isCorrect}
            >
              {option}
            </button>
          ))}
        </div>

        {feedback && (
          <div 
            className={`feedback-box ${isCorrect ? 'success' : 'error'}`}
            role="alert"
          >
            {feedback}
          </div>
        )}

        <div className="activity-controls">
          {isCorrect && selectedTask < tasks.length - 1 && (
            <button className="next-btn" onClick={nextTask}>Next Component</button>
          )}
          {isCorrect && selectedTask === tasks.length - 1 && (
            <button className="reset-btn" onClick={resetActivity}>Restart Activity</button>
          )}
        </div>
      </div>
    </section>
  );
}
