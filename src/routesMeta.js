// routesMeta.js
// Central ordered list of routes and human-friendly labels for bottom navigation.
// Order is global across the whole app, matching the logical study flow.

export const routes = [
  { path: '/', label: 'Home' },
    { path: '/site-map', label: 'Site Map' },
  // Domain One overview
  { path: '/domain-one', label: 'Domain One — Creating Accessible Web Solutions' },

  // Domain One - A
  { path: '/domain-one/a', label: 'D1: A — Guidelines, principles, and techniques' },
  { path: '/domain-one/a/w3c-guidelines', label: 'D1:A: 1. W3C Guidelines and Specifications' },
  { path: '/domain-one/a/en301-standard', label: 'D1:A: 2. European Accessibility Standard (EN 301 549)' },

  // Domain One - B
  { path: '/domain-one/b', label: 'D1: B — Basic knowledge of programming' },
  { path: '/domain-one/b/javascript-support', label: 'D1:B: 1. Support for JavaScript in Accessibility APIs & AT' },
  { path: '/domain-one/b/semantic-html', label: 'D1:B: 2. Semantic HTML and Custom Controls' },
  { path: '/domain-one/b/event-handlers', label: 'D1:B: 3. Device-Independent Event Handlers' },
  { path: '/domain-one/b/simplify-events', label: 'D1:B: 4. Simplify Events' },
  { path: '/domain-one/b/dynamic-content', label: 'D1:B: 5. Dynamic Content' },
  { path: '/domain-one/b/managing-focus', label: 'D1:B: 6. Managing Focus' },
  { path: '/domain-one/b/managing-state', label: 'D1:B: 7. Managing State' },

  // Domain One - C
  { path: '/domain-one/c', label: 'D1:C — Create Interactive Controls/Widgets' },

  // Domain One - D (Using ARIA)
  { path: '/domain-one/d', label: 'D1: D — Using ARIA' },
  { path: '/domain-one/d/accessible-names', label: 'D1:D: 1. Accessible Names and Descriptions' },
  { path: '/domain-one/d/authoring-practices', label: 'D1:D: 2. ARIA Authoring Practice Guide' },
  { path: '/domain-one/d/keyboard-interaction', label: 'D1:D: 3. Keyboard Interaction and Focus Management' },
  { path: '/domain-one/d/accessibility-tree', label: 'D1:D: 4. The Accessibility Tree' },
  { path: '/domain-one/d/aria-roles', label: 'D1:D: 5. WAI-ARIA Roles, States, and Properties' },

  // Domain One - E
  { path: '/domain-one/e', label: 'D1: E — Accessibility-supported technologies' },
  { path: '/domain-one/e/screen-readers', label: 'D1:E: 1. Screen Readers' },

  // Domain One - F
  { path: '/domain-one/f', label: 'D1: F — Standard controls vs custom controls' },
  { path: '/domain-one/f/standard-controls', label: 'D1:F: 1. Standard Controls' },
  { path: '/domain-one/f/custom-controls', label: 'D1:F: 2. Custom Controls' },

  // Domain One - G
  { path: '/domain-one/g', label: 'D1: G — Single-page applications' },

  // Domain One - H
  { path: '/domain-one/h', label: 'D1: H — Strategies of persons with disabilities' },
  { path: '/domain-one/h/users-without-vision', label: 'D1:H: 1. Users Without Vision' },
  { path: '/domain-one/h/users-low-vision', label: 'D1:H: 2. Users With Low Vision' },
  { path: '/domain-one/h/users-limited-reading', label: 'D1:H: 3. Users With Limited Reading Capacities' },
  { path: '/domain-one/h/users-cognitive-disabilities', label: 'D1:H: 4. Users With Cognitive Disabilities' },
  { path: '/domain-one/h/users-motor-disabilities', label: 'D1:H: 5. Users With Motor Disabilities' },
  { path: '/domain-one/h/users-auditory-disabilities', label: 'D1:H: 6. Users With Auditory Disabilities' },

  // Domain Two overview
  { path: '/domain-two', label: 'Domain Two — Testing and Validation' },

  // Domain Two - A
  { path: '/domain-two/a', label: 'D2: A — Interoperability and compatibility issues' },

  // Domain Two - B
  { path: '/domain-two/b', label: 'D2: B — Identifying guidelines and principles regarding issues' },
  { path: '/domain-two/b/accessibility-target-level', label: 'D2:B: 1. Accessibility Target Level' },
  { path: '/domain-two/b/conformance-requirements', label: 'D2:B: 2. Conformance Requirements' },
  { path: '/domain-two/b/wcag-em', label: 'D2:B: 3. WCAG-EM' },
  { path: '/domain-two/b/success-criteria-failures', label: 'D2:B: 4. Assigning Success Criteria and Failures' },
  { path: '/domain-two/b/guideline-limitations', label: 'D2:B: 5. Accessibility Guideline Limitations' },

  // Domain Two - C
  { path: '/domain-two/c', label: 'D2: C — Testing with assistive technologies' },
  { path: '/domain-two/c/screen-reader-issues', label: 'D2:C: 1. Identify Issues for Screen Reader Users' },
  { path: '/domain-two/c/keyboard-issues', label: 'D2:C: 2. Identify Issues for Keyboard or Alternative Input Users' },
  { path: '/domain-two/c/auditory-issues', label: 'D2:C: 3. Identify Issues for Users with Auditory Disabilities' },
  { path: '/domain-two/c/low-vision-issues', label: 'D2:C: 4. Identify Issues for Users with Low Vision' },
  { path: '/domain-two/c/cognitive-issues', label: 'D2:C: 5. Identify Issues for Users with Cognitive/Learning Disabilities' },
  { path: '/domain-two/c/touch-issues', label: 'D2:C: 6. Identify Issues for Touch Users' },

  // Domain Two - D
  { path: '/domain-two/d', label: 'D2: D — Testing tools for the web' },
  { path: '/domain-two/d/act-rules', label: 'D2:D: 1. ACT Rules' },
  { path: '/domain-two/d/automated-testing-tools', label: 'D2:D: 2. Automated Testing Tools' },

  // Domain Two - E
  { path: '/domain-two/e', label: 'D2: E — Accessibility quality assurance' },
  { path: '/domain-two/e/planning-managing', label: 'D2:E: 1. Planning, Managing and Implementing Accessibility' },

  // Domain Two - F
  { path: '/domain-two/f', label: 'D2: F — Testing with assistive technologies (Practical)' },
  { path: '/domain-two/f/screen-reader-testing', label: 'D2:F: 1. Screen Reader Testing' },
  { path: '/domain-two/f/keyboard-testing', label: 'D2:F: 2. Keyboard Testing' },
  { path: '/domain-two/f/content-testing', label: 'D2:F: 3. Content Testing' },
  { path: '/domain-two/f/usability-testing', label: 'D2:F: 4. Usability Testing' },

  // Domain Two - G
  { path: '/domain-two/g', label: 'D2: G — Testing for end-user impact' },

  // Domain Two - H
  { path: '/domain-two/h', label: 'D2: H — Testing tools for the web (Alt set)' },

  // Domain Three overview
  { path: '/domain-three', label: 'Domain Three — Recommendations and Procurement' },

  // Domain Three - A
  { path: '/domain-three/a', label: 'D3: A — Level of severity and prioritization of issues' },
  { path: '/domain-three/a/prioritizing-issues', label: 'D3:A: 1. Prioritizing Accessibility Issues' },
  { path: '/domain-three/a/recommend-strategies', label: 'D3:A: 2. Recommend Strategies/Techniques for Fixing Issues' },

  // Domain Three - B
  { path: '/domain-three/b', label: 'D3: B — Recommending strategies and/or techniques for fixing issues' },
  { path: '/domain-three/b/failures-vs-practices', label: 'D3:B: 1. Distinguishing Between Failures and Optional Best Practices' },
  { path: '/domain-three/b/fixing-vs-redesign', label: 'D3:B: 2. Fixing vs Redesign' },

  // Domain Three - C
  { path: '/domain-three/c', label: 'D3: C — Integrate Accessibility into the Procurement Process' },
  { path: '/domain-three/c/accessibility-experts', label: 'D3:C: 1. Role of Accessibility Experts' },
  { path: '/domain-three/c/conformance-reports', label: 'D3:C: 2. Accessibility Conformance Reports' },
  { path: '/domain-three/c/mitigating-defects', label: 'D3:C: 3. Mitigating Accessibility Defects' },
  { path: '/domain-three/c/procurement-maturity-model', label: 'D3:C: 4.Using an Accessible Procurement Maturity Model' },

    { path: '/resources', label: 'Resources' },
    { path: '/test-questions', label: 'Test Questions' },
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
