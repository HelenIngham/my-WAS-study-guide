
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './4TheAccessibilityTreeAndItsImpactOnUsersOfAssistiveTechnology.css';

function TheAccessibilityTreeAndItsImpact() {
    const [selectedNode, setSelectedNode] = useState(null);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [showQuizResults, setShowQuizResults] = useState(false);

    const treeNodes = [
        {
            id: 'button',
            html: '<button>Submit</button>',
            role: 'button',
            name: 'Submit',
            states: ['focusable'],
            description: 'Native button element automatically creates a button role in the accessibility tree'
        },
        {
            id: 'link',
            html: '<a href="/page">Go to Page</a>',
            role: 'link',
            name: 'Go to Page',
            states: ['focusable'],
            description: 'Anchor with href creates a link role with the text content as its name'
        },
        {
            id: 'input',
            html: '<label>Email<input type="email"></label>',
            role: 'textbox',
            name: 'Email',
            states: ['focusable', 'editable'],
            description: 'Input with label creates a textbox with the label text as its accessible name'
        },
        {
            id: 'image',
            html: '<img src="cat.jpg" alt="Orange cat">',
            role: 'image',
            name: 'Orange cat',
            states: [],
            description: 'Image with alt text creates an image role with alt as the name'
        },
        {
            id: 'decorative',
            html: '<img src="divider.png" alt="">',
            role: '(removed)',
            name: '(none)',
            states: [],
            description: 'Empty alt makes the image presentational - removed from accessibility tree'
        },
        {
            id: 'custom',
            html: '<div role="button" tabindex="0">Custom</div>',
            role: 'button',
            name: 'Custom',
            states: ['focusable'],
            description: 'ARIA role overrides native div semantics to create a button'
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "What is the accessibility tree?",
            options: [
                "A visual representation of the DOM",
                "A simplified version of the DOM used by assistive technologies",
                "The same thing as the DOM tree",
                "A debugging tool for developers"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "Which of the following is NOT typically exposed in the accessibility tree?",
            options: [
                "Role of an element",
                "Accessible name",
                "CSS styling information",
                "State (like checked or expanded)"
            ],
            correct: 2
        },
        {
            id: 3,
            question: "What happens when you add role=\"presentation\" to an element?",
            options: [
                "The element becomes more accessible",
                "The element's semantics are removed from the accessibility tree",
                "The element becomes invisible",
                "The element gets a new role"
            ],
            correct: 1
        },
        {
            id: 4,
            question: "How can you view the accessibility tree in Chrome?",
            options: [
                "View > Source",
                "DevTools > Elements > Accessibility pane",
                "DevTools > Network tab",
                "It's not possible in Chrome"
            ],
            correct: 1
        },
        {
            id: 5,
            question: "What is the relationship between the DOM and accessibility tree?",
            options: [
                "They are identical",
                "The accessibility tree is derived from the DOM but may differ",
                "The DOM is derived from the accessibility tree",
                "They have no relationship"
            ],
            correct: 1
        }
    ];

    const handleQuizAnswer = (questionId, answerIndex) => {
        setQuizAnswers(prev => ({
            ...prev,
            [questionId]: answerIndex
        }));
    };

    const calculateScore = () => {
        let correct = 0;
        quizQuestions.forEach(q => {
            if (quizAnswers[q.id] === q.correct) correct++;
        });
        return correct;
    };

    return (
        <div className="container">
            <h1>The Accessibility Tree and Its Impact</h1>

            <section className="intro-section">
                <h2>What is the Accessibility Tree?</h2>
                <p>
                    The <strong>accessibility tree</strong> is a simplified representation of the DOM
                    (Document Object Model) that browsers create specifically for assistive technologies
                    like screen readers. It contains only the information relevant for accessibility:
                </p>

                <ul className="tree-info-list">
                    <li><strong>Role:</strong> What the element is (button, link, heading, etc.)</li>
                    <li><strong>Name:</strong> The accessible name identifying the element</li>
                    <li><strong>Description:</strong> Additional descriptive information</li>
                    <li><strong>State:</strong> Current state (checked, expanded, selected, etc.)</li>
                    <li><strong>Properties:</strong> Relationships and other ARIA properties</li>
                </ul>

                <div className="info-callout" role="note">
                    <h3>Key Insight</h3>
                    <p>
                        The accessibility tree is what screen readers actually "see." If something isn't
                        in the accessibility tree, assistive technology users won't know it exists.
                        Conversely, if something is in the tree incorrectly, it can confuse users.
                    </p>
                </div>
            </section>

            {/* Interactive Tree Demo */}
            <section className="tree-demo-section" aria-labelledby="demo-heading">
                <h2 id="demo-heading">Interactive: DOM to Accessibility Tree</h2>
                <p>Click on each HTML example to see how it appears in the accessibility tree:</p>

                <div className="tree-demo">
                    <div className="html-examples">
                        <h3 id="examples-list">HTML Examples</h3>
                        <ul aria-labelledby="examples-list" role="listbox">
                            {treeNodes.map((node) => (
                                <li
                                    key={node.id}
                                    role="option"
                                    aria-selected={selectedNode?.id === node.id}
                                    className={`html-example ${selectedNode?.id === node.id ? 'selected' : ''}`}
                                    onClick={() => setSelectedNode(node)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setSelectedNode(node);
                                        }
                                    }}
                                    tabIndex={0}
                                >
                                    <code>{node.html}</code>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="tree-output" aria-live="polite">
                        <h3>Accessibility Tree Node</h3>
                        {selectedNode ? (
                            <div className="node-details">
                                <dl>
                                    <dt>Role:</dt>
                                    <dd><span className="role-badge">{selectedNode.role}</span></dd>

                                    <dt>Name:</dt>
                                    <dd>{selectedNode.name}</dd>

                                    <dt>States:</dt>
                                    <dd>
                                        {selectedNode.states.length > 0
                                            ? selectedNode.states.map((state, i) => (
                                                <span key={i} className="state-badge">{state}</span>
                                            ))
                                            : <span className="no-states">(none)</span>
                                        }
                                    </dd>
                                </dl>
                                <p className="node-description">{selectedNode.description}</p>
                            </div>
                        ) : (
                            <p className="select-prompt">← Select an HTML example to see its accessibility tree node</p>
                        )}
                    </div>
                </div>
            </section>

            {/* How ARIA Modifies the Tree */}
            <section className="aria-impact-section" aria-labelledby="aria-impact-heading">
                <h2 id="aria-impact-heading">How ARIA Modifies the Accessibility Tree</h2>

                <div className="impact-cards">
                    <article className="impact-card">
                        <h3>Adding Semantics</h3>
                        <p>ARIA roles add semantic meaning to elements that lack it:</p>
                        <pre><code>{`<!-- No semantic meaning -->
<div>Click me</div>

<!-- Has button semantics -->
<div role="button" tabindex="0">
  Click me
</div>`}</code></pre>
                        <p className="card-note">
                            ⚠️ Remember: ARIA only changes what's exposed to assistive tech,
                            not the actual behavior. You still need keyboard support!
                        </p>
                    </article>

                    <article className="impact-card">
                        <h3>Removing Semantics</h3>
                        <p>Certain ARIA attributes remove elements from the accessibility tree:</p>
                        <pre><code>{`<!-- Removes from accessibility tree -->
<div aria-hidden="true">
  Decorative content
</div>

<!-- Removes semantics only -->
<table role="presentation">
  <!-- Used for layout, not data -->
</table>`}</code></pre>
                        <p className="card-note">
                            ⚠️ Never use aria-hidden="true" on focusable elements!
                        </p>
                    </article>

                    <article className="impact-card">
                        <h3>Modifying State</h3>
                        <p>ARIA states and properties communicate dynamic information:</p>
                        <pre><code>{`<button 
  aria-expanded="false"
  aria-controls="menu"
>
  Menu
</button>

<ul id="menu" aria-hidden="true">
  <!-- Menu items -->
</ul>`}</code></pre>
                        <p className="card-note">
                            State changes must be updated via JavaScript when interactions occur.
                        </p>
                    </article>
                </div>
            </section>

            {/* Browser Tools Section */}
            <section className="tools-section" aria-labelledby="tools-heading">
                <h2 id="tools-heading">Viewing the Accessibility Tree</h2>

                <p>Modern browsers provide tools to inspect the accessibility tree:</p>

                <div className="browser-tools">
                    <article className="tool-card">
                        <h3>Chrome DevTools</h3>
                        <ol>
                            <li>Open DevTools (F12)</li>
                            <li>Go to Elements tab</li>
                            <li>Select an element</li>
                            <li>Open the Accessibility pane in the right sidebar</li>
                        </ol>
                        <p>Or enable the full accessibility tree view in Experiments.</p>
                    </article>

                    <article className="tool-card">
                        <h3>Firefox Accessibility Inspector</h3>
                        <ol>
                            <li>Open DevTools (F12)</li>
                            <li>Go to Accessibility tab</li>
                            <li>Browse the full accessibility tree</li>
                            <li>Check for issues automatically</li>
                        </ol>
                    </article>

                    <article className="tool-card">
                        <h3>Safari Accessibility Inspector</h3>
                        <ol>
                            <li>Enable Developer menu in Preferences</li>
                            <li>Open Web Inspector</li>
                            <li>Go to Elements tab</li>
                            <li>View Node panel for accessibility info</li>
                        </ol>
                    </article>
                </div>
            </section>

            {/* Common Issues Section */}
            <section className="issues-section" aria-labelledby="issues-heading">
                <h2 id="issues-heading">Common Accessibility Tree Issues</h2>

                <table className="issues-table">
                    <thead>
                    <tr>
                        <th scope="col">Issue</th>
                        <th scope="col">Problem</th>
                        <th scope="col">Solution</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Missing accessible name</th>
                        <td>Element has no name in the tree</td>
                        <td>Add label, aria-label, or aria-labelledby</td>
                    </tr>
                    <tr>
                        <th scope="row">Generic role</th>
                        <td>Custom widget shows as "generic"</td>
                        <td>Add appropriate ARIA role</td>
                    </tr>
                    <tr>
                        <th scope="row">Missing state</th>
                        <td>Expanded/selected state not communicated</td>
                        <td>Add and update ARIA state attributes</td>
                    </tr>
                    <tr>
                        <th scope="row">Inaccessible content</th>
                        <td>Content hidden from assistive tech</td>
                        <td>Check for unintended aria-hidden</td>
                    </tr>
                    <tr>
                        <th scope="row">Broken relationships</th>
                        <td>Controls/describes not working</td>
                        <td>Verify IDs in aria-controls, aria-describedby</td>
                    </tr>
                    </tbody>
                </table>
            </section>

            {/* Quiz Section */}
            <section className="quiz-section" aria-labelledby="quiz-heading">
                <h2 id="quiz-heading">Knowledge Check</h2>

                <form onSubmit={(e) => { e.preventDefault(); setShowQuizResults(true); }}>
                    {quizQuestions.map((q) => (
                        <fieldset key={q.id} className="quiz-question">
                            <legend>{q.question}</legend>
                            <div className="quiz-options">
                                {q.options.map((option, idx) => (
                                    <label
                                        key={idx}
                                        className={`quiz-option ${
                                            showQuizResults
                                                ? idx === q.correct
                                                    ? 'correct'
                                                    : quizAnswers[q.id] === idx
                                                        ? 'incorrect'
                                                        : ''
                                                : ''
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name={`q-${q.id}`}
                                            value={idx}
                                            checked={quizAnswers[q.id] === idx}
                                            onChange={() => handleQuizAnswer(q.id, idx)}
                                            disabled={showQuizResults}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    ))}

                    <div className="quiz-actions">
                        {!showQuizResults ? (
                            <button type="submit" className="submit-btn">
                                Check Answers
                            </button>
                        ) : (
                            <>
                                <p className="quiz-result" role="status">
                                    You scored {calculateScore()} out of {quizQuestions.length}!
                                </p>
                                <button
                                    type="button"
                                    className="reset-btn"
                                    onClick={() => {
                                        setQuizAnswers({});
                                        setShowQuizResults(false);
                                    }}
                                >
                                    Try Again
                                </button>
                            </>
                        )}
                    </div>
                </form>
            </section>

            {/* Navigation */}
            <nav className="page-navigation" aria-label="Page navigation">
                <Link to="/domain-one/d-using-aria/keyboard-interaction-and-focus-management" className="nav-link prev">
                    ← Previous: Keyboard Interaction and Focus Management
                </Link>
                <Link to="/domain-one/d-using-aria/wai-aria-roles-states-properties" className="nav-link next">
                    Next: WAI-ARIA Roles, States, and Properties →
                </Link>
            </nav>
        </div>
    );
}

export default TheAccessibilityTreeAndItsImpact;