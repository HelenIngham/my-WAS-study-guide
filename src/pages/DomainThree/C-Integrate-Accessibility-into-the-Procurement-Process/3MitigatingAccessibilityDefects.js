import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import DefectMitigationStrategyPicker from "../../../components/DefectMitigationStrategyPicker";
import "./3MitigatingAccessibilityDefects.css";

function MitigatingAccessibilityDefects() {
  const flashcards = [
    {
      front: "What is an Accessibility Roadmap?",
      back: "A vendor-provided document outlining the timeline and plan for fixing known accessibility defects in their product or service."
    },
    {
      front: "Why include binding commitments in contracts?",
      back: "To ensure legal accountability and formalize the vendor's obligation to meet accessibility standards and fix defects."
    },
    {
      front: "What is an Alternative Access Plan?",
      back: "A set of procedures or tools provided to users with disabilities to ensure they can complete tasks when the primary product has accessibility barriers."
    },
    {
      front: "How can vendor performance be managed regarding defects?",
      back: "By active monitoring of their progress against the roadmap and considering their performance during contract renewals or future negotiations."
    }
  ];

  return (
    <div className="mitigating-defects-page container">
      <PageHeader 
        title="3 Mitigating Accessibility Defects" 
        lede="When an ICT product or service has known defects, organizations must take proactive steps to mitigate risks and ensure users are not excluded."
      />

      <section className="content-section">
        <h2>Strategies for Risk Mitigation</h2>
        <p>If an ICT product or service is found to have accessibility gaps, the following strategies should be employed to manage and reduce risk:</p>
        <ul className="mitigation-list">
          <li><strong>Obtaining a roadmap</strong> for addressing known accessibility issues.</li>
          <li><strong>Including binding accessibility commitments</strong> in contracts for products and services.</li>
          <li><strong>Putting in place an alternative access plan</strong> for users.</li>
          <li><strong>Monitoring vendor performance</strong> in relation to defect management.</li>
          <li><strong>Considering accessibility performance</strong> during contract negotiations and product renewals.</li>
        </ul>
      </section>

      <section className="activity-section">
        <DefectMitigationStrategyPicker />
      </section>

      <section className="flashcard-section">
        <h2>Key Concepts: Defect Mitigation</h2>
        <p>Review these core concepts to reinforce your understanding of how to handle accessibility defects in procurement.</p>
        <FlashcardSet cards={flashcards} />
      </section>

      <Callout 
        title="Exam Takeaway" 
        text="Mitigation is about managing risk when perfect accessibility isn't immediately available. Remember the five key pillars: Roadmaps, Binding Commitments, Alternative Access, Performance Monitoring, and Negotiation leverage."
      />
    </div>
  );
}

export default MitigatingAccessibilityDefects;