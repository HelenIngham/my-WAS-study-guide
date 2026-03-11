// components/Accordion.jsx
import React, { useState } from 'react';
import './Accordion.css';

/**
 * Reusable Accordion/Collapsible component
 *
 * Props:
 * - items: Array<{ id: string, title: string, content: React.ReactNode, description?: string }>
 * - classNamePrefix?: string
 */
export default function Accordion({ items = [], classNamePrefix }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleItem = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const p = classNamePrefix;
  const containerCls = p ? `${p}__accordion` : 'accordion';
  const itemCls = p ? `${p}__accordionItem` : 'accordion-item';
  const headerCls = p ? `${p}__accordionHeader` : 'accordion-header';
  const toggleCls = p ? `${p}__accordionToggle` : 'accordion-toggle';
  const titleCls = p ? `${p}__accordionTitle` : 'accordion-title';
  const iconCls = p ? `${p}__accordionIcon` : 'accordion-icon';
  const descriptionCls = p ? `${p}__accordionDescription` : 'accordion-description';
  const contentCls = p ? `${p}__accordionContent` : 'accordion-content';

  return (
    <div className={containerCls}>
      {items.map((item) => (
        <article key={item.id} className={itemCls}>
          <h3 className={headerCls}>
            <button
              className={toggleCls}
              onClick={() => toggleItem(item.id)}
              aria-expanded={expandedId === item.id}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className={titleCls}>{item.title}</span>
              <span className={iconCls} aria-hidden="true">
                {expandedId === item.id ? '−' : '+'}
              </span>
            </button>
          </h3>
          {item.description && (
            <p className={descriptionCls}>{item.description}</p>
          )}

          {expandedId === item.id && (
            <div
              id={`accordion-content-${item.id}`}
              className={contentCls}
            >
              {item.content}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
