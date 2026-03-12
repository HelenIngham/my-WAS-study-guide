import React, { useState } from "react";
import "./5DynamicContent.css";
import "../../../index.css";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import ExamTakeaway from "../../../components/ExamTakeaway";
import Example from "../../../components/Example";

/**
 * Interactive Demo for Dynamic Content
 * Demonstrates:
 * 1. Toggling CSS classes (Show/Hide)
 * 2. Changing ARIA attributes (aria-expanded)
 * 3. ARIA Live Regions (Announcing dynamic content)
 */
function DynamicContentDemo() {
    const [isVisible, setIsVisible] = useState(false);
    const [liveMessage, setLiveMessage] = useState("");
    const [count, setCount] = useState(0);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        setLiveMessage(isVisible ? "Content hidden" : "Content revealed");
    };

    const incrementCount = () => {
        const newCount = count + 1;
        setCount(newCount);
        setLiveMessage(`Counter updated to ${newCount}`);
    };

    return (
        <div className="dynamic-demo">
            <div className="demo-section">
                <h3>1. Toggling CSS & ARIA</h3>
                <p>Buttons can change state and communicate that state to screen readers.</p>
                <button 
                    className="demo-button"
                    onClick={toggleVisibility}
                    aria-expanded={isVisible}
                    aria-controls="dynamic-panel"
                >
                    {isVisible ? "Hide Extra Info" : "Show Extra Info"}
                </button>
                <div 
                    id="dynamic-panel"
                    className={`demo-panel ${isVisible ? 'is-visible' : 'is-hidden'}`}
                >
                    <p>This content was dynamically toggled using a CSS class and its state is reflected via <code>aria-expanded</code>.</p>
                </div>
            </div>

            <hr className="demo-divider" />

            <div className="demo-section">
                <h3>2. ARIA Live Regions</h3>
                <p>Live regions allow screen readers to announce updates without moving focus.</p>
                <button 
                    className="demo-button"
                    onClick={incrementCount}
                >
                    Add Item to Cart ({count})
                </button>
                
                <div 
                    className="live-region-status" 
                    role="status" 
                    aria-live="polite"
                >
                    {liveMessage && <span>Status update: {liveMessage}</span>}
                </div>
                <p className="demo-note">The text above is in an <code>aria-live="polite"</code> region.</p>
            </div>
        </div>
    );
}

function DynamicContent() {
    const flashcards = [
        {
            front: "How can JavaScript make content dynamic and accessible?",
            back: "By toggling CSS classes for visibility, updating ARIA attributes (like aria-expanded) to reflect state, and using live regions to announce changes."
        },
        {
            front: "What is the purpose of aria-expanded?",
            back: "It informs assistive technologies whether a collapsible element (like a menu or accordion) is currently open or closed."
        },
        {
            front: "When should you use an ARIA live region?",
            back: "When content updates dynamically on the page and needs to be announced to screen reader users without them having to move their focus."
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "Which ARIA attribute should be updated when a button toggles a hidden menu?",
            options: [
                "aria-hidden",
                "aria-expanded",
                "aria-pressed",
                "aria-label"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "True or False: Using JavaScript to add content to an element with aria-live='polite' will cause screen readers to announce the change.",
            options: [
                "True",
                "False"
            ],
            correct: 0
        },
        {
            id: 3,
            question: "What is the best way to hide content from ALL users while keeping it available to be shown later via JavaScript?",
            options: [
                "Setting opacity to 0",
                "Using display: none or visibility: hidden",
                "Moving it off-screen",
                "Setting aria-hidden='true'"
            ],
            correct: 1
        }
    ];

    return (
        <div className="container">
            <PageHeader 
                title="5 Dynamic Content" 
                lede="JavaScript enables developers to create interactive, responsive applications by modifying HTML and CSS in real-time."
            />

            <section className="section">
                <p>
                    JavaScript provides the functionality to add HTML and CSS to any page element. 
                    That means developers can create dynamic applications depending on user interactions.
                </p>

                <Callout 
                    title="Accessibility in Dynamic Apps"
                    text="When content changes dynamically, it's crucial to ensure those changes are communicated to all users, especially those using assistive technologies."
                />

                <Example label="Key Dynamic Techniques:">
                    <ul>
                        <li><strong>Toggling CSS Classes:</strong> Showing/hiding content or changing visual styles.</li>
                        <li><strong>Updating ARIA Attributes:</strong> Reflecting the current state (e.g., expanded, selected, checked).</li>
                        <li><strong>Live Regions:</strong> Announcing updates (e.g., status messages, search results) as they happen.</li>
                    </ul>
                </Example>
            </section>

            <section className="section">
                <h2>Interactive Demo: Dynamic Updates</h2>
                <DynamicContentDemo />
            </section>

            <section className="section">
                <h2>Flashcards</h2>
                <FlashcardSet cards={flashcards} />
            </section>

            <section className="section">
                <MultipleChoiceQuiz questions={quizQuestions} />
            </section>

            <ExamTakeaway title="Dynamic Content for the Exam">
                <ul>
                    <li>Understand that JavaScript can manipulate the DOM to change content and styles.</li>
                    <li>Recognize the importance of synchronizing visual state changes with ARIA attributes (e.g., <code>aria-expanded</code>).</li>
                    <li>Identify <code>aria-live</code> regions as the primary method for announcing non-focused content updates.</li>
                    <li>Ensure dynamic content remains keyboard accessible (e.g., focus management if a modal opens).</li>
                </ul>
            </ExamTakeaway>
        </div>
    );
}

export default DynamicContent;