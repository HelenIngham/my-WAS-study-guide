
import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import ExamTakeaway from "../../../components/ExamTakeaway";
import ComparisonTable from "../../../components/ComparisonTable";
import CodeBlock from "../../../components/CodeBlock";
import InteractiveComparison from "../../../components/InteractiveComparison";

function SemanticHTMLandCustomControls() {
    const flashcards = [
        {
            front: "What do native interactive HTML elements provide for accessibility?",
            back: "They provide built-in keyboard functionality (like Space/Enter support) by default."
        },
        {
            front: "What happens when you use onClick on a <div>?",
            back: <>Keyboard functionality is NOT automatically included, even if the element is focusable (using <code>tabindex</code>).</>
        },
        {
            front: "How do you make a non-semantic element accessible to keyboards?",
            back: <>You must add <code>keydown</code> or <code>keyup</code> event listeners to detect <code>Enter</code> or <code>Space</code> key presses.</>
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: <>Which of these elements includes keyboard support for <code>onClick()</code> by default?</>,
            options: [
                <><code>&lt;div&gt;</code></>,
                <><code>&lt;span&gt;</code></>,
                <><code>&lt;button&gt;</code></>,
                <><code>&lt;p&gt;</code></>
            ],
            correct: 2
        },
        {
            id: 2,
            question: <>If you use a <code>&lt;div&gt;</code> as a button, you must manually handle:</>,
            options: [
                "Mouse clicks only.",
                <>Tab index and <code>keydown</code> / <code>keyup</code> events for <code>Space</code> and <code>Enter</code>.</>,
                "Color contrast only.",
                "Text alignment."
            ],
            correct: 1
        }
    ];

    const tableRows = [
        {
            rowHeader: <>Semantic (<code>&lt;button&gt;</code>, <code>&lt;a&gt;</code>)</>,
            data: ["Built-in", "Built-in", "Built-in", "Yes"]
        },
        {
            rowHeader: <>Non-Semantic (<code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>)</>,
            data: ["None", <>Manual (<code>tabindex</code>)</>, <>Manual (JS events)</>, "No"]
        }
    ];

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

    const divCode = `<div 
  tabindex="0" 
  onclick="doSomething()" 
  onkeydown="if(event.key === 'Enter' || event.key === ' ') doSomething()">
  Click me
</div>`;

    return (
        <div className="container semantic-html-page">
            <PageHeader 
                title="Semantic HTML and Custom Controls" 
                subtitle="Leveraging native elements for automatic accessibility and handling custom controls properly."
            />
            
            <section style={styles.section} aria-labelledby="overview-heading">
                <h2 id="overview-heading" style={styles.heading}>Overview</h2>
                <p style={styles.paragraph}>
                    HTML defines sets of elements, attributes, and attribute values. These features have specific <strong>semantic meanings</strong> that user agents (like browsers and screen readers) intend to process in particular ways.
                </p>
                <Callout 
                    title="The Power of Native Elements"
                    text="Native interactive HTML elements provide built-in keyboard functionality. Many people rely on keyboard support, such as keyboard-only users or assistive technology users."
                />
            </section>

            <section style={styles.section} aria-labelledby="comparison-heading">
                <h2 id="comparison-heading" style={styles.heading}>Semantic vs. Custom Controls</h2>
                <p style={styles.paragraph}>
                    If you use an <code>onClick()</code> event on a semantic HTML element, such as a <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code>, it includes both mouse and keyboard functionality by default.
                </p>
                
                <ComparisonTable 
                    headers={["Element Type", "Role", "Focusable", "Keyboard Events", "Accessible by Default"]}
                    rows={tableRows}
                />

                <InteractiveComparison />
            </section>

            <section style={styles.section} aria-labelledby="custom-controls-heading">
                <h2 id="custom-controls-heading" style={styles.heading}>Implementing Custom Controls</h2>
                <p style={styles.paragraph}>
                    If you use a non-semantic element, like a <code>&lt;div&gt;</code>, keyboard functionality is <strong>not</strong> automatically included. Even if you make it focusable using <code>tabindex</code>, you must still add event listeners to detect key presses.
                </p>
                
                <CodeBlock 
                    title="Accessible Custom Control Pattern"
                    code={divCode}
                />
            </section>

            <section style={styles.section} aria-labelledby="flashcards-heading">
                <h2 id="flashcards-heading" style={styles.heading}>Flashcards: Semantic HTML</h2>
                <FlashcardSet cards={flashcards} />
            </section>

            <section style={styles.section} aria-labelledby="quiz-heading">
                <MultipleChoiceQuiz 
                    questions={quizQuestions} 
                    title="Knowledge Check: Semantic & Custom"
                />
            </section>

            <ExamTakeaway 
                title="Exam Tip: Keyboard Support"
                text={<>Always prefer native semantic elements like <code>&lt;button&gt;</code> over <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> for interactivity. If you must use a non-semantic element, you are responsible for managing focus (<code>tabindex</code>) and keyboard events (<code>Enter</code> and <code>Space</code>).</>}
            />
        </div>
    );
}

export default SemanticHTMLandCustomControls;