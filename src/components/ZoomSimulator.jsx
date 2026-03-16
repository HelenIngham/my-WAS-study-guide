import React, { useState } from 'react';
import './ZoomSimulator.css';

const ZoomSimulator = () => {
  const [zoom, setZoom] = useState(1);
  const [isInverted, setIsInverted] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleZoomChange = (e) => {
    setZoom(parseFloat(e.target.value));
  };

  const toggleInversion = () => {
    setIsInverted(!isInverted);
  };

  const handleMouseMove = (e) => {
    if (zoom > 1) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPosition({ x, y });
    }
  };

  const containerStyle = {
    filter: isInverted ? 'invert(100%)' : 'none',
  };

  const contentStyle = {
    transformOrigin: `${position.x}% ${position.y}%`,
    transform: `scale(${zoom})`,
  };

  return (
    <div className="zoom-simulator-container">
      <h3>Interactive Demo: Magnification & Color Inversion</h3>
      <p>
        Users with low vision often use magnification and color inversion. 
        Adjust the slider to zoom in and out, and toggle the color inversion.
        When zoomed in, move your mouse to explore different parts of the content (simulating focus tracking).
      </p>

      <div className="controls" role="group" aria-label="Simulator controls">
        <div className="control-group">
          <label htmlFor="zoom-slider">Zoom Level: {Math.round(zoom * 100)}%</label>
          <input
            id="zoom-slider"
            type="range"
            min="1"
            max="4"
            step="0.1"
            value={zoom}
            onChange={handleZoomChange}
            aria-valuemin="100"
            aria-valuemax="400"
            aria-valuenow={Math.round(zoom * 100)}
          />
        </div>
        <div className="control-group">
          <button 
            onClick={toggleInversion}
            aria-pressed={isInverted}
            className="simulator-button"
          >
            {isInverted ? 'Disable' : 'Enable'} Color Inversion
          </button>
        </div>
      </div>

      <div 
        className="simulation-viewport" 
        style={containerStyle}
        onMouseMove={handleMouseMove}
        aria-hidden="true"
      >
        <div className="simulation-content" style={contentStyle}>
          <header>
            <h4>ACME Services</h4>
          </header>
          <div className="demo-layout">
            <aside className="demo-sidebar">
              <nav>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
            </aside>
            <main className="demo-main">
              <h5>Main Article</h5>
              <p>
                Magnification software enlarges everything on the screen. 
                At high zoom levels, only a small portion of the screen is visible at once.
              </p>
              <button className="demo-btn">Action Button</button>
              <p>
                Focus tracking helps by moving the viewport automatically when you navigate via keyboard or mouse.
              </p>
            </main>
          </div>
          <footer>
            <p>&copy; 2026 Accessible Demo Corp</p>
          </footer>
        </div>
      </div>
      <p className="sr-only">
        This simulation demonstrates visual magnification and color inversion. 
        It is intended to show the experience of low vision users.
      </p>
    </div>
  );
};

export default ZoomSimulator;
