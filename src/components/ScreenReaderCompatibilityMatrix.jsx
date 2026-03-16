import React from 'react';
import './ScreenReaderCompatibilityMatrix.css';

/**
 * ScreenReaderCompatibilityMatrix component
 * Displays a table showing recommended screen reader and browser combinations.
 */
export default function ScreenReaderCompatibilityMatrix() {
  const data = [
    { screenReader: 'JAWS', browser: 'Chrome', platform: 'Windows', recommendation: 'Recommended' },
    { screenReader: 'NVDA', browser: 'Firefox / Chrome', platform: 'Windows', recommendation: 'Recommended' },
    { screenReader: 'VoiceOver', browser: 'Safari', platform: 'macOS / iOS', recommendation: 'Recommended' },
    { screenReader: 'Narrator', browser: 'Edge', platform: 'Windows', recommendation: 'Supported' },
    { screenReader: 'TalkBack', browser: 'Chrome', platform: 'Android', recommendation: 'Recommended' },
  ];

  return (
    <div className="sr-matrix-container">
      <h3>Screen Reader & Browser Compatibility Matrix</h3>
      <p>Using the correct combination is crucial for accurate accessibility testing.</p>
      <div className="table-responsive">
        <table className="sr-matrix-table">
          <caption>Recommended Screen Reader and Browser Combinations</caption>
          <thead>
            <tr>
              <th scope="col">Screen Reader</th>
              <th scope="col">Browser</th>
              <th scope="col">Platform</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <th scope="row">{row.screenReader}</th>
                <td>{row.browser}</td>
                <td>{row.platform}</td>
                <td>
                  <span className={`status-badge ${row.recommendation.toLowerCase()}`}>
                    {row.recommendation}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="matrix-note" role="note">
        <p><strong>Note:</strong> Testing on non-recommended combinations may reveal issues that don't exist in supported environments, or miss real issues.</p>
      </div>
    </div>
  );
}
