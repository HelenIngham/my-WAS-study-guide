import React, { useState } from 'react';
import './TextSpacingDemo.css';

/**
 * TextSpacingDemo component
 * 
 * Demonstrates the impact of text spacing on readability and layout, 
 * as per WCAG 1.4.12 Text Spacing.
 * 
 * Standard spacings to test:
 * - Line height (line spacing) to at least 1.5 times the font size
 * - Spacing following paragraphs to at least 2 times the font size
 * - Letter spacing (tracking) to at least 0.12 times the font size
 * - Word spacing to at least 0.16 times the font size
 */
const TextSpacingDemo = () => {
  const [isSpaced, setIsSpaced] = useState(false);

  const toggleSpacing = () => {
    setIsSpaced(!isSpaced);
  };

  const spacingStyles = isSpaced ? {
    lineHeight: '1.5',
    marginBottom: '2em', // Equivalent to 2x font size for paragraph spacing
    letterSpacing: '0.12em',
    wordSpacing: '0.16em'
  } : {};

  return (
    <div className="text-spacing-demo-container">
      <h3>Interactive Demo: Text Spacing (WCAG 1.4.12)</h3>
      <p>
        Users with low vision or dyslexia may increase text spacing to improve readability. 
        A compliant page must ensure that increasing spacing doesn't cause content to overlap or disappear.
      </p>

      <div className="controls">
        <button 
          onClick={toggleSpacing}
          aria-pressed={isSpaced}
          className="simulator-button"
        >
          {isSpaced ? 'Reset to Default' : 'Apply Custom Text Spacing'}
        </button>
      </div>

      <div className={`demo-box ${isSpaced ? 'custom-spacing' : ''}`} aria-live="polite">
        <div className="demo-card">
          <h4 style={isSpaced ? { letterSpacing: '0.12em', wordSpacing: '0.16em' } : {}}>Article Title</h4>
          <p style={spacingStyles}>
            This is a sample paragraph that demonstrates how text spacing affects layout. 
            When spacing is increased, the content takes up more vertical space.
          </p>
          <p style={spacingStyles}>
            If a container has a fixed height, the text might "overflow" and become unreadable 
            or be cut off. Standardized spacing includes line height, paragraph spacing, 
            letter spacing, and word spacing.
          </p>
          <div className="demo-footer">
            <button className="demo-btn">Read More</button>
          </div>
        </div>
        
        <div className="bad-example-card">
          <h4>Fixed Height Container (Potential Failure)</h4>
          <div className="fixed-height-box">
             <p style={spacingStyles}>
                This box has a fixed height. If you apply custom spacing, the text might 
                be cut off or overlap with other elements, which is a WCAG failure.
             </p>
          </div>
        </div>
      </div>
      
      <div className="takeaway">
        <p><strong>Success Criterion 1.4.12:</strong> No loss of content or functionality occurs by setting all of the following and by changing no other style property: line height to 1.5, paragraph spacing to 2, letter spacing to 0.12, and word spacing to 0.16.</p>
      </div>
    </div>
  );
};

export default TextSpacingDemo;
