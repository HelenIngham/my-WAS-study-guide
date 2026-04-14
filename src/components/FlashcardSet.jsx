// components/FlashcardSet.jsx
import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './FlashcardSet.css';

/**
 * Component to manage a set of flashcards with navigation
 *
 * Props:
 * - cards: Array<{ front: string, back: string }>
 */
export default function FlashcardSet({ cards = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 200);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 200);
  };

  if (cards.length === 0) return null;

  const currentCard = cards[currentIndex];

  return (
    <div className="flashcard-set" aria-roledescription="flashcards">
      <div className="flashcard-status" aria-live="polite">
        <p className="flashcard-counter">
          Flashcard {currentIndex + 1} of {cards.length}
        </p>
      </div>
      <div className="flashcard-container">
        <button
          className="flashcard-nav prev"
          onClick={prevCard}
          aria-label="Previous flashcard"
        >
          ←
        </button>

        <Flashcard
          front={currentCard.front}
          back={currentCard.back}
          isFlipped={isFlipped}
          onFlip={() => setIsFlipped(!isFlipped)}
          ariaLabel={`Flashcard ${currentIndex + 1} of ${cards.length}. ${isFlipped ? 'Answer showing' : 'Click to flip'}`}
        />

        <button
          className="flashcard-nav next"
          onClick={nextCard}
          aria-label="Next flashcard"
        >
          →
        </button>
      </div>
    </div>
  );
}
