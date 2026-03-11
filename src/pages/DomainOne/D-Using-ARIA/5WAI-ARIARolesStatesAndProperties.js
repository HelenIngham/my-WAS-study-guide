
import React, { useMemo } from 'react';
import Grid from "../../../components/Grid";
import Card from "../../../components/Card";
import CardList from "../../../components/CardList";
import Tabs from "../../../components/Tabs";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import RoleSearch from "../../../components/RoleSearch";
import PageHeader from "../../../components/PageHeader";
import ComparisonTable from "../../../components/ComparisonTable";

function WAIARIARolesStatesAndProperties() {
    const roleCategories = useMemo(() => ({
        landmark: {
            title: 'Landmark Roles',
            description: 'Define major sections of a page for navigation purposes.',
            roles: [
                {
                    name: 'banner',
                    htmlEquiv: '<header> (when not nested)',
                    description: 'Site-oriented content, typically at the top of the page.',
                    usage: 'Usually contains logo, site title, and primary navigation.'
                },
                {
                    name: 'navigation',
                    htmlEquiv: '<nav>',
                    description: 'A collection of navigation links.',
                    usage: 'Label with aria-label when multiple nav regions exist.'
                },
                {
                    name: 'main',
                    htmlEquiv: '<main>',
                    description: 'The primary content of the document.',
                    usage: 'Should only be one per page unless others have aria-hidden="true".'
                },
                {
                    name: 'complementary',
                    htmlEquiv: '<aside>',
                    description: 'Supporting content related to the main content.',
                    usage: 'Sidebars, related links, advertisements.'
                },
                {
                    name: 'contentinfo',
                    htmlEquiv: '<footer> (when not nested)',
                    description: 'Information about the document/site.',
                    usage: 'Copyright, privacy policy links, contact info.'
                },
                {
                    name: 'region',
                    htmlEquiv: '<section> (with accessible name)',
                    description: 'A generic landmark for content sections.',
                    usage: 'Must have an accessible name to be a landmark.'
                },
                {
                    name: 'search',
                    htmlEquiv: '<search> (HTML5.2+)',
                    description: 'Search functionality for the site.',
                    usage: 'Contains form controls for searching.'
                },
                {
                    name: 'form',
                    htmlEquiv: '<form> (with accessible name)',
                    description: 'A region containing form elements.',
                    usage: 'Only a landmark when it has an accessible name.'
                }
            ]
        },
        widget: {
            title: 'Widget Roles',
            description: 'Define interactive UI components.',
            roles: [
                {
                    name: 'button',
                    htmlEquiv: '<button>',
                    description: 'A clickable element that triggers an action.',
                    usage: 'Use native <button> when possible.'
                },
                {
                    name: 'link',
                    htmlEquiv: '<a href>',
                    description: 'A hyperlink to another resource.',
                    usage: 'Use native <a> with href when possible.'
                },
                {
                    name: 'checkbox',
                    htmlEquiv: '<input type="checkbox">',
                    description: 'A checkable input with true/false/mixed states.',
                    usage: 'Requires aria-checked state.'
                },
                {
                    name: 'radio',
                    htmlEquiv: '<input type="radio">',
                    description: 'One of a group of checkable buttons.',
                    usage: 'Should be grouped with radiogroup role.'
                },
                {
                    name: 'textbox',
                    htmlEquiv: '<input type="text">, <textarea>',
                    description: 'An input for free-form text.',
                    usage: 'Can be single or multiline.'
                },
                {
                    name: 'slider',
                    htmlEquiv: '<input type="range">',
                    description: 'Input for selecting a value from a range.',
                    usage: 'Requires aria-valuenow, aria-valuemin, aria-valuemax.'
                },
                {
                    name: 'combobox',
                    htmlEquiv: 'None',
                    description: 'An input with an associated popup.',
                    usage: 'Complex pattern - see ARIA APG.'
                },
                {
                    name: 'listbox',
                    htmlEquiv: '<select>',
                    description: 'A list from which a user can select items.',
                    usage: 'Contains option role children.'
                },
                {
                    name: 'menu',
                    htmlEquiv: 'None',
                    description: 'A list of choices/actions.',
                    usage: 'Use for application menus, not navigation.'
                },
                {
                    name: 'menuitem',
                    htmlEquiv: 'None',
                    description: 'An option in a menu.',
                    usage: 'Child of menu or menubar.'
                },
                {
                    name: 'tab',
                    htmlEquiv: 'None',
                    description: 'A tab in a tablist.',
                    usage: 'Requires aria-selected and aria-controls.'
                },
                {
                    name: 'tabpanel',
                    htmlEquiv: 'None',
                    description: 'Content associated with a tab.',
                    usage: 'Should be labelledby its associated tab.'
                },
                {
                    name: 'dialog',
                    htmlEquiv: '<dialog>',
                    description: 'A dialog box or window.',
                    usage: 'Use aria-modal="true" for modal dialogs.'
                },
                {
                    name: 'alertdialog',
                    htmlEquiv: 'None',
                    description: 'A dialog with important information requiring response.',
                    usage: 'Like dialog but focus must go to an element inside.'
                },
                {
                    name: 'progressbar',
                    htmlEquiv: '<progress>',
                    description: 'Shows completion progress of a task.',
                    usage: 'Use aria-valuenow, aria-valuemin, aria-valuemax.'
                },
                {
                    name: 'spinbutton',
                    htmlEquiv: '<input type="number">',
                    description: 'Input for selecting from a range using up/down.',
                    usage: 'Requires value attributes.'
                }
            ]
        },
        structure: {
            title: 'Document Structure Roles',
            description: 'Provide structure and organization to content.',
            roles: [
                {
                    name: 'heading',
                    htmlEquiv: '<h1>-<h6>',
                    description: 'A heading for a section.',
                    usage: 'Requires aria-level if not using native headings.'
                },
                {
                    name: 'list',
                    htmlEquiv: '<ul>, <ol>',
                    description: 'A list of items.',
                    usage: 'Children should have listitem role.'
                },
                {
                    name: 'listitem',
                    htmlEquiv: '<li>',
                    description: 'An item in a list.',
                    usage: 'Must be child of list.'
                },
                {
                    name: 'table',
                    htmlEquiv: '<table>',
                    description: 'A data table.',
                    usage: 'Use native HTML tables when possible.'
                },
                {
                    name: 'row',
                    htmlEquiv: '<tr>',
                    description: 'A row in a table or grid.',
                    usage: 'Child of table, grid, or treegrid.'
                },
                {
                    name: 'cell',
                    htmlEquiv: '<td>',
                    description: 'A cell in a table.',
                    usage: 'Child of row.'
                },
                {
                    name: 'rowheader',
                    htmlEquiv: '<th scope="row">',
                    description: 'A header cell for a row.',
                    usage: 'Use scope attribute on native th.'
                },
                {
                    name: 'columnheader',
                    htmlEquiv: '<th scope="col">',
                    description: 'A header cell for a column.',
                    usage: 'Use scope attribute on native th.'
                },
                {
                    name: 'img',
                    htmlEquiv: '<img>',
                    description: 'An image.',
                    usage: 'Requires aria-label or aria-labelledby.'
                },
                {
                    name: 'article',
                    htmlEquiv: '<article>',
                    description: 'Independent, self-contained content.',
                    usage: 'Blog posts, news articles, comments.'
                },
                {
                    name: 'group',
                    htmlEquiv: 'None (similar to <fieldset>)',
                    description: 'Groups related UI elements.',
                    usage: 'For grouping that is not a landmark.'
                },
                {
                    name: 'separator',
                    htmlEquiv: '<hr>',
                    description: 'Divides content sections.',
                    usage: 'Can be focusable if it adjusts layout.'
                }
            ]
        },
        live: {
            title: 'Live Region Roles',
            description: 'Announce dynamic content changes.',
            roles: [
                {
                    name: 'alert',
                    htmlEquiv: 'None',
                    description: 'Important, time-sensitive message.',
                    usage: 'Automatically announced. Use sparingly.'
                },
                {
                    name: 'status',
                    htmlEquiv: '<output>',
                    description: 'Advisory information that is not critical.',
                    usage: 'Has implicit aria-live="polite".'
                },
                {
                    name: 'log',
                    htmlEquiv: 'None',
                    description: 'Sequential information like chat history.',
                    usage: 'New items added to the end.'
                },
                {
                    name: 'marquee',
                    htmlEquiv: 'None',
                    description: 'Non-essential changing information.',
                    usage: 'Stock tickers, scrolling ads.'
                },
                {
                    name: 'timer',
                    htmlEquiv: 'None',
                    description: 'A numerical counter.',
                    usage: 'Countdown timers, elapsed time.'
                }
            ]
        }
    }), []);

    const statesAndProperties = useMemo(() => ({
        states: [
            { name: 'aria-checked', values: 'true | false | mixed', description: 'Current checked state of checkboxes, radio buttons' },
            { name: 'aria-disabled', values: 'true | false', description: 'Element is perceivable but not operable' },
            { name: 'aria-expanded', values: 'true | false', description: 'Whether a collapsible element is expanded' },
            { name: 'aria-hidden', values: 'true | false', description: 'Whether element is exposed to accessibility API' },
            { name: 'aria-invalid', values: 'true | false | grammar | spelling', description: 'Entered value does not conform to expected format' },
            { name: 'aria-pressed', values: 'true | false | mixed', description: 'Current pressed state of toggle buttons' },
            { name: 'aria-selected', values: 'true | false', description: 'Current selected state of various widgets' },
            { name: 'aria-busy', values: 'true | false', description: 'Element is being modified and AT should wait' }
        ],
        properties: [
            { name: 'aria-label', values: 'string', description: 'Defines accessible name for element' },
            { name: 'aria-labelledby', values: 'ID reference(s)', description: 'References elements that label this element' },
            { name: 'aria-describedby', values: 'ID reference(s)', description: 'References elements that describe this element' },
            { name: 'aria-controls', values: 'ID reference(s)', description: 'Identifies element(s) controlled by this element' },
            { name: 'aria-owns', values: 'ID reference(s)', description: 'Defines parent-child relationship not in DOM' },
            { name: 'aria-live', values: 'off | polite | assertive', description: 'Indicates live region and its priority' },
            { name: 'aria-atomic', values: 'true | false', description: 'Whether entire region should be announced on change' },
            { name: 'aria-relevant', values: 'additions | removals | text | all', description: 'What changes trigger announcements' },
            { name: 'aria-required', values: 'true | false', description: 'Input is required before form submission' },
            { name: 'aria-readonly', values: 'true | false', description: 'Element is not editable but otherwise operable' },
            { name: 'aria-haspopup', values: 'menu | listbox | tree | grid | dialog | true | false', description: 'Indicates popup is available' },
            { name: 'aria-modal', values: 'true | false', description: 'Whether element blocks interaction with rest of page' },
            { name: 'aria-current', values: 'page | step | location | date | time | true | false', description: 'Indicates current item in a set' },
            { name: 'aria-level', values: 'integer', description: 'Hierarchical level within a structure' },
            { name: 'aria-valuenow', values: 'number', description: 'Current value for range widgets' },
            { name: 'aria-valuemin', values: 'number', description: 'Minimum allowed value for range widgets' },
            { name: 'aria-valuemax', values: 'number', description: 'Maximum allowed value for range widgets' },
            { name: 'aria-valuetext', values: 'string', description: 'Human-readable text for current value' }
        ]
    }), []);

    const quizQuestions = useMemo(() => [
        {
            id: 1,
            question: 'Which landmark role is the HTML equivalent of <header> (when not nested)?',
            options: ['main', 'banner', 'navigation', 'region'],
            correct: 1
        },
        {
            id: 2,
            question: 'What is the key difference between aria-label and aria-labelledby?',
            options: [
                'aria-label is deprecated',
                'aria-label accepts a string; aria-labelledby references element IDs',
                'aria-labelledby accepts a string; aria-label references element IDs',
                'There is no difference'
            ],
            correct: 1
        },
        {
            id: 3,
            question: 'Which ARIA state would you use to indicate a toggle button is pressed?',
            options: ['aria-checked', 'aria-selected', 'aria-pressed', 'aria-expanded'],
            correct: 2
        },
        {
            id: 4,
            question: 'What does aria-live="polite" mean?',
            options: [
                'The content is announced immediately, interrupting the user',
                'The content is announced when the user is idle',
                'The content is never announced',
                'The content is hidden from screen readers'
            ],
            correct: 1
        },
        {
            id: 5,
            question: 'Which role should be used for site-wide search functionality?',
            options: ['form', 'search', 'navigation', 'region'],
            correct: 1
        },
        {
            id: 6,
            question: 'What is required for a <section> element to be a landmark?',
            options: [
                'Nothing, it\'s always a landmark',
                'The role="region" attribute',
                'An accessible name (aria-label or aria-labelledby)',
                'It must contain a heading'
            ],
            correct: 2
        }
    ], []);

    const roleTabs = useMemo(() => Object.keys(roleCategories).map((category) => ({
        id: category,
        label: roleCategories[category].title,
        content: (
            <RoleSearch
                category={category}
                title={roleCategories[category].title}
                description={roleCategories[category].description}
                roles={roleCategories[category].roles}
            />
        )
    })), [roleCategories]);

    return (
        <div className="container">
            <PageHeader
                title="WAI-ARIA Roles, States, and Properties"
                lede={
                    <>
                        WAI-ARIA (Accessible Rich Internet Applications) defines three types of attributes
                        that modify how elements appear in the accessibility tree. It bridges the gap between
                        complex UI components and assistive technologies.
                    </>
                }
            />

            <section className="intro-section">
                <h2>Understanding ARIA Attributes</h2>
                <Card classNamePrefix="attribute-info" role="region" ariaLabel="Types of ARIA attributes">
                    <CardList>
                        <li>
                            <strong>Roles:</strong> Define what an element IS (button, checkbox, navigation, etc.)
                        </li>
                        <li>
                            <strong>States:</strong> Dynamic properties that change during interaction (expanded, checked, selected)
                        </li>
                        <li>
                            <strong>Properties:</strong> Relatively static characteristics (labelledby, required, haspopup)
                        </li>
                    </CardList>
                </Card>
            </section>

            {/* Roles Section */}
            <section className="roles-section" aria-labelledby="roles-heading">
                <h2 id="roles-heading">ARIA Roles Reference</h2>

                <Tabs 
                    tabs={roleTabs} 
                    ariaLabel="Role categories" 
                    classNamePrefix="category"
                />
            </section>

            {/* States and Properties Section */}
            <section className="states-properties-section" aria-labelledby="states-heading">
                <h2 id="states-heading">States and Properties Reference</h2>

                <ComparisonTable
                    title="ARIA States (Dynamic)"
                    headers={["Attribute", "Values", "Description"]}
                    rows={statesAndProperties.states.map(state => ({
                        rowHeader: <code>{state.name}</code>,
                        data: [<code>{state.values}</code>, state.description]
                    }))}
                />

                <ComparisonTable
                    title="ARIA Properties (Relatively Static)"
                    headers={["Attribute", "Values", "Description"]}
                    rows={statesAndProperties.properties.map(prop => ({
                        rowHeader: <code>{prop.name}</code>,
                        data: [<code>{prop.values}</code>, prop.description]
                    }))}
                />
            </section>

            {/* Key Concepts */}
            <section className="concepts-section" aria-labelledby="concepts-heading">
                <h2 id="concepts-heading">Key Concepts for the Exam</h2>

                <Grid classNamePrefix="concepts" role="list" ariaLabel="Key Concepts for the Exam">
                    <Card classNamePrefix="concept" title="States vs. Properties" role="listitem">
                        <p>
                            <strong>States</strong> change frequently during user interaction
                            (aria-expanded, aria-checked). <strong>Properties</strong> are more static
                            and typically don't change (aria-labelledby, aria-required).
                        </p>
                    </Card>

                    <Card classNamePrefix="concept" title="Required vs. Supported Attributes" role="listitem">
                        <p>
                            Some roles have <strong>required</strong> attributes (e.g., slider requires
                            aria-valuenow). Others are <strong>supported</strong> but optional. Check the
                            ARIA spec for each role.
                        </p>
                    </Card>

                    <Card classNamePrefix="concept" title="Implicit vs. Explicit Roles" role="listitem">
                        <p>
                            Native HTML elements have <strong>implicit</strong> roles (button has button role).
                            ARIA roles are <strong>explicit</strong> and can override implicit roles.
                        </p>
                    </Card>

                    <Card classNamePrefix="concept" title="Abstract Roles" role="listitem">
                        <p>
                            Some roles (like <code>widget</code>, <code>landmark</code>, <code>roletype</code>)
                            are <strong>abstract</strong> and should never be used directly in content.
                        </p>
                    </Card>
                </Grid>
            </section>

            <MultipleChoiceQuiz questions={quizQuestions} />

        </div>
    );
}

export default WAIARIARolesStatesAndProperties;