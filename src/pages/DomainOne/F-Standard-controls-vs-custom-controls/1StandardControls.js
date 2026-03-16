import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import ChoiceChallenge from "../../../components/ChoiceChallenge";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import ExamTakeaway from "../../../components/ExamTakeaway";

function StandardControls() {
    const decisionScenarios = [
        {
            id: 1,
            situation: "You are building a basic shipping form with text inputs and a submit button.",
            optionA: { 
                label: "Use Standard HTML Form Elements", 
                isCorrect: true, 
                feedback: "Correct! Standard elements like <input> and <button> have built-in accessibility and work consistently across all platforms."
            },
            optionB: { 
                label: "Build Custom Form Components", 
                isCorrect: false, 
                feedback: "Incorrect. Custom components require significant extra work to match the native accessibility and consistency of standard HTML elements."
            }
        },
        {
            id: 2,
            situation: "A complex widget you need isn't available in standard HTML, and you want to ensure it works for screen readers.",
            optionA: { 
                label: "Use Standard Controls (Native First)", 
                isCorrect: true, 
                feedback: "Correct! Always prefer native elements. If a complex widget is truly necessary, only then should you look into ARIA, but native elements are the foundation."
            },
            optionB: { 
                label: "Create a Custom WAI-ARIA Widget", 
                isCorrect: false, 
                feedback: "While sometimes necessary for complex widgets, the 'Golden Rule' is to use native HTML widgets whenever possible because they provide robust, built-in support."
            }
        },
        {
            id: 3,
            situation: "You want to reduce development time and long-term maintenance costs for accessibility.",
            optionA: { 
                label: "Leverage Standard Controls", 
                isCorrect: true, 
                feedback: "Correct! Standard controls are pre-tested by platform providers and regularly updated to align with the latest standards, saving time and money."
            },
            optionB: { 
                label: "Implement Custom JS-based Controls", 
                isCorrect: false, 
                feedback: "Incorrect. Custom controls increase maintenance burden as they require manual updates and extensive testing to ensure ongoing compliance."
            }
        }
    ];

    const quizQuestions = [
        {
            id: 1,
            question: "Which of the following is a key benefit of using standard HTML form elements?",
            options: [
                "They require complex custom JavaScript for accessibility",
                "They are familiar to users and work consistently across different platforms",
                "They are harder for screen readers to interpret than custom controls",
                "They never meet WCAG success criteria"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "Standard controls help reduce maintenance burden because:",
            options: [
                "They are rarely updated by browsers",
                "They are regularly updated by platform providers to align with latest standards",
                "They don't support assistive technologies",
                "They are only compatible with one specific browser"
            ],
            correct: 1
        }
    ];

    return (
        <div className="container standard-controls-page">
            <PageHeader title="Standard Controls" />
            
            <section className="content-section">
                <p>
                    Standard controls are designed with accessibility in mind. They come with built-in support for 
                    assistive technologies (AT) like screen readers, voice recognition software, and keyboard 
                    navigation. This means that when you use standard controls, you’re leveraging a foundation 
                    that already meets many WCAG success criteria.
                </p>

                <Callout 
                    title="Case Study: E-commerce Shipping Form"
                    role="region"
                    ariaLabel="Case study on e-commerce shipping forms"
                >
                    <p>
                        Consider the case of an e-commerce website. If you’re building a form for users to enter 
                        their shipping information, using standard HTML form elements is usually the best choice. 
                        These controls are familiar to users and work consistently across different platforms and browsers. 
                        The accessibility support embedded in these controls ensures that all users, including those 
                        relying on assistive technologies, can interact with the form quickly and efficiently.
                    </p>
                </Callout>

                <p style={{ marginTop: '1.5rem' }}>
                    Additionally, standard controls save time and money. They reduce the need for extensive testing 
                    and validation because they have been pre-built and thoroughly tested by the platform providers. 
                    These controls are also regularly updated to align with the latest accessibility standards and 
                    practices, easing maintenance burden and ensuring long-term compliance.
                </p>
            </section>

            <section className="learning-activities">
                <h2 className="section-title">Test Your Knowledge</h2>
                <ChoiceChallenge 
                    title="Decision Challenge: Standard vs. Custom"
                    intro="Evaluate the best approach for these common development scenarios."
                    scenarios={decisionScenarios}
                />

                <MultipleChoiceQuiz 
                    questions={quizQuestions} 
                    title="Quick Quiz: Standard Controls"
                />
            </section>

            <ExamTakeaway title="Key Takeaway for the WAS Exam">
                <ul>
                    <li>Standard controls (native HTML) provide robust, built-in accessibility support.</li>
                    <li>They are more cost-effective and reliable than custom-built alternatives.</li>
                    <li>They ensure consistent behavior across different browsers and assistive technologies.</li>
                </ul>
            </ExamTakeaway>
        </div>
    );
}

export default StandardControls;