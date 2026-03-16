import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import FixingVsRedesignActivity from "../../../components/FixingVsRedesignActivity";
import RemediationStrategyPicker from "../../../components/RemediationStrategyPicker";
import DecisionFactorCard from "../../../components/DecisionFactorCard";
import ResourceLink from "../../../components/ResourceLink";

function FixingVsRedesign() {
    const flashcards = [
        {
            front: "Remediation",
            back: "The process of fixing individual accessibility defects within existing code or content."
        },
        {
            front: "Rewrite / Redesign",
            back: "The process of replacing existing code or components with new, accessible versions, often involving a change in framework or architecture."
        },
        {
            front: "Hybrid Approach",
            back: "A strategy that combines immediate remediation for critical issues with a long-term plan for a comprehensive rewrite."
        },
        {
            front: "Future-Proofing",
            back: "Designing and coding in a way that remains accessible and functional as technologies and standards evolve."
        }
    ];

    const decisionFactors = [
        {
            name: "1. Severity and Scope of Defects",
            description: "Assess how many issues exist and how deeply they are integrated into the system.",
            remediationTip: "Best for minor, localized issues that don't affect core templates.",
            rewriteTip: "Necessary if defects are widespread, affect core functionality, or are embedded in global templates/design systems."
        },
        {
            name: "2. Code Complexity and Maintainability",
            description: "Evaluate the age, structure, and documentation of the current codebase.",
            remediationTip: "Feasible for well-structured, modern code where issues are easy to isolate.",
            rewriteTip: "Better for older, 'spaghetti' code or legacy frameworks where remediation is costly and fragile."
        },
        {
            name: "3. User Impact",
            description: "Prioritize the experience of users with disabilities.",
            remediationTip: "Good for quick wins to remove immediate barriers.",
            rewriteTip: "Warranted when the current interface is fundamentally non-inclusive and needs a UX overhaul to be truly accessible."
        },
        {
            name: "4. Resource Availability",
            description: "Consider time, budget, and team expertise.",
            remediationTip: "Often quicker and less expensive in the short term.",
            rewriteTip: "Higher upfront cost but results in a more robust, lower-maintenance solution in the long run."
        },
        {
            name: "5. Future-Proofing",
            description: "Determine the long-term viability of the solution.",
            remediationTip: "May only provide a temporary fix if the underlying technology is nearing end-of-life.",
            rewriteTip: "Allows for the adoption of modern standards (like ARIA 1.2+) and better adaptation to future requirements."
        }
    ];

    const strategyScenarios = [
        {
            id: 's1',
            context: "A government portal has a critical accessibility failure in its primary navigation menu, which is used on every page. The menu is built with a custom, undocumented jQuery plugin from 2012.",
            options: [
                { 
                    label: "Patch jQuery", 
                    strategy: "Remediation", 
                    explanation: "While possible, patching old custom plugins is often fragile and may break other parts of the site.",
                    isCorrect: false 
                },
                { 
                    label: "Replace Menu Component", 
                    strategy: "Rewrite (Component-level)", 
                    explanation: "Correct. Replacing a single, high-impact component with a modern, accessible version is often the most effective hybrid approach.",
                    isCorrect: true 
                }
            ]
        },
        {
            id: 's2',
            context: "An internal HR tool has 500+ pages with minor color contrast issues on decorative elements and missing alt text on employee headshots. The application uses a modern React framework.",
            options: [
                { 
                    label: "Bulk Fix via CSS/CMS", 
                    strategy: "Remediation", 
                    explanation: "Correct. Since the issues are minor and the framework is modern, global CSS changes and a content audit are more efficient than a rewrite.",
                    isCorrect: true 
                },
                { 
                    label: "Rebuild Tool", 
                    strategy: "Redesign", 
                    explanation: "A full rebuild would be an unnecessary expenditure of resources for these specific issues.",
                    isCorrect: false 
                }
            ]
        }
    ];

    return (
        <div className="container">
            <PageHeader 
                title="2. Fixing vs. Redesign" 
                lede="Deciding whether to remediate or rewrite accessibility defects involves evaluating severity, complexity, budget, and user impact."
            />

            <section className="overview-section" aria-labelledby="deciding-title">
                <h2 id="deciding-title">Deciding the Best Approach</h2>
                <p>
                    Deciding whether to remediate or rewrite accessibility defects involves carefully evaluating multiple factors, 
                    including the severity and extent of the defects, code complexity, budget, and potential user impact.
                </p>
                
                <DecisionFactorCard factors={decisionFactors} />

                <Callout 
                    title="The Hybrid Approach" 
                    text="In practice, a hybrid approach is often used. Immediate remediation might address critical issues while a longer-term plan is developed for a comprehensive rewrite to ensure sustainable accessibility."
                />
            </section>

            <section className="learning-activities" aria-labelledby="activities-title">
                <h2 id="activities-title">Learning Activities</h2>
                
                <h3>Key Terms Flashcards</h3>
                <FlashcardSet cards={flashcards} />

                <FixingVsRedesignActivity />

                <RemediationStrategyPicker 
                    scenarios={strategyScenarios} 
                    title="Activity: Strategic Remediation Selection"
                />
            </section>

            <section className="resources-section" aria-labelledby="resources-title">
                <h2 id="resources-title">Resources</h2>
                <ul className="resource-list">
                    <li>
                        <ResourceLink 
                            title="Planning and Managing Accessibility" 
                            url="https://www.w3.org/WAI/planning/" 
                            description="WAI W3C guidance on accessibility management."
                        />
                    </li>
                    <li>
                        <ResourceLink 
                            title="What do you fix first?" 
                            url="https://medium.com/@optasy/accessibility-audit-what-do-you-fix-first-7f893f10129a" 
                            description="Article by OPTASY on prioritizing accessibility fixes (Medium, 2020)."
                        />
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default FixingVsRedesign;