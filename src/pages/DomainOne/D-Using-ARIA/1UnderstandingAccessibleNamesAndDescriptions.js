import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './1UnderstandingAccessibleNamesAndDescriptions.css';

function UnderstandingAccessibleNamesAndDescriptions() {
    const [activeTab, setActiveTab] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'computation', label: 'Name Computation' },
        { id: 'methods', label: 'Labeling Methods' },
        { id: 'examples', label: 'Examples' }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "What is the primary purpose of an accessible name?",
            options: [
                "To style the element visually",
                "To identify the element to assistive technology users",
                "To add JavaScript functionality",
                "To improve SEO ranking"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "In the accessible name computation, which typically has the highest priority?",
            options: [
                "The element's text content",
                "The title attribute",
                "aria-labelledby",
                "The placeholder attribute"
            ],
            correct: 2
        },
        {
            id: 3,
            question: "What is the difference between aria-label and aria-labelledby?",
            options: [
                "There is no difference",
                "aria-label takes a string value; aria-labelledby references element IDs",
                "aria-labelledby is deprecated",
                "aria-label only works on form elements"
            ],
            correct: 1
        },
        {
            id: 4,
            question: "What does aria-describedby provide?",
            options: [
                "The primary name of an element",
                "Additional descriptive information about an element",
                "Visual styling information",
                "Navigation instructions"
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

            <h1>Understanding Accessible Names and Descriptions</h1>

            {/* Tab Navigation */}
            <div className="tab-container" role="tablist" aria-label="Content sections">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.id}
                        role="tab"
                        id={`tab-${tab.id}`}
                        aria-selected={activeTab === index}
                        aria-controls={`panel-${tab.id}`}
                        tabIndex={activeTab === index ? 0 : -1}
                        className={`tab-button ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                        onKeyDown={(e) => {
                            if (e.key === 'ArrowRight') {
                                setActiveTab((activeTab + 1) % tabs.length);
                            } else if (e.key === 'ArrowLeft') {
                                setActiveTab((activeTab - 1 + tabs.length) % tabs.length);
                            }
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Panels */}
            <div
                role="tabpanel"
                id={`panel-${tabs[activeTab].id}`}
                aria-labelledby={`tab-${tabs[activeTab].id}`}
                className="tab-panel"
            >
                {activeTab === 0 && (
                    <section>
                        <h2>What are Accessible Names and Descriptions?</h2>
                        <p>
                            An <strong>accessible name</strong> is a short text label that identifies an element
                            to users of assistive technologies. Every interactive element should have an accessible
                            name that clearly communicates its purpose.
                        </p>

                        <p>
                            An <strong>accessible description</strong> provides additional context or instructions
                            beyond the name. It's announced after the name and role by screen readers.
                        </p>

                        <div className="info-box" role="note">
                            <h3>Key Distinction</h3>
                            <ul>
                                <li><strong>Name:</strong> Identifies WHAT the element is (required)</li>
                                <li><strong>Description:</strong> Provides additional HOW/WHY information (optional)</li>
                            </ul>
                        </div>

                        <h3>Why Are They Important?</h3>
                        <ul>
                            <li>Screen reader users rely on names to understand interactive elements</li>
                            <li>Voice control users need names to activate controls</li>
                            <li>Names help create a mental model of the interface</li>
                            <li>Descriptions reduce errors and improve form completion</li>
                        </ul>
                    </section>
                )}

                {activeTab === 1 && (
                    <section>
                        <h2>Accessible Name Computation</h2>
                        <p>
                            Browsers follow a specific algorithm to calculate accessible names. Understanding
                            this priority order is crucial for ensuring your elements have the intended names.
                        </p>

                        <h3>Priority Order (Highest to Lowest)</h3>
                        <ol className="priority-list">
                            <li>
                                <strong>aria-labelledby</strong>
                                <p>References one or more element IDs. Their text content becomes the name.</p>
                            </li>
                            <li>
                                <strong>aria-label</strong>
                                <p>A string value that directly sets the accessible name.</p>
                            </li>
                            <li>
                                <strong>Native HTML Mechanisms</strong>
                                <p>
                                    Includes: <code>&lt;label&gt;</code> for form controls,
                                    <code>alt</code> for images, text content for buttons/links.
                                </p>
                            </li>
                            <li>
                                <strong>title attribute</strong>
                                <p>Last resort; generally avoid relying on this for accessible names.</p>
                            </li>
                            <li>
                                <strong>placeholder attribute</strong>
                                <p>Not recommended as a labeling mechanism (disappears when typing).</p>
                            </li>
                        </ol>

                        <div className="warning-box" role="alert">
                            <h3>⚠️ Important Warning</h3>
                            <p>
                                <code>aria-label</code> and <code>aria-labelledby</code> override other naming
                                mechanisms. Use them intentionally, not as a quick fix.
                            </p>
                        </div>
                    </section>
                )}

                {activeTab === 2 && (
                    <section>
                        <h2>Labeling Methods Comparison</h2>

                        <div className="comparison-grid">
                            <article className="method-card">
                                <h3>aria-label</h3>
                                <p><strong>Use when:</strong> No visible text label exists</p>
                                <pre><code>{`<button aria-label="Close dialog">
  <span aria-hidden="true">×</span>
</button>`}</code></pre>
                                <ul className="pros-cons">
                                    <li className="pro">✓ Simple to implement</li>
                                    <li className="con">✗ Not translated automatically</li>
                                    <li className="con">✗ Not visible to sighted users</li>
                                </ul>
                            </article>

                            <article className="method-card">
                                <h3>aria-labelledby</h3>
                                <p><strong>Use when:</strong> Visible text exists that can serve as a label</p>
                                <pre><code>{`<h2 id="dialog-title">Settings</h2>
<div role="dialog" 
     aria-labelledby="dialog-title">
  ...
</div>`}</code></pre>
                                <ul className="pros-cons">
                                    <li className="pro">✓ References visible text</li>
                                    <li className="pro">✓ Can concatenate multiple IDs</li>
                                    <li className="con">✗ Requires ID management</li>
                                </ul>
                            </article>

                            <article className="method-card">
                                <h3>aria-describedby</h3>
                                <p><strong>Use when:</strong> Additional context is helpful</p>
                                <pre><code>{`<label for="pwd">Password</label>
<input type="password" id="pwd"
  aria-describedby="pwd-help">
<p id="pwd-help">
  Must be at least 8 characters
</p>`}</code></pre>
                                <ul className="pros-cons">
                                    <li className="pro">✓ Provides extra guidance</li>
                                    <li className="pro">✓ Reduces form errors</li>
                                    <li className="con">✗ Read after name (may be missed)</li>
                                </ul>
                            </article>

                            <article className="method-card">
                                <h3>Native &lt;label&gt;</h3>
                                <p><strong>Use when:</strong> Labeling form controls</p>
                                <pre><code>{`<label for="email">
  Email Address
</label>
<input type="email" id="email">`}</code></pre>
                                <ul className="pros-cons">
                                    <li className="pro">✓ Expands click target</li>
                                    <li className="pro">✓ Best browser support</li>
                                    <li className="pro">✓ No ARIA needed</li>
                                </ul>
                            </article>
                        </div>
                    </section>
                )}

                {activeTab === 3 && (
                    <section>
                        <h2>Live Examples</h2>

                        <h3>Example 1: Button with Icon Only</h3>
                        <div className="example-container">
                            <div className="example-demo">
                                <button
                                    aria-label="Search"
                                    className="icon-button"
                                    type="button"
                                >
                                    <span aria-hidden="true">🔍</span>
                                </button>
                                <p>Accessible name: "Search"</p>
                            </div>
                            <pre className="example-code"><code>{`<button aria-label="Search">
  <span aria-hidden="true">🔍</span>
</button>`}</code></pre>
                        </div>

                        <h3>Example 2: Input with Visible Label</h3>
                        <div className="example-container">
                            <div className="example-demo">
                                <label htmlFor="demo-email">Email Address</label>
                                <input
                                    type="email"
                                    id="demo-email"
                                    aria-describedby="email-hint"
                                />
                                <p id="email-hint" className="hint">We'll never share your email.</p>
                            </div>
                            <pre className="example-code"><code>{`<label for="email">Email Address</label>
<input type="email" id="email" 
  aria-describedby="email-hint">
<p id="email-hint">
  We'll never share your email.
</p>`}</code></pre>
                        </div>

                        <h3>Example 3: Region with aria-labelledby</h3>
                        <div className="example-container">
                            <div className="example-demo">
                                <section aria-labelledby="news-heading">
                                    <h4 id="news-heading">Latest News</h4>
                                    <p>This region is named by its heading.</p>
                                </section>
                            </div>
                            <pre className="example-code"><code>{`<section aria-labelledby="news-heading">
  <h2 id="news-heading">Latest News</h2>
  <p>This region is named by its heading.</p>
</section>`}</code></pre>
                        </div>
                    </section>
                )}
            </div>

            {/* Quiz Section */}
            <section className="quiz-section" aria-labelledby="quiz-heading">
                <h2 id="quiz-heading">Knowledge Check</h2>

                <form onSubmit={(e) => { e.preventDefault(); setShowResults(true); }}>
                    {quizQuestions.map((q, qIndex) => (
                        <fieldset key={q.id} className="quiz-question">
                            <legend>{q.question}</legend>
                            <div className="quiz-options">
                                {q.options.map((option, oIndex) => (
                                    <label
                                        key={oIndex}
                                        className={`quiz-option ${
                                            showResults
                                                ? oIndex === q.correct
                                                    ? 'correct'
                                                    : quizAnswers[q.id] === oIndex
                                                        ? 'incorrect'
                                                        : ''
                                                : ''
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name={`question-${q.id}`}
                                            value={oIndex}
                                            checked={quizAnswers[q.id] === oIndex}
                                            onChange={() => handleQuizAnswer(q.id, oIndex)}
                                            disabled={showResults}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    ))}

                    <div className="quiz-actions">
                        {!showResults ? (
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
                                        setShowResults(false);
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
                <Link to="/domain-one/d" className="nav-link prev">
                    ← Back to Using ARIA Overview
                </Link>
                <Link to="/domain-one/d/authoring-practices" className="nav-link next">
                    Next: ARIA Authoring Practice Guide →
                </Link>
            </nav>
        </div>
    );
}

export default UnderstandingAccessibleNamesAndDescriptions;