import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import ExamTakeaway from "../../../components/ExamTakeaway";
import ResourceLink from "../../../components/ResourceLink";
import MatchingExercise from "../../../components/MatchingExercise";
import CodeBlock from "../../../components/CodeBlock";
import Example from "../../../components/Example";
import Tabs from "../../../components/Tabs";

function InteractiveWidgets() {
    const ariaRules = (
        <ul>
            <li><strong>Rule 1:</strong> If you can use a native HTML element or attribute with the semantics and behavior you require already built in, then do so.</li>
            <li><strong>Rule 2:</strong> Do not change native semantics unless you really have to.</li>
            <li><strong>Rule 3:</strong> All interactive ARIA controls must be usable with the keyboard.</li>
            <li><strong>Rule 4:</strong> Do not use <code>role="presentation"</code> or <code>aria-hidden="true"</code> on focusable elements.</li>
            <li><strong>Rule 5:</strong> All interactive elements must have an accessible name.</li>
        </ul>
    );

    const rolesPairs = [
        { term: "Tablist", definition: "A container that groups a set of tabs." },
        { term: "Tab", definition: "A selectable element that serves as a label for a tabpanel." },
        { term: "Tabpanel", definition: "A container for the resources associated with a tab." },
        { term: "Menu", definition: "A widget that offers a list of choices to the user." },
        { term: "MenuItem", definition: "An option in a set of choices contained by a menu." }
    ];

    const rolesMatches = {
        "Tablist": "A container that groups a set of tabs.",
        "Tab": "A selectable element that serves as a label for a tabpanel.",
        "Tabpanel": "A container for the resources associated with a tab.",
        "Menu": "A widget that offers a list of choices to the user.",
        "MenuItem": "An option in a set of choices contained by a menu."
    };

    const namingCards = [
        {
            front: "What is 'Accessible Name'?",
            back: "The name of a user interface element that is used by assistive technologies to identify the element."
        },
        {
            front: "How do you provide a name for an icon-only button?",
            back: "Use aria-label='Close' or an off-screen span with descriptive text."
        },
        {
            front: "What is the difference between aria-label and aria-labelledby?",
            back: "aria-label provides a string directly, while aria-labelledby points to the ID of another element that contains the label text."
        },
        {
            front: "What is aria-describedby used for?",
            back: "To provide additional descriptive information that supplements the accessible name."
        }
    ];

    const keyboardQuiz = [
        {
            id: 1,
            question: "Which key is typically used to activate a button-like widget?",
            options: ["Enter or Space", "Escape", "Tab", "Arrow Keys"],
            correct: 0
        },
        {
            id: 2,
            question: "How should users navigate between items in a Menu or Tablist?",
            options: ["Only Tab key", "Arrow keys (Roving Tabindex)", "Shift + Tab", "Mouse only"],
            correct: 1
        },
        {
            id: 3,
            question: "What does the Escape key usually do in a custom modal or menu?",
            options: ["Submit the form", "Move to next field", "Close/Dismiss the widget", "Refresh the page"],
            correct: 2
        }
    ];

    const testingQuiz = [
        {
            id: 'test-1',
            question: "Is technical conformance to ARIA specifications enough to guarantee accessibility?",
            options: [
                "Yes, if it passes validation it is accessible.",
                "No, you must test across different platforms, browsers, and ATs.",
                "Yes, browsers handle all ARIA automatically now.",
                "No, only testing with blind users matters."
            ],
            correct: 1
        },
        {
            id: 'test-2',
            question: "How do you distinguish between a design flaw and a technology support flaw?",
            options: [
                "A design flaw is an error in the implementation/logic; a support flaw is when a browser/SR doesn't implement the spec correctly.",
                "They are the same thing.",
                "If it works in Chrome, any failure elsewhere is a support flaw.",
                "Support flaws are always the developer's fault."
            ],
            correct: 0
        }
    ];

    const tabData = [
        {
            id: 'overview-rules',
            label: 'Overview & ARIA Rules',
            content: (
                <>
                    <section className="intro-section">
                        <h2>Overview</h2>
                        <p>
                            Web designers often like to push the limits of conventional web design by creating interactive controls or widgets, 
                            using custom designs that exceed the capabilities of standard HTML. These interactive components do not necessarily 
                            constitute accessibility barriers. They can be made accessible when designed with accessibility in mind. 
                            Accessibility techniques for custom controls and widgets usually require ARIA attributes and patterns, 
                            which should be thoroughly tested in different environments to ensure broad accessibility.
                        </p>
                    </section>

                    <section className="concepts-section">
                        <h2>The 5 Rules of ARIA</h2>
                        <Callout 
                            title="Essential ARIA Rules" 
                            classNamePrefix="aria-rules"
                        >
                            {ariaRules}
                        </Callout>
                    </section>
                </>
            )
        },
        {
            id: 'standards-structure',
            label: 'Standards & Structure',
            content: (
                <>
                    <section className="concepts-section">
                        <h2>Coding to Standards</h2>
                        <p>
                            Understand the importance of coding to standards, rather than to the quirks or features of only one set of technologies. 
                            Standards-based code ensures better compatibility across the fragmented landscape of browsers and assistive technologies.
                        </p>
                        <Example 
                            label="Best Practice:" 
                            text="Use the ARIA Authoring Practices Guide (APG) as your primary reference for interaction patterns."
                        />
                    </section>

                    <section className="concepts-section">
                        <h2>Semantic Structure & Roles</h2>
                        <p>
                            Roles define what an element is. Some roles require parent/child relationships (like <code>tablist</code> & <code>tab</code>) 
                            or specific attributes (like <code>aria-expanded</code> for a disclosure).
                        </p>
                        <MatchingExercise 
                            title="Practice: Match Widget Roles"
                            intro="Match the ARIA roles with their correct functional description."
                            pairs={rolesPairs}
                            correctMatches={rolesMatches}
                        />
                    </section>
                </>
            )
        },
        {
            id: 'naming-keyboard',
            label: 'Naming & Keyboard',
            content: (
                <>
                    <section className="concepts-section">
                        <h2>Accessible Names and Descriptions</h2>
                        <p>
                            Providing a clear name and description is critical for users of assistive technologies to understand the purpose of a control.
                        </p>
                        <FlashcardSet cards={namingCards} />
                    </section>

                    <section className="concepts-section">
                        <h2>Keyboard Interaction Model</h2>
                        <p>
                            Custom widgets must follow established keyboard patterns. This usually involves managing <code>tabindex</code> 
                            and handling key events like Arrows, Home, End, and Escape.
                        </p>
                        <MultipleChoiceQuiz 
                            title="Keyboard Pattern Check" 
                            questions={keyboardQuiz}
                        />
                        
                        <CodeBlock 
                            title="Example: Handling Space/Enter for a Custom Button"
                            code={`const handleKeyDown = (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    performAction();
  }
};`}
                        />
                    </section>
                </>
            )
        },
        {
            id: 'testing-resources',
            label: 'Testing & Resources',
            content: (
                <>
                    <section className="concepts-section">
                        <h2>Testing and Troubleshooting</h2>
                        <p>
                            Testing across a variety of platforms is essential. Do not assume technical conformance equals a good user experience.
                        </p>
                        <MultipleChoiceQuiz 
                            title="Testing & Analysis Quiz" 
                            questions={testingQuiz}
                        />
                        <Callout 
                            title="Pro Tip: Bug Fixes"
                            text="Only write code to override or fix bugs in browsers/ATs with great care and thorough testing. Native behavior is usually preferred."
                        />
                    </section>

                    <section className="resources-section">
                        <h2>Resources</h2>
                        <ResourceLink href="https://www.w3.org/WAI/ARIA/apg/" text="ARIA Authoring Practices Guide (APG)" />
                        <ResourceLink href="https://www.w3.org/TR/using-aria/" text="Using ARIA - W3C" />
                        <ResourceLink href="https://www.w3.org/WAI/standards-guidelines/wcag/low-level-support/" text="Understanding Accessibility Support" />
                        <ResourceLink href="https://a11ysupport.io/" text="A11ysupport.io" />
                    </section>
                </>
            )
        }
    ];

    return (
        <div className="container">
            <PageHeader 
                title="C: Create Interactive Controls/Widgets Based on Accessibility Best Practices"
                lede="Interactive components don't have to be accessibility barriers. By following ARIA patterns and coding to standards, we can create custom widgets that are fully accessible to all users."
            />

            <Tabs tabs={tabData} ariaLabel="Interactive widgets sections" />

            <ExamTakeaway title="Key Takeaways for Domain 1C">
                <ul>
                    <li>First rule of ARIA: Don't use ARIA if you can use native HTML.</li>
                    <li>Always code to standards (APG patterns).</li>
                    <li>Ensure correct parent/child role relationships.</li>
                    <li>All interactive widgets MUST be keyboard accessible.</li>
                    <li>Verify accessibility through testing on real devices and screen readers.</li>
                </ul>
            </ExamTakeaway>
        </div>
    );
}

export default InteractiveWidgets;