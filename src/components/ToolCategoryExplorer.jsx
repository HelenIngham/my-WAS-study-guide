import React, { useState } from 'react';
import './ToolCategoryExplorer.css';

const ToolCategoryExplorer = () => {
  const [activeTab, setActiveTab] = useState('automated');

  const categories = {
    automated: {
      title: 'Automated Tools',
      subtitle: 'Software that checks source code or the DOM against rules.',
      strengths: [
        'Fast and scalable for large sites.',
        'Can be integrated into CI/CD pipelines.',
        'Consistent and objective results for rule-based checks.',
        'Low cost per scan.'
      ],
      limitations: [
        'Can only catch about 25-40% of accessibility issues.',
        'High rate of false negatives (misses manual-only issues like keyboard flow).',
        'Cannot understand context or user intent (e.g., is alt text *meaningful*?).'
      ],
      examples: ['Axe-core', 'WAVE API', 'ARC Toolkit', 'Siteimprove']
    },
    manual: {
      title: 'Manual Testing Tools',
      subtitle: 'Tools used by humans to evaluate accessibility.',
      strengths: [
        'Essential for assessing user experience and usability.',
        'Can evaluate complex interactions and keyboard focus order.',
        'Understand context and nuances of content.',
        'Necessary for identifying all WCAG failures.'
      ],
      limitations: [
        'Time-consuming and resource-intensive.',
        'Results can be subjective based on the tester’s expertise.',
        'Harder to scale for large, frequently changing websites.',
        'Higher potential for human error or inconsistency.'
      ],
      examples: ['Screen Readers (JAWS, NVDA, VoiceOver)', 'Keyboard-only testing', 'Color Contrast Analyzers', 'Browser Developer Tools']
    },
    hybrid: {
      title: 'Hybrid/Guided Tools',
      subtitle: 'Manual tools that automate parts of the workflow.',
      strengths: [
        'Balances speed with thoroughness.',
        'Guides non-experts through complex manual checks.',
        'Automatically records results for reporting.',
        'Reduces human error in data collection.'
      ],
      limitations: [
        'Still requires human intervention and time.',
        'Requires some level of training to use effectively.',
        'Limited by the scope of the guided tests provided.'
      ],
      examples: ['Accessibility Insights for Web', 'Axe Auditor', 'Guided Manual Testing tools']
    }
  };

  return (
    <section className="tool-category-explorer" aria-labelledby="tce-title">
      <h2 id="tce-title">Tool Category Explorer</h2>
      <p className="tce-intro">Select a category to explore its strengths, limitations, and examples.</p>
      
      <div className="tce-tabs" role="tablist">
        {Object.keys(categories).map((key) => (
          <button
            key={key}
            role="tab"
            aria-selected={activeTab === key}
            aria-controls={`panel-${key}`}
            id={`tab-${key}`}
            className={`tce-tab-btn ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {categories[key].title}
          </button>
        ))}
      </div>

      <div 
        className="tce-panel" 
        id={`panel-${activeTab}`} 
        role="tabpanel" 
        aria-labelledby={`tab-${activeTab}`}
        tabIndex="0"
      >
        <h3>{categories[activeTab].title}</h3>
        <p className="tce-subtitle"><em>{categories[activeTab].subtitle}</em></p>
        
        <div className="tce-content-grid">
          <div className="tce-column">
            <h4>Strengths</h4>
            <ul>
              {categories[activeTab].strengths.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          <div className="tce-column">
            <h4>Limitations</h4>
            <ul>
              {categories[activeTab].limitations.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>
        </div>
        
        <div className="tce-examples">
          <h4>Common Examples</h4>
          <div className="tce-example-tags">
            {categories[activeTab].examples.map((ex, i) => (
              <span key={i} className="tce-tag">{ex}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolCategoryExplorer;
