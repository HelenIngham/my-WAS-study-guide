import React from "react";
import PageHeader from "../../../components/PageHeader";
import Card from "../../../components/Card";
import CardList from "../../../components/CardList";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ProcurementProcessTimeline from "../../../components/ProcurementProcessTimeline";
import SuccessCriteriaMapper from "../../../components/SuccessCriteriaMapper";

function IntegrateAccessibilityIntoTheProcurementProcess() {
    const studyTasks = [
        "Understand how accessibility can be incorporated into the procurement process.",
        "Demonstrate an understanding of the different types of Accessibility Conformance Reports and how they should be interpreted.",
        "Identify how to mitigate accessibility issues raised during the procurement process."
    ];

    const flashcards = [
        {
            front: "What is an ACR?",
            back: "Accessibility Conformance Report. It is a document that explains how an ICT product or service meets accessibility standards like WCAG or Section 508."
        },
        {
            front: "What is a VPAT?",
            back: "Voluntary Product Accessibility Template. It is the template used to create an ACR."
        },
        {
            front: "Why is procurement a key time for accessibility?",
            back: "It is the point where organizations have the best chance to influence the accessibility of the products and services they acquire."
        },
        {
            front: "What should be done if a procured product has accessibility defects?",
            back: "Organizations should identify how to mitigate those issues, for example through contract clauses, roadmaps for fixes, or alternative workarounds."
        }
    ];

    const procurementStages = [
        {
            title: "Planning & Requirements",
            description: "Defining what the organization needs and the standards it must meet.",
            accessibilityTask: "Include specific accessibility requirements (e.g., WCAG 2.1 AA) in the solicitation documents."
        },
        {
            title: "Market Research & Solicitation",
            description: "Identifying potential vendors and inviting them to bid.",
            accessibilityTask: "Request an Accessibility Conformance Report (ACR) based on the VPAT from all vendors."
        },
        {
            title: "Evaluation & Selection",
            description: "Reviewing bids and testing products.",
            accessibilityTask: "Verify the ACR through expert review or hands-on testing with assistive technology."
        },
        {
            title: "Contracting",
            description: "Finalizing the agreement with the chosen vendor.",
            accessibilityTask: "Include accessibility 'hold harmless' clauses and a roadmap for fixing any identified defects."
        },
        {
            title: "Post-Award & Maintenance",
            description: "Ongoing management of the product or service.",
            accessibilityTask: "Monitor for accessibility regressions during updates and ensure the vendor meets their fix roadmap."
        }
    ];

    const quizScenarios = [
        {
            id: "vpata",
            description: "A vendor provides an ACR that claims 'Supports' for every single success criterion, but your quick manual test shows keyboard navigation is completely broken.",
            options: ["Trust the ACR", "Reject/Verify further", "Ignore it"],
            correctOption: "Reject/Verify further",
            explanation: "ACRs are 'voluntary' and self-reported. Discrepancies between the report and actual performance indicate the report may be inaccurate or based on a different version/configuration."
        },
        {
            id: "vpatb",
            description: "The vendor provides an ACR that is 5 years old and refers to WCAG 2.0, but your requirement is WCAG 2.1.",
            options: ["Accept it", "Request updated ACR", "It doesn't matter"],
            correctOption: "Request updated ACR",
            explanation: "Accessibility status changes as products are updated. An old ACR likely doesn't reflect the current state of the product or the newer standards."
        }
    ];

    return (
        <div className="container">
            <PageHeader 
                title="C: Integrate Accessibility into the Procurement Process"
                lede="Like security and privacy, accessibility is a key consideration during the procurement process. It is at this point that organisations have the best chance to influence how accessible their ICT products and services will be to end users."
            />

            <section className="section">
                <Card title="Study Tasks" classNamePrefix="procurement">
                    <CardList classNamePrefix="procurement">
                        {studyTasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </CardList>
                </Card>
            </section>

            <section className="section">
                <h2>Overview</h2>
                <p>
                    Integrating accessibility into procurement ensures that an organization does not 'buy' accessibility debt. 
                    By evaluating products before they are purchased, organizations can save costs on retrofitting and avoid 
                    legal risks or exclusion of employees and customers with disabilities.
                </p>
                <Callout 
                    title="Key Insight" 
                    text="Procurement is the 'shift-left' of organizational accessibility. The earlier you catch issues, the easier they are to manage."
                />
            </section>

            <section className="section">
                <h2>The Procurement Lifecycle</h2>
                <ProcurementProcessTimeline stages={procurementStages} />
            </section>

            <section className="section">
                <h2>Key Terms Practice</h2>
                <FlashcardSet cards={flashcards} />
            </section>

            <section className="section">
                <SuccessCriteriaMapper 
                    title="Procurement Decision Challenge" 
                    scenarios={quizScenarios} 
                />
            </section>
        </div>
    );
}

export default IntegrateAccessibilityIntoTheProcurementProcess;