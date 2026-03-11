
import React, { useMemo } from 'react';
import Grid from "../../../components/Grid";
import Card from "../../../components/Card";
import CardList from "../../../components/CardList";
import Alert from "../../../components/Alert";
import ResourceLink from "../../../components/ResourceLink";
import FlashcardSet from "../../../components/FlashcardSet";
import Accordion from "../../../components/Accordion";

import PageHeader from "../../../components/PageHeader";

function ARIAAuthoringPracticeGuide() {
    const flashcards = useMemo(() => [
        {
            front: "What is the ARIA Authoring Practices Guide (APG)?",
            back: "A W3C resource that provides guidance on how to use WAI-ARIA to create accessible widgets and interactions. It includes design patterns, keyboard interactions, and code examples."
        },
        {
            front: "What are the three key components of each APG pattern?",
            back: "1. Description of the widget\n2. Keyboard interaction requirements\n3. WAI-ARIA roles, states, and properties needed"
        },
        {
            front: "When should you use ARIA according to the APG?",
            back: "Only when native HTML elements cannot provide the required semantics or functionality. Native HTML should always be the first choice."
        },
        {
            front: "What is a 'composite widget' in ARIA?",
            back: "A widget made up of multiple interactive elements that function as a single unit, like a listbox, menu, or grid. Focus management typically uses roving tabindex."
        },
        {
            front: "What is the difference between 'menu' and 'menubar' roles?",
            back: "A menu is a container for menu items (like a dropdown). A menubar is a horizontal menu typically at the top of an application, containing menus or menuitems."
        }
    ], []);

    const widgetPatterns = useMemo(() => [
        {
            id: 'accordion',
            title: 'Accordion',
            description: 'A vertically stacked set of interactive headings that reveal/hide associated content sections.',
            content: (
                <>
                    <div className="detail-section">
                        <h4>Keyboard Interaction</h4>
                        <CardList>
                            <li>Enter/Space: Toggle expanded state of focused header</li>
                            <li>Tab: Move between accordion headers</li>
                            <li>Down Arrow: Move focus to next header (optional)</li>
                            <li>Up Arrow: Move focus to previous header (optional)</li>
                        </CardList>
                    </div>
                    <div className="detail-section">
                        <h4>ARIA Requirements</h4>
                        <CardList>
                            <li><code>button role on headers (or use &lt;button&gt;)</code></li>
                            <li><code>aria-expanded on buttons</code></li>
                            <li><code>aria-controls pointing to panel ID</code></li>
                            <li><code>region role on panels (optional)</code></li>
                        </CardList>
                    </div>
                </>
            )
        },
        {
            id: 'dialog',
            title: 'Modal Dialog',
            description: 'A dialog that requires user interaction before returning to the main content.',
            content: (
                <>
                    <div className="detail-section">
                        <h4>Keyboard Interaction</h4>
                        <CardList>
                            <li>Tab: Move focus to next focusable element inside dialog</li>
                            <li>Shift+Tab: Move focus to previous focusable element</li>
                            <li>Escape: Close the dialog</li>
                            <li>Focus must be trapped within the dialog</li>
                        </CardList>
                    </div>
                    <div className="detail-section">
                        <h4>ARIA Requirements</h4>
                        <CardList>
                            <li><code>role="dialog" or role="alertdialog"</code></li>
                            <li><code>aria-modal="true"</code></li>
                            <li><code>aria-labelledby pointing to dialog title</code></li>
                            <li><code>aria-describedby for dialog description (optional)</code></li>
                        </CardList>
                    </div>
                </>
            )
        },
        {
            id: 'tabs',
            title: 'Tabs',
            description: 'A set of layered sections of content where only one panel is displayed at a time.',
            content: (
                <>
                    <div className="detail-section">
                        <h4>Keyboard Interaction</h4>
                        <CardList>
                            <li>Tab: Move into/out of the tab list</li>
                            <li>Left/Right Arrow: Navigate between tabs</li>
                            <li>Home: First tab (optional)</li>
                            <li>End: Last tab (optional)</li>
                        </CardList>
                    </div>
                    <div className="detail-section">
                        <h4>ARIA Requirements</h4>
                        <CardList>
                            <li><code>role="tablist" on container</code></li>
                            <li><code>role="tab" on each tab</code></li>
                            <li><code>role="tabpanel" on each panel</code></li>
                            <li><code>aria-selected on tabs</code></li>
                            <li><code>aria-controls/aria-labelledby relationships</code></li>
                        </CardList>
                    </div>
                </>
            )
        },
        {
            id: 'combobox',
            title: 'Combobox',
            description: 'An input widget with an associated popup for suggesting values.',
            content: (
                <>
                    <div className="detail-section">
                        <h4>Keyboard Interaction</h4>
                        <CardList>
                            <li>Down Arrow: Open popup, move to first/next option</li>
                            <li>Up Arrow: Open popup, move to last/previous option</li>
                            <li>Enter: Select focused option</li>
                            <li>Escape: Close popup</li>
                            <li>Type characters: Filter options</li>
                        </CardList>
                    </div>
                    <div className="detail-section">
                        <h4>ARIA Requirements</h4>
                        <CardList>
                            <li><code>role="combobox" on input</code></li>
                            <li><code>aria-expanded indicates popup state</code></li>
                            <li><code>aria-autocomplete indicates filtering behavior</code></li>
                            <li><code>aria-activedescendant for virtual focus</code></li>
                            <li><code>role="listbox" or "grid" on popup</code></li>
                        </CardList>
                    </div>
                </>
            )
        },
        {
            id: 'slider',
            title: 'Slider',
            description: 'An input where the user selects a value from within a given range.',
            content: (
                <>
                    <div className="detail-section">
                        <h4>Keyboard Interaction</h4>
                        <CardList>
                            <li>Right/Up Arrow: Increase value</li>
                            <li>Left/Down Arrow: Decrease value</li>
                            <li>Home: Set to minimum value</li>
                            <li>End: Set to maximum value</li>
                            <li>Page Up/Down: Larger increment changes</li>
                        </CardList>
                    </div>
                    <div className="detail-section">
                        <h4>ARIA Requirements</h4>
                        <CardList>
                            <li><code>role="slider"</code></li>
                            <li><code>aria-valuenow: Current value</code></li>
                            <li><code>aria-valuemin: Minimum value</code></li>
                            <li><code>aria-valuemax: Maximum value</code></li>
                            <li><code>aria-valuetext: Human-readable value (optional)</code></li>
                        </CardList>
                    </div>
                </>
            )
        }
    ], []);

    return (
        <div className="container">

            <PageHeader 
                title="ARIA Authoring Practices Guide"
                lede={
                    <>
                        The <strong>ARIA Authoring Practices Guide (APG)</strong> is an essential W3C resource that
                        provides developers with guidance on how to build accessible custom widgets using WAI-ARIA.
                        It documents design patterns for common UI components including expected keyboard behaviors
                        and required ARIA attributes.
                    </>
                }
            >
                <ResourceLink 
                    href="https://www.w3.org/WAI/ARIA/apg/" 
                    text="Visit the ARIA Authoring Practices Guide ↗" 
                />
            </PageHeader>

            {/* Flashcard Study Section */}
            <section className="flashcard-section" aria-labelledby="flashcard-heading">
                <h2 id="flashcard-heading">Flashcard Study</h2>
                <p>Test your knowledge with these flashcards. Click to flip!</p>

                <FlashcardSet cards={flashcards} />
            </section>

            {/* Widget Patterns */}
            <section className="patterns-section" aria-labelledby="patterns-heading">
                <h2 id="patterns-heading">Common Widget Patterns</h2>
                <p>
                    The APG documents dozens of widget patterns. Here are some of the most common ones
                    you should know for the WAS exam:
                </p>

                <Accordion items={widgetPatterns} />
            </section>

            {/* Key Concepts */}
            <section className="concepts-section" aria-labelledby="concepts-heading">
                <h2 id="concepts-heading">Key Concepts from the APG</h2>

                <Grid classNamePrefix="concept" role="list" ariaLabel="Key Concepts from the APG">
                    <Card classNamePrefix="concept" title="Design Patterns vs. Examples">
                        <p>
                            The APG provides both abstract <strong>design patterns</strong> (the requirements)
                            and concrete <strong>examples</strong> (implementations). Always refer to the
                            pattern documentation, not just copy code from examples.
                        </p>
                    </Card>

                    <Card classNamePrefix="concept" title="Keyboard Navigation Models">
                        <p>
                            The APG defines two main keyboard navigation models:
                        </p>
                        <CardList>
                            <li><strong>Roving tabindex:</strong> Only one element in a group is in the tab order at a time</li>
                            <li><strong>aria-activedescendant:</strong> Focus stays on container, virtual focus is managed</li>
                        </CardList>
                    </Card>

                    <Card classNamePrefix="concept" title="Progressive Enhancement">
                        <p>
                            The APG recommends starting with native HTML elements and only adding ARIA when
                            necessary. This ensures basic functionality even if JavaScript fails.
                        </p>
                    </Card>

                    <Card classNamePrefix="concept" title="Focus Management">
                        <p>
                            Custom widgets must manage focus appropriately. This includes:
                        </p>
                        <CardList>
                            <li>Setting initial focus</li>
                            <li>Moving focus on user interaction</li>
                            <li>Returning focus after closing popups</li>
                        </CardList>
                    </Card>
                </Grid>
            </section>

            {/* Study Tips */}
            <Alert type="info" title="Exam Study Tips">
                <ul className="tips-list">
                    <li>
                        <strong>Memorize keyboard interactions</strong> for common widgets like tabs, dialogs,
                        menus, and comboboxes
                    </li>
                    <li>
                        <strong>Understand the relationship</strong> between ARIA attributes like
                        aria-controls, aria-labelledby, and aria-describedby
                    </li>
                    <li>
                        <strong>Know when to use native HTML</strong> vs. when ARIA is actually needed
                    </li>
                    <li>
                        <strong>Practice identifying issues</strong> in code examples that don't follow APG patterns
                    </li>
                </ul>
            </Alert>

        </div>
    );
}

export default ARIAAuthoringPracticeGuide;