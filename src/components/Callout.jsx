// components/Callout.jsx
// Reusable callout block that preserves existing BEM class names via classNamePrefix
// Usage example:
// <Callout classNamePrefix="en301549" role="note" ariaLabel="Testing note" title="Testing note" text="…" />
// Or with custom children:
// <Callout classNamePrefix="en301549" title="Note"><p>Custom content</p></Callout>

import React from 'react';
import './Callout.css';

/**
 * Props
 * - classNamePrefix?: string — BEM block prefix, e.g., "en301549". If omitted, generic classes are used.
 * - title?: string | React.ReactNode — heading/label text displayed as the callout title
 * - text?: string | React.ReactNode — main callout text content
 * - children?: React.ReactNode — optional extra content (lists, etc.)
 * - role?: string — ARIA role for the container, defaults to 'note'
 * - ariaLabel?: string — aria-label on the outer container (optional)
 */
export default function Callout({
  classNamePrefix,
  title,
  text,
  children,
  role = 'note',
  ariaLabel,
}) {
  const base = classNamePrefix ? `${classNamePrefix}__callout` : 'callout';
  const titleCls = classNamePrefix ? `${classNamePrefix}__calloutTitle` : 'callout__title';
  const textCls = classNamePrefix ? `${classNamePrefix}__calloutText` : 'callout__text';

  return (
    <div className={base} role={role} aria-label={ariaLabel}>
      {title ? <h3 className={titleCls}>{title}</h3> : null}
      {text ? <p className={textCls}>{text}</p> : null}
      {children}
    </div>
  );
}
