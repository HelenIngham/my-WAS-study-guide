// routesMeta.js
// Central ordered list of routes and human-friendly labels for bottom navigation.
// Order is global across the whole app, matching the logical study flow.

export const routes = [
  { path: '/', label: 'Home' },
  // Domain One overview
  { path: '/domain-one', label: 'Domain One — Creating Accessible Web Solutions' },

  // Domain One - A
  { path: '/domain-one/a', label: 'A — Guidelines, principles, and techniques' },
  { path: '/domain-one/a/w3c-guidelines', label: 'W3C Guidelines and Specifications' },
  { path: '/domain-one/a/en301-standard', label: 'European Accessibility Standard (EN 301 549)' },

  // Domain One - B
  { path: '/domain-one/b', label: 'B — Basic knowledge of programming' },
  { path: '/domain-one/b/javascript-support', label: 'Support for JavaScript in Accessibility APIs & AT' },
  { path: '/domain-one/b/semantic-html', label: 'Semantic HTML and Custom Controls' },
  { path: '/domain-one/b/event-handlers', label: 'Device-Independent Event Handlers' },
  { path: '/domain-one/b/simplify-events', label: 'Simplify Events' },
  { path: '/domain-one/b/dynamic-content', label: 'Dynamic Content' },
  { path: '/domain-one/b/managing-focus', label: 'Managing Focus' },
  { path: '/domain-one/b/managing-state', label: 'Managing State' },

  // Domain One - C
  { path: '/domain-one/c', label: 'C — Create Interactive Controls/Widgets' },

  // Domain One - D (Using ARIA)
  { path: '/domain-one/d', label: 'D — Using ARIA' },
  { path: '/domain-one/d/accessible-names', label: 'Accessible Names and Descriptions' },
  { path: '/domain-one/d/authoring-practices', label: 'ARIA Authoring Practice Guide' },
  { path: '/domain-one/d/keyboard-interaction', label: 'Keyboard Interaction and Focus Management' },
  { path: '/domain-one/d/accessibility-tree', label: 'The Accessibility Tree' },
  { path: '/domain-one/d/aria-roles', label: 'WAI-ARIA Roles, States, and Properties' },

  // Domain One - E
  { path: '/domain-one/e', label: 'E — Accessibility-supported technologies' },
  { path: '/domain-one/e/screen-readers', label: 'Screen Readers' },

  // Domain One - F
  { path: '/domain-one/f', label: 'F — Standard controls vs custom controls' },
  { path: '/domain-one/f/standard-controls', label: 'Standard Controls' },
  { path: '/domain-one/f/custom-controls', label: 'Custom Controls' },

  // Domain One - G
  { path: '/domain-one/g', label: 'G — Single-page applications' },

  // Domain One - H
  { path: '/domain-one/h', label: 'H — Strategies of persons with disabilities' },
  { path: '/domain-one/h/users-without-vision', label: 'Users Without Vision' },
  { path: '/domain-one/h/users-low-vision', label: 'Users With Low Vision' },
  { path: '/domain-one/h/users-limited-reading', label: 'Users With Limited Reading Capacities' },
  { path: '/domain-one/h/users-cognitive-disabilities', label: 'Users With Cognitive Disabilities' },
  { path: '/domain-one/h/users-motor-disabilities', label: 'Users With Motor Disabilities' },
  { path: '/domain-one/h/users-auditory-disabilities', label: 'Users With Auditory Disabilities' },

  // Domain Two overview
  { path: '/domain-two', label: 'Domain Two — Testing and Validation' },

  // Domain Two - A
  { path: '/domain-two/a', label: 'A — Interoperability and compatibility issues' },

  // Domain Two - B
  { path: '/domain-two/b', label: 'B — Identifying guidelines and principles regarding issues' },
  { path: '/domain-two/b/accessibility-target-level', label: 'Accessibility Target Level' },
  { path: '/domain-two/b/conformance-requirements', label: 'Conformance Requirements' },
  { path: '/domain-two/b/wcag-em', label: 'WCAG-EM' },
  { path: '/domain-two/b/success-criteria-failures', label: 'Assigning Success Criteria and Failures' },
  { path: '/domain-two/b/guideline-limitations', label: 'Accessibility Guideline Limitations' },

  // Domain Two - C
  { path: '/domain-two/c', label: 'C — Testing with assistive technologies' },
  { path: '/domain-two/c/screen-reader-issues', label: 'Identify Issues for Screen Reader Users' },
  { path: '/domain-two/c/keyboard-issues', label: 'Identify Issues for Keyboard or Alternative Input Users' },
  { path: '/domain-two/c/auditory-issues', label: 'Identify Issues for Users with Auditory Disabilities' },
  { path: '/domain-two/c/low-vision-issues', label: 'Identify Issues for Users with Low Vision' },
  { path: '/domain-two/c/cognitive-issues', label: 'Identify Issues for Users with Cognitive/Learning Disabilities' },
  { path: '/domain-two/c/touch-issues', label: 'Identify Issues for Touch Users' },

  // Domain Two - D
  { path: '/domain-two/d', label: 'D — Testing tools for the web' },
  { path: '/domain-two/d/act-rules', label: 'ACT Rules' },
  { path: '/domain-two/d/automated-testing-tools', label: 'Automated Testing Tools' },

  // Domain Two - E
  { path: '/domain-two/e', label: 'E — Accessibility quality assurance' },
  { path: '/domain-two/e/planning-managing', label: 'Planning, Managing and Implementing Accessibility' },

  // Domain Two - F
  { path: '/domain-two/f', label: 'F — Testing with assistive technologies (Practical)' },
  { path: '/domain-two/f/screen-reader-testing', label: 'Screen Reader Testing' },
  { path: '/domain-two/f/keyboard-testing', label: 'Keyboard Testing' },
  { path: '/domain-two/f/content-testing', label: 'Content Testing' },
  { path: '/domain-two/f/usability-testing', label: 'Usability Testing' },

  // Domain Two - G
  { path: '/domain-two/g', label: 'G — Testing for end-user impact' },

  // Domain Two - H
  { path: '/domain-two/h', label: 'H — Testing tools for the web (Alt set)' },

  // Domain Three overview
  { path: '/domain-three', label: 'Domain Three — Recommendations and Procurement' },

  // Domain Three - A
  { path: '/domain-three/a', label: 'A — Level of severity and prioritization of issues' },
  { path: '/domain-three/a/prioritizing-issues', label: 'Prioritizing Accessibility Issues' },
  { path: '/domain-three/a/recommend-strategies', label: 'Recommend Strategies/Techniques for Fixing Issues' },

  // Domain Three - B
  { path: '/domain-three/b', label: 'B — Recommending strategies and/or techniques for fixing issues' },
  { path: '/domain-three/b/failures-vs-practices', label: 'Distinguishing Between Failures and Optional Best Practices' },
  { path: '/domain-three/b/fixing-vs-redesign', label: 'Fixing vs Redesign' },

  // Domain Three - C
  { path: '/domain-three/c', label: 'C — Integrate Accessibility into the Procurement Process' },
  { path: '/domain-three/c/accessibility-experts', label: 'Role of Accessibility Experts' },
  { path: '/domain-three/c/conformance-reports', label: 'Accessibility Conformance Reports' },
  { path: '/domain-three/c/mitigating-defects', label: 'Mitigating Accessibility Defects' },
  { path: '/domain-three/c/procurement-maturity-model', label: 'Using an Accessible Procurement Maturity Model' },
  { path: '/resources', label: 'Resources' },
];

export function getPrevNext(pathname) {
  const index = routes.findIndex((r) => r.path === pathname);
  if (index === -1) {
    return { prev: null, next: null };
  }
  const prev = index > 0 ? routes[index - 1] : null;
  const next = index < routes.length - 1 ? routes[index + 1] : null;
  return { prev, next };
}
