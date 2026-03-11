// components/CardList.jsx
// Reusable List component to be used inside Card components
// Usage:
// <CardList classNamePrefix="en301549">
//   <li>Item 1</li>
//   <li>Item 2</li>
// </CardList>

import React from 'react';
import './CardList.css';

/**
 * Props
 * - classNamePrefix?: string — BEM block prefix, e.g., "en301549". If omitted, generic classes are used.
 * - children: React.ReactNode — list items (li tags)
 */
export default function CardList({
  classNamePrefix,
  children,
}) {
  const base = classNamePrefix ? `${classNamePrefix}__cardList` : 'card-list';

  return (
    <ul className={base}>
      {children}
    </ul>
  );
}
