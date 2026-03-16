import React, { useState } from 'react';
import './ProcurementProcessTimeline.css';

/**
 * New Learning Activity Component: ProcurementProcessTimeline
 * An interactive timeline showing where accessibility fits into the procurement process.
 * 
 * Props:
 * - stages: Array<{ title: string, description: string, accessibilityTask: string }>
 */
export default function ProcurementProcessTimeline({ stages = [] }) {
  const [activeStage, setActiveStage] = useState(null);

  if (stages.length === 0) return null;

  return (
    <div className="procurement-timeline">
      <h2>Interactive Procurement Timeline</h2>
      <p>Select a stage to see the key accessibility tasks involved.</p>
      
      <div className="timeline-container">
        {stages.map((stage, index) => (
          <div 
            key={index} 
            className={`timeline-item ${activeStage === index ? 'active' : ''}`}
          >
            <button 
              className="timeline-button"
              onClick={() => setActiveStage(activeStage === index ? null : index)}
              aria-expanded={activeStage === index}
              aria-controls={`stage-content-${index}`}
            >
              <span className="stage-number">{index + 1}</span>
              <span className="stage-title">{stage.title}</span>
            </button>
            
            {activeStage === index && (
              <div 
                id={`stage-content-${index}`} 
                className="stage-details"
                role="region"
                aria-live="polite"
              >
                <h3>{stage.title}</h3>
                <p><strong>Description:</strong> {stage.description}</p>
                <div className="accessibility-action">
                  <strong>Accessibility Task:</strong>
                  <p>{stage.accessibilityTask}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
