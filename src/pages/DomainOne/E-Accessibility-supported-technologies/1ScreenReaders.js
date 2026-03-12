import React from "react";
import "./1ScreenReaders.css";
import "../../../index.css";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import ExamTakeaway from "../../../components/ExamTakeaway";
import ComparisonTable from "../../../components/ComparisonTable";

function ScreenReaders() {
    const flashcards = [
        {
            front: "How do screen readers function?",
            back: "They convert text and elements on a screen into audible speech or Braille, interpreting the structure of websites and applications."
        },
        {
            front: "What is a key difference between laptop and mobile screen readers?",
            back: "Laptop screen readers (JAWS/NVDA) use advanced keyboard shortcuts and customization, while mobile screen readers (VoiceOver/TalkBack) rely on touch gestures."
        },
        {
            front: "What structural elements do screen readers help users navigate?",
            back: "Headings, links, buttons, forms, tables, and dynamic content like pop-up windows or menus."
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "Which of the following is a mobile-specific screen reader?",
            options: ["JAWS", "NVDA", "TalkBack", "Narrator"],
            correct: 2
        },
        {
            id: 2,
            question: "Screen readers announce critical information such as:",
            options: ["Formatting and images (if alt text is provided)", "System alerts", "The structure of the website", "All of the above"],
            correct: 3
        },
        {
            id: 3,
            question: "How do users typically navigate with mobile screen readers?",
            options: ["Keyboard shortcuts", "Touch gestures", "Voice commands only", "Mouse clicks"],
            correct: 1
        }
    ];

    return (
        <div className="container">
            <PageHeader 
                title="1. Screen Readers" 
                lede="Screen readers are assistive technologies that enable people with vision loss to interact with digital content by converting text and elements into audible speech or Braille."
            />

            <section className="section">
                <h2>Overview</h2>
                <p>
                    Screen readers function by interpreting the structure of websites, applications, and documents. 
                    They allow users to navigate through various sections like headings, links, buttons, and forms. 
                    Users can move sequentially through content or jump directly to specific elements using keyboard commands or gestures.
                </p>
                <p>
                    Screen readers also announce critical information such as formatting, images (if alt text is provided), and system alerts. 
                    They help users complete forms, read tables, and interact with dynamic content like pop-up windows or drop-down menus.
                </p>
            </section>

            <ComparisonTable 
                title="Laptop vs. Mobile Screen Readers"
                headers={["Feature", "Laptop-based (JAWS, NVDA)", "Mobile (VoiceOver, TalkBack)"]}
                rows={[
                    {
                        rowHeader: "Interaction",
                        data: ["Advanced keyboard shortcuts", "Touch gestures"]
                    },
                    {
                        rowHeader: "Customization",
                        data: ["Extensive customization and robust features", "Optimized for navigation on smaller screens"]
                    },
                    {
                        rowHeader: "Best for...",
                        data: ["Complex tasks like coding or document editing", "On-the-go tasks and app integration"]
                    },
                    {
                        rowHeader: "Integration",
                        data: ["Feature-rich desktop environment", "Intuitive quick actions"]
                    }
                ]}
            />

            <section className="section" style={{ marginTop: '2rem' }}>
                <Callout 
                    title="Key Takeaway" 
                    text="While both serve the same fundamental purpose, laptop screen readers offer more robust features for complex tasks, whereas mobile screen readers are optimized for touch-based, on-the-go interaction."
                />
            </section>

            <section className="section">
                <h2>Learning Activities</h2>
                <div className="activities-grid">
                    <div style={{ marginBottom: '2rem' }}>
                        <h3>Flashcards</h3>
                        <p>Test your knowledge of screen reader fundamentals.</p>
                        <FlashcardSet cards={flashcards} />
                    </div>
                    <div>
                        <MultipleChoiceQuiz 
                            title="Screen Reader Quiz" 
                            questions={quizQuestions} 
                        />
                    </div>
                </div>
            </section>

            <ExamTakeaway title="Resources for Further Study">
                <ul>
                    <li><a href="https://www.w3.org/WAI/ARIA/apg/practices/aria-live/" target="_blank" rel="noopener noreferrer">Using ARIA (Aria-live)</a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/User_agent" target="_blank" rel="noopener noreferrer">Definition of User Agent</a></li>
                    <li><a href="https://www.apple.com/accessibility/mac/vision/" target="_blank" rel="noopener noreferrer">VoiceOver for Mac</a></li>
                    <li><a href="https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios" target="_blank" rel="noopener noreferrer">VoiceOver gestures on iOS</a></li>
                    <li><a href="https://dequeuniversity.com/screenreaders/talkback-shortcuts" target="_blank" rel="noopener noreferrer">Deque University: Talkback Gestures on Android</a></li>
                    <li><a href="https://www.nvaccess.org/getting-started/" target="_blank" rel="noopener noreferrer">NVDA Quick Start Guide</a></li>
                    <li><a href="https://support.freedomscientific.com/Training/Surfs-Up/_Keyboard_Commands.htm" target="_blank" rel="noopener noreferrer">JAWS Quick Start and Keystrokes</a></li>
                </ul>
            </ExamTakeaway>
        </div>
    );
}

export default ScreenReaders;