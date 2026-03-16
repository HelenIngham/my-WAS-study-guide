import React, { useState } from 'react';
import './DecisionFactorCard.css';

/**
 * DecisionFactorCard Component
 * A new interactive learning activity for exploring decision factors in remediation vs redesign.
 */
const DecisionFactorCard = ({ factors = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFactor = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="decision-factors-activity" aria-labelledby="factors-heading">
      <h3 id="factors-heading" className="factors-title">Explore Decision Factors</h3>
      <p className="factors-intro">Click on each factor to see how it influences the decision to remediate or redesign.</p>
      <div className="factors-grid">
        {factors.map((factor, index) => (
          <div 
            key={index} 
            className={`factor-card ${activeIndex === index ? 'active' : ''}`}
          >
            <button 
              className="factor-header" 
              onClick={() => toggleFactor(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`factor-content-${index}`}
            >
              <span className="factor-name">{factor.name}</span>
              <span className="factor-icon" aria-hidden="true">{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div 
              id={`factor-content-${index}`} 
              className="factor-body" 
              hidden={activeIndex !== index}
            >
              <p className="factor-desc">{factor.description}</p>
              {factor.remediationTip && (
                <div className="factor-tip remediation">
                  <strong>Remediation:</strong> {factor.remediationTip}
                </div>
              )}
              {factor.rewriteTip && (
                <div className="factor-tip rewrite">
                  <strong>Rewrite:</strong> {factor.rewriteTip}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DecisionFactorCard;
