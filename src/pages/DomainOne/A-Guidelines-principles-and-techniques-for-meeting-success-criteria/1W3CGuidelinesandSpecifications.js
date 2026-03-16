// 1W3CGuidelinesandSpecifications.js
import React from "react";
import PageHeader from "../../../components/PageHeader";
import Grid from "../../../components/Grid";
import Card from "../../../components/Card";
import CardList from "../../../components/CardList";

function W3CGuidelinesandSpecifications() {
    return (
        <div className="container">
            <PageHeader 
                title="W3C Guidelines and Specifications"
                lede="The World Wide Web Consortium (W3C) has established several key guidelines to ensure web accessibility. These guidelines are designed to provide equal access to information and services for all users, regardless of their abilities or disabilities."
            />

            <section aria-labelledby="key-guidelines">
                <h2 id="key-guidelines">Key Guidelines</h2>
                <Grid classNamePrefix="guidelines" role="list">
                    <Card classNamePrefix="guideline" title="Web Content Accessibility Guidelines (WCAG)" role="listitem">
                        <p>The WCAG is a set of internationally recognized guidelines that aim to make web content more accessible. It focuses on four principles (POUR):</p>
                        <CardList>
                            <li><strong>Perceivable:</strong> Information and UI components must be presented to users in ways they can perceive (e.g., text alternatives for images).</li>
                            <li><strong>Operable:</strong> User interface components and navigation must be operable by all users, including those using keyboards.</li>
                            <li><strong>Understandable:</strong> Content must be easy to understand and predictable in behavior.</li>
                            <li><strong>Robust:</strong> Content should be interpreted reliably across many devices and assistive technologies.</li>
                        </CardList>
                    </Card>

                    <Card classNamePrefix="guideline" title="Authoring Tool Accessibility Guidelines (ATAG)" role="listitem">
                        <p>Guidance for developers of web authoring tools to enhance content accessibility and assist authors in producing accessible content.</p>
                    </Card>

                    <Card classNamePrefix="guideline" title="User Agent Accessibility Guidelines (UAAG)" role="listitem">
                        <p>Guidelines aimed at ensuring that user agents (e.g., web browsers, screen readers) are accessible to people with disabilities.</p>
                    </Card>
                </Grid>
            </section>

            <section aria-labelledby="wcag-versions">
                <h2 id="wcag-versions">WCAG Versions</h2>
                <p>
                    WCAG has been updated over time to expand its scope and improve its
                    accessibility recommendations:
                </p>
                <Grid classNamePrefix="versions" role="list">
                    <Card classNamePrefix="version" title="WCAG 2.0" role="listitem">
                        <p>Published in 2008, this version introduced the POUR principles.</p>
                    </Card>
                    <Card classNamePrefix="version" title="WCAG 2.1" role="listitem">
                        <p>Introduced in 2018, focusing on mobile accessibility, low vision, and cognitive impairments.</p>
                    </Card>
                    <Card classNamePrefix="version" title="WCAG 2.2" role="listitem">
                        <p>Latest version that includes new success criteria for improved accessibility on touch devices and for cognitive disabilities.</p>
                    </Card>
                </Grid>
            </section>

            <section aria-labelledby="compliance-levels">
                <h2 id="compliance-levels">Compliance Levels</h2>
                <p>
                    WCAG defines three levels of compliance to provide flexibility and
                    promote adoption by different organizations:
                </p>
                <Grid classNamePrefix="levels" role="list">
                    <Card classNamePrefix="level" title="Level A (Minimum)" role="listitem">
                        <p>Basic web accessibility features that are critical for users with certain disabilities.</p>
                    </Card>
                    <Card classNamePrefix="level" title="Level AA (Recommended)" role="listitem">
                        <p>Addressing the most common and significant barriers for users with disabilities. This is the standard legal target for most organizations.</p>
                    </Card>
                    <Card classNamePrefix="level" title="Level AAA (Optimal)" role="listitem">
                        <p>The highest level of accessibility. While ideal, it is not always possible to achieve for all types of content.</p>
                    </Card>
                </Grid>
            </section>

            <section aria-labelledby="importance">
                <h2 id="importance">Importance of W3C Guidelines</h2>
                <Grid classNamePrefix="importance" role="list">
                    <Card role="listitem">
                        <p>Inclusive and accessible to a wider range of users.</p>
                    </Card>
                    <Card role="listitem">
                        <p>Better optimized for search engines and mobile devices.</p>
                    </Card>
                    <Card role="listitem">
                        <p>Compliant with legal requirements for accessibility.</p>
                    </Card>
                </Grid>
            </section>
        </div>
    );
}

export default W3CGuidelinesandSpecifications;