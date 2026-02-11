
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './2ARIAAuthoringPracticeGuide.css';

function ARIAAuthoringPracticeGuide() {
    const [expandedWidget, setExpandedWidget] = useState(null);
    const [flashcardIndex, setFlashcardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const flashcards = [
        {
            front: "What is the ARIA Authoring Practices Guide (APG)?",
            back: "A W3C resource that provides guidance on how to use WAI-ARIA to create accessible widgets and interactions. It includes design patterns, keyboard interactions, and code examples."
        },
        {
            front: "What are the three key components of each APG pattern?",
            back: "1. Description of the widget\n2. Keyboard interaction requirements\n3. WAI-ARIA roles, states, and properties needed"
        },
        {
            front: "When should you use ARIA according to the APG?",
            back: "Only when native HTML elements cannot provide the required semantics or functionality. Native HTML should always be the first choice."
        },
        {
            front: "What is a 'composite widget' in ARIA?",
            back: "A widget made up of multiple interactive elements that function as a single unit, like a listbox, menu, or grid. Focus management typically uses roving tabindex."
        },
        {
            front: "What is the difference between 'menu' and 'menubar' roles?",
            back: "A menu is a container for menu items (like a dropdown). A menubar is a horizontal menu typically at the top of an application, containing menus or menuitems."
        }
    ];

    const widgetPatterns = [
        {
            id: 'accordion',
            name: 'Accordion',
            description: 'A vertically stacked set of interactive headings that reveal/hide associated content sections.',
            keyboardBehavior: [
                'Enter/Space: Toggle expanded state of focused header',
                'Tab: Move between accordion headers',
                'Down Arrow: Move focus to next header (optional)',
                'Up Arrow: Move focus to previous header (optional)'
            ],
            ariaUsage: [
                'button role on headers (or use <button>)',
                'aria-expanded on buttons',
                'aria-controls pointing to panel ID',
                'region role on panels (optional)'
            ]
        },
        {
            id: 'dialog',
            name: 'Modal Dialog',
            description: 'A dialog that requires user interaction before returning to the main content.',
            keyboardBehavior: [
                'Tab: Move focus to next focusable element inside dialog',
                'Shift+Tab: Move focus to previous focusable element',
                'Escape: Close the dialog',
                'Focus must be trapped within the dialog'
            ],
            ariaUsage: [
                'role="dialog" or role="alertdialog"',
                'aria-modal="true"',
                'aria-labelledby pointing to dialog title',
                'aria-describedby for dialog description (optional)'
            ]
        },
        {
            id: 'tabs',
            name: 'Tabs',
            description: 'A set of layered sections of content where only one panel is displayed at a time.',
            keyboardBehavior: [
                'Tab: Move into/out of the tab list',
                'Left/Right Arrow: Navigate between tabs',
                'Home: First tab (optional)',
                'End: Last tab (optional)'
            ],
            ariaUsage: [
                'role="tablist" on container',
                'role="tab" on each tab',
                'role="tabpanel" on each panel',
                'aria-selected on tabs',
                'aria-controls/aria-labelledby relationships'
            ]
        },
        {
            id: 'combobox',
            name: 'Combobox',
            description: 'An input widget with an associated popup for suggesting values.',
            keyboardBehavior: [
                'Down Arrow: Open popup, move to first/next option',
                'Up Arrow: Open popup, move to last/previous option',
                'Enter: Select focused option',
                'Escape: Close popup',
                'Type characters: Filter options'
            ],
            ariaUsage: [
                'role="combobox" on input',
                'aria-expanded indicates popup state',
                'aria-autocomplete indicates filtering behavior',
                'aria-activedescendant for virtual focus',
                'role="listbox" or "grid" on popup'
            ]
        },
        {
            id: 'slider',
            name: 'Slider',
            description: 'An input where the user selects a value from within a given range.',
            keyboardBehavior: [
                'Right/Up Arrow: Increase value',
                'Left/Down Arrow: Decrease value',
                'Home: Set to minimum value',
                'End: Set to maximum value',
                'Page Up/Down: Larger increment changes'
            ],
            ariaUsage: [
                'role="slider"',
                'aria-valuenow: Current value',
                'aria-valuemin: Minimum value',
                'aria-valuemax: Maximum value',
                'aria-valuetext: Human-readable value (optional)'
            ]
        }
    ];

    const toggleWidget = (id) => {
        setExpandedWidget(expandedWidget === id ? null : id);
    };

    const nextCard = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setFlashcardIndex((prev) => (prev + 1) % flashcards.length);
        }, 200);
    };

    const prevCard = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setFlashcardIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
        }, 200);
    };

    return (
        <div className="container">

            <h1>ARIA Authoring Practices Guide</h1>

            <section className="intro-section">
                <h2>About the APG</h2>
                <p>
                    The <strong>ARIA Authoring Practices Guide (APG)</strong> is an essential W3C resource that
                    provides developers with guidance on how to build accessible custom widgets using WAI-ARIA.
                    It documents design patterns for common UI components including expected keyboard behaviors
                    and required ARIA attributes.
                </p>

                <div className="resource-link">
                    <a
                        href="https://www.w3.org/WAI/ARIA/apg/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit the ARIA Authoring Practices Guide ↗
                    </a>
                </div>
            </section>

            {/* Flashcard Study Section */}
            <section className="flashcard-section" aria-labelledby="flashcard-heading">
                <h2 id="flashcard-heading">Flashcard Study</h2>
                <p>Test your knowledge with these flashcards. Click to flip!</p>

                <div className="flashcard-container">
                    <button
                        className="flashcard-nav prev"
                        onClick={prevCard}
                        aria-label="Previous flashcard"
                    >
                        ←
                    </button>

                    <div
                        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
                        onClick={() => setIsFlipped(!isFlipped)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setIsFlipped(!isFlipped);
                            }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-pressed={isFlipped}
                        aria-label={`Flashcard ${flashcardIndex + 1} of ${flashcards.length}. ${isFlipped ? 'Showing answer' : 'Click to reveal answer'}`}
                    >
                        <div className="flashcard-inner">
                            <div className="flashcard-front">
                                <p>{flashcards[flashcardIndex].front}</p>
                                <span className="flip-hint">Click to flip</span>
                            </div>
                            <div className="flashcard-back">
                                <p>{flashcards[flashcardIndex].back}</p>
                            </div>
                        </div>
                    </div>

                    <button
                        className="flashcard-nav next"
                        onClick={nextCard}
                        aria-label="Next flashcard"
                    >
                        →
                    </button>
                </div>

                <p className="flashcard-counter" aria-live="polite">
                    Card {flashcardIndex + 1} of {flashcards.length}
                </p>
            </section>

            {/* Widget Patterns */}
            <section className="patterns-section" aria-labelledby="patterns-heading">
                <h2 id="patterns-heading">Common Widget Patterns</h2>
                <p>
                    The APG documents dozens of widget patterns. Here are some of the most common ones
                    you should know for the WAS exam:
                </p>

                <div className="widget-list">
                    {widgetPatterns.map((widget) => (
                        <article key={widget.id} className="widget-card">
                            <h3>
                                <button
                                    className="widget-toggle"
                                    onClick={() => toggleWidget(widget.id)}
                                    aria-expanded={expandedWidget === widget.id}
                                    aria-controls={`widget-content-${widget.id}`}
                                >
                                    <span className="widget-name">{widget.name}</span>
                                    <span className="toggle-icon" aria-hidden="true">
                                        {expandedWidget === widget.id ? '−' : '+'}
                                    </span>
                                </button>
                            </h3>
                            <p className="widget-description">{widget.description}</p>

                            {expandedWidget === widget.id && (
                                <div
                                    id={`widget-content-${widget.id}`}
                                    className="widget-details"
                                >
                                    <div className="detail-section">
                                        <h4>Keyboard Interaction</h4>
                                        <ul>
                                            {widget.keyboardBehavior.map((behavior, idx) => (
                                                <li key={idx}>{behavior}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="detail-section">
                                        <h4>ARIA Requirements</h4>
                                        <ul>
                                            {widget.ariaUsage.map((usage, idx) => (
                                                <li key={idx}><code>{usage}</code></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            {/* Key Concepts */}
            <section className="concepts-section" aria-labelledby="concepts-heading">
                <h2 id="concepts-heading">Key Concepts from the APG</h2>

                <div className="concept-grid">
                    <article className="concept-card">
                        <h3>Design Patterns vs. Examples</h3>
                        <p>
                            The APG provides both abstract <strong>design patterns</strong> (the requirements)
                            and concrete <strong>examples</strong> (implementations). Always refer to the
                            pattern documentation, not just copy code from examples.
                        </p>
                    </article>

                    <article className="concept-card">
                        <h3>Keyboard Navigation Models</h3>
                        <p>
                            The APG defines two main keyboard navigation models:
                        </p>
                        <ul>
                            <li><strong>Roving tabindex:</strong> Only one element in a group is in the tab order at a time</li>
                            <li><strong>aria-activedescendant:</strong> Focus stays on container, virtual focus is managed</li>
                        </ul>
                    </article>

                    <article className="concept-card">
                        <h3>Progressive Enhancement</h3>
                        <p>
                            The APG recommends starting with native HTML elements and only adding ARIA when
                            necessary. This ensures basic functionality even if JavaScript fails.
                        </p>
                    </article>

                    <article className="concept-card">
                        <h3>Focus Management</h3>
                        <p>
                            Custom widgets must manage focus appropriately. This includes:
                        </p>
                        <ul>
                            <li>Setting initial focus</li>
                            <li>Moving focus on user interaction</li>
                            <li>Returning focus after closing popups</li>
                        </ul>
                    </article>
                </div>
            </section>

            {/* Study Tips */}
            <section className="tips-section" aria-labelledby="tips-heading">
                <h2 id="tips-heading">Exam Study Tips</h2>
                <ul className="tips-list">
                    <li>
                        <strong>Memorize keyboard interactions</strong> for common widgets like tabs, dialogs,
                        menus, and comboboxes
                    </li>
                    <li>
                        <strong>Understand the relationship</strong> between ARIA attributes like
                        aria-controls, aria-labelledby, and aria-describedby
                    </li>
                    <li>
                        <strong>Know when to use native HTML</strong> vs. when ARIA is actually needed
                    </li>
                    <li>
                        <strong>Practice identifying issues</strong> in code examples that don't follow APG patterns
                    </li>
                </ul>
            </section>

            {/* Navigation */}
            <nav className="page-navigation" aria-label="Page navigation">
                <Link to="/domain-one/d/understanding-accessible-names-and-descriptions" className="nav-link prev">
                    ← Previous: Accessible Names and Descriptions
                </Link>
                <Link to="/domain-one/d/keyboard-interaction-and-focus-management" className="nav-link next">
                    Next: Keyboard Interaction and Focus Management →
                </Link>
            </nav>
        </div>
    );
}

export default ARIAAuthoringPracticeGuide;