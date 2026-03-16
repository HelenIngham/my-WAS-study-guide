import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ResourceLink from "../../../components/ResourceLink";
import CategorizationExercise from "../../../components/CategorizationExercise";
import AccessibilityTreeDemo from "../../../components/AccessibilityTreeDemo";
import Tabs from "../../../components/Tabs";

function StrategiesOfPersonsWithDisabilities() {
    const flashcards = [
        {
            front: "What is an 'adaptive strategy'?",
            back: "Configuring standard software and hardware according to a person's needs, such as increasing text size, changing colors, or reducing mouse speed."
        },
        {
            front: "What is 'assistive technology' (AT)?",
            back: "Specialized software or hardware used by people with disabilities to increase, maintain, or improve functional capabilities (e.g., screen readers, magnification software)."
        },
        {
            front: "What are common screen reader navigation strategies?",
            back: "Navigating by semantic markup like headings, landmarks, links, and tables, as well as using search functions."
        },
        {
            front: "What is the impact of Windows High Contrast Mode?",
            back: "It overrides author-defined colors with a limited, high-contrast palette, which can sometimes hide information if not properly implemented (e.g., using background images for meaning)."
        },
        {
            front: "Which screen reader/browser combinations are commonly recommended?",
            back: "NVDA with Firefox, JAWS with Chrome/Edge, and VoiceOver with Safari."
        }
    ];

    const categorizationItems = [
        { id: "1", label: "Screen Reader", correctCategory: "at" },
        { id: "2", label: "Increasing Text Size", correctCategory: "as" },
        { id: "3", label: "Refreshable Braille Display", correctCategory: "at" },
        { id: "4", label: "Reducing Mouse Speed", correctCategory: "as" },
        { id: "5", label: "Voice Input Software", correctCategory: "at" },
        { id: "6", label: "Changing Background Color", correctCategory: "as" },
        { id: "7", label: "Joysticks or Trackballs", correctCategory: "at" },
        { id: "8", label: "Turning on Captions", correctCategory: "as" }
    ];

    const categories = [
        { id: "at", label: "Assistive Technology" },
        { id: "as", label: "Adaptive Strategy" }
    ];

    const treeNodes = [
        {
            id: "heading",
            html: "<h1>Main Title</h1>",
            role: "heading",
            name: "Main Title",
            states: ["level: 1"],
            description: "Screen reader users often navigate by jumping from heading to heading to understand page structure."
        },
        {
            id: "nav",
            html: "<nav aria-label='Main'>...</nav>",
            role: "navigation",
            name: "Main",
            states: [],
            description: "Landmarks allow users to bypass repetitive content and jump directly to major sections of the page."
        },
        {
            id: "button",
            html: "<button>Submit</button>",
            role: "button",
            name: "Submit",
            states: ["focusable"],
            description: "Buttons must be keyboard accessible and have a clear accessible name for screen reader users."
        }
    ];

    const tabData = [
        {
            id: "visual",
            label: "Visual",
            content: (
                <div>
                    <h3>Blindness & Low Vision</h3>
                    <ul>
                        <li><strong>Screen Readers:</strong> Convert text to speech or braille. Users navigate via headings, landmarks, and links.</li>
                        <li><strong>Magnification:</strong> Enlarges content. Users may only see a small portion of the screen at once.</li>
                        <li><strong>Contrast:</strong> Some users require high contrast modes or custom color schemes.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "motor",
            label: "Motor",
            content: (
                <div>
                    <h3>Motor Disabilities</h3>
                    <ul>
                        <li><strong>Keyboard-Only:</strong> Many users cannot use a mouse and rely on Tab, Enter, and Space.</li>
                        <li><strong>Alternative Inputs:</strong> Switch access, mouth sticks, or eye-tracking.</li>
                        <li><strong>Voice Control:</strong> Users dictate commands to navigate and interact.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "auditory",
            label: "Auditory",
            content: (
                <div>
                    <h3>Hearing Disabilities</h3>
                    <ul>
                        <li><strong>Captions & Transcripts:</strong> Essential for accessing audio and video content.</li>
                        <li><strong>Visual Alerts:</strong> Replacing audio cues with visual signals.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "cognitive",
            label: "Cognitive",
            content: (
                <div>
                    <h3>Cognitive & Learning</h3>
                    <ul>
                        <li><strong>Consistency:</strong> Predictable navigation and layout help reduce cognitive load.</li>
                        <li><strong>Simplicity:</strong> Clear language and avoiding distractions.</li>
                        <li><strong>Personalization:</strong> Tools to simplify layouts or change fonts (e.g., OpenDyslexic).</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <div className="container">
            <PageHeader title="H Strategies of persons with disabilities in using web solutions" />
            
            <section className="section">
                <Callout title="Study Tasks">
                    <ul>
                        <li>Understand the accessible design principles and how they relate to user needs.</li>
                        <li>Define the terms “assistive technology” and “adaptive strategies”.</li>
                        <li>List different types of assistive technologies and adaptive strategies.</li>
                        <li>List types of disabilities and related accessibility needs.</li>
                        <li>Understand the impact of design decisions on accessibility for people.</li>
                        <li>Be familiar with different types of assistive technologies and how they work.</li>
                        <li>Identify most common screen readers and recommended combinations to ensure better compatibility.</li>
                        <li>Be familiar with navigation strategies using a screen reader.</li>
                        <li>Understand the modes of interaction across screen readers and their impact on browsing with the assistive technology.</li>
                        <li>Know the consequences of using contrast enhancement modes such as Windows High Contrast Mode.</li>
                    </ul>
                </Callout>
            </section>

            <section className="section">
                <h2>Overview</h2>
                <p>
                    People with disabilities often use different methods to access web content than the general population. 
                    Some people rely on <strong>adaptive strategies</strong>, which mean configuring standard software and hardware 
                    according to a person’s needs, such as increasing text size, changing colour and background colour, 
                    reducing mouse speed, and turning on captions.
                </p>
                <p>
                    Others may use <strong>assistive technologies</strong>, such as screen readers, magnification software, etc., 
                    or just alternative input devices such as keyboard or voice input. Many kinds of assistive technologies 
                    are designed for many different kinds of disabilities. For example, most people who are blind use a 
                    screen reader that allows them to listen to web content and navigate through it according to the 
                    semantic markup (e.g., landmarks, headings, tables, etc.).
                </p>
                <p>
                    Standard computer hardware, mobile devices, operating systems, and web browsers have built-in features 
                    for customizing the computer, accessibility features, and solutions.
                </p>
                <p>
                    Creating accessible content benefits from knowing about different strategies; and how different concepts, 
                    designs, and implementations affect those strategies.
                </p>
            </section>

            <section className="section">
                <h2>Disabilities and Strategies</h2>
                <p>Explore how different users interact with web solutions:</p>
                <Tabs tabs={tabData} ariaLabel="Disability categories and strategies" />
            </section>

            <section className="section">
                <AccessibilityTreeDemo 
                    nodes={treeNodes} 
                    title="Demo: Semantic Navigation"
                    intro="Screen reader users rely on the accessibility tree, which is built from semantic HTML. Explore how different elements are exposed:"
                />
            </section>

            <section className="section">
                <h2>Learning Activities</h2>
                <div style={{ marginBottom: '2rem' }}>
                    <h3>Flashcards</h3>
                    <FlashcardSet cards={flashcards} />
                </div>
                
                <CategorizationExercise 
                    items={categorizationItems} 
                    categories={categories}
                    title="Practice: AT vs. Adaptive Strategies"
                    intro="Distinguishing between Assistive Technology (specialized tools) and Adaptive Strategies (modifying standard settings) is key for the WAS exam."
                />
            </section>

            <section className="section">
                <h2>Resources</h2>
                <ul>
                    <li><ResourceLink href="https://www.w3.org/WAI/people-use-web/" text="How People with Disabilities Use the Web, WAI W3C" /></li>
                    <li><ResourceLink href="https://www.w3.org/WAI/people-use-web/abilities-barriers/" text="Diverse Abilities and Barriers, WAI W3C" /></li>
                    <li><ResourceLink href="https://www.w3.org/WAI/people-use-web/tools-techniques/" text="Tools and Techniques, WAI W3C" /></li>
                    <li><ResourceLink href="https://www.w3.org/WAI/perspective-videos/" text="Web Accessibility Perspectives Videos, WAI W3C" /></li>
                    <li><ResourceLink href="https://tetralogical.com/blog/2021/01/18/browsing-with-assistive-technology/" text="Browsing with assistive technology, TetraLogical, 2021" /></li>
                    <li><ResourceLink href="https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide" text="Dyslexia friendly style guide, The British Dyslexia Association, 2023" /></li>
                    <li><ResourceLink href="https://www.w3.org/WAI/cognitive/" text="Cognitive Accessibility at W3C, WAI W3C" /></li>
                    <li><ResourceLink href="https://www.w3.org/WAI/standards-guidelines/wcag/supplemental-guidance/" text="All Supplemental Guidance, WAI W3C" /></li>
                    <li><ResourceLink href="https://www.w3.org/TR/coga-usable/" text="Making Content Usable for People with Cognitive and Learning Disabilities, W3C Working Group Note" /></li>
                    <li><ResourceLink href="https://webaim.org/techniques/keyboard/" text="Keyboard Accessibility, WebAIM, 2022" /></li>
                    <li><ResourceLink href="https://webaim.org/projects/screenreadersurvey9/" text="Screen Reader User Survey #9 Results, WebAIM 2021" /></li>
                    <li><ResourceLink href="https://briandeconinck.com/designing-and-coding-for-voice/" text="Designing and Coding for Voice by Brian DeConinck, 2023" /></li>
                </ul>
            </section>
        </div>
    );
}

export default StrategiesOfPersonsWithDisabilities;