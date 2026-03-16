import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import Tabs from "../../../components/Tabs";
import Example from "../../../components/Example";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import TrueFalseQuiz from "../../../components/TrueFalseQuiz";
import ExamTakeaway from "../../../components/ExamTakeaway";

function ManagingState() {
  const [liveMessage, setLiveMessage] = useState("");

  const updateMessage = (msg) => {
    setLiveMessage(""); // Clear for repeat announcements
    setTimeout(() => setLiveMessage(msg), 50);
  };

  const tabs = [
    {
      id: "fundamentals",
      label: "Fundamentals",
      content: (
        <div className="tab-content">
          <h3>The Role of JavaScript in State</h3>
          <p>
            JavaScript is critical to accessibility as it ensures that assistive technologies can gather information about the status of user interface controls.
          </p>
          <Callout 
            title="Native vs. Custom Controls"
            text="Standard HTML UI elements (like <button> or <input type='checkbox'>) convey their state to assistive technologies automatically according to the specification. However, additional effort is needed for custom controls."
          />
          <p>
            Information about a component's state must be managed using ARIA state attributes. JavaScript is used to toggle their values dynamically.
          </p>
          <Example label="Common ARIA States">
            <ul>
              <li><code>aria-expanded</code>: Indicates if a collapsible component (like an accordion or menu) is open or closed.</li>
              <li><code>aria-selected</code>: Indicates the selected state of an element in a set (like a tab or tree item).</li>
              <li><code>aria-pressed</code>: Indicates the state of a toggle button.</li>
              <li><code>aria-checked</code>: Indicates the state of a checkbox or radio button.</li>
            </ul>
          </Example>
        </div>
      )
    },
    {
      id: "live-regions",
      label: "Dynamic Updates & Live Regions",
      content: (
        <div className="tab-content">
          <h3>Conveying Dynamic Changes</h3>
          <p>
            If parts of a page are changed dynamically (with JavaScript) without reloading the entire page, these changes are not obvious to users of assistive technologies since they do not receive focus.
          </p>
          <p>
            Such updates, for example, information on the success or result of an action, have to be conveyed to screen reader users using <strong>ARIA live regions</strong>.
          </p>
          
          <div className="demo-section">
            <h4>Live Region Requirements</h4>
            <ul>
              <li><strong>Presence in DOM:</strong> The container marked up as a live region (e.g., <code>aria-live="polite"</code> or <code>role="alert"</code>) must be present in the DOM when the page loads.</li>
              <li><strong>Dynamic Injection:</strong> Only the <em>content</em> within that container should be added or exchanged dynamically to trigger an announcement.</li>
            </ul>
          </div>

          <div className="demo-section">
            <h4>Interactive Demo: Live Region</h4>
            <p>Select a button to simulate a background update. The status message is inside an <code>aria-live="polite"</code> region.</p>
            <div className="live-region-demo">
              <div className="controls">
                <button className="btn btn-primary" onClick={() => updateMessage("Data saved successfully.")}>Save Data</button>
                <button className="btn btn-primary" onClick={() => updateMessage("Search results updated: 5 items found.")}>Update Search</button>
                <button className="btn btn-primary" onClick={() => setLiveMessage("")}>Clear Status</button>
              </div>
              <div className="status-area" aria-live="polite">
                {liveMessage}
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const flashcards = [
    {
      front: "Why is ARIA needed for custom controls but not for standard HTML elements?",
      back: "Standard HTML elements convey state automatically according to the specification; custom controls lack these built-in semantics and require ARIA state attributes."
    },
    {
      front: "How are ARIA state values (like aria-expanded) updated?",
      back: "JavaScript is used to toggle their values in response to user interaction."
    },
    {
      front: "What is an ARIA live region used for?",
      back: "To convey dynamic page updates (that don't receive focus) to screen reader users."
    },
    {
      front: "What is a critical requirement for a live region to be reliable across platforms?",
      back: "The container marked as a live region must be present in the DOM when loading, before the text is added or changed."
    }
  ];

  const mcQuizQuestions = [
    {
      id: 1,
      question: "Which ARIA attribute would you use for a custom accordion header to show if its content is visible?",
      options: [
        "aria-hidden",
        "aria-expanded",
        "aria-controls",
        "aria-selected"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "Why don't users of assistive technology always notice dynamic content changes made with JavaScript?",
      options: [
        "Dynamic content is invisible to screen readers by default",
        "Screen readers only read static HTML",
        "New content does not automatically receive focus",
        "JavaScript disables screen reader navigation"
      ],
      correct: 2
    }
  ];

  const tfQuizQuestions = [
    {
      id: "tf1",
      text: "A live region should be dynamically created in the DOM only when the update is ready to be shown.",
      correct: false,
      explanation: "False. The live region container must be present in the DOM on initial load to ensure reliable announcements across all platforms."
    },
    {
      id: "tf2",
      text: "JavaScript is responsible for toggling ARIA state attributes like 'aria-selected'.",
      correct: true,
      explanation: "True. While ARIA provides the semantics, JavaScript is required to manage and update the values of these attributes."
    }
  ];

  return (
    <div className="container">
      <PageHeader 
        title="7 Managing State" 
        lede="Learn how to communicate the status of UI components and dynamic updates to assistive technologies."
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

      <ExamTakeaway title="Managing State for the Exam">
        <ul>
          <li><strong>Native Semantics:</strong> Standard elements manage state automatically; custom ones do not.</li>
          <li><strong>ARIA State Attributes:</strong> Use attributes like <code>aria-expanded</code>, <code>aria-selected</code>, and <code>aria-checked</code> for custom controls.</li>
          <li><strong>JavaScript Role:</strong> Use JavaScript to dynamically toggle ARIA state values based on user interaction.</li>
          <li><strong>Live Regions:</strong> Use <code>aria-live</code> or ARIA live roles (like <code>alert</code>, <code>status</code>) for content that updates without moving focus.</li>
          <li><strong>Reliability Rule:</strong> Ensure live region containers exist in the DOM on page load.</li>
        </ul>
      </ExamTakeaway>
    </div>
  );
}

export default ManagingState;