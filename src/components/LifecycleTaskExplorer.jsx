// components/LifecycleTaskExplorer.jsx
import React, { useState } from 'react';
import './LifecycleTaskExplorer.css';

/**
 * LifecycleTaskExplorer - An interactive component to explore tasks in the 
 * accessibility product lifecycle (Plan, Create, Test).
 *
 * Props:
 * - phases: Array<{ id: string, title: string, description: string, tasks: string[] }>
 */
export default function LifecycleTaskExplorer({ phases = [] }) {
  const [activePhaseId, setActivePhaseId] = useState(phases.length > 0 ? phases[0].id : null);

  if (phases.length === 0) return null;

  const activePhase = phases.find((p) => p.id === activePhaseId) || phases[0];

  return (
    <div className="lifecycle-explorer" aria-labelledby="lifecycle-explorer-title">
      <h2 id="lifecycle-explorer-title" className="visually-hidden">Lifecycle Task Explorer</h2>
      <div role="tablist" aria-label="Development phases" className="lifecycle-tabs">
        {phases.map((phase) => (
          <button
            key={phase.id}
            role="tab"
            aria-selected={activePhaseId === phase.id}
            aria-controls={`panel-${phase.id}`}
            id={`tab-${phase.id}`}
            onClick={() => setActivePhaseId(phase.id)}
            className={`lifecycle-tab-btn ${activePhaseId === phase.id ? 'active' : ''}`}
          >
            {phase.title}
          </button>
        ))}
      </div>

      <div
        id={`panel-${activePhase.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activePhase.id}`}
        tabIndex="0"
        className="lifecycle-panel"
      >
        <h3>{activePhase.title} Phase</h3>
        <p className="phase-description">{activePhase.description}</p>
        <ul className="task-list">
          {activePhase.tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
