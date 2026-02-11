import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './3KeyboardInteractionAndFocusManagementWithinComponents.css';

function KeyboardInteractionAndFocusManagement() {
    const [activeSection, setActiveSection] = useState('tabindex');
    const [demoTabIndex, setDemoTabIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [matchingAnswers, setMatchingAnswers] = useState({});
    const [showMatchResults, setShowMatchResults] = useState(false);

    const tabRefs = useRef([]);
    const modalRef = useRef(null);
    const modalTriggerRef = useRef(null);

    const sections = [
        { id: 'tabindex', label: 'Tabindex' },
        { id: 'roving', label: 'Roving Tabindex' },
        { id: 'focus-trap', label: 'Focus Trapping' },
        { id: 'activedescendant', label: 'aria-activedescendant' }
    ];

    const matchingPairs = [
        { term: 'tabindex="0"', definition: 'Makes element focusable in natural tab order' },
        { term: 'tabindex="-1"', definition: 'Makes element programmatically focusable only' },
        { term: 'tabindex="1" or higher', definition: 'Creates explicit tab order (anti-pattern)' },
        { term: 'Roving tabindex', definition: 'Only one item in a group is in tab order at a time' },
        { term: 'Focus trap', definition: 'Keeps focus within a specific container' },
        { term: 'aria-activedescendant', definition: 'Manages virtual focus while container keeps real focus' }
    ];

    const correctMatches = {
        'tabindex="0"': 'Makes element focusable in natural tab order',
        'tabindex="-1"': 'Makes element programmatically focusable only',
        'tabindex="1" or higher': 'Creates explicit tab order (anti-pattern)',
        'Roving tabindex': 'Only one item in a group is in tab order at a time',
        'Focus trap': 'Keeps focus within a specific container',
        'aria-activedescendant': 'Manages virtual focus while container keeps real focus'
    };

    // Demo tabs navigation
    const handleTabKeyDown = (e, index) => {
        let newIndex = index;
        if (e.key === 'ArrowRight') {
            newIndex = (index + 1) % 3;
        } else if (e.key === 'ArrowLeft') {
            newIndex = (index - 1 + 3) % 3;
        } else if (e.key === 'Home') {
            newIndex = 0;
        } else if (e.key === 'End') {
            newIndex = 2;
        } else {
            return;
        }
        e.preventDefault();
        setDemoTabIndex(newIndex);
        tabRefs.current[newIndex]?.focus();
    };

    // Modal focus trap
    useEffect(() => {
        if (isModalOpen && modalRef.current) {
            const focusableElements = modalRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            firstElement?.focus();

            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    closeModal();
                }
                if (e.key === 'Tab') {
                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement?.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement?.focus();
                    }
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isModalOpen]);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => {
        setIsModalOpen(false);
        modalTriggerRef.current?.focus();
    };

    const handleMatchSelect = (term, definition) => {
        setMatchingAnswers(prev => ({
            ...prev,
            [term]: definition
        }));
    };

    const checkMatches = () => {
        setShowMatchResults(true);
    };

    const resetMatches = () => {
        setMatchingAnswers({});
        setShowMatchResults(false);
    };

    const calculateMatchScore = () => {
        let correct = 0;
        Object.keys(matchingAnswers).forEach(term => {
            if (matchingAnswers[term] === correctMatches[term]) {
                correct++;
            }
        });
        return correct;
    };

    return (
        <div className="container">
            <h1>Keyboard Interaction and Focus Management</h1>

            {/* Section Navigation */}
            <nav className="section-nav" aria-label="Topic sections">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        className={`section-btn ${activeSection === section.id ? 'active' : ''}`}
                        onClick={() => setActiveSection(section.id)}
                        aria-current={activeSection === section.id ? 'true' : undefined}
                    >
                        {section.label}
                    </button>
                ))}
            </nav>

            {/* Section Content */}
            <div className="section-content">
                {activeSection === 'tabindex' && (
                    <section aria-labelledby="tabindex-heading">
                        <h2 id="tabindex-heading">Understanding Tabindex</h2>

                        <p>
                            The <code>tabindex</code> attribute controls whether an element is focusable and
                            where it appears in the keyboard navigation order.
                        </p>

                        <div className="value-cards">
                            <article className="value-card good">
                                <h3>tabindex="0"</h3>
                                <p>
                                    Makes a non-focusable element focusable and places it in the natural
                                    tab order based on its position in the DOM.
                                </p>
                                <pre><code>{`<div tabindex="0" role="button">
  Custom Button
</div>`}</code></pre>
                                <span className="badge">✓ Recommended</span>
                            </article>

                            <article className="value-card good">
                                <h3>tabindex="-1"</h3>
                                <p>
                                    Makes an element focusable via JavaScript (<code>element.focus()</code>)
                                    but removes it from the natural tab order.
                                </p>
                                <pre><code>{`<div tabindex="-1" id="panel">
  <!-- Focus set programmatically -->
</div>`}</code></pre>
                                <span className="badge">✓ Recommended</span>
                            </article>

                            <article className="value-card bad">
                                <h3>tabindex="1" or higher</h3>
                                <p>
                                    Places element at the beginning of the tab order. <strong>Avoid this!</strong>
                                    It disrupts the natural reading order and confuses users.
                                </p>
                                <pre><code>{`<!-- ANTI-PATTERN -->
<input tabindex="2">
<input tabindex="1">
<input tabindex="3">`}</code></pre>
                                <span className="badge warning">✗ Anti-pattern</span>
                            </article>
                        </div>

                        <div className="key-point" role="note">
                            <h3>Key Exam Point</h3>
                            <p>
                                Interactive elements like <code>&lt;button&gt;</code>, <code>&lt;a href&gt;</code>,
                                and form controls are natively focusable. Only use <code>tabindex="0"</code> on
                                custom interactive elements that aren't natively focusable.
                            </p>
                        </div>
                    </section>
                )}

                {activeSection === 'roving' && (
                    <section aria-labelledby="roving-heading">
                        <h2 id="roving-heading">Roving Tabindex Pattern</h2>

                        <p>
                            <strong>Roving tabindex</strong> is a focus management technique used in composite
                            widgets (like tab lists, menus, toolbars) where only one item in the group is in
                            the tab order at any time.
                        </p>

                        <h3>How It Works</h3>
                        <ol>
                            <li>One item has <code>tabindex="0"</code> (the "active" item)</li>
                            <li>All other items have <code>tabindex="-1"</code></li>
                            <li>Arrow keys move focus and "rove" the tabindex values</li>
                            <li>Tab moves focus out of the entire group</li>
                        </ol>

                        <h3>Live Demo: Tab List with Roving Tabindex</h3>
                        <div className="demo-container">
                            <div
                                role="tablist"
                                aria-label="Demo tabs"
                                className="demo-tablist"
                            >
                                {['Tab 1', 'Tab 2', 'Tab 3'].map((label, index) => (
                                    <button
                                        key={index}
                                        ref={el => tabRefs.current[index] = el}
                                        role="tab"
                                        id={`demo-tab-${index}`}
                                        aria-selected={demoTabIndex === index}
                                        aria-controls={`demo-panel-${index}`}
                                        tabIndex={demoTabIndex === index ? 0 : -1}
                                        className={`demo-tab ${demoTabIndex === index ? 'selected' : ''}`}
                                        onClick={() => setDemoTabIndex(index)}
                                        onKeyDown={(e) => handleTabKeyDown(e, index)}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                            <div
                                role="tabpanel"
                                id={`demo-panel-${demoTabIndex}`}
                                aria-labelledby={`demo-tab-${demoTabIndex}`}
                                className="demo-panel"
                            >
                                <p>Content for Tab {demoTabIndex + 1}. Use arrow keys to switch tabs!</p>
                            </div>
                            <p className="demo-instructions">
                                <strong>Try it:</strong> Click a tab, then use Left/Right arrow keys to navigate.
                            </p>
                        </div>

                        <div className="code-example">
                            <h4>Code Pattern</h4>
                            <pre><code>{`// Only the active tab has tabindex="0"
tabs.forEach((tab, index) => {
  tab.tabIndex = index === activeIndex ? 0 : -1;
});

// Arrow key handler moves focus
if (e.key === 'ArrowRight') {
  const nextIndex = (currentIndex + 1) % tabs.length;
  tabs[nextIndex].focus();
  setActiveIndex(nextIndex);
}`}</code></pre>
                        </div>
                    </section>
                )}

                {activeSection === 'focus-trap' && (
                    <section aria-labelledby="focus-trap-heading">
                        <h2 id="focus-trap-heading">Focus Trapping</h2>

                        <p>
                            <strong>Focus trapping</strong> (or focus containment) ensures keyboard focus stays
                            within a specific container, typically used in modal dialogs. Users cannot Tab
                            out of the container until they explicitly dismiss it.
                        </p>

                        <h3>When to Use Focus Trapping</h3>
                        <ul>
                            <li>Modal dialogs (<code>role="dialog"</code> with <code>aria-modal="true"</code>)</li>
                            <li>Alert dialogs that require a response</li>
                            <li>Full-screen overlays</li>
                        </ul>

                        <h3>Implementation Requirements</h3>
                        <ol>
                            <li>Move focus to the first focusable element (or the dialog itself) when opened</li>
                            <li>Wrap focus: Tab from last element goes to first; Shift+Tab from first goes to last</li>
                            <li>Allow Escape key to close the dialog</li>
                            <li>Return focus to the triggering element when closed</li>
                        </ol>

                        <h3>Live Demo: Modal with Focus Trap</h3>
                        <button
                            ref={modalTriggerRef}
                            className="demo-button"
                            onClick={openModal}
                        >
                            Open Modal Dialog
                        </button>

                        {isModalOpen && (
                            <div
                                className="modal-overlay"
                                onClick={(e) => {
                                    if (e.target === e.currentTarget) closeModal();
                                }}
                            >
                                <div
                                    ref={modalRef}
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="modal-title"
                                    className="modal-dialog"
                                >
                                    <h3 id="modal-title">Focus Trap Demo</h3>
                                    <p>
                                        Try pressing Tab repeatedly. Focus will cycle through the
                                        elements inside this dialog and won't escape to the page behind.
                                    </p>
                                    <label htmlFor="modal-input">Sample Input:</label>
                                    <input type="text" id="modal-input" />
                                    <div className="modal-actions">
                                        <button onClick={closeModal}>Cancel</button>
                                        <button onClick={closeModal}>Confirm</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="key-point" role="note">
                            <h3>Exam Tip</h3>
                            <p>
                                Focus trapping is <strong>required</strong> for modal dialogs to be accessible.
                                Without it, screen reader users may not realize they're in a modal and could
                                interact with content behind it.
                            </p>
                        </div>
                    </section>
                )}

                {activeSection === 'activedescendant' && (
                    <section aria-labelledby="activedescendant-heading">
                        <h2 id="activedescendant-heading">aria-activedescendant</h2>

                        <p>
                            <code>aria-activedescendant</code> is an alternative to roving tabindex for
                            managing focus within composite widgets. Instead of moving DOM focus, it maintains
                            "virtual" focus while the container keeps actual focus.
                        </p>

                        <h3>How It Works</h3>
                        <ol>
                            <li>Container element has <code>tabindex="0"</code> and keeps focus</li>
                            <li>Container's <code>aria-activedescendant</code> points to the ID of the "active" item</li>
                            <li>Arrow keys update the <code>aria-activedescendant</code> value</li>
                            <li>Screen readers announce the referenced element as if it has focus</li>
                        </ol>

                        <div className="comparison-table">
                            <h3>Roving Tabindex vs. aria-activedescendant</h3>
                            <table>
                                <thead>
                                <tr>
                                    <th scope="col">Aspect</th>
                                    <th scope="col">Roving Tabindex</th>
                                    <th scope="col">aria-activedescendant</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">DOM Focus</th>
                                    <td>Moves to each item</td>
                                    <td>Stays on container</td>
                                </tr>
                                <tr>
                                    <th scope="row">Use Case</th>
                                    <td>Static lists, toolbars, tabs</td>
                                    <td>Large/dynamic lists, comboboxes</td>
                                </tr>
                                <tr>
                                    <th scope="row">Scrolling</th>
                                    <td>Browser handles scroll</td>
                                    <td>Must manage scroll manually</td>
                                </tr>
                                <tr>
                                    <th scope="row">Complexity</th>
                                    <td>Simpler to implement</td>
                                    <td>More complex, better for dynamic content</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="code-example">
                            <h4>Code Example</h4>
                            <pre><code>{`<ul 
  role="listbox"
  tabindex="0"
  aria-activedescendant="option-2"
>
  <li id="option-1" role="option">Option 1</li>
  <li id="option-2" role="option">Option 2</li>
  <li id="option-3" role="option">Option 3</li>
</ul>

// Update on arrow key press:
listbox.setAttribute(
  'aria-activedescendant', 
  \`option-\${newIndex}\`
);`}</code></pre>
                        </div>
                    </section>
                )}
            </div>

            {/* Matching Exercise */}
            <section className="matching-section" aria-labelledby="matching-heading">
                <h2 id="matching-heading">Practice: Match the Terms</h2>
                <p>Match each focus management concept with its correct definition.</p>

                <div className="matching-exercise">
                    {matchingPairs.map((pair, index) => (
                        <div key={index} className="matching-row">
                            <div className="term-cell">
                                <strong>{pair.term}</strong>
                            </div>
                            <div className="select-cell">
                                <label htmlFor={`match-${index}`} className="visually-hidden">
                                    Select definition for {pair.term}
                                </label>
                                <select
                                    id={`match-${index}`}
                                    value={matchingAnswers[pair.term] || ''}
                                    onChange={(e) => handleMatchSelect(pair.term, e.target.value)}
                                    disabled={showMatchResults}
                                    className={showMatchResults
                                        ? matchingAnswers[pair.term] === correctMatches[pair.term]
                                            ? 'correct'
                                            : 'incorrect'
                                        : ''
                                    }
                                >
                                    <option value="">-- Select --</option>
                                    {matchingPairs.map((p, i) => (
                                        <option key={i} value={p.definition}>
                                            {p.definition}
                                        </option>
                                    ))}
                                </select>
                                {showMatchResults && matchingAnswers[pair.term] !== correctMatches[pair.term] && (
                                    <span className="correct-answer">
                                        Correct: {correctMatches[pair.term]}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="matching-actions">
                    {!showMatchResults ? (
                        <button className="submit-btn" onClick={checkMatches}>
                            Check Answers
                        </button>
                    ) : (
                        <>
                            <p className="match-result" role="status">
                                You matched {calculateMatchScore()} of {matchingPairs.length} correctly!
                            </p>
                            <button className="reset-btn" onClick={resetMatches}>
                                Try Again
                            </button>
                        </>
                    )}
                </div>
            </section>

            {/* Navigation */}
            <nav className="page-navigation" aria-label="Page navigation">
                <Link to="/domain-one/d-using-aria/aria-authoring-practice-guide" className="nav-link prev">
                    ← Previous: ARIA Authoring Practice Guide
                </Link>
                <Link to="/domain-one/d-using-aria/accessibility-tree-and-impact" className="nav-link next">
                    Next: The Accessibility Tree →
                </Link>
            </nav>
        </div>
    );
}

export default KeyboardInteractionAndFocusManagement;