import React from "react";
import PageHeader from "../../../components/PageHeader";
import Card from "../../../components/Card";
import CardList from "../../../components/CardList";
import Grid from "../../../components/Grid";
import Callout from "../../../components/Callout";
import ExamTakeaway from "../../../components/ExamTakeaway";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";

function StandardControlsVsCustomControls() {
    const studyTasks = [
        "Become familiar with the keyboard interaction model for ARIA custom widgets, including general and widget-specific patterns.",
        "Understand that the tab key is generally used to reach a widget, while arrow keys navigate within it.",
        "Prioritize native HTML widgets over custom WAI-ARIA widgets for built-in accessibility and better support.",
        "Pay attention to the semantic structure of ARIA roles, including required parent/child roles and attributes.",
        "Remember that a custom role completely overrides an element's native role (e.g., <li role='button'>).",
        "Learn roles for widget types (menu, slider, etc.) and page structure (headings, regions, tables).",
        "Use properties to describe states (checked, expanded) and define live regions for dynamic updates.",
        "Use the 'application' role sparingly as it overrides many assistive technology navigation keystrokes."
    ];

    const flashcards = [
        {
            front: "Why should native HTML widgets be used instead of custom ARIA widgets whenever possible?",
            back: "Because of built-in accessibility features and more consistent support across user agents and assistive technologies."
        },
        {
            front: "What happens when a custom role is assigned to a native element (e.g., <li role='button'>)?",
            back: "The custom role completely overrides the native role. The element will be treated as a button, not a list item."
        },
        {
            front: "How does keyboard navigation typically work within complex ARIA widgets?",
            back: "Tab to the widget or active element, then use arrow keys to navigate within. Tab is generally NOT used for internal navigation."
        },
        {
            front: "What is a major risk of using the 'application' role?",
            back: "It overrides many AT navigation keystrokes (headings, landmarks, tables), making it harder for users to navigate semantically."
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "Which role should be used sparingly because it overrides standard screen reader navigation?",
            options: [
                "region",
                "application",
                "main",
                "complementary"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "In most custom ARIA widgets, which keys are recommended for navigating *within* the widget?",
            options: [
                "Tab and Shift+Tab",
                "Arrow keys",
                "Function keys (F1-F12)",
                "Space and Enter only"
            ],
            correct: 1
        },
        {
            id: 3,
            question: "True or False: If you add role='slider' to a <div>, it will still retain its native <div> semantics for screen readers.",
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
                title="Domain One F: Standard controls vs. custom controls"
                lede="Choosing between native HTML elements and custom ARIA-enhanced widgets to ensure the best possible accessibility and user experience."
            />

            <Grid columns={1}>
                <Card title="Study Tasks">
                    <CardList>
                        {studyTasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </CardList>
                </Card>
            </Grid>

            <section className="content-section" aria-labelledby="overview-heading">
                <h2 id="overview-heading">Overview</h2>
                <p>
                    When it comes to creating accessible web interfaces, the decision between using standard controls and custom controls is crucial. This choice can significantly impact the user experience, especially for people with disabilities.
                </p>
                <Callout 
                    title="The Golden Rule" 
                    text="Native HTML widgets should be used instead of custom WAI-ARIA widgets whenever possible. Implementing custom widgets requires much greater attention to detail and support can vary."
                />
            </section>

            <section className="content-section" aria-labelledby="aria-best-practices">
                <h2 id="aria-best-practices">WAI-ARIA Best Practices</h2>
                <p>
                    If you must build custom controls, they should be built using WAI-ARIA best practices to communicate their type, state, and structure to assistive technologies:
                </p>
                <ul>
                    <li><strong>Roles:</strong> Describe the type of widget (e.g., <code>menu</code>, <code>slider</code>, <code>progressbar</code>) or page structure (e.g., <code>heading</code>, <code>table</code>).</li>
                    <li><strong>Properties:</strong> Define characteristics like <code>aria-checked</code> for checkboxes or <code>aria-expanded</code> for menus.</li>
                    <li><strong>States:</strong> Communicate dynamic changes to the screen reader.</li>
                    <li><strong>Live Regions:</strong> Define areas likely to get updates (e.g., stock quotes) and set interruption policies (e.g., <code>aria-live="polite"</code> vs. <code>"assertive"</code>).</li>
                </ul>
            </section>

            <section className="interactive-section" aria-labelledby="flashcards-heading">
                <h2 id="flashcards-heading">Flashcards: Keyboard & Semantics</h2>
                <FlashcardSet cards={flashcards} />
            </section>

            <section className="interactive-section" aria-labelledby="quiz-heading">
                <MultipleChoiceQuiz 
                    title="Standard vs. Custom Quiz" 
                    questions={quizQuestions} 
                />
            </section>

            <ExamTakeaway title="Key Exam Takeaway">
                <CardList>
                    <li><strong>Native First:</strong> Always prefer <code>&lt;button&gt;</code> over <code>&lt;div role="button"&gt;</code>.</li>
                    <li><strong>Keyboard Pattern:</strong> Tab to widget, Arrows within widget.</li>
                    <li><strong>Role Overrides:</strong> ARIA roles replace native semantics completely.</li>
                    <li><strong>Application Role:</strong> Use very sparingly to avoid breaking AT navigation.</li>
                </CardList>
            </ExamTakeaway>
        </div>
    );
}

export default StandardControlsVsCustomControls;