import React, { useState } from 'react';
import './TouchTargetSimulator.css';

/**
 * TouchTargetSimulator component
 * 
 * Demonstrates the impact of touch target size and spacing on accessibility.
 * Relates to WCAG 2.1 SC 2.5.5 Target Size (AAA) and 2.5.8 Target Size (Minimum) (AA in WCAG 2.2).
 */
export default function TouchTargetSimulator() {
  const [useAccessible, setUseAccessible] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [misclicked, setMisclicked] = useState(0);

  const items = [
    { id: 1, label: 'Edit' },
    { id: 2, label: 'Save' },
    { id: 3, label: 'Delete' },
    { id: 4, label: 'Cancel' }
  ];

  const handleItemClick = (e, item) => {
    e.stopPropagation();
    setClickedItem(item.label);
    setMisclicked(0);
    setTimeout(() => setClickedItem(null), 1500);
  };

  const handleContainerClick = () => {
    if (!clickedItem) {
      setMisclicked(prev => prev + 1);
      setTimeout(() => setMisclicked(0), 1500);
    }
  };

  return (
    <section className="touch-target-simulator" aria-labelledby="touch-sim-title">
      <h3 id="touch-sim-title">Interactive Demo: Touch Target Size & Spacing</h3>
      <p>
        Small or tightly packed buttons are difficult to activate, especially for users with motor disabilities or those using a device on the go.
        <strong> WCAG 2.1 (AAA) 2.5.5</strong> requires a target size of at least 44x44 CSS pixels.
        <strong> WCAG 2.2 (AA) 2.5.8</strong> requires at least 24x24 CSS pixels with adequate spacing.
      </p>

      <div className="simulator-controls">
        <label className="toggle-label">
          <input 
            type="checkbox" 
            checked={useAccessible} 
            onChange={() => {
              setUseAccessible(!useAccessible);
              setClickedItem(null);
              setMisclicked(0);
            }} 
          />
          Enable Accessible Sizing (44x44px + spacing)
        </label>
      </div>

      <div 
        className={`simulator-area ${useAccessible ? 'accessible' : 'inaccessible'}`}
        onClick={handleContainerClick}
        aria-hidden="true"
      >
        <div className="target-container">
          {items.map(item => (
            <button
              key={item.id}
              className="sim-button"
              onClick={(e) => handleItemClick(e, item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="simulator-feedback" role="status" aria-live="polite">
        {clickedItem && <p className="success-msg">Success! You clicked: <strong>{clickedItem}</strong></p>}
        {misclicked > 0 && <p className="error-msg">Oops! You missed the target. (Misclicks: {misclicked})</p>}
        {!clickedItem && misclicked === 0 && <p className="hint-msg">Try to click the buttons above.</p>}
      </div>

      <div className="demo-explanation">
        <p>
          <strong>Observation:</strong> In the "Inaccessible" mode, buttons are small (approx 20px) and have no spacing. It's very easy to click between them or hit the wrong one. 
          The "Accessible" mode ensures each button is at least 44x44 pixels, making them much easier to target.
        </p>
      </div>
    </section>
  );
}
