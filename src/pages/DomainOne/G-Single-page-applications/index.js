import React from "react";
import PageHeader from "../../../components/PageHeader";
import Callout from "../../../components/Callout";
import FlashcardSet from "../../../components/FlashcardSet";
import LiveRegionDemo from "../../../components/LiveRegionDemo";
import ResourceLink from "../../../components/ResourceLink";

function SinglePageApplications() {
    const flashcards = [
        {
            front: "How do screen readers typically react to a normal page load?",
            back: "They read the page title and often a summary of semantic elements (headings, landmarks, links)."
        },
        {
            front: "Why do SPAs present a challenge for screen readers?",
            back: "SPAs use AJAX to pull in content without a full page reload, so the 'page load' event doesn't fire and screen readers may not announce anything."
        },
        {
            front: "What are two main methods to notify screen reader users of new AJAX content?",
            back: "1. Sending focus to the new content. 2. Using aria-live to announce content without moving focus."
        },
        {
            front: "When is it acceptable NOT to notify users of passive content updates?",
            back: "When the content is low priority/urgency and hasn't been inserted above the user's current position."
        }
    ];

    return (
        <div className="container">
            <PageHeader title="G Single Page Applications" />
            
            <section className="section">
                <p>
                    Single-page applications (SPAs) that present new content – often through asynchronous JavaScript-based processes, 
                    without reloading the page – present a unique set of accessibility challenges.
                </p>
                
                <Callout 
                    title="Study Tasks" 
                    text="If AJAX content is loaded as the direct result of a user action (e.g., activating a button), the screen reader user should be notified that new content has loaded."
                >
                    <ul>
                        <li><strong>Focus Control:</strong> Sending the focus to the new content.</li>
                        <li><strong>Aria-Live:</strong> Using <code>aria-live</code> to announce content without moving the focus.</li>
                        <li><strong>Passive Loading:</strong> If content loads passively, notification may not be needed depending on importance and position.</li>
                    </ul>
                </Callout>
            </section>

            <section className="section">
                <h2>Overview</h2>
                <p>
                    Single-page applications use AJAX to pull in content to the current page/URL, rather than load a new page/URL, 
                    usually to improve performance and streamline the web application's user experience. Screen readers typically 
                    do not announce anything when content is loaded via AJAX, so users may be unaware that new content has been loaded.
                </p>
                
                <h3>Recommendations for SPAs</h3>
                <ul>
                    <li>Update the page title via JavaScript (<code>document.title</code>).</li>
                    <li>Send the focus to the new content.</li>
                    <li>Use <code>aria-live</code> to announce content without moving the focus (e.g., “New Page: [Name of new page]”).</li>
                </ul>
            </section>

            <section className="section">
                <h2>Interactive Demo</h2>
                <LiveRegionDemo />
            </section>

            <section className="section">
                <h2>Learning Activities</h2>
                <FlashcardSet cards={flashcards} />
            </section>

            <section className="section">
                <h2>Resources</h2>
                <ResourceLink 
                    href="https://www.deque.com/blog/dynamic-updates-ajax-single-page-apps/" 
                    text="Deque’s Dynamic Updates, AJAX, and Single-Page Apps" 
                />
            </section>
        </div>
    );
}

export default SinglePageApplications;