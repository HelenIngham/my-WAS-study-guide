// components/Breadcrumbs.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

const LABELS = {
    "": "Home",
    resources: "Resources",
    "domain-one": "Domain One",
    "domain-two": "Domain Two",
    "domain-three": "Domain Three",

    // Common sub-sections (optional friendly names; fallback will prettify)
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    h: "H",

    "w3c-guidelines": "W3C Guidelines and Specifications",
    "en301-standard": "European Accessibility Standard (EN 301 549)",

    "javascript-support": "Support for JavaScript",
    "semantic-html": "Semantic HTML",
    "event-handlers": "Device-independent event handlers",
    "simplify-events": "Simplify events",
    "dynamic-content": "Dynamic content",
    "managing-focus": "Managing focus",
    "managing-state": "Managing state",

    "accessible-names": "Accessible names and descriptions",
    "authoring-practices": "ARIA Authoring Practices",
    "keyboard-interaction": "Keyboard interaction & focus",
    "accessibility-tree": "Accessibility tree",
    "aria-roles": "ARIA roles, states, and properties",

    "screen-readers": "Screen readers",

    "standard-controls": "Standard controls",
    "custom-controls": "Custom controls",

    "users-without-vision": "Users without vision",
    "users-low-vision": "Users with low vision",
    "users-limited-reading": "Users with limited reading",
    "users-cognitive-disabilities": "Users with cognitive disabilities",
    "users-motor-disabilities": "Users with motor disabilities",
    "users-auditory-disabilities": "Users with auditory disabilities",

    "accessibility-target-level": "Accessibility target level",
    "conformance-requirements": "Conformance requirements",
    "wcag-em": "WCAG-EM",
    "success-criteria-failures": "Assigning success criteria and failures",
    "guideline-limitations": "Accessibility guideline limitations",

    "screen-reader-issues": "Screen reader issues",
    "keyboard-issues": "Keyboard issues",
    "auditory-issues": "Auditory issues",
    "low-vision-issues": "Low vision issues",
    "cognitive-issues": "Cognitive issues",
    "touch-issues": "Touch issues",

    "act-rules": "ACT Rules",
    "automated-testing-tools": "Automated testing tools",

    "planning-managing": "Planning, managing, and implementing",

    "screen-reader-testing": "Screen reader testing",
    "keyboard-testing": "Keyboard testing",
    "content-testing": "Content testing",
    "usability-testing": "Usability testing",

    "prioritizing-issues": "Prioritizing accessibility issues",
    "recommend-strategies": "Recommend strategies/techniques",

    "failures-vs-practices": "Failures vs best practices",
    "fixing-vs-redesign": "Fixing vs redesign",

    "accessibility-experts": "Role of accessibility experts",
    "conformance-reports": "Accessibility conformance reports",
    "mitigating-defects": "Mitigating accessibility defects",
    "procurement-maturity-model": "Procurement maturity model",
};

function titleizeSegment(segment) {
    if (!segment) return "";
    return segment
        .split("-")
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
}

function getLabel(segment) {
    return LABELS[segment] || titleizeSegment(segment);
}

function Breadcrumbs() {
    const location = useLocation();
    const rawPath = location.pathname;

    const segments = rawPath
        .split("/")
        .filter(Boolean)
        .map((s) => decodeURIComponent(s));

    const crumbs = [{ to: "/", label: "Home" }];

    let currentPath = "";
    for (const seg of segments) {
        currentPath += `/${seg}`;
        crumbs.push({ to: currentPath, label: getLabel(seg) });
    }

    // If already on "/", keep it as a single crumb
    const displayCrumbs = rawPath === "/" ? crumbs.slice(0, 1) : crumbs;

    return (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol className="breadcrumbs-list">
                {displayCrumbs.map((c, idx) => {
                    const isLast = idx === displayCrumbs.length - 1;
                    return (
                        <li className="breadcrumbs-item" key={c.to}>
                            {isLast ? (
                                <span className="breadcrumbs-current" aria-current="page">
                                    {c.label}
                                </span>
                            ) : (
                                <Link className="breadcrumbs-link" to={c.to}>
                                    {c.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;