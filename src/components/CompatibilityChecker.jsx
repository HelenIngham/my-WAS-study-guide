import React, { useState } from 'react';
import './CompatibilityChecker.css';

const combinations = {
  Windows: [
    'JAWS and Google Chrome',
    'NVDA and Firefox or NVDA and Chrome',
    'Narrator and Edge'
  ],
  MacOS: [
    'VoiceOver and Safari'
  ],
  iOS: [
    'VoiceOver and Safari'
  ],
  Android: [
    'TalkBack and Chrome'
  ]
};

const CompatibilityChecker = () => {
  const [selectedOS, setSelectedOS] = useState('');

  const handleOSChange = (event) => {
    setSelectedOS(event.target.value);
  };

  return (
    <div className="compatibility-checker" aria-labelledby="cc-title">
      <h3 id="cc-title">Activity: Guaranteed Compatibility Combinations</h3>
      <p>Select an Operating System to see the recommended Screen Reader and Browser combinations.</p>
      
      <div className="os-selector">
        <label htmlFor="os-select">Choose Operating System:</label>
        <select 
          id="os-select" 
          value={selectedOS} 
          onChange={handleOSChange}
          aria-describedby="recommendation-status"
        >
          <option value="">-- Select OS --</option>
          {Object.keys(combinations).map((os) => (
            <option key={os} value={os}>{os}</option>
          ))}
        </select>
      </div>

      <div 
        id="recommendation-status" 
        className="recommendation-display" 
        role="status" 
        aria-live="polite"
      >
        {selectedOS ? (
          <>
            <h4>Recommended for {selectedOS}:</h4>
            <ul className="recommendation-list">
              {combinations[selectedOS].map((combo, index) => (
                <li key={index}>{combo}</li>
              ))}
            </ul>
          </>
        ) : (
          <p className="recommendation-placeholder">Please select an OS to see recommendations.</p>
        )}
      </div>
    </div>
  );
};

export default CompatibilityChecker;
