import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import Tabs from "../../../components/Tabs";
import DistractionSimulator from "../../../components/DistractionSimulator";

function UsersWithCognitiveDisabilities() {
  const flashcards = [
    {
      front: "Who is included in the group 'Users with Cognitive Disabilities'?",
      back: "People with concentration problems, neuropsychiatric/neurological disorders, behavioral/mental health disorders, autistic people, AD(H)D, and dyslexia.",
    },
    {
      front: "Why is a clean, simple layout important for this group?",
      back: "It aids in understanding content and reduces cognitive load.",
    },
    {
      front: "What role does semantic markup play for these users?",
      back: "It allows for different types of adaptation via browser settings, plugins, or other assistive technologies.",
    },
    {
      front: "What are some assistive technologies used by people with limited cognition?",
      back: "Text-to-speech software, ad blockers, screen masking, and tools to help add/edit data on webpages.",
    },
    {
      front: "How do consistent designs help users with cognitive disabilities?",
      back: "Predictable designs help them successfully complete tasks and stay focused.",
    },
  ];

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <section className="content-section">
          <p>
            This user group is also very diverse. The group includes users that have concentration problems, users with
            neuropsychiatric or neurological disorders as well as behavioral and mental health disorders. Autistic
            people, attention deficit (hyperactivity) disorder (AD(H)D), dyslexia, and people with other diagnoses may
            identify as neurodivergent. They may experience specific barriers when using the web but don’t necessarily
            identify as having a disability.
          </p>
          <p>
            Because cognitive and neurological disabilities may affect any part of the nervous system, they can affect a
            person’s ability to hear, move, see, speak, understand, and remember information.
          </p>
          <Callout title="Universal Impact" type="info">
            <p>
              Some users with intellectual disabilities cannot use the web content even with assistive technology.
              However, most users can use the interface even if it might require some alterations or assistive
              technology.
            </p>
          </Callout>
          <h3>Importance of Design</h3>
          <p>
            A clean, simple layout and presentation are important to aid this group in understanding content. Provide
            control of as many aspects of the website as possible. Using semantic markup and CSS for presentation allows
            for different types of adaptation, for example, via browser settings or plugins, style sheets, or other
            assistive technologies.
          </p>
        </section>
      ),
    },
    {
      id: "concepts",
      label: "Key Concepts",
      content: (
        <section className="content-section">
          <h2>4.1 Some Concepts That Are Important to Understand</h2>
          <ul>
            <li>
              <strong>Plain Language:</strong> Plain simple language is critical for this group.
            </li>
            <li>
              <strong>Multiple Modalities:</strong> People differ in their ability to process information in different
              forms. Providing content alternatives (text, image, audio) helps to reach more people.
            </li>
            <li>
              <strong>Supplemental Media:</strong> Using images and multimedia to supplement text helps users who prefer
              text alternatives.
            </li>
            <li>
              <strong>Clear Graphics:</strong> Appropriate and clear graphics can facilitate understanding of content.
              However, the overuse of graphics and animated graphics can be distracting and increase cognitive load.
            </li>
            <li>
              <strong>Consistency:</strong> Predictable and consistent web design, appearance, operation, and navigation
              help users with cognitive disabilities successfully complete their tasks and stay focused.
            </li>
            <li>
              <strong>Avoid Novelty:</strong> Unexpected and novel designs or navigation structures can be confusing for
              people with visual, cognitive, or motor disabilities.
            </li>
          </ul>
        </section>
      ),
    },
    {
      id: "at",
      label: "Assistive Technology",
      content: (
        <section className="content-section">
          <h2>4.2 Assistive Technology for People with Cognitive Disabilities</h2>
          <p>
            People with limited cognition often use the same assistive technologies as users with reading difficulties:
          </p>
          <ul>
            <li>
              <strong>Content Adaptation:</strong> Adapting the presentation of content according to individual needs
              and preferences.
            </li>
            <li>
              <strong>Text-to-Speech (TTS):</strong> Software that reads text aloud to aid focus and comprehension.
            </li>
            <li>
              <strong>Focus Tools:</strong> Ad blockers, screen masking, and other tools to help focus on the present
              task.
            </li>
            <li>
              <strong>Data Entry Support:</strong> Technologies to help users add and edit data on webpages, such as
              filling out form fields.
            </li>
          </ul>
        </section>
      ),
    },
    {
      id: "activities",
      label: "Demos & Activities",
      content: (
        <section className="content-section">
          <DistractionSimulator />
          <div className="learning-activities" style={{ marginTop: "2rem" }}>
            <h2>Learning Activities</h2>
            <h3>Flashcards</h3>
            <FlashcardSet cards={flashcards} />
          </div>
        </section>
      ),
    },
    {
      id: "exam-tips",
      label: "Exam Tips",
      content: (
        <ExamTakeaway title="Key Takeaway for the WAS Exam">
          <ul>
            <li>
              <strong>Cognitive Diversity:</strong> Includes ADHD, Autism, Dyslexia, and mental health disorders.
            </li>
            <li>
              <strong>Design Strategy:</strong> Prioritize consistency, simplicity, and predictability.
            </li>
            <li>
              <strong>Control:</strong> Give users control over animations and distractions.
            </li>
            <li>
              <strong>Plain Language:</strong> Essential for reach and comprehension.
            </li>
            <li>
              <strong>Adaptability:</strong> Semantic HTML allows users to use their own tools (style sheets, plugins)
              to make the content usable.
            </li>
          </ul>
        </ExamTakeaway>
      ),
    },
  ];

  return (
    <div className="container users-with-cognitive-page">
      <PageHeader title="4. Users with Cognitive Disabilities" />
      <Tabs tabs={tabs} ariaLabel="Users with cognitive disabilities sections" />
    </div>
  );
}

export default UsersWithCognitiveDisabilities;