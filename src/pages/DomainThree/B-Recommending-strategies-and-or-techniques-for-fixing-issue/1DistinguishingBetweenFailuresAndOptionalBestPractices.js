import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ConformanceVsBestPracticeActivity from "../../../components/ConformanceVsBestPracticeActivity";
import AccessibilityTreeDemo from "../../../components/AccessibilityTreeDemo";

function DistinguishingBetweenFailuresAndOptionalBestPractices() {
    const flashcards = [
        {
            front: "Conformance Failure",
            back: "A deficiency that clearly maps to documented WCAG Failures or fails to satisfy a normative success criterion."
        },
        {
            front: "Best Practice",
            back: "A recommendation that goes beyond minimal conformance to improve usability and accessibility for end users."
        },
        {
            front: "Normative Requirement",
            back: "The mandatory part of a standard (like WCAG Success Criteria) that must be met for conformance."
        },
        {
            front: "Informative Supporting Documents",
            back: "Resources like 'Understanding WCAG', 'Techniques', and 'ARIA Authoring Practices' that help determine if an issue is a failure or a best practice."
        }
    ];

    const treeNodes = [
        {
            id: "failure-1",
            html: '<div role="button">Click me</div>',
            role: "button",
            name: "Click me",
            states: [],
            description: "A normative failure: A div with role='button' is not focusable by default and doesn't handle keyboard events. It fails 2.1.1 Keyboard."
        },
        {
            id: "best-practice-1",
            html: '<button>Click me</button>',
            role: "button",
            name: "Click me",
            states: ["focusable"],
            description: "Best practice: Using a native <button> provides built-in focus management and keyboard interaction, meeting conformance and ensuring best practice."
        }
    ];

    return (
        <div className="container">
            <PageHeader 
                title="1. Distinguishing between Failures and Optional Best Practices" 
                lede="Understand and communicate the difference between meeting the bare minimum requirements and providing a truly usable experience."
            />

            <section className="overview-section" aria-labelledby="overview-title">
                <h2 id="overview-title">Overview</h2>
                <p>
                    It is important for an accessibility tester or auditor to understand—and communicate—the difference between conformance and best practices. 
                    A conformance test should flag a conformance failure only when deficiencies clearly map on documented WCAG Failures or in other ways clearly fail to satisfy the normative success criterion. 
                    The underlying deficiency should be clearly described.
                </p>
                <p>
                    A website that minimally conforms to a standard requirement can still be difficult to use. 
                    Beyond normative failures, a good auditor should be able to recognise deficiencies that are not strictly failures and recommend a better practice to achieve a more usable end result.
                </p>
                <Callout 
                    title="Auditor's Role" 
                    text="While they do not provide examples for all scenarios, supporting WCAG documents such as the Understanding texts, the Techniques, and the ARIA Authoring Practices Guidelines can be referred to and consulted to determine whether an issue counts as a normative failure or should be considered not best practice."
                />
            </section>

            <section className="learning-activities" aria-labelledby="activities-title">
                <h2 id="activities-title">Learning Activities</h2>
                
                <h3>Key Terms Flashcards</h3>
                <FlashcardSet cards={flashcards} />

                <ConformanceVsBestPracticeActivity />

                <AccessibilityTreeDemo 
                    title="Demo: Conformance vs. Best Practice in the Tree"
                    intro="See how different implementations of a button affect the accessibility tree and meet (or fail) requirements."
                    nodes={treeNodes}
                />
            </section>
        </div>
    );
}

export default DistinguishingBetweenFailuresAndOptionalBestPractices;