import React from "react";
import PageHeader from "../../../components/PageHeader";
import Tabs from "../../../components/Tabs";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import AccessibleChecklist from "../../../components/AccessibleChecklist";
import FocusOrderDemo from "../../../components/FocusOrderDemo";
import FocusTrapDemo from "../../../components/FocusTrapDemo";
import PointerGestureDemo from "../../../components/PointerGestureDemo";
import MatchingExercise from "../../../components/MatchingExercise";

function IdentifyIssuesForUsersWhoUseAKeyboardOrAlternativeInputDevice() {
  const checklistItems = [
    { id: "keyboard-operable", label: "All functionality is operable via the keyboard, there is no keyboard trap." },
    { id: "bypass-content", label: "There is a way to bypass repeated content (e.g., Skip links)." },
    { id: "logical-focus", label: "The focus order is logical, intuitive and predictable." },
    { id: "visible-focus", label: "The focus indicator is easily visible." },
    { id: "single-pointer", label: "Functionality that uses multipoint or path-based gestures can be operated with a single pointer (e.g., by activating a button)." },
    { id: "up-event", label: "Only up-events execute the function, or users can reverse or undo that function." },
    { id: "motion-alt", label: "For functionality operated by device motion or user motion, there is an alternative user interface control (e.g., clicking a button)." },
    { id: "motion-disable", label: "Motion activation can be disabled to prevent accidental activation due to tremors or spasms." },
    { id: "native-controls", label: "Interactive elements are implemented using native controls or proper ARIA mark-up (for speech command activation)." },
    { id: "shortcuts", label: "Character key shortcuts can be turned off, remapped or are only active on focus (voice control friendly)." },
    { id: "audio-off", label: "No audio, or audio can be turned off (essential for voice control users)." },
    { id: "label-match", label: "The programmatic label matches the visual label (voice control)." },
  ];

  const flashcards = [
    {
      front: "What is a 'Keyboard Trap'?",
      back: "A situation where a keyboard user can move focus into a control but cannot move it out again using only the keyboard.",
    },
    {
      front: "Why are 'Skip Links' important?",
      back: "They allow keyboard users to bypass repetitive blocks of content (like navigation menus) and jump straight to the main content.",
    },
    {
      front: "What does WCAG 2.5.1 Pointer Gestures require?",
      back: "That any functionality using path-based or multi-point gestures can also be operated with a single pointer without a path-based gesture.",
    },
    {
      front: "How does 'Label in Name' benefit voice control users?",
      back: "It ensures that the words spoken to activate a button (the visual label) match the programmatic name (ARIA label), preventing confusion.",
    },
    {
        front: "What is an 'Up-Event' in the context of accessibility?",
        back: "Executing a function only when the mouse button is released (mouseup/click) rather than when it's first pressed down. This allows users to cancel an accidental click by moving the pointer away.",
    }
  ];

  const matchingPairs = [
    { term: "2.1.1 Keyboard", definition: "All functionality is operable via keyboard." },
    { term: "2.4.3 Focus Order", definition: "Focus moves in a logical and predictable sequence." },
    { term: "2.4.7 Focus Visible", definition: "It's clear which element currently has keyboard focus." },
    { term: "2.5.1 Pointer Gestures", definition: "Path-based gestures have single-pointer alternatives." },
    { term: "2.5.3 Label in Name", definition: "Visual text label matches the programmatic name." },
  ];

  const correctMatches = {
    "2.1.1 Keyboard": "All functionality is operable via keyboard.",
    "2.4.3 Focus Order": "Focus moves in a logical and predictable sequence.",
    "2.4.7 Focus Visible": "It's clear which element currently has keyboard focus.",
    "2.5.1 Pointer Gestures": "Path-based gestures have single-pointer alternatives.",
    "2.5.3 Label in Name": "Visual text label matches the programmatic name.",
  };

  const tabs = [
    {
      id: "checklist",
      label: "Audit Checklist",
      content: (
        <>
          <section>
            <p>
                Users who do not use a mouse rely on keyboard navigation, switch interfaces, or voice control. 
                Testing for these users ensures that every interactive element is reachable, identifiable, and operable 
                without precise motor control or visual feedback of a cursor.
            </p>
            <AccessibleChecklist 
              title="Keyboard & Alternative Input Highlights" 
              items={checklistItems} 
            />
          </section>
          
          <div style={{ marginTop: '2rem' }}>
            <Callout 
                title="Voice Control Tip" 
                text="Users of Dragon NaturallySpeaking or Voice Control (iOS/macOS) activate buttons by saying their visual label. If the visual label is 'Submit' but the aria-label is 'Send Message', the voice command might fail."
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
          <FocusOrderDemo />
          <hr style={{ margin: '3rem 0' }} />
          <div className="demo-wrapper">
             <h3>Focus Management: The Modal Pattern</h3>
             <p>A properly managed modal must trap focus within its boundaries until closed, and return focus to the trigger afterwards.</p>
             <FocusTrapDemo />
          </div>
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
          <MatchingExercise 
            pairs={matchingPairs}
            correctMatches={correctMatches}
            title="Activity: Match the Success Criteria"
            intro="Connect the WCAG success criteria to their core requirements for keyboard and alternative input."
          />
          
          <FlashcardSet 
            cards={flashcards} 
            title="Keyboard & Input Device Flashcards" 
          />

          <ExamTakeaway title="Key Takeaways for the Exam">
            <ul>
              <li><strong>No Keyboard Traps:</strong> Focus must always be able to leave an element (especially important for modals and embedded content).</li>
              <li><strong>Logical Path:</strong> Focus order should follow the visual/reading flow (Top-to-bottom, Left-to-right).</li>
              <li><strong>Single Pointer:</strong> Dragging or swiping must have button-click or tap alternatives.</li>
              <li><strong>Motion Neutrality:</strong> If shaking the device triggers an action, there must be a button to do the same, and the motion trigger must be toggleable.</li>
              <li><strong>Pointer Cancellation:</strong> Actions should trigger on 'up' (click), not 'down' (mousedown), so users can abort the action.</li>
            </ul>
          </ExamTakeaway>
        </>
      )
    }
  ];

  return (
    <div className="container">
      <PageHeader
        title="2. Identify Issues for Users who use a keyboard or alternative input device"
        description="Learn how to verify accessibility for users who rely on keyboards, switches, eye-tracking, or voice control."
      />

      <Tabs tabs={tabs} ariaLabel="Keyboard and alternative input issues sections" />
    </div>
  );
}

export default IdentifyIssuesForUsersWhoUseAKeyboardOrAlternativeInputDevice;