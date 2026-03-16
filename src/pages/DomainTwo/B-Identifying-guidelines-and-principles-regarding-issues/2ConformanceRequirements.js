import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import Tabs from "../../../components/Tabs";
import ConformanceChecklist from "../../../components/ConformanceChecklist";
import FocusTrapDemo from "../../../components/FocusTrapDemo";
import LiveRegionDemo from "../../../components/LiveRegionDemo";

function ConformanceRequirements() {
  const flashcards = [
    {
      front: "What does conformance to a standard mean?",
      back: "Satisfying all requirements specified by the standard.",
    },
    {
      front: "How many general conformance requirements does WCAG provide?",
      back: "Five general conformance requirements.",
    },
    {
      front: "What approach is WCAG conformance based on?",
      back: "A pass/fail approach; there must not be any content that violates any Success Criterion.",
    },
    {
      front: "Is a conformance claim tied to the entire site?",
      back: "No, a strict conformance claim is tied to individual pages, though tests typically use a representative sample.",
    },
    {
      front: "What is requirement #2 regarding web pages?",
      back: "Full pages: Conformance refers to full web pages only. It cannot be achieved if parts of a page are excluded.",
    },
    {
      front: "What is requirement #3 regarding processes?",
      back: "Complete processes: All web pages in a process (e.g., a checkout) must conform at the specified level.",
    },
  ];

  const checklistScenario = {
    text: "A bank website has a 3-step 'Open Account' process. Step 1 and 2 are fully accessible (Level AA). Step 3 (Confirmation) has a keyboard trap that prevents users from finishing. The bank claims Level AA conformance for the process because the first two steps are perfect.",
    requirements: {
      1: { met: true, reason: "Steps 1 and 2 meet the criteria, but the overall claim fails due to Step 3." },
      2: { met: true, reason: "They are considering full pages." },
      3: { met: false, reason: "Requirement 3 (Complete Processes) is violated because the 'Confirmation' page in the process fails." },
      4: { met: true, reason: "Assuming standard tech is used." },
      5: { met: false, reason: "Requirement 5 (Non-Interference) is violated by the keyboard trap in Step 3, which blocks users." }
    }
  };

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <section className="content-section">
          <p>
            Conformance to a standard means satisfying all requirements specified by the standard. In order to test content against the WCAG requirements (Success Criteria), one can use a combination of automated testing and human evaluation.
          </p>
          <Callout title="Pass/Fail Model" type="info">
            <p>
              WCAG conformance is only achieved when content meets <strong>all</strong> the Success Criteria. The conformance model is based on a pass/fail approach: there must not be any content that violates any one of the Success Criteria.
            </p>
          </Callout>
          <p>
            In practice, a conformance test typically includes only a representative sample of pages. However, a strict conformance claim is tied to <strong>individual pages</strong> that have been shown to conform, not to the overall site.
          </p>
        </section>
      ),
    },
    {
      id: "requirements",
      label: "The 5 Requirements",
      content: (
        <section className="content-section">
          <h2>General Conformance Requirements</h2>
          <ol>
            <li>
              <strong>Conformance level:</strong> A web page is considered conformant to a targeted level (A, AA, or AAA) if all Success Criteria of that level are satisfied or a <em>conforming alternate version</em> is provided.
              <ul>
                <li>To conform to Level AA, the page must meet all Level A and AA criteria.</li>
                <li>If one requirement fails, the page is no longer conformant.</li>
              </ul>
            </li>
            <li>
              <strong>Full pages:</strong> Conformance refers to full web pages only. It cannot be achieved if parts of a page are excluded.
            </li>
            <li>
              <strong>Complete processes:</strong> All web pages in a process (e.g., a series of steps to complete a task) have to conform at the specified level.
            </li>
            <li>
              <strong>Only accessibility-supported ways:</strong> Only techniques supported by assistive technologies are used for conformance. If non-supported ways are used, the information must also be available in a supported way.
            </li>
            <li>
              <strong>Non-interference:</strong> If technologies are used in a non-conforming way, they must not block users from accessing the rest of the page.
            </li>
          </ol>

          <Callout title="Non-Interference Success Criteria" type="warning">
            <p>For Requirement 5, the following must always be met for the whole page:</p>
            <ul>
              <li>1.4.2 Audio Control</li>
              <li>2.1.2 No Keyboard Trap</li>
              <li>2.3.1 Three Flashes or Below Threshold</li>
              <li>2.2.2 Pause, Stop, Hide</li>
            </ul>
          </Callout>
        </section>
      ),
    },
    {
      id: "alternate-versions",
      label: "Alternate Versions",
      content: (
        <section className="content-section">
          <h2>Conforming Alternate Versions</h2>
          <p>If you provide a conforming alternative version, you must ensure:</p>
          <ul>
            <li>The alternate version meets all requirements at the designated level.</li>
            <li>It is equivalent in terms of content and functions, and is up-to-date.</li>
            <li>It can be accessed in an accessible way (e.g., from the non-conforming page).</li>
          </ul>
          <p>
            <em>Note:</em> Conformance can only be declared for each individual page, even when using samples defined by <strong>WCAG-EM</strong>.
          </p>
        </section>
      ),
    },
    {
      id: "demos",
      label: "Demos",
      content: (
        <section className="content-section">
          <h2>Interactive Demos (Requirement 5: Non-Interference)</h2>
          <p>
            Requirement 5 states that non-conforming content must not interfere with the user's ability to use the rest of the page. Two critical aspects of this are focus management and notifications.
          </p>
          
          <div className="demo-container" style={{ marginBottom: '2rem' }}>
            <h3>1. No Keyboard Trap (SC 2.1.2)</h3>
            <p>
              A keyboard trap occurs when a user can get into a component using the keyboard but cannot get out. This violates non-interference.
            </p>
            <FocusTrapDemo />
          </div>

          <div className="demo-container">
            <h3>2. Dynamic Content Interference</h3>
            <p>
              Ensuring dynamic updates are announced correctly without interfering with the user's current task.
            </p>
            <LiveRegionDemo />
          </div>
        </section>
      ),
    },
    {
      id: "activities",
      label: "Activities",
      content: (
        <section className="content-section">
          <FlashcardSet cards={flashcards} title="Conformance Flashcards" />
          
          <ConformanceChecklist 
            scenario={checklistScenario} 
            title="Learning Activity: Apply the 5 Requirements" 
          />
        </section>
      ),
    },
  ];

  return (
    <div className="container">
      <PageHeader 
        title="2 Conformance Requirements" 
        description="Understanding the five normative requirements that must be met to achieve WCAG conformance."
      />
      
      <Tabs tabs={tabs} />

      <ExamTakeaway title="Key Takeaways for Conformance">
        <ul>
          <li><strong>Conformance is all-or-nothing:</strong> A single failure means the page doesn't conform.</li>
          <li><strong>Individual pages:</strong> Conformance applies to full pages, not fragments or entire sites collectively.</li>
          <li><strong>Processes:</strong> If one step in a process fails, the whole process fails conformance.</li>
          <li><strong>Non-interference:</strong> Even if you use non-conforming tech, it must not block the user (e.g., no keyboard traps).</li>
          <li><strong>Alternate Versions:</strong> Must be equivalent, up-to-date, and accessible.</li>
        </ul>
      </ExamTakeaway>
    </div>
  );
}

export default ConformanceRequirements;