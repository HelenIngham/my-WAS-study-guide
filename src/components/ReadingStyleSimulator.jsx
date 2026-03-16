import React, { useState } from 'react';
import Callout from './Callout';
import './ReadingStyleSimulator.css';

const ReadingStyleSimulator = () => {
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [colors, setColors] = useState({ bg: '#ffffff', text: '#000000' });

  const resetStyles = () => {
    setFontSize(16);
    setLineHeight(1.5);
    setLetterSpacing(0);
    setFontFamily('sans-serif');
    setColors({ bg: '#ffffff', text: '#000000' });
  };

  const textStyle = {
    fontSize: `${fontSize}px`,
    lineHeight: lineHeight,
    letterSpacing: `${letterSpacing}px`,
    fontFamily: fontFamily,
    backgroundColor: colors.bg,
    color: colors.text,
    padding: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    transition: 'all 0.2s ease',
  };

  const colorSchemes = [
    { name: 'Default', bg: '#ffffff', text: '#000000' },
    { name: 'High Contrast (Black/White)', bg: '#000000', text: '#ffffff' },
    { name: 'High Contrast (Yellow/Black)', bg: '#ffff00', text: '#000000' },
    { name: 'Soft (Sepia)', bg: '#f4ecd8', text: '#5b4636' },
    { name: 'Dark Mode', bg: '#121212', text: '#e0e0e0' },
  ];

  return (
    <div className="reading-simulator">
      <h3>Interactive Demo: Customizing Text Presentation</h3>
      <p>
        Users with limited reading capacities often change how text is presented in their browser to improve readability. 
        Use the controls below to see how different settings affect the same content.
      </p>

      <div className="simulator-controls" role="group" aria-label="Text presentation controls">
        <div className="control-row">
          <div className="control-item">
            <label htmlFor="font-size-slider">Font Size: {fontSize}px</label>
            <input
              id="font-size-slider"
              type="range"
              min="12"
              max="32"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
            />
          </div>
          <div className="control-item">
            <label htmlFor="line-height-slider">Line Spacing: {lineHeight}</label>
            <input
              id="line-height-slider"
              type="range"
              min="1"
              max="3"
              step="0.1"
              value={lineHeight}
              onChange={(e) => setLineHeight(parseFloat(e.target.value))}
            />
          </div>
          <div className="control-item">
            <label htmlFor="letter-spacing-slider">Letter Spacing: {letterSpacing}px</label>
            <input
              id="letter-spacing-slider"
              type="range"
              min="0"
              max="10"
              value={letterSpacing}
              onChange={(e) => setLetterSpacing(parseInt(e.target.value))}
            />
          </div>
        </div>

        <div className="control-row">
          <div className="control-item">
            <label htmlFor="font-family-select">Font Family</label>
            <select
              id="font-family-select"
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
            >
              <option value="sans-serif">Sans-serif (e.g., Arial, Helvetica)</option>
              <option value="serif">Serif (e.g., Times New Roman)</option>
              <option value="monospace">Monospace (e.g., Courier)</option>
              <option value="'OpenDyslexic', sans-serif">OpenDyslexic (Simulated)</option>
            </select>
          </div>
          <div className="control-item">
            <label htmlFor="color-scheme-select">Color Scheme</label>
            <select
              id="color-scheme-select"
              onChange={(e) => {
                const scheme = colorSchemes.find(s => s.name === e.target.value);
                if (scheme) setColors({ bg: scheme.bg, text: scheme.text });
              }}
            >
              {colorSchemes.map(scheme => (
                <option key={scheme.name} value={scheme.name}>{scheme.name}</option>
              ))}
            </select>
          </div>
          <div className="control-item">
            <button className="reset-button" onClick={resetStyles}>Reset Styles</button>
          </div>
        </div>
      </div>

      <div className="text-preview" style={textStyle}>
        <h4>Sample Content: Understanding TTS</h4>
        <p>
          Text-to-speech software (TTS) is a commonly used assistive technology for reading. 
          When using TTS, you can see and hear text read aloud simultaneously. 
          Words clicked on or highlighted are read by a computer-generated voice. 
          This helps people focus their energy on comprehending the text instead of decoding the words.
        </p>
        <p>
          It is crucial that text is offered as real text and not as images of text. 
          Otherwise, it becomes difficult or impossible for assistive technology and browser settings to alter the text.
        </p>
      </div>
      
      <Callout title="Why this matters" type="info">
        <p>
          If your layout is too rigid (e.g., fixed heights on containers), increasing font size or line spacing can cause 
          text to overlap or become cut off. Always use flexible containers and relative units (rem, em, %) to ensure 
          your interface remains usable when users customize their view.
        </p>
      </Callout>
    </div>
  );
};

export default ReadingStyleSimulator;
