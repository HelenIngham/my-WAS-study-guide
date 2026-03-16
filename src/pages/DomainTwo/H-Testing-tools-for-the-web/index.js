import React from "react";
import FlashcardSet from "../../../components/FlashcardSet";
import ToolCategoryExplorer from "../../../components/ToolCategoryExplorer";
import ToolLimitationsActivity from "../../../components/ToolLimitationsActivity";
import AutomatedScanDemo from "../../../components/AutomatedScanDemo";
import Callout from "../../../components/Callout";
import ResourceLink from "../../../components/ResourceLink";

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
            front: "What are ACT Rules?",
            back: "Accessibility Conformance Testing (ACT) Rules define a common way to test WCAG conformance, ensuring different tools and methodologies produce consistent results."
        },
        {
            front: "What is a major limitation of automated tools?",
            back: "They can only detect approximately 30-40% of accessibility issues and cannot evaluate context, such as whether alt text is meaningful or if a heading structure is logical."
        },
        {
            front: "When should accessibility tools be used in the development lifecycle?",
            back: "At all stages: Design (inspectors), Development (linters, browser extensions), and Testing (site-wide scans, manual audits)."
        },
        {
            front: "Give an example of a tool used for guided manual testing.",
            back: "Accessibility Insights for Web (by Microsoft) or Axe Auditor (by Deque)."
        },
        {
            front: "What is the purpose of a simulator tool like 'NoCoffee'?",
            back: "To simulate various vision impairments (low vision, color blindness, etc.) to help designers and developers understand user impact."
        }
    ];

    const testingTasks = [
        {
            id: 1,
            text: "Checking if all images have an 'alt' attribute.",
            category: "automated",
            explanation: "Automated tools can easily detect the absence of an alt attribute across an entire site."
        },
        {
            id: 2,
            text: "Determining if an image's alternative text is 'meaningful' and accurate.",
            category: "manual",
            explanation: "Only a human can understand the context of an image and decide if the description is appropriate."
        },
        {
            id: 3,
            text: "Verifying that the tab order follows the visual flow of the page.",
            category: "manual",
            explanation: "While some tools flag suspicious tabindexes, a manual walkthrough is required to ensure the flow is logical for a user."
        },
        {
            id: 4,
            text: "Checking color contrast ratios between text and background.",
            category: "both",
            explanation: "Automated tools can check text against solid backgrounds, but manual checks are often needed for text over gradients or images."
        },
        {
            id: 5,
            text: "Testing if a custom ARIA widget (like a tree view) responds to standard keystrokes.",
            category: "manual",
            explanation: "Functional testing with a keyboard and screen reader is essential for complex custom components."
        }
    ];

    return (
        <div className="container">
            <h1>H: Testing Tools for the Web</h1>
            
            <section className="intro-section" aria-labelledby="intro-title">
                <h2 id="intro-title">Overview</h2>
                <p>
                    Testing for accessibility requires a combination of both automated and manual tools. Automated tools are excellent for catching 'low-hanging fruit' and scaling across large sites, while manual testing is indispensable for assessing the actual user experience and identifying complex logic or interaction issues.
                </p>
                <Callout 
                    title="The 30% Rule"
                    text="Reliable industry estimates suggest that automated tools typically catch only about 25% to 40% of WCAG failures. The remaining issues require human judgement."
                />
            </section>

            <section className="study-tasks-section" aria-labelledby="tasks-title">
                <h2 id="tasks-title">Study Tasks</h2>
                <ul>
                    {studyTasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </section>

            <section className="tool-types" aria-labelledby="types-title">
                <h2 id="types-title">Types of Testing Tools</h2>
                <div className="grid">
                    <div className="card">
                        <h3>Automated Scanners</h3>
                        <p>Site-wide tools that crawl pages and report rule violations (e.g., Siteimprove, Axe Monitor).</p>
                    </div>
                    <div className="card">
                        <h3>Browser Extensions</h3>
                        <p>Tools that run in the browser to analyze the current page (e.g., WAVE, Axe DevTools, ARC Toolkit).</p>
                    </div>
                    <div className="card">
                        <h3>Guided Manual Tools</h3>
                        <p>Walks the tester through steps that require human judgement (e.g., Accessibility Insights).</p>
                    </div>
                    <div className="card">
                        <h3>Simulators</h3>
                        <p>Simulate visual or motor impairments (e.g., Color Oracle, NoCoffee).</p>
                    </div>
                </div>
            </section>

            <ToolCategoryExplorer />

            <section className="demos" aria-labelledby="demo-title">
                <h2 id="demo-title">Demos</h2>
                <AutomatedScanDemo />
            </section>

            <section className="learning-activities" aria-labelledby="activities-title">
                <h2 id="activities-title">Learning Activities</h2>
                
                <div className="activity-group">
                    <h3>Flashcards: Tools & Limitations</h3>
                    <FlashcardSet cards={flashcards} />
                </div>

                <ToolLimitationsActivity tasks={testingTasks} />
            </section>

            <section className="resources-section" aria-labelledby="resources-title">
                <h2 id="resources-title">Resources</h2>
                
                <div className="resource-group">
                    <h3>Guided Manual Testing</h3>
                    <ul>
                        <li><ResourceLink url="https://accessibilityinsights.io/" linkText="Accessibility Insights for Web (by Microsoft)" /></li>
                        <li><ResourceLink url="https://www.tpgi.com/arc-platform/" linkText="ARC Platform (by TPGi)" /></li>
                        <li><ResourceLink url="https://www.deque.com/axe/auditor/" linkText="Axe Auditor (by Deque)" /></li>
                    </ul>
                </div>

                <div className="resource-group">
                    <h3>Simulators & Specialized Tools</h3>
                    <ul>
                        <li><ResourceLink url="https://colororacle.org/" linkText="Color Oracle (Color blindness simulator)" /></li>
                        <li><ResourceLink url="https://chrome.google.com/webstore/detail/nocoffee/jjeocpbbjajbhkhimcnbmapnodebhbfj" linkText="No Coffee Vision Simulator" /></li>
                        <li><ResourceLink url="https://trace.umd.edu/peat/" linkText="PEAT - Photosensitive Epilepsy Analysis Tool" /></li>
                        <li><ResourceLink url="https://webaim.org/resources/contrastchecker/" linkText="WebAIM Contrast Checker" /></li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default TestingToolsForTheWeb;