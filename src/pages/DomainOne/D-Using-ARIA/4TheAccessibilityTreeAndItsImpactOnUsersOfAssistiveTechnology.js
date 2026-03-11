
import React, { useMemo } from 'react';
import Grid from "../../../components/Grid";
import Card from "../../../components/Card";
import CardList from "../../../components/CardList";
import Alert from "../../../components/Alert";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import AccessibilityTreeDemo from "../../../components/AccessibilityTreeDemo";
import PageHeader from "../../../components/PageHeader";
import ComparisonTable from "../../../components/ComparisonTable";

function TheAccessibilityTreeAndItsImpact() {
    const treeNodes = useMemo(() => [
        {
            id: 'button',
            html: '<button>Submit</button>',
            role: 'button',
            name: 'Submit',
            states: ['focusable'],
            description: 'Native button element automatically creates a button role in the accessibility tree'
        },
        {
            id: 'link',
            html: '<a href="/page">Go to Page</a>',
            role: 'link',
            name: 'Go to Page',
            states: ['focusable'],
            description: 'Anchor with href creates a link role with the text content as its name'
        },
        {
            id: 'input',
            html: '<label>Email<input type="email"></label>',
            role: 'textbox',
            name: 'Email',
            states: ['focusable', 'editable'],
            description: 'Input with label creates a textbox with the label text as its accessible name'
        },
        {
            id: 'image',
            html: '<img src="cat.jpg" alt="Orange cat">',
            role: 'image',
            name: 'Orange cat',
            states: [],
            description: 'Image with alt text creates an image role with alt as the name'
        },
        {
            id: 'decorative',
            html: '<img src="divider.png" alt="">',
            role: '(removed)',
            name: '(none)',
            states: [],
            description: 'Empty alt makes the image presentational - removed from accessibility tree'
        },
        {
            id: 'custom',
            html: '<div role="button" tabindex="0">Custom</div>',
            role: 'button',
            name: 'Custom',
            states: ['focusable'],
            description: 'ARIA role overrides native div semantics to create a button'
        }
    ], []);

    const quizQuestions = useMemo(() => [
        {
            id: 1,
            question: "What is the accessibility tree?",
            options: [
                "A visual representation of the DOM",
                "A simplified version of the DOM used by assistive technologies",
                "The same thing as the DOM tree",
                "A debugging tool for developers"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "Which of the following is NOT typically exposed in the accessibility tree?",
            options: [
                "Role of an element",
                "Accessible name",
                "CSS styling information",
                "State (like checked or expanded)"
            ],
            correct: 2
        },
        {
            id: 3,
            question: "What happens when you add role=\"presentation\" to an element?",
            options: [
                "The element becomes more accessible",
                "The element's semantics are removed from the accessibility tree",
                "The element becomes invisible",
                "The element gets a new role"
            ],
            correct: 1
        },
        {
            id: 4,
            question: "How can you view the accessibility tree in Chrome?",
            options: [
                "View > Source",
                "DevTools > Elements > Accessibility pane",
                "DevTools > Network tab",
                "It's not possible in Chrome"
            ],
            correct: 1
        },
        {
            id: 5,
            question: "What is the relationship between the DOM and accessibility tree?",
            options: [
                "They are identical",
                "The accessibility tree is derived from the DOM but may differ",
                "The DOM is derived from the accessibility tree",
                "They have no relationship"
            ],
            correct: 1
        }
    ], []);

    return (
        <div className="container">
            <PageHeader
                title="The Accessibility Tree and Its Impact"
                lede={
                    <>
                        The <strong>accessibility tree</strong> is a simplified representation of the DOM
                        (Document Object Model) that browsers create specifically for assistive technologies
                        like screen readers. It contains only the information relevant for accessibility.
                    </>
                }
            />

            <section className="intro-section">
                <h2>What is the Accessibility Tree?</h2>
                <p>
                    The accessibility tree contains several key pieces of information:
                </p>

                <Card classNamePrefix="tree-info" role="region" ariaLabel="Key accessibility tree components">
                    <CardList>
                        <li><strong>Role:</strong> What the element is (button, link, heading, etc.)</li>
                        <li><strong>Name:</strong> The accessible name identifying the element</li>
                        <li><strong>Description:</strong> Additional descriptive information</li>
                        <li><strong>State:</strong> Current state (checked, expanded, selected, etc.)</li>
                        <li><strong>Properties:</strong> Relationships and other ARIA properties</li>
                    </CardList>
                </Card>

                <Alert type="info" title="Key Insight">
                    <p>
                        The accessibility tree is what screen readers actually "see." If something isn't
                        in the accessibility tree, assistive technology users won't know it exists.
                        Conversely, if something is in the tree incorrectly, it can confuse users.
                    </p>
                </Alert>
            </section>

            {/* Interactive Tree Demo */}
            <AccessibilityTreeDemo nodes={treeNodes} />

            {/* How ARIA Modifies the Tree */}
            <section className="aria-impact-section" aria-labelledby="aria-impact-heading">
                <h2 id="aria-impact-heading">How ARIA Modifies the Accessibility Tree</h2>

                <Grid classNamePrefix="impact" role="list" ariaLabel="How ARIA modifies the tree">
                    <Card classNamePrefix="impact" title="Adding Semantics" role="listitem">
                        <p>ARIA roles add semantic meaning to elements that lack it:</p>
                        <pre><code>{`<!-- No semantic meaning -->
<div>Click me</div>

<!-- Has button semantics -->
<div role="button" tabindex="0">
  Click me
</div>`}</code></pre>
                        <p className="card-note">
                            ⚠️ Remember: ARIA only changes what's exposed to assistive tech,
                            not the actual behavior. You still need keyboard support!
                        </p>
                    </Card>

                    <Card classNamePrefix="impact" title="Removing Semantics" role="listitem">
                        <p>Certain ARIA attributes remove elements from the accessibility tree:</p>
                        <pre><code>{`<!-- Removes from accessibility tree -->
<div aria-hidden="true">
  Decorative content
</div>

<!-- Removes semantics only -->
<table role="presentation">
  <!-- Used for layout, not data -->
</table>`}</code></pre>
                        <p className="card-note">
                            ⚠️ Never use aria-hidden="true" on focusable elements!
                        </p>
                    </Card>

                    <Card classNamePrefix="impact" title="Modifying State" role="listitem">
                        <p>ARIA states and properties communicate dynamic information:</p>
                        <pre><code>{`<button 
  aria-expanded="false"
  aria-controls="menu"
>
  Menu
</button>

<ul id="menu" aria-hidden="true">
  <!-- Menu items -->
</ul>`}</code></pre>
                        <p className="card-note">
                            State changes must be updated via JavaScript when interactions occur.
                        </p>
                    </Card>
                </Grid>
            </section>

            {/* Browser Tools Section */}
            <section className="tools-section" aria-labelledby="tools-heading">
                <h2 id="tools-heading">Viewing the Accessibility Tree</h2>

                <p>Modern browsers provide tools to inspect the accessibility tree:</p>

                <Grid classNamePrefix="tools" role="list" ariaLabel="Viewing the accessibility tree">
                    <Card classNamePrefix="tool" title="Chrome DevTools" role="listitem">
                        <ol>
                            <li>Open DevTools (F12)</li>
                            <li>Go to Elements tab</li>
                            <li>Select an element</li>
                            <li>Open the Accessibility pane in the right sidebar</li>
                        </ol>
                        <p>Or enable the full accessibility tree view in Experiments.</p>
                    </Card>

                    <Card classNamePrefix="tool" title="Firefox Accessibility Inspector" role="listitem">
                        <ol>
                            <li>Open DevTools (F12)</li>
                            <li>Go to Accessibility tab</li>
                            <li>Browse the full accessibility tree</li>
                            <li>Check for issues automatically</li>
                        </ol>
                    </Card>

                    <Card classNamePrefix="tool" title="Safari Accessibility Inspector" role="listitem">
                        <ol>
                            <li>Enable Developer menu in Preferences</li>
                            <li>Open Web Inspector</li>
                            <li>Go to Elements tab</li>
                            <li>View Node panel for accessibility info</li>
                        </ol>
                    </Card>
                </Grid>
            </section>

            {/* Common Issues Section */}
            <section className="issues-section" aria-labelledby="issues-heading">
                <h2 id="issues-heading">Common Accessibility Tree Issues</h2>

                <ComparisonTable
                    title="Common Accessibility Tree Issues"
                    headers={["Issue", "Problem", "Solution"]}
                    rows={[
                        { rowHeader: "Missing accessible name", data: ["Element has no name in the tree", "Add label, aria-label, or aria-labelledby"] },
                        { rowHeader: "Generic role", data: ["Custom widget shows as \"generic\"", "Add appropriate ARIA role"] },
                        { rowHeader: "Missing state", data: ["Expanded/selected state not communicated", "Add and update ARIA state attributes"] },
                        { rowHeader: "Inaccessible content", data: ["Content hidden from assistive tech", "Check for unintended aria-hidden"] },
                        { rowHeader: "Broken relationships", data: ["Controls/describes not working", "Verify IDs in aria-controls, aria-describedby"] }
                    ]}
                />
            </section>

            <MultipleChoiceQuiz questions={quizQuestions} />

        </div>
    );
}

export default TheAccessibilityTreeAndItsImpact;