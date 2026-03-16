import React, { useState } from 'react';
import './MediaAccessibilityDemo.css';

/**
 * MediaAccessibilityDemo component
 * 
 * Demonstrates the impact of missing captions and transcripts on video content.
 * Allows users to toggle "Accessibility Features" to see the difference.
 */
export default function MediaAccessibilityDemo() {
  const [featuresEnabled, setFeaturesEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoTranscript = [
    { time: '0:01', text: '[Soft piano music playing]' },
    { time: '0:03', text: 'Narrator: Welcome to our guide on digital accessibility.' },
    { time: '0:07', text: 'Narrator: Today, we focus on users with auditory disabilities.' },
    { time: '0:12', text: 'Narrator: For many, captions are the only way to access video content.' },
    { time: '0:18', text: '[Music swells, then fades]' }
  ];

  return (
    <section className="media-demo-container" aria-labelledby="media-demo-title">
      <h3 id="media-demo-title">Activity: Media Accessibility Simulator</h3>
      <p>Experience how a user who is deaf or hard-of-hearing interacts with video content when accessibility features are missing versus when they are present.</p>

      <div className="demo-controls">
        <button 
          className={`toggle-btn ${featuresEnabled ? 'enabled' : 'disabled'}`}
          onClick={() => setFeaturesEnabled(!featuresEnabled)}
          aria-pressed={featuresEnabled}
        >
          {featuresEnabled ? '✅ Accessibility Features: ON' : '❌ Accessibility Features: OFF'}
        </button>
      </div>

      <div className="video-simulator">
        <div className={`video-frame ${isPlaying ? 'playing' : 'paused'}`}>
          <div className="video-content">
            {isPlaying ? (
              <div className="video-visuals">
                <div className="animated-circle"></div>
                <p className="visual-desc">Imagine a speaker talking here...</p>
              </div>
            ) : (
              <div className="video-placeholder">
                <button className="play-icon-btn" onClick={() => setIsPlaying(true)} aria-label="Play video simulation">
                   <span aria-hidden="true">▶</span>
                </button>
              </div>
            )}

            {/* Captions Overlay */}
            {isPlaying && featuresEnabled && (
              <div className="captions-overlay" role="status" aria-live="polite">
                <p>Narrator: For many, captions are the only way to access video content.</p>
              </div>
            )}
          </div>
          
          <div className="video-ui-bar">
            <button onClick={() => setIsPlaying(!isPlaying)} aria-label={isPlaying ? "Pause" : "Play"}>
              {isPlaying ? '⏸' : '▶'}
            </button>
            <div className="video-progress" aria-hidden="true">
              <div className="video-progress-fill" style={{ width: isPlaying ? '70%' : '0%' }}></div>
            </div>
            <span className="video-time">0:12 / 0:20</span>
          </div>
        </div>

        {/* Transcript Section */}
        <div className={`transcript-container ${!featuresEnabled ? 'hidden-visually' : ''}`}>
           <h4>Video Transcript</h4>
           <dl className="transcript-list">
             {videoTranscript.map((line, index) => (
               <div key={index} className="transcript-entry">
                 <dt className="transcript-time">{line.time}</dt>
                 <dd className="transcript-text">{line.text}</dd>
               </div>
             ))}
           </dl>
        </div>
      </div>

      {!featuresEnabled && isPlaying && (
        <div className="impact-callout" role="alert">
          <p><strong>The Impact:</strong> Without captions or a transcript, a user who cannot hear the audio has no way of knowing what the narrator is saying or that music is playing. They only see an animated circle with no context.</p>
        </div>
      )}
      
      {featuresEnabled && isPlaying && (
        <div className="success-callout">
          <p><strong>The Fix:</strong> By providing synchronized captions and a descriptive transcript, the content becomes fully accessible to users with auditory disabilities.</p>
        </div>
      )}
    </section>
  );
}
