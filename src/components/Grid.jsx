// components/Grid.jsx
// Reusable Grid layout component for consistent 1 or 2 column displays
// Usage:
// <Grid classNamePrefix="en301549" role="list" ariaLabel="relates to WCAG">
//   <Card title="Card 1">...</Card>
//   <Card title="Card 2">...</Card>
// </Grid>

import React from 'react';
import './Grid.css';

/**
 * Props
 * - classNamePrefix?: string — BEM block prefix, e.g., "en301549". If omitted, generic classes are used.
 * - children: React.ReactNode — grid content
 * - columns?: number | string — number of columns for larger screens (default to 2)
 * - role?: string — ARIA role for the container, defaults to 'region'
 * - ariaLabel?: string — aria-label on the outer container (optional)
 */
export default function Grid({
  classNamePrefix,
  children,
  columns = 2,
  role = 'region',
  ariaLabel,
}) {
  const base = classNamePrefix ? `${classNamePrefix}__grid` : 'grid-container';
  
  // Custom style for column count if not the default 2
  const gridStyle = columns !== 2 ? { gridTemplateColumns: `repeat(${columns}, 1fr)` } : {};

  return (
    <div 
        className={base} 
        role={role} 
        aria-label={ariaLabel}
        style={gridStyle}
    >
      {children}
    </div>
  );
}
