// components/Menu.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
    const [openMenu, setOpenMenu] = React.useState(null);
    const navRef = React.useRef(null);

    React.useEffect(() => {
        function handlePointerDown(event) {
            if (!navRef.current) return;
            if (!navRef.current.contains(event.target)) {
                setOpenMenu(null);
            }
        }

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setOpenMenu(null);
            }
        }

        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    function getTopLinkClass({ isActive }) {
        return `menu-link${isActive ? " active" : ""}`;
    }

    function getSubLinkClass({ isActive }) {
        return `submenu-link${isActive ? " active" : ""}`;
    }

    const toggleMenu = (key) => {
        setOpenMenu((prev) => (prev === key ? null : key));
    };

    const makeSubmenuHandlers = (key) => ({
        // Use pointer events so this works consistently across mouse + trackpad, etc.
        onPointerEnter: () => setOpenMenu(key), // open on hover
        onPointerLeave: () => setOpenMenu(null), // close when hover leaves (including submenu area)

        // Keyboard support: open on focus anywhere inside, close when focus leaves the <li>
        onFocusCapture: () => setOpenMenu(key),
        onBlurCapture: (event) => {
            const nextFocused = event.relatedTarget;
            if (!event.currentTarget.contains(nextFocused)) {
                setOpenMenu(null);
            }
        },
    });

    return (
        <nav className="menu" aria-label="Primary" ref={navRef}>
            <ul className="menu-list">
                <li className="menu-item">
                    <NavLink to="/" className={getTopLinkClass}>
                        Home
                    </NavLink>
                </li>

                <li
                    className={`menu-item has-submenu${openMenu === "domain-one" ? " is-open" : ""}`}
                    {...makeSubmenuHandlers("domain-one")}
                >
                    <button
                        type="button"
                        className="menu-trigger"
                        aria-haspopup="true"
                        aria-expanded={openMenu === "domain-one"}
                        onClick={() => toggleMenu("domain-one")} // click ALSO works (in addition to hover/focus)
                    >
                        Domain One: Creating Accessible Web Solutions
                    </button>

                    <div className="submenu" role="group" aria-label="Domain One sections">
                        <NavLink to="/domain-one" className={getSubLinkClass}>
                            Domain One (Creating Accessible Web Solutions)
                        </NavLink>

                        <div className="submenu-group" aria-label="Domain One - A">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-one/a" className={getSubLinkClass}>
                                        A — Guidelines, principles, and techniques
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/a/w3c-guidelines" className={getSubLinkClass}>
                                        A1 — W3C Guidelines and Specifications
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/a/en301-standard" className={getSubLinkClass}>
                                        A2 — European Accessibility Standard (EN 301 549)
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain One - B">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-one/b" className={getSubLinkClass}>
                                        B — Basic knowledge of programming
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/b/javascript-support" className={getSubLinkClass}>
                                        B1 — Support for JavaScript
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/b/semantic-html" className={getSubLinkClass}>
                                        B2 — Semantic HTML
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/b/event-handlers" className={getSubLinkClass}>
                                        B3 — Device-independent event handlers
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/b/simplify-events" className={getSubLinkClass}>
                                        B4 — Simplify events
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/b/dynamic-content" className={getSubLinkClass}>
                                        B5 — Dynamic content
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/b/managing-focus" className={getSubLinkClass}>
                                        B6 — Managing focus
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/b/managing-state" className={getSubLinkClass}>
                                        B7 — Managing state
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain One - C">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-one/c" className={getSubLinkClass}>
                                        C — Create interactive controls/widgets
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain One - D">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-one/d" className={getSubLinkClass}>
                                        D — Using ARIA
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/d/accessible-names" className={getSubLinkClass}>
                                        D1 — Accessible names and descriptions
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/d/authoring-practices" className={getSubLinkClass}>
                                        D2 — ARIA Authoring Practices
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/d/keyboard-interaction" className={getSubLinkClass}>
                                        D3 — Keyboard interaction & focus
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/d/accessibility-tree" className={getSubLinkClass}>
                                        D4 — Accessibility tree
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/d/aria-roles" className={getSubLinkClass}>
                                        D5 — ARIA roles, states, and properties
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain One - E">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-one/e" className={getSubLinkClass}>
                                        E — Accessibility-supported technologies
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/e/screen-readers" className={getSubLinkClass}>
                                        E1 — Screen readers
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain One - F">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-one/f" className={getSubLinkClass}>
                                        F — Standard controls vs custom controls
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/f/standard-controls" className={getSubLinkClass}>
                                        F1 — Standard controls
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/f/custom-controls" className={getSubLinkClass}>
                                        F2 — Custom controls
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain One - G">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-one/g" className={getSubLinkClass}>
                                        G — Single-page applications
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain One - H">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-one/h" className={getSubLinkClass}>
                                        H — Strategies of persons with disabilities
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/h/users-without-vision" className={getSubLinkClass}>
                                        H1 — Users without vision
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/h/users-low-vision" className={getSubLinkClass}>
                                        H2 — Users with low vision
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/h/users-limited-reading" className={getSubLinkClass}>
                                        H3 — Users with limited reading
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/h/users-cognitive-disabilities" className={getSubLinkClass}>
                                        H4 — Users with cognitive disabilities
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/h/users-motor-disabilities" className={getSubLinkClass}>
                                        H5 — Users with motor disabilities
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-one/h/users-auditory-disabilities" className={getSubLinkClass}>
                                        H6 — Users with auditory disabilities
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li
                    className={`menu-item has-submenu${openMenu === "domain-two" ? " is-open" : ""}`}
                    {...makeSubmenuHandlers("domain-two")}
                >
                    <button
                        type="button"
                        className="menu-trigger"
                        aria-haspopup="true"
                        aria-expanded={openMenu === "domain-two"}
                        onClick={() => toggleMenu("domain-two")}
                    >
                        Domain Two: Identify Accessibility Issues
                    </button>

                    <div className="submenu" role="group" aria-label="Domain Two sections">
                    <NavLink to="/domain-two" className={getSubLinkClass}>
                            Domain Two (Identify Accessibility Issues)
                        </NavLink>

                        <div className="submenu-group" aria-label="Domain Two - A">
                            <div className="submenu-heading">A — Interoperability and compatibility issues</div>
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-two/a" className={getSubLinkClass}>
                                        A (Overview)
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain Two - B">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-two/b" className={getSubLinkClass}>
                                        B — Identifying guidelines and principles
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/b/accessibility-target-level" className={getSubLinkClass}>
                                        B1 — Accessibility target level
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/b/conformance-requirements" className={getSubLinkClass}>
                                        B2 — Conformance requirements
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/b/wcag-em" className={getSubLinkClass}>
                                        B3 — WCAG-EM
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/b/success-criteria-failures" className={getSubLinkClass}>
                                        B4 — Assigning success criteria and failures
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/b/guideline-limitations" className={getSubLinkClass}>
                                        B5 — Accessibility guideline limitations
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain Two - C">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-two/c" className={getSubLinkClass}>
                                        C — Testing with assistive technologies
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/c/screen-reader-issues" className={getSubLinkClass}>
                                        C1 — Screen reader issues
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/c/keyboard-issues" className={getSubLinkClass}>
                                        C2 — Keyboard issues
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/c/auditory-issues" className={getSubLinkClass}>
                                        C3 — Auditory issues
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/c/low-vision-issues" className={getSubLinkClass}>
                                        C4 — Low vision issues
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/c/cognitive-issues" className={getSubLinkClass}>
                                        C5 — Cognitive issues
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/c/touch-issues" className={getSubLinkClass}>
                                        C6 — Touch issues
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain Two - D">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-two/d" className={getSubLinkClass}>
                                        D — Testing tools for the web
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/d/act-rules" className={getSubLinkClass}>
                                        D1 — ACT Rules
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/d/automated-testing-tools" className={getSubLinkClass}>
                                        D2 — Automated testing tools
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain Two - E">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-two/e" className={getSubLinkClass}>
                                        E — Accessibility quality assurance
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/e/planning-managing" className={getSubLinkClass}>
                                        E1 — Planning, managing, and implementing
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain Two - F">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-two/f" className={getSubLinkClass}>
                                        F — Testing with assistive technologies (continued)
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/f/screen-reader-testing" className={getSubLinkClass}>
                                        F1 — Screen reader testing
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/f/keyboard-testing" className={getSubLinkClass}>
                                        F2 — Keyboard testing
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/f/content-testing" className={getSubLinkClass}>
                                        F3 — Content testing
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-two/f/usability-testing" className={getSubLinkClass}>
                                        F4 — Usability testing
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain Two - G">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-two/g" className={getSubLinkClass}>
                                        G — Testing for end-user impact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain Two - H">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-two/h" className={getSubLinkClass}>
                                        H — Testing tools for the web (continued)
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li
                    className={`menu-item has-submenu${openMenu === "domain-three" ? " is-open" : ""}`}
                    {...makeSubmenuHandlers("domain-three")}
                >
                    <button
                        type="button"
                        className="menu-trigger"
                        aria-haspopup="true"
                        aria-expanded={openMenu === "domain-three"}
                        onClick={() => toggleMenu("domain-three")}
                    >
                        Domain Three: Remediating Issues
                    </button>

                    <div className="submenu" role="group" aria-label="Domain Three sections">

                    <NavLink to="/domain-three" className={getSubLinkClass}>
                            Domain Three (Remediating Issues)
                        </NavLink>

                        <div className="submenu-group" aria-label="Domain Three - A">
                            <div className="submenu-heading">A — Level of severity and prioritization of issues</div>
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-three/a" className={getSubLinkClass}>
                                        A (Overview)
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-three/a/prioritizing-issues" className={getSubLinkClass}>
                                        A1 — Prioritizing accessibility issues
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-three/a/recommend-strategies" className={getSubLinkClass}>
                                        A2 — Recommend strategies/techniques
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain Three - B">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-three/b" className={getSubLinkClass}>
                                        B — Recommending strategies/techniques for fixing issues
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-three/b/failures-vs-practices" className={getSubLinkClass}>
                                        B1 — Failures vs best practices
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-three/b/fixing-vs-redesign" className={getSubLinkClass}>
                                        B2 — Fixing vs redesign
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="submenu-group" aria-label="Domain Three - C">
                            <ul className="submenu-list">
                                <li>
                                    <NavLink to="/domain-three/c" className={getSubLinkClass}>
                                        C — Integrate accessibility into the procurement process
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-three/c/accessibility-experts" className={getSubLinkClass}>
                                        C1 — Role of accessibility experts
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-three/c/conformance-reports" className={getSubLinkClass}>
                                        C2 — Accessibility conformance reports
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-three/c/mitigating-defects" className={getSubLinkClass}>
                                        C3 — Mitigating accessibility defects
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/domain-three/c/procurement-maturity-model" className={getSubLinkClass}>
                                        C4 — Procurement maturity model
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li className="menu-item">
                    <NavLink to="/resources" className={getTopLinkClass}>
                        Resources
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;