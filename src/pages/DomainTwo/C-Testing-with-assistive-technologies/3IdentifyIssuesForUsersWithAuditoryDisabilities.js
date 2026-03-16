import React from "react";
import PageHeader from "../../../components/PageHeader";
import Tabs from "../../../components/Tabs";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import ExamTakeaway from "../../../components/ExamTakeaway";
import AccessibleChecklist from "../../../components/AccessibleChecklist";
import TranscriptDemo from "../../../components/TranscriptDemo";
import MediaAccessibilityDemo from "../../../components/MediaAccessibilityDemo";
import SuccessCriteriaMapper from "../../../components/SuccessCriteriaMapper";

function IdentifyIssuesForUsersWithAuditoryDisabilities() {
  const checklistItems = [
    { id: "videos-captions", label: "All pre-recorded videos with audio content have synchronized captions." },
    { id: "captions-accurate", label: "Captions are accurate (automatic captioning errors are corrected) and include sound effects." },
    { id: "audio-transcripts", label: "Transcripts are provided for audio-only content (e.g., podcasts, recorded speeches)." },
    { id: "live-captions", label: "Live audio content in synchronized media has captions (WCAG AA requirement)." },
    { id: "sign-language", label: "Sign language interpretation is provided for pre-recorded synchronized media (WCAG AAA requirement)." },
    { id: "extended-audio-desc", label: "Audio descriptions or transcripts are provided for all video-only content." },
  ];

  const flashcards = [
    {
      front: "What is the difference between Open and Closed Captions?",
      back: "Closed captions (CC) can be turned on or off by the user, while open captions are 'burned into' the video and are always visible.",
    },
    {
      front: "Why is 'Auto-captioning' alone usually insufficient?",
      back: "Automatic captions (like those on YouTube) often contain errors that change the meaning of the content. They must be manually reviewed and corrected for accuracy.",
    },
    {
      front: "What should be included in a high-quality transcript?",
      back: "Beyond spoken dialogue, a transcript should include speaker identification and descriptions of significant non-speech sounds (e.g., [Door slams], [Tense music]).",
    },
    {
      front: "Which WCAG Success Criterion requires captions for live audio?",
      back: "SC 1.2.4 Captions (Live) at Level AA.",
    },
    {
      front: "Who benefits from captions besides users who are Deaf or hard-of-hearing?",
      back: "Users in noisy environments, users in quiet environments (without headphones), non-native speakers, and people with certain cognitive disabilities.",
    }
  ];

  const scScenarios = [
    {
      id: "sc-1",
      description: "A pre-recorded training video does not have any text alternative for the spoken instructions.",
      options: ["1.2.1 Audio-only and Video-only", "1.2.2 Captions (Prerecorded)", "1.2.3 Audio Description or Media Alternative"],
      correctOption: "1.2.2 Captions (Prerecorded)",
      explanation: "Since it's a video with audio, captions are required to provide a text equivalent for the audio track."
    },
    {
      id: "sc-2",
      description: "A podcast on a website is provided as an MP3 file with no text version available.",
      options: ["1.2.1 Audio-only and Video-only", "1.2.2 Captions (Prerecorded)", "1.2.4 Captions (Live)"],
      correctOption: "1.2.1 Audio-only and Video-only",
      explanation: "For pre-recorded audio-only content, a transcript (a text alternative) must be provided."
    },
    {
        id: "sc-3",
        description: "A live webinar is being streamed but has no real-time captioning service provided.",
        options: ["1.2.2 Captions (Prerecorded)", "1.2.4 Captions (Live)", "1.2.5 Audio Description"],
        correctOption: "1.2.4 Captions (Live)",
        explanation: "Level AA requires captions for live audio content in synchronized media."
    }
  ];

  const tabs = [
    {
      id: "checklist",
      label: "Audit Checklist",
      content: (
        <>
          <section>
            <p>
                Testing for users with auditory disabilities primarily involves ensuring that all information delivered 
                via sound has a text-based or visual equivalent. This includes not just spoken words, but also 
                important ambient sounds and musical cues.
            </p>
            <AccessibleChecklist 
              title="Auditory Disability Testing Highlights" 
              items={checklistItems} 
            />
          </section>
          
          <div style={{ marginTop: '2rem' }}>
            <Callout 
                title="Testing Tip: Sound-Off Test" 
                text="A simple but effective test is to watch a video with the volume completely muted. If you cannot follow the story or understand the instructions perfectly, the captions or visual cues are likely insufficient."
            />
          </div>
        </>
      )
    },
    {
      id: "demos",
      label: "Interactive Demos",
      content: (
        <>
          <div className="demo-wrapper">
            <h3>Transcript Implementation</h3>
            <p>Transcripts are vital for audio-only content. A good implementation provides easy access to the text without cluttering the page.</p>
            <TranscriptDemo />
          </div>
          <hr style={{ margin: '3rem 0' }} />
          <MediaAccessibilityDemo />
        </>
      )
    },
    {
      id: "practice",
      label: "Practice & Mastery",
      content: (
        <>
          <SuccessCriteriaMapper 
            scenarios={scScenarios}
            title="Activity: Map the Media Criterion"
          />
          
          <FlashcardSet 
            cards={flashcards} 
            title="Auditory Accessibility Flashcards" 
          />

          <ExamTakeaway title="Key Takeaways for the Exam">
            <ul>
              <li><strong>Captions vs. Subtitles:</strong> In many countries, 'subtitles' refers only to translation of speech, whereas 'captions' includes non-speech sounds (essential for accessibility).</li>
              <li><strong>Correction is Key:</strong> Automatic captions are a starting point, not a solution. For the exam, remember that uncorrected auto-captions often fail WCAG.</li>
              <li><strong>Transcript for Audio:</strong> Audio-only content (like a radio interview) needs a full transcript.</li>
              <li><strong>Accuracy:</strong> Captions must be synchronized with the audio and be accurate enough to convey the full meaning.</li>
              <li><strong>AAA Requirements:</strong> Remember that sign language (1.2.6) and extended audio description (1.2.7) are Level AAA requirements.</li>
            </ul>
          </ExamTakeaway>
        </>
      )
    }
  ];

  return (
    <div className="container">
      <PageHeader
        title="3. Identify Issues for Users with Auditory Disabilities"
        description="Learn how to verify that multimedia and audio content are accessible to users who are Deaf or hard-of-hearing."
      />

      <Tabs tabs={tabs} ariaLabel="Auditory disability issues sections" />
    </div>
  );
}

export default IdentifyIssuesForUsersWithAuditoryDisabilities;