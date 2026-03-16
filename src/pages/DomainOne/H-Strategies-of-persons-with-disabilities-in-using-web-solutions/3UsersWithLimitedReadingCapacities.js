import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import Tabs from "../../../components/Tabs";
import ReadingStyleSimulator from "../../../components/ReadingStyleSimulator";

function UsersWithLimitedReadingCapacities() {
  const flashcards = [
    {
      front: "Who are some people included in the group 'Users with Limited Reading Capacities'?",
      back: "People with ADHD, dyslexia, Irlen syndrome, or memory loss.",
    },
    {
      front: "What is 'Kurzweil'?",
      back: "Educational software designed to provide literacy support (reading and writing).",
    },
    {
      front: "What alternative formats might these users seek?",
      back: "Audio, video, or slide-based presentations with visual content instead of text.",
    },
    {
      front: "Why is it crucial that text is offered as real text and not as images of text?",
      back: "Otherwise, it becomes difficult or impossible for assistive technology and browser settings to alter the text (resize, change colors, fonts, etc.).",
    },
    {
      front: "What is the primary benefit of TTS for this user group?",
      back: "It helps people focus their energy on comprehending the text instead of decoding the words by allowing them to see and hear text simultaneously.",
    },
  ];

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <section className="content-section">
          <p>
            There is a wide spectrum of people having reading difficulties. These may include, but are not limited to,
            people with ADHD, dyslexia, Irlen syndrome, or memory loss.
          </p>
          <p>
            This group may use assistive technology such as "Kurzweil" (educational software designed to provide
            literacy support) or text-to-speech provided by the platform, or they may not use any assistive technology.
          </p>
          <Callout title="Alternative Formats" type="pro-tip">
            <p>
              Some users may instead seek information that is not text. They may prefer alternative formats, such as
              audio, video, or slide-based presentations with visual content, wherever these are available.
            </p>
          </Callout>
          <h3>User Customization</h3>
          <p>
            To read text, some users make changes to the presentation in the browser. It is important to know how this
            affects the interface and what challenges might arise. Users may choose to change:
          </p>
          <ul>
            <li>Text size</li>
            <li>Text colour and background colour</li>
            <li>Font</li>
            <li>Spacing (letter and word)</li>
            <li>Line width</li>
          </ul>
          <p>Users might even define a customised style sheet to be used.</p>
        </section>
      ),
    },
    {
      id: "concepts",
      label: "Key Concepts",
      content: (
        <section className="content-section">
          <h2>3.1 Some Concepts That Are Important to Understand</h2>
          <ul>
            <li>
              <strong>Real Text vs. Images:</strong> It is crucial that text is offered as real text and not as images
              of text. Otherwise, it becomes difficult or impossible for assistive technology and browser settings to
              alter the text.
            </li>
            <li>
              <strong>Font & Spacing:</strong> There are recommendations for fonts that offer good readability and best
              practices regarding minimal font size and letter and word spacing widths.
            </li>
            <li>
              <strong>Structure:</strong> Structuring text with section headings helps users navigate through content.
            </li>
            <li>
              <strong>Semantic Markup:</strong> The semantic markup of text is important to support assistive technology
              users.
            </li>
          </ul>
        </section>
      ),
    },
    {
      id: "tts",
      label: "TTS Software",
      content: (
        <section className="content-section">
          <h2>3.2 Text-To-Speech Software (TTS)</h2>
          <p>
            Text-to-speech software (TTS) is a commonly used assistive technology for reading. When using TTS, you can
            see and hear text read aloud simultaneously. Words clicked on or highlighted are read by a computer-generated
            voice.
          </p>
          <Callout title="Decoding vs. Comprehension" type="info">
            <p>
              TTS helps people focus their energy on <strong>comprehending</strong> the text instead of{" "}
              <strong>decoding</strong> the words.
            </p>
          </Callout>
          <p>
            The software is focused on text content and does not offer additional semantic information or navigation
            hints (as screen readers used by blind persons do) since most individuals in this user group do not need
            that level of support.
          </p>

          <h2>3.3 Common Assistive Technology for Reading</h2>
          <p>
            Desktop and laptop computers have built-in text-to-speech software. Browsers also provide extensions for
            read aloud functionality.
          </p>
          <h3>Specialized Software:</h3>
          <ul>
            <li><strong>read&write</strong> by Texthelp</li>
            <li><strong>BrowseAloud</strong> by Texthelp</li>
            <li><strong>NaturalReader</strong></li>
            <li><strong>Kurzweil</strong></li>
          </ul>
          <p>
            Mobile devices (like tablets and smartphones) also have built-in assistive technology, such as
            text-to-speech and dictation technology. Various reading tools (apps) are also available for mobile devices.
          </p>
        </section>
      ),
    },
    {
      id: "demos",
      label: "Demos & Activities",
      content: (
        <>
          <ReadingStyleSimulator />
          <section className="learning-activities">
            <h2>Learning Activities</h2>
            <h3>Flashcards</h3>
            <FlashcardSet cards={flashcards} />
          </section>
        </>
      ),
    },
    {
      id: "exam-tips",
      label: "Exam Tips",
      content: (
        <ExamTakeaway title="Key Takeaway for the WAS Exam">
          <ul>
            <li>
              <strong>Cognitive/Learning Group:</strong> Includes ADHD, Dyslexia, Irlen Syndrome, and memory loss.
            </li>
            <li>
              <strong>TTS vs. Screen Reader:</strong> TTS focuses on text reading (simultaneous visual/audio) and usually
              lacks the complex semantic navigation of a full screen reader.
            </li>
            <li>
              <strong>Customization:</strong> Users may override fonts, colors, and spacing. Layouts must be robust
              enough to handle these changes without breaking.
            </li>
            <li>
              <strong>No Images of Text:</strong> Crucial for accessibility because images cannot be easily resized,
              recolored, or read by most TTS tools in the same way real text can.
            </li>
            <li>
              <strong>Semantic Markup:</strong> Essential for both TTS and navigation.
            </li>
          </ul>
        </ExamTakeaway>
      ),
    },
  ];

  return (
    <div className="container users-with-limited-reading-page">
      <PageHeader title="3. Users with Limited Reading Capacities" />
      <Tabs tabs={tabs} ariaLabel="Users with limited reading capacities sections" />
    </div>
  );
}

export default UsersWithLimitedReadingCapacities;