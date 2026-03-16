import React, { useState, useEffect } from 'react';
import './DistractionSimulator.css';

/**
 * DistractionSimulator Component
 * 
 * Illustrates cognitive load and distractions by providing a "task" (reading/typing) 
 * while optionally showing distractions (moving elements, flashing content, noise).
 * 
 * Props:
 * - taskText: string (the text to read or copy)
 */
export default function DistractionSimulator({ 
  taskText = "Try to read this paragraph while the distractions are active. This simulates how unexpected and novel designs or excessive graphics can increase cognitive load for people with cognitive disabilities." 
}) {
  const [showDistractions, setShowDistractions] = useState(false);
  const [taskValue, setTaskValue] = useState('');
  const [score, setScore] = useState(0);

  const toggleDistractions = () => {
    setShowDistractions(!showDistractions);
  };

  const handleInputChange = (e) => {
    setTaskValue(e.target.value);
    if (taskText.startsWith(e.target.value)) {
      setScore(e.target.value.length);
    }
  };

  const resetTask = () => {
    setTaskValue('');
    setScore(0);
  };

  return (
    <div className="distraction-simulator" role="region" aria-labelledby="simulator-title">
      <h3 id="simulator-title">Cognitive Load & Distraction Simulator</h3>
      <p className="simulator-intro">
        Try to type the text below into the box. Turn on distractions to see how they affect your focus.
      </p>

      <div className="simulator-controls">
        <button 
          onClick={toggleDistractions} 
          className={`simulator-btn ${showDistractions ? 'active' : ''}`}
          aria-pressed={showDistractions}
        >
          {showDistractions ? 'Stop Distractions' : 'Start Distractions'}
        </button>
        <button onClick={resetTask} className="simulator-btn secondary">
          Reset
        </button>
      </div>

      <div className="simulator-playground">
        {showDistractions && (
          <div className="distractions-layer" aria-hidden="true">
            <div className="moving-box box-1">!</div>
            <div className="moving-box box-2">?</div>
            <div className="moving-box box-3">*</div>
            <div className="flashing-overlay"></div>
            <div className="distracting-text text-1">Sale!</div>
            <div className="distracting-text text-2">Click Here!</div>
            <div className="distracting-text text-3">Update!</div>
          </div>
        )}

        <div className="task-area">
          <div className="text-to-copy" id="text-to-copy">
            <strong>Target Text:</strong>
            <p>{taskText}</p>
          </div>
          
          <div className="input-group">
            <label htmlFor="simulator-input">Type the text here:</label>
            <textarea
              id="simulator-input"
              value={taskValue}
              onChange={handleInputChange}
              rows="4"
              placeholder="Start typing..."
              autoComplete="off"
            />
          </div>

          <div className="progress-bar" role="progressbar" aria-valuenow={score} aria-valuemin="0" aria-valuemax={taskText.length}>
            <div 
              className="progress-fill" 
              style={{ width: `${(score / taskText.length) * 100}%` }}
            ></div>
          </div>
          <p className="progress-text">{Math.round((score / taskText.length) * 100)}% Complete</p>
        </div>
      </div>

      <div className="simulator-reflection">
        <p>
          <strong>Reflection:</strong> For many users with cognitive disabilities, concentration problems, or ADHD, 
          moving or flashing elements aren't just minor annoyances—they can make it nearly impossible to complete simple tasks.
        </p>
      </div>
    </div>
  );
}
