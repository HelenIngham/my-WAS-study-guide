import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import Tabs from "../../../components/Tabs";
import FlashcardSet from "../../../components/FlashcardSet";
import ScenarioEvaluator from "../../../components/ScenarioEvaluator";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import AccessibilityTreeDemo from "../../../components/AccessibilityTreeDemo";

function IdentifyingGuidelinesAndPrinciplesRegardingIssues() {
    const flashcards = [
        {
            front: "What are the three levels of WCAG conformance?",
            back: "Level A (minimum), Level AA (standard/required), and Level AAA (ideal/highest)."
        },
        {
            front: "What is the difference between normative and non-normative content?",
            back: "Normative content is required for conformance (the standards themselves). Non-normative (informative) content provides supporting info, examples, and techniques but is not required."
        },
        {
            front: "What is ATAG?",
            back: "Authoring Tool Accessibility Guidelines (ATAG) explains how to make the authoring tools themselves accessible and how they should help authors create accessible content."
        },
        {
            front: "What is WAI-ARIA?",
            back: "Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA) is a specification for making advanced web applications more accessible by providing roles, states, and properties."
        }
    ];

    const evaluationScenarios = [
        {
            id: 1,
            text: "A button has a low color contrast of 2:1 between the text and background.",
            type: "failure",
            explanation: "This is a direct violation of WCAG Success Criterion 1.4.3 Contrast (Minimum), which requires at least 4.5:1 for normal text at Level AA."
        },
        {
            id: 2,
            text: "A form uses a 'placeholder' but lacks a visible <label> element, although it has an aria-label.",
            type: "bad-practice",
            explanation: "While it might pass normative requirements (via aria-label), it's a bad practice as visible labels benefit all users, and placeholders often disappear or have poor contrast."
        },
        {
            id: 3,
            text: "A modal dialog can only be closed using the mouse; the 'Escape' key does nothing.",
            type: "failure",
            explanation: "This fails SC 2.1.1 Keyboard, which requires all functionality to be operable through a keyboard interface."
        },
        {
            id: 4,
            text: "A complex web app uses custom-styled checkboxes without using the <input type='checkbox'> or ARIA roles/states.",
            type: "failure",
            explanation: "This fails SC 4.1.2 Name, Role, Value because the role and state of the checkbox are not programmatically determinable."
        },
        {
            id: 5,
            text: "A link text is 'Click here' but is surrounded by descriptive text that makes the purpose clear.",
            type: "bad-practice",
            explanation: "This may pass SC 2.4.4 Link Purpose (In Context) at Level A, but it's a bad practice. 'Click here' is poor for users scanning a list of links or using screen reader link lists."
        }
    ];

    const accessibilityTreeNodes = [
        {
            id: "standard-button",
            html: '<button>Submit Order</button>',
            role: "button",
            name: "Submit Order",
            states: ["focusable"],
            description: "Standard HTML buttons automatically provide correct roles and names to the accessibility tree."
        },
        {
            id: "aria-button",
            html: '<div role="button" aria-label="Close">X</div>',
            role: "button",
            name: "Close",
            states: ["focusable (if tabindex added)"],
            description: "ARIA roles allow non-semantic elements to identify as specific UI components, while aria-label provides the accessible name."
        },
        {
            id: "invalid-role",
            html: '<div role="foo">...</div>',
            role: "generic / none",
            name: "(empty)",
            states: [],
            description: "Using non-existent or invalid roles results in the element being treated as a generic container, potentially hiding its intent from AT."
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "Which specification focus on the accessibility of tools used to create web content?",
            options: ["WCAG", "ATAG", "WAI-ARIA", "WCAG-EM"],
            correct: 1
        },
        {
            id: 2,
            question: "What does WCAG-EM stand for?",
            options: [
                "WCAG Essential Metrics",
                "WCAG Evaluation Methodology",
                "WCAG Easy Management",
                "WCAG Extended Module"
            ],
            correct: 1
        },
        {
            id: 3,
            question: "Level AA conformance requires passing which criteria?",
            options: [
                "Only Level AA criteria",
                "Only Level A criteria",
                "All Level A and Level AA criteria",
                "All Level A, AA, and AAA criteria"
            ],
            correct: 2
        }
    ];

    const tabs = [
        {
            id: "specifications",
            label: "Specifications",
            content: (
                <section className="content-section">
                    <p>To determine conformance, you must understand the core specifications and their roles in the ecosystem.</p>
                    <div className="grid">
                        <div className="card">
                            <h4>WCAG 2.2</h4>
                            <p>Web Content Accessibility Guidelines. The primary standard for web content accessibility.</p>
                        </div>
                        <div className="card">
                            <h4>WAI-ARIA</h4>
                            <p>Accessible Rich Internet Applications. Defines roles and properties to make dynamic content accessible.</p>
                        </div>
                        <div className="card">
                            <h4>ATAG 2.0</h4>
                            <p>Authoring Tool Accessibility Guidelines. Focuses on the tools used to build websites (CMS, IDEs).</p>
                        </div>
                    </div>
                    <Callout title="Normative vs. Non-Normative">
                        <ul>
                            <li><strong>Normative:</strong> The actual Success Criteria and conformance requirements. You MUST follow these to claim conformance.</li>
                            <li><strong>Non-Normative:</strong> Techniques, failures, and understanding documents. These are helpful guidance but not strictly required.</li>
                        </ul>
                    </Callout>
                </section>
            )
        },
        {
            id: "conformance",
            label: "Conformance Levels",
            content: (
                <section className="content-section">
                    <h3>Levels A, AA, and AAA</h3>
                    <p>WCAG success criteria are organized into three levels of conformance:</p>
                    <ul>
                        <li><strong>Level A:</strong> The most fundamental level of accessibility. Without these, large groups of people will find it impossible to use the site.</li>
                        <li><strong>Level AA:</strong> The standard level of accessibility required for most commercial and government sites.</li>
                        <li><strong>Level AAA:</strong> The highest and most specialized level. It is not recommended as a general policy for entire sites because it is not always possible to satisfy all criteria for all types of content.</li>
                    </ul>
                    <Callout type="info" title="Note on Conformance">
                        <p>To reach a higher level of conformance, the page must satisfy all criteria from the lower levels as well. (e.g., AA requires all A and AA criteria).</p>
                    </Callout>
                </section>
            )
        },
        {
            id: "evaluation",
            label: "Evaluation (WCAG-EM)",
            content: (
                <section className="content-section">
                    <h3>The Evaluation Process</h3>
                    <p>WCAG-EM (Website Accessibility Conformance Evaluation Methodology) is a structured approach to assessing how well a website conforms to WCAG.</p>
                    <ol>
                        <li><strong>Define Scope:</strong> What's being evaluated? (URL, browsers, assistive tech).</li>
                        <li><strong>Explore Website:</strong> Identify key pages, functionality, and technologies used.</li>
                        <li><strong>Select Sample:</strong> Choose a representative set of pages (structured and random).</li>
                        <li><strong>Audit Sample:</strong> Test against Success Criteria.</li>
                        <li><strong>Report Findings:</strong> Document results and conformance claims.</li>
                    </ol>
                </section>
            )
        }
    ];

    return (
        <div className="container">
            <PageHeader 
                title="Domain Two B: Identifying Guidelines and Principles Regarding Issues" 
                lede="Understand WCAG, WAI-ARIA, ATAG, and the nuances of normative standards versus best practices."
            />

            <Callout title="Study Tasks">
                <ul>
                    <li>Become familiar with specifications (WCAG, WAI-ARIA, and ATAG).</li>
                    <li>Know which Success Criteria apply to which conformance level.</li>
                    <li>Understand the WCAG conformance requirements.</li>
                    <li>Understand the evaluation process of the WCAG-EM methodology.</li>
                    <li>Distinguish between failures of accessibility criteria versus other bad accessibility practices.</li>
                </ul>
            </Callout>

            <section className="overview">
                <h2>Overview</h2>
                <p>
                    In order to determine conformance, it is first of all important to specify the guidelines or standards applied and to understand the Success Criteria thoroughly. 
                    When assessing the website, distinguish between true accessibility failures with respect to the normative standard, and poor design decisions that do not fail the applicable standard requirements.
                </p>
            </section>

            <Tabs tabs={tabs} ariaLabel="Guidelines and principles content" />

            <section className="demo-section">
                <AccessibilityTreeDemo 
                    nodes={accessibilityTreeNodes} 
                    title="Demo: WAI-ARIA and the Accessibility Tree"
                    intro="Explore how ARIA roles change the way elements are interpreted by assistive technologies."
                />
            </section>

            <section className="learning-activities">
                <ScenarioEvaluator scenarios={evaluationScenarios} />
                <FlashcardSet cards={flashcards} title="Quick Review" />
                <MultipleChoiceQuiz questions={quizQuestions} title="Knowledge Check" />
            </section>
        </div>
    );
}

export default IdentifyingGuidelinesAndPrinciplesRegardingIssues;