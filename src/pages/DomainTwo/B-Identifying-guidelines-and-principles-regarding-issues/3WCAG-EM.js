import React from "react";
import PageHeader from "../../../components/PageHeader";
import Tabs from "../../../components/Tabs";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import StepOrderingExercise from "../../../components/StepOrderingExercise";
import Accordion from "../../../components/Accordion";

function WCAGEM() {
  const flashcards = [
    {
      front: "What does WCAG-EM stand for?",
      back: "Website Accessibility Conformance Evaluation Methodology.",
    },
    {
      front: "Does WCAG-EM provide details on evaluating content against Success Criteria?",
      back: "No, it defines the procedure for auditing websites, focusing on scope and sampling, not the actual evaluation techniques.",
    },
    {
      front: "What are the 5 main steps of WCAG-EM?",
      back: "1. Define scope, 2. Explore website, 3. Select sample, 4. Evaluate sample, 5. Report findings.",
    },
    {
      front: "What is required for auditors to ensure reliable results using WCAG-EM?",
      back: "Profound knowledge of WCAG Success Criteria interpretation, assistive technologies, and how people with disabilities use the Web.",
    },
  ];

  const methodologySteps = [
    { id: "step1", label: "Define the evaluation scope", correctOrder: 1 },
    { id: "step2", label: "Explore the website", correctOrder: 2 },
    { id: "step3", label: "Select a representative sample", correctOrder: 3 },
    { id: "step4", label: "Evaluate the selected sample", correctOrder: 4 },
    { id: "step5", label: "Report the evaluation findings", correctOrder: 5 },
  ];

  const stepDetails = [
    {
      id: "step-1",
      title: "Step 1: Define the Scope",
      content: (
        <div>
          <p>This step establishes the boundaries and goals of the evaluation:</p>
          <ul>
            <li>What is included in the evaluation (URL, subdomains, etc.).</li>
            <li>The goal of the evaluation (e.g., internal audit vs. formal claim).</li>
            <li>The target WCAG conformance level (A, AA, or AAA).</li>
          </ul>
        </div>
      ),
    },
    {
      id: "step-2",
      title: "Step 2: Explore the Website",
      content: (
        <div>
          <p>A high-level review of the site to understand its complexity:</p>
          <ul>
            <li>Identifying key web pages and functionality.</li>
            <li>Types of content, designs, and interactive features.</li>
            <li>Required web technologies (HTML, CSS, JavaScript, PDF, etc.).</li>
          </ul>
        </div>
      ),
    },
    {
      id: "step-3",
      title: "Step 3: Select a Representative Sample",
      content: (
        <div>
          <p>Guidance on selecting pages when it's not feasible to test everything:</p>
          <ul>
            <li><strong>Structured sample:</strong> Pages from key functionality, different templates, and common elements.</li>
            <li><strong>Randomly selected sample:</strong> To catch issues that might be missed in the structured sample.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "step-4",
      title: "Step 4: Evaluate the Selected Sample",
      content: (
        <div>
          <p>The actual testing process for the selected pages:</p>
          <ul>
            <li>Determining successes and failures in meeting WCAG.</li>
            <li>Checking accessibility support for website features.</li>
            <li>Recording all evaluation steps for transparency.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "step-5",
      title: "Step 5: Report the Findings",
      content: (
        <div>
          <p>Aggregating and communicating the results:</p>
          <ul>
            <li>Making evaluation statements.</li>
            <li>Calculating overall scores (if applicable).</li>
            <li>Documenting findings in a structured report.</li>
          </ul>
        </div>
      ),
    },
  ];

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <section className="content-section">
          <p>
            Conformance tests measure the accessibility of websites or applications against a specified accessibility standard and on a given date.
          </p>
          <Callout title="What is WCAG-EM?" type="info">
            <p>
              The <strong>Website Accessibility Conformance Evaluation Methodology (WCAG-EM)</strong> is a procedure provided by W3C for determining conformance to WCAG.
            </p>
          </Callout>
          <p>
            The methodology defines a procedure for auditing websites which focuses on establishing the <strong>scope</strong> of evaluation and the process of creating a <strong>representative sample</strong>.
          </p>
          <Callout title="Important Note" type="warning">
            <p>
              WCAG-EM does <strong>not</strong> provide details on the actual evaluation of content against the Success Criteria. It is a procedural framework.
            </p>
          </Callout>
          <p>
            To ensure reliable test results, auditors need a profound knowledge of how to interpret WCAG Success Criteria and assistive technologies, and how people with different disabilities use the Web.
          </p>
        </section>
      ),
    },
    {
      id: "methodology",
      label: "The 5 Steps",
      content: (
        <section className="content-section">
          <h2>The Evaluation Procedure</h2>
          <p>The WCAG-EM procedure is detailed under 5 main steps:</p>
          <Accordion items={stepDetails} />
        </section>
      ),
    },
    {
      id: "tools",
      label: "Tools",
      content: (
        <section className="content-section">
          <h2>WCAG-EM Report Tool</h2>
          <p>
            W3C provides the <strong>WCAG-EM Report Tool</strong> to assist you in following the methodology.
          </p>
          <ul>
            <li>Assists you in following the steps of the evaluation process.</li>
            <li>Helps record evaluation findings for each step.</li>
            <li>Generates a structured report from your input.</li>
          </ul>
          <div className="demo-container">
            <h3>Interactive Demo: Methodology Awareness</h3>
            <p>Understanding which step you are in is crucial for a consistent audit.</p>
            <Callout type="info" title="Try the Report Tool">
              <p>The tool is available at: <a href="https://www.w3.org/WAI/eval/report-tool/" target="_blank" rel="noopener noreferrer">W3C WCAG-EM Report Tool</a></p>
            </Callout>
          </div>
        </section>
      ),
    },
    {
      id: "activities",
      label: "Learning Activities",
      content: (
        <section className="content-section">
          <FlashcardSet cards={flashcards} title="WCAG-EM Flashcards" />
          
          <StepOrderingExercise 
            steps={methodologySteps} 
            title="Learning Activity: Methodology Step Order" 
            intro="The WCAG-EM follows a specific sequence. Can you place the steps in the correct order?"
          />
        </section>
      ),
    },
  ];

  return (
    <div className="container">
      <PageHeader 
        title="3 WCAG-EM" 
        description="The Website Accessibility Conformance Evaluation Methodology (WCAG-EM) is an approach for determining how well a website conforms to WCAG."
      />
      
      <Tabs tabs={tabs} />

      <ExamTakeaway title="Key Takeaways for WCAG-EM">
        <ul>
          <li><strong>Focus:</strong> Procedural framework for auditing, scoping, and sampling.</li>
          <li><strong>Not for:</strong> Specific technical testing techniques (those are in WCAG Techniques).</li>
          <li><strong>Auditor Skills:</strong> Requires deep WCAG knowledge and understanding of user experience with disabilities.</li>
          <li><strong>5 Steps:</strong> Scope → Explore → Sample → Evaluate → Report.</li>
          <li><strong>Tooling:</strong> Use the WCAG-EM Report Tool for structured guidance and reporting.</li>
        </ul>
      </ExamTakeaway>
    </div>
  );
}

export default WCAGEM;