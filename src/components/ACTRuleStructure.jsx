// components/ACTRuleStructure.jsx
import React, { useState } from 'react';
import './ACTRuleStructure.css';

/**
 * ACTRuleStructure Component
 * An interactive explorer that breaks down the parts of an ACT Rule.
 */
const ACTRuleStructure = ({ title = "Explore ACT Rule Structure" }) => {
  const [activePart, setActivePart] = useState(null);

  const ruleParts = [
    {
      id: 'metadata',
      name: 'Rule Metadata',
      description: 'Contains the rule name, unique ID, and versioning info. It identifies what rule this is.',
      example: 'ID: 4e69ce, Name: "Button has accessible name"'
    },
    {
      id: 'applicability',
      name: 'Applicability',
      description: 'Defines exactly which elements in a page the rule applies to. If an element doesn\'t match, the rule is "inapplicable".',
      example: 'Elements with "button" role or <button> elements.'
    },
    {
      id: 'expectations',
      name: 'Expectations',
      description: 'The actual tests that must be passed for the rule to succeed. There can be multiple expectations.',
      example: 'Expectation 1: Element is visible. Expectation 2: Element has a non-empty accessible name.'
    },
    {
      id: 'input-aspects',
      name: 'Input Aspects',
      description: 'Describes what information is needed to perform the test (e.g., the DOM, the Accessibility Tree, CSS, etc.).',
      example: 'The DOM tree and computed style.'
    },
    {
      id: 'mapping',
      name: 'WCAG Mapping',
      description: 'Maps the rule to specific WCAG Success Criteria and tells whether it tests for a "Failure" or a "Pass".',
      example: 'Maps to SC 4.1.2: Name, Role, Value.'
    }
  ];

  return (
    <div className="act-rule-structure" aria-labelledby="ars-title">
      <h2 id="ars-title" className="ars-heading">{title}</h2>
      <p className="ars-intro">
        ACT Rules follow a standard format. Click on each part of the structure below to learn more about its role in accessibility testing.
      </p>

      <div className="ars-diagram-container">
        <div className="ars-diagram" role="list">
          {ruleParts.map((part) => (
            <button
              key={part.id}
              className={`ars-part-btn ${activePart?.id === part.id ? 'active' : ''}`}
              onClick={() => setActivePart(part)}
              aria-expanded={activePart?.id === part.id}
              role="listitem"
            >
              {part.name}
            </button>
          ))}
        </div>

        <div className="ars-details-panel" aria-live="polite">
          {activePart ? (
            <div className="ars-details-content">
              <h3>{activePart.name}</h3>
              <p className="ars-description">{activePart.description}</p>
              <div className="ars-example-box">
                <strong>Example:</strong> <code>{activePart.example}</code>
              </div>
            </div>
          ) : (
            <div className="ars-placeholder">
              <p>Select a part of the rule above to see details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ACTRuleStructure;
