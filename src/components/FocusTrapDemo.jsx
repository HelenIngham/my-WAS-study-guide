// components/FocusTrapDemo.jsx
import React, { useState, useRef, useEffect } from 'react';
import './FocusTrapDemo.css';

/**
 * FocusTrapDemo component
 * 
 * Demonstrates focus trapping in a modal dialog.
 */
export default function FocusTrapDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      firstElement?.focus();

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          triggerRef.current?.focus();
        }
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <button
        ref={triggerRef}
        className="demo-button"
        onClick={openModal}
      >
        Open Modal Dialog
      </button>

      {isOpen && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="modal-dialog"
          >
            <h3 id="modal-title">Focus Trap Demo</h3>
            <p>
              Try pressing Tab repeatedly. Focus will cycle through the
              elements inside this dialog and won't escape to the page behind.
            </p>
            <label htmlFor="modal-input">Sample Input:</label>
            <input type="text" id="modal-input" />
            <div className="modal-actions">
              <button onClick={closeModal}>Cancel</button>
              <button onClick={closeModal}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
