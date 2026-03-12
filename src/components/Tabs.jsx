import React, { useState } from 'react';
import './Tabs.css';

/**
 * Reusable Tabs component
 *
 * Props:
 * - tabs: Array<{ id: string, label: string, content: React.ReactNode }>
 * - ariaLabel?: string (aria-label for the tablist)
 * - classNamePrefix?: string (BEM-style prefix, e.g., 'en301549')
 */
export default function Tabs({ tabs = [], ariaLabel = "Content sections", classNamePrefix }) {
  const [activeTab, setActiveTab] = useState(0);

  const containerCls = classNamePrefix ? `${classNamePrefix}__tabContainer` : 'tab-container';
  const buttonCls = classNamePrefix ? `${classNamePrefix}__tabButton` : 'tab-button';
  const panelCls = classNamePrefix ? `${classNamePrefix}__tabPanel` : 'tab-panel';

  const tabRefs = React.useRef([]);
  
  const handleKeyDown = (e) => {
    let nextIndex = activeTab;
    if (e.key === 'ArrowRight') {
      nextIndex = (activeTab + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (activeTab - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }
    
    e.preventDefault();
    setActiveTab(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="tabs-wrapper">
      <div className={containerCls} role="tablist" aria-label={ariaLabel}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={el => tabRefs.current[index] = el}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === index}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === index ? 0 : -1}
            className={`${buttonCls} ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
            onKeyDown={handleKeyDown}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${tabs[activeTab].id}`}
        aria-labelledby={`tab-${tabs[activeTab].id}`}
        className={panelCls}
        tabIndex="0"
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
