// components/ResourceLink.jsx
// Reusable resource link component for consistent external link styling
// Usage:
// <ResourceLink href="https://example.com" text="Visit Example site" />

import React from 'react';
import './ResourceLink.css';

/**
 * Props
 * - href: string (required) — URL for the link
 * - text: string (required) — Link text
 * - classNamePrefix?: string — BEM block prefix, e.g., "apg". If omitted, generic classes are used.
 * - target?: string — target attribute for the link, defaults to "_blank"
 * - rel?: string — rel attribute for the link, defaults to "noopener noreferrer"
 */
export default function ResourceLink({
  href,
  text,
  classNamePrefix,
  target = '_blank',
  rel = 'noopener noreferrer',
}) {
  const containerCls = classNamePrefix ? `${classNamePrefix}__resource-link` : 'resource-link';

  return (
    <div className={containerCls}>
      <a href={href} target={target} rel={rel}>
        {text}
      </a>
    </div>
  );
}
