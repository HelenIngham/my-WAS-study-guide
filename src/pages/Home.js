// pages/Home.js
import React from "react";
import '../index.css';
import Grid from "../components/Grid";
import Card from "../components/Card";
import Callout from "../components/Callout";
import TrueFalseQuiz from "../components/TrueFalseQuiz";

function Home() {
    const questions = [
        {
            id: 'q1',
            text: 'The IAAP WAS credential is intended for accessibility professionals with 3-5 years of experience.',
            correct: true,
            explanation: 'Correct. The WAS credential is aimed at those with an intermediate level of experience (3-5 years) in designing, developing, and evaluating accessible web content.'
        },
        {
            id: 'q2',
            text: 'Domain One (Creating Accessible Web Content) and Domain Two (Identify Accessibility Issues) each account for 40% of the exam.',
            correct: true,
            explanation: 'Correct. Both Domain One and Domain Two are weighted at 40%, while Domain Three is weighted at 20%.'
        },
        {
            id: 'q3',
            text: 'Passing only the WAS exam makes an individual eligible for the CPWA credential.',
            correct: false,
            explanation: 'Individuals must pass both the CPACC and WAS exams to be eligible for the Certified Professional in Web Accessibility (CPWA) credential.'
        },
        {
            id: 'q4',
            text: 'Domain Three covers the product life cycle integration and interactive widgets.',
            correct: false,
            explanation: 'Domain Three focuses on Remediating Accessibility Issues. Product life cycle and interactive widgets are part of Domain One.'
        },
        {
            id: 'q5',
            text: 'Identifying user-specific issues and testing with assistive technologies are part of Domain Two.',
            correct: true,
            explanation: 'Correct. These are key components of Domain Two: Identify Accessibility Issues.'
        }
    ];

    return (
        <div className="container">
            <h1>Welcome to WAS Exam Study Guide</h1>
            <p>This interactive site distills key concepts from the WAS BoK, reworded for better understanding.</p>
            <p>Explore the key topics using the menu above and check out diagrams, interactive examples, and explanations.</p>

            <section aria-labelledby="about-was">
                <h2 id="about-was">About the WAS Designation</h2>
                <Callout 
                    title="Professional Credential" 
                    text="The IAAP Web Accessibility Specialist (WAS) credential is intended for accessibility professionals who evaluate the accessibility of existing content and provide detailed remediation recommendations."
                >
                    <p>It represents an ability to express technical proficiency for those with at least an intermediate level of experience (3-5 years) in designing, developing, and evaluating accessible web content.</p>
                    <p>Individuals who pass both the <strong>CPACC</strong> and <strong>WAS</strong> exams are eligible for the <strong>Certified Professional in Web Accessibility (CPWA)</strong> credential.</p>
                </Callout>

                <h3>Key Focus Areas</h3>
                <Grid columns={3}>
                    <Card title="Creating">
                        <p>Creating accessible web content and interfaces.</p>
                    </Card>
                    <Card title="Identifying">
                        <p>Identifying accessibility issues and problems in existing solutions.</p>
                    </Card>
                    <Card title="Remediating">
                        <p>Remediating (fixing) accessibility issues in code.</p>
                    </Card>
                </Grid>
            </section>

            <section aria-labelledby="exam-glance" style={{ marginTop: '2rem' }}>
                <h2 id="exam-glance">The WAS Exam Content at a Glance</h2>
                <Grid columns={3}>
                    <Card title="Domain One (40%)">
                        <p><strong>Creating Accessible Web Content</strong></p>
                        <ul className="sub-list">
                            <li>Standards and specifications</li>
                            <li>Interfaces with JavaScript</li>
                            <li>Interactive controls/widgets</li>
                            <li>Product life cycle integration</li>
                            <li>User strategy compatibility</li>
                        </ul>
                    </Card>
                    <Card title="Domain Two (40%)">
                        <p><strong>Identify Accessibility Issues</strong></p>
                        <ul className="sub-list">
                            <li>Identify user-specific issues</li>
                            <li>Determine conformance</li>
                            <li>Use testing tools effectively</li>
                            <li>Test with assistive technologies</li>
                            <li>Test for end-user impact</li>
                        </ul>
                    </Card>
                    <Card title="Domain Three (20%)">
                        <p><strong>Remediate Accessibility Issues</strong></p>
                        <ul className="sub-list">
                            <li>Communicate and prioritize issues</li>
                            <li>Fix identified accessibility problems</li>
                        </ul>
                    </Card>
                </Grid>
            </section>
            
            <TrueFalseQuiz 
                questions={questions} 
                title="WAS Designation & Exam Quiz"
                intro="Test your knowledge about the WAS credential and exam structure."
            />
        </div>
    );
}

export default Home;