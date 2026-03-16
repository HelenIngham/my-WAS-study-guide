import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import Tabs from "../../../components/Tabs";
import ResourceLink from "../../../components/ResourceLink";
import CompatibilityChecker from "../../../components/CompatibilityChecker";

function InteroperabilityAndCompatibilityIssues() {
  const flashcards = [
    {
      front: "Why is it important to perform tests with at least two screen readers?",
      back: "Because not all combinations of screen readers, browsers, and operating systems work equally well in terms of accessibility support.",
    },
    {
      front: "Name three of the most used screen readers.",
      back: "JAWS, NVDA, and VoiceOver.",
    },
    {
      front: "What is the recommended screen reader and browser combination for MacOS?",
      back: "VoiceOver and Safari.",
    },
    {
      front: "What is the recommended screen reader and browser combination for Android?",
      back: "TalkBack and Chrome.",
    },
    {
        front: "Which screen reader is recommended for use with Edge on Windows?",
        back: "Narrator."
    }
  ];

  const functionalPerformanceStatements = [
    "Usage without vision",
    "Usage with limited vision",
    "Usage without perception of colour",
    "Usage without hearing",
    "Usage with limited hearing",
    "Usage without vocal capability",
    "Usage with limited manipulation or strength",
    "Usage with limited reach",
    "Minimise photosensitive seizure triggers",
    "Usage with limited cognition",
    "Privacy",
  ];

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <section className="content-section">
          <p>
            When evaluating web content for accessibility flaws, it’s important to identify any aspects of the design that can cause problems for the methods, technologies, or strategies used by people with disabilities (see Domain One H).
          </p>
          <p>
            Be aware that some requirements affect multiple user groups. For example, keyboard support is a requirement for different types of assistive technologies. And well-structured content helps all users, even if not highlighted for each of the following user groups.
          </p>
          
          <Callout title="Study Tasks">
            <ul>
              <li>Understand the needs of users of different types of disabilities</li>
              <li>Identify issues for the methods, technologies or strategies used by people with disabilities</li>
            </ul>
          </Callout>
        </section>
      ),
    },
    {
      id: "functional-performance",
      label: "Functional Performance",
      content: (
        <section className="content-section">
          <p>
            In clause 4 Functional Performance and in Annex B, the EN 301 549 lists the following distinct user requirement categories, here called "Functional Performance statements":
          </p>
          <ul>
            {functionalPerformanceStatements.map((statement, index) => (
              <li key={index}>{statement}</li>
            ))}
          </ul>
          <p>
            These categories are not meant to portray distinct user groups, but specific functional requirements. Some users will require several of these at the same time.
          </p>
          
          <Callout title="User Example" type="info">
            <p>
                A sighted user with limited vision using a screen reader in addition will simultaneously require zoom and good contrast and the programmatic access encapsulated in "Usage without vision". Other users will simultaneously require usage with limited hearing and with limited cognition.
            </p>
          </Callout>
          
          <p>
            The mapping of accessibility needs of different user groups to specific accessibility requirements has been informed by EN 301 549, Annex B, but does not follow the exact same structure.
          </p>
        </section>
      ),
    },
    {
      id: "screen-readers",
      label: "Screen Readers",
      content: (
        <section className="content-section">
          <p>
            Not all combinations of screen readers, browsers, and operating systems work equally well in terms of accessibility support. It is recommended to perform tests with at least two screen readers.
          </p>
          <h3>Most Used Screen Readers</h3>
          <ul>
            <li><strong>JAWS:</strong> Job Access With Speech (Windows)</li>
            <li><strong>NVDA:</strong> NonVisual Desktop Access (Windows)</li>
            <li><strong>VoiceOver:</strong> Built-in screen reader for MacOS and iOS</li>
            <li><strong>TalkBack:</strong> Screen reader for Android</li>
            <li><strong>Narrator:</strong> Built-in screen reader for Windows</li>
            <li><strong>ChromeVox:</strong> Built-in screen reader for ChromeOS</li>
          </ul>
        </section>
      ),
    },
    {
      id: "compatibility",
      label: "Compatibility",
      content: (
        <section className="content-section">
          <h3>Recommended Combinations to Guarantee Better Compatibility</h3>
          <p>To ensure the best experience for users of assistive technology, use these tested combinations:</p>
          
          <CompatibilityChecker />

          <div className="grid">
              <div className="card">
                <h4>Windows</h4>
                <ul>
                    <li>JAWS and Google Chrome</li>
                    <li>NVDA and Firefox or NVDA and Chrome</li>
                    <li>Narrator and Edge</li>
                </ul>
              </div>
              <div className="card">
                <h4>MacOS / iOS</h4>
                <ul>
                    <li>VoiceOver and Safari</li>
                </ul>
              </div>
              <div className="card">
                <h4>Android</h4>
                <ul>
                    <li>TalkBack and Chrome</li>
                </ul>
              </div>
          </div>
        </section>
      ),
    },
  ];

  return (
    <div className="container">
      <PageHeader 
        title="Domain Two A: Interoperability and compatibility issues" 
        subtitle="(e.g., works with JAWS, Chrome, Safari, etc…)"
      />
      
      <Tabs tabs={tabs} ariaLabel="Interoperability and compatibility sections" />

      <section className="learning-activities">
        <h2>Learning Activities</h2>
        <FlashcardSet cards={flashcards} title="Test Your Knowledge" />
      </section>

      <section className="resources-section">
        <h2>Resources</h2>
        <ResourceLink href="https://www.w3.org/WAI/people-use-web/abilities-barriers/" text="Diverse Abilities and Barriers, WAI W3C" />
        <ResourceLink href="https://www.w3.org/WAI/people-use-web/tools-techniques/" text="Tools and Techniques, WAI W3C" />
        <ResourceLink href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf" text="EN 301 549, Annex B (informative): Relationship between requirements and functional performance statements (PDF)" />
        
        <h3>Screen Reader Resources</h3>
        <div className="grid">
            <div>
                <h4>Windows</h4>
                <ResourceLink href="https://www.freedomscientific.com/products/software/jaws/" text="JAWS for Windows by Freedom Scientific" />
                <ResourceLink href="https://www.nvaccess.org/" text="NVDA for Windows by NV Access" />
                <ResourceLink href="https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-efcc-f328-a4d3-fc2fc83b8d07" text="Narrator for Windows by Microsoft" />
            </div>
            <div>
                <h4>MacOS / iOS / ChromeOS</h4>
                <ResourceLink href="https://www.apple.com/accessibility/mac/vision/" text="VoiceOver for MacOS by Apple" />
                <ResourceLink href="https://www.apple.com/accessibility/iphone/vision/" text="VoiceOver for iOS" />
                <ResourceLink href="https://www.google.com/chromebook/accessibility/" text="ChromeVox for ChromeOS" />
            </div>
            <div>
                <h4>Android</h4>
                <ResourceLink href="https://support.google.com/accessibility/android/answer/6007100" text="TalkBack for Android" />
            </div>
        </div>
      </section>
    </div>
  );
}

export default InteroperabilityAndCompatibilityIssues;