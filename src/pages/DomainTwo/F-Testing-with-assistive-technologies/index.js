import React from "react";
import Callout from "../../../components/Callout";
import CompatibilityChecker from "../../../components/CompatibilityChecker";
import ScreenReaderSimulator from "../../../components/ScreenReaderSimulator";
import FlashcardSet from "../../../components/FlashcardSet";
import ScreenReaderModeExplorer from "../../../components/ScreenReaderModeExplorer";
import ExamTakeaway from "../../../components/ExamTakeaway";

function TestingWithAssistiveTechnologies() {
    const studyTasks = [
        "Know which combinations of assistive technologies work best with which browsers.",
        "Know how to use screen readers to navigate content via landmarks and headings, use forms, and read content, including data tables. Be aware that mechanisms often differ between desktop (mostly keyboard-based: tab and arrow keys) and mobile (often gesture-based).",
        "Be aware that users of AT often use their tools in very different ways. For example, while screen readers offer various navigation modes for expert users, many actual users do not know or use these modes.",
        "Understand the different screen reader modes for interacting with different types of page content (Windows screen reader: read/browse mode, forms mode, application mode, VoiceOver rotor, TalkBack menu).",
        "Be familiar with standard keystrokes for interaction with interactive elements in native HTML.",
        "Be familiar with conventions for keyboard interaction within ARIA widgets.",
        "Know the limitations of your assistive technology knowledge. If you are not experienced, do not assume something is an error. It may be that you do not know how to use the assistive technology correctly. Output anomalies or gaps could indicate a partial lack of screen reader support or bugs."
    ];

    const flashcards = [
        {
            front: "Which screen reader and browser combination is standard for MacOS?",
            back: "VoiceOver and Safari."
        },
        {
            front: "What is the difference between Browse mode and Forms mode in Windows screen readers?",
            back: "Browse mode is for reading and uses single-letter shortcuts (like 'H' for heading); Forms mode allows typing into input fields by passing keystrokes to the browser."
        },
        {
            front: "Why is the screen reader considered dominant in accessibility testing?",
            back: "Because it verifies that content generates appropriate programmatic output (e.g., accessible names, correct roles, and state changes)."
        },
        {
            front: "What is a major limitation of using screen magnifiers for accessibility testing?",
            back: "They often compensate for deficiencies (like improving focus visibility or contrast), which might mask issues that would be visible without them."
        }
    ];

    const simulatorElements = [
        { tag: 'h1', content: 'Main Navigation and Search' },
        { tag: 'p', content: 'Welcome to our service. Please use the form below to search.' },
        { tag: 'h2', content: 'Search Form' },
        { tag: 'a', content: 'Search Documentation', href: '#' },
        { tag: 'button', content: 'Execute Search' }
    ];

    return (
        <div className="container">
            <h1>Domain Two F: Testing with Assistive Technologies</h1>
            <p className="intro">
                (e.g., navigation of screen reader users, headings and landmarks, screen magnifiers, high contrast, using keyboard vs. mouse)
            </p>

            <section aria-labelledby="study-tasks-heading">
                <h2 id="study-tasks-heading">Study Tasks</h2>
                <Callout 
                    classNamePrefix="study-tasks"
                    title="What you need to know"
                    role="region"
                >
                    <ul>
                        {studyTasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </Callout>
            </section>

            <section aria-labelledby="overview-heading">
                <h2 id="overview-heading">Overview</h2>
                <p>
                    Testing with assistive technologies allows the tester to check for issues from the perspective of individuals with disabilities who use assistive technology to access webpages, web applications, and software applications. Types of assistive technology include screen readers, screen magnifiers, and speech recognition/voice control.
                </p>
                
                <Callout title="Tester Perspective vs. Daily User">
                    <p>
                        It is important to note that results obtained from a tester simulating the use of assistive technology or using it infrequently can be very different from results from someone who uses assistive technology all the time.
                    </p>
                </Callout>

                <p>
                    To understand whether an interface or functionality really works for specific user groups, you would have to carry out user testing. But that is something different from an expert using assistive technology to test for compliance.
                </p>

                <h3>The Role of the Screen Reader</h3>
                <p>
                    When using assistive technologies for accessibility testing, the screen reader has a dominant position because it can verify that content generates appropriate programmatic output. For example, the screen reader will reveal if elements have an accessible name or the correct role, and that state changes are reflected also programmatically.
                </p>

                <h3>Other Assistive Technologies</h3>
                <p>
                    Other assistive technologies are less well-positioned to detect issues because they often compensate for deficiencies and thereby effectively mask issues that testing without them might identify. For example, settings in magnification software can improve the focus visibility or text contrast but may also make it harder to identify a lack of focus visibility or insufficient contrast.
                </p>
            </section>

            <section aria-labelledby="activities-heading">
                <h2 id="activities-heading">Learning Activities</h2>
                
                <CompatibilityChecker />

                <ScreenReaderModeExplorer />

                <ScreenReaderSimulator 
                    elements={simulatorElements}
                    title="Demo: Screen Reader Navigation"
                    intro="Simulate how a screen reader moves through headings, links, and buttons."
                />

                <div className="flashcard-section">
                    <h3>Flashcards: AT Testing Knowledge</h3>
                    <FlashcardSet cards={flashcards} />
                </div>
            </section>

            <ExamTakeaway 
                title="Key Testing Takeaway"
                text="Never assume an AT output anomaly is a bug if you aren't an expert user. It could be a lack of tool knowledge, or a genuine gap in AT support. Always verify programmatic implementation (DOM/ARIA) alongside AT testing."
            />
        </div>
    );
}

export default TestingWithAssistiveTechnologies;