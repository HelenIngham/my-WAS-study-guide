import React from "react";
import "../../../index.css";
import PageHeader from "../../../components/PageHeader";
import Card from "../../../components/Card";
import CardList from "../../../components/CardList";
import Grid from "../../../components/Grid";
import Callout from "../../../components/Callout";
import ExamTakeaway from "../../../components/ExamTakeaway";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";

function AccessibilitySupportedTechnologies() {
    const studyTasks = [
        "Study how assistive technologies interact with user agents (browsers, apps).",
        "Understand differences in AT behavior across platforms and devices.",
        "Learn how touch interactions change with screen readers (e.g., gestures on mobile with VoiceOver).",
        "Understand the role of ARIA in enhancing AT support for dynamic content."
    ];

    const flashcards = [
        {
            front: "What is Conformance Requirement 5.2.4?",
            back: "Only accessibility-supported technologies can be used to meet WCAG success criteria. Non-supported tech must have supported alternatives."
        },
        {
            front: "What does 'accessibility-supported' mean?",
            back: "It means the technology works with both user agents (browsers) and assistive technologies (AT)."
        },
        {
            front: "Why should you prefer native HTML over ARIA?",
            back: "Native elements have built-in semantics and functions that are more consistently supported by AT than custom ARIA widgets."
        },
        {
            front: "What are polyfills in the context of accessibility?",
            back: "Workarounds to provide functionality where screen reader support is missing. Use with caution due to security and shifting AT behavior."
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "Which of the following is true regarding screen reader support for newer features?",
            options: [
                "All modern screen readers support all features perfectly.",
                "Support can be incomplete, inconsistent, or buggy.",
                "ARIA widgets are always more reliable than native HTML.",
                "Screen reader behavior never changes once a feature is released."
            ],
            correct: 1
        },
        {
            id: 2,
            question: "According to WCAG, if you use a technology that is NOT accessibility-supported:",
            options: [
                "It is a violation that cannot be fixed.",
                "You must remove the functionality entirely.",
                "The information or functionality must also be available in a way that IS accessibility-supported.",
                "You only need to provide a text description of why it's not supported."
            ],
            correct: 2
        },
        {
            id: 3,
            question: "Why might new technologies not be immediately accessibility supported?",
            options: [
                "They are intentionally designed to be inaccessible.",
                "Assistive technologies and browsers may need to be redesigned or modified to work with them.",
                "WCAG forbids the use of any technology less than 2 years old.",
                "New technologies are only for mobile devices."
            ],
            correct: 1
        }
    ];

    return (
        <div className="container">
            <PageHeader 
                title="Domain One E: Accessibility-supported technologies"
                lede="Understanding the interaction between assistive technologies, user agents, and the design decisions involved in choosing accessible technologies."
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
                    Most modern screen readers have comparable support for the most important accessibility techniques and features. 
                    Still, screen reader behavior and support for newer features—including some types of custom ARIA widgets—can 
                    sometimes be incomplete, inconsistent, or buggy.
                </p>
                
                <Callout 
                    title="Best Practice" 
                    text="It is generally preferable to use a native HTML element or attribute with the appropriate semantics and functions already built in instead of repurposing an element and adding an ARIA role, state, or property."
                />
            </section>

            <section className="content-section" aria-labelledby="conformance-heading">
                <h2 id="conformance-heading">WCAG Conformance & Support</h2>
                <p>
                    WCAG requires only to use accessibility supported technologies to meet the success criteria. Any information 
                    or functionality that is provided in a way that is not accessibility-supported must also be available in 
                    a way that is accessibility-supported (Conformance Requirement 5.2.4).
                </p>
                <p>
                    Using a technology in a way that is accessibility-supported means that the technologies will work with 
                    user agents and assistive technologies. When new technologies are introduced, they may not immediately 
                    be accessibility supported since the user agents and assistive technologies may need to be redesigned 
                    or modified to be able to actually work with these new technologies.
                </p>
            </section>

            <section className="content-section" aria-labelledby="workarounds-heading">
                <h2 id="workarounds-heading">Workarounds and Polyfills</h2>
                <p>
                    In some cases, it can be appropriate to implement workarounds, compromises, or polyfills, to deal with 
                    lack of screen reader support or bugs but recognise that screen reader behaviors can change at any time. 
                    Polyfills should be used with caution as they have been the source of security concerns.
                </p>
            </section>

            <section className="interactive-section" aria-labelledby="flashcards-heading">
                <h2 id="flashcards-heading">Flashcards: Key Concepts</h2>
                <FlashcardSet cards={flashcards} />
            </section>

            <section className="interactive-section" aria-labelledby="quiz-heading-section">
                <MultipleChoiceQuiz 
                    title="Knowledge Check" 
                    questions={quizQuestions} 
                />
            </section>

            <ExamTakeaway title="Key Exam Takeaway">
                <CardList>
                    <li><strong>Conformance 5.2.4:</strong> Always provide a supported alternative for non-supported technologies.</li>
                    <li><strong>Native over ARIA:</strong> Prioritize built-in HTML semantics for better stability.</li>
                    <li><strong>Support Lag:</strong> New technologies often require updates to AT/Browsers before being considered "supported".</li>
                    <li><strong>Dynamic Nature:</strong> Screen reader behaviors are not static; they change and evolve, making testing critical.</li>
                </CardList>
            </ExamTakeaway>
        </div>
    );
}

export default AccessibilitySupportedTechnologies;