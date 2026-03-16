import React, { useState, useRef, useEffect } from 'react';
import './LiveRegionDemo.css';

/**
 * Component to demonstrate AJAX-like content updates and screen reader notifications.
 * It shows two methods:
 * 1. Sending focus to the new content.
 * 2. Using aria-live to announce content.
 */
export default function LiveRegionDemo() {
  const [method, setMethod] = useState('focus'); // 'focus' or 'live'
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const contentRef = useRef(null);
  const [liveMessage, setLiveMessage] = useState('');

  const loadContent = () => {
    setIsLoading(true);
    setContent(null);
    setLiveMessage('');

    // Simulate AJAX delay
    setTimeout(() => {
      const newContent = {
        title: "Dynamic Content Loaded",
        text: "This content was loaded asynchronously. Depending on the method chosen, your screen reader should have notified you."
      };
      setContent(newContent);
      setIsLoading(false);

      if (method === 'focus') {
        // Method 1: Send focus to the new content
        // We'll use a small delay to ensure React has rendered the new content
        setTimeout(() => {
          contentRef.current?.focus();
        }, 100);
      } else {
        // Method 2: Use aria-live to announce content
        setLiveMessage(`New content loaded: ${newContent.title}. ${newContent.text}`);
      }
    }, 1000);
  };

  return (
    <div className="live-region-demo">
      <h3>Interactive Demo: Loading AJAX Content</h3>
      <p>Select a method and click the button to see how screen readers handle new content.</p>

      <div className="demo-controls">
        <fieldset>
          <legend className="sr-only">Notification Method</legend>
          <label>
            <input
              type="radio"
              name="notification-method"
              value="focus"
              checked={method === 'focus'}
              onChange={() => setMethod('focus')}
            />
            Send Focus to Content
          </label>
          <label>
            <input
              type="radio"
              name="notification-method"
              value="live"
              checked={method === 'live'}
              onChange={() => setMethod('live')}
            />
            Use aria-live Announcement
          </label>
        </fieldset>

        <button 
          onClick={loadContent} 
          disabled={isLoading}
          className="demo-button"
        >
          {isLoading ? 'Loading...' : 'Load New Content'}
        </button>
      </div>

      <div className="demo-display">
        {/* Hidden live region for announcements */}
        <div 
          className="sr-only" 
          aria-live="polite" 
          aria-atomic="true"
        >
          {liveMessage}
        </div>

        {isLoading && (
          <div className="loading-indicator" aria-busy="true">
            <p>Fetching content...</p>
          </div>
        )}

        {content && (
          <div 
            className="dynamic-content" 
            ref={contentRef} 
            tabIndex="-1"
            role="region"
            aria-labelledby="dynamic-title"
          >
            <h4 id="dynamic-title">{content.title}</h4>
            <p>{content.text}</p>
          </div>
        )}
      </div>
      
      <div className="demo-explanation">
        {method === 'focus' ? (
          <p><strong>Focus Method:</strong> When the content is loaded, the focus is programmatically moved to the container of the new content. Screen readers will start reading from the beginning of the focused element.</p>
        ) : (
          <p><strong>Aria-live Method:</strong> When the content is loaded, an invisible <code>aria-live</code> region is updated with a summary of the change. The screen reader announces this message without moving the user's focus.</p>
        )}
      </div>
    </div>
  );
}
