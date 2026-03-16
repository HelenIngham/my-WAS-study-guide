import React from "react";
import PageHeader from "../../../components/PageHeader";
import Tabs from "../../../components/Tabs";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import AccessibleChecklist from "../../../components/AccessibleChecklist";
import ScreenReaderSimulator from "../../../components/ScreenReaderSimulator";
import LiveRegionDemo from "../../../components/LiveRegionDemo";
import IssueSpotter from "../../../components/IssueSpotter";

function IdentifyIssuesForScreenReaderUsers() {
  const checklistItems = [
    { id: "alt", label: "Alternatives exist for images and video" },
    { id: "semantic", label: "Semantic markup conveys meaning (headings, lists, tables, paragraphs etc.)" },
    { id: "order", label: "Order of content presented to AT is 'meaningful' and follows visual order" },
    { id: "sensory", label: "No instructions are based on sensory characteristics alone (shape, color, placement)" },
    { id: "audio", label: "Automatically playing audio can be turned off" },
    { id: "scrolling", label: "Scrolling or moving content is avoided or can be stopped by the user" },
    { id: "titles", label: "Page titles describe topic or purpose" },
    { id: "bypass", label: "There is a way to bypass repeated content (Skip links, landmarks, headings)" },
    { id: "keyboard", label: "All functionality is operable via keyboard, no keyboard traps" },
    { id: "focus", label: "Focus order is logical, intuitive, and predictable" },
    { id: "links", label: "Link text is descriptive or determined by context" },
    { id: "lang", label: "Correct language of the page is set for proper pronunciation" },
    { id: "errors", label: "Error messages are programmatically identified and described in text" },
    { id: "role-name-value", label: "Role, name, and value of interactive components are available and updated" },
    { id: "dynamic", label: "Dynamic status messages use live regions" },
  ];

  const flashcards = [
    {
      front: "Why is semantic markup important for screen reader users?",
      back: "It conveys meaning and structure (like headings, lists, and tables) that is otherwise only visual, allowing users to navigate and understand the page hierarchy.",
    },
    {
      front: "What is a 'meaningful order' in the context of assistive technology?",
      back: "The sequence in which content is read by a screen reader. It should follow a logical flow, usually matching the visual presentation, to ensure the content makes sense.",
    },
    {
      front: "How should dynamic updates be communicated to screen readers?",
      back: "Using ARIA live regions (aria-live), which allow screen readers to announce changes to the page without the user losing their current focus.",
    },
    {
      front: "What are the three essential properties every interactive component must have?",
      back: "Role (what it is), Name (its label), and Value (its current state, e.g., 'checked' or 'expanded').",
    },
    {
        front: "What is the danger of instructions like 'Click the green button on the right'?",
        back: "They rely on sensory characteristics (color, position) which may not be perceivable by users who are blind or have low vision.",
    }
  ];

  const simulatorElements = [
    { tag: 'h1', content: 'Identifying Issues' },
    { tag: 'p', content: 'To check for accessibility, look for semantic landmarks.' },
    { tag: 'nav', content: 'Main Navigation', role: 'navigation' },
    { tag: 'a', content: 'Skip to content', href: '#main' },
    { tag: 'img', content: '', ariaLabel: 'A diagram of the accessibility tree' },
    { tag: 'button', content: 'Submit Audit' },
  ];

  const issues = [
    {
      id: "issue1",
      title: "Navigation Issue",
      snippet: `<div onclick="navigateTo('home')">Home</div>`,
      options: [
        "Missing Alternative Text",
        "Non-semantic Interactive Element",
        "Incorrect Language Setting",
        "Sensory Instruction"
      ],
      correctOption: "Non-semantic Interactive Element",
      explanation: "Using a <div> with an onclick handler instead of a <button> or <a> means it won't be keyboard accessible or identified as interactive by screen readers by default."
    },
    {
      id: "issue2",
      title: "Instruction Issue",
      snippet: `<p>Please click the red circle to delete the item.</p>`,
      options: [
        "Keyboard Trap",
        "Meaningful Order",
        "Sensory Characteristics",
        "Bypass Blocks"
      ],
      correctOption: "Sensory Characteristics",
      explanation: "The instruction relies solely on color ('red') and shape ('circle'), which users who are blind or color-blind may not be able to perceive."
    },
    {
        id: "issue3",
        title: "Image Issue",
        snippet: `<img src="chart.png">`,
        options: [
            "Missing Alternative Text",
            "Focus Order",
            "Live Region Update",
            "Page Title"
        ],
        correctOption: "Missing Alternative Text",
        explanation: "Images must have an 'alt' attribute. If it's informative, it needs a description. If it's decorative, it needs an empty alt (alt='')."
    }
  ];

  const tabs = [
    {
      id: "checklist",
      label: "Audit Checklist",
      content: (
        <>
          <section>
            <p>
                When testing with screen readers, you must look beyond just "does it read the text?" 
                Accessibility involves structure, behavior, and programmatic indicators that allow 
                assistive technology to reconstruct the visual experience for the user.
            </p>
            <AccessibleChecklist 
              title="Screen Reader Testing Highlights" 
              items={checklistItems} 
            />
          </section>
          
          <div style={{ marginTop: '2rem' }}>
            <Callout 
                title="Pro Tip: The Power of 'Role, Name, Value'" 
                text="Every interactive widget (accordion, tab, menu) must programmatically expose its role (what is it?), its name (what does it do?), and its value/state (is it open? is it selected?). Without these, a screen reader user is flying blind."
            />
          </div>
        </>
      )
    },
    {
      id: "demos",
      label: "Interactive Demos",
      content: (
        <>
          <ScreenReaderSimulator 
            elements={simulatorElements}
            title="Demo 1: Linear Navigation Simulation"
            intro="See how a screen reader flattens the visual hierarchy into a linear stream of information."
          />
          <hr style={{ margin: '3rem 0' }} />
          <LiveRegionDemo />
        </>
      )
    },
    {
      id: "practice",
      label: "Practice & Mastery",
      content: (
        <>
          <IssueSpotter 
            issues={issues} 
            title="Activity: Accessibility Issue Spotter"
          />
          
          <FlashcardSet 
            cards={flashcards} 
            title="Screen Reader Testing Flashcards" 
          />

          <ExamTakeaway title="Key Takeaways for the Exam">
            <ul>
              <li><strong>Semantic HTML:</strong> Use the right tag for the right job (headings, buttons, lists).</li>
              <li><strong>Keyboard First:</strong> If it's not keyboard-operable, it's not screen-reader accessible.</li>
              <li><strong>Contextual Links:</strong> Avoid 'Click here'; ensure link text makes sense on its own or within its paragraph.</li>
              <li><strong>Live Regions:</strong> Essential for dynamic updates that don't move the user's focus.</li>
              <li><strong>Programmatic Identification:</strong> Errors and status changes must be described in text and associated with their inputs.</li>
            </ul>
          </ExamTakeaway>
        </>
      )
    }
  ];

  return (
    <div className="container">
      <PageHeader
        title="1. Identify Issues for Screen Reader Users"
        description="Learn the critical elements to verify when testing web content with screen readers and other assistive technologies."
      />

      <Tabs tabs={tabs} ariaLabel="Identify Issues for Screen Reader Users sections" />
    </div>
  );
}

export default IdentifyIssuesForScreenReaderUsers;