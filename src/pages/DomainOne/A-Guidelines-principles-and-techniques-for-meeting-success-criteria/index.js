import React from "react";
import "../../../index.css"
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import MatchingExercise from "../../../components/MatchingExercise";

function GuidelinePrinciples() {
    const flashcards = [
        {
            front: "WCAG",
            back: "Web Content Accessibility Guidelines - Addresses web content."
        },
        {
            front: "UAAG",
            back: "User Agent Accessibility Guidelines - Addresses software like browsers and media players."
        },
        {
            front: "ATAG",
            back: "Authoring Tools Accessibility Guidelines - Addresses software used to create web content."
        },
        {
            front: "Normative Documents",
            back: "Define accessibility practices required for conformance and its verification. Minimum requirements."
        },
        {
            front: "Non-normative Documents",
            back: "Provide guidance and techniques for interpreting and conforming, but are not required for conformance."
        }
    ];

    const matchingPairs = [
        { term: "WCAG", definition: "Addresses web content" },
        { term: "UAAG", definition: "Addresses software like browsers and media players" },
        { term: "ATAG", definition: "Addresses software and services used to create web content" },
        { term: "WAI-ARIA", definition: "Technical specification for accessible rich internet applications" }
    ];

    const matchingCorrect = {
        "WCAG": "Addresses web content",
        "UAAG": "Addresses software like browsers and media players",
        "ATAG": "Addresses software and services used to create web content",
        "WAI-ARIA": "Technical specification for accessible rich internet applications"
    };

    const quizQuestions = [
        {
            id: 1,
            question: "Which W3C guideline addresses the software used to create web content?",
            options: ["WCAG", "UAAG", "ATAG", "WAI-ARIA"],
            correct: 2
        },
        {
            id: 2,
            question: "True or False: Non-normative documents are required for conformance.",
            options: ["True", "False"],
            correct: 1
        },
        {
            id: 3,
            question: "Which technical specification addresses accessibility directly for rich internet applications?",
            options: ["HTML5", "CSS3", "WAI-ARIA 1.2", "UAAG 2.0"],
            correct: 2
        }
    ];

    return (
        <div className="container">
            <PageHeader 
                title="The W3C Guidelines and Specifications"
                lede="Accessibility depends on several components working together, such as web content, browsers, assistive technologies, and authoring tools."
            />

            <section aria-labelledby="intro-heading">
                <p id="intro-heading">
                    The World Wide Web Consortium (W3C), an internationally recognised web standards body, identifies its approved technical standards as
                    “W3C Recommendations” related to these components.
                </p>
            </section>

            <section aria-labelledby="wai-guidelines-heading">
                <h2 id="wai-guidelines-heading">W3C WAI Guidelines</h2>
                <p>W3C WAI Guidelines associated with accessibility include:</p>
                <ul>
                    <li><strong>Web Content Accessibility Guidelines (WCAG):</strong> Addresses web content.</li>
                    <li><strong>User Agent Accessibility Guidelines (UAAG):</strong> Addresses software that people use to access the web, for example, browsers and media players.</li>
                    <li><strong>Authoring Tools Accessibility Guidelines (ATAG):</strong> Addresses software and services that people use to create web content.</li>
                </ul>
            </section>

            <section aria-labelledby="tech-specs-heading">
                <h2 id="tech-specs-heading">Technical Specifications</h2>
                <p>
                    The accessibility guidelines are based on technical specifications, such as HTML and CSS, 
                    whereas the technical specification <strong>Accessible Rich Internet Applications (WAI-ARIA) 1.2</strong> addresses accessibility directly.
                </p>
            </section>

            <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
                <Callout 
                    title="Normative Documents" 
                    text="Define accessibility practices required for conformance and its verification. They identify the minimum to make a website or software accessible for users with disabilities."
                />
                <Callout 
                    title="Non-normative Documents" 
                    text="Provide guidance and techniques for interpreting and conforming with the normative requirements, but they are not required for conformance. They adapt to changing technologies."
                />
            </div>

            <section aria-labelledby="matching-heading" style={{ margin: '3rem 0' }}>
                <MatchingExercise 
                    title="Match Guidelines to Scope"
                    intro="Test your knowledge by matching each W3C guideline or specification to its primary scope."
                    pairs={matchingPairs}
                    correctMatches={matchingCorrect}
                />
            </section>

            <section aria-labelledby="flashcards-heading" style={{ margin: '3rem 0' }}>
                <h2 id="flashcards-heading">Key Terms Flashcards</h2>
                <FlashcardSet cards={flashcards} />
            </section>

            <section aria-labelledby="quiz-section-heading" style={{ margin: '3rem 0' }}>
                <MultipleChoiceQuiz 
                    title="Final Knowledge Check" 
                    questions={quizQuestions}
                />
            </section>
        </div>
    );
}

export default GuidelinePrinciples;