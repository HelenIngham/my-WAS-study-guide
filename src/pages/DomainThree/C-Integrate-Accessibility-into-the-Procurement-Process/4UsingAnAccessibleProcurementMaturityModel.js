import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ResourceLink from "../../../components/ResourceLink";
import MaturityModelLevelExplorer from "../../../components/MaturityModelLevelExplorer";
import "./4UsingAnAccessibleProcurementMaturityModel.css";

function UsingAnAccessibleProcurementMaturityModel() {
    const flashcards = [
        {
            front: "What is an Accessibility Maturity Model?",
            back: "A structured framework to assess an organization's current accessibility practices and measure progress over time."
        },
        {
            front: "What is PDAA?",
            back: "Policy Driven Adoption for Accessibility – an initiative by NASCIO to help organizations choose vendors meeting accessibility requirements."
        },
        {
            front: "What does the W3C maturity model procurement dimension cover?",
            back: "Assessments for sourcing, negotiation, and selection of goods/services by reviewing processes, criteria, and contract language."
        },
        {
            front: "How do maturity models help in procurement?",
            back: "By systematically considering accessibility in purchasing decisions and reducing the risk of acquiring inaccessible products."
        }
    ];

    const maturityLevels = [
        { 
            title: 'Level 1: Initial', 
            description: 'Accessibility activities are ad-hoc and reactive. There is no formal process or policy for including accessibility in procurement.' 
        },
        { 
            title: 'Level 2: Managed', 
            description: 'Some accessibility awareness exists. Procurement teams may ask for VPATs, but verification is inconsistent.' 
        },
        { 
            title: 'Level 3: Defined', 
            description: 'Accessibility is integrated into standard procurement procedures, including standard contract language and evaluation criteria.' 
        },
        { 
            title: 'Level 4: Predictable', 
            description: 'Organizations measure the effectiveness of their accessible procurement processes and actively monitor vendor compliance.' 
        },
        { 
            title: 'Level 5: Optimizing', 
            description: 'Continuous improvement of procurement processes. The organization partners with vendors to innovate in accessible solutions.' 
        }
    ];

    return (
        <div className="maturity-model-page container">
            <PageHeader 
                title="4 Using An Accessible Procurement Maturity Model" 
                lede="Maturity models are powerful tools for improving accessibility compliance, especially within procurement processes."
            />

            <section className="content-section">
                <p>
                    They provide organizations with a structured framework to assess their current accessibility practices and measure progress over time. 
                    By identifying key stages of accessibility maturity, from initial awareness to full integration, these models help organizations understand where they stand and what steps are necessary to advance. 
                    In procurement, applying a maturity model ensures that accessibility is systematically considered in purchasing decisions, reducing the risk of acquiring inaccessible products or services, and fostering long-term, sustainable accessibility improvements across the supply chain.
                </p>

                <h2>Free Publicly Available Maturity Models</h2>
                <p>There are two publicly available free maturity models that specifically address procurement:</p>
                <div className="model-list">
                    <div className="model-item">
                        <h3>1. Policy Driven Adoption for Accessibility (PDAA)</h3>
                        <p>
                            An initiative by the National Association of Chief Information Officers (NASCIO) that helps procurement organizations choose vendors who can meet accessibility requirements.
                        </p>
                    </div>
                    <div className="model-item">
                        <h3>2. W3C Accessibility Maturity Model (Procurement Dimension)</h3>
                        <p>
                            Includes assessments for sourcing, negotiation, and selection of goods and services by reviewing use of accessibility processes, criteria, contract language, and decision-making to procure and maintain accessible products and services throughout the procurement life cycles.
                        </p>
                    </div>
                </div>
            </section>

            <section className="activity-section">
                <MaturityModelLevelExplorer 
                    levels={maturityLevels}
                    title="Procurement Accessibility Maturity Levels"
                    instructions="Explore the five levels of maturity to understand how organizations evolve their accessible procurement practices."
                />
            </section>

            <section className="flashcard-section">
                <h2>Key Concepts</h2>
                <p>Test your knowledge of procurement maturity models with these flashcards.</p>
                <FlashcardSet cards={flashcards} />
            </section>

            <section className="resources-section">
                <h2>Resources</h2>
                <ul className="resource-list">
                    <li><ResourceLink href="https://www.itic.org/policy/accessibility/vpat" text="ITI ACR/VPAT templates" /></li>
                    <li><ResourceLink href="https://www.itic.org/policy/accessibility/vpat" text="ITI ACR/VPAT authoring training" /></li>
                    <li><ResourceLink href="https://www.w3.org/WAI/standards-guidelines/maturity-model/" text="W3C Accessibility Maturity Model, Procurement Dimension" /></li>
                </ul>
            </section>

            <Callout 
                title="Exam Takeaway" 
                text="Maturity models like PDAA and W3C's model help organizations move from ad-hoc accessibility efforts to a systematic, integrated approach in procurement, reducing long-term risk and ensuring sustainable compliance."
            />
        </div>
    );
}

export default UsingAnAccessibleProcurementMaturityModel;