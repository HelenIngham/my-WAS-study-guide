
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './5WAI-ARIARolesStatesAndProperties.css';

function WAIARIARolesStatesAndProperties() {
    const [activeCategory, setActiveCategory] = useState('landmark');
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedRole, setExpandedRole] = useState(null);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [showQuizResults, setShowQuizResults] = useState(false);

    const roleCategories = {
        landmark: {
            title: 'Landmark Roles',
            description: 'Define major sections of a page for navigation purposes.',
            roles: [
                {
                    name: 'banner',
                    htmlEquiv: '<header> (when not nested)',
                    description: 'Site-oriented content, typically at the top of the page.',
                    usage: 'Usually contains logo, site title, and primary navigation.'
                },
                {
                    name: 'navigation',
                    htmlEquiv: '<nav>',
                    description: 'A collection of navigation links.',
                    usage: 'Label with aria-label when multiple nav regions exist.'
                },
                {
                    name: 'main',
                    htmlEquiv: '<main>',
                    description: 'The primary content of the document.',
                    usage: 'Should only be one per page unless others have aria-hidden="true".'
                },
                {
                    name: 'complementary',
                    htmlEquiv: '<aside>',
                    description: 'Supporting content related to the main content.',
                    usage: 'Sidebars, related links, advertisements.'
                },
                {
                    name: 'contentinfo',
                    htmlEquiv: '<footer> (when not nested)',
                    description: 'Information about the document/site.',
                    usage: 'Copyright, privacy policy links, contact info.'
                },
                {
                    name: 'region',
                    htmlEquiv: '<section> (with accessible name)',
                    description: 'A generic landmark for content sections.',
                    usage: 'Must have an accessible name to be a landmark.'
                },
                {
                    name: 'search',
                    htmlEquiv: '<search> (HTML5.2+)',
                    description: 'Search functionality for the site.',
                    usage: 'Contains form controls for searching.'
                },
                {
                    name: 'form',
                    htmlEquiv: '<form> (with accessible name)',
                    description: 'A region containing form elements.',
                    usage: 'Only a landmark when it has an accessible name.'
                }
            ]
        },
        widget: {
            title: 'Widget Roles',
            description: 'Define interactive UI components.',
            roles: [
                {
                    name: 'button',
                    htmlEquiv: '<button>',
                    description: 'A clickable element that triggers an action.',
                    usage: 'Use native <button> when possible.'
                },
                {
                    name: 'link',
                    htmlEquiv: '<a href>',
                    description: 'A hyperlink to another resource.',
                    usage: 'Use native <a> with href when possible.'
                },
                {
                    name: 'checkbox',
                    htmlEquiv: '<input type="checkbox">',
                    description: 'A checkable input with true/false/mixed states.',
                    usage: 'Requires aria-checked state.'
                },
                {
                    name: 'radio',
                    htmlEquiv: '<input type="radio">',
                    description: 'One of a group of checkable buttons.',
                    usage: 'Should be grouped with radiogroup role.'
                },
                {
                    name: 'textbox',
                    htmlEquiv: '<input type="text">, <textarea>',
                    description: 'An input for free-form text.',
                    usage: 'Can be single or multiline.'
                },
                {
                    name: 'slider',
                    htmlEquiv: '<input type="range">',
                    description: 'Input for selecting a value from a range.',
                    usage: 'Requires aria-valuenow, aria-valuemin, aria-valuemax.'
                },
                {
                    name: 'combobox',
                    htmlEquiv: 'None',
                    description: 'An input with an associated popup.',
                    usage: 'Complex pattern - see ARIA APG.'
                },
                {
                    name: 'listbox',
                    htmlEquiv: '<select>',
                    description: 'A list from which a user can select items.',
                    usage: 'Contains option role children.'
                },
                {
                    name: 'menu',
                    htmlEquiv: 'None',
                    description: 'A list of choices/actions.',
                    usage: 'Use for application menus, not navigation.'
                },
                {
                    name: 'menuitem',
                    htmlEquiv: 'None',
                    description: 'An option in a menu.',
                    usage: 'Child of menu or menubar.'
                },
                {
                    name: 'tab',
                    htmlEquiv: 'None',
                    description: 'A tab in a tablist.',
                    usage: 'Requires aria-selected and aria-controls.'
                },
                {
                    name: 'tabpanel',
                    htmlEquiv: 'None',
                    description: 'Content associated with a tab.',
                    usage: 'Should be labelledby its associated tab.'
                },
                {
                    name: 'dialog',
                    htmlEquiv: '<dialog>',
                    description: 'A dialog box or window.',
                    usage: 'Use aria-modal="true" for modal dialogs.'
                },
                {
                    name: 'alertdialog',
                    htmlEquiv: 'None',
                    description: 'A dialog with important information requiring response.',
                    usage: 'Like dialog but focus must go to an element inside.'
                },
                {
                    name: 'progressbar',
                    htmlEquiv: '<progress>',
                    description: 'Shows completion progress of a task.',
                    usage: 'Use aria-valuenow, aria-valuemin, aria-valuemax.'
                },
                {
                    name: 'spinbutton',
                    htmlEquiv: '<input type="number">',
                    description: 'Input for selecting from a range using up/down.',
                    usage: 'Requires value attributes.'
                }
            ]
        },
        structure: {
            title: 'Document Structure Roles',
            description: 'Provide structure and organization to content.',
            roles: [
                {
                    name: 'heading',
                    htmlEquiv: '<h1>-<h6>',
                    description: 'A heading for a section.',
                    usage: 'Requires aria-level if not using native headings.'
                },
                {
                    name: 'list',
                    htmlEquiv: '<ul>, <ol>',
                    description: 'A list of items.',
                    usage: 'Children should have listitem role.'
                },
                {
                    name: 'listitem',
                    htmlEquiv: '<li>',
                    description: 'An item in a list.',
                    usage: 'Must be child of list.'
                },
                {
                    name: 'table',
                    htmlEquiv: '<table>',
                    description: 'A data table.',
                    usage: 'Use native HTML tables when possible.'
                },
                {
                    name: 'row',
                    htmlEquiv: '<tr>',
                    description: 'A row in a table or grid.',
                    usage: 'Child of table, grid, or treegrid.'
                },
                {
                    name: 'cell',
                    htmlEquiv: '<td>',
                    description: 'A cell in a table.',
                    usage: 'Child of row.'
                },
                {
                    name: 'rowheader',
                    htmlEquiv: '<th scope="row">',
                    description: 'A header cell for a row.',
                    usage: 'Use scope attribute on native th.'
                },
                {
                    name: 'columnheader',
                    htmlEquiv: '<th scope="col">',
                    description: 'A header cell for a column.',
                    usage: 'Use scope attribute on native th.'
                },
                {
                    name: 'img',
                    htmlEquiv: '<img>',
                    description: 'An image.',
                    usage: 'Requires aria-label or aria-labelledby.'
                },
                {
                    name: 'article',
                    htmlEquiv: '<article>',
                    description: 'Independent, self-contained content.',
                    usage: 'Blog posts, news articles, comments.'
                },
                {
                    name: 'group',
                    htmlEquiv: 'None (similar to <fieldset>)',
                    description: 'Groups related UI elements.',
                    usage: 'For grouping that is not a landmark.'
                },
                {
                    name: 'separator',
                    htmlEquiv: '<hr>',
                    description: 'Divides content sections.',
                    usage: 'Can be focusable if it adjusts layout.'
                }
            ]
        },
        live: {
            title: 'Live Region Roles',
            description: 'Announce dynamic content changes.',
            roles: [
                {
                    name: 'alert',
                    htmlEquiv: 'None',
                    description: 'Important, time-sensitive message.',
                    usage: 'Automatically announced. Use sparingly.'
                },
                {
                    name: 'status',
                    htmlEquiv: '<output>',
                    description: 'Advisory information that is not critical.',
                    usage: 'Has implicit aria-live="polite".'
                },
                {
                    name: 'log',
                    htmlEquiv: 'None',
                    description: 'Sequential information like chat history.',
                    usage: 'New items added to the end.'
                },
                {
                    name: 'marquee',
                    htmlEquiv: 'None',
                    description: 'Non-essential changing information.',
                    usage: 'Stock tickers, scrolling ads.'
                },
                {
                    name: 'timer',
                    htmlEquiv: 'None',
                    description: 'A numerical counter.',
                    usage: 'Countdown timers, elapsed time.'
                }
            ]
        }
    };

    const statesAndProperties = {
        states: [
            { name: 'aria-checked', values: 'true | false | mixed', description: 'Current checked state of checkboxes, radio buttons' },
            { name: 'aria-disabled', values: 'true | false', description: 'Element is perceivable but not operable' },
            { name: 'aria-expanded', values: 'true | false', description: 'Whether a collapsible element is expanded' },
            { name: 'aria-hidden', values: 'true | false', description: 'Whether element is exposed to accessibility API' },
            { name: 'aria-invalid', values: 'true | false | grammar | spelling', description: 'Entered value does not conform to expected format' },
            { name: 'aria-pressed', values: 'true | false | mixed', description: 'Current pressed state of toggle buttons' },
            { name: 'aria-selected', values: 'true | false', description: 'Current selected state of various widgets' },
            { name: 'aria-busy', values: 'true | false', description: 'Element is being modified and AT should wait' }
        ],
        properties: [
            { name: 'aria-label', values: 'string', description: 'Defines accessible name for element' },
            { name: 'aria-labelledby', values: 'ID reference(s)', description: 'References elements that label this element' },
            { name: 'aria-describedby', values: 'ID reference(s)', description: 'References elements that describe this element' },
            { name: 'aria-controls', values: 'ID reference(s)', description: 'Identifies element(s) controlled by this element' },
            { name: 'aria-owns', values: 'ID reference(s)', description: 'Defines parent-child relationship not in DOM' },
            { name: 'aria-live', values: 'off | polite | assertive', description: 'Indicates live region and its priority' },
            { name: 'aria-atomic', values: 'true | false', description: 'Whether entire region should be announced on change' },
            { name: 'aria-relevant', values: 'additions | removals | text | all', description: 'What changes trigger announcements' },
            { name: 'aria-required', values: 'true | false', description: 'Input is required before form submission' },
            { name: 'aria-readonly', values: 'true | false', description: 'Element is not editable but otherwise operable' },
            { name: 'aria-haspopup', values: 'menu | listbox | tree | grid | dialog | true | false', description: 'Indicates popup is available' },
            { name: 'aria-modal', values: 'true | false', description: 'Whether element blocks interaction with rest of page' },
            { name: 'aria-current', values: 'page | step | location | date | time | true | false', description: 'Indicates current item in a set' },
            { name: 'aria-level', values: 'integer', description: 'Hierarchical level within a structure' },
            { name: 'aria-valuenow', values: 'number', description: 'Current value for range widgets' },
            { name: 'aria-valuemin', values: 'number', description: 'Minimum allowed value for range widgets' },
            { name: 'aria-valuemax', values: 'number', description: 'Maximum allowed value for range widgets' },
            { name: 'aria-valuetext', values: 'string', description: 'Human-readable text for current value' }
        ]
    };

    const quizQuestions = [
        {
            id: 1,
            question: 'Which landmark role is the HTML equivalent of <header> (when not nested)?',
            options: ['main', 'banner', 'navigation', 'region'],
            correct: 1
        },
        {
            id: 2,
            question: 'What is the key difference between aria-label and aria-labelledby?',
            options: [
                'aria-label is deprecated',
                'aria-label accepts a string; aria-labelledby references element IDs',
                'aria-labelledby accepts a string; aria-label references element IDs',
                'There is no difference'
            ],
            correct: 1
        },
        {
            id: 3,
            question: 'Which ARIA state would you use to indicate a toggle button is pressed?',
            options: ['aria-checked', 'aria-selected', 'aria-pressed', 'aria-expanded'],
            correct: 2
        },
        {
            id: 4,
            question: 'What does aria-live="polite" mean?',
            options: [
                'The content is announced immediately, interrupting the user',
                'The content is announced when the user is idle',
                'The content is never announced',
                'The content is hidden from screen readers'
            ],
            correct: 1
        },
        {
            id: 5,
            question: 'Which role should be used for site-wide search functionality?',
            options: ['form', 'search', 'navigation', 'region'],
            correct: 1
        },
        {
            id: 6,
            question: 'What is required for a <section> element to be a landmark?',
            options: [
                'Nothing, it\'s always a landmark',
                'The role="region" attribute',
                'An accessible name (aria-label or aria-labelledby)',
                'It must contain a heading'
            ],
            correct: 2
        }
    ];

    const currentRoles = roleCategories[activeCategory]?.roles || [];
    const filteredRoles = currentRoles.filter(role =>
        role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
            <h1>WAI-ARIA Roles, States, and Properties</h1>

            <section className="intro-section">
                <h2>Understanding ARIA Attributes</h2>
                <p>
                    WAI-ARIA defines three types of attributes that modify how elements appear
                    in the accessibility tree:
                </p>
                <ul className="attribute-types">
                    <li>
                        <strong>Roles:</strong> Define what an element IS (button, checkbox, navigation, etc.)
                    </li>
                    <li>
                        <strong>States:</strong> Dynamic properties that change during interaction (expanded, checked, selected)
                    </li>
                    <li>
                        <strong>Properties:</strong> Relatively static characteristics (labelledby, required, haspopup)
                    </li>
                </ul>
            </section>

            {/* Roles Section */}
            <section className="roles-section" aria-labelledby="roles-heading">
                <h2 id="roles-heading">ARIA Roles Reference</h2>

                <div className="category-tabs" role="tablist" aria-label="Role categories">
                    {Object.keys(roleCategories).map((category) => (
                        <button
                            key={category}
                            role="tab"
                            aria-selected={activeCategory === category}
                            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => {
                                setActiveCategory(category);
                                setSearchTerm('');
                                setExpandedRole(null);
                            }}
                        >
                            {roleCategories[category].title}
                        </button>
                    ))}
                </div>

                <div className="roles-panel">
                    <div className="panel-header">
                        <div>
                            <h3>{roleCategories[activeCategory].title}</h3>
                            <p>{roleCategories[activeCategory].description}</p>
                        </div>
                        <div className="search-box">
                            <label htmlFor="role-search" className="visually-hidden">
                                Search roles
                            </label>
                            <input
                                type="search"
                                id="role-search"
                                placeholder="Search roles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="roles-grid">
                        {filteredRoles.map((role) => (
                            <article
                                key={role.name}
                                className={`role-card ${expandedRole === role.name ? 'expanded' : ''}`}
                            >
                                <button
                                    className="role-header"
                                    onClick={() => setExpandedRole(expandedRole === role.name ? null : role.name)}
                                    aria-expanded={expandedRole === role.name}
                                >
                                    <span className="role-name">{role.name}</span>
                                    <span className="expand-icon" aria-hidden="true">
                                        {expandedRole === role.name ? '−' : '+'}
                                    </span>
                                </button>

                                {expandedRole === role.name && (
                                    <div className="role-details">
                                        <dl>
                                            <dt>HTML Equivalent:</dt>
                                            <dd><code>{role.htmlEquiv}</code></dd>

                                            <dt>Description:</dt>
                                            <dd>{role.description}</dd>

                                            <dt>Usage Notes:</dt>
                                            <dd>{role.usage}</dd>
                                        </dl>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>

                    {filteredRoles.length === 0 && (
                        <p className="no-results">No roles match your search.</p>
                    )}
                </div>
            </section>

            {/* States and Properties Section */}
            <section className="states-properties-section" aria-labelledby="states-heading">
                <h2 id="states-heading">States and Properties Reference</h2>

                <div className="tables-container">
                    <div className="table-wrapper">
                        <h3>ARIA States (Dynamic)</h3>
                        <table className="aria-table">
                            <thead>
                            <tr>
                                <th scope="col">Attribute</th>
                                <th scope="col">Values</th>
                                <th scope="col">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            {statesAndProperties.states.map((state) => (
                                <tr key={state.name}>
                                    <th scope="row"><code>{state.name}</code></th>
                                    <td><code>{state.values}</code></td>
                                    <td>{state.description}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="table-wrapper">
                        <h3>ARIA Properties (Relatively Static)</h3>
                        <table className="aria-table">
                            <thead>
                            <tr>
                                <th scope="col">Attribute</th>
                                <th scope="col">Values</th>
                                <th scope="col">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            {statesAndProperties.properties.map((prop) => (
                                <tr key={prop.name}>
                                    <th scope="row"><code>{prop.name}</code></th>
                                    <td><code>{prop.values}</code></td>
                                    <td>{prop.description}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Key Concepts */}
            <section className="concepts-section" aria-labelledby="concepts-heading">
                <h2 id="concepts-heading">Key Concepts for the Exam</h2>

                <div className="concept-cards">
                    <article className="concept-card">
                        <h3>States vs. Properties</h3>
                        <p>
                            <strong>States</strong> change frequently during user interaction
                            (aria-expanded, aria-checked). <strong>Properties</strong> are more static
                            and typically don't change (aria-labelledby, aria-required).
                        </p>
                    </article>

                    <article className="concept-card">
                        <h3>Required vs. Supported Attributes</h3>
                        <p>
                            Some roles have <strong>required</strong> attributes (e.g., slider requires
                            aria-valuenow). Others are <strong>supported</strong> but optional. Check the
                            ARIA spec for each role.
                        </p>
                    </article>

                    <article className="concept-card">
                        <h3>Implicit vs. Explicit Roles</h3>
                        <p>
                            Native HTML elements have <strong>implicit</strong> roles (button has button role).
                            ARIA roles are <strong>explicit</strong> and can override implicit roles.
                        </p>
                    </article>

                    <article className="concept-card">
                        <h3>Abstract Roles</h3>
                        <p>
                            Some roles (like <code>widget</code>, <code>landmark</code>, <code>roletype</code>)
                            are <strong>abstract</strong> and should never be used directly in content.
                        </p>
                    </article>
                </div>
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
                <Link to="/domain-one/d-using-aria/accessibility-tree-and-impact" className="nav-link prev">
                    ← Previous: The Accessibility Tree
                </Link>
                <Link to="/domain-one/d-using-aria" className="nav-link next">
                    Back to Using ARIA Overview →
                </Link>
            </nav>
        </div>
    );
}

export default WAIARIARolesStatesAndProperties;