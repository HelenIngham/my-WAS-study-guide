import React from "react";
import "../../index.css";
import PageHeader from "../../components/PageHeader";
import Callout from "../../components/Callout";
import Card from "../../components/Card";
import CardList from "../../components/CardList";
import Grid from "../../components/Grid";
import ResourceLink from "../../components/ResourceLink";
import ExamTakeaway from "../../components/ExamTakeaway";
import TrueFalseQuiz from "../../components/TrueFalseQuiz";

function DomainOne() {
    const studyTasks = [
        {
            title: "WCAG 2.2",
            tasks: [
                "Understand and interpret WCAG 2.2 Success Criteria",
                "Understand the relationship between principles, guidelines, and success criteria",
                "Understand the intent, requirements, and impact of each principle, guideline, and success criterion",
                "Be familiar with Sufficient Techniques, Failure, and Advisory Techniques",
                "Understand the conformance level designations (A, AA, AAA)",
                "Identify the conformance level of each WCAG 2.2 success criterion",
                "Understand the three types of techniques and the W3C vetting process",
                "Understand the difference between normative and non-normative information"
            ]
        },
        {
            title: "WAI-ARIA 1.2",
            tasks: [
                "Understand the purpose and impact of WAI-ARIA 1.2",
                "Understand the WAI-ARIA 1.2 model of roles and properties",
                "Know when and why to use WAI-ARIA 1.2, and when to use standard HTML instead"
            ]
        },
        {
            title: "ATAG 2.0",
            tasks: [
                "Understand how ATAG 2.0 applies to web content authoring tools",
                "Understand the meaning and intent of the two main sections of ATAG 2.0",
                "Understand the intent, requirements, and impact of each principle, guideline, and success criterion",
                "Distinguish between automated practices and those requiring author/user input",
                "Understand the power and limitations of automated accessibility features",
                "Understand the difference between normative and non-normative information"
            ]
        },
        {
            title: "EN 301 549",
            tasks: [
                "Know what kind of technologies are addressed by EN 301 549",
                "Identify the similarities and differences between WCAG and EN 301 549",
                "Describe how WCAG is represented in EN 301 549",
                "Identify requirements beyond WCAG relevant for the Web Accessibility Directive 2016/2102",
                "Understand the intent and scope of requirements in Annex A Table A1"
            ]
        }
    ];

    const resources = [
        { group: "W3C WAI", links: [
            { text: "W3C Web Accessibility Initiative (WAI)", href: "https://www.w3.org/WAI/" },
            { text: "Essential Components of Web accessibility", href: "https://www.w3.org/WAI/fundamentals/components/" },
            { text: "WCAG 2 Overview", href: "https://www.w3.org/WAI/standards-guidelines/wcag/" },
            { text: "The WCAG 2 Documents", href: "https://www.w3.org/WAI/standards-guidelines/wcag/docs/" },
            { text: "W3C Process for Developing Standards", href: "https://www.w3.org/WAI/about/groups/w3c-process/" },
            { text: "What’s New in WCAG 2.2", href: "https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/" },
            { text: "ATAG at a Glance", href: "https://www.w3.org/WAI/standards-guidelines/atag/glance/" },
            { text: "WAI-ARIA Overview", href: "https://www.w3.org/WAI/standards-guidelines/aria/" }
        ]},
        { group: "WCAG 2.2", links: [
            { text: "Web Content Accessibility Guidelines (WCAG) 2.2", href: "https://www.w3.org/TR/WCAG22/" },
            { text: "WCAG 2.2 (normative)", href: "https://www.w3.org/TR/WCAG22/" },
            { text: "How to Meet WCAG 2.2 (non-normative)", href: "https://www.w3.org/WAI/WCAG22/quickref/" },
            { text: "Techniques for WCAG 2.2 (non-normative)", href: "https://www.w3.org/WAI/WCAG22/Techniques/" }
        ]},
        { group: "ATAG & ARIA", links: [
            { text: "Authoring Tool Accessibility Guidelines (ATAG) 2.0", href: "https://www.w3.org/TR/ATAG20/" },
            { text: "Implementing ATAG 2.0 (non-normative)", href: "https://www.w3.org/TR/IMPLEMENTING-ATAG20/" },
            { text: "Accessible Rich Internet Applications (WAI-ARIA) 1.2", href: "https://www.w3.org/TR/wai-aria-1.2/" },
            { text: "ARIA Authoring Practices Guide (non-normative)", href: "https://www.w3.org/WAI/ARIA/apg/" }
        ]},
        { group: "European Norm 301 549", links: [
            { text: "EN 301 549 V3.2.1 (2021-03) (PDF)", href: "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf" },
            { text: "Introduction to the EN 301 549 V.1.1.2 (YouTube)", href: "https://www.youtube.com/watch?v=R9o6vS_0h70" },
            { text: "Latest changes to accessibility standard, EU Commission, 2022", href: "https://digital-strategy.ec.europa.eu/en/news/latest-changes-accessibility-standard-en-301-549" }
        ]}
    ];

    const quizQuestions = [
        {
            id: "q1",
            text: "WCAG 2.2 Success Criteria are considered normative information.",
            correct: true,
            explanation: "Success criteria in WCAG are normative, meaning they are the required standards for conformance."
        },
        {
            id: "q2",
            text: "ATAG 2.0 only applies to the accessibility of the final web content produced, not the authoring tool's interface.",
            correct: false,
            explanation: "ATAG 2.0 has two parts: Part A focuses on making the authoring tool interface accessible, and Part B focuses on supporting the production of accessible content."
        },
        {
            id: "q3",
            text: "EN 301 549 is a European standard that includes requirements beyond WCAG for digital accessibility.",
            correct: true,
            explanation: "While it incorporates WCAG, EN 301 549 also includes additional requirements relevant to the European Web Accessibility Directive."
        },
        {
            id: "q4",
            text: "WAI-ARIA should be used instead of standard HTML whenever possible to ensure better accessibility.",
            correct: false,
            explanation: "The first rule of ARIA is: If you can use a native HTML element or attribute with the semantics and behavior you require already built in, then do so."
        }
    ];

    return (
        <div className="container">
            <PageHeader title="Domain One: Creating Accessible Web Solutions" />
            
            <section className="section">
                <p className="intro-text">
                    This domain accounts for <strong>40%</strong> of the WAS examination. It focuses on designing and creating web content in accordance with W3C accessibility guidelines and specifications, as well as European standards.
                </p>
            </section>

            <Callout 
                title="Overview" 
                text="This competency focuses on designing and creating web content in accordance with the W3C accessibility guidelines and specifications as well as Annex A of the EN 301 549."
            />

            <section className="section">
                <h2>Study Tasks</h2>
                <Grid>
                    {studyTasks.map((section, idx) => (
                        <Card key={idx} title={section.title}>
                            <CardList>
                                {section.tasks.map((task, taskIdx) => (
                                    <li key={taskIdx}>{task}</li>
                                ))}
                            </CardList>
                        </Card>
                    ))}
                </Grid>
            </section>

            <section className="section">
                <h2>Resources</h2>
                <Grid>
                    {resources.map((group, idx) => (
                        <Card key={idx} title={group.group}>
                            {group.links.map((link, linkIdx) => (
                                <ResourceLink key={linkIdx} href={link.href} text={link.text} />
                            ))}
                        </Card>
                    ))}
                </Grid>
            </section>

            <ExamTakeaway title="Domain One Core Competencies">
                <CardList>
                    <li>Mastering WCAG 2.2 principles, guidelines, and success criteria levels (A, AA, AAA).</li>
                    <li>Understanding the distinction between normative (required) and non-normative (supportive) content.</li>
                    <li>Knowing when to apply ARIA vs. native HTML.</li>
                    <li>Familiarity with ATAG for authoring tools and EN 301 549 for European compliance.</li>
                </CardList>
            </ExamTakeaway>

            <section className="section">
                <TrueFalseQuiz 
                    title="Domain One Quick Check"
                    questions={quizQuestions}
                />
            </section>
        </div>
    );
}

export default DomainOne;