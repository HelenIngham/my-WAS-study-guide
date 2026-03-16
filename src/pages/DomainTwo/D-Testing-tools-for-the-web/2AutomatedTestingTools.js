import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ComparisonTable from "../../../components/ComparisonTable";
import StepOrderingExercise from "../../../components/StepOrderingExercise";
import ResourceLink from "../../../components/ResourceLink";
import RoleResponsibilityActivity from "../../../components/RoleResponsibilityActivity";

function AccessibilityQualityAssurance() {
    const flashcards = [
        {
            front: "What are the three tasks in the process of developing a new site or feature for accessibility?",
            back: "Plan - Create - Test (P.C.T)."
        },
        {
            front: "Who should be part of all development stages to ensure product quality and usability?",
            back: "Accessibility experts and people with disabilities."
        },
        {
            front: "What is the main benefit of 'shifting left' (designing with accessibility in mind)?",
            back: "It is more efficient and cost-effective than remediation (fixing issues after development)."
        },
        {
            front: "How does the approach to accessibility QA differ between Agile and Waterfall?",
            back: "In Waterfall, accessibility is often checked at the end (testing phase). In Agile, it should be integrated into every sprint and user story."
        }
    ];

    const managementMethodologyRows = [
        {
            rowHeader: "Waterfall",
            data: [
                "Linear and sequential phases.",
                "Accessibility often treated as a final 'gating' step during the QA phase.",
                "High risk of late-stage remediation which is costly and time-consuming."
            ]
        },
        {
            rowHeader: "Agile",
            data: [
                "Iterative and incremental development (Sprints).",
                "Accessibility integrated into 'Definition of Done' and every user story.",
                "Continuous feedback and testing allow for early identification and fixing of issues."
            ]
        }
    ];

    const disciplineComparisonRows = [
        {
            rowHeader: "Accessibility",
            data: [
                "Focuses on technical requirements and standards (e.g., WCAG) to ensure access for people with disabilities.",
                "Often viewed through a lens of compliance and 'can it be used' by everyone.",
                "Primary focus on assistive technology compatibility and keyboard access."
            ]
        },
        {
            rowHeader: "User Experience (UX)",
            data: [
                "Focuses on the overall feeling, efficiency, and satisfaction of the user.",
                "Often assumes a 'typical' user profile unless inclusive design is practiced.",
                "Primary focus on task completion, delight, and intuitive navigation."
            ]
        }
    ];

    const lifeCycleSteps = [
        { id: "concept", label: "Concept & Requirements", correctOrder: 1 },
        { id: "design", label: "Design & Prototyping", correctOrder: 2 },
        { id: "dev", label: "Development", correctOrder: 3 },
        { id: "qa", label: "Quality Assurance (QA)", correctOrder: 4 },
        { id: "testing", label: "User Testing", correctOrder: 5 },
        { id: "support", label: "Support & Regression Testing", correctOrder: 6 }
    ];

    const roles = [
        { 
            id: 'pm', 
            name: 'Project Manager', 
            description: 'Responsible for project scope, timeline, and resources.',
            correctResponsibilities: ['planning']
        },
        { 
            id: 'designer', 
            name: 'UX/UI Designer', 
            description: 'Creates visual layouts and interaction models.',
            correctResponsibilities: ['design']
        },
        { 
            id: 'dev', 
            name: 'Developer', 
            description: 'Writes the code and implements functionality.',
            correctResponsibilities: ['implementation']
        },
        { 
            id: 'qa', 
            name: 'QA Tester', 
            description: 'Verifies that the product meets requirements and standards.',
            correctResponsibilities: ['verification']
        },
        { 
            id: 'content', 
            name: 'Content Creator', 
            description: 'Writes copy and provides media assets.',
            correctResponsibilities: ['content_creation']
        }
    ];

    const allResponsibilities = [
        { id: 'planning', text: 'Include accessibility in requirements, budget, and project roadmap.' },
        { id: 'design', text: 'Ensure sufficient contrast, logical layout, and clear focus indicators.' },
        { id: 'implementation', text: 'Write semantic HTML, use ARIA correctly, and ensure keyboard support.' },
        { id: 'verification', text: 'Perform automated scans, manual audits, and screen reader testing.' },
        { id: 'content_creation', text: 'Write descriptive alt text, captions, and structured headings.' }
    ];

    return (
        <div className="container">
            <PageHeader 
                title="Accessibility Quality Assurance" 
                lede="Assuring the quality of accessibility throughout the development life cycle and understanding the roles involved."
            />

            <section aria-labelledby="overview-heading">
                <h2 id="overview-heading">Overview: Plan - Create - Test (P.C.T)</h2>
                <Callout 
                    title="The P.C.T Cycle"
                    text="Plan - Create - Test. These are the three tasks to cycle through during the process of developing a new site/design, new feature, or remediation of a site. Accessibility experts and people with disabilities should be part of all these stages to ensure the quality and usability of the product."
                />
                <p>
                    Integrating accessibility across the entire product life cycle is essential for creating inclusive digital experiences. 
                    Designing with accessibility in mind from the start (the "shift-left" approach) is far more efficient than 
                    attempting to fix issues (remediation) after development is complete.
                </p>
            </section>

            <section aria-labelledby="methodologies-heading">
                <h2 id="methodologies-heading">Agile vs. Waterfall Methodologies</h2>
                <p>
                    Different project management methodologies approach accessibility quality assurance in unique ways. 
                    Comparing these help identify where accessibility can be most effectively integrated.
                </p>
                <ComparisonTable 
                    headers={["Methodology", "Characteristics", "Accessibility Approach", "Risks"]}
                    rows={managementMethodologyRows}
                />
            </section>

            <section aria-labelledby="ux-acc-heading">
                <h2 id="ux-acc-heading">UX vs. Accessibility</h2>
                <p>
                    While accessibility and user experience (UX) overlap significantly, they represent different disciplines with distinct assumptions. 
                    True inclusive design happens at the intersection of both.
                </p>
                <ComparisonTable 
                    headers={["Discipline", "Focus", "Common Assumption", "Primary Goal"]}
                    rows={disciplineComparisonRows}
                />
            </section>

            <section aria-labelledby="lifecycle-heading">
                <h2 id="lifecycle-heading">The Product Life Cycle</h2>
                <p>
                    Accessibility must be integrated into every phase of the product life cycle to be successful. 
                    Practice the logical order of these phases below.
                </p>
                <StepOrderingExercise 
                    steps={lifeCycleSteps}
                    title="Order the Product Life Cycle Phases"
                    intro="Place the following phases in their logical order of execution for a typical project."
                />
            </section>

            <section aria-labelledby="roles-heading">
                <h2 id="roles-heading">Roles and Responsibilities</h2>
                <p>
                    Accessibility is not just the responsibility of one person; it's a team effort. 
                    Every role in the product life cycle has a specific contribution to make.
                </p>
                <RoleResponsibilityActivity 
                    roles={roles}
                    allResponsibilities={allResponsibilities}
                />
            </section>

            <section aria-labelledby="flashcards-heading">
                <h2 id="flashcards-heading">Flashcards: Key Concepts</h2>
                <FlashcardSet cards={flashcards} />
            </section>

            <section className="resources" aria-labelledby="resources-heading">
                <h2 id="resources-heading">Resources</h2>
                <ResourceLink 
                    href="https://www.w3.org/WAI/planning/" 
                    text="Planning and Managing Web Accessibility, W3C" 
                />
                <ResourceLink 
                    href="https://www.w3.org/WAI/planning/integrating/" 
                    text="Integrating Accessibility into Your Development Process, W3C" 
                />
                <p>
                    <em>Note: Refer to "Integrating accessibility across the agile and waterfall development lifecycle" by Irfan Ali (2018) for deeper methodology analysis.</em>
                </p>
            </section>
        </div>
    );
}

export default AccessibilityQualityAssurance;