// components/CodeBlock.jsx
import React from 'react';
import './CodeBlock.css';

/**
 * CodeBlock component for displaying code snippets with a title.
 * 
 * @param {string} title - The title for the code block.
 * @param {string} code - The code to display.
 * @param {string} classNamePrefix - Optional BEM-style prefix.
 */
export default function CodeBlock({ title, code, classNamePrefix }) {
  const prefix = classNamePrefix ? `${classNamePrefix}__` : 'code-example';
  
  return (
    <div className={classNamePrefix ? classNamePrefix : 'code-example'}>
      {title && <h4 className={`${prefix}title`}>{title}</h4>}
      <pre className={`${prefix}pre`}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
