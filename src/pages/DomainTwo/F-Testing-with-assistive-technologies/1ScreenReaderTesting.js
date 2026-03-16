import React from "react";
import LiveRegionDemo from "../../../components/LiveRegionDemo";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import Callout from "../../../components/Callout";
import ScreenReaderCompatibilityMatrix from "../../../components/ScreenReaderCompatibilityMatrix";

function ScreenReaderTesting() {
    const flashcards = [
        {
            front: "What is the primary focus of screen reader testing in conformance tests?",
            back: "It focuses on whether content is programmatically available, revealing its name, role, and value when focused, and allowing equivalent interaction."
        },
        {
            front: "How does screen reader testing differ from task-based usability tests?",
            back: "Screen reader testing in conformance checks particular content types for programmatic availability, while task-based usability tests aim to emulate the typical user experience with native users."
        },
        {
            front: "Which screen reader and browser combinations are recommended?",
            back: "JAWS with Chrome, NVDA with Firefox or Chrome, and VoiceOver with Safari."
        },
        {
            front: "What is an example of a 'state change' that needs screen reader notification?",
            back: "A toast message, a shopping cart subtotal updating, or a delivery fee being updated when a shipping address is entered."
        },
        {
            front: "Why shouldn't you use 'display: none' to hide content you want screen readers to announce?",
            back: "Because 'display: none' and 'visibility: hidden' hide content from BOTH visual users and screen reader users."
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "Which WCAG criteria are most relevant to announcing modifications out of focus?",
            options: [
                "1.1.1 Non-text Content",
                "4.1.3 Status Messages, 4.1.2 Name, Role, Value, and 3.2.2 On Input",
                "2.1.1 Keyboard",
                "2.4.4 Link Purpose"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "True or False: Automated testing tools can identify if alternative text for an image is meaningful.",
            options: ["True", "False"],
            correct: 1
        },
        {
            id: 3,
            question: "Why is human judgment necessary in accessibility testing?",
            options: [
                "Because automated tools can't determine if content is meaningful or contextually appropriate.",
                "Because automated tools can't handle dynamic page changes through user interaction.",
                "To verify if ARIA attributes are set correctly for the intended purpose.",
                "All of the above."
            ],
            correct: 3
        }
    ];

    return (
        <div className="container">
            <h1>1 Screen Reader Testing</h1>
            
            <section className="intro-section">
                <p>
                    For screen reader testing, be familiar with how people with disabilities use the screen readers. 
                    Often, screen reader tests are conducted in parallel or after WCAG conformance tests to verify issues.
                </p>
                <Callout 
                    title="Testing vs. Usability" 
                    text="Screen reader testing in the context of conformance tests does not strive to emulate the typical user experience. This would be the aim of task-based usability tests with native screen reader users. Instead, it focuses on particular types of content to check if they are programmatically available."
                />
            </section>

            <section className="goals-section">
                <h2>Goals of Screen Reader Testing</h2>
                <ul>
                    <li>To identify issues that are not readily apparent in automatic checks or code inspection.</li>
                    <li>To analyze ARIA constructs and components.</li>
                    <li>To verify findings of code analyses.</li>
                    <li>To assess the level of accessibility support across several environments (browser / screen reader combinations).</li>
                </ul>
            </section>

            <section className="challenges-section">
                <h2>Accessibility Challenges</h2>
                <p>
                    While native web content is well-supported, advanced user interface components (created with HTML, ARIA, and JavaScript) often run into accessibility challenges. 
                    They are frequently built incorrectly and not in line with recommended implementation patterns.
                </p>
                
                <h3>State Changes</h3>
                <p>
                    State changes are one accessibility subject that is not always obvious to non-native screen reader users. 
                    These are changes that occur in areas of a webpage or mobile app that do not currently have focus.
                </p>
                <LiveRegionDemo />
            </section>

            <section className="css-at-section">
                <h2>CSS and Assistive Technology</h2>
                <p>
                    CSS can also affect accessibility. For example, content that should be hidden visually and programmatically, like dropdown menus, might still be rendered by the screen reader if not handled correctly.
                </p>
                <Callout 
                    title="Visual vs. Programmatic Hiding"
                    text="Using 'display:none' or 'visibility:hidden' hides content from everyone, including screen reader users. To hide content only visually while keeping it available for screen readers, specialized CSS techniques (like 'sr-only' classes) must be used."
                />
            </section>

            <section className="combinations-section">
                <h2>Browsers and Screen Readers</h2>
                <p>
                    Assistive technologies must be tested with compatible browsers. Even if AT works with multiple browsers, some issues may appear in only one.
                </p>
                <ScreenReaderCompatibilityMatrix />
            </section>

            <section className="automation-limits-section">
                <h2>Limits of Automated Testing</h2>
                <p>
                    As pointed out in Domain Two D, automatic testing tools cannot find all accessibility issues. They analyze code but may not consider the page's context.
                </p>
                <div className="manual-testing-benefits">
                    <h3>Why Manual Testing is Required:</h3>
                    <ul>
                        <li><strong>Human Judgment:</strong> Automated tools can detect an 'alt' attribute is missing, but only a human can tell if existing 'alt' text is meaningful.</li>
                        <li><strong>Dynamic Content:</strong> Limits exist when the page changes dynamically through user interaction.</li>
                        <li><strong>Meaningful Content:</strong> Tools can check if an element is named or if ARIA attributes are valid, but not if the text content makes sense in context.</li>
                    </ul>
                </div>
            </section>

            <section className="learning-activities">
                <h2>Learning Activities</h2>
                
                <h3>Flashcards: Test Your Knowledge</h3>
                <FlashcardSet cards={flashcards} />

                <MultipleChoiceQuiz 
                    questions={quizQuestions} 
                    title="Screen Reader Testing Quiz" 
                />
            </section>
        </div>
    );
}

export default ScreenReaderTesting;