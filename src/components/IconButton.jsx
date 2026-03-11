// components/IconButton.jsx
// Reusable Icon-only button component for consistent styling and accessibility
// Usage:
// <IconButton 
//   ariaLabel="Search"
//   onClick={handleSearch}
//   classNamePrefix="en301549"
// >
//   <span aria-hidden="true">🔍</span>
// </IconButton>

import React from 'react';
import './IconButton.css';

/**
 * Props
 * - classNamePrefix?: string — BEM block prefix, e.g., "en301549". If omitted, generic classes are used.
 * - ariaLabel: string (required) — accessible name for the button
 * - children: React.ReactNode — icon/content inside the button
 * - onClick?: () => void — click handler
 * - type?: "button" | "submit" | "reset" — button type, defaults to "button"
 * - className?: string — additional custom class names
 */
export default function IconButton({
  classNamePrefix,
  ariaLabel,
  children,
  onClick,
  type = 'button',
  className = '',
}) {
  const base = classNamePrefix ? `${classNamePrefix}__iconButton` : 'icon-button';
  const combinedClasses = `${base} ${className}`.trim();

  return (
    <button
      type={type}
      className={combinedClasses}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
