
import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import ExamTakeaway from "../../../components/ExamTakeaway";
import ProgressiveEnhancementDiagram from "../../../components/ProgressiveEnhancementDiagram";

function SupportForJavaScriptInAccessibilityAPIsAssistiveTechnologies() {
    const flashcards = [
        {
            front: "Can modern screen readers process JavaScript?",
            back: "Yes, as long as the JavaScript is coded with accessibility in mind."
        },
        {
            front: "What approach is recommended for developing web content?",
            back: "Progressive enhancement, ensuring essential content is available even if JavaScript is unavailable."
        },
        {
            front: "Why might JavaScript be unavailable for some users?",
            back: "Old browsers, restrictive settings, bandwidth limitations, or internal company policies."
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "Is JavaScript inherently inaccessible to assistive technologies?",
            options: [
                "Yes, it creates barriers that cannot be overcome.",
                "No, modern ATs can process it if it's coded correctly.",
                "Only on mobile devices.",
                "Only when using ARIA."
            ],
            correct: 1
        },
        {
            id: 2,
            question: "The 'progressive enhancement' approach means:",
            options: [
                "Adding more JavaScript features over time.",
                "Ensuring the site only works in the latest browsers.",
                "Essential content and functionality are available even when JavaScript is unavailable.",
                "Always requiring JavaScript for the best user experience."
            ],
            correct: 2
        }
    ];

    // Styles moved from CSS to component for better encapsulation of page-specific styles
    const styles = {
        section: {
            marginBottom: '3rem'
        },
        heading: {
            borderBottom: '2px solid var(--neutral-200)',
            paddingBottom: '0.5rem',
            marginTop: '2rem',
            marginBottom: '1.5rem'
        },
        paragraph: {
            lineHeight: '1.6',
            marginTop: '1rem'
        }
    };

    return (
        <div className="container js-support-page">
            <PageHeader 
                title="Support for JavaScript in Accessibility APIs and Assistive Technologies" 
                subtitle="Understanding how JavaScript interacts with AT and the importance of progressive enhancement."
            />
            
            <section style={styles.section} aria-labelledby="overview-heading">
                <h2 id="overview-heading" style={styles.heading}>Overview</h2>
                <Callout 
                    title="Key Concept"
                    text="JavaScript can be processed by modern screen readers and other assistive technologies as long as JavaScript is coded with accessibility in mind. There are no inherent barriers in the technologies that would make JavaScript inaccessible."
                />
                
                <p style={styles.paragraph}>
                    However, it is generally recommended to develop web content with a <strong>progressive enhancement</strong> approach in mind. This means that the essential content and functionality are available even when accessibility-supported technologies like JavaScript are unavailable due to old browsers, restrictive settings, bandwidth limitations, or internal company policies.
                </p>

                <ProgressiveEnhancementDiagram />
            </section>

            <section style={styles.section} aria-labelledby="flashcards-heading">
                <h2 id="flashcards-heading" style={styles.heading}>Flashcards: Key Concepts</h2>
                <FlashcardSet cards={flashcards} />
            </section>

            <section style={styles.section} aria-labelledby="quiz-heading">
                <MultipleChoiceQuiz 
                    questions={quizQuestions} 
                    title="Knowledge Check"
                />
            </section>

            <ExamTakeaway 
                title="Exam Tip: JavaScript Accessibility"
                text="On the WAS exam, remember that JavaScript is NOT an inherent barrier. The focus should be on *how* it's implemented (using <code>ARIA</code>, managing focus, etc.) and ensuring a fallback through progressive enhancement."
            />
        </div>
    );
}

export default SupportForJavaScriptInAccessibilityAPIsAssistiveTechnologies;