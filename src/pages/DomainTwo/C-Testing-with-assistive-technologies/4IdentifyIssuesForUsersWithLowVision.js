import React from "react";
import PageHeader from "../../../components/PageHeader";
import Tabs from "../../../components/Tabs";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import AccessibleChecklist from "../../../components/AccessibleChecklist";
import ZoomSimulator from "../../../components/ZoomSimulator";
import SuccessCriteriaMapper from "../../../components/SuccessCriteriaMapper";
import TextSpacingDemo from "../../../components/TextSpacingDemo";

function IdentifyIssuesForUsersWithLowVision() {
  const checklistItems = [
    { id: "orientation", label: "No restriction to a single display orientation (portrait or landscape)" },
    { id: "no-color-alone", label: "No use of colour alone to convey information" },
    { id: "text-contrast", label: "Sufficient contrast of text" },
    { id: "non-text-contrast", label: "Sufficient contrast of non-text elements (e.g., icons, input borders)" },
    { id: "resize-200", label: "Text can be resized to 200% without loss of content or functionality" },
    { id: "zoom-200", label: "No loss of functionality when zooming up to 200%" },
    { id: "real-text", label: "Use of real text instead of images of text" },
    { id: "no-2d-scroll", label: "No two-dimensional scrolling necessary; content adapts to browser width" },
    { id: "text-spacing", label: "No loss of content or functionality when users change text spacing" },
    { id: "hover-focus", label: "Content on hover/focus is dismissible, non-auto-closing, and hoverable" },
    { id: "moving-content", label: "Scrolling or moving content can be stopped by the user" },
    { id: "logical-focus", label: "The focus order is logical, intuitive, and predictable" },
    { id: "visible-focus", label: "The focus indicator is easily visible" },
    { id: "descriptive-labels", label: "Descriptive labels or instructions for user input elements are available" }
  ];

  const flashcards = [
    {
      front: "What is the requirement for Text Resizing (SC 1.4.4)?",
      back: "Text must be resizable up to 200% without the use of assistive technology and without loss of content or functionality.",
    },
    {
      front: "Explain the 'No Color Alone' principle.",
      back: "Color should not be the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.",
    },
    {
      front: "What is 'Reflow' (SC 1.4.10) in WCAG?",
      back: "Content should be able to reflow so that it can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for vertical scrolling content at a width equivalent to 320 CSS pixels.",
    },
    {
      front: "What are the requirements for content on hover or focus (SC 1.4.13)?",
      back: "It must be Dismissible (without moving focus), Hoverable (the pointer can move over it), and Persistent (it stays visible until dismissed or no longer valid).",
    },
    {
      front: "Why is the contrast of non-text elements important?",
      back: "Users with low vision need to see the boundaries of input fields and identify icons to understand the interface structure and available actions (SC 1.4.11).",
    }
  ];

  const scScenarios = [
    {
      id: "lv-1",
      description: "A website uses a bright red border as the only way to indicate that a form field has an error.",
      options: ["1.4.1 Use of Color", "1.4.3 Contrast (Minimum)", "1.4.11 Non-text Contrast"],
      correctOption: "1.4.1 Use of Color",
      explanation: "Using only color to indicate an error state fails SC 1.4.1 because users who cannot perceive color will miss the information."
    },
    {
      id: "lv-2",
      description: "When a user zooms their browser to 400%, they are forced to scroll both horizontally and vertically to read a single paragraph.",
      options: ["1.4.4 Resize Text", "1.4.10 Reflow", "1.4.12 Text Spacing"],
      correctOption: "1.4.10 Reflow",
      explanation: "SC 1.4.10 Reflow requires that content can be viewed without two-dimensional scrolling at 400% zoom (320 CSS pixels wide)."
    },
    {
      id: "lv-3",
      description: "A button has a gray icon on a light gray background with a contrast ratio of 2.1:1.",
      options: ["1.4.3 Contrast (Minimum)", "1.4.11 Non-text Contrast", "1.3.1 Info and Relationships"],
      correctOption: "1.4.11 Non-text Contrast",
      explanation: "Visual information required to identify user interface components (like icons) must have a contrast ratio of at least 3:1."
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
              Testing for users with low vision involves checking how the interface adapts to different 
              viewing conditions, including magnification, custom styles, and high contrast settings.
            </p>
            <AccessibleChecklist 
              title="Low Vision Testing Highlights" 
              items={checklistItems} 
            />
          </section>
          
          <div style={{ marginTop: '2rem' }}>
            <Callout 
                title="Testing Tip: The 200% Zoom Test" 
                text="Set your browser zoom to 200%. Check if any text overlaps, disappears, or if buttons become unclickable. Then, try it at 400% to test for Reflow (vertical scrolling only)."
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
          <ZoomSimulator />
          <hr style={{ margin: '3rem 0' }} />
          <TextSpacingDemo />
        </>
      )
    },
    {
      id: "practice",
      label: "Practice & Mastery",
      content: (
        <>
          <SuccessCriteriaMapper 
            scenarios={scScenarios}
            title="Activity: Low Vision Success Criteria"
          />
          
          <FlashcardSet 
            cards={flashcards} 
            title="Low Vision Accessibility Flashcards" 
          />

          <ExamTakeaway title="Key Takeaways for the Exam">
            <ul>
              <li><strong>Reflow (1.4.10):</strong> Think 'No 2D scrolling'. At 400% zoom, users should only need to scroll in one direction.</li>
              <li><strong>Contrast Ratios:</strong> Standard text (AA) needs 4.5:1. Large text needs 3:1. Non-text elements need 3:1.</li>
              <li><strong>Images of Text:</strong> Avoid them! If you must use them, allow users to customize them (rarely practical, so 'avoid' is the main rule).</li>
              <li><strong>Text Spacing (1.4.12):</strong> A page must not 'break' when users apply their own styles for line height, word spacing, etc.</li>
              <li><strong>Focus Indicators:</strong> Must be 'easily visible'. A common failure is a focus ring that has low contrast against the background.</li>
            </ul>
          </ExamTakeaway>
        </>
      )
    }
  ];

  return (
    <div className="container">
      <PageHeader
        title="4. Identify Issues for Users with Low Vision"
        description="Learn how to identify and test for barriers faced by users with various types of low vision, including contrast, magnification, and layout issues."
      />

      <Tabs tabs={tabs} ariaLabel="Low vision issues sections" />
    </div>
  );
}

export default IdentifyIssuesForUsersWithLowVision;