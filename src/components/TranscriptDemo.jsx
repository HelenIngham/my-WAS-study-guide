import React, { useState } from 'react';
import './TranscriptDemo.css';

/**
 * TranscriptDemo component
 * 
 * Demonstrates a transcript with a toggle (disclosure) and its importance.
 */
export default function TranscriptDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="transcript-demo">
      <div className="audio-player-mock" role="region" aria-label="Mock Audio Player">
        <div className="audio-controls">
          <button className="play-btn" aria-label="Play audio">▶</button>
          <div className="progress-bar" aria-hidden="true">
            <div className="progress-fill" style={{ width: '30%' }}></div>
          </div>
          <span className="time">1:20 / 4:35</span>
        </div>
      </div>

      <div className="transcript-section">
        <button
          className="transcript-toggle"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="transcript-content"
        >
          {isOpen ? 'Hide Transcript' : 'Show Transcript'}
        </button>
        
        {isOpen && (
          <div id="transcript-content" className="transcript-content" role="region" aria-label="Audio Transcript">
            <h4>Audio Transcript</h4>
            <p>
              <strong>Narrator:</strong> Welcome to our session on auditory disabilities. 
              In this audio, we'll discuss why transcripts are essential.
            </p>
            <p>
              <strong>Narrator:</strong> For individuals who are deaf or hard of hearing, 
              audio-only content is inaccessible without a text equivalent. 
              A transcript provides that equivalent information.
            </p>
            <p>
              <strong>Narrator:</strong> It's also helpful for people in noisy environments 
              or those who prefer reading over listening.
            </p>
          </div>
        )}
      </div>
      
      <div className="demo-explanation">
        <p><em>Learning Point:</em> Providing a transcript via a "show/hide" (disclosure) functionality allows users with auditory disabilities to access the same information as the audio-only content, while keeping the interface clean for others.</p>
      </div>
    </div>
  );
}
