import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import Tabs from "../../../components/Tabs";
import ZoomSimulator from "../../../components/ZoomSimulator";

function UsersWithLowVision() {
  const flashcards = [
    {
      front: "What is the primary way users with low vision find their way around?",
      back: "They often use the vision they have to find their way around the interface, sometimes supplementing with screen readers.",
    },
    {
      front: "Name three strategies for users with low vision.",
      back: "1. Using text enlargement and zoom. 2. Changing colors. 3. Using magnifying tools.",
    },
    {
      front: "What is 'focus tracking' in magnification software?",
      back: "It ensures that when the pointer or keyboard focus moves, the visible portion of the magnified content moves with it.",
    },
    {
      front: "To what level can magnification software enlarge screen content?",
      back: "Up to 60 times the original size (6000%).",
    },
    {
      front: "What is the difference between built-in and independent magnification software?",
      back: "Built-in options (e.g., Windows Magnifier, macOS Zoom) are often more limited, while independent tools (e.g., ZoomText, SuperNova) offer more advanced features for high-zoom users.",
    },
  ];

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <section className="content-section">
          <p>
            Users with low vision may also use a screen reader to get text read aloud, but they often use the vision they
            have to find their way around the interface.
          </p>
          <h3>Common Strategies</h3>
          <ul>
            <li>Using text enlargement and zoom in the browser</li>
            <li>Changing colours in the browser or operating system</li>
            <li>Using magnifying tools</li>
          </ul>
        </section>
      ),
    },
    {
      id: "concepts",
      label: "Key Concepts",
      content: (
        <section className="content-section">
          <h2>2.1 Some Concepts That Are Important to Understand</h2>
          <ul>
            <li>
              It is quite common for magnification users to use a mouse to navigate, but they also use tabbing or keyboard
              commands to speed up the interaction.
            </li>
            <li>Users may alter colours, contrasts, fonts, focus indicators, and cursors.</li>
            <li>Users often combine zooming and screen reading.</li>
            <li>Users engage the screen reader temporarily to read text that runs beyond the magnified area.</li>
            <li>
              Users engage the magnification software’s screen reader or the operating system's voice output to read
              longer text that would require a lot of scrolling in the magnified area.
            </li>
            <li>
              There is a significant difference between users who only need the built-in moderate zoom in the browser and
              those who use high zoom levels/screen readers as a complementary technique. Their strategies vary accordingly.
            </li>
          </ul>
        </section>
      ),
    },
    {
      id: "software",
      label: "Magnification Software",
      content: (
        <section className="content-section">
          <h2>2.2 Magnification Software</h2>
          <p>
            Magnification software presents the information in a way suitable for people with low vision. It enlarges
            everything visible on the screen, including the operating system, applications, and content.
          </p>
          <Callout title="Capabilities of Magnification Software" type="info">
            <ul>
              <li>Enlarge information up to 60 times (6000%).</li>
              <li>Provide special colour and contrast settings (e.g., inverting colours).</li>
              <li>Customizing the mouse pointer or insertion mark.</li>
            </ul>
          </Callout>

          <h3>Orientation Challenges</h3>
          <p>
            When navigating with magnification software, orientation on the page can be challenging for users, especially
            when the level of magnification is high. Common strategies include:
          </p>
          <ul>
            <li><strong>Zooming in and out:</strong> Zooming out to get an overview and identify location, then zooming in to explore.</li>
            <li>
              <strong>Focus tracking:</strong> When the pointer or keyboard focus moves, the visible portion of the content
              moves with it.
            </li>
          </ul>

          <Callout title="Interaction with Overlays" type="pro-tip">
            <p>
              If additional content becomes visible on hover or keyboard focus (e.g., custom tooltips or submenus), it
              must be dismissible and it must be possible to move the mouse pointer over it without it disappearing.
            </p>
          </Callout>

          <p>
            Magnification software can be combined with a screen reader and sometimes a Braille display. This relieves
            the eyes and ensures availability of information not visible in the enlarged display.
          </p>

          <h3>3.3 Common Magnification Software</h3>
          <p>
            Screen magnification is built-in on all popular platforms, such as Windows, macOS, iOS and Android.
          </p>
          <ul>
            <li><strong>Windows:</strong> Magnifier</li>
            <li><strong>macOS / iOS:</strong> Vision Accessibility features</li>
            <li><strong>Android:</strong> Magnification, Font size and display size settings</li>
          </ul>
          <p>
            Magnification and Zoom increase everything on the screen. iOS and Android also support pinch zoom and the ability to magnify parts of the screen.
          </p>
          <p>
            If magnification functions are provided as an accessibility feature of Operating Systems, the level of magnification and the feature set are limited. Therefore, people with low vision may use a magnification tool independent of the operating system.
          </p>
          <h4>Independent Windows Software:</h4>
          <ul>
            <li><strong>SuperNova:</strong> Combined screen reader and magnification tool.</li>
            <li><strong>ZoomText:</strong> Powerful screen magnification and reading tool.</li>
            <li><strong>Fusion:</strong> A combination of the JAWS screen reader and ZoomText magnification.</li>
          </ul>
        </section>
      ),
    },
    {
      id: "demos",
      label: "Demos & Activities",
      content: (
        <>
          <ZoomSimulator />
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
      label: "Exam Tips",
      content: (
        <ExamTakeaway title="Key Takeaway for the WAS Exam">
          <ul>
            <li>
              Low vision users often combine multiple strategies: zoom, color inversion, and screen readers for longer
              passages.
            </li>
            <li>Magnification goes up to 60x (6000%).</li>
            <li>Focus tracking is vital for maintaining orientation at high zoom levels.</li>
            <li>
              Independent magnification software (ZoomText, SuperNova) often provides more features than built-in OS
              tools.
            </li>
            <li>Hover/Focus content must be persistent, hoverable, and dismissible (WCAG 1.4.13 Content on Hover or Focus).</li>
            <li>People with cognitive or learning disabilities may also use magnification to help them focus.</li>
          </ul>
        </ExamTakeaway>
      ),
    },
  ];

  return (
    <div className="container users-with-low-vision-page">
      <PageHeader title="2. Users with Low Vision" />
      <Tabs tabs={tabs} ariaLabel="Users with low vision sections" />
    </div>
  );
}

export default UsersWithLowVision;