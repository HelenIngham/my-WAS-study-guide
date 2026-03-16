import React, { useState } from 'react';
import './SortingActivity.css';

/**
 * SortingActivity Component
 * Allows users to sort items into categories.
 * Optimized for accessibility with keyboard support.
 * 
 * Props:
 * - items: Array<{ id: string, text: string, category: string }>
 * - categories: Array<{ id: string, name: string }>
 * - title?: string
 * - intro?: string
 */
export default function SortingActivity({ 
  items = [], 
  categories = [], 
  title = "Sorting Activity",
  intro = "Sort the following items into the correct categories."
}) {
  const [availableItems, setAvailableItems] = useState(items);
  const [sortedItems, setSortedItems] = useState({}); // { categoryId: [itemIds] }
  const [selectedItem, setSelectedItem] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleSelectItem = (item) => {
    if (showResults) return;
    setSelectedItem(selectedItem?.id === item.id ? null : item);
  };

  const handleDropToCategory = (categoryId) => {
    if (!selectedItem || showResults) return;

    // Remove from available
    setAvailableItems(prev => prev.filter(i => i.id !== selectedItem.id));

    // Add to category
    setSortedItems(prev => ({
      ...prev,
      [categoryId]: [...(prev[categoryId] || []), selectedItem]
    }));

    setSelectedItem(null);
    setFeedback(null);
  };

  const handleRemoveFromCategory = (categoryId, item) => {
    if (showResults) return;

    // Remove from category
    setSortedItems(prev => ({
      ...prev,
      [categoryId]: prev[categoryId].filter(i => i.id !== item.id)
    }));

    // Add back to available
    setAvailableItems(prev => [...prev, item]);
    setFeedback(null);
  };

  const checkAnswers = () => {
    let allCorrect = true;
    let totalSorted = 0;

    categories.forEach(cat => {
      const catItems = sortedItems[cat.id] || [];
      totalSorted += catItems.length;
      catItems.forEach(item => {
        if (item.category !== cat.id) {
          allCorrect = false;
        }
      });
    });

    if (totalSorted < items.length) {
      setFeedback({ type: 'error', text: 'Please sort all items before checking.' });
    } else if (allCorrect) {
      setFeedback({ type: 'success', text: 'Correct! All items are in the right categories.' });
      setShowResults(true);
    } else {
      setFeedback({ type: 'error', text: 'Some items are in the wrong categories. Try again!' });
    }
  };

  const resetActivity = () => {
    setAvailableItems(items);
    setSortedItems({});
    setSelectedItem(null);
    setFeedback(null);
    setShowResults(false);
  };

  return (
    <div className="sorting-activity" aria-labelledby="sorting-title">
      <h2 id="sorting-title">{title}</h2>
      <p>{intro}</p>
      
      <div className="sorting-activity__items" aria-label="Available items">
        {availableItems.length === 0 && !showResults && <p>All items sorted!</p>}
        {availableItems.map(item => (
          <button
            key={item.id}
            className={`sorting-activity__item ${selectedItem?.id === item.id ? 'sorting-activity__item--selected' : ''}`}
            onClick={() => handleSelectItem(item)}
            aria-pressed={selectedItem?.id === item.id}
            disabled={showResults}
          >
            {item.text}
          </button>
        ))}
      </div>

      <div className="sorting-activity__categories">
        {categories.map(category => (
          <div key={category.id} className="sorting-activity__category">
            <h3>{category.name}</h3>
            <div 
              className="sorting-activity__drop-zone"
              aria-label={`Drop zone for ${category.name}`}
            >
              {(sortedItems[category.id] || []).map(item => (
                <div key={item.id} className="sorting-activity__dropped-item">
                  <span>{item.text}</span>
                  {!showResults && (
                    <button 
                      className="sorting-activity__remove-btn"
                      onClick={() => handleRemoveFromCategory(category.id, item)}
                      aria-label={`Remove ${item.text} from ${category.name}`}
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
              {!showResults && (
                <button 
                  className="sorting-activity__check-btn"
                  onClick={() => handleDropToCategory(category.id)}
                  disabled={!selectedItem}
                  aria-label={`Place selected item in ${category.name}`}
                  style={{ marginTop: 'auto', padding: '0.5rem' }}
                >
                  Place Here
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {feedback && (
        <div className={`sorting-activity__feedback ${feedback.type}`} role="alert">
          {feedback.text}
        </div>
      )}

      <div className="sorting-activity__actions">
        {!showResults ? (
          <button className="sorting-activity__check-btn" onClick={checkAnswers}>
            Check Answers
          </button>
        ) : (
          <button className="sorting-activity__reset-btn" onClick={resetActivity}>
            Reset Activity
          </button>
        )}
      </div>
    </div>
  );
}
