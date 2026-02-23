// components/Example.jsx
// Reusable example block that preserves existing BEM class names via classNamePrefix
// Usage:
// <Example classNamePrefix="en301549" label="Example pattern:" text="…" role="note" ariaLabel="Example of self-scoping language">...
//   {/* optional children e.g., <ul className="en301549__bullets">...</ul> */}
// </Example>

import React from 'react';
import './Example.css';

/**
 * Props
 * - classNamePrefix: string (required) — BEM block prefix, e.g., "en301549"
 * - label: string — heading/label text displayed first
 * - text: string | React.ReactNode — main example text
 * - children: React.ReactNode — optional extra content (lists, etc.)
 * - role: string — landmark/feedback role, defaults to "note"
 * - ariaLabel: string — aria-label on the outer container (optional)
 */
export default function Example({
  classNamePrefix,
  label,
  text,
  children,
  role = 'note',
  ariaLabel,
}) {
  const base = classNamePrefix ? `${classNamePrefix}__example` : 'example';
  const labelCls = classNamePrefix ? `${classNamePrefix}__exampleLabel` : 'example__label';
  const textCls = classNamePrefix ? `${classNamePrefix}__exampleText` : 'example__text';

  return (
    <div className={base} role={role} aria-label={ariaLabel}>
      {label ? <p className={labelCls}>{label}</p> : null}
      {text ? <p className={textCls}>{text}</p> : null}
      {children}
    </div>
  );
}
