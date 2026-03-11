// components/Flashcard.jsx
import React from 'react';
import './Flashcard.css';

/**
 * Single Flashcard component
 *
 * Props:
 * - front: string | React.ReactNode (content for the front side)
 * - back: string | React.ReactNode (content for the back side)
 * - isFlipped: boolean (current flip state)
 * - onFlip: () => void (callback when card is clicked or activated)
 * - ariaLabel: string (accessible label for the card)
 */
export default function Flashcard({
  front,
  back,
  isFlipped,
  onFlip,
  ariaLabel,
}) {
  return (
    <div
      className={`flashcard ${isFlipped ? 'flipped' : ''}`}
      onClick={onFlip}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onFlip();
        }
      }}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
      aria-label={ariaLabel}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <p>{front}</p>
          <span className="flip-hint">Click to flip</span>
        </div>
        <div className="flashcard-back">
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
}
