import React from "react";
import PageHeader from "../../../components/PageHeader";
import Tabs from "../../../components/Tabs";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import MultipleChoiceQuiz from "../../../components/MultipleChoiceQuiz";
import TranscriptDemo from "../../../components/TranscriptDemo";
import ExamTakeaway from "../../../components/ExamTakeaway";

function UsersWithAuditoryDisabilities() {
  const flashcards = [
    {
      front: "What is 'early hearing loss'?",
      back: "An auditory disability acquired before the completion of language acquisition. These individuals often prefer sign language.",
    },
    {
      front: "Why is written language sometimes difficult for people who use sign language?",
      back: "Written language can be similar to a foreign language for sign language users. Sign language videos are a WCAG 2.1 AAA Success Criterion and are very helpful.",
    },
    {
      front: "What is 'late hearing loss'?",
      back: "An auditory disability acquired after language acquisition. These individuals usually prefer written language information.",
    },
    {
      front: "What are essential alternatives for auditory information in videos?",
      back: "Transcripts for audio files and accurate captioning for video content.",
    },
    {
      front: "What are the risks of using only automated tools for captions?",
      back: "They often rely on AI which can create many opportunities for incorrect translation of spoken content.",
    },
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "Which type of disability might lead to a preference for sign language over written text?",
      options: ["Late hearing loss", "Early hearing loss", "Color blindness", "Motor disability"],
      correct: 1,
    },
    {
      id: 2,
      question: "Which WCAG level includes sign language videos as a Success Criterion?",
      options: ["Level A", "Level AA", "Level AAA", "Level AAAA"],
      correct: 2,
    },
    {
      id: 3,
      question: "What is the preferred type of captioning for customization?",
      options: ["Open captions", "Closed captions", "Burned-in captions", "Automated captions"],
      correct: 1,
    },
  ];

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <section className="content-section">
          <p>
            People with auditory disabilities do not use special assistive technology. Nevertheless, they have needs that should be considered. People with auditory disabilities may prefer different forms of communication:
          </p>
          <h3>Early Hearing Loss / Deafness</h3>
          <p>
            An auditory disability acquired before the completion of language acquisition. Deaf people often prefer to use sign language. There are several national sign languages and “International Sign”.
          </p>
          <Callout title="Language Barriers">
            For people who use sign language, written language (and thus also texts on websites or in apps) can be more difficult to understand, similar to a foreign language. For this reason, sign language videos (a WCAG 2.1 AAA Success Criterion) are helpful for them.
          </Callout>
          <h3>Late Hearing Loss / Deafness</h3>
          <p>
            An auditory disability acquired after the completion of language acquisition. These people prefer to use written language information even if they have already developed hearing loss.
          </p>
          <Callout title="Media Alternatives">
            Alternatives for auditory information, such as transcripts for audio files and accurate captioning video content is very important.
          </Callout>
        </section>
      ),
    },
    {
      id: "concepts",
      label: "Important Concepts",
      content: (
        <section className="content-section">
          <ul>
            <li>
              <strong>Pre-recorded audio-only:</strong> Need an alternative that presents equivalent information, such as a transcript.
            </li>
            <li>
              <strong>Pre-recorded (or live) video:</strong> Need captions. Closed captions (that can be hidden or shown by users) are preferable to open captions as they are customizable.
            </li>
            <li>
              <strong>Visual clarity:</strong> Use of icons, illustrations, and images should also be used to enhance the information.
            </li>
            <li>
              <strong>Accuracy:</strong> The use of only automated tools and those relying only on artificial intelligence creates many opportunities for an incorrect translation of spoken content.
            </li>
          </ul>
          <ExamTakeaway title="Key WCAG Note">
            For pre-recorded video where the sound doesn’t always convey what is going on visually, persons with visual disabilities need an audio described version. (Note: While this page focuses on auditory disabilities, the provided source material highlights this related concept).
          </ExamTakeaway>
        </section>
      ),
    },
    {
      id: "demo",
      label: "Learning Activity",
      content: (
        <section className="content-section">
          <h2>Transcript & Disclosure Demo</h2>
          <p>
            Below is a demonstration of how a transcript can be provided for audio content using a disclosure widget.
          </p>
          <TranscriptDemo />
        </section>
      ),
    },
    {
      id: "flashcards",
      label: "Flashcards",
      content: (
        <section className="content-section">
          <FlashcardSet cards={flashcards} />
        </section>
      ),
    },
    {
      id: "quiz",
      label: "Quiz",
      content: (
        <MultipleChoiceQuiz questions={quizQuestions} title="Auditory Disabilities Knowledge Check" />
      ),
    },
  ];

  return (
    <div className="container">
      <PageHeader 
        title="6 Users With Auditory Disabilities" 
        lede="Understanding the diverse needs and communication preferences of people with hearing loss."
      />
      <Tabs tabs={tabs} />
    </div>
  );
}

export default UsersWithAuditoryDisabilities;