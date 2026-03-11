// components/RovingTabindexDemo.jsx
import React, { useState, useRef } from 'react';
import './RovingTabindexDemo.css';

/**
 * RovingTabindexDemo component
 * 
 * Demonstrates the roving tabindex pattern in a tab list.
 */
export default function RovingTabindexDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    let newIndex = index;
    if (e.key === 'ArrowRight') {
      newIndex = (index + 1) % 3;
    } else if (e.key === 'ArrowLeft') {
      newIndex = (index - 1 + 3) % 3;
    } else if (e.key === 'Home') {
      newIndex = 0;
    } else if (e.key === 'End') {
      newIndex = 2;
    } else {
      return;
    }
    e.preventDefault();
    setActiveIndex(newIndex);
    tabRefs.current[newIndex]?.focus();
  };

  return (
    <div className="demo-container">
      <div
        role="tablist"
        aria-label="Demo tabs"
        className="demo-tablist"
      >
        {['Tab 1', 'Tab 2', 'Tab 3'].map((label, index) => (
          <button
            key={index}
            ref={el => tabRefs.current[index] = el}
            role="tab"
            id={`demo-tab-${index}`}
            aria-selected={activeIndex === index}
            aria-controls={`demo-panel-${index}`}
            tabIndex={activeIndex === index ? 0 : -1}
            className={`demo-tab ${activeIndex === index ? 'selected' : ''}`}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`demo-panel-${activeIndex}`}
        aria-labelledby={`demo-tab-${activeIndex}`}
        className="demo-panel"
      >
        <p>Content for Tab {activeIndex + 1}. Use arrow keys to switch tabs!</p>
      </div>
      <p className="demo-instructions">
        <strong>Try it:</strong> Click a tab, then use Left/Right arrow keys to navigate.
      </p>
    </div>
  );
}
