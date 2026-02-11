
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function UsingAria() {
    const [expandedSection, setExpandedSection] = useState(null);

    const topics = [
        {
            id: 1,
            title: "1. Understanding Accessible Names and Descriptions",
            path: "/domain-one/d-using-aria/understanding-accessible-names-and-descriptions",
            description: "Learn how accessible names and descriptions are computed and their importance for assistive technology users.",
            keyPoints: [
                "Accessible Name Computation",
                "aria-label, aria-labelledby, aria-describedby",
                "Native HTML labeling mechanisms",
                "Priority order in name computation"
            ]
        },
        {
            id: 2,
            title: "2. ARIA Authoring Practice Guide",
            path: "/domain-one/d-using-aria/aria-authoring-practice-guide",
            description: "Explore the WAI-ARIA Authoring Practices Guide and how to implement common widget patterns accessibly.",
            keyPoints: [
                "Design patterns for widgets",
                "Keyboard interaction patterns",
                "Widget examples and implementations",
                "When to use ARIA vs native HTML"
            ]
        },
        {
            id: 3,
            title: "3. Keyboard Interaction and Focus Management",
            path: "/domain-one/d-using-aria/keyboard-interaction-and-focus-management",
            description: "Understand keyboard interaction patterns and focus management within custom components.",
            keyPoints: [
                "Focus management techniques",
                "tabindex usage",
                "Roving tabindex pattern",
                "Focus trapping in modals"
            ]
        },
        {
            id: 4,
            title: "4. The Accessibility Tree and Its Impact",
            path: "/domain-one/d-using-aria/accessibility-tree-and-impact",
            description: "Learn how browsers construct the accessibility tree and how it affects assistive technology users.",
            keyPoints: [
                "DOM to accessibility tree mapping",
                "How ARIA modifies the tree",
                "Browser and AT communication",
                "Debugging the accessibility tree"
            ]
        },
        {
            id: 5,
            title: "5. WAI-ARIA Roles, States, and Properties",
            path: "/domain-one/d-using-aria/wai-aria-roles-states-properties",
            description: "Master the various ARIA roles, states, and properties and when to apply them.",
            keyPoints: [
                "Landmark roles",
                "Widget roles",
                "States vs properties",
                "Required vs supported attributes"
            ]
        }
    ];

    const toggleSection = (id) => {
        setExpandedSection(expandedSection === id ? null : id);
    };

    return (
        <div className="container">
            <h1>D. Using ARIA</h1>

            <section className="overview-intro" aria-labelledby="intro-heading">
                <h2 id="intro-heading">Overview</h2>
                <p>
                    WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) is a technical
                    specification that provides a framework for improving the accessibility and interoperability
                    of web content and applications. ARIA allows developers to communicate the semantics of
                    custom widgets to assistive technologies.
                </p>

                <div className="key-concept" role="note" aria-labelledby="key-rule">
                    <h3 id="key-rule">The First Rule of ARIA</h3>
                    <p>
                        <strong>If you can use a native HTML element or attribute with the semantics and behavior
                            you require already built in, instead of re-purposing an element and adding an ARIA role,
                            state or property to make it accessible, then do so.</strong>
                    </p>
                </div>
            </section>

            <section className="aria-rules" aria-labelledby="rules-heading">
                <h2 id="rules-heading">The Five Rules of ARIA Use</h2>
                <ol className="rules-list">
                    <li>
                        <strong>First Rule:</strong> Use native HTML elements when possible instead of ARIA.
                    </li>
                    <li>
                        <strong>Second Rule:</strong> Do not change native semantics, unless you really have to.
                    </li>
                    <li>
                        <strong>Third Rule:</strong> All interactive ARIA controls must be usable with the keyboard.
                    </li>
                    <li>
                        <strong>Fourth Rule:</strong> Do not use <code>role="presentation"</code> or
                        <code>aria-hidden="true"</code> on focusable elements.
                    </li>
                    <li>
                        <strong>Fifth Rule:</strong> All interactive elements must have an accessible name.
                    </li>
                </ol>
            </section>

            <nav className="topic-navigation" aria-labelledby="topics-heading">
                <h2 id="topics-heading">Topics in This Section</h2>
                <ul className="topic-list" role="list">
                    {topics.map((topic) => (
                        <li key={topic.id} className="topic-card">
                            <div className="topic-header">
                                <Link to={topic.path} className="topic-title-link">
                                    <h3>{topic.title}</h3>
                                </Link>
                                <button
                                    className="expand-btn"
                                    onClick={() => toggleSection(topic.id)}
                                    aria-expanded={expandedSection === topic.id}
                                    aria-controls={`details-${topic.id}`}
                                >
                                    {expandedSection === topic.id ? 'Hide Details' : 'Show Details'}
                                </button>
                            </div>
                            <p className="topic-description">{topic.description}</p>
                            {expandedSection === topic.id && (
                                <div id={`details-${topic.id}`} className="topic-details">
                                    <h4>Key Learning Points:</h4>
                                    <ul>
                                        {topic.keyPoints.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            <section className="study-tips" aria-labelledby="tips-heading">
                <h2 id="tips-heading">Study Tips for This Section</h2>
                <ul>
                    <li>Practice using browser developer tools to inspect the accessibility tree</li>
                    <li>Review the WAI-ARIA Authoring Practices Guide examples</li>
                    <li>Test custom widgets with screen readers to understand ARIA's impact</li>
                    <li>Memorize the five rules of ARIA use</li>
                </ul>
            </section>
        </div>
    );
}

export default UsingAria;