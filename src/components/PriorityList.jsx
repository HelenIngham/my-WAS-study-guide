// components/PriorityList.jsx
import React from 'react';
import './PriorityList.css';

/**
 * Reusable PriorityList component that provides a styled ordered list with custom bullets.
 *
 * Props:
 * - children: React.ReactNode — list items (<li> elements)
 * - classNamePrefix?: string — BEM-style prefix, e.g., 'en301549'
 * - role?: string — ARIA role for the list, defaults to 'list'
 * - ariaLabel?: string — accessible name for the list
 */
export default function PriorityList({
  children,
  classNamePrefix,
  role = 'list',
  ariaLabel,
}) {
  const base = classNamePrefix ? `${classNamePrefix}__priorityList` : 'priority-list';

  return (
    <ol className={base} role={role} aria-label={ariaLabel}>
      {children}
    </ol>
  );
}
