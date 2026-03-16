import React from "react";
import PageHeader from "../../../components/PageHeader";
import Tabs from "../../../components/Tabs";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import SuccessCriteriaMapper from "../../../components/SuccessCriteriaMapper";
import AccessibilityTreeDemo from "../../../components/AccessibilityTreeDemo";

function AssigningSuccessCriteriaAndFailures() {
  const flashcards = [
    {
      front: "What is the primary goal of an accessibility evaluation regarding standards?",
      back: "To determine if the website or web-app conforms to a particular standard (like WCAG).",
    },
    {
      front: "Why is it important for auditors to have a profound understanding of Success Criteria?",
      back: "To accurately map each accessibility issue to a Success Criterion and interpret WCAG consistently, avoiding wrong or inconsistent reporting.",
    },
    {
      front: "If a heading is not descriptive, which Success Criterion is primarily violated?",
      back: "SC 2.4.6 Headings and Labels.",
    },
    {
      front: "If a heading is visually styled but not marked up as a heading, which SC is violated?",
      back: "SC 1.3.1 Info and Relationships.",
    },
    {
      front: "If a form field has no label at all, which SC is violated?",
      back: "SC 3.3.2 Labels or Instructions.",
    },
  ];

  const mapperScenarios = [
    {
      id: "scen1",
      description: "A button has a label of 'Click Here', which doesn't explain what happens when it is pressed.",
      options: ["1.3.1 Info and Relationships", "2.4.6 Headings and Labels", "3.3.2 Labels or Instructions", "4.1.2 Name, Role, Value"],
      correctOption: "2.4.6 Headings and Labels",
      explanation: "2.4.6 requires that headings and labels (including button labels) be descriptive."
    },
    {
      id: "scen2",
      description: "A list of items is created using <div> tags and CSS styling to look like a list, but no <ul> or <li> tags are used.",
      options: ["1.3.1 Info and Relationships", "2.4.1 Bypass Blocks", "1.1.1 Non-text Content", "4.1.1 Parsing"],
      correctOption: "1.3.1 Info and Relationships",
      explanation: "1.3.1 mandates that information, structure, and relationships conveyed through presentation can be programmatically determined."
    },
    {
      id: "scen3",
      description: "An input field for a 'Date of Birth' has no associated <label> element or aria-label.",
      options: ["1.3.1 Info and Relationships", "3.3.2 Labels or Instructions", "2.4.7 Focus Visible", "3.2.1 On Focus"],
      correctOption: "3.3.2 Labels or Instructions",
      explanation: "3.3.2 requires labels or instructions when content requires user input."
    }
  ];

  const demoNodes = [
    {
      id: "demo1",
      html: "<h1>Services</h1>",
      role: "heading",
      name: "Services",
      states: ["Level: 1"],
      description: "Correctly marked up heading. Maps to 1.3.1 (Structure) and 2.4.6 (Descriptive if it accurately describes the section)."
    },
    {
      id: "demo2",
      html: "<div class='big-bold'>Services</div>",
      role: "text / generic",
      name: "Services",
      states: [],
      description: "Failed markup. Visually a heading, but not programmatically. This is a failure of 1.3.1 Info and Relationships."
    },
    {
      id: "demo3",
      html: "<button>Submit</button>",
      role: "button",
      name: "Submit",
      states: ["Focusable"],
      description: "Correctly labeled button. If the label was just 'Button', it might fail 2.4.6."
    }
  ];

  const tabs = [
    {
      id: "content",
      label: "Content & Examples",
      content: (
        <>
          <section>
            <p>
              Often the main goal of an accessibility evaluation is to determine if the website or web-app conforms to a particular standard or not. 
              These audits and assessments may also have a legal dimension. When conducting a conformance test, you should follow the W3C’s guidance and respect normative requirements.
            </p>
            
            <Callout type="info">
              <p>
                It is important to have a profound understanding of the Success Criteria. Auditors should be able to map each accessibility issue to one of the Success Criteria 
                within that standard and interpret WCAG correctly and accurately.
              </p>
            </Callout>

            <p>
              Knowing the boundaries and demarcations of the criteria is not always easy, though WCAG is built on the idea that Success Criteria can be evaluated clearly, 
              unambiguously and consistently. Requirements that are misunderstood or misinterpreted lead to wrong, or at least inconsistent, error reporting.
            </p>
          </section>

          <section>
            <h2>Mapping Issues to Criteria</h2>
            <p>
              Correctly identifying which Success Criterion (SC) is violated is crucial for meaningful reporting. Consider these examples of how different issues map to different SCs:
            </p>
            <ul>
              <li><strong>2.4.6 Headings and Labels:</strong> Mandates that if a page uses headings and labels, they must be <em>descriptive</em>.</li>
              <li><strong>1.3.1 Info and Relationships:</strong> Mandates that headings and labels be <em>correctly marked-up</em> so their structure is programmatically determinable.</li>
              <li><strong>3.3.2 Labels or Instructions:</strong> Violated if labels or instructions are <em>not provided</em> at all for user input.</li>
            </ul>
          </section>

          <AccessibilityTreeDemo 
            nodes={demoNodes} 
            title="Demo: Mapping DOM to Success Criteria"
            intro="Observe how different HTML implementations affect the accessibility tree and which SCs they relate to:"
          />
        </>
      )
    },
    {
      id: "practice",
      label: "Practice & Review",
      content: (
        <>
          <SuccessCriteriaMapper scenarios={mapperScenarios} />

          <FlashcardSet 
            flashcards={flashcards} 
            title="Success Criteria Mastery Flashcards" 
          />

          <ExamTakeaway title="Key Takeaways for Assigning Failures">
            <ul>
              <li>Always follow W3C normative requirements for conformance testing.</li>
              <li>A single issue might involve multiple SCs, but usually has a primary violation (e.g., content vs. markup).</li>
              <li>Consistency in interpretation is key to reliable auditing.</li>
              <li>Distinguish between 'missing labels' (3.3.2), 'non-descriptive labels' (2.4.6), and 'incorrectly coded labels' (1.3.1).</li>
            </ul>
          </ExamTakeaway>
        </>
      )
    }
  ];

  return (
    <div className="container">
      <PageHeader
        title="4. Assigning Success Criteria and Failures"
        description="Learn how to accurately map accessibility issues to WCAG Success Criteria and understand the nuances of conformance testing."
      />

      <Tabs tabs={tabs} ariaLabel="Assigning Success Criteria sections" />
    </div>
  );
}

export default AssigningSuccessCriteriaAndFailures;