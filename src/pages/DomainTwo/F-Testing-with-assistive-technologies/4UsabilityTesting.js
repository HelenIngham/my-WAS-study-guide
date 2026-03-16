import React from "react";
import ComparisonTable from "../../../components/ComparisonTable";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ResourceLink from "../../../components/ResourceLink";
import SortingActivity from "../../../components/SortingActivity";

function UsabilityTesting() {
    const studyTasks = [
        "Demonstrate an understanding of user testing and compare it to accessibility testing.",
        "Understand the value of user testing by users with various types of disabilities.",
        "Consider the consequences of certain types of accessibility flaws. Some flaws are more critical than others.",
        "Demonstrate an understanding of the design's usability versus the accessibility and the conformance to accessibility specifications."
    ];

    const comparisonHeaders = ["Feature", "Accessibility Testing", "Usability Testing"];
    const comparisonRows = [
        {
            rowHeader: "Focus",
            data: ["Conformance to standards (WCAG)", "User experience and efficiency"]
        },
        {
            rowHeader: "Method",
            data: ["Audits, automated tools, screen reader checks", "Observing real users performing tasks"]
        },
        {
            rowHeader: "Goal",
            data: ["Ensure access for everyone", "Ensure the design is intuitive and effective"]
        },
        {
            rowHeader: "Participants",
            data: ["Accessibility experts / testers", "Actual users (including those with disabilities)"]
        }
    ];

    const flashcards = [
        {
            front: "Why is technical accessibility (conformance) only the beginning?",
            back: "Technical conformance is a minimum requirement. A site can pass WCAG but still be complex or unintuitive for people with disabilities to use effectively."
        },
        {
            front: "What is the primary value of involving users with disabilities in testing?",
            back: "It provides real-world insights into how people actually use assistive technology and identifies usability barriers that automated or expert audits might miss."
        },
        {
            front: "Are all accessibility flaws equally critical?",
            back: "No. Some flaws are 'blockers' that prevent a task from being completed, while others may only cause minor frustration or delay."
        }
    ];

    const sortingItems = [
        { id: '1', text: 'Missing alt text on a decorative image', category: 'low' },
        { id: '2', text: 'Keyboard focus trap in a modal dialog', category: 'critical' },
        { id: '3', text: 'Low color contrast on footer links', category: 'medium' },
        { id: '4', text: 'Form submit button not reachable by screen reader', category: 'critical' },
        { id: '5', text: 'Inconsistent navigation labels', category: 'medium' },
        { id: '6', text: 'Redundant title attributes', category: 'low' }
    ];

    const sortingCategories = [
        { id: 'critical', name: 'Critical (Blocker)' },
        { id: 'medium', name: 'Medium (Difficulty)' },
        { id: 'low', name: 'Low (Minor)' }
    ];

    return (
        <div className="container">
            <h1>4 Usability Testing</h1>

            <section aria-labelledby="study-tasks-title">
                <h2 id="study-tasks-title">Usability Testing Study Tasks</h2>
                <ul>
                    {studyTasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </section>

            <section aria-labelledby="overview-title">
                <h2 id="overview-title">Overview</h2>
                <Callout 
                    title="Minimum Requirements vs. Maximum Usability"
                    text="Some web designs may be complex or unintuitive for people with disabilities to use, even if the design technically passes accessibility guidelines. Consider accessibility requirements to be just the beginning of the process. They are minimum requirements to which further objectives should be added to maximise accessibility and usability."
                />
            </section>

            <section aria-labelledby="comparison-title">
                <h2 id="comparison-title">Comparing Accessibility and Usability Testing</h2>
                <ComparisonTable 
                    headers={comparisonHeaders}
                    rows={comparisonRows}
                />
            </section>

            <section aria-labelledby="activity-title">
                <SortingActivity 
                    title="Activity: Categorizing Accessibility Flaws"
                    intro="Some accessibility flaws have a greater impact on usability than others. Sort these flaws into their likely severity categories."
                    items={sortingItems}
                    categories={sortingCategories}
                />
            </section>

            <section aria-labelledby="flashcards-title">
                <h2 id="flashcards-title">Learning Activity: Flashcards</h2>
                <FlashcardSet cards={flashcards} />
            </section>

            <section aria-labelledby="resources-title">
                <h2 id="resources-title">Resources</h2>
                <div className="resource-list">
                    <ResourceLink href="https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/" text="Accessibility, Usability, and Inclusion, WAI W3C" />
                    <ResourceLink href="https://www.w3.org/WAI/guidelines/supplemental/" text="Supplemental Guidance, WAI W3C" />
                    <ResourceLink href="https://www.w3.org/WAI/teach-advocate/inform-users/" text="Involving Users in Web Accessibility, WAI W3C" />
                    <ResourceLink href="https://www.w3.org/WAI/test-evaluate/involving-users/" text="Involving Users in Evaluating Web Accessibility, WAI W3C" />
                    <ResourceLink href="https://tetralogical.com/blog/2021/01/19/browsing-with-assistive-technology/" text="Browsing with assistive technology, TetraLogical, 2021" />
                    <ResourceLink href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g" text="A11ycasts with Rob Dodson, Google Chrome Developers, 2018 - 2019" />
                    <ResourceLink href="https://webaim.org/blog/testing-with-screen-readers-questions-and-answers/" text="Testing with Screen Readers – Questions and Answers, WebAIM, 2019" />
                </div>
            </section>
        </div>
    );
}

export default UsabilityTesting;