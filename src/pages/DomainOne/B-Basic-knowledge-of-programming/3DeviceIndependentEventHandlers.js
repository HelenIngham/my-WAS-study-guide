import React, { useState } from "react";
import "../../../index.css";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import ExamTakeaway from "../../../components/ExamTakeaway";
import ComparisonTable from "../../../components/ComparisonTable";
import CodeBlock from "../../../components/CodeBlock";

/**
 * Interactive Demo for Device Independent Event Handlers
 */
function DeviceIndependenceDemo() {
    const [lastEvent, setLastEvent] = useState("None");
    const [isHovered, setIsHovered] = useState(false);

    const handleAction = (e) => {
        setLastEvent(`${e.type} (Independent)`);
    };

    const handleMouseOnly = (e) => {
        setLastEvent(`${e.type} (Dependent)`);
    };

    const styles = {
        demoContainer: {
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            marginTop: '1.5rem',
            padding: '1.5rem',
            backgroundColor: 'var(--blue-100)',
            borderRadius: '8px',
            border: '2px dashed var(--blue-400)'
        },
        box: {
            padding: '1rem',
            border: '2px solid var(--blue-700)',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: 'white',
            flex: '1',
            minWidth: '200px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '100px',
            transition: 'transform 0.1s'
        },
        status: {
            marginTop: '1rem',
            fontWeight: 'bold',
            color: 'var(--blue-700)',
            width: '100%'
        }
    };

    return (
        <div style={styles.demoContainer}>
            <div 
                style={styles.box} 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleMouseOnly}
            >
                <strong>Dependent (Mouse Only)</strong>
                <p>Try clicking or hovering.</p>
                <p>(Doesn't work with Keyboard)</p>
            </div>

            <button 
                style={{...styles.box, transform: isHovered ? 'scale(1.02)' : 'none'}}
                onClick={handleAction}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        handleAction(e);
                    }
                }}
            >
                <strong>Independent (Multi-input)</strong>
                <p>Click, Tap, or Press Enter/Space.</p>
            </button>

            <div style={styles.status} aria-live="polite">
                Last Event Detected: {lastEvent}
            </div>
        </div>
    );
}

function DeviceIndependentEventHandlers() {
    const flashcards = [
        {
            front: "What is a device-independent event handler?",
            back: "An event handler that works regardless of the input mode (keyboard, mouse, touch, voice)."
        },
        {
            front: "What are device-dependent event handlers?",
            back: <>Handlers that rely wholly on a specific type of input, such as mouse-only events (<code> onmouseover </code>, <code> onmouseout </code>).</>
        },
        {
            front: "Which event is a good device-independent alternative to mouse-specific events?",
            back: <>The <code> click </code> event is generally device-independent as it is triggered by mouse clicks, keyboard Enter/Space (on buttons), and touch taps.</>
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "Which of these event handlers is device-DEPENDENT?",
            options: [
                <><code> onclick </code></>,
                <><code> onmouseover </code></>,
                <><code> onfocus </code></>,
                <><code> onchange </code></>
            ],
            correct: 1
        },
        {
            id: 2,
            question: "Why should you avoid mouse-only event handlers for critical functionality?",
            options: [
                "They are too slow to process.",
                "They don't work for users who rely on keyboards or other non-pointer devices.",
                "They only work in older browsers.",
                "They require special CSS to function."
            ],
            correct: 1
        }
    ];

    const tableRows = [
        {
            rowHeader: "Mouse / Pointer (Dependent)",
            data: [<><code> onmouseover </code></>, <><code> onmouseout </code></>, <><code> onmousedown </code></>, <><code> onmouseup </code></>]
        },
        {
            rowHeader: "Keyboard / Independent (Alternative)",
            data: [<><code> onfocus </code></>, <><code> onblur </code></>, <><code> onkeydown </code> / <code> onclick </code></>, <><code> onkeyup </code> / <code> onclick </code></>]
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

    const codeSnippet = `<!-- Device-Independent Pattern -->
<button onclick="doAction()">
  Submit
</button>

<!-- If using non-semantic elements (less preferred) -->
<div 
  tabindex="0" 
  onclick="doAction()" 
  onkeydown="if(event.key === 'Enter' || event.key === ' ') doAction()">
  Submit
</div>`;

    return (
        <div className="container device-independent-page">
            <PageHeader 
                title="Device Independent Event Handlers" 
                subtitle="Ensuring functionality is available across all input modes: keyboard, mouse, touch, and voice."
            />
            
            <section style={styles.section} aria-labelledby="overview-heading">
                <h2 id="overview-heading" style={styles.heading}>Overview</h2>
                <p style={styles.paragraph}>
                    Web functionality must be available when using different input modes. 
                    <strong> Device-independent event handlers</strong> are designed to work regardless of the device being used (keyboard, mouse, touch, or voice).
                </p>
                <Callout 
                    title="The Core Requirement"
                    text="Functionality must not rely wholly upon a certain type of input, such as a pointer device. If a task can be performed with a mouse, it must also be performable with a keyboard."
                />
            </section>

            <section style={styles.section} aria-labelledby="comparison-heading">
                <h2 id="comparison-heading" style={styles.heading}>Dependent vs. Independent Handlers</h2>
                <p style={styles.paragraph}>
                    Device-dependent event handlers rely on specific input types. For example, <code> onmouseover </code> requires a pointing device to move over an element.
                </p>
                
                <ComparisonTable 
                    headers={["Type", { text: "Example Events", colspan: 4, align: "center" }]}
                    rows={tableRows}
                    title="Common Event Pairings"
                />

                <DeviceIndependenceDemo />
            </section>

            <section style={styles.section} aria-labelledby="implementation-heading">
                <h2 id="implementation-heading" style={styles.heading}>Best Practices</h2>
                <p style={styles.paragraph}>
                    The easiest way to ensure device independence is to use high-level event handlers like <code> onclick </code> on semantic elements, which browsers map to multiple input types automatically.
                </p>
                
                <CodeBlock 
                    title="Implementation Examples"
                    code={codeSnippet}
                />
            </section>

            <section style={styles.section} aria-labelledby="flashcards-heading">
                <h2 id="flashcards-heading" style={styles.heading}>Flashcards: Key Concepts</h2>
                <FlashcardSet cards={flashcards} />
            </section>

            <section style={styles.section} aria-labelledby="quiz-heading">
                <h2 id="quiz-heading" style={styles.heading}>Knowledge Check</h2>
                <MultipleChoiceQuiz 
                    questions={quizQuestions} 
                    title="Test Your Understanding"
                />
            </section>

            <ExamTakeaway 
                title="Exam Tip: Device Independence"/>
            <p>On the WAS exam, remember: 'If it works with a mouse, it must work with a keyboard.' Avoid mouse-only events for critical actions. Use <code>onclick</code> for general actions and <code>onfocus</code> / <code>onblur</code> for focus-related states.</p>
        </div>
    );
}

export default DeviceIndependentEventHandlers;