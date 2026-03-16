import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import AccessibilityTreeDemo from "../../../components/AccessibilityTreeDemo";
import ScreenReaderSimulator from "../../../components/ScreenReaderSimulator";
import ExamTakeaway from "../../../components/ExamTakeaway";
import Tabs from "../../../components/Tabs";

function UsersWithoutVision() {
  const flashcards = [
    {
      front: "What is a screen reader?",
      back: "A software application that processes content on the desktop and in web browsers and converts it to other forms, such as text-to-speech and braille.",
    },
    {
      front: "How do screen readers present content to users?",
      back: "Screen readers present content linearly, following the order of the elements in the DOM.",
    },
    {
      front: "What is a refreshable Braille display?",
      back: "An external device made up of rows of pins that raise or lower to form Braille characters, allowing blind users to read digital text.",
    },
    {
      front: "What is the primary navigation method for screen reader users on a touchscreen?",
      back: "A gesture-based system (e.g., swipe right to go forward, double-tap to activate) that overrides standard visual interactions.",
    },
  ];

  const treeNodes = [
    {
      id: "h1-example",
      html: "<h1>Users without Vision</h1>",
      role: "heading",
      name: "Users without Vision",
      states: ["level: 1"],
      description: "Standard HTML heading level 1 provides semantic structure and a navigation landmark.",
    },
    {
      id: "button-example",
      html: '<button aria-label="Close modal">X</button>',
      role: "button",
      name: "Close modal",
      states: ["focusable"],
      description: "The aria-label provides a meaningful name for the screen reader, overriding the visual 'X' content.",
    },
    {
      id: "nav-example",
      html: "<nav>...</nav>",
      role: "navigation",
      name: "",
      states: [],
      description: "The <nav> element creates a navigation landmark, helping users orient themselves to main sections.",
    },
  ];

  const simulatorElements = [
    { tag: "h1", content: "ACME Corp Home" },
    { tag: "p", content: "Welcome to our accessible website." },
    { tag: "h2", content: "Our Services" },
    { tag: "a", content: "Web Design", href: "#" },
    { tag: "a", content: "Consulting", href: "#" },
    { tag: "h2", content: "Contact Us" },
    { tag: "p", content: "Fill out the form below." },
    { tag: "button", content: "Send Message" },
  ];

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <section className="content-section">
          <p>
            Blind users need a screen reader to explore and interact with digital content. A screen reader is a software
            that processes content on the desktop and in web browsers and converts it to other forms, such as
            text-to-speech and braille, on a refreshable Braille display.
          </p>

          <Callout title="What is a Refreshable Braille Display?" role="region" ariaLabel="Explanation of Braille display">
            <p>
              A refreshable Braille display is an external device that is made up of rows of pins, each of which can raise
              or lower to form a Braille character. Since the user cannot see the interface, the screen reader needs to
              provide the user with mechanisms to understand the structure of the interface and the meaning of the
              controls.
            </p>
          </Callout>
        </section>
      ),
    },
    {
      id: "software",
      label: "Screen Reader Software",
      content: (
        <section className="content-section">
          <h2>1.1. Screen Reader Software</h2>
          <p>
            When content is coded correctly, screen readers will read everything on a web page, including the semantic
            information. Using keyboard commands, screen reader users can explore, navigate, and interact with content.
          </p>
          <p>
            Among screen reader users, knowledge and strategies vary considerably. A common strategy is to use headings or
            landmark regions to scan a page and then use other keyboard commands to explore relevant content in more
            detail. Some users only use a few keystrokes, such as the arrow keys to navigate from item to item down the
            page and the tab key to go to focusable items.
          </p>

          <Callout title="Semantic Markup is Key" type="pro-tip">
            <p>
              A common approach using a screen reader is to use special commands to call up lists of headings, links, form
              controls, etc. This way, users can quickly move between such elements on the page. For this to work, it is
              important to use correct semantic markup.
            </p>
          </Callout>

          <p>
            In contrast to how most people visually use an interface, screen readers present content linearly to users.
            The reading order follows the order of the elements in the DOM. In addition to reading the page content in a
            linear order, screen readers also offer modes for users to interact with specific types of webpage content.
            These vary across screen readers (read/browse mode, forms mode, application mode, VoiceOver rotor and TalkBack
            menu).
          </p>

          <h3>Touchscreen Interaction</h3>
          <p>
            The interaction model for blind touchscreen users differs from that for sighted touchscreen users. Blind
            users have a completely different set of gestures available to them when a screen reader is activated on a
            touch device. The screen reader overrides the visual interaction method and replaces it with a gesture-based
            system.
          </p>
          <ul>
            <li><strong>Swipe Right:</strong> Go forward through content</li>
            <li><strong>Swipe Left:</strong> Go backward through content</li>
            <li><strong>Double-tap:</strong> Activate the current button or link</li>
          </ul>
        </section>
      ),
    },
    {
      id: "concepts",
      label: "Key Concepts",
      content: (
        <section className="content-section">
          <h2>1.2 Some Concepts That Are Important to Understand</h2>
          <ul>
            <li>
              Unlike how most people visually use an interface, screen readers present content linearly to users. The
              reading order follows the order of the elements in the DOM.
            </li>
            <li>By default, the focus order is set by the order of the elements in the DOM.</li>
            <li>
              Screen readers can use the Accessibility API to retrieve information from the Accessibility Tree. Semantic
              elements in the DOM affect information available in the Accessibility Tree.
            </li>
            <li>
              Screen reader navigation depends on providing semantic elements that convey the page's structure and
              controls that ensure keyboard support.
            </li>
            <li>Landmarks help screen reader users orient themselves to a page and navigate easily to a page’s main sections.</li>
            <li>
              Screen reader users may also use voice input tools to navigate as many have or develop physical weaknesses
              associated with repetitive physical functions such as carpal tunnel and other limitations.
            </li>
          </ul>

          <div className="note" role="note">
            <p>
              <strong>Note:</strong> The results of screen reader output may vary due to the various types of browsers and
              screen readers (and different versions of these).
            </p>
          </div>
        </section>
      ),
    },
    {
      id: "demos",
      label: "Demos & Activities",
      content: (
        <>
          <ScreenReaderSimulator elements={simulatorElements} />
          <AccessibilityTreeDemo nodes={treeNodes} />
          <section className="learning-activities">
            <h2>Learning Activities</h2>
            <h3>Flashcards</h3>
            <FlashcardSet cards={flashcards} />
          </section>
        </>
      ),
    },
    {
      id: "resources",
      label: "Resources & Exam Tips",
      content: (
        <>
          <section className="resources-section">
            <h2>Resources</h2>
            <ul>
              <li><a href="https://www.freedomscientific.com/Products/Software/JAWS/" target="_blank" rel="noopener noreferrer">JAWS Documentation</a></li>
              <li><a href="https://www.nvaccess.org/help/" target="_blank" rel="noopener noreferrer">NVDA User Guide</a></li>
              <li><a href="https://support.apple.com/guide/voiceover/welcome/mac" target="_blank" rel="noopener noreferrer">Mac OS VoiceOver User Guide</a></li>
              <li><a href="https://support.google.com/accessibility/android/answer/6007100" target="_blank" rel="noopener noreferrer">Android Talkback User Guide</a></li>
              <li><a href="https://support.apple.com/guide/iphone/voiceover-iph3e2e415f/ios" target="_blank" rel="noopener noreferrer">iOS VoiceOver User Guide</a></li>
            </ul>
          </section>

          <ExamTakeaway title="Key Takeaway for the WAS Exam">
            <ul>
              <li>Screen readers process DOM elements linearly.</li>
              <li>Semantic HTML is essential for providing navigation landmarks (headings, regions).</li>
              <li>The Accessibility Tree is what screen readers actually interact with, populated via the Accessibility API from semantic DOM elements.</li>
              <li>Touchscreen screen readers use a gesture-based system that replaces standard touch interactions.</li>
            </ul>
          </ExamTakeaway>
        </>
      ),
    },
  ];

  return (
    <div className="container users-without-vision-page">
      <PageHeader title="1. Users without Vision" />
      <Tabs tabs={tabs} ariaLabel="Users without vision sections" />
    </div>
  );
}

export default UsersWithoutVision;