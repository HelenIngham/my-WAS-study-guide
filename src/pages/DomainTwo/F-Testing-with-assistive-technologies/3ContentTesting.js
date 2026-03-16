import React from "react";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import TextSpacingDemo from "../../../components/TextSpacingDemo";
import MediaAccessibilityDemo from "../../../components/MediaAccessibilityDemo";
import SuccessCriteriaMapper from "../../../components/SuccessCriteriaMapper";
import ChecklistActivity from "../../../components/ChecklistActivity";

function ContentTesting() {
  const manualRequirements = [
    { id: 'text-1', label: 'Headings, lists, and other structural elements are marked up correctly' },
    { id: 'text-2', label: 'Titles, headings, and form labels are descriptive' },
    { id: 'text-3', label: 'Links are descriptive (in context)' },
    { id: 'text-4', label: 'Changes to the language of parts are marked up accordingly' },
    { id: 'text-5', label: 'No loss of functionality occurs when zooming up to 200%' },
    { id: 'text-6', label: 'Text can be resized to 200%' },
    { id: 'text-7', label: 'No loss of content or functionality when users change text spacing parameters' },
    { id: 'media-1', label: 'Text alternatives for images are accurate and meaningful' },
    { id: 'media-2', label: 'Alternatives for video (captions, audio description) and audio/video-only (transcript) are provided and accurate' },
    { id: 'media-3', label: 'The user can stop animation, or it stops automatically after 5 seconds' },
    { id: 'media-4', label: 'There are no content flashes' },
    { id: 'color-1', label: 'There is sufficient contrast (text on top of a gradient or images cannot be checked automatically)' },
    { id: 'color-2', label: 'Colour is not used as the sole means to convey information' },
    { id: 'consistency-1', label: 'Navigation mechanisms occur in the same order across a set of pages' },
    { id: 'consistency-2', label: 'Components with the same functionality are identified consistently across the website' }
  ];

  const flashcards = [
    { front: "Text Resizing requirement", back: "Text must be resizable up to 200% without loss of content or functionality." },
    { front: "Text Spacing (WCAG 1.4.12)", back: "No loss of content/functionality when line height (1.5), paragraph spacing (2), letter spacing (0.12), and word spacing (0.16) are applied." },
    { front: "Animation control", back: "Users must be able to stop, pause, or hide animation that starts automatically and lasts more than 5 seconds." },
    { front: "Language of Parts", back: "Changes in language within a page must be programmatically identified using the 'lang' attribute." }
  ];

  const scenarios = [
    {
      id: 'sc1',
      description: 'A button uses only a red background to indicate an error state.',
      options: ['1.4.1 Use of Color', '1.4.3 Contrast (Minimum)', '3.2.4 Consistent Identification'],
      correctOption: '1.4.1 Use of Color',
      explanation: 'Color should not be the sole means of conveying information. An icon or text label should also be present.'
    },
    {
      id: 'sc2',
      description: 'A website has a "Search" button on the home page and a "Find" button with a magnifying glass icon on the contact page, both performing the same search function.',
      options: ['3.2.3 Consistent Navigation', '3.2.4 Consistent Identification', '2.4.6 Headings and Labels'],
      correctOption: '3.2.4 Consistent Identification',
      explanation: 'Components that have the same functionality within a set of Web pages should be identified consistently.'
    },
    {
      id: 'sc3',
      description: 'An image of a chart does not have a text alternative explaining the data.',
      options: ['1.1.1 Non-text Content', '1.4.5 Images of Text', '1.3.1 Info and Relationships'],
      correctOption: '1.1.1 Non-text Content',
      explanation: 'All non-text content that is presented to the user must have a text alternative that serves the equivalent purpose.'
    }
  ];

  return (
    <div className="container">
      <h1>3 Content Testing</h1>
      <p>
        Manual evaluation is critical because automated tools cannot verify the quality, accuracy, or meaning of content. 
        The following are essential requirements to consider during a manual evaluation process.
      </p>

      <div className="section">
        <Callout title="Text Requirements" classNamePrefix="content-testing">
          <ul>
            <li>Headings, lists, and other structural elements are marked up correctly</li>
            <li>Titles, headings, and form labels are descriptive</li>
            <li>Links are descriptive (in context)</li>
            <li>Changes to the language of parts are marked up accordingly</li>
            <li>No loss of functionality occurs when zooming up to 200%</li>
            <li>Text can be resized to 200%</li>
            <li>No loss of content or functionality when users change text spacing parameters</li>
          </ul>
        </Callout>
        
        <TextSpacingDemo />
      </div>

      <div className="section">
        <Callout title="Images, Animation, Multimedia" classNamePrefix="content-testing">
          <ul>
            <li>Text alternatives for images are accurate and meaningful</li>
            <li>Alternatives for video (captions, audio description) and audio or video-only (transcript) are provided and accurate</li>
            <li>The user can stop animation, or it stops automatically after 5 seconds</li>
            <li>There are no content flashes</li>
          </ul>
        </Callout>
        
        <MediaAccessibilityDemo />
      </div>

      <div className="section">
        <Callout title="Colour" classNamePrefix="content-testing">
          <ul>
            <li>There is sufficient contrast (text on top of a gradient or images cannot be checked automatically)</li>
            <li>Colour is not used as the sole means to convey information</li>
          </ul>
        </Callout>
      </div>

      <div className="section">
        <Callout title="Consistency" classNamePrefix="content-testing">
          <ul>
            <li>Navigation mechanisms occur in the same order across a set of pages</li>
            <li>Components with the same functionality are identified consistently across the website</li>
          </ul>
        </Callout>
      </div>

      <div className="section">
        <h2>Learning Activities</h2>
        
        <div className="activity-block">
          <h3>Key Terms Flashcards</h3>
          <FlashcardSet cards={flashcards} />
        </div>

        <div className="activity-block">
          <ChecklistActivity 
            title="Manual Evaluation Practice" 
            items={manualRequirements} 
            instructions="Use this checklist to practice evaluating a webpage against the essential requirements."
          />
        </div>

        <div className="activity-block">
          <SuccessCriteriaMapper 
            title="Knowledge Check: Content Testing Scenarios" 
            scenarios={scenarios}
          />
        </div>
      </div>
    </div>
  );
}

export default ContentTesting;