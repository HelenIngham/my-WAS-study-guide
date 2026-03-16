// components/AutomatedScanDemo.jsx
import React, { useState } from 'react';
import './AutomatedScanDemo.css';

const AutomatedScanDemo = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState(null);

  const mockIssues = [
    { id: 1, type: 'Error', code: 'WCAG 1.1.1', message: 'Image missing alternative text', snippet: '<img src="logo.png">', severity: 'High' },
    { id: 2, type: 'Warning', code: 'WCAG 1.4.3', message: 'Potential low contrast (Automatic check)', snippet: '<button style="color: #777">Click me</button>', severity: 'Medium' },
    { id: 3, type: 'Manual Check', code: 'WCAG 1.3.1', message: 'Verify table headers are correct', snippet: '<table>...</table>', severity: 'Informational' }
  ];

  const handleScan = () => {
    setIsScanning(true);
    setResults(null);
    setTimeout(() => {
      setIsScanning(false);
      setResults(mockIssues);
    }, 1500);
  };

  return (
    <div className="automated-scan-demo">
      <h3>Demo: Simulated Automated Scan</h3>
      <p>Click "Run Scan" to see how an automated tool might report issues on a page.</p>
      
      <button 
        className="scan-button" 
        onClick={handleScan} 
        disabled={isScanning}
      >
        {isScanning ? 'Scanning...' : 'Run Scan'}
      </button>

      {isScanning && (
        <div className="scan-progress" role="status">
          <div className="spinner"></div>
          <p>Analyzing DOM and CSS...</p>
        </div>
      )}

      {results && (
        <div className="scan-results" role="region" aria-live="polite">
          <div className="results-summary">
            <span><strong>Total Issues:</strong> {results.length}</span>
            <span className="summary-error">Errors: 1</span>
            <span className="summary-warning">Warnings: 1</span>
          </div>
          <table className="results-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Success Criteria</th>
                <th>Message</th>
                <th>Severity</th>
              </tr>
            </thead>
            <tbody>
              {results.map(issue => (
                <tr key={issue.id} className={`issue-row-${issue.type.toLowerCase().replace(' ', '-')}`}>
                  <td><span className={`badge badge-${issue.type.toLowerCase().replace(' ', '-')}`}>{issue.type}</span></td>
                  <td>{issue.code}</td>
                  <td>
                    <div>{issue.message}</div>
                    <code className="snippet">{issue.snippet}</code>
                  </td>
                  <td>{issue.severity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="scan-disclaimer"><em>Note: Automated tools identify patterns but often require manual verification (e.g., is the alt text meaningful?).</em></p>
        </div>
      )}
    </div>
  );
};

export default AutomatedScanDemo;
