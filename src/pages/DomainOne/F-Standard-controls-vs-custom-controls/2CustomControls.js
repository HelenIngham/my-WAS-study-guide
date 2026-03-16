import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import AccessibleChecklist from "../../../components/AccessibleChecklist";

function CustomControls() {
    const customControlFlashcards = [
        {
            front: "When are custom controls necessary?",
            back: "When standard controls can't support unique interaction features (e.g., sophisticated music player) or when specific branding/design requirements are stringent."
        },
        {
            front: "What is paramount when creating custom controls?",
            back: "Ensuring they are accessible by implementing proper ARIA roles, states, and properties."
        },
        {
            front: "What should guide other developers in using custom controls?",
            back: "Meticulous documentation that explains how to implement and use them accessibly."
        }
    ];

    const checklistItems = [
        { id: 'aria-roles', label: 'Implement proper ARIA roles' },
        { id: 'aria-states', label: 'Manage ARIA states (e.g., aria-expanded, aria-checked)' },
        { id: 'aria-props', label: 'Provide necessary ARIA properties (e.g., aria-label, aria-describedby)' },
        { id: 'keyboard', label: 'Ensure full keyboard navigability' },
        { id: 'focus-mgmt', label: 'Implement robust focus management' },
        { id: 'user-testing', label: 'Conduct accessibility testing with real users (including AT users)' }
    ];

    return (
        <div className="container custom-controls-page">
            <PageHeader title="Custom Controls" />

            <section className="content-section">
                <p>
                    However, there are situations where custom controls become necessary. 
                    Imagine you’re designing a sophisticated online music player with unique 
                    interaction features that standard controls can’t support. In such cases, 
                    custom controls can offer the flexibility to create highly specialised user interfaces.
                </p>

                <Callout 
                    title="Case Study: Specialized UI Requirements"
                    role="region"
                    ariaLabel="Case study on specialized UI requirements"
                >
                    <p>
                        Custom controls may also be necessary when branding and design requirements are 
                        specific and stringent. If your project demands a particular design language 
                        or branding that standard controls cannot accommodate, custom controls allow 
                        you to create a UI to meet these needs.
                    </p>
                </Callout>

                <p>
                    While custom controls can enhance user experience with advanced interactions, 
                    ensuring they are accessible is paramount. This means implementing proper ARIA 
                    roles, states, and properties and conducting thorough accessibility testing with 
                    real users, including those who rely on assistive technologies.
                </p>
                
                <p>
                    Whether you choose standard or custom controls, thorough testing is essential. 
                    Always test with real users, including those with disabilities, to ensure accessibility. 
                    Document custom controls meticulously to guide other developers in implementing 
                    and using them accessibly.
                </p>

                <div className="conclusion-box" style={{ backgroundColor: '#f0f4f8', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem', borderLeft: '5px solid #0056b3' }}>
                    <p style={{ margin: 0 }}>
                        <strong>In conclusion:</strong> The decision between standard and custom controls hinges on specific project 
                        requirements and the need to ensure accessibility. Standard controls offer a reliable, 
                        accessible, and cost-effective solution for many use cases. On the other hand, 
                        custom controls provide the flexibility to meet specialised requirements, 
                        provided they are designed and tested with accessibility in mind. By carefully 
                        considering these factors, you can create an inclusive user experience.
                    </p>
                </div>
            </section>

            <section className="learning-activities">
                <h2 className="section-title">Learning Activities</h2>
                
                <h3>Flashcards: Key Concepts</h3>
                <FlashcardSet cards={customControlFlashcards} />

                <AccessibleChecklist 
                    title="Checklist: Designing Accessible Custom Controls"
                    items={checklistItems}
                />
            </section>

            <section className="resources-section" style={{ marginTop: '2rem' }}>
                <h2 className="section-title">Resources</h2>
                <ul>
                    <li>
                        <a href="https://dequeuniversity.com/library/aria" target="_blank" rel="noopener noreferrer">
                            Deque University’s Code Library of Accessibility Examples: ARIA Widgets
                        </a>
                    </li>
                    <li>
                        <a href="https://www.w3.org/TR/wai-aria-practices-1.1/" target="_blank" rel="noopener noreferrer">
                            W3C’s WAI-ARIA Authoring Practices 1.1
                        </a>
                    </li>
                </ul>
            </section>

            <ExamTakeaway title="Key Takeaway for the WAS Exam">
                <ul>
                    <li>Use custom controls ONLY when standard HTML elements cannot meet specialized functional or design needs.</li>
                    <li>When building custom controls, ARIA (roles, states, and properties) is essential for accessibility.</li>
                    <li>Meticulous documentation and testing with real users (including those with disabilities) are mandatory for custom widgets.</li>
                </ul>
            </ExamTakeaway>
        </div>
    );
}

export default CustomControls;