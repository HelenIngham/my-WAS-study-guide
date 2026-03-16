import React, { useState } from 'react';
import './MaturityModelLevelExplorer.css';

/**
 * MaturityModelLevelExplorer
 * A new learning activity component for exploring maturity model levels.
 */
export default function MaturityModelLevelExplorer({ 
  levels = [
    { title: 'Level 1: Initial', description: 'Ad-hoc, informal processes; accessibility is rarely considered.' },
    { title: 'Level 2: Managed', description: 'Developing awareness; some accessibility processes are documented.' },
    { title: 'Level 3: Defined', description: 'Accessibility is integrated into standard operating procedures.' },
    { title: 'Level 4: Predictable', description: 'Processes are measured and controlled for effectiveness.' },
    { title: 'Level 5: Optimizing', description: 'Continuous improvement focused on accessibility innovation.' }
  ],
  title = 'Maturity Level Explorer',
  instructions = 'Click on each level to learn more about the progression of accessibility maturity in an organization.'
}) {
  const [activeLevel, setActiveLevel] = useState(null);

  return (
    <div className="maturity-explorer">
      <h3>{title}</h3>
      <p>{instructions}</p>
      
      <div className="maturity-levels-container" role="tablist" aria-label="Maturity Levels">
        {levels.map((level, index) => (
          <div key={index} className="maturity-level-item">
            <button
              id={`level-btn-${index}`}
              className={`maturity-level-btn ${activeLevel === index ? 'active' : ''}`}
              onClick={() => setActiveLevel(activeLevel === index ? null : index)}
              aria-expanded={activeLevel === index}
              aria-controls={`level-panel-${index}`}
              role="tab"
              aria-selected={activeLevel === index}
            >
              <span className="level-index">{index + 1}</span>
              <span className="level-title">{level.title}</span>
            </button>
            
            <div
              id={`level-panel-${index}`}
              className={`maturity-level-content ${activeLevel === index ? 'show' : ''}`}
              role="tabpanel"
              aria-labelledby={`level-btn-${index}`}
              hidden={activeLevel !== index}
            >
              <p>{level.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
