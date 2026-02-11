// 1W3CGuidelinesandSpecifications.js
import React from "react";
import "./1W3CGuidelinesandSpecifications.css";
import ".././index.css"
function W3CGuidelinesandSpecifications() {
    return (
        <div className="container">
            <h1>W3C Guidelines and Specifications</h1>
            <p>
                The World Wide Web Consortium (W3C) has established several key
                guidelines to ensure web accessibility. These guidelines are designed
                to provide equal access to information and services for all users,
                regardless of their abilities or disabilities.
            </p>
            <h2>Key Guidelines</h2>
            <ul>
                <li><strong>Web Content Accessibility Guidelines (WCAG):</strong> The WCAG is a set of internationally recognized guidelines that aim to make web content more accessible. It focuses on four principles (POUR):</li>
                <ul className="sub-list">
                    <li><strong>Perceivable:</strong> Information and UI components must be presented to users in ways they can perceive (e.g., text alternatives for images).</li>
                    <li><strong>Operable:</strong> User interface components and navigation must be operable by all users, including those using keyboards.</li>
                    <li><strong>Understandable:</strong> Content must be easy to understand and predictable in behavior.</li>
                    <li><strong>Robust:</strong> Content should be interpreted reliably across many devices and assistive technologies.</li>
                </ul>
                <li><strong>Authoring Tool Accessibility Guidelines (ATAG):</strong> Guidance for developers of web authoring tools to enhance content accessibility and assist authors in producing accessible content.</li>
                <li><strong>User Agent Accessibility Guidelines (UAAG):</strong> Guidelines aimed at ensuring that user agents (e.g., web browsers, screen readers) are accessible to people with disabilities.</li>
            </ul>
            <h2>WCAG Versions</h2>
            <p>
                WCAG has been updated over time to expand its scope and improve its
                accessibility recommendations:
            </p>
            <ul>
                <li><strong>WCAG 2.0:</strong> Published in 2008, this version introduced the POUR principles.</li>
                <li><strong>WCAG 2.1:</strong> Introduced in 2018, focusing on mobile accessibility, low vision, and cognitive impairments.</li>
                <li><strong>WCAG 2.2 (Pending Approval):</strong> An update that includes new success criteria for improved accessibility.</li>
            </ul>
            <h2>Compliance Levels</h2>
            <p>
                WCAG defines three levels of compliance to provide flexibility and
                promote adoption by different organizations:
            </p>
            <ul>
                <li><strong>A (Minimum):</strong> Basic web accessibility features.</li>
                <li><strong>AA (Recommended):</strong> Addressing the most common barriers for users with disabilities.</li>
                <li><strong>AAA (Optimal):</strong> The highest and most comprehensive level but difficult to achieve for all content.</li>
            </ul>
            <h2>Importance of W3C Guidelines</h2>
            <p>
                By following W3C guidelines, organizations and developers can create
                websites that are:</p>
            <ul>
                <li>Inclusive and accessible to a wider range of users.</li>
                <li>Better optimized for search engines and mobile devices.</li>
                <li>Compliant with legal requirements for accessibility.</li>
            </ul>
        </div>
    );
}

export default W3CGuidelinesandSpecifications;