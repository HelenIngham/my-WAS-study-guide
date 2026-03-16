import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import ExamTakeaway from "../../../components/ExamTakeaway";
import Example from "../../../components/Example";

/**
 * Interactive Demo for Simplifying Events
 * Shows the problematic "hover for menu, click for link" pattern
 * versus a simplified accessible version.
 */
function SimplifyEventsDemo() {
    const [isHoveredProblematic, setIsHoveredProblematic] = useState(false);
    const [isExpandedSimplified, setIsExpandedSimplified] = useState(false);
    const [message, setMessage] = useState("");

    const handleMenuClick = (menuName) => {
        setMessage(`You clicked the link: ${menuName}. This would navigate away.`);
    };

    const handleSubmenuClick = (subName) => {
        setMessage(`You selected a sub-item: ${subName}`);
    };

    const handleExpandToggle = (isOpen) => {
        setMessage(isOpen ? "Opened the submenu" : "Closed the submenu");
        setIsExpandedSimplified(isOpen);
    };

    return (
        <div className="demo-container">
            <div className="demo-grid">
                <div className="demo-column">
                    <h3 id="problematic" className="demo-subheading">Problematic: Multi-event</h3>
                    <p className="demo-description">Hover to see submenu, Click to navigate. (Difficult for keyboard/touch)</p>
                    <nav aria-label="Problematic menu example">
                        <ul className="demo-menu">
                            <li 
                                className="demo-menu-item"
                                onMouseEnter={() => setIsHoveredProblematic(true)}
                                onMouseLeave={() => setIsHoveredProblematic(false)}
                            >
                                <span className="demo-badge">Test Hover/Click</span>
                                <a 
                                    href="#problematic" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleMenuClick("Products");
                                    }}
                                    className="demo-link"
                                >
                                    Products
                                </a>
                                {isHoveredProblematic && (
                                    <ul className="demo-submenu">
                                        <li><button onClick={() => handleSubmenuClick("Software")}>Software</button></li>
                                        <li><button onClick={() => handleSubmenuClick("Hardware")}>Hardware</button></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="demo-column">
                    <h3 className="demo-subheading">Simplified: Single-event</h3>
                    <p className="demo-description">Each element has one clear purpose. (Accessible to all)</p>
                    <nav aria-label="Simplified menu example">
                        <ul className="demo-menu">
                            <li className="demo-menu-item">
                                <span className="demo-badge">Test Click only</span>
                                <button 
                                    aria-expanded={isExpandedSimplified}
                                    onClick={() => handleExpandToggle(!isExpandedSimplified)}
                                    className="demo-button"
                                >
                                    Products {isExpandedSimplified ? '▴' : '▾'}
                                </button>
                                {isExpandedSimplified && (
                                    <ul className="demo-submenu">
                                        <li><a id="software" href="#software" onClick={(e) => { e.preventDefault(); handleMenuClick("Software"); }}>Software</a></li>
                                        <li><a id="hardware" href="#hardware" onClick={(e) => { e.preventDefault(); handleMenuClick("Hardware"); }}>Hardware</a></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {message && (
                <div className="demo-status" aria-live="polite">
                    <strong>Action Log:</strong> {message}
                </div>
            )}
        </div>
    );
}

function SimplifyEvents() {
    const flashcards = [
        {
            front: "Why should interactive elements have only one type of event associated with them?",
            back: "Multi-event elements are more difficult to make accessible and harder for users to understand, especially for keyboard and screen reader users."
        },
        {
            front: "What is an example of a problematic multi-event menu item?",
            back: "A menu item that expands on hover but activates a link on click. This creates barriers for touch and keyboard users."
        },
        {
            front: "How should a menu item be designed to simplify events?",
            back: "It should act either as a link OR as a button that expands a submenu, but not both at once."
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "Which user groups are most likely to struggle with a menu that uses hover to expand and click to navigate?",
            options: [
                "Keyboard users",
                "Touch screen users",
                "Mobile screen reader users",
                "All of the above"
            ],
            correct: 3
        },
        {
            id: 2,
            question: "True or False: Buttons should generally trigger multiple different actions depending on the input device used.",
            options: [
                "True",
                "False"
            ],
            correct: 1
        }
    ];

    return (
        <div className="container">
            <PageHeader 
                title="4 Simplify Events" 
                lede="Interactive elements should have clear, single-purpose event associations to ensure accessibility across all devices."
            />

            <section className="section">
                <p>
                    Buttons and other interactive elements should generally have only one type of event associated with them. 
                    Multi-event elements are more difficult to make accessible and more difficult for users to understand.
                </p>

                <Callout 
                    title="The Multi-Event Problem"
                    text="Coding a menu item to expand a menu on hover while also acting as a link on click is problematic. It creates 'split-functionality' that often excludes certain input methods."
                />

                <Example label="Common Anti-pattern:">
                    <p>A top-level navigation link that takes the user to a new page when clicked, but reveals a dropdown menu when hovered.</p>
                </Example>

                <h2>Interactive Comparison</h2>
                <SimplifyEventsDemo />
            </section>

            <section className="section">
                <h2>Key Takeaways</h2>
                <ul>
                    <li><strong>Single Purpose:</strong> Each element should do one thing (either navigate or expand, not both).</li>
                    <li><strong>Predictability:</strong> Users expect consistent behavior regardless of whether they use a mouse, keyboard, or touch.</li>
                    <li><strong>Mobile/Touch Friendly:</strong> Hover states don't exist on touch screens, making hover-triggered submenus inaccessible or frustrating.</li>
                </ul>
            </section>

            <section className="section">
                <h2>Flashcards</h2>
                <FlashcardSet cards={flashcards} />
            </section>

            <section className="section">
                <MultipleChoiceQuiz questions={quizQuestions} />
            </section>

            <ExamTakeaway title="Simplify Events for the Exam">
                <ul>
                    <li>Identify that multi-event elements (like hover-to-expand + click-to-link) are accessibility barriers.</li>
                    <li>Recognize that these patterns specifically fail keyboard, touch, and gesture-based screen reader users.</li>
                    <li>Recommend separating functionality into distinct elements or using a single consistent trigger (like click/Enter).</li>
                </ul>
            </ExamTakeaway>
        </div>
    );
}

export default SimplifyEvents;