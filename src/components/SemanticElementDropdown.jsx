// components/SemanticElementDropdown.jsx
import React, { useState } from 'react';
import './SemanticElementDropdown.css';

const SEMANTIC_ELEMENTS = [
    { value: 'header', description: 'Defines a header for a document or a section' },
    { value: 'nav', description: 'Defines navigation links' },
    { value: 'main', description: 'Specifies the main content of a document' },
    { value: 'article', description: 'Defines an independent, self-contained article' },
    { value: 'section', description: 'Defines a section in a document' },
    { value: 'aside', description: 'Defines content aside from the page content' },
    { value: 'footer', description: 'Defines a footer for a document or a section' },
    { value: 'address', description: 'Defines contact information for the author/owner' },
    { value: 'h1', description: 'Defines the most important heading' },
    { value: 'h2', description: 'Defines a second-level heading' },
    { value: 'h3', description: 'Defines a third-level heading' },
    { value: 'p', description: 'Defines a paragraph' },
    { value: 'blockquote', description: 'Defines a section that is quoted from another source' },
    { value: 'ul', description: 'Defines an unordered list' },
    { value: 'ol', description: 'Defines an ordered list' },
    { value: 'li', description: 'Defines a list item' },
    { value: 'dl', description: 'Defines a description list' },
    { value: 'dt', description: 'Defines a term/name in a description list' },
    { value: 'dd', description: 'Defines a description of a term/name in a description list' },
    { value: 'figure', description: 'Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.' },
    { value: 'figcaption', description: 'Defines a caption for a <figure> element' },
    { value: 'a', description: 'Defines a hyperlink' },
    { value: 'em', description: 'Defines emphasized text' },
    { value: 'strong', description: 'Defines important text' },
    { value: 'small', description: 'Defines smaller text' },
    { value: 'cite', description: 'Defines the title of a work' },
    { value: 'q', description: 'Defines a short inline quotation' },
    { value: 'dfn', description: 'Represents the defining instance of a term' },
    { value: 'abbr', description: 'Defines an abbreviation or an acronym' },
    { value: 'time', description: 'Defines a specific time (or datetime)' },
    { value: 'code', description: 'Defines a piece of computer code' },
    { value: 'var', description: 'Defines a variable in programming or in a mathematical expression' },
    { value: 'samp', description: 'Defines sample output from a computer program' },
    { value: 'kbd', description: 'Defines keyboard input' },
    { value: 'sub', description: 'Defines subscripted text' },
    { value: 'sup', description: 'Defines superscripted text' },
    { value: 'mark', description: 'Defines marked/highlighted text' },
    { value: 'table', description: 'Defines a table' },
    { value: 'caption', description: 'Defines a table caption' },
    { value: 'thead', description: 'Groups the header content in a table' },
    { value: 'tbody', description: 'Groups the body content in a table' },
    { value: 'tfoot', description: 'Groups the footer content in a table' },
    { value: 'tr', description: 'Defines a row in a table' },
    { value: 'th', description: 'Defines a header cell in a table' },
    { value: 'td', description: 'Defines a cell in a table' },
    { value: 'form', description: 'Defines an HTML form for user input' },
    { value: 'label', description: 'Defines a label for an <input> element' },
    { value: 'button', description: 'Defines a clickable button' },
    { value: 'select', description: 'Defines a drop-down list' },
    { value: 'textarea', description: 'Defines a multi-line input control (text area)' },
    { value: 'fieldset', description: 'Groups related elements in a form' },
    { value: 'legend', description: 'Defines a caption for a <fieldset> element' },
    { value: 'details', description: 'Defines additional details that the user can view or hide' },
    { value: 'summary', description: 'Defines a visible heading for a <details> element' },
    { value: 'dialog', description: 'Defines a dialog box or window' },
    { value: 'video', description: 'Defines video or movie' },
    { value: 'audio', description: 'Defines sound content' },
    { value: 'picture', description: 'Defines a container for multiple image sources' },
    { value: 'img', description: 'Defines an image' },
    { value: 'canvas', description: 'Used to draw graphics, on the fly, via scripting (usually JavaScript)' },
    { value: 'svg', description: 'Defines a container for SVG graphics' }
];

export default function SemanticElementDropdown() {
    const [selectedElement, setSelectedElement] = useState('');

    const handleChange = (event) => {
        setSelectedElement(event.target.value);
    };

    const selectedInfo = SEMANTIC_ELEMENTS.find(el => el.value === selectedElement);

    return (
        <div className="semantic-dropdown-container">
            <div className="semantic-dropdown-field">
                <label htmlFor="semantic-element-select" className="semantic-dropdown-label">
                    Choose a semantic HTML element to learn more:
                </label>
                <select 
                    id="semantic-element-select"
                    className="semantic-dropdown-select"
                    value={selectedElement}
                    onChange={handleChange}
                >
                    <option value="" disabled>Select an element...</option>
                    {SEMANTIC_ELEMENTS.map((element) => (
                        <option key={element.value} value={element.value}>
                            &lt;{element.value}&gt;
                        </option>
                    ))}
                </select>
            </div>
            
            {selectedElement && (
                <div className="semantic-element-info" aria-live="polite">
                    <h3>&lt;{selectedElement}&gt;</h3>
                    <p>{selectedInfo?.description}</p>
                </div>
            )}
        </div>
    );
}
