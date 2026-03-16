import React from "react";
import PageHeader from "../../../components/PageHeader";
import Tabs from "../../../components/Tabs";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import AccessibleChecklist from "../../../components/AccessibleChecklist";
import SuccessCriteriaMapper from "../../../components/SuccessCriteriaMapper";
import PointerGestureDemo from "../../../components/PointerGestureDemo";
import TouchTargetSimulator from "../../../components/TouchTargetSimulator";

function IdentifyIssuesForTouchUsers() {
  const checklistItems = [
    { id: "target-size", label: "Large touch target size (at least 44x44 CSS pixels for AAA, 24x24 for AA in WCAG 2.2)" },
    { id: "spacing", label: "Adequate spacing between touch targets to prevent accidental activation" },
    { id: "orientation", label: "No restriction to a single display orientation (portrait or landscape)" },
    { id: "path-gestures", label: "Functionality using multipoint or path-based gestures can be operated with a single pointer" },
    { id: "motion-alt", label: "Alternative UI controls for functionality operated by device or user motion" },
    { id: "motion-disable", label: "Users can disable motion features to prevent accidental activation" },
    { id: "viewport-parity", label: "All desktop functionality is available on small touch screens (e.g., via a menu)" },
    { id: "resize-text", label: "Text can be resized to 200% without loss of content or functionality" },
    { id: "zoom-200", label: "No loss of functionality when zooming up to 200%" }
  ];

  const flashcards = [
    {
      front: "What are the primary touch target size requirements?",
      back: "WCAG 2.1 (AAA) 2.5.5 requires 44x44 CSS pixels. WCAG 2.2 (AA) 2.5.8 requires at least 24x24 CSS pixels with adequate spacing.",
    },
    {
      front: "True or False: All touch device owners use touch interaction.",
      back: "False. Users may use voice commands, Bluetooth keyboards, or switch devices with their touch-enabled devices.",
    },
    {
      front: "What is required for path-based gestures (SC 2.5.1)?",
      back: "Functionality must be operable with a single pointer without a path-based gesture, unless the path is essential.",
    },
    {
      front: "How should motion-actuated features be handled (SC 2.5.4)?",
      back: "Provide an alternative UI control (like a button) and allow users to disable the motion activation.",
    },
    {
      front: "What does SC 1.3.4 Orientation require?",
      back: "Content should not restrict its view and operation to a single display orientation, such as portrait or landscape, unless essential.",
    }
  ];

  const scScenarios = [
    {
      id: "touch-1",
      description: "A mobile app only works in portrait mode and doesn't rotate when the user turns their tablet.",
      options: ["1.3.4 Orientation", "2.5.1 Pointer Gestures", "2.5.4 Motion Actuation"],
      correctOption: "1.3.4 Orientation",
      explanation: "SC 1.3.4 requires that content does not restrict its view and operation to a single display orientation."
    },
    {
      id: "touch-2",
      description: "A map requires a 'pinch-to-zoom' gesture with two fingers and has no other way to zoom in or out.",
      options: ["2.5.1 Pointer Gestures", "2.5.2 Pointer Cancellation", "2.5.5 Target Size"],
      correctOption: "2.5.1 Pointer Gestures",
      explanation: "Multipoint gestures (like pinch-to-zoom) must have a single-pointer alternative (like + and - buttons)."
    },
    {
      id: "touch-3",
      description: "A user can shake their phone to undo an action, but there is no button to perform the same undo action.",
      options: ["2.5.4 Motion Actuation", "2.5.1 Pointer Gestures", "2.1.1 Keyboard"],
      correctOption: "2.5.4 Motion Actuation",
      explanation: "Functionality operated by device motion must also be operable by user interface components."
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
              Mobile and touch accessibility testing ensures that users can interact with web content 
              regardless of their input method or device orientation. Not all touch device owners 
              use touch interaction; they may use keyboards, switches, or voice control.
            </p>
            <AccessibleChecklist 
              title="Touch & Mobile Accessibility Checklist" 
              items={checklistItems} 
            />
          </section>
          
          <div style={{ marginTop: '2rem' }}>
            <Callout 
                title="Input Variety" 
                text="Remember that 'Mobile' does not always mean 'Touch'. Always test with a keyboard or switch device connected to the mobile device to ensure full interoperability."
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
          <TouchTargetSimulator />
          <hr style={{ margin: '3rem 0' }} />
          <PointerGestureDemo />
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
            title="Activity: Touch Success Criteria Mapping"
          />
          
          <FlashcardSet 
            cards={flashcards} 
            title="Touch & Mobile Accessibility Flashcards" 
          />

          <ExamTakeaway title="Key Takeaways for Touch Users">
            <ul>
              <li><strong>Target Size:</strong> Aim for 44x44 CSS pixels (SC 2.5.5) or at least 24x24 with spacing (SC 2.5.8).</li>
              <li><strong>Gestures:</strong> Always provide single-pointer alternatives for complex gestures (SC 2.5.1).</li>
              <li><strong>Orientation:</strong> Support both portrait and landscape modes (SC 1.3.4).</li>
              <li><strong>Motion:</strong> Ensure motion-triggered actions have buttons and can be disabled (SC 2.5.4).</li>
              <li><strong>Zoom:</strong> Ensure the site remains functional at 200% zoom and doesn't lose content on small screens.</li>
            </ul>
          </ExamTakeaway>
        </>
      )
    }
  ];

  return (
    <div className="container">
      <PageHeader
        title="6. Identify Issues for Touch Users"
        description="Learn to identify accessibility barriers for users on touch-enabled devices, including target size, gestures, motion actuation, and responsive design."
      />

      <Tabs tabs={tabs} ariaLabel="Touch accessibility issues sections" />
    </div>
  );
}

export default IdentifyIssuesForTouchUsers;