// components/Alert.jsx
import React from 'react';
import './Alert.css';

/**
 * Reusable Alert component for information, warnings, success, and error messages.
 * 
 * Props:
 * - type: 'info' | 'warning' | 'success' | 'error' (default: 'info')
 * - title?: string | React.ReactNode (optional heading)
 * - children: React.ReactNode (main content)
 * - classNamePrefix?: string (BEM-style prefix, e.g., 'en301549')
 * - role?: string (ARIA role, defaults to 'note' for info/success, 'alert' for warning/error)
 * - ariaLabel?: string (optional aria-label)
 */
export default function Alert({
  type = 'info',
  title,
  children,
  classNamePrefix,
  role,
  ariaLabel,
}) {
  // Map type to default role if not provided
  const defaultRole = (type === 'warning' || type === 'error') ? 'alert' : 'note';
  const finalRole = role || defaultRole;

  const base = classNamePrefix ? `${classNamePrefix}__alert` : 'alert';
  const typeCls = `alert--${type}`;
  const titleCls = classNamePrefix ? `${classNamePrefix}__alertTitle` : 'alert__title';
  const contentCls = classNamePrefix ? `${classNamePrefix}__alertContent` : 'alert__content';

  return (
    <div 
      className={`${base} ${typeCls}`} 
      role={finalRole} 
      aria-label={ariaLabel}
    >
      {title && <h3 className={titleCls}>{title}</h3>}
      <div className={contentCls}>
        {children}
      </div>
    </div>
  );
}
