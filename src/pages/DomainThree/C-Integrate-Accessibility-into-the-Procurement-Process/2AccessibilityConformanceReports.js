import React from "react";
import FlashcardSet from "../../../components/FlashcardSet";
import ACRConformancePicker from "../../../components/ACRConformancePicker";
import Callout from "../../../components/Callout";
import CardList from "../../../components/CardList";
import Card from "../../../components/Card";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";

function AccessibilityConformanceReports() {
    const flashcards = [
        {
            front: "What is an ACR?",
            back: "An Accessibility Conformance Report (ACR) is a reporting format that assists buyers and vendors to identify accessibility features in ICT products and services."
        },
        {
            front: "What is a VPAT?",
            back: "A Voluntary Product Accessibility Template (VPAT) is the template produced by the ITI that vendors use to create an ACR."
        },
        {
            front: "Who should ideally create an ACR?",
            back: "An independent accessibility professional, rather than producing it in-house."
        }
    ];

    const vpatFormats = [
        {
            title: "VPAT 2.4 Rev 508",
            description: "The U.S. Section 508 accessibility standard."
        },
        {
            title: "VPAT 2.4 Rev EU",
            description: "The EN 301 549 version (European Standard)."
        },
        {
            title: "VPAT 2.4 Rev WCAG",
            description: "The WCAG 2.1 version."
        },
        {
            title: "VPAT 2.4 INT",
            description: "Incorporating Section 508, EN 301 549, and WCAG 2.1."
        }
    ];

    const conformanceScenarios = [
        {
            id: "s1",
            context: "A screen reader user can navigate all forms and buttons on the website without encountering any errors or missing labels.",
            targetLevel: "Supports",
            rationale: "The product's functionality meets the criterion without known defects."
        },
        {
            id: "s2",
            context: "The video player has captions for most videos, but some older legacy content still lacks synchronized captions.",
            targetLevel: "Partially Supports",
            rationale: "Some functionality of the product does not meet the criterion."
        },
        {
            id: "s3",
            context: "A mobile application does not have any support for high contrast mode or text resizing, making it unusable for users with low vision.",
            targetLevel: "Does Not Support",
            rationale: "The majority of product functionality does not meet the criterion."
        },
        {
            id: "s4",
            context: "A hardware scanner product is being evaluated against WCAG software-only success criteria that don't apply to the physical device buttons.",
            targetLevel: "Not Applicable",
            rationale: "The criterion is not relevant to the product."
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "Which VPAT format incorporates Section 508, EN 301 549, and WCAG 2.1?",
            options: ["VPAT 2.4 Rev 508", "VPAT 2.4 Rev EU", "VPAT 2.4 Rev WCAG", "VPAT 2.4 INT"],
            correct: 3
        },
        {
            id: 2,
            question: "What does 'Partially Supports' mean in an ACR?",
            options: [
                "The product meets the criterion without known defects.",
                "Some functionality of the product does not meet the criterion.",
                "The majority of product functionality does not meet the criterion.",
                "The criterion is not relevant to the product."
            ],
            correct: 1
        }
    ];

    return (
        <div className="container">
            <h1>Accessibility Conformance Reports</h1>
            
            <section className="intro">
                <p>
                    An Accessibility Conformance Report (ACR), is a reporting format that assists buyers and vendors to identify accessibility features in ICT products and services. 
                    ACRs are based on the Voluntary Product Accessibility Template (VPAT) produced by the Information Technology Industry (ITI).
                </p>
                <Callout 
                    title="ACR vs. VPAT" 
                    text="When a vendor offers a VPAT document, what they are technically providing is the ACR; the two terms are often used interchangeably."
                />
            </section>

            <section className="vpat-formats">
                <h2>VPAT Formats</h2>
                <p>There are several VPAT formats depending on the required standard:</p>
                <CardList>
                    {vpatFormats.map((format, index) => (
                        <Card key={index} title={format.title}>
                            <p>{format.description}</p>
                        </Card>
                    ))}
                </CardList>
            </section>

            <section className="conformance-levels">
                <h2>Conformance Levels</h2>
                <p>Accessibility Conformance Reports are made up of a set of criteria, their conformance level, and relevant remarks. The conformance levels are:</p>
                <ul>
                    <li><strong>Supports:</strong> The product's functionality has at least one method that meets the criterion without known defects or with equivalent facilitation.</li>
                    <li><strong>Partially Supports:</strong> Some functionality of the product does not meet the criterion.</li>
                    <li><strong>Does Not Support:</strong> The majority of product functionality does not meet the criterion.</li>
                    <li><strong>Not Applicable:</strong> The criterion is not relevant to the product.</li>
                </ul>
            </section>

            <section className="independent-review">
                <Callout 
                    title="Independent Review"
                    text="It is preferable that vendors use an independent accessibility professional to create their ACR, rather than producing it in-house."
                />
                <p>
                    Ideally, every criterion will be “supported” in the Reporting Table, but in practice, very few products will fully support every single WCAG or other criteria. 
                    If a criterion is partially supported or not supported, this provides you with helpful information about what areas to pay attention to during product reviews.
                </p>
            </section>

            <section className="flashcards-section">
                <h2>Key Terminology Review</h2>
                <FlashcardSet cards={flashcards} />
            </section>

            <section className="activity-section">
                <ACRConformancePicker 
                    scenarios={conformanceScenarios} 
                    title="Activity: Identify Conformance Levels" 
                />
            </section>

            <section className="quiz-section">
                <MultipleChoiceQuiz 
                    questions={quizQuestions} 
                    title="ACR Quick Quiz" 
                    isAccordion={false}
                />
            </section>
        </div>
    );
}

export default AccessibilityConformanceReports;