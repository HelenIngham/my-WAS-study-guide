import React, { useState } from 'react';
import './AccessibleChecklist.css';

/**
 * Reusable Accessible Checklist component for verifying compliance/best practices
 *
 * Props:
 * - title: string
 * - items: Array<{ id: string, label: string }>
 */
export default function AccessibleChecklist({ title, items = [] }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleToggle = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const isFullyComplete = completedCount === items.length && items.length > 0;

  return (
    <div className="accessible-checklist-container">
      <h3 id="checklist-title">{title}</h3>
      <div className="checklist-progress" role="status" aria-live="polite">
        Completed {completedCount} of {items.length} items
      </div>
      <ul className="accessible-checklist" aria-labelledby="checklist-title">
        {items.map((item) => (
          <li key={item.id} className="checklist-item">
            <input
              type="checkbox"
              id={`check-${item.id}`}
              checked={!!checkedItems[item.id]}
              onChange={() => handleToggle(item.id)}
            />
            <label htmlFor={`check-${item.id}`}>
              {item.label}
            </label>
          </li>
        ))}
      </ul>
      {isFullyComplete && (
        <div className="checklist-success-message" role="status">
          🎉 Great job! You've considered all the essential accessibility steps for your custom control!
        </div>
      )}
    </div>
  );
}
