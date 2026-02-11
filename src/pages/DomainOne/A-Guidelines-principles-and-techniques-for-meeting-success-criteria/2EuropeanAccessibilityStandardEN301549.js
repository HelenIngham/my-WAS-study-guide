// 2EuropeanAccessibilityStandardEN301549.js
import React from "react";
import "./2EuropeanAccessibilityStandardEN301549.css";
import ".././index.css";

function EuropeanAccessibilityStandardEN301549() {
    const questions = React.useMemo(
        () => [
            {
                id: "q1",
                text: "EN 301 549 is a harmonised European standard developed to support European legislation.",
                correct: true,
                explanation:
                    "True. EN 301 549 is a harmonised European standard developed by CEN/CENELEC/ETSI under a mandate to support EU legislation.",
            },
            {
                id: "q2",
                text: "EN 301 549 only applies to websites and does not cover software, hardware, or documents.",
                correct: false,
                explanation:
                    "False. Its scope is broader than web accessibility and includes ICT such as hardware, software, non-web documents, and support services.",
            },
            {
                id: "q3",
                text: "Harmonised standards are mandatory, and organisations are not allowed to use alternative technical solutions.",
                correct: false,
                explanation:
                    "False. Harmonised standards provide voluntary technical specifications for presumed conformity; other solutions may be used if they meet legal obligations.",
            },
            {
                id: "q4",
                text: "EN 301 549 includes functional performance statements describing user needs.",
                correct: true,
                explanation:
                    "True. Clause 4 contains functional performance statements (user needs) to help connect requirements to user impact.",
            },
            {
                id: "q5",
                text: "Annex B is useful because it maps functional performance statements (user needs) to technical requirements.",
                correct: true,
                explanation:
                    "True. Annex B provides an informative mapping between Clause 4 user needs and technical requirements.",
            },
            {
                id: "q6",
                text: "Annex C provides a complete step-by-step testing methodology that removes the need for expert interpretation.",
                correct: false,
                explanation:
                    "False. Annex C lists tests and evaluation guidance, but it is not a complete end-to-end testing methodology; expertise is still required.",
            },
            {
                id: "q7",
                text: "For web requirements, EN 301 549 is intentionally aligned with WCAG, referencing WCAG 2.1 A and AA.",
                correct: true,
                explanation:
                    "True. EN 301 549 references WCAG 2.1 Level A and AA success criteria for web accessibility requirements.",
            },
            {
                id: "q8",
                text: "If a requirement’s precondition is not met, EN 301 549 generally treats that requirement as not applicable.",
                correct: true,
                explanation:
                    "True. Many requirements are self-scoping: if the precondition is not true, the requirement does not apply.",
            },
            {
                id: "q9",
                text: "Being WCAG AA compliant always guarantees compliance with EN 301 549 in EU contexts.",
                correct: false,
                explanation:
                    "False. EN 301 549 may include additional requirements beyond WCAG that are relevant for EU directives; WCAG AA alone may not be sufficient.",
            },
            {
                id: "q10",
                text: "EN 301 549 has relevance outside the EU and has been adopted in Australia as AS EN 301 549.",
                correct: true,
                explanation:
                    "True. EN 301 549 has been adopted outside Europe, including as AS EN 301 549 in Australia.",
            },
        ],
        []
    );

    const [answers, setAnswers] = React.useState(() => ({}));
    const [submitted, setSubmitted] = React.useState(false);
    const [showReview, setShowReview] = React.useState(false);

    const results = React.useMemo(() => {
        const entries = questions.map((q) => {
            const userAnswer = answers[q.id]; // true/false/undefined
            const isCorrect = userAnswer === q.correct;
            return { ...q, userAnswer, isCorrect };
        });

        const correctCount = entries.filter((e) => e.isCorrect).length;
        const incorrect = entries.filter((e) => submitted && !e.isCorrect);

        return {
            entries,
            correctCount,
            total: questions.length,
            incorrect,
        };
    }, [answers, questions, submitted]);

    const allAnswered = questions.every((q) => answers[q.id] === true || answers[q.id] === false);

    function setAnswer(questionId, value) {
        setAnswers((prev) => ({ ...prev, [questionId]: value }));
        setSubmitted(false);
        setShowReview(false);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        setShowReview(false);
    }

    function handleReset() {
        setAnswers({});
        setSubmitted(false);
        setShowReview(false);
    }

    return (
        <div className="container en301549">
            <header className="en301549__header">
                <h1>European Accessibility Standard: EN 301 549</h1>
                <p className="en301549__lede">
                    EN 301 549 is a harmonised European standard that defines accessibility requirements for
                    Information and Communication Technology (ICT) products and services. It supports EU
                    accessibility legislation and provides a practical way to demonstrate compliance.
                </p>
            </header>

            <section aria-labelledby="en-overview">
                <h2 id="en-overview">What EN 301 549 is (and why it exists)</h2>
                <p>
                    EN 301 549 was developed by the European Standards Organisations (CEN, CENELEC, ETSI)
                    on request (“mandate”) from the European Commission. Harmonised standards provide
                    <strong> voluntary technical specifications</strong> that can be used to show “presumed conformity”
                    with legal obligations—organizations may choose other technical solutions, but the standard
                    is a widely used reference point.
                </p>

                <div className="en301549__callout" role="note" aria-label="Key purpose">
                    <h3 className="en301549__calloutTitle">Originally focused on procurement</h3>
                    <p className="en301549__calloutText">
                        EN 301 549 was originally developed to support procurement of accessible products and
                        services—helping buyers specify accessibility requirements and compare vendor claims.
                    </p>
                </div>
            </section>

            <section aria-labelledby="en-scope">
                <h2 id="en-scope">Scope: broader than “web accessibility”</h2>
                <p>
                    Unlike WCAG (which targets web content), EN 301 549 covers a wide range of ICT, including
                    hardware, software, websites, non-web documents, support services, and more. The standard
                    includes functional performance statements (“user needs”) and then technical requirements
                    mapped to those needs.
                </p>

                <ul className="en301549__bullets">
                    <li>
                        <strong>Clause 4:</strong> Functional performance statements (user needs) for locating, identifying,
                        operating ICT functions, and accessing information regardless of physical, cognitive or sensory abilities.
                    </li>
                    <li>
                        <strong>Clauses 5–13:</strong> Technical requirements for different ICT categories (e.g., web, software,
                        documents, hardware, support services).
                    </li>
                    <li>
                        <strong>Annex B (informative):</strong> Mapping between user needs (Clause 4) and technical requirements.
                        Useful for understanding user impact.
                    </li>
                    <li>
                        <strong>Annex C (informative):</strong> Test procedures and evaluation methodology (high-level) for requirements.
                    </li>
                </ul>
            </section>

            <section aria-labelledby="en-wcag">
                <h2 id="en-wcag">Relationship to WCAG</h2>
                <p>
                    For web accessibility, EN 301 549 is intentionally aligned with WCAG. The standard references
                    WCAG 2.1 Level A and AA success criteria and also references WCAG2ICT guidance for applying
                    WCAG concepts beyond classic web pages. In addition, EN 301 549 includes references to
                    WCAG AAA in a specific section and includes WCAG conformance requirements.
                </p>

                <div className="en301549__grid" role="list" aria-label="How EN 301 549 relates to WCAG">
                    <div className="en301549__card" role="listitem">
                        <h3 className="en301549__cardTitle">Similarities</h3>
                        <ul className="en301549__cardList">
                            <li>Uses WCAG success criteria as the core basis for web requirements.</li>
                            <li>Supports consistent interpretation of accessibility requirements across organizations.</li>
                        </ul>
                    </div>

                    <div className="en301549__card" role="listitem">
                        <h3 className="en301549__cardTitle">Differences</h3>
                        <ul className="en301549__cardList">
                            <li>Broader ICT coverage beyond websites (e.g., software, documents, hardware).</li>
                            <li>Includes additional requirements beyond WCAG that may be needed for EU directives.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section aria-labelledby="en-beyond">
                <h2 id="en-beyond">Requirements beyond WCAG (important in EU compliance)</h2>
                <p>
                    EN 301 549 includes requirements that go beyond WCAG and may be relevant for compliance
                    with EU directives such as the Web Accessibility Directive (WAD). The standard’s Annex A
                    includes tables showing presumed conformance for websites and apps in the context of WAD,
                    and it highlights requirements applicable in addition to WCAG.
                </p>
                <p>
                    When you’re working toward compliance in EU contexts, it’s not enough to be “WCAG AA compliant”
                    if the applicable policy requires EN 301 549 conformance. EN 301 549 can add additional requirements
                    you must evaluate and meet.
                </p>
            </section>

            <section aria-labelledby="en-selfscoping">
                <h2 id="en-selfscoping">Self-scoping requirements (applicability language)</h2>
                <p>
                    Because EN 301 549 applies across many kinds of ICT, many requirements include “preconditions”
                    that define when a requirement applies. This is sometimes called <strong>self-scoping</strong>.
                </p>

                <div className="en301549__example" aria-label="Example of self-scoping language">
                    <p className="en301549__exampleLabel">Example pattern:</p>
                    <p className="en301549__exampleText">“Where ICT displays video with synchronised audio, it shall…”</p>
                    <ul className="en301549__bullets">
                        <li>If the precondition isn’t true, the requirement is <strong>not applicable</strong>.</li>
                        <li>If the precondition is true, you evaluate it using the related test guidance (Annex C).</li>
                    </ul>
                </div>

                <div className="en301549__callout" role="note" aria-label="Testing note">
                    <h3 className="en301549__calloutTitle">Testing note</h3>
                    <p className="en301549__calloutText">
                        Even though Annex C lists tests for requirements, it doesn’t provide a complete step-by-step
                        testing methodology. You still need sound accessibility knowledge and careful interpretation
                        when evaluating conformance.
                    </p>
                </div>
            </section>

            <section aria-labelledby="en-adoption">
                <h2 id="en-adoption">Adoption beyond Europe</h2>
                <p>
                    EN 301 549 is used outside the EU as well. For example, it has been adopted in Australia
                    (AS EN 301 549) and is referenced in other regions. In procurement workflows, vendors may
                    document conformance using reporting formats aligned to EN 301 549 (for example, an EU-focused
                    accessibility conformance reporting template).
                </p>
            </section>

            <footer className="en301549__footer" aria-label="Study takeaway">
                <h2 className="en301549__footerTitle">Exam / practice takeaway</h2>
                <ul className="en301549__bullets">
                    <li>Know EN 301 549’s broader ICT scope (not just websites).</li>
                    <li>Understand how WCAG is represented inside EN 301 549 for web requirements.</li>
                    <li>Be able to explain why EN 301 549 can include requirements beyond WCAG in EU compliance contexts.</li>
                    <li>Recognize self-scoping language and how it affects applicability when testing.</li>
                </ul>
            </footer>

            <section className="en301549__quiz" aria-labelledby="en-quiz-title">
                <h2 id="en-quiz-title">Quick Check: 10-question True/False Quiz</h2>
                <p className="en301549__quizIntro">
                    Answer all questions, then select <strong>Check answers</strong>. You can review only the questions
                    you got wrong.
                </p>

                <form onSubmit={handleSubmit} className="en301549__quizForm">
                    {questions.map((q, index) => {
                        const currentValue = answers[q.id]; // true/false/undefined
                        const showPerQuestionFeedback = submitted && (currentValue === true || currentValue === false);
                        const isCorrect = showPerQuestionFeedback ? currentValue === q.correct : null;

                        return (
                            <fieldset key={q.id} className="en301549__question">
                                <legend className="en301549__questionLegend">
                                    {index + 1}. {q.text}
                                </legend>

                                <div className="en301549__options" role="radiogroup" aria-label={`Question ${index + 1}`}>
                                    <label className="en301549__option">
                                        <input
                                            type="radio"
                                            name={q.id}
                                            value="true"
                                            checked={currentValue === true}
                                            onChange={() => setAnswer(q.id, true)}
                                        />
                                        True
                                    </label>

                                    <label className="en301549__option">
                                        <input
                                            type="radio"
                                            name={q.id}
                                            value="false"
                                            checked={currentValue === false}
                                            onChange={() => setAnswer(q.id, false)}
                                        />
                                        False
                                    </label>
                                </div>

                                {showPerQuestionFeedback && (
                                    <p
                                        className={`en301549__feedback ${
                                            isCorrect ? "en301549__feedback--correct" : "en301549__feedback--incorrect"
                                        }`}
                                    >
                                        <strong>{isCorrect ? "Correct." : "Incorrect."}</strong>{" "}
                                        <span className="en301549__feedbackText">{q.explanation}</span>
                                    </p>
                                )}
                            </fieldset>
                        );
                    })}

                    <div className="en301549__quizActions">
                        <button type="submit" className="en301549__btn" disabled={!allAnswered}>
                            Check answers
                        </button>

                        <button
                            type="button"
                            className="en301549__btn en301549__btn--secondary"
                            onClick={handleReset}
                        >
                            Reset
                        </button>

                        {submitted && (
                            <button
                                type="button"
                                className="en301549__btn en301549__btn--secondary"
                                onClick={() => setShowReview((prev) => !prev)}
                            >
                                {showReview ? "Hide review" : "Review incorrect answers"}
                            </button>
                        )}
                    </div>

                    {!allAnswered && (
                        <p className="en301549__quizHint" role="status">
                            Answer all questions to enable <strong>Check answers</strong>.
                        </p>
                    )}

                    {submitted && (
                        <div className="en301549__score" role="status" aria-live="polite">
                            Score: <strong>{results.correctCount}</strong> / {results.total}
                        </div>
                    )}

                    {submitted && showReview && (
                        <div className="en301549__review" aria-label="Incorrect answers review">
                            {results.incorrect.length === 0 ? (
                                <p className="en301549__reviewTitle">
                                    Nice work—no incorrect answers to review.
                                </p>
                            ) : (
                                <>
                                    <h3 className="en301549__reviewTitle">Questions to review</h3>
                                    <ul className="en301549__reviewList">
                                        {results.incorrect.map((q) => (
                                            <li key={q.id} className="en301549__reviewItem">
                                                <div className="en301549__reviewQuestion">
                                                    <strong>{q.text}</strong>
                                                </div>
                                                <div className="en301549__reviewMeta">
                                                    Your answer:{" "}
                                                    <strong>
                                                        {q.userAnswer === true ? "True" : q.userAnswer === false ? "False" : "—"}
                                                    </strong>
                                                    {" · "}
                                                    Correct answer: <strong>{q.correct ? "True" : "False"}</strong>
                                                </div>
                                                <div className="en301549__reviewExplanation">{q.explanation}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    )}
                </form>
            </section>
        </div>
    );
}

export default EuropeanAccessibilityStandardEN301549;