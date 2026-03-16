// components/ChoiceChallenge.jsx
import React, { useState } from 'react';
import './ChoiceChallenge.css';

/**
 * Reusable Choice Challenge component for choosing between two options (e.g., Standard vs Custom)
 * 
 * Props:
 * - title: string
 * - intro: string
 * - scenarios: Array<{ 
 *     id: number, 
 *     situation: string, 
 *     optionA: { label: string, isCorrect: boolean, feedback: string },
 *     optionB: { label: string, isCorrect: boolean, feedback: string }
 *   }>
 * - classNamePrefix?: string
 */
export default function ChoiceChallenge({
    title = "Decision Challenge",
    intro = "Choose the best approach for each scenario.",
    scenarios = [],
    classNamePrefix
}) {
    const [selections, setSelections] = useState({}); // { scenarioId: 'optionA' | 'optionB' }
    const [submitted, setSubmitted] = useState(false);

    const handleSelect = (scenarioId, option) => {
        if (submitted) return;
        setSelections(prev => ({
            ...prev,
            [scenarioId]: option
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleReset = () => {
        setSelections({});
        setSubmitted(false);
    };

    const calculateScore = () => {
        return scenarios.reduce((score, s) => {
            const selection = selections[s.id];
            if (selection && s[selection].isCorrect) {
                return score + 1;
            }
            return score;
        }, 0);
    };

    const p = classNamePrefix;
    const containerCls = p ? `${p}__challenge` : 'choice-challenge';
    const headerCls = p ? `${p}__challengeHeader` : 'challenge-header';
    const scenarioCls = p ? `${p}__scenario` : 'challenge-scenario';
    const situationCls = p ? `${p}__situation` : 'scenario-situation';
    const optionsCls = p ? `${p}__options` : 'scenario-options';
    const optionBtnCls = p ? `${p}__optionBtn` : 'option-btn';
    const feedbackCls = p ? `${p}__feedback` : 'scenario-feedback';
    const actionsCls = p ? `${p}__actions` : 'challenge-actions';
    const resultCls = p ? `${p}__result` : 'challenge-result';

    return (
        <section className={containerCls} aria-labelledby="challenge-heading">
            <div className={headerCls}>
                <h2 id="challenge-heading">{title}</h2>
                <p>{intro}</p>
            </div>

            <form onSubmit={handleSubmit}>
                {scenarios.map((s) => (
                    <fieldset key={s.id} className={scenarioCls}>
                        <legend className={situationCls}>{s.situation}</legend>
                        <div className={optionsCls} role="radiogroup" aria-labelledby={`situation-${s.id}`}>
                            <div id={`situation-${s.id}`} className="visually-hidden">Options for: {s.situation}</div>
                            
                            <button
                                type="button"
                                className={`${optionBtnCls} ${selections[s.id] === 'optionA' ? 'selected' : ''} ${submitted && s.optionA.isCorrect ? 'correct' : ''} ${submitted && selections[s.id] === 'optionA' && !s.optionA.isCorrect ? 'incorrect' : ''}`}
                                onClick={() => handleSelect(s.id, 'optionA')}
                                aria-pressed={selections[s.id] === 'optionA'}
                                disabled={submitted}
                            >
                                {s.optionA.label}
                            </button>

                            <button
                                type="button"
                                className={`${optionBtnCls} ${selections[s.id] === 'optionB' ? 'selected' : ''} ${submitted && s.optionB.isCorrect ? 'correct' : ''} ${submitted && selections[s.id] === 'optionB' && !s.optionB.isCorrect ? 'incorrect' : ''}`}
                                onClick={() => handleSelect(s.id, 'optionB')}
                                aria-pressed={selections[s.id] === 'optionB'}
                                disabled={submitted}
                            >
                                {s.optionB.label}
                            </button>
                        </div>

                        {submitted && selections[s.id] && (
                            <div className={`${feedbackCls} ${s[selections[s.id]].isCorrect ? 'correct' : 'incorrect'}`} role="status">
                                <strong>{s[selections[s.id]].isCorrect ? 'Correct!' : 'Incorrect.'}</strong> {s[selections[s.id]].feedback}
                            </div>
                        )}
                        {submitted && !selections[s.id] && (
                            <div className={`${feedbackCls} incorrect`} role="status">
                                <strong>Not answered.</strong> The correct choice was {s.optionA.isCorrect ? s.optionA.label : s.optionB.label}.
                            </div>
                        )}
                    </fieldset>
                ))}

                <div className={actionsCls}>
                    {!submitted ? (
                        <button 
                            type="submit" 
                            className="submit-btn" 
                            disabled={Object.keys(selections).length < scenarios.length}
                        >
                            Check Decisions
                        </button>
                    ) : (
                        <div className="results-container">
                            <p className={resultCls} role="status">
                                You made the right choice in {calculateScore()} out of {scenarios.length} scenarios!
                            </p>
                            <button type="button" className="reset-btn" onClick={handleReset}>
                                Try Again
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </section>
    );
}
