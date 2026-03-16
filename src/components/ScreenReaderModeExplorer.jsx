// src/components/ScreenReaderModeExplorer.jsx
import React, { useState } from 'react';
import './ScreenReaderModeExplorer.css';

const modes = [
  {
    name: 'Browse Mode / Read Mode',
    description: 'The default mode for reading web content. Single letters like "H" for headings, "L" for lists, and "B" for buttons are used for navigation.',
    behavior: 'Pressing "H" jumps to the next heading.',
    scenario: 'You want to quickly scan the page structure to find a specific section.',
  },
  {
    name: 'Forms Mode / Focus Mode',
    description: 'Used for interacting with form controls. Normal keyboard behavior is restored so you can type into fields.',
    behavior: 'Pressing "H" types the letter "H" into the current text field.',
    scenario: 'You are filling out your name and address in an online form.',
  },
  {
    name: 'Application Mode',
    description: 'Used for complex ARIA widgets where the web application handles all keyboard input.',
    behavior: 'The screen reader passes almost all keystrokes directly to the application.',
    scenario: 'You are using a web-based code editor or a complex spreadsheet application.',
  }
];

export default function ScreenReaderModeExplorer() {
  const [activeMode, setActiveMode] = useState(0);

  return (
    <div className="mode-explorer" aria-labelledby="mode-explorer-title">
      <h3 id="mode-explorer-title">Interactive: Screen Reader Modes</h3>
      <p>Explore how different screen reader modes change keyboard behavior and interaction.</p>
      
      <div className="mode-tabs" role="tablist">
        {modes.map((mode, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeMode === index}
            aria-controls={`mode-panel-${index}`}
            id={`mode-tab-${index}`}
            className={`mode-tab ${activeMode === index ? 'active' : ''}`}
            onClick={() => setActiveMode(index)}
          >
            {mode.name.split(' / ')[0]}
          </button>
        ))}
      </div>

      <div
        id={`mode-panel-${activeMode}`}
        role="tabpanel"
        aria-labelledby={`mode-tab-${activeMode}`}
        className="mode-panel"
      >
        <h4>{modes[activeMode].name}</h4>
        <div className="mode-content">
          <p><strong>Description:</strong> {modes[activeMode].description}</p>
          <div className="mode-behavior">
            <strong>Key Behavior:</strong> 
            <code>{modes[activeMode].behavior}</code>
          </div>
          <p className="mode-scenario">
            <strong>When to use:</strong> {modes[activeMode].scenario}
          </p>
        </div>
      </div>
    </div>
  );
}
