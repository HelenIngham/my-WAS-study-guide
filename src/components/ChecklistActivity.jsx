import React, { useState } from 'react';
import './ChecklistActivity.css';

/**
 * ChecklistActivity component
 * 
 * An interactive checklist activity to help users practice manual evaluation steps.
 * 
 * Props:
 * - title: string
 * - items: Array<{ id: string, label: string }>
 * - instructions: string
 */
export default function ChecklistActivity({ 
  title = "Manual Evaluation Checklist", 
  items = [], 
  instructions = "Check off each item as you verify it in the manual evaluation process."
}) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleToggle = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const isComplete = completedCount === items.length && items.length > 0;

  return (
    <section className="checklist-activity" aria-labelledby="checklist-title">
      <h3 id="checklist-title">{title}</h3>
      <p className="checklist-instructions">{instructions}</p>
      
      <div className="checklist-items">
        {items.map(item => (
          <div key={item.id} className="checklist-item">
            <label className={`checklist-label ${checkedItems[item.id] ? 'checked' : ''}`}>
              <input 
                type="checkbox" 
                checked={!!checkedItems[item.id]} 
                onChange={() => handleToggle(item.id)}
              />
              <span className="checkbox-custom" aria-hidden="true"></span>
              <span className="label-text">{item.label}</span>
            </label>
          </div>
        ))}
      </div>

      <div className="checklist-footer" aria-live="polite">
        <p className="progress-text">
          Progress: {completedCount} of {items.length} verified
        </p>
        {isComplete && (
          <div className="completion-message" role="status">
            ✅ All essential requirements verified!
          </div>
        )}
      </div>
    </section>
  );
}
