import React, { useState } from 'react';
import './PointerGestureDemo.css';

/**
 * PointerGestureDemo component
 * 
 * Demonstrates path-based gestures vs single pointer activation.
 * This directly relates to WCAG 2.1 SC 2.5.1 Pointer Gestures.
 */
export default function PointerGestureDemo() {
  const [sliderValue, setSliderValue] = useState(50);
  const [showPath, setShowPath] = useState(false);

  const increment = () => setSliderValue(prev => Math.min(prev + 10, 100));
  const decrement = () => setSliderValue(prev => Math.max(prev - 10, 0));

  return (
    <section className="pointer-gesture-demo" aria-labelledby="pointer-demo-title">
      <h3 id="pointer-demo-title">Interactive Demo: Pointer Gestures</h3>
      <p>
        Some users cannot perform complex gestures like swiping or dragging.
        According to <strong>WCAG 2.5.1</strong>, functionality that uses path-based or multi-point gestures must also be operable with a single pointer without a path-based gesture.
      </p>

      <div className="demo-comparison">
        <div className="demo-box gesture-only">
          <h4>Complex Gesture Only (Dragging)</h4>
          <p className="description">Imagine this slider only works by dragging the handle precisely.</p>
          <div className="track">
             <div 
               className="handle" 
               style={{ left: `${sliderValue}%` }}
               onMouseDown={() => setShowPath(true)}
               onMouseUp={() => setShowPath(false)}
             ></div>
          </div>
          {showPath && <div className="path-indicator" role="presentation">Required path: ↔</div>}
          <p className="warning-text">Users with tremors or using eye-trackers may fail to drag this correctly.</p>
        </div>

        <div className="demo-box single-pointer">
          <h4>Single Pointer Accessible (Buttons)</h4>
          <p className="description">The same functionality, but with single-click buttons to control it.</p>
          <div className="track" aria-hidden="true">
             <div className="handle" style={{ left: `${sliderValue}%` }}></div>
          </div>
          <div className="controls">
            <button onClick={decrement} aria-label="Decrease value">-</button>
            <span className="current-value" aria-live="polite">Value: {sliderValue}%</span>
            <button onClick={increment} aria-label="Increase value">+</button>
          </div>
          <p className="success-text">Buttons allow for simple, discrete activations that don't require precise dragging.</p>
        </div>
      </div>

      <div className="demo-explanation">
         <p>
           <strong>The Fix:</strong> Provide a redundant control that uses a simple click or tap.
           In this case, the <code>+</code> and <code>-</code> buttons provide the single-pointer alternative to dragging the slider.
         </p>
      </div>
    </section>
  );
}
