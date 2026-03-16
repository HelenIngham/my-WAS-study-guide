import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import Card from "../../../components/Card";
import CardList from "../../../components/CardList";
import ResourceLink from "../../../components/ResourceLink";
import FlashcardSet from "../../../components/FlashcardSet";
import ACTRuleStructure from "../../../components/ACTRuleStructure";
import ToolLimitationsActivity from "../../../components/ToolLimitationsActivity";
import ExampleContainer from "../../../components/ExampleContainer";

function ACTRules() {
    const flashcards = [
        {
            front: "What does ACT stand for?",
            back: "Accessibility Conformance Testing."
        },
        {
            front: "Who defines the ACT Rules Format?",
            back: "The ACT Rules Community Group."
        },
        {
            front: "Are ACT Rules required for determining WCAG conformance?",
            back: "No, they are non-normative. Conformance must be determined based on the normative text of WCAG."
        },
        {
            front: "Does passing an ACT Rule guarantee WCAG compliance?",
            back: "No. It only means the specific aspect tested by that rule has no identified errors."
        }
    ];

    const testingTasks = [
        {
            id: 'atomic-name',
            text: "Form Field has non-empty accessible name",
            category: 'automated',
            explanation: "This is an atomic rule that can be reliably checked by automated tools by inspecting the DOM and accessibility tree."
        },
        {
            id: 'meaningful-sequence',
            text: "Verifying that the reading order is meaningful",
            category: 'manual',
            explanation: "While tools can flag potential issues, determining if the sequence is 'meaningful' often requires human understanding of the content."
        },
        {
            id: 'color-contrast',
            text: "Text has sufficient color contrast",
            category: 'both',
            explanation: "Automated tools can check simple text-over-solid-color, but manual verification is often needed for text over gradients or images."
        }
    ];

    return (
        <div className="container">
            <PageHeader 
                title="1. ACT Rules" 
                lede="The Accessibility Conformance Testing (ACT) Rules harmonise the interpretation of W3C accessibility standards."
            />

            <section className="section-padding">
                <h2>Overview</h2>
                <p>
                    The <strong>Accessibility Conformance Testing (ACT) Rules Community Group</strong> is a group of accessibility tool vendors, 
                    test procedure authors, and accessibility test experts. It aims to harmonise the interpretation of W3C accessibility standards, 
                    such as WCAG and WAI-ARIA for testing purposes and more consistent results and provides exact test cases. 
                    The <strong>ACT Task Force</strong> is a subset of Accessibility Guidelines Working Group (AGWG) participants and authors ACT Rules for publication.
                </p>
                
                <Callout title="Target Audience" type="info">
                    <p>
                        ACT Rules are primarily intended for people who <strong>design tests and methodologies</strong> (tool developers and audit methodology authors) 
                        and not for content creators, developers, or people using testing tools.
                    </p>
                </Callout>

                <p>
                    The rules are being implemented by accessibility test tools and manual testing methodologies. 
                    The Community defines an <strong>ACT Rules Format</strong> describing the structure of ACT Rules.
                </p>
            </section>

            <section className="section-padding">
                <h2>Normative Status</h2>
                <Card title="Be Aware">
                    <p>
                        ACT Rules are <strong>not required</strong> for determining conformance. They are non-normative W3C resources. 
                        Conformance with WCAG must be determined based on the normative text of WCAG’s Success Criteria.
                    </p>
                </Card>
            </section>

            <section className="section-padding">
                <h2>How ACT Rules Work</h2>
                <p>
                    ACT Rules check for <strong>failures</strong>. Content that contains failures does not meet the corresponding requirement. 
                    However, passing an ACT Rule does <strong>not necessarily mean</strong> that all aspects of the corresponding accessibility requirements are met. 
                    It only means that no error addressed by a particular rule has been identified.
                </p>
                <p>
                    ACT Rules only describe how to test one particular aspect, whereas the WCAG Success Criteria usually cover multiple aspects.
                </p>

                <ExampleContainer 
                    ariaLabel="Example of an atomic rule"
                    code={`<!-- Rule: Form Field has non-empty accessible name -->
<label for="name">Name:</label>
<input type="text" id="name"> <!-- PASS -->

<input type="text"> <!-- FAIL: No accessible name -->`}
                >
                    <div style={{ padding: '1rem', border: '1px dashed #ccc' }}>
                        <p><strong>Atomic Rule Demonstration:</strong></p>
                        <label htmlFor="demo-input">Name: </label>
                        <input type="text" id="demo-input" placeholder="Passes Rule" />
                        <br /><br />
                        <input type="text" aria-label="" placeholder="Fails Rule" />
                        <p><small>Verifying that content meets all aspects of the WCAG Success Criteria usually requires further verification by human testers.</small></p>
                    </div>
                </ExampleContainer>
            </section>

            <section className="section-padding">
                <ACTRuleStructure />
            </section>

            <section className="section-padding">
                <h2>Learning Activities</h2>
                <div className="grid">
                    <Card title="Key Concepts Flashcards">
                        <FlashcardSet cards={flashcards} />
                    </Card>
                </div>
                
                <div style={{ marginTop: '2rem' }}>
                    <ToolLimitationsActivity 
                        tasks={testingTasks} 
                        title="ACT Rules: Automated vs. Manual" 
                    />
                </div>
            </section>

            <section className="section-padding">
                <h2>Resources</h2>
                <CardList>
                    <Card title="W3C Resources">
                        <ResourceLink 
                            href="https://www.w3.org/WAI/standards-guidelines/act/" 
                            text="ACT Rules Overview - W3C WAI" 
                        />
                        <ResourceLink 
                            href="https://act-rules.github.io/rules/" 
                            text="ACT Rules Repository" 
                        />
                        <ResourceLink 
                            href="https://www.w3.org/TR/act-rules-format/" 
                            text="ACT Rules Format Specification" 
                        />
                    </Card>
                </CardList>
            </section>
        </div>
    );
}

export default ACTRules;