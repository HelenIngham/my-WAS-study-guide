import React, { useMemo } from 'react';
import Grid from "../../../components/Grid";
import Card from "../../../components/Card";
import Tabs from "../../../components/Tabs";
import Alert from "../../../components/Alert";
import CodeBlock from "../../../components/CodeBlock";
import ComparisonTable from "../../../components/ComparisonTable";
import MatchingExercise from "../../../components/MatchingExercise";
import RovingTabindexDemo from "../../../components/RovingTabindexDemo";
import FocusTrapDemo from "../../../components/FocusTrapDemo";
import { matchingPairs, correctMatches } from './matching-data';

function KeyboardInteractionAndFocusManagement() {
    const sectionsData = useMemo(() => [
        {
            id: 'tabindex',
            label: 'Tabindex',
            content: (
                <section aria-labelledby="tabindex-heading">
                    <h2 id="tabindex-heading">Understanding Tabindex</h2>

                    <p>
                        The <code>tabindex</code> attribute controls whether an element is focusable and
                        where it appears in the keyboard navigation order.
                    </p>

                    <Grid classNamePrefix="values" role="list" ariaLabel="Understanding tabindex values">
                        <Card classNamePrefix="value good" title='tabindex="0"' role="listitem">
                            <p>
                                Makes a non-focusable element focusable and places it in the natural
                                tab order based on its position in the DOM.
                            </p>
                            <pre><code>{`<div tabindex="0" role="button">
  Custom Button
</div>`}</code></pre>
                            <span className="badge">✓ Recommended</span>
                        </Card>

                        <Card classNamePrefix="value good" title='tabindex="-1"' role="listitem">
                            <p>
                                Makes an element focusable via JavaScript (<code>element.focus()</code>)
                                but removes it from the natural tab order.
                            </p>
                            <pre><code>{`<div tabindex="-1" id="panel">
  <!-- Focus set programmatically -->
</div>`}</code></pre>
                            <span className="badge">✓ Recommended</span>
                        </Card>

                        <Card classNamePrefix="value bad" title='tabindex="1" or higher' role="listitem">
                            <p>
                                Places element at the beginning of the tab order. <strong>Avoid this!</strong>
                                It disrupts the natural reading order and confuses users.
                            </p>
                            <pre><code>{`<!-- ANTI-PATTERN -->
<input tabindex="2">
<input tabindex="1">
<input tabindex="3">`}</code></pre>
                            <span className="badge warning">✗ Anti-pattern</span>
                        </Card>
                    </Grid>

                    <Alert type="warning" title="Key Exam Point">
                        <p>
                            Interactive elements like <code>&lt;button&gt;</code>, <code>&lt;a href&gt;</code>,
                            and form controls are natively focusable. Only use <code>tabindex="0"</code> on
                            custom interactive elements that aren't natively focusable.
                        </p>
                    </Alert>
                </section>
            )
        },
        {
            id: 'roving',
            label: 'Roving Tabindex',
            content: (
                <section aria-labelledby="roving-heading">
                    <h2 id="roving-heading">Roving Tabindex Pattern</h2>

                    <p>
                        <strong>Roving tabindex</strong> is a focus management technique used in composite
                        widgets (like tab lists, menus, toolbars) where only one item in the group is in
                        the tab order at any time.
                    </p>

                    <h3>How It Works</h3>
                    <ol>
                        <li>One item has <code>tabindex="0"</code> (the "active" item)</li>
                        <li>All other items have <code>tabindex="-1"</code></li>
                        <li>Arrow keys move focus and "rove" the tabindex values</li>
                        <li>Tab moves focus out of the entire group</li>
                    </ol>

                    <h3>Live Demo: Tab List with Roving Tabindex</h3>
                    <RovingTabindexDemo />

                    <CodeBlock 
                        title="Code Pattern"
                        code={`// Only the active tab has tabindex="0"
tabs.forEach((tab, index) => {
  tab.tabIndex = index === activeIndex ? 0 : -1;
});

// Arrow key handler moves focus
if (e.key === 'ArrowRight') {
  const nextIndex = (currentIndex + 1) % tabs.length;
  tabs[nextIndex].focus();
  setActiveIndex(nextIndex);
}`}
                    />
                </section>
            )
        },
        {
            id: 'focus-trap',
            label: 'Focus Trapping',
            content: (
                <section aria-labelledby="focus-trap-heading">
                    <h2 id="focus-trap-heading">Focus Trapping</h2>

                    <p>
                        <strong>Focus trapping</strong> (or focus containment) ensures keyboard focus stays
                        within a specific container, typically used in modal dialogs. Users cannot Tab
                        out of the container until they explicitly dismiss it.
                    </p>

                    <h3>When to Use Focus Trapping</h3>
                    <ul>
                        <li>Modal dialogs (<code>role="dialog"</code> with <code>aria-modal="true"</code>)</li>
                        <li>Alert dialogs that require a response</li>
                        <li>Full-screen overlays</li>
                    </ul>

                    <h3>Implementation Requirements</h3>
                    <ol>
                        <li>Move focus to the first focusable element (or the dialog itself) when opened</li>
                        <li>Wrap focus: Tab from last element goes to first; Shift+Tab from first goes to last</li>
                        <li>Allow Escape key to close the dialog</li>
                        <li>Return focus to the triggering element when closed</li>
                    </ol>

                    <h3>Live Demo: Modal with Focus Trap</h3>
                    <FocusTrapDemo />

                    <Alert type="warning" title="Exam Tip">
                        <p>
                            Focus trapping is <strong>required</strong> for modal dialogs to be accessible.
                            Without it, screen reader users may not realize they're in a modal and could
                            interact with content behind it.
                        </p>
                    </Alert>
                </section>
            )
        },
        {
            id: 'activedescendant',
            label: 'aria-activedescendant',
            content: (
                <section aria-labelledby="activedescendant-heading">
                    <h2 id="activedescendant-heading">aria-activedescendant</h2>

                    <p>
                        <code>aria-activedescendant</code> is an alternative to roving tabindex for
                        managing focus within composite widgets. Instead of moving DOM focus, it maintains
                        "virtual" focus while the container keeps actual focus.
                    </p>

                    <h3>How It Works</h3>
                    <ol>
                        <li>Container element has <code>tabindex="0"</code> and keeps focus</li>
                        <li>Container's <code>aria-activedescendant</code> points to the ID of the "active" item</li>
                        <li>Arrow keys update the <code>aria-activedescendant</code> value</li>
                        <li>Screen readers announce the referenced element as if it has focus</li>
                    </ol>

                    <ComparisonTable 
                        title="Roving Tabindex vs. aria-activedescendant"
                        headers={["Aspect", "Roving Tabindex", "aria-activedescendant"]}
                        rows={[
                            { rowHeader: "DOM Focus", data: ["Moves to each item", "Stays on container"] },
                            { rowHeader: "Use Case", data: ["Static lists, toolbars, tabs", "Large/dynamic lists, comboboxes"] },
                            { rowHeader: "Scrolling", data: ["Browser handles scroll", "Must manage scroll manually"] },
                            { rowHeader: "Complexity", data: ["Simpler to implement", "More complex, better for dynamic content"] }
                        ]}
                    />

                    <CodeBlock 
                        title="Code Example"
                        code={`<ul 
  role="listbox"
  tabindex="0"
  aria-activedescendant="option-2"
>
  <li id="option-1" role="option">Option 1</li>
  <li id="option-2" role="option">Option 2</li>
  <li id="option-3" role="option">Option 3</li>
</ul>

// Update on arrow key press:
listbox.setAttribute(
  'aria-activedescendant', 
  \`option-\${newIndex}\`
);`}
                    />
                </section>
            )
        }
    ], []);

    return (
        <div className="container">
            <h1>Keyboard Interaction and Focus Management</h1>

            <Tabs tabs={sectionsData} ariaLabel="Topic sections" />

            <MatchingExercise 
                pairs={matchingPairs} 
                correctMatches={correctMatches} 
            />
        </div>
    );
}

export default KeyboardInteractionAndFocusManagement;