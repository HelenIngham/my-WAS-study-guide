// components/PageHeader.jsx
// Reusable page header block that preserves existing BEM class names via classNamePrefix
// Usage:
// <PageHeader classNamePrefix="en301549" title="…" lede="…" />

import React from 'react';
import './PageHeader.css';

/**
 * Props
 * - classNamePrefix?: string — BEM block prefix, e.g., "en301549". If omitted, generic classes are used.
 * - title: string | React.ReactNode — main heading (H1) text
 * - lede?: string | React.ReactNode — introductory text/paragraph
 * - children?: React.ReactNode — optional extra content (buttons, etc.)
 */
export default function PageHeader({
  classNamePrefix,
  title,
  lede,
  children,
}) {
  const base = classNamePrefix ? `${classNamePrefix}__header` : 'page-header';
  const ledeCls = classNamePrefix ? `${classNamePrefix}__lede` : 'page-header__lede';

  return (
    <header className={base}>
      <h1>{title}</h1>
      {lede ? <p className={ledeCls}>{lede}</p> : null}
      {children}
    </header>
  );
}
