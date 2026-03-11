import React, { useMemo } from "react";
import "../../../index.css";
import PageHeader from "../../../components/PageHeader";
import Tabs from "../../../components/Tabs";
import Alert from "../../../components/Alert";
import PriorityList from "../../../components/PriorityList";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";

function BasicKnowledgeOfProgramming() {
    const tabsData = useMemo(() => [
        {
            id: 'overview',
            label: 'Overview',
            content: (
                <section>
                    <h2>Overview</h2>
                    <p>
                        The WAS exam does not cover the details of JavaScript programming syntax. 
                        A person should be able to pass the exam without being a professional JavaScript programmer. 
                        However, web designers and developers must know how <strong>asynchronous JavaScript</strong> and 
                        <strong>interactive content</strong> affect accessibility.
                    </p>
                    <p>
                        They must be able to identify the concepts, principles, and strategies of accessible JavaScript interaction design.
                    </p>
                    <Alert type="info" title="Key Responsibility">
                        The impact of specific coding practices on web solutions is more important than the ability to write specific code for this domain.
                    </Alert>
                </section>
            )
        },
        {
            id: 'progressive-enhancement',
            label: 'Progressive Enhancement',
            content: (
                <section>
                    <h2>Progressive Enhancement & Accessible JS</h2>
                    <h3>What is Progressive Enhancement?</h3>
                    <p>
                        Progressive enhancement is a design strategy that starts with a core of basic content and functionality 
                        that is available to all users and browsers, and then adds more advanced features for those with 
                        modern browsers or faster connections.
                    </p>
                    <ul>
                        <li><strong>Core Experience:</strong> Semantic HTML provides the basic content and structure.</li>
                        <li><strong>Enhanced Experience:</strong> CSS and JavaScript add styling and interactivity.</li>
                    </ul>
                    <h3>JavaScript's Impact on Accessibility</h3>
                    <p>
                        JavaScript can both improve and damage accessibility:
                    </p>
                    <div className="grid-2-col">
                        <Alert type="success" title="How JS Improves Accessibility">
                            <ul>
                                <li>Dynamic updates without page reloads.</li>
                                <li>Custom widgets with improved interaction.</li>
                                <li>Managing focus for better navigation.</li>
                                <li>Real-time validation feedback.</li>
                            </ul>
                        </Alert>
                        <Alert type="error" title="How JS Damages Accessibility">
                            <ul>
                                <li>Breaking standard browser behavior (e.g., "Back" button).</li>
                                <li>Creating content that isn't keyboard accessible.</li>
                                <li>Failing to notify screen readers of changes.</li>
                                <li>Causing "traps" where focus can't escape.</li>
                            </ul>
                        </Alert>
                    </div>
                </section>
            )
        },
        {
            id: 'event-handlers',
            label: 'Event Handlers',
            content: (
                <section>
                    <h2>Device-Independent Event Handlers</h2>
                    <p>
                        Device-independent event handlers are those that can be triggered by multiple input methods, 
                        such as mouse, keyboard, touch, or voice.
                    </p>
                    <PriorityList ariaLabel="Impact of Event Handlers">
                        <li>
                            <strong>Device Independence:</strong> Use events like <code>onclick</code> (which is triggered 
                            by keyboard Enter/Space on focusable elements) instead of <code>onmousedown</code> or <code>onmouseover</code> alone.
                        </li>
                        <li>
                            <strong>Semantic Elements:</strong> Applying <code>onClick()</code> to a native <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> is superior because:
                            <ul>
                                <li>They are natively keyboard accessible.</li>
                                <li>They have built-in roles and states (e.g., "button").</li>
                                <li>They appear in the browser's tab order automatically.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Non-Semantic Elements:</strong> Applying <code>onClick()</code> to a <code>&lt;div&gt;</code> requires extra work:
                            <ul>
                                <li>Adding <code>tabindex="0"</code> for focus.</li>
                                <li>Adding <code>role="button"</code>.</li>
                                <li>Adding keyboard event listeners (Enter/Space).</li>
                            </ul>
                        </li>
                    </PriorityList>
                </section>
            )
        },
        {
            id: 'focus-management',
            label: 'Focus & Dynamic Content',
            content: (
                <section>
                    <h2>Focus Management & Dynamic Updates</h2>
                    <h3>User Expectations</h3>
                    <p>
                        Users expect focus to move logically. For example, when a modal opens, focus should move 
                        into the modal. When it closes, focus should return to the triggering element.
                    </p>
                    <h3>Sending Focus</h3>
                    <p>
                        Use JavaScript <code>.focus()</code> to send focus when:
                    </p>
                    <ul>
                        <li>New content is loaded (e.g., single-page application navigation).</li>
                        <li>An error message appears (to the error or a summary).</li>
                        <li>A dialog or modal is opened.</li>
                    </ul>
                    <h3>Notifying Screen Readers</h3>
                    <p>
                        When content is added dynamically without a page reload, screen readers must be notified. 
                        Common methods include:
                    </p>
                    <ul>
                        <li><strong>ARIA Live Regions:</strong> Using <code>aria-live="polite"</code> or <code>"assertive"</code>.</li>
                        <li><strong>Focus Management:</strong> Moving focus directly to the new content.</li>
                        <li><strong>Status Messages:</strong> Using <code>role="status"</code> or <code>role="alert"</code>.</li>
                    </ul>
                </section>
            )
        },
        {
            id: 'activities',
            label: 'Practice Activities',
            content: (
                <section>
                    <h2>Learner Activities</h2>
                    <p>Practice these activities to reinforce your understanding of accessible JavaScript:</p>
                    <PriorityList ariaLabel="Practice Activities">
                        <li>
                            <strong>Semantic vs. Non-semantic:</strong> Create a button using a <code>&lt;button&gt;</code> tag and another using a <code>&lt;div&gt;</code>. Try to make the <code>&lt;div&gt;</code> behave exactly like the button using only keyboard navigation and a screen reader.
                        </li>
                        <li>
                            <strong>Focus Audit:</strong> Open a complex website and navigate using only the Tab key. 
                            Identify areas where focus management is missing (e.g., modals that don't trap focus 
                            or "lost" focus after an action).
                        </li>
                        <li>
                            <strong>Live Region Test:</strong> Create a simple "Toast" notification system 
                            (a brief, non-modal status message that appears and then disappears) and test it 
                            with a screen reader using different <code>aria-live</code> settings. 
                            Refer to the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/alert/" target="_blank" rel="noopener noreferrer">WAI-ARIA Alert Pattern</a> for implementation guidance.
                        </li>
                        <li>
                            <strong>Device Independence:</strong> Review a project and replace any <code>onmouseover</code> events with <code>onfocus</code>/<code>onblur</code> or CSS equivalents.
                        </li>
                    </PriorityList>
                </section>
            )
        }
    ], []);

    const quizQuestions = [
        {
            id: 1,
            question: "What is the primary goal of Progressive Enhancement?",
            options: [
                "To ensure the website works in the latest version of Chrome",
                "To provide a core functional experience to all users, regardless of technology",
                "To force users to upgrade their browsers",
                "To replace CSS with JavaScript for layout"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "Why is a native <button> preferred over a <div> for a click action?",
            options: [
                "It is smaller in file size",
                "It automatically includes keyboard accessibility and semantic roles",
                "It doesn't require any CSS styling",
                "It can only be clicked with a mouse"
            ],
            correct: 1
        },
        {
            id: 3,
            question: "Which ARIA attribute is best used to notify a screen reader that a status message has appeared without moving focus?",
            options: [
                "aria-hidden",
                "aria-labelledby",
                "aria-live",
                "aria-expanded"
            ],
            correct: 2
        }
    ];

    return (
        <div className="container">
            <PageHeader title="B Basic Knowledge Of Programming" />
            <Tabs tabs={tabsData} ariaLabel="Basic Knowledge of Programming sections" />
            
            <hr style={{ margin: '40px 0' }} />
            
            <MultipleChoiceQuiz questions={quizQuestions} title="Basic Knowledge of Programming Quiz" />
        </div>
    );
}

export default BasicKnowledgeOfProgramming;