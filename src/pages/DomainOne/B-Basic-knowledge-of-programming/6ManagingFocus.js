import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import Tabs from "../../../components/Tabs";
import Example from "../../../components/Example";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import TrueFalseQuiz from "../../../components/TrueFalseQuiz";
import ExamTakeaway from "../../../components/ExamTakeaway";
import FocusTrapDemo from "../../../components/FocusTrapDemo";
import RovingTabindexDemo from "../../../components/RovingTabindexDemo";

function ManagingFocus() {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="tab-content">
          <h3>Core Principles</h3>
          <p>
            When operating content with the keyboard, it is essential to ensure that the focus is easy to locate and to provide a logical focus sequence. The focus movement must be predictable and meet users’ expectations.
          </p>
          <Callout 
            title="Why Focus Management Matters"
            text="Focus management means knowing when to trap focus (for example, within a modal component) and ensuring the keyboard focus follows visual changes."
          />
          <p>
            Whenever JavaScript changes the visual focus (e.g. when a dialog is activated), JavaScript should be used to manage keyboard focus to follow the visual focus.
          </p>
        </div>
      )
    },
    {
      id: "dom-order",
      label: "DOM Order & Dynamic Content",
      content: (
        <div className="tab-content">
          <h3>Sequential Navigation</h3>
          <p>
            Consider DOM order and likely focus location when adding or updating content dynamically. 
          </p>
          <Example label="Best Practice">
            <p>
              When content is added or altered on a page, it should generally be added <strong>after</strong> the current point of focus.
            </p>
            <p>
              <em>Reasoning:</em> Screen reader users are much less likely to navigate backward in the DOM than forward. Adding content before the focus point causes users to miss most additions/changes.
            </p>
          </Example>
        </div>
      )
    },
    {
      id: "strategies",
      label: "Focus Strategies",
      content: (
        <div className="tab-content">
          <h3>Composite Widget Management</h3>
          <p>
            JavaScript widgets made accessible using ARIA require keyboard implementation and focus management according to keyboard interface conventions. It is recommended to follow the APG (Authoring Practices Guide) patterns.
          </p>
          <p>
            There are two primary strategies for managing focus inside composite widgets:
          </p>
          <ul>
            <li><strong>Roving tabindex:</strong> Dynamically changing <code>tabindex="0"</code> and <code>tabindex="-1"</code> on elements.</li>
            <li><strong>aria-activedescendant:</strong> Using the <code>aria-activedescendant</code> property to point to the currently active sub-element.</li>
          </ul>
          
          <div className="demo-section">
            <h4>Demo: Roving Tabindex</h4>
            <RovingTabindexDemo />
          </div>
          
          <div className="demo-section">
            <h4>Demo: Focus Trap</h4>
            <FocusTrapDemo />
          </div>
        </div>
      )
    }
  ];

  const flashcards = [
    {
      front: "Where should dynamic content generally be added in the DOM relative to current focus?",
      back: "After the current point of focus, as screen reader users primarily navigate forward."
    },
    {
      front: "What are the two main strategies for managing focus in composite widgets?",
      back: "Creating a roving tabindex and using the aria-activedescendant property."
    },
    {
      front: "When is a 'focus trap' necessary?",
      back: "When a modal dialog or similar component is activated, to prevent focus from escaping to the background content."
    }
  ];

  const mcQuizQuestions = [
    {
      id: 1,
      question: "Why should focus follow visual focus when a dialog is activated?",
      options: [
        "To make the page look better",
        "To ensure keyboard users can interact with the new content immediately",
        "To improve SEO performance",
        "It is not necessary if the dialog is visual only"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "Which of these is a strategy for managing focus within a menu or tab list?",
      options: [
        "aria-hidden",
        "aria-live",
        "Roving tabindex",
        "aria-pressed"
      ],
      correct: 2
    }
  ];

  const tfQuizQuestions = [
    {
      id: "tf1",
      text: "Screen reader users are more likely to navigate backward in the DOM than forward.",
      correct: false,
      explanation: "Screen reader users primarily navigate forward in the DOM, which is why dynamic content should be added after the current focus."
    },
    {
      id: "tf2",
      text: "JavaScript is required to manage focus when the visual focus changes significantly, such as when opening a modal.",
      correct: true,
      explanation: "Correct. JavaScript is essential for moving focus to a modal and trapping it there for accessibility."
    }
  ];

  return (
    <div className="container">
      <PageHeader 
        title="6 Managing Focus" 
        lede="Focus management is the art of controlling where the keyboard focus goes as users interact with your application."
      />

      <section className="section">
        <Tabs tabs={tabs} />
      </section>

      <section className="section">
        <h2>Learning Activities</h2>
        <FlashcardSet cards={flashcards} />
      </section>

      <section className="section">
        <h3>Knowledge Check: Multiple Choice</h3>
        <MultipleChoiceQuiz questions={mcQuizQuestions} />
      </section>

      <section className="section">
        <h3>Knowledge Check: True or False</h3>
        <TrueFalseQuiz questions={tfQuizQuestions} />
      </section>

      <ExamTakeaway title="Focus Management for the Exam">
        <ul>
          <li><strong>Predictability:</strong> Focus movement must be logical and meet user expectations.</li>
          <li><strong>Synchronization:</strong> Visual focus and keyboard focus must be kept in sync using JavaScript.</li>
          <li><strong>Placement:</strong> Dynamic content should be placed after the current focus point in the DOM.</li>
          <li><strong>Composite Widgets:</strong> Use Roving Tabindex or <code>aria-activedescendant</code> for widgets like tabs or menus.</li>
          <li><strong>Modals:</strong> Implement focus traps for modal dialogs to prevent keyboard escape.</li>
        </ul>
      </ExamTakeaway>
    </div>
  );
}

export default ManagingFocus;