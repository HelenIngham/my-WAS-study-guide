import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import Card from "../../../components/Card";
import CardList from "../../../components/CardList";
import ResourceLink from "../../../components/ResourceLink";
import FlashcardSet from "../../../components/FlashcardSet";
import AccessibilityTreeDemo from "../../../components/AccessibilityTreeDemo";
import ToolLimitationsActivity from "../../../components/ToolLimitationsActivity";

function TestingToolsForTheWeb() {
    const studyTasks = [
        "Understand the purpose of ACT Rules.",
        "Know the strengths and limitations of automated testing tools.",
        "Differentiate between the kinds of accessibility issues that can be found with automated tools and issues that require manual testing.",
        "Understand how accessibility software tools can be used at various stages in the web development process (e.g., design/develop/test).",
        "Be familiar with the types of software tools available (site-wide scanning, server-based analysis, unit testing, integration testing, browser developer tools, browser add-ons, simulators, guided manual testing, etc.).",
        "Know how to use the keyboard and screen readers to navigate ARIA custom widgets.",
        "Be familiar with standard keystrokes for interaction with interactive elements in native HTML.",
        "Know how to use the browser's built in Development Tools to inspect source code."
    ];

    const flashcards = [
        {
            front: "What is the purpose of ACT Rules?",
            back: "ACT (Accessibility Conformance Testing) Rules provide a common interpretation of WCAG Success Criteria to ensure consistent results across different testing tools and methodologies."
        },
        {
            front: "What are the primary strengths of automated testing tools?",
            back: "Speed, scalability, ability to catch 'low-hanging fruit' (like missing alt text or poor color contrast), and integration into CI/CD pipelines."
        },
        {
            front: "What are the limitations of automated testing tools?",
            back: "They can only catch ~25-40% of issues, cannot determine 'meaning' or 'relevance' (e.g., if alt text is descriptive), and often produce false positives/negatives."
        },
        {
            front: "Name three types of accessibility software tools.",
            back: "Browser extensions (Axe, WAVE), Site-wide scanners (Siteimprove, Pope Tech), and Screen readers (NVDA, JAWS)."
        }
    ];

    const treeNodes = [
        {
            id: 'btn-1',
            html: '<button aria-label="Close">X</button>',
            role: 'button',
            name: 'Close',
            states: ['focusable'],
            description: 'The name is derived from the aria-label, overriding the visible "X" text.'
        },
        {
            id: 'img-1',
            html: '<img src="cat.jpg" alt="A fluffy orange cat">',
            role: 'img',
            name: 'A fluffy orange cat',
            states: [],
            description: 'The image is identified by its role and given an accessible name via the alt attribute.'
        },
        {
            id: 'link-1',
            html: '<a href="/home">Home</a>',
            role: 'link',
            name: 'Home',
            states: ['focusable', 'linked'],
            description: 'The name is derived from the link text content.'
        }
    ];

    const testingTasks = [
        {
            id: 't1',
            text: 'Checking for missing alt attributes on images',
            category: 'automated',
            explanation: 'Automated tools can easily detect if an alt attribute is physically present or absent.'
        },
        {
            id: 't2',
            text: 'Determining if an image\'s alternative text is descriptive and meaningful',
            category: 'manual',
            explanation: 'Contextual meaning requires human judgment to ensure the description matches the image\'s purpose.'
        },
        {
            id: 't3',
            text: 'Verifying color contrast ratios for text',
            category: 'both',
            explanation: 'Automated tools can check simple text-on-solid-color, but manual review is often needed for text over gradients or images.'
        },
        {
            id: 't4',
            text: 'Testing if a custom modal follows the correct keyboard focus trap pattern',
            category: 'manual',
            explanation: 'While some integration tests can check this, manual testing with a keyboard is the most reliable way to verify the user experience.'
        },
        {
            id: 't5',
            text: 'Detecting duplicate IDs on a page',
            category: 'automated',
            explanation: 'ID uniqueness is a programmatic check that automated tools perform very efficiently.'
        }
    ];

    return (
        <div className="container">
            <PageHeader 
                title="Domain Two: D. Testing Tools for the Web" 
                lede="Explore the variety of automated and manual tools used to evaluate web accessibility, understanding their strengths, limitations, and appropriate use cases."
            />

            <section className="section-padding">
                <h2>Study Tasks</h2>
                <Card>
                    <CardList>
                        {studyTasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </CardList>
                </Card>
            </section>

            <section className="section-padding">
                <h2>Overview</h2>
                <p>
                    There are different ways to test a website or web app for accessibility. One approach is to thoroughly assess it against an accessibility standard. 
                    <strong> You cannot do conformance testing with automated tools only</strong>; it will be a combination of both automated and manual testing.
                </p>
                <Callout title="Expertise Requirements" classNamePrefix="testing-tools">
                    <p>Auditors should have profound expertise across a variety of areas including:</p>
                    <CardList>
                        <li>Understanding web technologies</li>
                        <li>Understanding the Web Content Accessibility Guidelines and associated Techniques</li>
                        <li>Understanding evaluation tools</li>
                        <li>Combining automatic and manual approaches when evaluating web accessibility</li>
                        <li>Interpreting the results of automatic testing, identifying false positives and omissions</li>
                        <li>Being aware of disability barriers, assistive technologies, and adaptive strategies</li>
                        <li>Involving of people with disabilities in evaluation</li>
                    </CardList>
                </Callout>
            </section>

            <section className="section-padding">
                <h2>Demos & Activities</h2>
                
                <AccessibilityTreeDemo 
                    nodes={treeNodes} 
                    title="Interactive: Browser Inspection & The Accessibility Tree"
                    intro="Use this demo to understand how browser developer tools 'see' elements. The Accessibility Tree is what assistive technologies actually interact with."
                />

                <div className="mt-4">
                    <h3>Learning Activities</h3>
                    <FlashcardSet cards={flashcards} />
                </div>

                <div className="mt-4">
                    <ToolLimitationsActivity tasks={testingTasks} />
                </div>
            </section>

            <section className="section-padding">
                <h2>Resources</h2>
                <Card title="W3C WAI Resources">
                    <ResourceLink 
                        href="https://www.w3.org/WAI/standards-guidelines/act/community/" 
                        text="ACT Rules Community, WAI W3C" 
                    />
                    <ResourceLink 
                        href="https://www.w3.org/WAI/standards-guidelines/act/" 
                        text="ACT Rules, WAI W3C" 
                    />
                </Card>
            </section>
        </div>
    );
}

export default TestingToolsForTheWeb;