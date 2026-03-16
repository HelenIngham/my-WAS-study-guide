import React from "react";
import FlashcardSet from "../../../components/FlashcardSet";
import PriorityList from "../../../components/PriorityList";
import Callout from "../../../components/Callout";
import SeverityPrioritizationMatrix from "../../../components/SeverityPrioritizationMatrix";
import Example from "../../../components/Example";

function LevelsOfSeverityAndPrioritizationOfIssues() {
    const studyTasks = [
        "Characterise and differentiate between the ideal/best solution and the \"good enough\" solution, respecting the particular project, its environment, intended target groups, and resources.",
        "Understand the important role of end users in assessing and validating remediation approaches.",
        "Demonstrate that you understand the difference between fixing the particular issue and completely redesigning the web page.",
        "Demonstrate the ability to distinguish the feasibility of a particular solution in different contexts.",
        "Demonstrate the knowledge of practical and simple hints, leading to better web accessibility.",
        "Be able to communicate the purpose, approach, and strategy to remediate.",
        "Understand the importance of making the right stakeholders aware, educated, and included in implementation recommendations.",
        "Know the possibility of using maturity models and tools to illustrate progress and sustainability."
    ];

    const flashcards = [
        {
            front: "What is the difference between an 'ideal' and a 'good enough' solution?",
            back: "An ideal solution is the theoretical best, while a 'good enough' solution is practical, respects project constraints (resources, time, environment), and still meets the needs of target users effectively."
        },
        {
            front: "Why are end users important in remediation?",
            back: "End users provide essential validation that a remediation approach actually works in real-world scenarios and truly resolves the accessibility barriers they face."
        },
        {
            front: "Fixing vs. Redesigning: When to choose?",
            back: "Fixing is for specific, isolated issues. Redesigning is necessary when the underlying architecture or design is fundamentally inaccessible or when fixing individual issues is less efficient than a fresh start."
        }
    ];

    const prioritizationIssues = [
        {
            id: 1,
            title: "Missing Alt Text on Buy Button",
            impact: "High",
            effort: "Low",
            description: "A critical call-to-action button has no accessible name, preventing screen reader users from completing a purchase. Fixing it requires a simple code attribute update."
        },
        {
            id: 2,
            title: "Low Contrast in Footer Links",
            impact: "Medium",
            effort: "Low",
            description: "Footer links have a contrast ratio of 3.5:1. While readable for some, it doesn't meet WCAG AA. Fixing it is a simple CSS color change."
        },
        {
            id: 3,
            title: "Keyboard Trap in Complex Widget",
            impact: "High",
            effort: "High",
            description: "A custom-built third-party widget traps keyboard focus. Fixing it requires significant JavaScript refactoring or replacing the widget entirely."
        },
        {
            id: 4,
            title: "Non-Descriptive Link Text ('Click Here')",
            impact: "Medium",
            effort: "Medium",
            description: "Multiple links use 'Click Here'. Fixing requires auditing all occurrences and updating content to be descriptive out of context."
        }
    ];

    return (
        <div className="container">
            <h1>Domain Three A: Level of severity and prioritization of issues</h1>
            
            <section className="overview-section">
                <h2>Overview</h2>
                <p>
                    It is best to integrate accessibility into the whole web production process, from identifying user requirements to design and implementation and, finally, user acceptance testing. As content changes and expands, repeated testing can maintain a good level of accessibility. Testing should occur early and regularly to find and fix problems as early as possible.
                </p>
                <p>
                    However, it may be necessary to prioritise findings and narrow the scope of remediation. One reason for this is the wish to use limited resources most effectively. In other cases, especially when the website or app is already operational, remediation will often prioritise critical issues where the risk is highest that users find themselves excluded.
                </p>
                
                <Callout 
                    title="Key Prioritization Factors"
                    text="When assessing issues, consider: cost benefit, legal risk, user impact, and the severity of the problem."
                />
            </section>

            <section className="study-tasks-section">
                <h2>Study Tasks</h2>
                <PriorityList>
                    {studyTasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </PriorityList>
            </section>

            <section className="demos-section">
                <h2>Demos & Examples</h2>
                <Example 
                    label="User Impact vs. Effort" 
                    text="Prioritize issues that have a high impact on the user's ability to complete critical tasks (e.g., checkout, login) even if the effort is moderate. Low effort, high impact fixes ('low-hanging fruit') should always be addressed first."
                />
                
                <Example 
                    label="Legal Risk Example"
                    text="Issues on highly visible public-facing pages often carry higher legal risk and may be prioritized over issues in internal, rarely used tools."
                />
            </section>

            <section className="learning-activities">
                <h2>Learning Activities</h2>
                
                <h3>Flashcards</h3>
                <FlashcardSet cards={flashcards} />

                <SeverityPrioritizationMatrix issues={prioritizationIssues} />
            </section>
        </div>
    );
}

export default LevelsOfSeverityAndPrioritizationOfIssues;