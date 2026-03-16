import React from "react";
import Card from "../../../components/Card";
import CardList from "../../../components/CardList";
import FlashcardSet from "../../../components/FlashcardSet";
import RoleTaskMap from "../../../components/RoleTaskMap";

function RoleOfAccessibilityExperts() {
    const flashcards = [
        { front: "EN 301 549", back: "The European standard for digital accessibility requirements in public procurement of ICT products and services." },
        { front: "ACR", back: "Accessibility Conformance Report - A document that explains how an ICT product or service meets accessibility standards, typically based on a VPAT." },
        { front: "VPAT", back: "Voluntary Product Accessibility Template - A template used to create ACRs, documenting a product's conformance with accessibility standards like Section 508 or WCAG." },
        { front: "RFP", back: "Request for Proposal - A document that solicits proposals, often through a bidding process, by an agency or company interested in procurement." }
    ];

    const taskMapping = {
        categories: [
            { id: 'purchaser', label: 'Purchaser Support' },
            { id: 'vendor', label: 'Vendor Support' }
        ],
        tasks: [
            { id: '1', text: 'Guidance on good governance practices', correctCategory: 'purchaser' },
            { id: '2', text: 'Advice on ICT procurement standards (e.g., EN 301 549)', correctCategory: 'purchaser' },
            { id: '3', text: 'Evaluations of ACRs and VPATs', correctCategory: 'purchaser' },
            { id: '4', text: 'Audit existing systems for compliance', correctCategory: 'vendor' },
            { id: '5', text: 'Create Accessibility Conformance Reports', correctCategory: 'vendor' },
            { id: '6', text: 'Suggested contract wording regarding accessibility', correctCategory: 'purchaser' },
            { id: '7', text: 'Remedy defects identified during testing', correctCategory: 'vendor' },
            { id: '8', text: 'Respond to tender questions regarding accessibility', correctCategory: 'vendor' }
        ]
    };

    return (
        <div className="container">
            <h1>1 Role Of Accessibility Experts</h1>
            
            <p>
                Accessibility experts play a critical role in the procurement process, bridging the gap between technical requirements and organizational goals. They provide specialized knowledge to both the purchasing organization and the vendors providing the products or services.
            </p>

            <div className="grid-container">
                <Card title="Support for Purchasers" classNamePrefix="expert-role">
                    <p>Accessibility experts provide purchasers with:</p>
                    <CardList>
                        <li><strong>Guidance on good governance practices:</strong> Establishing policies and procedures for accessible procurement.</li>
                        <li><strong>Advice on ICT procurement standards:</strong> Ensuring compliance with standards like EN 301 549.</li>
                        <li><strong>Tender documentation:</strong> Providing suitable questions for inclusion in tender documents and Requests for Proposal (RFP).</li>
                        <li><strong>Evaluations:</strong> Reviewing tender responses, Accessibility Conformance Reports (ACRs), and Voluntary Product Accessibility Templates (VPATS).</li>
                        <li><strong>Testing:</strong> Independent verification of product accessibility claims.</li>
                        <li><strong>Contract Wording:</strong> Suggesting specific accessibility requirements for legal agreements.</li>
                        <li><strong>Vendor Management:</strong> Assisting with defect remediation plans and accessibility roadmaps.</li>
                    </CardList>
                </Card>

                <Card title="Support for Vendors" classNamePrefix="expert-role">
                    <p>Accessibility experts also assist vendors to:</p>
                    <CardList>
                        <li><strong>Audit existing systems:</strong> Identifying accessibility gaps in current product offerings.</li>
                        <li><strong>Remedy defects:</strong> Providing technical guidance on how to fix accessibility issues.</li>
                        <li><strong>Create Documentation:</strong> Developing accurate Accessibility Conformance Reports (ACRs).</li>
                        <li><strong>Tender Responses:</strong> Helping vendors respond accurately and thoroughly to accessibility questions in RFPs.</li>
                    </CardList>
                </Card>
            </div>

            <section className="learning-activities">
                <h2>Learning Activities</h2>
                
                <Card title="Flashcards: Key Procurement Terms" classNamePrefix="learning">
                    <FlashcardSet cards={flashcards} />
                </Card>

                <RoleTaskMap 
                    tasks={taskMapping.tasks} 
                    categories={taskMapping.categories} 
                    title="Activity: Distinguishing Expert Roles"
                />
            </section>

            <section className="exam-tips" style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fff3cd', border: '1px solid #ffeeba', borderRadius: '4px' }}>
                <h3>Exam Tip: The Dual Role</h3>
                <p>
                    Remember that accessibility experts are not just "checkers" for the purchaser. Their value lies in their ability to facilitate a better outcome by supporting both sides of the procurement relationship—helping purchasers ask the right questions and helping vendors provide better, more accessible solutions.
                </p>
            </section>
        </div>
    );
}

export default RoleOfAccessibilityExperts;