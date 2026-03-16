import React from "react";
import PageHeader from "../../../components/PageHeader";
import Tabs from "../../../components/Tabs";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import AccessibleChecklist from "../../../components/AccessibleChecklist";
import SuccessCriteriaMapper from "../../../components/SuccessCriteriaMapper";
import DistractionSimulator from "../../../components/DistractionSimulator";
import ClearContentSimulator from "../../../components/ClearContentSimulator";

function IdentifyIssuesForUsersWithCognitiveOrLearningDisabilities() {
  const checklistItems = [
    { id: "autocomplete", label: "Input fields collecting user info use appropriate autocomplete attributes" },
    { id: "audio-control", label: "Automatically playing audio can be turned off" },
    { id: "timeouts", label: "Session timeouts can be turned off or adjusted" },
    { id: "moving-content", label: "Scrolling, moving, or blinking content can be stopped by the user" },
    { id: "page-titles", label: "Page titles describe the topic or purpose" },
    { id: "descriptive-links", label: "Link text is descriptive or determined by context" },
    { id: "multiple-ways", label: "More than one way to locate a page (navigation, search, sitemap)" },
    { id: "headings-labels", label: "Headings and labels are descriptive" },
    { id: "focus-context", label: "Focusing on a component doesn't cause an unexpected change of context" },
    { id: "input-context", label: "Changing a setting doesn't cause an unexpected change of context" },
    { id: "consistent-nav", label: "Navigation mechanisms are positioned consistently" },
    { id: "consistent-id", label: "Components with same functionality are identified consistently" },
    { id: "error-id", label: "Error messages are programmatically identifiable and described in text" },
    { id: "labels-instructions", label: "Descriptive labels or instructions for user input are available" },
    { id: "error-suggestions", label: "Error suggestions are provided when possible" },
    { id: "error-prevention", label: "Error prevention mechanism for legal and financial data" },
    { id: "icons-text", label: "Use a combination of icons and text for better clarity" }
  ];

  const flashcards = [
    {
      front: "What is the purpose of SC 1.3.5 Identify Input Purpose?",
      back: "To help users with cognitive disabilities by allowing browsers to autofill common fields using the 'autocomplete' attribute.",
    },
    {
      front: "How should session timeouts be handled for cognitive accessibility?",
      back: "Users must be able to turn off, adjust, or extend the time limit (SC 2.2.1 Timing Adjustable).",
    },
    {
      front: "Why is 'Consistent Navigation' (SC 3.2.3) important?",
      back: "It helps users with cognitive disabilities predict where they will find specific content or functionality on different pages.",
    },
    {
      front: "What does 'Error Suggestion' (SC 3.3.3) require?",
      back: "If an input error is detected and suggestions for correction are known, they should be provided to the user (unless it jeopardizes security).",
    },
    {
      front: "What are 'Unexpected Changes of Context'?",
      back: "Actions like automatically submitting a form on focus or opening a new window without warning when a checkbox is clicked (SC 3.2.1, 3.2.2).",
    }
  ];

  const scScenarios = [
    {
      id: "cog-1",
      description: "A form field for 'First Name' does not have an autocomplete attribute, making it harder for users with memory impairments to fill it out.",
      options: ["1.3.5 Identify Input Purpose", "3.3.2 Labels or Instructions", "3.2.4 Consistent Identification"],
      correctOption: "1.3.5 Identify Input Purpose",
      explanation: "SC 1.3.5 requires autocomplete attributes for fields that collect information about the user."
    },
    {
      id: "cog-2",
      description: "A news site has a scrolling ticker of headlines that cannot be paused or hidden.",
      options: ["2.2.1 Timing Adjustable", "2.2.2 Pause, Stop, Hide", "2.3.1 Three Flashes or Below Threshold"],
      correctOption: "2.2.2 Pause, Stop, Hide",
      explanation: "Any moving, scrolling, or blinking information that starts automatically and lasts more than 5 seconds must have a mechanism to pause, stop, or hide it."
    },
    {
      id: "cog-3",
      description: "When a user selects a value from a dropdown menu, the page automatically reloads and submits the data without warning.",
      options: ["3.2.1 On Focus", "3.2.2 On Input", "3.3.1 Error Identification"],
      correctOption: "3.2.2 On Input",
      explanation: "Changing the setting of any user interface component must not cause a change of context unless the user has been advised of the behavior before using the component."
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
              Cognitive accessibility focuses on making content easier to understand and use. 
              This involves reducing cognitive load, providing clear instructions, and ensuring 
              the interface behaves predictably.
            </p>
            <AccessibleChecklist 
              title="Cognitive Accessibility Checklist" 
              items={checklistItems} 
            />
          </section>
          
          <div style={{ marginTop: '2rem' }}>
            <Callout 
                title="The Importance of Predictability" 
                text="For many users with cognitive disabilities, unexpected changes (like pop-ups, automatic redirects, or layout shifts) can be highly disorienting. Consistency in navigation and identification is key."
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
          <DistractionSimulator />
          <hr style={{ margin: '3rem 0' }} />
          <ClearContentSimulator />
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
            title="Activity: Cognitive Success Criteria Mapping"
          />
          
          <FlashcardSet 
            cards={flashcards} 
            title="Cognitive Accessibility Flashcards" 
          />

          <ExamTakeaway title="Key Takeaways for Cognitive Disabilities">
            <ul>
              <li><strong>Predictability:</strong> Navigation (3.2.3) and Identification (3.2.4) must be consistent across the site.</li>
              <li><strong>Control:</strong> Users must be able to stop moving content (2.2.2) and adjust time limits (2.2.1).</li>
              <li><strong>Input Assistance:</strong> Use autocomplete (1.3.5), provide clear labels (3.3.2), and offer error suggestions (3.3.3).</li>
              <li><strong>Context:</strong> Avoid unexpected changes on focus (3.2.1) or input (3.2.2).</li>
              <li><strong>Error Prevention:</strong> For financial/legal/test data, allow users to reverse, check, or confirm submissions (3.3.4).</li>
            </ul>
          </ExamTakeaway>
        </>
      )
    }
  ];

  return (
    <div className="container">
      <PageHeader
        title="5. Identify Issues for Users with Cognitive or Learning Disabilities"
        description="Learn to identify and mitigate barriers for users with cognitive, learning, and neurological disabilities, focusing on clarity, predictability, and user control."
      />

      <Tabs tabs={tabs} ariaLabel="Cognitive accessibility issues sections" />
    </div>
  );
}

export default IdentifyIssuesForUsersWithCognitiveOrLearningDisabilities;