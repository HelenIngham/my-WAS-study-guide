import React from "react";
import PageHeader from "../../../components/PageHeader";
import Tabs from "../../../components/Tabs";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import SuccessCriteriaMapper from "../../../components/SuccessCriteriaMapper";
import ThemingSimulator from "../../../components/ThemingSimulator";

function AccessibilityGuidelineLimitations() {
  const flashcards = [
    {
      front: "What is pseudomotion and why is it a concern?",
      back: "Pseudomotion refers to visual effects that mimic motion (like optical illusions). It can be damaging to users with vestibular disorders, migraines, or epilepsy, but is not fully covered by current WCAG motion guidelines.",
    },
    {
      front: "What is the limitation of WCAG regarding color blindness?",
      back: "While WCAG covers color contrast, it doesn't specifically address the needs of color-blind users, such as using patterns or textures to differentiate elements without relying solely on color.",
    },
    {
      front: "How does font weight affect accessibility guidelines?",
      back: "WCAG addresses color contrast but does not specifically account for how font weight (thickness) impacts that contrast, which is a significant factor in readability.",
    },
    {
      front: "What are the limitations regarding ornate fonts in WCAG?",
      back: "There are currently no specific criteria for ornate fonts, which can be challenging for users with dyslexia. Recommendations could include using simple fonts or providing typography switchers.",
    },
    {
      front: "How could WCAG improve for cognitive accessibility?",
      back: "By providing more comprehensive criteria to reduce cognitive load, such as simplifying navigation, avoiding complex language, and limiting information density.",
    },
    {
      front: "What is the difference between Personalization and Customization?",
      back: "Personalization typically refers to system-driven adjustments based on user preferences, while customization allows users to manually modify the interface to meet their needs.",
    },
  ];

  const mapperScenarios = [
    {
      id: "limit1",
      description: "A website uses a complex optical illusion graphic that appears to move, causing dizziness for a user with a vestibular disorder.",
      options: ["Pseudomotion Gap", "Cognitive Load", "Ornate Fonts", "Voice Interaction"],
      correctOption: "Pseudomotion Gap",
      explanation: "Current WCAG focus is on reducing actual motion, but doesn't explicitly cover 'pseudomotion' like optical illusions."
    },
    {
      id: "limit2",
      description: "A user with dyslexia struggles to read a menu because it uses an extremely decorative, 'handwritten' style font.",
      options: ["Color Blindness Gap", "Ornate Fonts", "Theming", "Consistent Layout"],
      correctOption: "Ornate Fonts",
      explanation: "Overly ornate fonts can be challenging for dyslexia, and WCAG currently lacks specific criteria for font style complexity."
    },
    {
      id: "limit3",
      description: "A user wants to switch the entire site's color scheme to a 'Dark Mode' specifically designed for light sensitivity.",
      options: ["Voice Interaction", "Consistent Layout", "Personalization/Customization", "Font Weight"],
      correctOption: "Personalization/Customization",
      explanation: "Theming and personalization allow users to adjust settings like color schemes to suit their individual needs."
    }
  ];

  const tabs = [
    {
      id: "content",
      label: "Limitations & Gaps",
      content: (
        <>
          <section>
            <p>
              While WCAG 2.2 offers extensive guidance to improve web accessibility, there are still areas where additional success criteria could enhance inclusivity further. Understanding these gaps is essential for creating truly accessible experiences that go beyond mere compliance.
            </p>

            <div className="limitations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
              <Callout title="1. Pseudomotion" text="WCAG primarily focuses on reducing motion, but doesn't account for graphics like optical illusions that mimic motion, which can trigger vestibular issues." />
              <Callout title="2. Color Blindness" text="Current guidelines focus on contrast ratios but don't mandate alternatives like patterns or textures specifically for color-blind users." />
              <Callout title="3. Font Weight & Size" text="Contrast is measured by color, but font weight (thickness) also affects readability. Size analysis could also be more granular." />
              <Callout title="4. Ornate Fonts" text="Highly decorative fonts can be difficult for users with dyslexia or visual impairments. Simple font options are recommended." />
              <Callout title="5. Cognitive Load" text="More criteria are needed for simplifying navigation, reducing complex language, and limiting information density." />
              <Callout title="6. Personalization" text="Criteria could better support user-driven changes to font size, color schemes, and layouts without relying on external tools." />
            </div>
          </section>

          <section>
            <h3>Personalization, Customization, and Theming</h3>
            <p>These three concepts work together to provide a tailored user experience:</p>
            <ul>
              <li><strong>Personalization:</strong> System-driven adjustments based on user preferences.</li>
              <li><strong>Customization:</strong> Manual modifications by the user to the interface.</li>
              <li><strong>Theming:</strong> Providing default behaviors for specific disability types (e.g., a "Dyslexic theme" that removes italics and justification).</li>
            </ul>
            <ThemingSimulator />
          </section>

          <section>
            <h3>Other Notable Gaps</h3>
            <ul>
              <li><strong>Consistent Layout:</strong> Specific criteria to enforce patterns across sections to reduce learning curves for cognitive disabilities.</li>
              <li><strong>Voice Interaction:</strong> Ensuring voice commands are accessible for users with speech impairments or non-standard speech patterns.</li>
            </ul>
          </section>
        </>
      )
    },
    {
      id: "practice",
      label: "Practice & Review",
      content: (
        <>
          <SuccessCriteriaMapper 
            scenarios={mapperScenarios} 
            title="Identifying Guideline Gaps"
          />

          <FlashcardSet 
            cards={flashcards} 
            title="Limitations Mastery Flashcards" 
          />

          <ExamTakeaway title="Key Takeaways: WCAG Limitations">
            <ul>
              <li><strong>Beyond Compliance:</strong> WCAG is a baseline; addressing these gaps (like pseudomotion and cognitive load) creates a more inclusive environment.</li>
              <li><strong>Visual Gaps:</strong> Contrast isn't just color; font weight and style (ornate fonts) play a massive role in readability.</li>
              <li><strong>User Control:</strong> Personalization and Customization are future frontiers for WCAG to reduce reliance on third-party assistive tech.</li>
              <li><strong>Theming:</strong> Pre-set themes (like an 'Autistic theme' with no motion/neon) can significantly lower the barrier to entry for diverse users.</li>
            </ul>
          </ExamTakeaway>
        </>
      )
    }
  ];

  return (
    <div className="container">
      <PageHeader
        title="5. Accessibility Guideline Limitations"
        description="Explore the gaps in current WCAG guidelines and learn about the emerging areas that can further enhance web inclusivity."
      />

      <Tabs tabs={tabs} ariaLabel="Accessibility Guideline Limitations sections" />
    </div>
  );
}

export default AccessibilityGuidelineLimitations;