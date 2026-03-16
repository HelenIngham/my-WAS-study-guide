import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import Tabs from "../../../components/Tabs";
import MatchingExercise from "../../../components/MatchingExercise";
import ConformanceLevelPicker from "../../../components/ConformanceLevelPicker";

function AccessibilityTargetLevel() {
  const flashcards = [
    {
      front: "What factors define the accessibility guidelines and conformance level to follow?",
      back: "Local or national laws, customers, internal organization policies, or overall accessibility goals.",
    },
    {
      front: "What is the general recommendation if no specific laws apply?",
      back: "Follow the latest version of WCAG.",
    },
    {
      front: "What methodology does WCAG follow?",
      back: "A research-focused, user-centered design methodology.",
    },
    {
      front: "How many more Success Criteria did WCAG 2.1 add compared to 2.0?",
      back: "12 more Success Criteria at Level A and Level AA.",
    },
    {
      front: "How many Success Criteria did WCAG 2.2 add?",
      back: "9 new Success Criteria (2 at Level A, 4 at Level AA, and 3 at Level AAA).",
    },
    {
      front: "What is EN 301 549?",
      back: "A European standard for digital accessibility that includes WCAG success criteria plus 38 additional requirements for web content.",
    },
  ];

  const matchingPairs = [
    { term: "WCAG 2.1", definition: "Added 12 SC related to cognitive, touch, and orientation." },
    { term: "WCAG 2.2", definition: "Added 9 new SC (2xA, 4xAA, 3xAAA)." },
    { term: "EN 301 549", definition: "European standard with 38 additional web requirements." },
    { term: "Directive 2016/2102", definition: "Web Accessibility Directive in the EU." },
  ];

  const correctMatches = {
    "WCAG 2.1": "Added 12 SC related to cognitive, touch, and orientation.",
    "WCAG 2.2": "Added 9 new SC (2xA, 4xAA, 3xAAA).",
    "EN 301 549": "European standard with 38 additional web requirements.",
    "Directive 2016/2102": "Web Accessibility Directive in the EU.",
  };

  const scenarios = [
    {
      id: "1",
      context: "A public sector body in a European Union Member State is launching a new website.",
      targetLevel: "EN 301 549",
      rationale: "Public sector bodies in the EU must comply with the Web Accessibility Directive, which points to EN 301 549.",
    },
    {
      id: "2",
      context: "A small private blog with no specific legal requirements wants to follow best practices.",
      targetLevel: "AA",
      rationale: "The standard recommendation for most projects is the latest WCAG version at Level AA.",
    },
    {
      id: "3",
      context: "A project needs to address specific mobile and touch interface issues beyond WCAG 2.0.",
      targetLevel: "AA",
      rationale: "WCAG 2.1 added 12 SC specifically addressing touch interfaces and mobile-related issues at Level A and AA.",
    },
  ];

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <section className="content-section">
          <p>
            Local or national laws, customers, internal organization policies or overall accessibility goals will define which guidelines to follow, and what conformance level to meet. If your project is not subject to specific regional, national or supra-national legislation or policies, the recommendation is to follow the latest version of WCAG.
          </p>
          <Callout title="Regional Standards" type="info">
            <p>
              In some jurisdictions, such as in Member States of the European Union, standards like <strong>EN 301 549</strong> that contain requirements beyond WCAG may be applicable.
            </p>
          </Callout>
          <p>
            WCAG follows a research-focused, user-centered design methodology to produce the most effective and flexible outcome, including the roles of content authoring, user agent support, and authoring tool support.
          </p>
        </section>
      ),
    },
    {
      id: "wcag-evolution",
      label: "WCAG Evolution",
      content: (
        <section className="content-section">
          <h2>WCAG 2.1 & 2.2</h2>
          <p>
            As technology and understanding of user needs evolve, WCAG is updated to cover more scenarios.
          </p>
          <ul>
            <li>
              <strong>WCAG 2.1:</strong> Added 12 more Success Criteria at Level A and Level AA compared to WCAG 2.0. These relate to cognitive disabilities, touch interface devices, and screen orientation.
            </li>
            <li>
              <strong>WCAG 2.2:</strong> Added 9 new Success Criteria:
              <ul>
                <li>2 at Level A</li>
                <li>4 at Level AA</li>
                <li>3 at Level AAA</li>
              </ul>
            </li>
          </ul>
        </section>
      ),
    },
    {
      id: "en-standard",
      label: "EN 301 549",
      content: (
        <section className="content-section">
          <h2>European Standard: EN 301 549</h2>
          <p>
            EN 301 549 refers directly to the WCAG Success Criteria in its clauses 9 (Web), 10 (Documents) and 11 (Software).
          </p>
          <Callout title="Additional Requirements" type="warning">
            <p>
              EN 301 549 contains <strong>38 additional requirements</strong> applicable to web content (see Annex A, Table A.1).
            </p>
          </Callout>
          <p>
            These provide the normative requirements to guarantee conformance with the Web Accessibility Directive 2016/2102 and other directives, like the European Accessibility Act.
          </p>
        </section>
      ),
    },
    {
      id: "activities",
      label: "Activities",
      content: (
        <section className="content-section">
          <FlashcardSet cards={flashcards} title="Accessibility Target Flashcards" />
          <MatchingExercise 
            pairs={matchingPairs} 
            correctMatches={correctMatches} 
            title="Match Version to Content" 
          />
          <ConformanceLevelPicker 
            scenarios={scenarios} 
            title="Identify the Target Level" 
          />
        </section>
      ),
    },
  ];

  return (
    <div className="container">
      <PageHeader 
        title="Accessibility Target Level" 
        description="Understanding how to determine the appropriate accessibility guidelines and conformance levels for a project."
      />
      
      <Tabs tabs={tabs} />

      <ExamTakeaway title="Key Takeaways for Accessibility Targets">
        <ul>
          <li>Determine targets based on legal, organizational, and customer requirements.</li>
          <li>Default to the latest WCAG version if no specific law applies.</li>
          <li>WCAG 2.1 added 12 SC; WCAG 2.2 added 9 SC.</li>
          <li>EN 301 549 is the EU standard and contains 38 requirements beyond WCAG.</li>
          <li>Conformance levels (A, AA, AAA) define the degree of accessibility.</li>
        </ul>
      </ExamTakeaway>
    </div>
  );
}

export default AccessibilityTargetLevel;