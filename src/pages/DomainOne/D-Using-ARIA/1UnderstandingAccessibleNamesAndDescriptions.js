import React, { useMemo } from 'react';
import Grid from "../../../components/Grid";
import Tabs from "../../../components/Tabs";
import Alert from "../../../components/Alert";
import PriorityList from "../../../components/PriorityList";
import MethodCard from "../../../components/MethodCard";
import ExampleContainer from "../../../components/ExampleContainer";
import IconButton from "../../../components/IconButton";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";

function UnderstandingAccessibleNamesAndDescriptions() {
    const tabsData = useMemo(() => [
        {
            id: 'overview',
            label: 'Overview',
            content: (
                <section>
                    <h2>What are Accessible Names and Descriptions?</h2>
                    <p>
                        An <strong>accessible name</strong> is a short text label that identifies an element
                        to users of assistive technologies. Every interactive element should have an accessible
                        name that clearly communicates its purpose.
                    </p>

                    <p>
                        An <strong>accessible description</strong> provides additional context or instructions
                        beyond the name. It's announced after the name and role by screen readers.
                    </p>

                    <Alert type="info" title="Key Distinction">
                        <ul>
                            <li><strong>Name:</strong> Identifies WHAT the element is (required)</li>
                            <li><strong>Description:</strong> Provides additional HOW/WHY information (optional)</li>
                        </ul>
                    </Alert>

                    <h3>Why Are They Important?</h3>
                    <ul>
                        <li>Screen reader users rely on names to understand interactive elements</li>
                        <li>Voice control users need names to activate controls</li>
                        <li>Names help create a mental model of the interface</li>
                        <li>Descriptions reduce errors and improve form completion</li>
                    </ul>
                </section>
            )
        },
        {
            id: 'computation',
            label: 'Name Computation',
            content: (
                <section>
                    <h2>Accessible Name Computation</h2>
                    <p>
                        Browsers follow a specific algorithm to calculate accessible names. Understanding
                        this priority order is crucial for ensuring your elements have the intended names.
                    </p>

                    <h3>Priority Order (Highest to Lowest)</h3>
                    <PriorityList>
                        <li>
                            <strong>aria-labelledby</strong>
                            <p>References one or more element IDs. Their text content becomes the name.</p>
                        </li>
                        <li>
                            <strong>aria-label</strong>
                            <p>A string value that directly sets the accessible name.</p>
                        </li>
                        <li>
                            <strong>Native HTML Mechanisms</strong>
                            <p>
                                Includes: <code>&lt;label&gt;</code> for form controls,
                                <code>alt</code> for images, text content for buttons/links.
                            </p>
                        </li>
                        <li>
                            <strong>title attribute</strong>
                            <p>Last resort; generally avoid relying on this for accessible names.</p>
                        </li>
                        <li>
                            <strong>placeholder attribute</strong>
                            <p>Not recommended as a labeling mechanism (disappears when typing).</p>
                        </li>
                    </PriorityList>

                    <Alert type="warning" title="⚠️ Important Warning">
                        <p>
                            <code>aria-label</code> and <code>aria-labelledby</code> override other naming
                            mechanisms. Use them intentionally, not as a quick fix.
                        </p>
                    </Alert>
                </section>
            )
        },
        {
            id: 'methods',
            label: 'Labeling Methods',
            content: (
                <section>
                    <h2>Labeling Methods Comparison</h2>

                    <Grid classNamePrefix="comparison" role="list" ariaLabel="Labeling methods comparison">
                        <MethodCard
                            title="aria-label"
                            useWhen="No visible text label exists"
                            code={`<button aria-label="Close dialog">
  <span aria-hidden="true">×</span>
</button>`}
                            pros={["Simple to implement"]}
                            cons={["Not translated automatically", "Not visible to sighted users"]}
                        />

                        <MethodCard
                            title="aria-labelledby"
                            useWhen="Visible text exists that can serve as a label"
                            code={`<h2 id="dialog-title">Settings</h2>
<div role="dialog" 
     aria-labelledby="dialog-title">
  ...
</div>`}
                            pros={["References visible text", "Can concatenate multiple IDs"]}
                            cons={["Requires ID management"]}
                        />

                        <MethodCard
                            title="aria-describedby"
                            useWhen="Additional context is helpful"
                            code={`<label for="pwd">Password</label>
<input type="password" id="pwd"
  aria-describedby="pwd-help">
<p id="pwd-help">
  Must be at least 8 characters
</p>`}
                            pros={["Provides extra guidance", "Reduces form errors"]}
                            cons={["Read after name (may be missed)"]}
                        />

                        <MethodCard
                            title="Native <label>"
                            useWhen="Labeling form controls"
                            code={`<label for="email">
  Email Address
</label>
<input type="email" id="email">`}
                            pros={["Expands click target", "Best browser support", "No ARIA needed"]}
                        />
                    </Grid>
                </section>
            )
        },
        {
            id: 'examples',
            label: 'Examples',
            content: (
                <section>
                    <h2>Live Examples</h2>

                    <h3>Example 1: Button with Icon Only</h3>
                    <ExampleContainer
                        code={`<button aria-label="Search">
  <span aria-hidden="true">🔍</span>
</button>`}
                    >
                        <IconButton
                            ariaLabel="Search"
                            type="button"
                        >
                            <span aria-hidden="true">🔍</span>
                        </IconButton>
                        <p>Accessible name: "Search"</p>
                    </ExampleContainer>

                    <h3>Example 2: Input with Visible Label</h3>
                    <ExampleContainer
                        code={`<label for="email">Email Address</label>
<input type="email" id="email" 
  aria-describedby="email-hint">
<p id="email-hint">
  We'll never share your email.
</p>`}
                    >
                        <label htmlFor="demo-email">Email Address</label>
                        <input
                            type="email"
                            id="demo-email"
                            aria-describedby="email-hint"
                        />
                        <p id="email-hint" className="hint">We'll never share your email.</p>
                    </ExampleContainer>

                    <h3>Example 3: Region with aria-labelledby</h3>
                    <ExampleContainer
                        code={`<section aria-labelledby="news-heading">
  <h2 id="news-heading">Latest News</h2>
  <p>This region is named by its heading.</p>
</section>`}
                    >
                        <section aria-labelledby="news-heading">
                            <h4 id="news-heading">Latest News</h4>
                            <p>This region is named by its heading.</p>
                        </section>
                    </ExampleContainer>
                </section>
            )
        }
    ], []);

    const quizQuestions = [
        {
            id: 1,
            question: "What is the primary purpose of an accessible name?",
            options: [
                "To style the element visually",
                "To identify the element to assistive technology users",
                "To add JavaScript functionality",
                "To improve SEO ranking"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "In the accessible name computation, which typically has the highest priority?",
            options: [
                "The element's text content",
                "The title attribute",
                "aria-labelledby",
                "The placeholder attribute"
            ],
            correct: 2
        },
        {
            id: 3,
            question: "What is the difference between aria-label and aria-labelledby?",
            options: [
                "There is no difference",
                "aria-label takes a string value; aria-labelledby references element IDs",
                "aria-labelledby is deprecated",
                "aria-label only works on form elements"
            ],
            correct: 1
        },
        {
            id: 4,
            question: "What does aria-describedby provide?",
            options: [
                "The primary name of an element",
                "Additional descriptive information about an element",
                "Visual styling information",
                "Navigation instructions"
            ],
            correct: 1
        }
    ];

    return (
        <div className="container">
            <h1>Understanding Accessible Names and Descriptions</h1>
            <Tabs tabs={tabsData} />
            <MultipleChoiceQuiz questions={quizQuestions} />
        </div>
    );
}

export default UnderstandingAccessibleNamesAndDescriptions;