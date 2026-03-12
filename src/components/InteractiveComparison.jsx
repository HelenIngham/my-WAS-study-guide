import React, { useState } from 'react';

const InteractiveComparison = () => {
  const [lastAction, setLastAction] = useState('None');
  const [actionSource, setActionSource] = useState('');

  const handleAction = (source, eventType) => {
    setLastAction(eventType);
    setActionSource(source);
  };

  const styles = {
    container: {
      padding: '1.5rem',
      backgroundColor: 'var(--red-0)',
      borderRadius: '8px',
      border: '1px solid var(--neutral-200)',
      margin: '1.5rem 0'
    },
    className: 'interactive-comparison',
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      marginTop: '1rem'
    },
    box: {
      padding: '1rem',
      border: '1px solid var(--neutral-400)',
      borderRadius: '4px',
      backgroundColor: 'var(--color-bg-white)',
      textAlign: 'center'
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      cursor: 'pointer',
      backgroundColor: 'var(--blue-700)',
      color: 'var(--color-text-on-primary)',
      border: 'none',
      borderRadius: '4px'
    },
    div: {
      display: 'inline-block',
      padding: '10px 20px',
      fontSize: '1rem',
      cursor: 'pointer',
      backgroundColor: 'var(--color-secondary)',
      color: 'var(--color-white)',
      borderRadius: '4px'
    },
    status: {
      marginTop: '1.5rem',
      padding: '0.75rem',
      backgroundColor: 'var(--neutral-200)',
      borderRadius: '4px',
      fontWeight: 'bold',
      minHeight: '1.5rem'
    }
  };

  return (
    <div style={styles.container} className="interactive-comparison">
      <h3>Interactive Demo: Semantic vs. Non-Semantic</h3>
      <p>Try clicking these elements AND try using your keyboard (<code>Tab</code> to focus, then <code>Space</code> or <code>Enter</code>).</p>
      
      <div style={styles.grid}>
        <div style={styles.box}>
          <h4>Semantic <code>&lt;button&gt;</code></h4>
          <p>Has built-in keyboard support.</p>
          <button 
            style={styles.button}
            onClick={() => handleAction('Button', 'Click/Enter/Space')}
          >
            I am a Button
          </button>
        </div>

        <div style={styles.box}>
          <h4>Non-Semantic <code>&lt;div&gt;</code></h4>
          <p>No built-in keyboard support (even with <code>tabindex</code>).</p>
          <div 
            style={styles.div}
            tabIndex="0"
            onClick={() => handleAction('Div', 'Click Only')}
          >
            I am a Div
          </div>
        </div>
      </div>

      <div style={styles.status} role="status" aria-live="polite">
        <p style={{ margin: 0 }}>Interact with the elements above.</p>
        {lastAction !== 'None' && (
          <p style={{ margin: '0.5rem 0 0 0', borderTop: '1px solid var(--neutral-200)', paddingTop: '0.5rem' }}>
            <strong>Last Action:</strong> {lastAction} on <strong>{actionSource}</strong>
          </p>
        )}
      </div>

      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-text-subtle)' }}>
        <p><strong>Note:</strong> The <code>&lt;div&gt;</code> has <code>tabIndex="0"</code> so you can focus it, but <code>onClick</code> alone won't fire when you press <code>Enter</code> or <code>Space</code>. The <code>&lt;button&gt;</code> works with both out of the box.</p>
      </div>
    </div>
  );
};

export default InteractiveComparison;
