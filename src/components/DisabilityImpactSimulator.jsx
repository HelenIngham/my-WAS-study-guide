import React, { useState } from 'react';
import './DisabilityImpactSimulator.css';

/**
 * DisabilityImpactSimulator component
 * 
 * Interactive learning activity that demonstrates the impact of 
 * accessibility flaws on different user personas.
 */
const personas = [
  {
    id: 'blind',
    name: 'Sarah (Blind, Screen Reader User)',
    description: 'Uses a screen reader (NVDA) and only the keyboard for navigation.',
    disability: 'Blindness'
  },
  {
    id: 'low-vision',
    name: 'Mark (Low Vision, Screen Magnifier User)',
    description: 'Uses screen magnification (200%-400%) and needs high contrast.',
    disability: 'Low Vision'
  },
  {
    id: 'motor',
    name: 'Elena (Motor Disability, Switch Access User)',
    description: 'Uses a single-switch device for navigation; cannot use a mouse.',
    disability: 'Motor Disability'
  },
  {
    id: 'cognitive',
    name: 'David (Cognitive Disability, ADHD/Dyslexia)',
    description: 'Easily distracted by moving elements; needs clear and consistent layouts.',
    disability: 'Cognitive Disability'
  }
];

const flaws = [
  {
    id: 'missing-alt',
    title: 'Missing Alt Text',
    impact: {
      'blind': 'Critical: Images are announced as "image" or by their filename, conveying no meaning.',
      'low-vision': 'Minimal: Can see the image, but might miss details if it\'s not high contrast.',
      'motor': 'None: No direct impact on switch navigation.',
      'cognitive': 'Low: Might find it confusing if the image is decorative but announced by filename.'
    }
  },
  {
    id: 'keyboard-trap',
    title: 'Keyboard Trap',
    impact: {
      'blind': 'Fatal: Cannot navigate past the trap; must refresh the page and hope for the best.',
      'low-vision': 'Moderate: If using a mouse, can escape; if using a keyboard, they are stuck.',
      'motor': 'Fatal: The user is completely unable to move through the interface.',
      'cognitive': 'High: Frustrating and confusing; may lead to abandoning the site.'
    }
  },
  {
    id: 'low-contrast',
    title: 'Low Contrast Text',
    impact: {
      'blind': 'None: Screen reader reads the content regardless of color.',
      'low-vision': 'Critical: Text becomes unreadable, even with magnification.',
      'motor': 'None: No direct impact on navigation.',
      'cognitive': 'Moderate: Strains the eyes and makes reading more difficult and slow.'
    }
  },
  {
    id: 'busy-layout',
    title: 'Complex/Inconsistent Layout',
    impact: {
      'blind': 'High: Difficult to build a mental map of the page structure.',
      'low-vision': 'High: Finding information while zoomed in becomes very difficult.',
      'motor': 'Moderate: Requires more switch presses to find and reach content.',
      'cognitive': 'Critical: Disorienting and overwhelming; makes it hard to focus on tasks.'
    }
  }
];

export default function DisabilityImpactSimulator() {
  const [selectedPersona, setSelectedPersona] = useState(personas[0]);
  const [selectedFlaw, setSelectedFlaw] = useState(flaws[0]);

  return (
    <div className="disability-impact-simulator">
      <h3>Learning Activity: Disability Impact Simulator</h3>
      <p>Select a user persona and an accessibility flaw to see the impact on their experience.</p>

      <div className="simulator-controls-row">
        <div className="control-group">
          <label htmlFor="persona-select"><strong>User Persona:</strong></label>
          <select 
            id="persona-select"
            value={selectedPersona.id}
            onChange={(e) => setSelectedPersona(personas.find(p => p.id === e.target.value))}
          >
            {personas.map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
          <p className="persona-desc"><em>{selectedPersona.description}</em></p>
        </div>

        <div className="control-group">
          <label htmlFor="flaw-select"><strong>Accessibility Flaw:</strong></label>
          <select 
            id="flaw-select"
            value={selectedFlaw.id}
            onChange={(e) => setSelectedFlaw(flaws.find(f => f.id === e.target.value))}
          >
            {flaws.map(f => (
              <option key={f.id} value={f.id}>{f.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="impact-result-card" role="status" aria-live="polite">
        <h4>Impact Analysis</h4>
        <div className="impact-details">
          <p className="impact-severity">
            <strong>Severity for {selectedPersona.disability}:</strong> 
            <span className={`severity-badge ${selectedFlaw.impact[selectedPersona.id].split(':')[0].toLowerCase()}`}>
              {selectedFlaw.impact[selectedPersona.id].split(':')[0]}
            </span>
          </p>
          <p className="impact-description">
            {selectedFlaw.impact[selectedPersona.id].split(':').slice(1).join(':').trim()}
          </p>
        </div>
      </div>

      <div className="simulator-footer">
        <p><strong>Takeaway:</strong> Accessibility is not just about passing tests; it's about the real-world usability impact on diverse users. Testing with people with disabilities helps uncover these critical issues.</p>
      </div>
    </div>
  );
}
