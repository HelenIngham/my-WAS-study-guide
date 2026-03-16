import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import Example from "../../../components/Example";
import FixingVsRedesignActivity from "../../../components/FixingVsRedesignActivity";
import SuccessCriteriaMapper from "../../../components/SuccessCriteriaMapper";
import AccessibilityTreeDemo from "../../../components/AccessibilityTreeDemo";

function RecommendationOfStrategiesAndTechniquesForFixingIssues() {
    const studyTasks = [
        "Characterize and differentiate between the ideal/best solution and the 'good enough' solution, respecting the particular project, its environment, intended target groups, and resources.",
        "Understand the important role of end users in assessing and validating remediation approaches",
        "Demonstrate that you understand the difference between the fixing of the particular issue and the complete redesign of the web page.",
        "Demonstrate the ability to distinguish the feasibility of a particular solution in different contexts.",
        "Demonstrate the knowledge of practical and simple hints, leading to better web accessibility.",
        "Be able to communicate the purpose, approach, and strategy to remediate.",
        "Understand that it is important that the right stakeholders are made aware, educated, and included in implementation recommendations.",
        "Know about the possibility of using maturity models and tools to illustrate progress and sustainability."
    ];

    const flashcards = [
        {
            front: "Sufficient Techniques",
            back: "WCAG-provided informative techniques that meet Success Criteria. They are not the only way to conform but are widely accepted."
        },
        {
            front: "Ideal vs. 'Good Enough' Solution",
            back: "Ideal solutions provide the best possible UX, while 'good enough' solutions meet requirements within project constraints (time, budget, technology)."
        },
        {
            front: "Fixing vs. Redesign",
            back: "Fixing addresses specific bugs in existing code. Redesign involves rebuilding a page or component, often necessary for legacy systems with deep accessibility debt."
        },
        {
            front: "Feasibility",
            back: "The practicality of a solution considering the technical environment, resources, and impact on end users."
        }
    ];

    const scMapperScenarios = [
        {
            id: "1",
            description: "An image on the homepage provides critical information but lacks alternative text.",
            options: ["1.1.1 Non-text Content", "1.4.3 Contrast (Minimum)", "2.4.4 Link Purpose (In Context)"],
            correctOption: "1.1.1 Non-text Content",
            explanation: "Missing alt text for informative images is a direct failure of SC 1.1.1."
        },
        {
            id: "2",
            description: "A button has a light gray text on a white background, making it hard to read.",
            options: ["1.3.1 Info and Relationships", "1.4.3 Contrast (Minimum)", "4.1.2 Name, Role, Value"],
            correctOption: "1.4.3 Contrast (Minimum)",
            explanation: "Low text contrast is a failure of SC 1.4.3."
        }
    ];

    const treeNodes = [
        {
            id: "btn-1",
            html: '<button aria-label="Close menu">X</button>',
            role: "button",
            name: "Close menu",
            states: ["focusable"],
            description: "Using aria-label provides a clear name for the button in the accessibility tree, even when the visible text is just 'X'."
        },
        {
            id: "btn-2",
            html: '<button>X</button>',
            role: "button",
            name: "X",
            states: ["focusable"],
            description: "Without aria-label, the name is just 'X', which might not be clear to screen reader users."
        }
    ];

    return (
        <div className="container">
            <PageHeader 
                title="B: Recommending strategies and/or techniques for fixing issues" 
                lede="Explore how to choose the best remediation approach based on project constraints, feasibility, and impact."
            />

            <section className="overview-section" aria-labelledby="overview-title">
                <h2 id="overview-title">Overview</h2>
                <p>
                    Various techniques can be used to meet a Success Criterion when evaluating web content. 
                    The normative text of WCAG defines the requirement but does not prescribe a particular coding solution. 
                    WCAG provides techniques to meet Success Criteria (the “Sufficient Techniques”), which are only informative. 
                    Often, there are different ways to satisfy a particular Success Criterion.
                </p>
                <Callout 
                    title="Key Principle" 
                    text="The best solution is one that is feasible within the project's context while providing the most widely useful and sustainable accessibility outcome."
                />
            </section>

            <section className="study-tasks" aria-labelledby="tasks-title">
                <h2 id="tasks-title">Study Tasks</h2>
                <ul>
                    {studyTasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </section>

            <section className="learning-activities" aria-labelledby="activities-title">
                <h2 id="activities-title">Learning Activities</h2>
                
                <h3>Key Concepts Flashcards</h3>
                <FlashcardSet cards={flashcards} />

                <FixingVsRedesignActivity />

                <SuccessCriteriaMapper 
                    title="Activity: Map Issues to Success Criteria" 
                    scenarios={scMapperScenarios} 
                />

                <AccessibilityTreeDemo 
                    title="Demo: Remediation via ARIA"
                    intro="Compare how different coding strategies for the same element affect the Accessibility Tree."
                    nodes={treeNodes}
                />
            </section>

            <section className="practical-hints" aria-labelledby="hints-title">
                <h2 id="hints-title">Practical Hints for Better Accessibility</h2>
                <Example 
                    classNamePrefix="hints" 
                    label="Simple Win:" 
                    text="Always use semantic HTML first. A native <button> is more robust and accessible than a <div> with click handlers."
                />
                <Example 
                    classNamePrefix="hints" 
                    label="Communication:" 
                    text="When recommending fixes, always explain the *why* (impact on users) and the *how* (technical strategy) to stakeholders."
                />
            </section>
        </div>
    );
}

export default RecommendationOfStrategiesAndTechniquesForFixingIssues;