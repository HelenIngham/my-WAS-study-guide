
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
            back: <>Keyboard functionality is NOT automatically included, even if the element is focusable (using <CodeBlock>tabindex</CodeBlock>).</>
        },
        {
            front: "How do you make a non-semantic element accessible to keyboards?",
            back: <>You must add <CodeBlock>keydown</CodeBlock> or <CodeBlock>keyup</CodeBlock> event listeners to detect <CodeBlock>Enter</CodeBlock> or <CodeBlock>Space</CodeBlock> key presses.</>
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: <>Which of these elements includes keyboard support for <CodeBlock>onClick()</CodeBlock> by default?</>,
            options: [
                <><CodeBlock>&lt;div&gt;</CodeBlock></>,
                <><CodeBlock>&lt;span&gt;</CodeBlock></>,
                <><CodeBlock>&lt;button&gt;</CodeBlock></>,
                <><CodeBlock>&lt;p&gt;</CodeBlock></>
            ],
            correct: 2
        },
        {
            id: 2,
            question: <>If you use a <CodeBlock>&lt;div&gt;</CodeBlock> as a button, you must manually handle:</>,
            options: [
                "Mouse clicks only.",
                <>Tab index and <CodeBlock>keydown</CodeBlock> / <CodeBlock>keyup</CodeBlock> events for <CodeBlock>Space</CodeBlock> and <CodeBlock>Enter</CodeBlock>.</>,
                "Color contrast only.",
                "Text alignment."
            ],
            correct: 1
        }
    ];

    const tableRows = [
        {
            rowHeader: <>Semantic (<CodeBlock>&lt;button&gt;</CodeBlock>, <CodeBlock>&lt;a&gt;</CodeBlock>)</>,
            data: ["Built-in", "Built-in", "Built-in", "Yes"]
        },
        {
            rowHeader: <>Non-Semantic (<CodeBlock>&lt;div&gt;</CodeBlock>, <CodeBlock>&lt;span&gt;</CodeBlock>)</>,
            data: ["None", <>Manual (<CodeBlock>tabindex</CodeBlock>)</>, <>Manual (JS events)</>, "No"]
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
                    If you use an <CodeBlock>onClick()</CodeBlock> event on a semantic HTML element, such as a <CodeBlock>&lt;button&gt;</CodeBlock> or <CodeBlock>&lt;a&gt;</CodeBlock>, it includes both mouse and keyboard functionality by default.
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
                    If you use a non-semantic element, like a <CodeBlock>&lt;div&gt;</CodeBlock>, keyboard functionality is <strong>not</strong> automatically included. Even if you make it focusable using <CodeBlock>tabindex</CodeBlock>, you must still add event listeners to detect key presses.
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
                text={<>Always prefer native semantic elements like <CodeBlock>&lt;button&gt;</CodeBlock> over <CodeBlock>&lt;div&gt;</CodeBlock> or <CodeBlock>&lt;span&gt;</CodeBlock> for interactivity. If you must use a non-semantic element, you are responsible for managing focus (<CodeBlock>tabindex</CodeBlock>) and keyboard events (<CodeBlock>Enter</CodeBlock> and <CodeBlock>Space</CodeBlock>).</>}
            />
        </div>
    );
}

export default SemanticHTMLandCustomControls;