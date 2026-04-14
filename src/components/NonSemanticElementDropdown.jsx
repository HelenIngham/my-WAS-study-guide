// components/NonSemanticElementDropdown.jsx
import React, { useState } from 'react';
import './NonSemanticElementDropdown.css';

const NON_SEMANTIC_ELEMENTS = [
    { value: 'div', description: 'A generic container for flow content. It has no intrinsic meaning and should only be used when no other semantic element is appropriate.' },
    { value: 'span', description: 'A generic inline container for phrasing content. Like <div>, it has no intrinsic meaning.' },
    { value: 'br', description: 'Produces a line break in text (carriage-return). While it has a specific effect, it does not convey structural meaning.' },
    { value: 'hr', description: 'Represents a thematic break between paragraph-level elements. In modern HTML, it has some semantic value as a separator, but is often used purely for visual styling.' }
];

export default function NonSemanticElementDropdown() {
    const [selectedElement, setSelectedElement] = useState('');

    const handleChange = (event) => {
        setSelectedElement(event.target.value);
    };

    const selectedInfo = NON_SEMANTIC_ELEMENTS.find(el => el.value === selectedElement);

    return (
        <div className="non-semantic-dropdown-container">
            <div className="non-semantic-dropdown-field">
                <label htmlFor="non-semantic-element-select" className="non-semantic-dropdown-label">
                    Choose a non-semantic HTML element to learn more:
                </label>
                <select 
                    id="non-semantic-element-select"
                    className="non-semantic-dropdown-select"
                    value={selectedElement}
                    onChange={handleChange}
                >
                    <option value="" disabled>Select an element...</option>
                    {NON_SEMANTIC_ELEMENTS.map((element) => (
                        <option key={element.value} value={element.value}>
                            &lt;{element.value}&gt;
                        </option>
                    ))}
                </select>
            </div>
            
            {selectedElement && (
                <div className="non-semantic-element-info" aria-live="polite">
                    <h3>&lt;{selectedElement}&gt;</h3>
                    <p>{selectedInfo?.description}</p>
                </div>
            )}
        </div>
    );
}
