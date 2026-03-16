import React from "react";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import DisabilityImpactSimulator from "../../../components/DisabilityImpactSimulator";
import Callout from "../../../components/Callout";
import ResourceLink from "../../../components/ResourceLink";

function TestingForEndUserImpact() {
    const studyTasks = [
        "Understand the value of user testing by users with a variety of types of disabilities.",
        "Think through the consequences of certain types of accessibility flaws. Some flaws are more damaging than others are.",
        "Consider the usability of the design, not just the accessibility or conformance to the specifications. For further information, go to: W3C’s Involving Users in Evaluating Web Accessibility."
    ];

    const flashcards = [
        {
            front: "Why is user testing with people with disabilities valuable?",
            back: "It identifies usability issues that automated tools and expert reviews might miss, ensuring the product is effective and satisfactory for real users."
        },
        {
            front: "Do accessibility standards cover all user needs?",
            back: "No. Standards move slowly and may not cover new technologies or all cognitive accessibility needs. User involvement helps bridge this gap."
        },
        {
            front: "How diverse is the community of people with disabilities?",
            back: "Extremely diverse. Even within one category (e.g., low vision), needs vary based on assistive tech expertise and length of time with the disability."
        },
        {
            front: "What is the difference between technical accessibility and usability?",
            back: "Technical accessibility is meeting standards (e.g., WCAG). Usability is how easily and effectively a user can actually complete a task."
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "According to the text, why might a technically accessible page still have poor usability?",
            options: [
                "Because it doesn't follow WCAG standards at all.",
                "Because it might have too many tab stops or verbose alt text, even if it meets technical requirements.",
                "Because automated tools cannot detect all WCAG failures.",
                "Because users with disabilities don't use standard browsers."
            ],
            correct: 1
        },
        {
            id: 2,
            question: "Which of the following is true about cognitive accessibility?",
            options: [
                "It is fully covered by mandatory WCAG Success Criteria.",
                "It only benefits users with permanent cognitive disabilities.",
                "It includes techniques like simple layout and clear language, which also promote usability for all.",
                "It is not recommended to follow supplemental guidance on cognitive issues."
            ],
            correct: 2
        },
        {
            id: 3,
            question: "When should people with disabilities be involved in the design process?",
            options: [
                "Only during the final testing phase.",
                "Only when a bug is reported by a real user.",
                "Ideally already in the requirements and early development stages.",
                "Only if the product is specifically for people with disabilities."
            ],
            correct: 2
        }
    ];

    return (
        <div className="container">
            <h1>G: Testing for End-User Impact</h1>
            
            <section className="study-tasks" aria-labelledby="study-tasks-title">
                <h2 id="study-tasks-title">Study Tasks</h2>
                <ul>
                    {studyTasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </section>

            <section className="overview" aria-labelledby="overview-title">
                <h2 id="overview-title">Overview</h2>
                <p>
                    The WCAG Success Criteria are intended to support different user groups. They are written as testable statements to allow for the verification of conformance against the standard. This is particularly important regarding compliance with legislation based on standards like WCAG and EN 301 549.
                </p>
                <p>
                    Accessibility requirements focus primarily on technical accessibility but also include some usability aspects. While their primary aim is improving digital accessibility for people with disabilities, they also benefit other users, such as people who experience poor lighting conditions, use mobile devices or have temporary limitations or impairments.
                </p>
            </section>

            <Callout 
                title="Standards vs. Real-World Experience"
                text="While standards help measure accessibility in a structured way, they do not cover all potential solutions or catch up immediately with technological advances. Good accessibility techniques can emerge before they are formally documented as WCAG Techniques."
            />

            <section className="usability-vs-accessibility" aria-labelledby="usability-title">
                <h2 id="usability-title">Usability vs. Technical Accessibility</h2>
                <p>
                    Even if a webpage can be accessed with assistive technologies and meets accessibility standards, it may not be usable for end-users with disabilities.
                </p>
                <ul>
                    <li><strong>Example 1:</strong> A navigation menu may be keyboard-operable but contain dozens of tab stops, making the experience exhausting for keyboard users.</li>
                    <li><strong>Example 2:</strong> Alternative texts for images that are too verbose can disrupt the experience for screen reader users who cannot 'skim' them like standard text.</li>
                </ul>
                <p>
                    <strong>Cognitive Accessibility:</strong> Many best practices for cognitive disabilities (simple layout, consistent design, clear language) are not strictly required by WCAG but are essential for usability and benefit everyone.
                </p>
            </section>

            <DisabilityImpactSimulator />

            <section className="user-involvement" aria-labelledby="user-inv-title">
                <h2 id="user-inv-title">Involving Users with Disabilities</h2>
                <p>
                    Usability testing with persons with disabilities is highly recommended. Ideally, they should be involved early in the requirements and development stages (task analyses, design walkthroughs, prototypes).
                </p>
                <p>
                    <strong>Diversity:</strong> People with disabilities are as diverse as any other group. Input from one person cannot be applied to all. Factors like the duration of the disability and assistive technology expertise significantly impact the user experience.
                </p>
                <Callout 
                    title="Best Practice"
                    text="The most effective way to implement accessibility is to combine standards-based testing with direct user involvement."
                />
            </section>

            <section className="learning-activities" aria-labelledby="activities-title">
                <h2 id="activities-title">Learning Activities</h2>
                
                <div className="activity-group">
                    <h3>Flashcards: User Testing & Impact</h3>
                    <FlashcardSet cards={flashcards} />
                </div>

                <MultipleChoiceQuiz 
                    title="Knowledge Check: Testing for End-User Impact"
                    questions={quizQuestions}
                />
            </section>

            <section className="resources" aria-labelledby="resources-title">
                <h2 id="resources-title">Resources</h2>
                <ResourceLink 
                    url="https://www.w3.org/WAI/test-evaluate/involving-users/"
                    linkText="W3C’s Involving Users in Evaluating Web Accessibility"
                />
            </section>
        </div>
    );
}

export default TestingForEndUserImpact;