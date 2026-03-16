import React from "react";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import FocusOrderDemo from "../../../components/FocusOrderDemo";
import FocusTrapDemo from "../../../components/FocusTrapDemo";
import RovingTabindexDemo from "../../../components/RovingTabindexDemo";
import KeyboardInteractionActivity from "../../../components/KeyboardInteractionActivity";

function KeyboardTesting() {
    const flashcards = [
        {
            front: "What does WCAG 2.1.1 Keyboard require?",
            back: "All functionality must be operable through a keyboard interface without requiring specific timings for individual keystrokes."
        },
        {
            front: "What is a keyboard trap?",
            back: "A state where focus enters a component but cannot be moved away using only the keyboard."
        },
        {
            front: "Name two common ways to bypass repeated content.",
            back: "Skip links (skip to main content) and landmarks (main, nav, header, footer)."
        },
        {
            front: "What should the focus order reflect?",
            back: "A logical, intuitive, and predictable sequence that follows the visual reading order."
        },
        {
            front: "What should happen to focus within complex widgets?",
            back: "Focus movement should follow expected patterns (e.g., roving tabindex in tabs, arrow keys within menus)."
        },
        {
            front: "How should focus be indicated?",
            back: "There must be a visible focus indicator with sufficient contrast and clear outline."
        },
        {
            front: "What must match between visual and programmatic labels?",
            back: "The visual label should match or be fully included in the accessible name exposed to assistive technologies."
        }
    ];

    return (
        <div className="container">
            <a href="#main-content" className="visually-hidden">Skip to main content</a>
            <h1>2 Keyboard Testing</h1>

            <section id="main-content" className="intro-section">
                <p>
                    Keyboard testing ensures that people who navigate without a mouse can use all functionality. Below are key requirements to verify during manual evaluation.
                </p>
                <Callout title="Key Requirements for Keyboard Accessibility" role="note">
                    <ul>
                        <li>All functionality is operable via keyboard (links, data input, buttons).</li>
                        <li>No keyboard traps: users can move focus in and out using the keyboard (often Esc to close modals).</li>
                        <li>There is a way to bypass repeated content (e.g., Skip Links or landmarks).</li>
                        <li>Focus order is logical, intuitive, and predictable.</li>
                        <li>Focus movement within components/widgets is as expected.</li>
                        <li>The focus indicator is visible.</li>
                        <li>The visual label matches the programmatic label (or is fully included in it).</li>
                    </ul>
                </Callout>
            </section>

            <section className="demos-section">
                <h2>Interactive Demos</h2>
                <h3>Focus Order</h3>
                <p>Toggle between logical and illogical orders, then use Tab to explore how order changes affect users.</p>
                <FocusOrderDemo />

                <h3>Focus Trap (Modal)</h3>
                <p>Open the dialog and try tabbing. Verify you can escape using Esc and that focus returns to the trigger.</p>
                <FocusTrapDemo />

                <h3>Roving Tabindex (Tabs)</h3>
                <p>Activate a tab and use Left/Right arrows to move between tabs. Tab should move out of the tablist.</p>
                <RovingTabindexDemo />
            </section>

            <section className="learning-activities">
                <h2>Learning Activities</h2>

                <h3>Flashcards: Keyboard Testing Essentials</h3>
                <FlashcardSet cards={flashcards} />

                <h3>New Activity: Keyboard Interaction Patterns</h3>
                <p>For each UI component, choose the correct keyboard interaction. Immediate feedback is provided.</p>
                <KeyboardInteractionActivity />
            </section>
        </div>
    );
}

export default KeyboardTesting;