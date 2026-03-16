import React from "react";
import RoleResponsibilityActivity from "../../../components/RoleResponsibilityActivity";
import LifecycleTaskExplorer from "../../../components/LifecycleTaskExplorer";
import ComparisonTable from "../../../components/ComparisonTable";
import FlashcardSet from "../../../components/FlashcardSet";
import Callout from "../../../components/Callout";

function PlanningManagingAndImplementingAccessibility() {
    const roles = [
        {
            id: 'mgmt',
            name: 'Management',
            description: 'Sets the conditions for sustainable accessibility implementation.',
            correctResponsibilities: ['res_budget', 'policy_goals']
        },
        {
            id: 'pm',
            name: 'Project Managers',
            description: 'Oversees the product lifecycle and ensures accessibility integration.',
            correctResponsibilities: ['workflow_integration']
        },
        {
            id: 'design',
            name: 'Designers & UX',
            description: 'Address all user needs in design decisions.',
            correctResponsibilities: ['ux_ia', 'user_needs']
        },
        {
            id: 'dev',
            name: 'Developers',
            description: 'Implement technical accessibility requirements.',
            correctResponsibilities: ['code_compliance']
        },
        {
            id: 'qa',
            name: 'Quality Assurance',
            description: 'Test markup and content for accessibility.',
            correctResponsibilities: ['test_bugs']
        },
        {
            id: 'content',
            name: 'Content Creators',
            description: 'Produce accessible structured content and alternatives.',
            correctResponsibilities: ['alt_text', 'headings']
        }
    ];

    const allResponsibilities = [
        { id: 'res_budget', text: 'Provide necessary resources and budgets' },
        { id: 'policy_goals', text: 'Define accessibility goals and policies' },
        { id: 'workflow_integration', text: 'Ensure accessibility is an integral part of the workflow' },
        { id: 'ux_ia', text: 'Implement accessibility in Information Architecture (IA)' },
        { id: 'user_needs', text: 'Address needs of people with disabilities in design' },
        { id: 'code_compliance', text: 'Ensure code meets accessibility requirements' },
        { id: 'test_bugs', text: 'Test using automated and manual methods' },
        { id: 'alt_text', text: 'Provide alternatives for images and multimedia' },
        { id: 'headings', text: 'Create descriptive headings, links, and labels' }
    ];

    const lifecyclePhases = [
        {
            id: 'plan',
            title: 'Plan',
            description: 'Consider accessibility from the very beginning of the project.',
            tasks: [
                'Include people with disabilities in research.',
                'Document goals and define conformance in "Definition of Done".',
                'Assign responsibilities to individuals.',
                'Determine budget and resources.',
                'Ensure team access to expertise and training.',
                'Review environment (guidelines, libraries, QA checks).'
            ]
        },
        {
            id: 'create',
            title: 'Create',
            description: 'Implementation of accessibility during the design and development stages.',
            tasks: [
                'Implement accessibility in IA and UX.',
                'Address all user needs in design decisions.',
                'Ensure code meets accessibility requirements.',
                'Produce accessible content (structure, alt text, headings, labels).'
            ]
        },
        {
            id: 'test',
            title: 'Test',
            description: 'Continuous evaluation throughout the iterative development process.',
            tasks: [
                'Test markup and content by QA and auditors.',
                'Use both automated and manual testing.',
                'Follow intended standards throughout iteration.',
                'Use standard report structure for findings.',
                'Ensure bugs are fixed and reviewed.',
                'Track and communicate progress.'
            ]
        }
    ];

    const agileVsWaterfallHeaders = ['Approach', 'Characteristics', 'Impact on Accessibility'];
    const agileVsWaterfallRows = [
        {
            rowHeader: 'Agile',
            data: [
                'Iterative process, accessibility integrated into every step.',
                'Early and frequent testing; accessibility is part of the workflow.',
                'Higher quality, sustainable implementation, easier to fix issues early.'
            ]
        },
        {
            rowHeader: 'Waterfall',
            data: [
                'Linear, sequential phases.',
                'Testing performed only at the end of the development process.',
                'Pressure often leads to omitted tests; late fixes are more expensive and difficult.'
            ]
        }
    ];

    const flashcards = [
        {
            front: 'What is the "Definition of Done" in an accessible project?',
            back: 'It should explicitly include defined conformance to accessibility standards.'
        },
        {
            front: 'Who is responsible for accessibility in a project?',
            back: 'Everyone involved, from management and project managers to designers, developers, and QA.'
        },
        {
            front: 'Why is testing at the end (Waterfall) problematic?',
            back: 'It involves more work, is more expensive, and tests may be omitted due to time pressure.'
        },
        {
            front: 'What should management provide for sustainable accessibility?',
            back: 'Resources, budgets, training, policies, and clear job descriptions including accessibility.'
        }
    ];

    return (
        <div className="container">
            <h1>1 Planning, Managing, and Implementing Accessibility</h1>

            <section>
                <h2>1.1 Responsibilities and Organizational Approaches</h2>
                <p>
                    Everyone involved in a project, from top management to project managers, designers, UX specialists, developers, and quality assurance, has some role in delivering an accessible product. Management should set the conditions for a sustainable accessibility implementation. It has to provide the necessary resources and budgets, possibly organise awareness events, ensure know-how through training, include accessibility in job descriptions, and define goals and policies.
                </p>
                <Callout 
                    title="Key Takeaway" 
                    text="Having an accessibility expert on the team can be helpful, but the requirements need to be shared across the team. Every member of the team has a role to play."
                />

                <RoleResponsibilityActivity 
                    roles={roles} 
                    allResponsibilities={allResponsibilities} 
                />
            </section>

            <section>
                <h2>1.2 Web Development Process</h2>
                <p>
                    An agile approach to accessibility requires a fundamental understanding of all team members and the acceptance of accessibility as an integral part of the workflow. Accessibility should be integrated into every step of the product lifecycle.
                </p>

                <LifecycleTaskExplorer phases={lifecyclePhases} />

                <h3>Development Approaches Comparison</h3>
                <ComparisonTable 
                    headers={agileVsWaterfallHeaders}
                    rows={agileVsWaterfallRows}
                />
            </section>

            <section>
                <h2>Knowledge Check</h2>
                <FlashcardSet cards={flashcards} />
            </section>

            <section>
                <h2>Summary of Tasks</h2>
                <p>
                    Regardless of the specific team structure, the product life cycle can include concept, requirements, design, prototyping, development, quality assurance, user testing, support, and regression testing. Each person’s role in the product life cycle should include some aspect of accessibility.
                </p>
            </section>
        </div>
    );
}

export default PlanningManagingAndImplementingAccessibility;