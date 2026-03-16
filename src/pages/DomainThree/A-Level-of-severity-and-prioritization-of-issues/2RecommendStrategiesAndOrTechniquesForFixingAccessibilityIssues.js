import React from "react";
import PageHeader from "../../../components/PageHeader";
import Card from "../../../components/Card";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import RemediationStrategyPicker from "../../../components/RemediationStrategyPicker";
import CodeBlock from "../../../components/CodeBlock";
import Example from "../../../components/Example";

function RecommendStrategiesAndOrTechniquesForFixingAccessibilityIssues() {
    const flashcards = [
        {
            front: "What is required to recommend effective remediation strategies?",
            back: "Knowledge of how to create accessible content, the ability to identify issues, and the wisdom to choose appropriate techniques based on real-world constraints."
        },
        {
            front: "What three things should a developer be informed about when communicating an issue?",
            back: "Precisely where the problems are, what the problems are, and how to fix them."
        },
        {
            front: "What factors influence the complexity of making a website accessible?",
            back: "Type of content, size and complexity of the site, and the development tools and environment."
        },
        {
            front: "Why is it important to consider 'particular conditions' (time, money, CMS, etc.)?",
            back: "To help users and developers find the most efficient way to make the website accessible within their practical limitations."
        }
    ];

    const strategyScenarios = [
        {
            id: 1,
            context: "A large legacy enterprise site has hundreds of images missing alt text. The development team is small and has a tight deadline for a new release.",
            options: [
                {
                    label: "Option A",
                    strategy: "Manually audit and fix every image immediately.",
                    explanation: "While ideal, this may not be feasible given the 'particular conditions' of time and team size. It could delay critical updates.",
                    isCorrect: false
                },
                {
                    label: "Option B",
                    strategy: "Prioritize high-traffic pages and provide automated 'alt' text as a temporary stopgap.",
                    explanation: "This is a pragmatic remediation technique. It addresses the most critical areas first while acknowledging resource limitations.",
                    isCorrect: true
                }
            ]
        },
        {
            id: 2,
            context: "A project is using a specific CMS that doesn't allow changing the HTML structure of the navigation menu, which currently fails keyboard accessibility.",
            options: [
                {
                    label: "Option A",
                    strategy: "Switch to a completely different CMS.",
                    explanation: "This is likely too expensive and complex ('wisdom to choose appropriate technique'). It ignores the 'chosen CMS' constraint mentioned in the text.",
                    isCorrect: false
                },
                {
                    label: "Option B",
                    strategy: "Use an accessible JavaScript 'polyfill' or overlay specifically for that menu component.",
                    explanation: "When the CMS limits structural changes, a client-side script can often fix accessibility issues without requiring a full redesign.",
                    isCorrect: true
                }
            ]
        }
    ];

    const beforeCode = `<button onclick="submitForm()">
  <img src="submit.png">
</button>`;

    const afterCode = `<button onclick="submitForm()" aria-label="Submit Form">
  <img src="submit.png" alt="">
</button>`;

    return (
        <div className="container">
            <PageHeader 
                title="Recommend Strategies And/or Techniques for Fixing Accessibility Issues"
                lede="Choosing the right remediation path requires balancing technical requirements with real-world project constraints."
            />

            <section className="mb-8">
                <Card title="The Wisdom of Remediation">
                    <p>
                        Recommending remediation strategies requires more than just technical knowledge. It requires <strong>competency</strong> in creating content, 
                        the <strong>ability</strong> to identify issues, and the <strong>wisdom</strong> to choose techniques that work within 
                        practical limitations.
                    </p>
                    <p className="mt-4">
                        When communicating with developers, be precise:
                    </p>
                    <ul>
                        <li><strong>Where:</strong> Point to the exact line of code or UI element.</li>
                        <li><strong>What:</strong> Explain the specific WCAG failure or barrier.</li>
                        <li><strong>How:</strong> Provide clear, actionable steps for the fix.</li>
                    </ul>
                </Card>
            </section>

            <section className="mb-8">
                <Callout title="Efficiency and Constraints" classNamePrefix="remediation">
                    <p>
                        Accessibility depends on factors like content type, site complexity, and tools. 
                        The best recommendations reflect <strong>particular conditions</strong> such as:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 bg-white rounded shadow-sm border-l-4 border-pink-700">
                            <strong>Time & Money:</strong> Is there a budget for a full redesign, or is a patch needed?
                        </div>
                        <div className="p-4 bg-white rounded shadow-sm border-l-4 border-pink-700">
                            <strong>Development State:</strong> Is the project in early design or late-stage maintenance?
                        </div>
                        <div className="p-4 bg-white rounded shadow-sm border-l-4 border-pink-700">
                            <strong>CMS/Tools:</strong> Do the current tools allow for the necessary changes?
                        </div>
                        <div className="p-4 bg-white rounded shadow-sm border-l-4 border-pink-700">
                            <strong>Complexity:</strong> How deeply nested is the issue within the site architecture?
                        </div>
                    </div>
                </Callout>
            </section>

            <section className="mb-8">
                <h2>Demo: Precise Communication</h2>
                <p>Instead of saying "The button is broken," provide a specific recommendation:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Example label="Problematic Code" classNamePrefix="remediation">
                        <CodeBlock title="Unlabeled Image Button" code={beforeCode} />
                        <p className="mt-2 text-sm"><em>Issue:</em> Screen readers will announce the image filename or nothing at all.</p>
                    </Example>
                    
                    <Example label="Recommended Fix" classNamePrefix="remediation">
                        <CodeBlock title="Accessible Image Button" code={afterCode} />
                        <p className="mt-2 text-sm"><em>Fix:</em> Added <code>aria-label</code> to the button and empty <code>alt</code> to the decorative image.</p>
                    </Example>
                </div>
            </section>

            <section className="mb-8">
                <RemediationStrategyPicker scenarios={strategyScenarios} />
            </section>

            <section className="mb-8">
                <h2>Knowledge Check</h2>
                <FlashcardSet cards={flashcards} />
            </section>
        </div>
    );
}

export default RecommendStrategiesAndOrTechniquesForFixingAccessibilityIssues;