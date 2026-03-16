import React, { useState } from 'react';
import './ThemingSimulator.css';

/**
 * ThemingSimulator component
 * 
 * Allows users to toggle different accessibility themes mentioned in the content:
 * - Default
 * - Color Blindness (No Red/Green)
 * - Dyslexic (No Italics/Justification)
 * - Autistic (No Neon/No Motion)
 */
export default function ThemingSimulator() {
  const [activeTheme, setActiveTheme] = useState('default');

  const themes = [
    { id: 'default', label: 'Default Theme', description: 'Standard layout and colors.' },
    { id: 'colorblind', label: 'Color Blindness Theme', description: 'Eliminates red and green, using alternative colors.' },
    { id: 'dyslexic', label: 'Dyslexic Theme', description: 'Removes italics and text justification to improve readability.' },
    { id: 'autistic', label: 'Autistic Theme', description: 'Removes neon colors and stops all animations/motion.' },
  ];

  const getThemeClass = () => `theming-demo-${activeTheme}`;

  return (
    <section className="theming-simulator" aria-labelledby="theming-sim-title">
      <h3 id="theming-sim-title">Interactive Activity: Theming for Accessibility</h3>
      <p>Select a theme to see how specific design choices can impact accessibility for different user groups.</p>
      
      <div className="theme-controls" role="group" aria-label="Select a theme to preview">
        {themes.map((theme) => (
          <button
            key={theme.id}
            className={`theme-toggle-btn ${activeTheme === theme.id ? 'active' : ''}`}
            onClick={() => setActiveTheme(theme.id)}
            aria-pressed={activeTheme === theme.id}
          >
            {theme.label}
          </button>
        ))}
      </div>

      <div className={`theme-preview-area ${getThemeClass()}`} aria-live="polite">
        <h4>{themes.find(t => t.id === activeTheme).label} Preview</h4>
        <p className="theme-description">{themes.find(t => t.id === activeTheme).description}</p>
        
        <div className="preview-content">
          <div className="preview-box neon-box">
             <span className="box-text">High Contrast / Neon Area</span>
          </div>
          
          <div className="status-indicators">
            <span className="indicator red-indicator">Error (Red)</span>
            <span className="indicator green-indicator">Success (Green)</span>
          </div>

          <p className="preview-text-sample">
            This is a sample paragraph. <em>Italics are often used for emphasis</em>, but can be hard to read for some. 
            Text justification creates uneven spacing between words, known as "rivers of white," which can be distracting and difficult for users with dyslexia.
          </p>

          <div className="motion-box">
            <div className="moving-dot"></div>
            <span>Animation Example</span>
          </div>
        </div>
      </div>

      <div className="theming-takeaway">
        <p><strong>Note:</strong> Customization allows users to modify the interface to meet their specific requirements manually, while theming provides sensible defaults for common needs.</p>
      </div>
    </section>
  );
}
