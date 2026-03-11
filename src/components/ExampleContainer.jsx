import React from 'react';
import './ExampleContainer.css';

/**
 * Reusable ExampleContainer component for live demos and their code snippets.
 * 
 * Props:
 * - children: React.ReactNode — the interactive demo content (e.g., button, input, etc.)
 * - code: string — the code snippet associated with the demo
 * - classNamePrefix?: string — optional prefix for BEM-style classes (e.g., "en301549")
 * - role?: string — ARIA role for the container, defaults to 'region'
 * - ariaLabel?: string — accessible name for the container
 */
export default function ExampleContainer({ 
  children, 
  code, 
  classNamePrefix, 
  role = 'region', 
  ariaLabel 
}) {
  const containerCls = classNamePrefix ? `${classNamePrefix}__exampleContainer` : 'example-container';
  const demoCls = classNamePrefix ? `${classNamePrefix}__exampleDemo` : 'example-demo';
  const codeCls = classNamePrefix ? `${classNamePrefix}__exampleCode` : 'example-code';

  return (
    <div className={containerCls} role={role} aria-label={ariaLabel}>
      <div className={demoCls}>
        {children}
      </div>
      <pre className={codeCls}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
