import React, { useState } from 'react';
import './FocusOrderDemo.css';

/**
 * FocusOrderDemo - A component that demonstrates logical vs. illogical focus order.
 */
export default function FocusOrderDemo() {
  const [isLogical, setIsLogical] = useState(true);

  const items = [
    { id: 1, label: 'First Item', style: { order: 1 } },
    { id: 2, label: 'Second Item', style: { order: 2 } },
    { id: 3, label: 'Third Item', style: { order: 3 } },
    { id: 4, label: 'Fourth Item', style: { order: 4 } },
  ];

  // Illogical order: 1, 4, 2, 3 in the DOM, but visually 1, 2, 3, 4
  const illogicalItems = [
    { id: 1, label: 'First Item', style: { order: 1 } },
    { id: 4, label: 'Fourth Item', style: { order: 4 } },
    { id: 2, label: 'Second Item', style: { order: 2 } },
    { id: 3, label: 'Third Item', style: { order: 3 } },
  ];

  const currentItems = isLogical ? items : illogicalItems;

  return (
    <div className="focus-order-demo">
      <h3>Interactive Demo: Focus Order</h3>
      <p>
        Toggle between a logical and an illogical focus order. Try navigating through the items using the <strong>Tab</strong> key.
      </p>
      
      <div className="controls">
        <button 
          onClick={() => setIsLogical(true)} 
          className={isLogical ? 'active' : ''}
          aria-pressed={isLogical}
        >
          Logical Order
        </button>
        <button 
          onClick={() => setIsLogical(false)} 
          className={!isLogical ? 'active' : ''}
          aria-pressed={!isLogical}
        >
          Illogical Order (CSS Flexbox/Order)
        </button>
      </div>

      <div className="demo-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {currentItems.map((item) => (
          <button 
            key={item.id} 
            className="demo-item"
            style={{ order: item.style.order }}
          >
            {item.label} (Order: {item.style.order})
          </button>
        ))}
      </div>

      <div className="explanation">
        {isLogical ? (
          <p className="status-success">
            <strong>Logical:</strong> The focus order matches the visual order. This is predictable for keyboard users.
          </p>
        ) : (
          <p className="status-warning">
            <strong>Illogical:</strong> The visual order (1, 2, 3, 4) is achieved using CSS <code>order</code>, but the DOM order remains 1, 4, 2, 3. Tabbing will jump from 1 to 4, then back to 2.
          </p>
        )}
      </div>
    </div>
  );
}
