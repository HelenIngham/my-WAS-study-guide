import React from "react";
import PageHeader from "../../../components/PageHeader";
import Tabs from "../../../components/Tabs";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import FocusOrderDemo from "../../../components/FocusOrderDemo";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import MatchingExercise from "../../../components/MatchingExercise";
import ExamTakeaway from "../../../components/ExamTakeaway";
import Card from "../../../components/Card";
import CardList from "../../../components/CardList";

function UsersWithMotorDisabilities() {
  const flashcards = [
    {
      front: "What are some causes of motor disabilities?",
      back: "Paralysis, fine motoric dysfunctions (due to pain, tremors, or rheumatism), limitations of sensation, joint disorders (e.g., arthritis), and limb differences.",
    },
    {
      front: "What is the primary navigation method for keyboard users with motor disabilities?",
      back: "Sequential navigation through focusable elements using Tab and Shift + Tab keys.",
    },
    {
      front: "What determines the default keyboard focus order on a web page?",
      back: "The order of the elements in the Document Object Model (DOM).",
    },
    {
      front: "What is a 'skip to main content' link and why is it important?",
      back: "A link that allows users to jump over repetitive navigation to the main content, saving time and effort for keyboard and speech-recognition users.",
    },
    {
      front: "How does speech recognition software typically interact with web elements?",
      back: "By using keyboard-based commands (e.g., 'Tab') or by clicking labels (e.g., 'Click home') or using a 'MouseGrid'.",
    },
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "Which of these is NOT a common input method for people with motor disabilities?",
      options: ["Sip-and-puff mouse", "Head pointer", "Eye tracking", "Refreshable Braille display"],
      correct: 3,
    },
    {
      id: 2,
      question: "Why is a clearly visible focus indicator essential?",
      options: [
        "It makes the page look more modern.",
        "Sighted keyboard users need to see which element is currently focused.",
        "It is required for screen readers to announce the element.",
        "It helps with color contrast accessibility.",
      ],
      correct: 1,
    },
    {
      id: 3,
      question: "What does speech recognition software use when a control doesn't have a label?",
      options: ["VoiceOver", "MouseGrid", "Keyboard simulator", "ARIA live regions"],
      correct: 1,
    },
  ];

  const conceptPairs = [
    {
      term: "Visible Focus",
      definition: "Critical for sighted keyboard users to see where they are since no screen reader announces the location.",
    },
    {
      term: "Efficiency",
      definition: "Full keyboard operation and intuitive order are vital because users cannot easily scan via screen reader lists.",
    },
    {
      term: "Clickable Areas",
      definition: "Large and easy-to-spot interactive regions are essential for users with limited motor precision.",
    },
    {
      term: "Speech Input",
      definition: "Unique, non-duplicate link names allow elements to be addressed unambiguously by voice commands.",
    },
    {
      term: "Prediction & Autofill",
      definition: "Significantly reduces the number of physical keystrokes required for data entry.",
    },
  ];

  const conceptMatches = {
    "Visible Focus": "Critical for sighted keyboard users to see where they are since no screen reader announces the location.",
    Efficiency: "Full keyboard operation and intuitive order are vital because users cannot easily scan via screen reader lists.",
    "Clickable Areas": "Large and easy-to-spot interactive regions are essential for users with limited motor precision.",
    "Speech Input": "Unique, non-duplicate link names allow elements to be addressed unambiguously by voice commands.",
    "Prediction & Autofill": "Significantly reduces the number of physical keystrokes required for data entry.",
  };

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <section className="content-section">
          <p>
            Users with motor disabilities are a broad group. Some are entirely or partly paralyzed; others have fine motoric dysfunctions, for example, due to pain, tremors, or rheumatism. Motor disabilities also include limitations of sensation, joint disorders (for example, arthritis), and limb differences.
          </p>
          <p>
            Depending on their needs and preferences, people with motor disabilities use specialised hardware and software (mouse / mouse-like devices, keyboard / keyboard-like devices, or voice control).
          </p>
          <Callout title="Assistive Technology Variety">
            People with motor disabilities may use head pointers, mouth sticks, switches, eye-tracking, or voice recognition software to interact with digital content.
          </Callout>
        </section>
      ),
    },
    {
      id: "keyboard",
      label: "Keyboard Navigation",
      content: (
        <section className="content-section">
          <h2>5.1. Keyboard Navigation and Focus</h2>
          <p>
            People who depend on the keyboard instead of the mouse often navigate sequentially through the focusable page elements, such as links, buttons, and form elements.
          </p>
          <h3>Key Concepts:</h3>
          <ul>
            <li><strong>Focus Order:</strong> Must be logical and intuitive, generally following the visual order on the page.</li>
            <li><strong>DOM Order:</strong> By default, focus order is set by the order of elements in the DOM. Problems occur when interactive elements are appended at the end of the page but appear elsewhere visually.</li>
            <li><strong>Focus Indicator:</strong> Essential for sighted keyboard users to see where they are on the page.</li>
            <li><strong>Standard Keystrokes:</strong> Tab (next), Shift + Tab (previous), Enter (activate links), Space/Enter (activate buttons).</li>
          </ul>
          
          <FocusOrderDemo />

          <Callout title="Skip Links" type="pro-tip">
            Keyboard-only users cannot jump back and forth between headings or lists as easily as screen reader users. Providing a <strong>"skip to main content"</strong> link is best practice to avoid tedious navigation through repetitive links.
          </Callout>
        </section>
      ),
    },
    {
      id: "concepts",
      label: "Important Concepts",
      content: (
        <section className="content-section">
          <h2>5.2. Important Concepts</h2>
          <p>
            Understanding these core principles is essential for designing interfaces that are usable by people with a wide range of motor disabilities.
          </p>
          
          <div className="concepts-grid" style={{ marginBottom: '2rem' }}>
            <Card title="Core Design Principles" ariaLabel="Core motor accessibility principles">
              <CardList>
                <li><strong>Visible Focus:</strong> Sighted keyboard users must see where they are.</li>
                <li><strong>Efficiency:</strong> Minimize keystrokes; provide logical order.</li>
                <li><strong>Precision:</strong> Provide large targets for limited dexterity.</li>
                <li><strong>Clarity:</strong> Use unique labels for speech-to-text accuracy.</li>
              </CardList>
            </Card>
          </div>

          <MatchingExercise 
            title="Practice: Key Concepts for Motor Accessibility"
            intro="Match each accessibility concept to its practical impact on motor disability users."
            pairs={conceptPairs}
            correctMatches={conceptMatches}
          />
        </section>
      ),
    },
    {
      id: "hardware",
      label: "Input Methods",
      content: (
        <section className="content-section">
          <h2>5.3. Pointer-Based and Keyboard-like Devices</h2>
          <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h3>Common Devices:</h3>
              <ul>
                <li>Ergonomic keyboard/mouse</li>
                <li>Head pointer, mouth stick</li>
                <li>Sip-and-puff mouse</li>
                <li>Voice-controlled mouse grid</li>
                <li>On-screen keyboard</li>
                <li>Switches (foot, shoulder, etc.)</li>
                <li>Eye tracking</li>
              </ul>
            </div>
            <div>
              <h3>Common Software:</h3>
              <ul>
                <li>SteadyMouse (tremor software)</li>
                <li>EyeGaze / Tobii (eye-tracking)</li>
                <li>Switch Control (iOS / Android)</li>
                <li>Mac OS Headpointer</li>
              </ul>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: "speech",
      label: "Speech Recognition",
      content: (
        <section className="content-section">
          <h2>5.4. Speech Recognition Software</h2>
          <p>
            Speech recognition software transcribes human speech into text or actionable commands. It is used by people who cannot use a keyboard or mouse, and also benefits people with cognitive disabilities.
          </p>
          <h3>How it Works:</h3>
          <ul>
            <li><strong>Commands:</strong> Often based on keyboard operation (e.g., saying "Tab" or "Click Home").</li>
            <li><strong>Disambiguation:</strong> If multiple links have the same text, the software can display numbers next to them (e.g., "Click seven").</li>
            <li><strong>MouseGrid:</strong> A grid overlay that allows users to home in on specific coordinates by speaking numbers.</li>
          </ul>
          <Callout title="Popular Software">
            <ul>
              <li><strong>Built-in:</strong> Windows Speech Recognition, MacOS/iOS Voice Control, Android Voice Access.</li>
              <li><strong>Standalone:</strong> Dragon (Desktop), Dragon Anywhere (Mobile).</li>
            </ul>
          </Callout>
        </section>
      ),
    },
    {
      id: "practice",
      label: "Practice & Review",
      content: (
        <section className="content-section">
          <h2>Learning Activities</h2>
          <FlashcardSet flashcards={flashcards} />
          <MultipleChoiceQuiz questions={quizQuestions} title="Knowledge Check: Motor Disabilities" />
        </section>
      ),
    },
  ];

  return (
    <div className="container">
      <PageHeader title="5. Users with Motor Disabilities" />
      <div className="intro-text">
        <p>
          Understanding how users with motor disabilities interact with the web is crucial for creating accessible experiences. This section covers the diverse range of motor impairments and the assistive technologies used to overcome them.
        </p>
      </div>

      <Tabs tabs={tabs} ariaLabel="Motor disabilities content tabs" />

      <ExamTakeaway title="Motor Disabilities Key Takeaways">
        <ul>
          <li><strong>Keyboard is King:</strong> Ensuring full functionality via keyboard is the single most important factor for motor accessibility.</li>
          <li><strong>Focus Visibility:</strong> A clear focus indicator is non-negotiable for sighted keyboard users.</li>
          <li><strong>DOM Order = Focus Order:</strong> Maintain a logical DOM structure to ensure a predictable navigation experience.</li>
          <li><strong>Speech Recognition:</strong> Design with "Click" commands in mind; use unique and descriptive labels.</li>
        </ul>
      </ExamTakeaway>
    </div>
  );
}

export default UsersWithMotorDisabilities;