// src/components/ScreenReaderSimulator.jsx
import React, { useState, useEffect, useRef } from 'react';
import './ScreenReaderSimulator.css';

/**
 * ScreenReaderSimulator component
 * A learning activity that simulates how a screen reader reads a page
 * to help users understand the linear nature of screen reader output.
 *
 * Props:
 * - elements: Array<{ tag: string, content: string, ariaLabel?: string, role?: string, href?: string }>
 * - title?: string
 * - intro?: string
 */
export default function ScreenReaderSimulator({
  elements = [],
  title = 'Interactive: Screen Reader Simulator',
  intro = 'Experience how a screen reader processes content linearly. Use the "Next" button to move through the page as a screen reader would.',
}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [history, setHistory] = useState([]);
  const outputEndRef = useRef(null);

  const scrollToBottom = () => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleNext = () => {
    if (activeIndex < elements.length - 1) {
      const nextIndex = activeIndex + 1;
      const element = elements[nextIndex];
      let speech = '';

      // Simple logic to simulate screen reader speech
      if (element.tag === 'h1') speech = `Heading level 1, ${element.content}`;
      else if (element.tag === 'h2') speech = `Heading level 2, ${element.content}`;
      else if (element.tag === 'h3') speech = `Heading level 3, ${element.content}`;
      else if (element.tag === 'a') speech = `Link, ${element.content}`;
      else if (element.tag === 'button') speech = `Button, ${element.content}`;
      else if (element.tag === 'img') speech = `Image, ${element.ariaLabel || 'No alternative text'}`;
      else speech = element.content;

      setActiveIndex(nextIndex);
      setHistory((prev) => [...prev, speech]);
    }
  };

  const handleReset = () => {
    setActiveIndex(-1);
    setHistory([]);
  };

  return (
    <section className="sr-simulator-section" aria-labelledby="sr-sim-heading">
      <h2 id="sr-sim-heading">{title}</h2>
      <p>{intro}</p>

      <div className="sr-simulator-container">
        <div className="sr-simulator-view" aria-hidden="true">
          <h3>Visual Page View</h3>
          <div className="mock-page">
            {elements.map((el, i) => {
              const Tag = el.tag;
              const isActive = i === activeIndex;
              return (
                <Tag
                  key={i}
                  className={`mock-element ${isActive ? 'is-active' : ''}`}
                  href={el.href}
                >
                  {el.content}
                </Tag>
              );
            })}
          </div>
        </div>

        <div className="sr-simulator-output">
          <h3>Screen Reader Output (Text-to-Speech)</h3>
          <div className="sr-output-terminal" role="log" aria-live="polite">
            {history.length === 0 ? (
              <p className="sr-terminal-placeholder">Press "Next" to start reading...</p>
            ) : (
              <ul>
                {history.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            )}
            <div ref={outputEndRef} />
          </div>

          <div className="sr-simulator-controls">
            <button
              onClick={handleNext}
              disabled={activeIndex >= elements.length - 1}
              className="sr-sim-btn next-btn"
            >
              Next Element
            </button>
            <button onClick={handleReset} className="sr-sim-btn reset-btn">
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
