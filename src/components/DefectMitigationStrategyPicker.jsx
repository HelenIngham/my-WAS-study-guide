// components/DefectMitigationStrategyPicker.jsx
import React, { useState } from 'react';
import './DefectMitigationStrategyPicker.css';

const strategies = [
  {
    id: 'roadmap',
    title: 'Obtaining a Roadmap',
    description: 'A document outlining when and how known accessibility defects will be fixed.',
    benefit: 'Provides accountability and a timeline for future compliance.'
  },
  {
    id: 'commitments',
    title: 'Binding Commitments',
    description: 'Legal clauses in contracts that require the vendor to meet accessibility standards.',
    benefit: 'Ensures legal recourse and formalizes the responsibility of the vendor.'
  },
  {
    id: 'alt-access',
    title: 'Alternative Access Plan',
    description: 'A temporary solution or workflow for users who cannot use the defective product.',
    benefit: 'Ensures that users with disabilities can still complete tasks while waiting for a fix.'
  },
  {
    id: 'monitoring',
    title: 'Performance Monitoring',
    description: 'Regularly checking the vendor\'s progress in fixing reported defects.',
    benefit: 'Prevents the vendor from ignoring accessibility issues after the sale.'
  },
  {
    id: 'negotiations',
    title: 'Contract Negotiations',
    description: 'Using accessibility performance as a factor during renewals or initial buying.',
    benefit: 'Provides financial leverage to ensure accessibility is prioritized.'
  }
];

export default function DefectMitigationStrategyPicker() {
  const [selectedId, setSelectedId] = useState(null);

  const selectedStrategy = strategies.find(s => s.id === selectedId);

  return (
    <div className="defect-strategy-picker" aria-labelledby="strategy-picker-title">
      <h2 id="strategy-picker-title">Interactive: Exploring Mitigation Strategies</h2>
      <p>Select a strategy to see how it helps mitigate risks when an ICT product has known accessibility defects.</p>
      
      <div className="strategy-grid">
        <div className="strategy-buttons" role="tablist" aria-orientation="vertical">
          {strategies.map((strategy) => (
            <button
              key={strategy.id}
              role="tab"
              aria-selected={selectedId === strategy.id}
              aria-controls={`panel-${strategy.id}`}
              id={`tab-${strategy.id}`}
              className={`strategy-btn ${selectedId === strategy.id ? 'active' : ''}`}
              onClick={() => setSelectedId(strategy.id)}
            >
              {strategy.title}
            </button>
          ))}
        </div>

        <div className="strategy-detail">
          {selectedStrategy ? (
            <div
              id={`panel-${selectedStrategy.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${selectedStrategy.id}`}
              tabIndex="0"
              className="strategy-panel"
            >
              <h3>{selectedStrategy.title}</h3>
              <p><strong>What it is:</strong> {selectedStrategy.description}</p>
              <p className="benefit-box"><strong>Why it works:</strong> {selectedStrategy.benefit}</p>
            </div>
          ) : (
            <div className="strategy-placeholder">
              <p>Please select a strategy from the list to see more details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
