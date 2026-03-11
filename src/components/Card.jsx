// components/Card.jsx
// Reusable Card component for consistent layout blocks
// Usage:
// <Card classNamePrefix="en301549" title="Card Title">
//   <p>Card content</p>
// </Card>

import React from 'react';
import './Card.css';

/**
 * Props
 * - classNamePrefix?: string — BEM block prefix, e.g., "en301549". If omitted, generic classes are used.
 * - title?: string | React.ReactNode — heading/label text displayed as the card title
 * - children?: React.ReactNode — main card content
 * - role?: string — ARIA role for the container, defaults to 'article'
 * - ariaLabel?: string — aria-label on the outer container (optional)
 */
export default function Card({
  classNamePrefix,
  title,
  children,
  role = 'article',
  ariaLabel,
}) {
  const base = classNamePrefix ? `${classNamePrefix}__card` : 'card';
  const titleCls = classNamePrefix ? `${classNamePrefix}__cardTitle` : 'card__title';

  return (
    <div className={base} role={role} aria-label={ariaLabel}>
      {title ? <h3 className={titleCls}>{title}</h3> : null}
      {children}
    </div>
  );
}
