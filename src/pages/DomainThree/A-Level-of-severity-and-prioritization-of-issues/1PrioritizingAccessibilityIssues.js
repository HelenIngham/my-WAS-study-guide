import React from "react";
import Callout from "../../../components/Callout";
import Card from "../../../components/Card";
import CardList from "../../../components/CardList";
import FlashcardSet from "../../../components/FlashcardSet";
import SeverityPrioritizationMatrix from "../../../components/SeverityPrioritizationMatrix";
import PrioritizationChallenge from "../../../components/PrioritizationChallenge";

function PrioritizingAccessibilityIssues() {
    const prioritizationCards = [
        {
            front: "What constitutes a High-Impact accessibility issue?",
            back: "Issues that prevent users with disabilities from completing an essential task or process (e.g., CAPTCHA without alternative, keyboard-inaccessible controls)."
        },
        {
            front: "How do repeated issues affect remediation effort?",
            back: "If problems are in templates or component libraries, fixing them once addresses multiple occurrences, making them a high priority for remediation efficiency."
        },
        {
            front: "Why should pages with the highest traffic be prioritized?",
            back: "Often 20% of pages account for 90% of traffic. Fixing these first brings benefits to the largest number of users quickly."
        },
        {
            front: "What is the benefit of 'Low effort repairs'?",
            back: "They can be addressed quickly and bring immediate improvements, helping to build momentum in the remediation process."
        }
    ];

    const sampleIssues = [
        {
            id: 1,
            title: "Keyboard Trap in Main Menu",
            impact: "High",
            effort: "Medium",
            description: "Users cannot exit the main menu using a keyboard, blocking navigation to all other pages."
        },
        {
            id: 2,
            title: "Missing Alt Text on Decorative Icons",
            impact: "Low",
            effort: "Low",
            description: "Screen readers announce 'unlabeled image' for decorative icons, which is slightly annoying but doesn't block tasks."
        },
        {
            id: 3,
            title: "Low Contrast on 'Search' Button",
            impact: "Medium",
            effort: "Low",
            description: "The search button text is hard to read for users with low vision, but the button is still identifiable by its position and icon."
        },
        {
            id: 4,
            title: "Inaccessible Form Label in Checkout",
            impact: "High",
            effort: "Low",
            description: "The 'Credit Card Number' field lacks a programmatic label, making it impossible for screen reader users to know what to enter."
        }
    ];

    const challengeIssues = [
        { id: 'c1', title: 'Checkout: Keyboard Inaccessible Submit Button', correctRank: 1 },
        { id: 'c2', title: 'Homepage: Logo Missing Alt Text', correctRank: 2 },
        { id: 'c3', title: 'Search: Results Page Contrast Issue', correctRank: 3 },
        { id: 'c4', title: 'Blog: Typo in Footer Link', correctRank: 4 }
    ];

    return (
        <div className="container">
            <h1>1 Prioritizing Accessibility Issues</h1>
            
            <p>
                Accessibility audits often result in a list of problems that need to be fixed. Even if the goal is to fix everything, 
                you probably cannot fix every issue in a single update. Prioritizing the more critical issues may be necessary, 
                especially when the website or app has already been released.
            </p>

            <Callout 
                title="The Goal of Prioritization" 
                text="Determine which issues have the most significant impact on users and address them first to maximize the benefit of remediation efforts."
            />

            <div className="grid-container">
                <Card title="Impact Assessment">
                    <p>Determine if issues have a high, medium, or low impact on whether people with disabilities can use the website.</p>
                    <CardList>
                        <li><strong>High Impact:</strong> May prevent users from completing an essential task (e.g., CAPTCHA without alternative).</li>
                        <li><strong>Medium Impact:</strong> Makes use more difficult but does not entirely prevent use.</li>
                        <li><strong>Low Impact:</strong> Minor annoyances or style-only issues.</li>
                    </CardList>
                </Card>

                <Card title="Efficiency Strategies">
                    <CardList>
                        <li><strong>Low effort repairs:</strong> Prioritize issues that are easy to repair for immediate benefits.</li>
                        <li><strong>Repeated issues:</strong> Fix template-level or component library issues to address many occurrences at once.</li>
                        <li><strong>Key content and tasks:</strong> Focus on high-traffic pages (the 20/90 rule) and essential processes like registration or checkout.</li>
                    </CardList>
                </Card>
            </div>

            <h2>Key Factors for Prioritization</h2>
            <p>Beyond impact and effort, consider these strategic factors:</p>
            <ul>
                <li><strong>Cost-benefit:</strong> Assess the value provided by remediation vs. the cost of implementation.</li>
                <li><strong>Impact on interface:</strong> Balance extensive redesigns against smaller changes that have little impact on the current interface.</li>
                <li><strong>Legal risk:</strong> Determine if the identified issue presents a significant legal risk to the organization.</li>
            </ul>

            <section className="demo-section">
                <h2>Demon: Priority Analysis</h2>
                <p>Use this interactive tool to explore how different combinations of Impact and Effort lead to recommended priority levels.</p>
                <SeverityPrioritizationMatrix issues={sampleIssues} />
            </section>

            <section className="activity-section">
                <h2>Learning Activities</h2>
                
                <h3>Flashcards: Prioritization Concepts</h3>
                <FlashcardSet cards={prioritizationCards} />

                <PrioritizationChallenge 
                    scenario="You are managing the remediation for an E-commerce site. Your team has limited time before a major holiday sale. Rank the following issues from highest to lowest priority."
                    issues={challengeIssues}
                />
            </section>

            <Callout classNamePrefix="legal-risk" title="Pro Tip: Legal Risk">
                <p>Annex B of the EN 301 549 is a great tool to determine the impact on different user groups and can help justify prioritization decisions during legal reviews.</p>
            </Callout>
        </div>
    );
}

export default PrioritizingAccessibilityIssues;