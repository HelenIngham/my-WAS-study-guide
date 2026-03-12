import React from 'react';
import './ProgressiveEnhancementDiagram.css';

const ProgressiveEnhancementDiagram = () => {
  const reasons = [
    'Old browsers',
    'Restrictive settings',
    'Bandwidth limitations',
    'Internal company policies'
  ];

  return (
    <div className="pe-diagram" aria-labelledby="pe-diagram-title">
      <h3 id="pe-diagram-title" className="visually-hidden">Progressive Enhancement Diagram</h3>
      
      <div className="pe-diagram__container" aria-hidden="true">
        <div className="pe-diagram__layer pe-diagram__layer--enhanced">
          <span className="pe-diagram__label">Full Experience (with JavaScript)</span>
          
          <div className="pe-diagram__layer pe-diagram__layer--core">
            <span className="pe-diagram__label">Core: Essential Content & Functionality</span>
          </div>
        </div>
      </div>

      <div className="pe-diagram__legend">
        <h4>Why JavaScript might be unavailable:</h4>
        <ul className="pe-diagram__reasons">
          {reasons.map((reason, index) => (
            <li key={index} className="pe-diagram__reason-item">{reason}</li>
          ))}
        </ul>
      </div>

      <div className="visually-hidden">
        <p>
          The diagram illustrates Progressive Enhancement as a layered approach. 
          The core consists of essential content and functionality which must be available to everyone. 
          The outer layer is the full experience which includes JavaScript-enhanced features.
          JavaScript may be unavailable due to: {reasons.join(', ')}.
        </p>
      </div>
    </div>
  );
};

export default ProgressiveEnhancementDiagram;
