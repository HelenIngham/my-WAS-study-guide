export const questions = [
  {
    set: 1,
    domain: "Domain I: Creating Accessible Web Solutions (40%)",
    questions: [
      {
        id: 1,
        question: "Based on the Authoring Tool Accessibility Guidelines (ATAG), what must an authoring tool be?",
        options: ["Interoperable", "Keyboard accessible", "Java based", "Standalone"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Keyboard accessible"
      },
      {
        id: 2,
        question: "What is an example of an ARIA attribute that conveys a property?",
        options: ["Role-menuitem", "Aria-selected", "Aria-labelledby", "Aria-checked"],
        distractors: [1, 2, 4],
        answer: 3,
        answerText: "Aria-labelledby"
      },
      {
        id: 3,
        question: "Which of the following is one (1) of the three (3) areas of accessibility of the seventeen (17) new success criteria in WCAG 2.1 address?",
        options: ["Internet of things", "Windows desktop features", "Mobility disabilities", "Cognitive and learning disabilities"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "Cognitive and learning disabilities. The new success criteria also address low-vision and mobile technology accessibility"
      },
      {
        id: 4,
        question: "Which WCAG 2.2 principle focuses on making content and controls understandable?",
        options: ["Perceivable", "Operable", "Understandable", "Robust"],
        distractors: [1, 2, 4],
        answer: 3,
        answerText: "Understandable"
      },
      {
        id: 5,
        question: "What does ATAG Part B primarily focus on?",
        options: ["Making the authoring tool user interface accessible", "Supporting the production of accessible content", "Ensuring interoperability with assistive technologies", "Providing accessible documentation"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Supporting the production of accessible content"
      },
      {
        id: 6,
        question: "According to WCAG 2.2, what is the minimum contrast ratio required for large text at Level AA?",
        options: ["3:1", "4.5:1", "7:1", "2:1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3:1"
      },
      {
        id: 7,
        question: "Which ARIA role should be used for a navigation region?",
        options: ["region", "main", "navigation", "banner"],
        distractors: [1, 2, 4],
        answer: 3,
        answerText: "navigation"
      },
      {
        id: 8,
        question: "In the context of WCAG, what does 'Robust' mean?",
        options: ["Content can be interpreted reliably by a wide variety of user agents, including assistive technologies", "Content is easy to navigate", "Content is available in multiple languages", "Content is visually appealing"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Content can be interpreted reliably by a wide variety of user agents, including assistive technologies"
      },
      {
        id: 9,
        question: "Which WCAG success criterion addresses 'bypass blocks'?",
        options: ["2.4.1", "2.1.1", "1.1.1", "4.1.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.1"
      },
      {
        id: 10,
        question: "What is the primary purpose of the 'aria-live' attribute?",
        options: ["To make an element focusable", "To indicate that an element's content will be updated dynamically", "To provide a label for an element", "To define the role of an element"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To indicate that an element's content will be updated dynamically"
      },
      {
        id: 11,
        question: "Which of the following is a Level A success criterion in WCAG 2.2?",
        options: ["1.4.3 Contrast (Minimum)", "2.4.7 Focus Visible", "1.1.1 Non-text Content", "1.4.4 Resize text"],
        distractors: [1, 2, 4],
        answer: 3,
        answerText: "1.1.1 Non-text Content"
      },
      {
        id: 12,
        question: "What is the recommended method for providing a text alternative for a complex image, like a chart?",
        options: ["Use a short alt text and provide a detailed description elsewhere", "Use only the 'title' attribute", "Leave the alt attribute empty", "Use 'aria-hidden=\"true\"'"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Use a short alt text and provide a detailed description elsewhere"
      },
      {
        id: 13,
        question: "Which WCAG principle ensures that users can interact with the interface?",
        options: ["Perceivable", "Operable", "Understandable", "Robust"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Operable"
      },
      {
        id: 14,
        question: "What is the main goal of EN 301 549?",
        options: ["To define accessibility requirements for public procurement of ICT products and services in Europe", "To replace WCAG worldwide", "To focus solely on web content", "To regulate the use of ARIA"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To define accessibility requirements for public procurement of ICT products and services in Europe"
      },
      {
        id: 15,
        question: "Which ARIA attribute is used to indicate that a form field is required?",
        options: ["aria-mandatory", "aria-required", "aria-important", "aria-hidden"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "aria-required"
      },
      {
        id: 16,
        question: "What does the 'aria-expanded' attribute communicate?",
        options: ["The size of the element", "Whether a collapsible element is currently open or closed", "The priority of the element", "Whether the element is visible on the screen"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Whether a collapsible element is currently open or closed"
      },
      {
        id: 17,
        question: "Which success criterion in WCAG 2.1 added requirements for 'Orientation'?",
        options: ["1.3.4", "1.4.10", "2.1.4", "2.5.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.4"
      },
      {
        id: 18,
        question: "What is the purpose of 'aria-describedby'?",
        options: ["To provide a primary label for an element", "To provide additional descriptive text for an element", "To hide an element from screen readers", "To change the role of an element"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To provide additional descriptive text for an element"
      },
      {
        id: 19,
        question: "Which of these is a requirement for 'Keyboard' (2.1.1) success criterion?",
        options: ["All functionality must be operable through a keyboard interface", "Only navigation must be keyboard accessible", "Only links must be keyboard accessible", "Keyboard shortcuts must be provided for all actions"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "All functionality must be operable through a keyboard interface"
      },
      {
        id: 20,
        question: "What is the primary focus of UAAG?",
        options: ["Accessibility of web content", "Accessibility of user agents (like browsers)", "Accessibility of authoring tools", "Accessibility of mobile devices"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Accessibility of user agents (like browsers)"
      },
      {
        id: 21,
        question: "Which WCAG success criterion requires that page titles are descriptive?",
        options: ["2.4.2", "2.4.1", "2.4.3", "2.4.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.2"
      },
      {
        id: 22,
        question: "What is the purpose of the 'main' ARIA role?",
        options: ["To identify the primary content of the document", "To identify the navigation section", "To identify the header section", "To identify the footer section"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To identify the primary content of the document"
      },
      {
        id: 23,
        question: "Which WCAG success criterion deals with 'Info and Relationships'?",
        options: ["1.3.1", "1.1.1", "4.1.1", "2.4.6"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.1"
      },
      {
        id: 24,
        question: "What does 'aria-haspopup' indicate?",
        options: ["That an element has a tooltip", "That an element can trigger a popup (like a menu or dialog)", "That an element is a link", "That an element is hidden"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "That an element can trigger a popup (like a menu or dialog)"
      },
      {
        id: 25,
        question: "Which success criterion was introduced in WCAG 2.1 to address 'Reflow'?",
        options: ["1.4.10", "1.4.4", "1.4.12", "1.3.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.4.10"
      },
      {
        id: 26,
        question: "What is the purpose of the 'banner' ARIA role?",
        options: ["To identify the navigation", "To identify the site-oriented content (header)", "To identify the main content", "To identify the footer"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To identify the site-oriented content (header)"
      },
      {
        id: 27,
        question: "Which WCAG principle ensures that information is presented in a way that users can sense?",
        options: ["Perceivable", "Operable", "Understandable", "Robust"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Perceivable"
      },
      {
        id: 28,
        question: "What is 'aria-atomic' used for in live regions?",
        options: ["To stop updates", "To indicate if the entire region should be read or only the changed part", "To set the priority of the update", "To label the region"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To indicate if the entire region should be read or only the changed part"
      },
      {
        id: 29,
        question: "Which WCAG success criterion requires that 'Link Purpose (In Context)' is clear?",
        options: ["2.4.4", "2.4.9", "2.4.1", "2.4.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.4"
      },
      {
        id: 30,
        question: "What does 'aria-modal=\"true\"' do when used on a dialog?",
        options: ["Makes the dialog transparent", "Tells assistive technology that the content outside the dialog is inert", "Adds a close button to the dialog", "Changes the background color"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Tells assistive technology that the content outside the dialog is inert"
      }
    ]
  },
  {
    set: 1,
    domain: "Domain II: Identify accessibility issues in web solutions (40%)",
    questions: [
      {
        id: 31,
        question: "Your webpage has a set of radiobuttons for preferences. If you select the last radiobutton \"other\" focus is automatically moved to a text input where you can provide more information. All individual radiobuttons are labeled and the group as a whole has an associated label. Which, if any, WCAG violation applies?",
        options: ["2.1.1 - Keyboard", "3.2.2 - Change on input", "2.4.3 - Focus order", "None - this pattern is fully WCAG 2.1 AA conforming"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "3.2.2 - Change on input"
      },
      {
        id: 32,
        question: "Which of the following statement is true for the intentions of SC 1.4.12 - Text Spacing?",
        options: ["Dictates that text and spacing must be set to one set of specified metrics.", "Prevents people from overriding author structure and formats.", "Allows user to increase spacing between lines and paragraphs.", "Displaying words and characters in overlapping patterns is required."],
        distractors: [1, 2, 4],
        answer: 3,
        answerText: "Allows user to increase spacing between lines and paragraphs."
      },
      {
        id: 33,
        question: "Of the browsers listed below, which one is the best choice for using NVDA for accessibility testing?",
        options: ["Safari", "Firefox", "IE 11", "Edge"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Firefox"
      },
      {
        id: 34,
        question: "When testing with a screen reader, you find that a decorative image is being announced. Which success criterion is violated?",
        options: ["1.1.1 Non-text Content", "1.3.1 Info and Relationships", "4.1.2 Name, Role, Value", "2.4.4 Link Purpose"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.1.1 Non-text Content"
      },
      {
        id: 35,
        question: "What is the primary purpose of WCAG-EM?",
        options: ["To provide a methodology for evaluating conformance to WCAG", "To provide a list of all WCAG success criteria", "To automate accessibility testing", "To fix accessibility issues"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To provide a methodology for evaluating conformance to WCAG"
      },
      {
        id: 36,
        question: "While testing a web form, you notice that error messages are only indicated by a red border around the invalid input. Which WCAG success criterion is violated?",
        options: ["1.4.1 Use of Color", "3.3.1 Error Identification", "1.3.1 Info and Relationships", "4.1.2 Name, Role, Value"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.4.1 Use of Color"
      },
      {
        id: 37,
        question: "During a keyboard test, you discover that you cannot reach a 'Submit' button using the Tab key. Which success criterion is violated?",
        options: ["2.1.1 Keyboard", "2.4.3 Focus Order", "2.4.7 Focus Visible", "3.2.1 On Focus"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.1.1 Keyboard"
      },
      {
        id: 38,
        question: "When using an automated testing tool, which of the following is it most likely to miss?",
        options: ["Missing alt text on an image", "The logical order of the content", "A low contrast ratio", "A missing form label"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "The logical order of the content"
      },
      {
        id: 39,
        question: "If a video on a webpage starts playing automatically and lasts for more than 3 seconds without a way to pause it, which success criterion is violated?",
        options: ["1.4.2 Audio Control", "2.2.2 Pause, Stop, Hide", "1.2.1 Audio-only and Video-only", "1.1.1 Non-text Content"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.4.2 Audio Control"
      },
      {
        id: 40,
        question: "While testing with a screen reader, you find a 'Close' button that is announced as 'button' without any text. Which success criterion is violated?",
        options: ["4.1.2 Name, Role, Value", "1.3.1 Info and Relationships", "2.4.6 Headings and Labels", "1.1.1 Non-text Content"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "4.1.2 Name, Role, Value"
      },
      {
        id: 41,
        question: "Which tool is best suited for checking the color contrast of text against its background?",
        options: ["Axe DevTools", "Color Contrast Analyzer", "NVDA", "VoiceOver"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Color Contrast Analyzer"
      },
      {
        id: 42,
        question: "During testing, you find that a page has multiple 'Click Here' links. Which success criterion is violated?",
        options: ["2.4.4 Link Purpose (In Context)", "2.4.9 Link Purpose (Link Only)", "2.4.6 Headings and Labels", "1.3.1 Info and Relationships"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.4 Link Purpose (In Context)"
      },
      {
        id: 43,
        question: "When testing a mobile site, you notice that a button is too small to tap easily. Which success criterion might this violate (introduced in WCAG 2.1)?",
        options: ["2.5.5 Target Size", "2.5.3 Label in Name", "1.3.4 Orientation", "2.5.1 Pointer Gestures"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.5.5 Target Size (introduced at AAA, but relevant for mobile usability)"
      },
      {
        id: 44,
        question: "If a webpage reloads automatically every 30 seconds without user warning, which success criterion is violated?",
        options: ["2.2.1 Timing Adjustable", "3.2.2 On Input", "3.2.5 Change on Request", "2.2.2 Pause, Stop, Hide"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.2.1 Timing Adjustable"
      },
      {
        id: 45,
        question: "Which of the following is a manual testing task?",
        options: ["Checking for missing alt attributes", "Evaluating whether alt text is meaningful in context", "Calculating contrast ratios", "Checking for unique element IDs"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Evaluating whether alt text is meaningful in context"
      },
      {
        id: 46,
        question: "When tabbing through a page, you lose track of where the focus is. Which success criterion is violated?",
        options: ["2.4.7 Focus Visible", "2.4.3 Focus Order", "2.1.1 Keyboard", "3.2.1 On Focus"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.7 Focus Visible"
      },
      {
        id: 47,
        question: "While testing, you find that a set of tabs cannot be operated using the arrow keys, which is the expected keyboard behavior for that widget. Which success criterion is primarily violated?",
        options: ["2.1.1 Keyboard", "2.4.3 Focus Order", "4.1.2 Name, Role, Value", "1.3.1 Info and Relationships"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.1.1 Keyboard"
      },
      {
        id: 48,
        question: "Which screen reader is built into macOS and iOS?",
        options: ["JAWS", "NVDA", "VoiceOver", "TalkBack"],
        distractors: [1, 2, 4],
        answer: 3,
        answerText: "VoiceOver"
      },
      {
        id: 49,
        question: "A form field has a placeholder but no label. A screen reader does not announce the purpose of the field. Which success criterion is violated?",
        options: ["3.3.2 Labels or Instructions", "1.1.1 Non-text Content", "4.1.2 Name, Role, Value", "1.3.1 Info and Relationships"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.3.2 Labels or Instructions (and often 4.1.2 and 1.3.1)"
      },
      {
        id: 50,
        question: "When testing for 'Robustness', what are you primarily checking?",
        options: ["The visual design", "Compatibility with different browsers and assistive technologies", "The speed of the website", "The accuracy of the content"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Compatibility with different browsers and assistive technologies"
      },
      {
        id: 51,
        question: "During an audit, you find that a complex data table lacks row and column headers. Which success criterion is violated?",
        options: ["1.3.1 Info and Relationships", "1.1.1 Non-text Content", "2.4.6 Headings and Labels", "4.1.2 Name, Role, Value"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.1 Info and Relationships"
      },
      {
        id: 52,
        question: "What is the role of 'ACT Rules' in accessibility testing?",
        options: ["To provide a standard way to write accessibility test rules", "To replace WCAG", "To provide a list of all screen readers", "To fix code automatically"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To provide a standard way to write accessibility test rules"
      },
      {
        id: 53,
        question: "While testing, you find a 'Search' field that triggers a search as soon as the user finishes typing, without pressing enter or a button. This is unexpected for the user. Which success criterion is violated?",
        options: ["3.2.2 On Input", "3.2.1 On Focus", "3.2.5 Change on Request", "2.2.1 Timing Adjustable"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.2.2 On Input"
      },
      {
        id: 54,
        question: "Which of the following would be considered an 'end-user impact' test?",
        options: ["Running a contrast checker", "Observing a user with a motor disability trying to complete a task", "Checking for valid HTML", "Using an automated scanner"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Observing a user with a motor disability trying to complete a task"
      },
      {
        id: 55,
        question: "When testing for 'Understandability', what are you checking in forms?",
        options: ["The color of the input fields", "Clear instructions and error messages", "The font size", "The background contrast"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Clear instructions and error messages"
      },
      {
        id: 56,
        question: "If a webpage has a flashing advertisement that flashes more than three times per second, which success criterion is violated?",
        options: ["2.3.1 Three Flashes or Below Threshold", "2.2.2 Pause, Stop, Hide", "1.4.2 Audio Control", "1.1.1 Non-text Content"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.3.1 Three Flashes or Below Threshold"
      },
      {
        id: 57,
        question: "What is the purpose of testing with 'high contrast mode' in Windows?",
        options: ["To check for low vision accessibility", "To test for screen reader compatibility", "To check for keyboard accessibility", "To test for mobile responsiveness"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To check for low vision accessibility"
      },
      {
        id: 58,
        question: "When testing a navigation menu, you find that sub-menus only appear on mouse hover. Which success criterion is primarily violated?",
        options: ["2.1.1 Keyboard", "2.4.3 Focus Order", "2.4.7 Focus Visible", "1.4.13 Content on Hover or Focus"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.1.1 Keyboard (and 1.4.13 in WCAG 2.1)"
      },
      {
        id: 59,
        question: "While auditing a site, you find that the heading levels (h1, h2, etc.) are skipped (e.g., going from h1 to h3). Which success criterion is this a failure of?",
        options: ["1.3.1 Info and Relationships", "2.4.6 Headings and Labels", "2.4.1 Bypass Blocks", "None, it is a best practice but not a direct failure"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "None, it is a best practice but not a direct failure (though often flagged as an issue for 1.3.1)"
      },
      {
        id: 60,
        question: "Which tool would you use to verify that a page is structured correctly using landmarks?",
        options: ["A screen reader (e.g., NVDA, JAWS)", "A contrast checker", "An HTML validator", "A CSS validator"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "A screen reader (e.g., NVDA, JAWS)"
      }
    ]
  },
  {
    set: 1,
    domain: "Domain III: Remediating issues in web solutions (20%)",
    questions: [
      {
        id: 61,
        question: "Which option can a non-technical site owner implement to remove barriers for people using screen readers?",
        options: ["Change outlines to zero", "Turn off auto-play on video players", "Apply a pointer gesture plug-in", "Display open captions"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Turn off auto-play on video players"
      },
      {
        id: 62,
        question: "Which accessibility testing methodology addresses how to approach a large enterprise audit?",
        options: ["WCAG-UX", "ATAG", "WAI-ARIA", "WCAG-EM"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "WCAG-EM"
      },
      {
        id: 63,
        question: "When prioritizing accessibility fixes, which type of issue should generally be addressed first?",
        options: ["Minor cosmetic issues", "Issues that block users from completing critical tasks", "Level AAA success criteria", "Best practice recommendations"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Issues that block users from completing critical tasks"
      },
      {
        id: 64,
        question: "How should a developer fix an image that is missing an 'alt' attribute but is purely decorative?",
        options: ["Add alt=\"\"", "Add alt=\"decorative\"", "Remove the image tag", "Add a title attribute instead"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Add alt=\"\""
      },
      {
        id: 65,
        question: "To remediate a low contrast issue for text on an image, what is the best approach?",
        options: ["Change the font style to bold", "Add a solid background color or a text shadow to the text", "Increase the font size only", "Use a different image"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Add a solid background color or a text shadow to the text"
      },
      {
        id: 66,
        question: "A form is missing labels for several input fields. What is the most robust way to fix this?",
        options: ["Use the 'placeholder' attribute", "Use the <label> element with the 'for' attribute", "Use the 'title' attribute", "Use 'aria-label' only"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Use the <label> element with the 'for' attribute"
      },
      {
        id: 67,
        question: "When remediating a keyboard trap, what is the first step?",
        options: ["Remove the element causing the trap", "Ensure that focus can be moved away from the element using standard keyboard navigation", "Change the tab order of the entire page", "Add more keyboard shortcuts"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Ensure that focus can be moved away from the element using standard keyboard navigation"
      },
      {
        id: 68,
        question: "What is a common remediation for a page that lacks a 'skip to main content' link?",
        options: ["Add a link at the very top of the page that anchors to the <main> element", "Tell users to use headings for navigation", "Add more landmarks", "Remove the navigation menu"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Add a link at the very top of the page that anchors to the <main> element"
      },
      {
        id: 69,
        question: "How can a developer remediate a custom button built with a <div> that is not keyboard accessible?",
        options: ["Add onclick to the div", "Change the div to a <button> element", "Add tabindex=\"0\" only", "Add role=\"button\" only"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Change the div to a <button> element (best approach)"
      },
      {
        id: 70,
        question: "To remediate a lack of captions for a pre-recorded video, what must be provided?",
        options: ["A text transcript", "Synchronized captions", "A sign language interpretation", "Audio description"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Synchronized captions"
      },
      {
        id: 71,
        question: "When a form has an error, what is the best way to remediate it for screen reader users?",
        options: ["Highlight the field in red", "Provide a text description of the error and associate it with the field using aria-describedby", "Show an alert box", "Clear the entire form"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Provide a text description of the error and associate it with the field using aria-describedby"
      },
      {
        id: 72,
        question: "What is the purpose of an Accessibility Conformance Report (ACR), often based on a VPAT?",
        options: ["To fix accessibility bugs", "To document the accessibility conformance of a product", "To replace WCAG testing", "To train developers"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To document the accessibility conformance of a product"
      },
      {
        id: 73,
        question: "If a webpage has a complex layout that breaks when zoomed to 400%, how should it be remediated?",
        options: ["Disable zooming", "Use a responsive design (CSS media queries) to reflow the content", "Tell users to use a larger monitor", "Reduce the amount of content on the page"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Use a responsive design (CSS media queries) to reflow the content"
      },
      {
        id: 74,
        question: "How should a developer fix a custom checkbox that doesn't announce its state (checked/unchecked)?",
        options: ["Add aria-checked=\"true\" or \"false\" and update it with JavaScript", "Add a label with the word 'checked'", "Use a different color", "Add aria-label=\"checked\""],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Add aria-checked=\"true\" or \"false\" and update it with JavaScript"
      },
      {
        id: 75,
        question: "When integrating accessibility into the procurement process, what is a key step?",
        options: ["Only buy products from large companies", "Require vendors to provide an ACR (Accessibility Conformance Report)", "Ask for a discount", "Ignore accessibility if the price is low"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Require vendors to provide an ACR (Accessibility Conformance Report)"
      }
    ]
  },
  {
    set: 2,
    domain: "Domain I: Creating Accessible Web Solutions (40%)",
    questions: [
      {
        id: 1,
        question: "Which WCAG 2.2 success criterion requires that 'Focus Appearance' meets specific contrast and size requirements?",
        options: ["2.4.7 Focus Visible", "2.4.11 Focus Appearance", "2.4.13 Focus Obscured", "2.5.8 Target Size (Minimum)"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "2.4.11 Focus Appearance (Level AAA)"
      },
      {
        id: 2,
        question: "What is the purpose of the 'aria-modal' attribute?",
        options: ["To create a pop-up window", "To indicate that the element is a modal dialog", "To make an element focusable", "To change the background color"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To indicate that the element is a modal dialog"
      },
      {
        id: 3,
        question: "Which WCAG principle ensures that users can understand the information and the operation of the user interface?",
        options: ["Perceivable", "Operable", "Understandable", "Robust"],
        distractors: [1, 2, 4],
        answer: 3,
        answerText: "Understandable"
      },
      {
        id: 4,
        question: "In ARIA, what is the difference between a role and a property?",
        options: ["A role defines what an element is; a property expresses a state or characteristic", "A role is for CSS; a property is for JavaScript", "A role is mandatory; a property is optional", "There is no difference"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "A role defines what an element is; a property expresses a state or characteristic"
      },
      {
        id: 5,
        question: "Which success criterion addresses the need for 'Sensory Characteristics' not to be the sole means of conveying information?",
        options: ["1.1.1", "1.3.1", "1.3.3", "1.4.1"],
        distractors: [1, 2, 4],
        answer: 3,
        answerText: "1.3.3"
      },
      {
        id: 6,
        question: "What is the primary goal of ATAG Part A?",
        options: ["Ensuring the authoring tool's UI is accessible", "Helping authors create accessible content", "Providing accessible documentation", "Defining accessibility standards for web content"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Ensuring the authoring tool's UI is accessible"
      },
      {
        id: 7,
        question: "Which WCAG Level AA success criterion requires a contrast ratio of at least 4.5:1 for normal text?",
        options: ["1.4.1", "1.4.3", "1.4.6", "1.4.11"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "1.4.3 Contrast (Minimum)"
      },
      {
        id: 8,
        question: "What does the 'aria-live' value 'assertive' do?",
        options: ["Interrupts the screen reader to announce the update immediately", "Wait until the screen reader is idle before announcing", "Disables announcements", "Only announces if the user focuses on the element"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Interrupts the screen reader to announce the update immediately"
      },
      {
        id: 9,
        question: "Which WCAG success criterion requires that 'Multiple Ways' are provided to find a webpage within a set of webpages?",
        options: ["2.4.1", "2.4.5", "2.4.4", "2.4.2"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "2.4.5 Multiple Ways"
      },
      {
        id: 10,
        question: "What is the purpose of 'aria-hidden=\"true\"'?",
        options: ["To hide an element visually", "To hide an element from the accessibility tree (and screen readers)", "To make an element focusable", "To change the element's role"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To hide an element from the accessibility tree (and screen readers)"
      },
      {
        id: 11,
        question: "Which success criterion was introduced in WCAG 2.1 to address 'Pointer Gestures'?",
        options: ["2.5.1", "2.1.1", "2.1.2", "2.4.3"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.5.1"
      },
      {
        id: 12,
        question: "What does 'aria-label' do?",
        options: ["Provides a visible label on the screen", "Provides a string that labels the current element for assistive technology", "Defines the role of the element", "Sets the focus to the element"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Provides a string that labels the current element for assistive technology"
      },
      {
        id: 13,
        question: "Which WCAG success criterion addresses 'Parsing' (now largely deprecated/obsolete in WCAG 2.2)?",
        options: ["4.1.1", "4.1.2", "1.3.1", "4.1.3"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "4.1.1"
      },
      {
        id: 14,
        question: "What is the purpose of the 'complementary' ARIA role?",
        options: ["To identify a sidebar or content that is auxiliary to the main content", "To identify the main navigation", "To identify the footer", "To identify the search area"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To identify a sidebar or content that is auxiliary to the main content"
      },
      {
        id: 15,
        question: "Which WCAG success criterion requires that the purpose of each 'Input Purpose' can be programmatically determined?",
        options: ["1.3.5", "1.3.1", "4.1.2", "3.3.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.5 Identify Input Purpose"
      },
      {
        id: 16,
        question: "What does 'aria-controls' indicate?",
        options: ["The owner of the element", "The element(s) whose content or presence is controlled by the current element", "The parent of the element", "The next element in the tab order"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "The element(s) whose content or presence is controlled by the current element"
      },
      {
        id: 17,
        question: "Which WCAG 2.1 success criterion addresses 'Character Key Shortcuts'?",
        options: ["2.1.4", "2.1.1", "2.1.2", "2.4.7"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.1.4"
      },
      {
        id: 18,
        question: "What is the purpose of the 'search' ARIA role?",
        options: ["To identify the main content", "To identify a section of the page that contains search functionality", "To identify a specific input field", "To identify a navigation menu"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To identify a section of the page that contains search functionality"
      },
      {
        id: 19,
        question: "Which WCAG success criterion requires 'Non-text Content' to have text alternatives?",
        options: ["1.1.1", "1.2.1", "1.3.1", "1.4.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.1.1"
      },
      {
        id: 20,
        question: "What is the 'accessibility tree'?",
        options: ["A list of all accessible websites", "A subset of the DOM that contains information for assistive technologies", "A type of database", "A visual representation of the website's structure"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "A subset of the DOM that contains information for assistive technologies"
      },
      {
        id: 21,
        question: "Which success criterion requires that 'Headings and Labels' describe topic or purpose?",
        options: ["2.4.6", "2.4.1", "2.4.2", "1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.6"
      },
      {
        id: 22,
        question: "What is the purpose of 'aria-pressed'?",
        options: ["To indicate that a button is being clicked", "To indicate the state of a toggle button (pressed or not pressed)", "To indicate that a key is pressed", "To indicate a required field"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To indicate the state of a toggle button (pressed or not pressed)"
      },
      {
        id: 23,
        question: "Which WCAG success criterion deals with 'Audio-only and Video-only (Prerecorded)'?",
        options: ["1.2.1", "1.2.2", "1.2.3", "1.2.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.2.1"
      },
      {
        id: 24,
        question: "What does 'aria-current' indicate?",
        options: ["The current time", "The current element within a set of related elements (e.g., current page in a nav)", "The current user", "The current focus"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "The current element within a set of related elements (e.g., current page in a nav)"
      },
      {
        id: 25,
        question: "Which WCAG 2.1 success criterion addresses 'Label in Name'?",
        options: ["2.5.3", "2.5.1", "2.5.2", "2.5.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.5.3"
      },
      {
        id: 26,
        question: "What is the purpose of the 'alert' ARIA role?",
        options: ["To create a pop-up window", "To convey an important and usually time-sensitive message", "To stop all user interaction", "To change the focus"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To convey an important and usually time-sensitive message"
      },
      {
        id: 27,
        question: "Which WCAG principle ensures that content can be interpreted reliably by a wide variety of user agents?",
        options: ["Perceivable", "Operable", "Understandable", "Robust"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "Robust"
      },
      {
        id: 28,
        question: "What is 'aria-level' used for?",
        options: ["To define the priority of an element", "To define the hierarchical level of an element (e.g., in a heading or tree)", "To set the volume level", "To define the difficulty level"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To define the hierarchical level of an element (e.g., in a heading or tree)"
      },
      {
        id: 29,
        question: "Which success criterion requires that 'Keyboard' access does not result in a 'Keyboard Trap'?",
        options: ["2.1.2", "2.1.1", "2.4.3", "2.4.7"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.1.2"
      },
      {
        id: 30,
        question: "What does 'aria-valuemin' and 'aria-valuemax' define?",
        options: ["The size of an element", "The minimum and maximum allowed values for a range widget (like a slider)", "The font size limits", "The number of items in a list"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "The minimum and maximum allowed values for a range widget (like a slider)"
      }
    ]
  },
  {
    set: 2,
    domain: "Domain II: Identify accessibility issues in web solutions (40%)",
    questions: [
      {
        id: 31,
        question: "When testing a webpage with a screen reader, you hear 'Link, Graphic, 12345.jpg'. Which success criterion is violated?",
        options: ["1.1.1 Non-text Content", "2.4.4 Link Purpose", "4.1.2 Name, Role, Value", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above (It's missing an alt attribute, the link purpose is unclear, and the name is the filename)"
      },
      {
        id: 32,
        question: "During a manual audit, you find that a form uses 'placeholder' instead of 'label' for input instructions. Why is this an accessibility issue?",
        options: ["Placeholders often have low contrast", "Placeholders disappear when the user starts typing", "Placeholders may not be announced by all screen readers", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 33,
        question: "Which of the following is a key limitation of automated accessibility testing tools?",
        options: ["They are too slow", "They can only detect about 30-50% of accessibility issues", "They cannot check for contrast", "They only work on desktop"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "They can only detect about 30-50% of accessibility issues"
      },
      {
        id: 34,
        question: "While testing with a keyboard, you find a 'Close' icon that can be focused but nothing happens when you press 'Enter' or 'Space'. Which success criterion is violated?",
        options: ["2.1.1 Keyboard", "4.1.2 Name, Role, Value", "2.4.3 Focus Order", "2.4.7 Focus Visible"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.1.1 Keyboard"
      },
      {
        id: 35,
        question: "You are testing a data table and find that it uses visual styling (bold text) to indicate headers instead of <th> elements. Which success criterion is violated?",
        options: ["1.3.1 Info and Relationships", "1.1.1 Non-text Content", "4.1.2 Name, Role, Value", "2.4.6 Headings and Labels"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.1 Info and Relationships"
      },
      {
        id: 36,
        question: "What is the primary purpose of 'Usability Testing' in the context of accessibility?",
        options: ["To check for WCAG conformance", "To understand the actual experience of users with disabilities", "To find bugs in the code", "To test the speed of the site"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To understand the actual experience of users with disabilities"
      },
      {
        id: 37,
        question: "When testing a page with multiple forms, you find that all Submit buttons have the same name ('Submit'). Is this a violation?",
        options: ["No, it's fine", "Yes, it violates 2.4.4 Link Purpose (In Context)", "Yes, it violates 2.4.6 Headings and Labels", "Yes, it violates 3.2.4 Consistent Identification"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "Yes, it violates 3.2.4 Consistent Identification (if they do the same thing) or 2.4.6/4.1.2 (if context is needed)"
      },
      {
        id: 38,
        question: "During testing, you find that content is hidden until the user hovers over it with a mouse. There is no way to trigger this with a keyboard. Which success criterion is violated?",
        options: ["2.1.1 Keyboard", "1.4.13 Content on Hover or Focus", "2.4.3 Focus Order", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 39,
        question: "Which of the following would be an example of a 'Screen Reader Testing' failure?",
        options: ["The screen reader announces 'unlabeled button'", "The screen reader skips a section of the page", "The screen reader reads content in the wrong order", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 40,
        question: "While testing a site, you find that the main navigation is not marked as a landmark or with a navigation role. Which success criterion is violated?",
        options: ["1.3.1 Info and Relationships", "2.4.1 Bypass Blocks", "4.1.2 Name, Role, Value", "1.1.1 Non-text Content"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.1 Info and Relationships"
      },
      {
        id: 41,
        question: "Which tool is best for inspecting the 'Accessibility Tree'?",
        options: ["Chrome DevTools (Accessibility Tab)", "HTML Validator", "Color Contrast Analyzer", "Screaming Frog"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Chrome DevTools (Accessibility Tab)"
      },
      {
        id: 42,
        question: "When testing a form, you find that an error message appears at the top of the page but the focus remains on the 'Submit' button. Is this an issue?",
        options: ["No, the user can find it", "Yes, it may violate 3.3.1 Error Identification if not announced", "Yes, it may violate 2.4.3 Focus Order", "Both B and C"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "Both B and C"
      },
      {
        id: 43,
        question: "While testing a mobile site, you find that a swipe gesture is required to move between items in a carousel, and there are no buttons for this action. Which success criterion is violated?",
        options: ["2.1.1 Keyboard", "2.5.1 Pointer Gestures", "2.5.4 Motion Actuation", "1.3.4 Orientation"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "2.5.1 Pointer Gestures (WCAG 2.1)"
      },
      {
        id: 44,
        question: "If you find that a page has a 'Language' attribute set incorrectly (e.g., lang=\"en\" for a French page), which success criterion is violated?",
        options: ["3.1.1 Language of Page", "3.1.2 Language of Parts", "1.3.1 Info and Relationships", "4.1.2 Name, Role, Value"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.1.1 Language of Page"
      },
      {
        id: 45,
        question: "What is the best way to test if a site is accessible for users with low vision?",
        options: ["Use a screen reader", "Zoom the page to 200% and 400% and check for reflow and functionality", "Use an automated scanner", "Check the HTML code"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Zoom the page to 200% and 400% and check for reflow and functionality"
      },
      {
        id: 46,
        question: "During a keyboard test, you find that the focus order jumps from the top of the page to the bottom and then back to the middle. Which success criterion is violated?",
        options: ["2.4.3 Focus Order", "2.1.1 Keyboard", "2.4.7 Focus Visible", "3.2.1 On Focus"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.3 Focus Order"
      },
      {
        id: 47,
        question: "While testing a site, you find that a custom dropdown menu can be opened with the keyboard but cannot be navigated with the arrow keys. Which success criterion is primarily violated?",
        options: ["2.1.1 Keyboard", "2.4.3 Focus Order", "4.1.2 Name, Role, Value", "1.3.1 Info and Relationships"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.1.1 Keyboard"
      },
      {
        id: 48,
        question: "Which screen reader is most commonly used on Windows and is a commercial product?",
        options: ["NVDA", "JAWS", "VoiceOver", "Narrator"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "JAWS"
      },
      {
        id: 49,
        question: "You are testing a page with a search bar and find that the button is just a magnifying glass icon with no alt text or label. Which success criterion is violated?",
        options: ["4.1.2 Name, Role, Value", "1.1.1 Non-text Content", "3.3.2 Labels or Instructions", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 50,
        question: "What are you primarily checking when testing for 'Understandability'?",
        options: ["The color palette", "The readability of the text and the predictability of the interface", "The contrast ratios", "The keyboard tab order"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "The readability of the text and the predictability of the interface"
      },
      {
        id: 51,
        question: "While auditing, you find that a page uses <b> and <i> tags for emphasis. Is this a violation?",
        options: ["Yes, always", "No, as long as the emphasis is not critical to understanding", "Yes, it violates 1.3.1", "No, it's fine"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "No, as long as the emphasis is not critical to understanding (though <strong> and <em> are preferred)"
      },
      {
        id: 52,
        question: "What is the main purpose of testing for 'End-user Impact'?",
        options: ["To satisfy legal requirements", "To find barriers that automated tools and technical audits might miss", "To speed up the audit process", "To replace manual testing"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To find barriers that automated tools and technical audits might miss"
      },
      {
        id: 53,
        question: "During testing, you find that a modal dialog can be closed with the 'Esc' key, which is good. However, when it closes, the focus is lost and goes back to the top of the page. Which success criterion is violated?",
        options: ["2.4.3 Focus Order", "2.1.1 Keyboard", "2.4.7 Focus Visible", "3.2.1 On Focus"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.3 Focus Order"
      },
      {
        id: 54,
        question: "Which of the following is a common issue for users with cognitive disabilities?",
        options: ["Complex language and jargon", "Inconsistent navigation", "Time limits without warning", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 55,
        question: "While testing, you find that a site uses an 'aria-live' region that updates constantly, making it impossible for screen reader users to read other content. Which success criterion is primarily affected?",
        options: ["Usability (though not a direct WCAG failure unless it's an alert)", "4.1.2 Name, Role, Value", "1.3.1 Info and Relationships", "2.2.2 Pause, Stop, Hide"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Usability (It's a best practice/usability issue)"
      },
      {
        id: 56,
        question: "If a webpage has a button that performs a destructive action (like 'Delete All') without a confirmation step, which success criterion might be relevant for 'Error Prevention'?",
        options: ["3.3.4 Error Prevention (Legal, Financial, Data)", "3.3.1 Error Identification", "3.3.2 Labels or Instructions", "3.3.3 Error Suggestion"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.3.4 Error Prevention (Legal, Financial, Data) - Level AA"
      },
      {
        id: 57,
        question: "What is the purpose of testing with 'Voice Control' or 'Speech Recognition' software?",
        options: ["To test for screen reader compatibility", "To test if users can navigate and interact with the site using only their voice", "To check for contrast issues", "To test for mobile responsiveness"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To test if users can navigate and interact with the site using only their voice"
      },
      {
        id: 58,
        question: "During testing, you find that a page has a 'title' attribute on a link that provides different information than the link text. Which success criterion might this affect?",
        options: ["2.4.4 Link Purpose", "4.1.2 Name, Role, Value", "2.5.3 Label in Name", "Both A and C"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "Both A and C"
      },
      {
        id: 59,
        question: "While testing, you find that a page has a CAPTCHA. What must be provided for it to be accessible?",
        options: ["A text alternative", "An alternative form for different disabilities (e.g., audio CAPTCHA)", "A skip link", "A clear label"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "An alternative form for different disabilities (e.g., audio CAPTCHA)"
      },
      {
        id: 60,
        question: "Which tool is best for checking the accessibility of a PDF document?",
        options: ["Acrobat Pro Accessibility Checker", "Axe DevTools", "NVDA", "VoiceOver"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Acrobat Pro Accessibility Checker"
      }
    ]
  },
  {
    set: 2,
    domain: "Domain III: Remediating issues in web solutions (20%)",
    questions: [
      {
        id: 61,
        question: "How should a developer remediate a custom 'checkbox' built with a <span> that doesn't work with the keyboard?",
        options: ["Add tabindex=\"0\" and handle 'Enter'/'Space' keys with JavaScript", "Change it to <input type=\"checkbox\">", "Add role=\"checkbox\" only", "Both A and B (but B is best)"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "Both A and B (but B is best)"
      },
      {
        id: 62,
        question: "What is a key consideration when remediating accessibility issues in a legacy system?",
        options: ["Fixed everything at once", "Prioritize fixes based on user impact and effort", "Ignore accessibility if it's too hard", "Wait for a full redesign"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Prioritize fixes based on user impact and effort"
      },
      {
        id: 63,
        question: "When remediating a contrast issue, if changing the color is not possible, what is an alternative?",
        options: ["Decrease the font size", "Increase the font size and make it bold (at Level AA, 18pt/24px or 14pt/18.66px bold requires 3:1)", "Do nothing", "Remove the text"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Increase the font size and make it bold (at Level AA, 18pt/24px or 14pt/18.66px bold requires 3:1)"
      },
      {
        id: 64,
        question: "How can you remediate a data table that is difficult to read on small screens?",
        options: ["Remove the table", "Use CSS to transform the table into a more readable format (e.g., stacked blocks)", "Hide the table on mobile", "Disable zooming"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Use CSS to transform the table into a more readable format (e.g., stacked blocks)"
      },
      {
        id: 65,
        question: "To remediate a lack of visible focus, what should a developer do?",
        options: ["Add a CSS :focus style that is clearly visible (e.g., an outline)", "Remove outlines entirely", "Change the background color on hover", "Add a title attribute"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Add a CSS :focus style that is clearly visible (e.g., an outline)"
      },
      {
        id: 66,
        question: "What is the best way to remediate a page with missing landmarks?",
        options: ["Add ARIA roles (e.g., role=\"main\", role=\"nav\") or use HTML5 semantic elements (e.g., <main>, <nav>)", "Add more headings", "Add a skip link", "Use <div> for everything"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Add ARIA roles (e.g., role=\"main\", role=\"nav\") or use HTML5 semantic elements (e.g., <main>, <nav>)"
      },
      {
        id: 67,
        question: "When remediating an error message that is not announced by screen readers, which ARIA attribute is most useful?",
        options: ["aria-hidden", "aria-live (or role=\"alert\")", "aria-label", "aria-describedby"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "aria-live (or role=\"alert\")"
      },
      {
        id: 68,
        question: "How should a developer fix an 'aria-label' that doesn't match the visible text on a button?",
        options: ["Remove the aria-label", "Update the aria-label to include the visible text (for 2.5.3 Label in Name)", "Hide the visible text", "Change the button's color"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Update the aria-label to include the visible text (for 2.5.3 Label in Name)"
      },
      {
        id: 69,
        question: "What is a common remediation for a video that has audio but no audio description?",
        options: ["Add a text transcript", "Provide an alternative version of the video with audio description", "Add captions", "Remove the audio"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Provide an alternative version of the video with audio description (Level AA)"
      },
      {
        id: 70,
        question: "When remediating a site for mobile users, what should you ensure about touch targets?",
        options: ["They should be at least 44x44 CSS pixels (WCAG 2.1 AAA, but recommended for AA)", "They should be as small as possible", "They should only work on hover", "They should be transparent"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "They should be at least 44x44 CSS pixels (WCAG 2.1 AAA, but recommended for AA)"
      },
      {
        id: 71,
        question: "How can you remediate a navigation menu that requires a mouse to open?",
        options: ["Add keyboard event listeners (e.g., onkeydown) and ensure the menu is accessible to screen readers", "Tell users to use a mouse", "Use <a> tags only", "Remove the menu"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Add keyboard event listeners (e.g., onkeydown) and ensure the menu is accessible to screen readers"
      },
      {
        id: 72,
        question: "What is the purpose of 'Regression Testing' after remediating accessibility issues?",
        options: ["To find new bugs", "To ensure that the fixes actually work and haven't introduced new issues", "To speed up the site", "To check the design"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To ensure that the fixes actually work and haven't introduced new issues"
      },
      {
        id: 73,
        question: "When a developer cannot change the underlying code, what is a potential 'Band-Aid' remediation?",
        options: ["Using an accessibility overlay", "Adding ARIA via a browser extension", "Writing a custom script to fix the DOM after the page loads", "Doing nothing"],
        distractors: [1, 2, 4],
        answer: 3,
        answerText: "Writing a custom script to fix the DOM after the page loads (though fixing the source code is always better)"
      },
      {
        id: 74,
        question: "How should you remediate a form that doesn't provide suggestions for fixing errors?",
        options: ["Provide clear, helpful text suggestions near the erroneous field", "Just say 'Error'", "Highlight the field in red", "Clear the field"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Provide clear, helpful text suggestions near the erroneous field (for 3.3.3 Error Suggestion)"
      },
      {
        id: 75,
        question: "In the remediation process, what does 'Fix vs. Redesign' refer to?",
        options: ["The color of the buttons", "Deciding whether to patch existing code or completely rewrite the component/page for accessibility", "The font choice", "The price of the fix"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Deciding whether to patch existing code or completely rewrite the component/page for accessibility"
      }
    ]
  },
  {
    set: 3,
    domain: "Domain I: Creating Accessible Web Solutions (40%)",
    questions: [
      {
        id: 1,
        question: "Which WCAG 2.2 success criterion requires that 'Focus Obscured' (Minimum) is met?",
        options: ["2.4.11", "2.4.12", "2.4.13", "2.4.7"],
        distractors: [1, 2, 4],
        answer: 3,
        answerText: "2.4.13 Focus Obscured (Minimum) - Level AA"
      },
      {
        id: 2,
        question: "What is the primary difference between WCAG 2.1 and WCAG 2.2?",
        options: ["WCAG 2.2 removed all Level A criteria", "WCAG 2.2 added 9 new success criteria and deprecated 4.1.1", "WCAG 2.2 is only for mobile", "There is no difference"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "WCAG 2.2 added 9 new success criteria and deprecated 4.1.1"
      },
      {
        id: 3,
        question: "Which ARIA role is appropriate for an element that represents a single value within a range?",
        options: ["slider", "progressbar", "scrollbar", "spinbutton"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "slider"
      },
      {
        id: 4,
        question: "What does 'accessibility-supported' mean in the context of WCAG?",
        options: ["The technology works with all browsers", "The technology's accessibility features work with users' assistive technology and accessibility features in browsers and other user agents", "The technology is free to use", "The technology is open source"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "The technology's accessibility features work with users' assistive technology and accessibility features in browsers and other user agents"
      },
      {
        id: 5,
        question: "Which WCAG principle states that users must be able to operate the interface?",
        options: ["Perceivable", "Operable", "Understandable", "Robust"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Operable"
      },
      {
        id: 6,
        question: "What is the purpose of the 'aria-owns' attribute?",
        options: ["To define the CSS owner", "To define a parent/child relationship between elements that are not children in the DOM", "To set the focus", "To identify the main content"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To define a parent/child relationship between elements that are not children in the DOM"
      },
      {
        id: 7,
        question: "Which WCAG Level A success criterion requires text alternatives for any non-text content?",
        options: ["1.1.1", "1.2.1", "1.3.1", "1.4.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.1.1 Non-text Content"
      },
      {
        id: 8,
        question: "What does 'aria-polite' do in a live region?",
        options: ["Interrupts the user immediately", "Announces the update when the user is idle", "Does nothing", "Highlights the update"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Announces the update when the user is idle"
      },
      {
        id: 9,
        question: "Which WCAG success criterion addresses 'Keyboard' accessibility?",
        options: ["2.1.1", "2.1.2", "2.1.3", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 10,
        question: "What is the purpose of the 'role=\"application\"'?",
        options: ["To indicate that the entire page is a software application", "To tell screen readers to pass keyboard events through to the application instead of using internal shortcuts", "To make the page faster", "To hide the content"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To tell screen readers to pass keyboard events through to the application instead of using internal shortcuts"
      },
      {
        id: 11,
        question: "Which WCAG success criterion requires that 'Focus Visible' is met at Level AA?",
        options: ["2.4.7", "2.4.11", "2.4.3", "2.4.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.7"
      },
      {
        id: 12,
        question: "What does 'aria-sort' indicate on a table header?",
        options: ["The color of the column", "Whether the items in the table/grid are sorted in ascending or descending order", "The number of rows", "The size of the table"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Whether the items in the table/grid are sorted in ascending or descending order"
      },
      {
        id: 13,
        question: "Which WCAG success criterion addresses 'Contrast (Enhanced)' at Level AAA?",
        options: ["1.4.3", "1.4.6", "1.4.11", "1.4.1"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "1.4.6 (requires 7:1 for normal text)"
      },
      {
        id: 14,
        question: "What is the purpose of 'aria-readonly'?",
        options: ["To make an element invisible", "To indicate that the user cannot modify the value of the widget", "To make an element focusable", "To change the role"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To indicate that the user cannot modify the value of the widget"
      },
      {
        id: 15,
        question: "Which WCAG success criterion addresses 'Section Headings' at Level AAA?",
        options: ["2.4.10", "2.4.6", "1.3.1", "4.1.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.10"
      },
      {
        id: 16,
        question: "What does 'aria-required' indicate?",
        options: ["The element is important", "User input is required on the element before a form can be submitted", "The element is visible", "The element is a link"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "User input is required on the element before a form can be submitted"
      },
      {
        id: 17,
        question: "Which WCAG 2.1 success criterion addresses 'Status Messages'?",
        options: ["4.1.3", "4.1.2", "4.1.1", "3.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "4.1.3 (Level AA)"
      },
      {
        id: 18,
        question: "What is the purpose of the 'tree' ARIA role?",
        options: ["To identify a list of links", "To identify a widget that allows the user to select one or more items from a hierarchically organized set", "To identify the main content", "To identify a sidebar"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To identify a widget that allows the user to select one or more items from a hierarchically organized set"
      },
      {
        id: 19,
        question: "Which WCAG success criterion requires that 'Instructions' provided for understanding and operating content do not rely solely on sensory characteristics?",
        options: ["1.3.3", "1.4.1", "1.1.1", "1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.3 Sensory Characteristics"
      },
      {
        id: 20,
        question: "What is the difference between Level A, AA, and AAA in WCAG?",
        options: ["A is easy, AA is medium, AAA is hard", "They represent levels of accessibility conformance, with AAA being the highest", "They are for different industries", "They are for different countries"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "They represent levels of accessibility conformance, with AAA being the highest"
      },
      {
        id: 21,
        question: "Which success criterion requires that 'Page Titled' is met?",
        options: ["2.4.2", "2.4.1", "2.4.6", "1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.2 Page Titled"
      },
      {
        id: 22,
        question: "What is the purpose of 'aria-valuenow'?",
        options: ["To set the current date", "To define the current value for a range widget", "To set the priority", "To set the focus"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To define the current value for a range widget"
      },
      {
        id: 23,
        question: "Which WCAG success criterion addresses 'Language of Page'?",
        options: ["3.1.1", "3.1.2", "3.1.3", "3.1.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.1.1"
      },
      {
        id: 24,
        question: "What does 'aria-autocomplete' indicate?",
        options: ["The browser should remember the value", "Whether input suggestions are provided when the user types", "The field is required", "The field is a password"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Whether input suggestions are provided when the user types"
      },
      {
        id: 25,
        question: "Which WCAG success criterion addresses 'On Focus' behavior?",
        options: ["3.2.1", "3.2.2", "3.2.3", "3.2.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.2.1"
      },
      {
        id: 26,
        question: "What is the purpose of the 'tablist' ARIA role?",
        options: ["To create a list of links", "To identify a container for a set of tabs", "To identify the main navigation", "To identify a sidebar"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To identify a container for a set of tabs"
      },
      {
        id: 27,
        question: "Which WCAG principle ensures that content is 'Perceivable'?",
        options: ["Principle 1", "Principle 2", "Principle 3", "Principle 4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Principle 1"
      },
      {
        id: 28,
        question: "What is 'aria-busy' used for?",
        options: ["To indicate the user is busy", "To indicate an element is being modified and assistive technologies should wait", "To stop updates", "To set a timer"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To indicate an element is being modified and assistive technologies should wait"
      },
      {
        id: 29,
        question: "Which WCAG success criterion requires that 'Error Identification' is provided?",
        options: ["3.3.1", "3.3.2", "3.3.3", "3.3.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.3.1"
      },
      {
        id: 30,
        question: "What is the purpose of 'aria-placeholder'?",
        options: ["To define the background color", "To provide a short hint that describes the expected value of an input field", "To set the focus", "To hide the element"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To provide a short hint that describes the expected value of an input field"
      }
    ]
  },
  {
    set: 3,
    domain: "Domain II: Identify accessibility issues in web solutions (40%)",
    questions: [
      {
        id: 31,
        question: "While testing a site, you find that a group of checkboxes is not surrounded by a <fieldset> and doesn't have a <legend>. Is this a violation?",
        options: ["No, it's optional", "Yes, it violates 1.3.1 Info and Relationships", "Yes, it violates 3.3.2 Labels or Instructions", "Both B and C"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "Both B and C (depending on the context and screen reader output)"
      },
      {
        id: 32,
        question: "During a screen reader test, you notice that a list of 10 items is announced as 10 separate paragraphs. Which success criterion is violated?",
        options: ["1.3.1 Info and Relationships", "1.1.1 Non-text Content", "4.1.2 Name, Role, Value", "2.4.6 Headings and Labels"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.1 Info and Relationships (The structure of the list is not programmatically determined)"
      },
      {
        id: 33,
        question: "When testing a page's color contrast, you find that the logo has low contrast with the background. Is this a violation of 1.4.3?",
        options: ["Yes, always", "No, logos and brand names are exempt from the contrast requirements", "Yes, if the logo contains text", "No, only decorative images are exempt"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "No, logos and brand names are exempt from the contrast requirements"
      },
      {
        id: 34,
        question: "While testing with a keyboard, you find that you can tab into a social media feed but then you cannot tab back out of it. What is this called?",
        options: ["A keyboard trap", "A focus skip", "A tab loop", "A navigation error"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "A keyboard trap (Violation of 2.1.2)"
      },
      {
        id: 35,
        question: "You are auditing a site and find that it uses a custom 'toggle' button that changes color when clicked, but the state (on/off) is not conveyed to screen readers. Which success criterion is violated?",
        options: ["4.1.2 Name, Role, Value", "1.3.1 Info and Relationships", "1.4.1 Use of Color", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 36,
        question: "What is the best way to verify if a site is 'Robust'?",
        options: ["Check for valid HTML and ARIA, and test in multiple browsers and with multiple assistive technologies", "Check for high contrast", "Check for keyboard access", "Check for clear language"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Check for valid HTML and ARIA, and test in multiple browsers and with multiple assistive technologies"
      },
      {
        id: 37,
        question: "During testing, you find that a page has a 'Skip to Content' link, but it is invisible and only becomes visible on focus. Is this acceptable?",
        options: ["No, it must be always visible", "Yes, this is a common and acceptable pattern", "No, it must be at the bottom of the page", "Yes, but only if it's blue"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Yes, this is a common and acceptable pattern (as long as it becomes visible on focus for keyboard users)"
      },
      {
        id: 38,
        question: "While testing with a screen reader, you hear 'Heading level 1, Welcome' followed immediately by 'Heading level 3, Services'. Is this an issue?",
        options: ["No, heading levels can be skipped", "Yes, it violates 1.3.1 and is confusing for users", "No, as long as the content is good", "Yes, it violates 2.4.2"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Yes, it violates 1.3.1 (best practice is to maintain heading hierarchy)"
      },
      {
        id: 39,
        question: "Which of the following is a symptom of a 'Focus Order' issue?",
        options: ["The screen reader reads the page out of order", "When tabbing, the focus moves to an element that is visually after the current one, but logically before it", "The focus disappears entirely", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 40,
        question: "While auditing, you find that a link opens a new window without warning the user. Which success criterion might this affect?",
        options: ["3.2.1 On Focus", "3.2.2 On Input", "3.2.5 Change on Request (AAA)", "It's a general usability/accessibility best practice"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "It's a general usability/accessibility best practice (though often flagged under 3.2.5 at AAA)"
      },
      {
        id: 41,
        question: "What is 'Fakes' or 'Simulators' in the context of accessibility testing?",
        options: ["Tools that simulate visual impairments (like color blindness simulators)", "Fake assistive technologies", "Simulated users", "Automated scripts"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Tools that simulate visual impairments (like color blindness simulators)"
      },
      {
        id: 42,
        question: "When testing a site with a screen reader, you find that the 'aria-label' on a link is 'Read more' while the visible text is 'About our services'. Which success criterion is violated?",
        options: ["2.5.3 Label in Name", "2.4.4 Link Purpose", "4.1.2 Name, Role, Value", "1.3.1 Info and Relationships"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.5.3 Label in Name (Visible text must be included in the accessible name)"
      },
      {
        id: 43,
        question: "While testing a mobile app, you find that shaking the phone is the only way to undo an action. Which success criterion is violated?",
        options: ["2.5.4 Motion Actuation", "2.5.1 Pointer Gestures", "2.1.1 Keyboard", "1.3.4 Orientation"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.5.4 Motion Actuation (WCAG 2.1)"
      },
      {
        id: 44,
        question: "If a webpage uses 'justify' alignment for large blocks of text, why might this be an issue?",
        options: ["It's visually unappealing", "It can create 'rivers of white' that make it difficult for people with dyslexia to read", "It's not allowed by WCAG 1.4.3", "It slows down the page"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "It can create 'rivers of white' that make it difficult for people with dyslexia to read (Relevant to 1.4.8 Visual Presentation at AAA)"
      },
      {
        id: 45,
        question: "What is the purpose of 'Code Inspection' in an accessibility audit?",
        options: ["To find bugs in the design", "To verify that the implementation matches the intended structure and ARIA usage", "To test the site's speed", "To check the spelling"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To verify that the implementation matches the intended structure and ARIA usage"
      },
      {
        id: 46,
        question: "During testing, you find that a page has a search input but no search button. To search, the user must press 'Enter'. Is this an issue?",
        options: ["No, everyone knows to press Enter", "Yes, it may violate 3.2.2 On Input or general usability for people who don't use Enter", "No, as long as it's labeled", "Yes, it violates 2.1.1"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Yes, it may violate 3.2.2 On Input or general usability for people who don't use Enter"
      },
      {
        id: 47,
        question: "While testing, you find that a site uses a font that is very thin and difficult to read even at 100% zoom. Which success criterion is primarily affected?",
        options: ["1.4.3 Contrast (Minimum) (if contrast is low)", "1.4.4 Resize Text", "1.4.12 Text Spacing", "Understandability (Principle 3)"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.4.3 Contrast (Minimum) (if contrast is low)"
      },
      {
        id: 48,
        question: "Which tool is best for checking the reading level of a text?",
        options: ["Hemingway Editor", "Axe DevTools", "Color Contrast Analyzer", "NVDA"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Hemingway Editor (Relevant to 3.1.5 Reading Level at AAA)"
      },
      {
        id: 49,
        question: "You are testing a page with a carousel and find that the 'Next' and 'Previous' buttons are not in the tab order. Which success criterion is violated?",
        options: ["2.1.1 Keyboard", "2.4.3 Focus Order", "2.4.7 Focus Visible", "4.1.2 Name, Role, Value"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.1.1 Keyboard"
      },
      {
        id: 50,
        question: "What is the role of 'Manual Testing' in an audit?",
        options: ["To check what automated tools cannot", "To fix the code", "To speed up the audit", "To replace user testing"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To check what automated tools cannot"
      },
      {
        id: 51,
        question: "While auditing, you find that a page has two 'Home' links in the navigation that point to different pages. Which success criterion is violated?",
        options: ["3.2.4 Consistent Identification", "3.2.3 Consistent Navigation", "2.4.4 Link Purpose", "4.1.2 Name, Role, Value"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.2.4 Consistent Identification"
      },
      {
        id: 52,
        question: "What is the benefit of testing with 'High Contrast Mode'?",
        options: ["It highlights all accessibility issues", "It helps identify content that disappears when colors are overridden (e.g., icons that use background images)", "It makes the site faster", "It tests for keyboard access"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "It helps identify content that disappears when colors are overridden (e.g., icons that use background images)"
      },
      {
        id: 53,
        question: "During testing, you find that a page uses 'aria-describedby' to link a label to an input field. Is this correct?",
        options: ["Yes, always", "No, aria-labelledby or <label> should be used for the primary label; aria-describedby is for additional info", "No, aria-label should be used", "Yes, but only if it's a long description"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "No, aria-labelledby or <label> should be used for the primary label; aria-describedby is for additional info"
      },
      {
        id: 54,
        question: "Which of the following is a symptom of a 'Conformant' website?",
        options: ["It has a high score on an automated tool", "It meets all success criteria of the target level (e.g., AA)", "It's easy to use for everyone", "It's built with HTML5"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "It meets all success criteria of the target level (e.g., AA)"
      },
      {
        id: 55,
        question: "While testing, you find that a page has a 'Search' button that is an <img> tag with alt=\"Go\". Is this sufficient?",
        options: ["Yes, the purpose is clear", "No, it should be a <button>", "No, 'Go' is too vague", "Yes, but only if it's a blue button"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, the purpose is clear (though <button> is preferred)"
      },
      {
        id: 56,
        question: "If a webpage has a complex interaction that cannot be performed with a keyboard, but there is an accessible alternative page, does it conform?",
        options: ["Yes, if the alternative page meets all requirements (2.0 Conformance)", "No, every page must be accessible", "Yes, if the alternative page is faster", "No, alternatives are not allowed"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, if the alternative page meets all requirements (Conforming Alternate Version)"
      },
      {
        id: 57,
        question: "What is the purpose of testing with 'Screen Magnification' software?",
        options: ["To test for screen reader compatibility", "To see how the site looks and functions when zoomed in (e.g., check for layout breaks and focus tracking)", "To check for contrast issues", "To test for mobile responsiveness"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To see how the site looks and functions when zoomed in (e.g., check for layout breaks and focus tracking)"
      },
      {
        id: 58,
        question: "During testing, you find that a page has a 'form' but no 'submit' button. The user must use a keyboard shortcut to submit. Is this a violation?",
        options: ["Yes, violates 2.1.1 Keyboard and general usability", "No, keyboard shortcuts are good", "Yes, violates 3.3.2 Labels or Instructions", "No, as long as the instructions are there"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, violates 2.1.1 Keyboard and general usability"
      },
      {
        id: 59,
        question: "While testing, you find that a page has a lot of blinking text. Which success criterion is violated?",
        options: ["2.2.2 Pause, Stop, Hide", "2.3.1 Three Flashes", "1.1.1 Non-text Content", "1.4.3 Contrast"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.2.2 Pause, Stop, Hide"
      },
      {
        id: 60,
        question: "Which tool is best for checking if an SVG is accessible?",
        options: ["Chrome DevTools (Accessibility Tab)", "Axe DevTools", "A screen reader", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      }
    ]
  },
  {
    set: 3,
    domain: "Domain III: Remediating issues in web solutions (20%)",
    questions: [
      {
        id: 61,
        question: "How should a developer remediate a 'Tab' widget that doesn't follow the ARIA Authoring Practice Guide?",
        options: ["Add the correct ARIA roles (tablist, tab, tabpanel) and implement the required keyboard interactions (arrow keys, etc.)", "Change it to a list of links", "Remove the tabs", "Make it faster"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Add the correct ARIA roles (tablist, tab, tabpanel) and implement the required keyboard interactions (arrow keys, etc.)"
      },
      {
        id: 62,
        question: "What is a key step in remediating a site for 'Low Vision' users?",
        options: ["Ensure that all text can be resized to 200% without loss of content or functionality", "Ensure that the site reflows correctly at 400% zoom (WCAG 2.1)", "Ensure high contrast", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 63,
        question: "When remediating a missing 'alt' text for a functional image (like a button), what should the alt text contain?",
        options: ["A description of the image", "The purpose of the button (e.g., 'Search')", "The word 'image'", "Nothing (alt=\"\")"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "The purpose of the button (e.g., 'Search')"
      },
      {
        id: 64,
        question: "How can you remediate a page that has multiple identical 'Download' links?",
        options: ["Provide additional context in the link text (e.g., 'Download PDF of Annual Report') or use aria-label/aria-describedby", "Remove the links", "Change the color of each link", "Make the links bigger"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Provide additional context in the link text (e.g., 'Download PDF of Annual Report') or use aria-label/aria-describedby"
      },
      {
        id: 65,
        question: "To remediate an issue where form labels are not programmatically associated with their inputs, what should a developer do?",
        options: ["Use the <label> element with the 'for' attribute matching the input's 'id'", "Use 'aria-label' on the input", "Use 'aria-labelledby' on the input", "Any of the above (but <label> is best for visible labels)"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "Any of the above (but <label> is best for visible labels)"
      },
      {
        id: 66,
        question: "What is the best way to remediate a page that lacks logical heading levels?",
        options: ["Ensure headings follow a nested structure (h1 followed by h2, etc.) and accurately describe the content", "Add more headings", "Remove all headings", "Make headings bold only"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Ensure headings follow a nested structure (h1 followed by h2, etc.) and accurately describe the content"
      },
      {
        id: 67,
        question: "When remediating a custom 'dialog' (modal), what is a critical keyboard interaction to implement?",
        options: ["Trapping the focus within the modal while it is open", "Allowing the user to scroll the background", "Closing the modal with the 'Enter' key only", "Moving the focus to the 'Close' button only"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Trapping the focus within the modal while it is open"
      },
      {
        id: 68,
        question: "How should a developer fix a page that has multiple 'h1' elements?",
        options: ["Change it so there is only one primary 'h1' that represents the main topic of the page", "Remove all 'h1' elements", "It's fine to have multiple 'h1' elements (HTML5 allows it, but it's a best practice to have one)", "Hide the extra 'h1' elements"],
        distractors: [1, 2, 4],
        answer: 3,
        answerText: "It's fine to have multiple 'h1' elements (HTML5 allows it, but it's a best practice to have one)"
      },
      {
        id: 69,
        question: "What is a common remediation for a site that uses color as the only way to distinguish links from text?",
        options: ["Add an underline to the links (or another visual distinction like bolding or an icon)", "Change the color of the text", "Remove the links", "Make the links bigger"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Add an underline to the links (or another visual distinction like bolding or an icon)"
      },
      {
        id: 70,
        question: "When remediating a site for 'Motor Disabilities', what is a key focus?",
        options: ["Ensuring all functionality is keyboard accessible and that there are no keyboard traps", "Providing large touch targets", "Ensuring focus is visible", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 71,
        question: "How can you remediate a complex data table that lacks a summary or caption?",
        options: ["Add a <caption> element to the table", "Add a summary attribute (though deprecated, still supported by some SRs)", "Add a heading before the table", "Any of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "Any of the above"
      },
      {
        id: 72,
        question: "What is the purpose of 'Accessibility Training' for developers and content creators?",
        options: ["To prevent new accessibility issues from being introduced in the future", "To fix existing bugs", "To speed up the audit", "To satisfy legal requirements only"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To prevent new accessibility issues from being introduced in the future"
      },
      {
        id: 73,
        question: "When a developer fixes an issue, what should they do next?",
        options: ["Submit the code", "Verify the fix with the appropriate tools (e.g., screen reader, keyboard) and against the relevant WCAG success criteria", "Start fixing the next issue", "Celebrate"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Verify the fix with the appropriate tools (e.g., screen reader, keyboard) and against the relevant WCAG success criteria"
      },
      {
        id: 74,
        question: "How should you remediate a site that has a 'Time Limit' that cannot be extended?",
        options: ["Provide a way for the user to turn off, adjust, or extend the time limit (WCAG 2.2.1)", "Remove the time limit", "Tell users to be faster", "Ignore the issue"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Provide a way for the user to turn off, adjust, or extend the time limit (WCAG 2.2.1)"
      },
      {
        id: 75,
        question: "In the context of remediation, what is 'Retrofitting'?",
        options: ["Fixing a site after it has already been built and launched", "Building accessibility in from the start", "Redesigning the site", "Removing features"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Fixing a site after it has already been built and launched"
      }
    ]
  },
  {
    set: 4,
    domain: "Domain I: Creating Accessible Web Solutions (40%)",
    questions: [
      {
        id: 1,
        question: "Which WCAG 2.2 success criterion requires 'Consistent Help'?",
        options: ["3.2.1", "3.2.6", "3.2.3", "3.2.4"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "3.2.6 Consistent Help - Level A"
      },
      {
        id: 2,
        question: "What is the purpose of the 'aria-errormessage' attribute?",
        options: ["To provide a general error message", "To link an input field to a specific element containing its error message", "To highlight a field in red", "To stop form submission"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To link an input field to a specific element containing its error message"
      },
      {
        id: 3,
        question: "Which WCAG principle ensures that users can interpret content reliably?",
        options: ["Perceivable", "Operable", "Understandable", "Robust"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "Robust"
      },
      {
        id: 4,
        question: "In ARIA, which role is used for a set of items that can be toggled on or off?",
        options: ["group", "listbox", "radiogroup", "switch"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "switch"
      },
      {
        id: 5,
        question: "Which success criterion addresses 'Audio Description or Media Alternative (Prerecorded)' at Level A?",
        options: ["1.2.2", "1.2.3", "1.2.5", "1.2.8"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "1.2.3"
      },
      {
        id: 6,
        question: "What is the primary purpose of UAAG Part 1?",
        options: ["Ensuring user agent UI is accessible", "Supporting accessibility features in the content", "Defining hardware requirements", "Regulating internet service providers"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Ensuring user agent UI is accessible"
      },
      {
        id: 7,
        question: "Which WCAG Level AA success criterion requires a contrast ratio of at least 3:1 for non-text content (like icons or button borders)?",
        options: ["1.4.3", "1.4.11", "1.4.1", "1.4.6"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "1.4.11 Non-text Contrast"
      },
      {
        id: 8,
        question: "What does the 'aria-live' value 'off' do?",
        options: ["Disables all announcements for the region", "Only announces if the user focuses on the element", "Wait until the screen reader is idle", "Announces immediately"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Disables all announcements for the region"
      },
      {
        id: 9,
        question: "Which WCAG success criterion requires that 'Focus Order' is preserved?",
        options: ["2.4.3", "2.4.1", "2.4.7", "2.1.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.3 Focus Order"
      },
      {
        id: 10,
        question: "What is the purpose of 'aria-disabled=\"true\"'?",
        options: ["To hide an element", "To indicate that an element is perceivable but not editable or otherwise operable", "To make an element focusable", "To change the role"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To indicate that an element is perceivable but not editable or otherwise operable"
      },
      {
        id: 11,
        question: "Which success criterion was introduced in WCAG 2.1 to address 'Orientation'?",
        options: ["1.3.4", "1.3.1", "1.4.10", "2.5.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.4"
      },
      {
        id: 12,
        question: "What does 'aria-labelledby' do?",
        options: ["Provides a primary label by referencing the ID of another element", "Provides a secondary description", "Hides an element", "Defines the role"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Provides a primary label by referencing the ID of another element"
      },
      {
        id: 13,
        question: "Which WCAG success criterion addresses 'Status Messages' at Level AA?",
        options: ["4.1.3", "4.1.2", "3.3.1", "2.2.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "4.1.3"
      },
      {
        id: 14,
        question: "What is the purpose of the 'main' ARIA role?",
        options: ["To identify the primary content of the body of a document", "To identify a sidebar", "To identify a footer", "To identify a header"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To identify the primary content of the body of a document"
      },
      {
        id: 15,
        question: "Which WCAG success criterion requires that 'Link Purpose (Link Only)' is clear at Level AAA?",
        options: ["2.4.9", "2.4.4", "2.4.6", "1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.9"
      },
      {
        id: 16,
        question: "What does 'aria-expanded=\"true\"' indicate?",
        options: ["The element is large", "A collapsible group of content is currently displayed", "The element is important", "The element is a link"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "A collapsible group of content is currently displayed"
      },
      {
        id: 17,
        question: "Which WCAG 2.2 success criterion addresses 'Accessible Authentication'?",
        options: ["3.3.7", "3.3.8", "3.3.9", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above (3.3.7 is AA, 3.3.8 is AA, 3.3.9 is AAA)"
      },
      {
        id: 18,
        question: "What is the purpose of the 'region' ARIA role?",
        options: ["To define a generic section of the page", "To identify a perceivable section of the page that is sufficiently important that users will likely want to be able to navigate to it", "To identify the main content", "To identify a sidebar"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To identify a perceivable section of the page that is sufficiently important that users will likely want to be able to navigate to it"
      },
      {
        id: 19,
        question: "Which WCAG success criterion requires 'Identify Input Purpose'?",
        options: ["1.3.5", "1.3.1", "1.3.6", "3.3.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.5 (Level AA)"
      },
      {
        id: 20,
        question: "What does 'conformance' mean in WCAG?",
        options: ["The website is easy to use", "The website meets all the requirements of a defined standard or level", "The website is built with specific tools", "The website is legal"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "The website meets all the requirements of a defined standard or level"
      },
      {
        id: 21,
        question: "Which success criterion requires 'Focus Visible'?",
        options: ["2.4.7", "2.4.3", "2.1.1", "3.2.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.7"
      },
      {
        id: 22,
        question: "What is the purpose of 'aria-setsize'?",
        options: ["To define the font size", "To define the number of items in a set (like a list or tree)", "To set the priority", "To set the focus"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To define the number of items in a set (like a list or tree)"
      },
      {
        id: 23,
        question: "Which WCAG success criterion addresses 'Language of Parts'?",
        options: ["3.1.2", "3.1.1", "3.1.3", "3.1.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.1.2 (Level AA)"
      },
      {
        id: 24,
        question: "What does 'aria-haspopup=\"dialog\"' indicate?",
        options: ["That an element has a tooltip", "That an element triggers a modal dialog", "That an element is a link", "That an element is hidden"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "That an element triggers a modal dialog"
      },
      {
        id: 25,
        question: "Which WCAG success criterion addresses 'On Input' behavior?",
        options: ["3.2.2", "3.2.1", "3.2.3", "3.2.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.2.2"
      },
      {
        id: 26,
        question: "What is the purpose of the 'progressbar' ARIA role?",
        options: ["To identify a list of items", "To indicate the status of a process that is taking some time", "To identify the main navigation", "To identify a sidebar"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To indicate the status of a process that is taking some time"
      },
      {
        id: 27,
        question: "Which WCAG principle ensures that users can sense information?",
        options: ["Perceivable", "Operable", "Understandable", "Robust"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Perceivable"
      },
      {
        id: 28,
        question: "What is 'aria-posinset' used for?",
        options: ["To define the position of an element in CSS", "To define the 1-based position of an element within a set", "To set the focus", "To hide an element"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To define the 1-based position of an element within a set"
      },
      {
        id: 29,
        question: "Which WCAG success criterion requires 'Labels or Instructions'?",
        options: ["3.3.2", "3.3.1", "3.3.3", "3.3.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.3.2 (Level A)"
      },
      {
        id: 30,
        question: "What is the purpose of 'aria-valuetext'?",
        options: ["To define the color of the value", "To provide a human-readable text alternative for the current value of a range widget", "To set the focus", "To hide the element"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To provide a human-readable text alternative for the current value of a range widget"
      }
    ]
  },
  {
    set: 4,
    domain: "Domain II: Identify accessibility issues in web solutions (40%)",
    questions: [
      {
        id: 31,
        question: "While testing a site, you find that a link is labeled only with a 'title' attribute and has no visible text or ARIA label. Which success criterion is violated?",
        options: ["4.1.2 Name, Role, Value", "1.3.1 Info and Relationships", "2.4.4 Link Purpose", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above (Title attribute is not a reliable way to provide an accessible name)"
      },
      {
        id: 32,
        question: "During a manual audit, you find that a page has multiple sections with the same 'h2' heading. Which success criterion is primarily affected?",
        options: ["2.4.6 Headings and Labels", "1.3.1 Info and Relationships", "2.4.1 Bypass Blocks", "2.4.2 Page Titled"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.6 Headings and Labels"
      },
      {
        id: 33,
        question: "When testing a page's color contrast, you find that placeholder text in an input field has low contrast. Is this a violation?",
        options: ["Yes, placeholder text is text and must meet contrast requirements", "No, placeholders are exempt", "Only if the field is required", "No, only the label must have high contrast"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, placeholder text is text and must meet contrast requirements (Violation of 1.4.3)"
      },
      {
        id: 34,
        question: "While testing with a keyboard, you find that the focus moves to hidden elements (like items in a closed menu). Which success criterion is violated?",
        options: ["2.4.3 Focus Order", "2.1.1 Keyboard", "2.4.7 Focus Visible", "3.2.1 On Focus"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.3 Focus Order"
      },
      {
        id: 35,
        question: "You are testing a site and find that it uses an SVG for an icon, but the SVG has no 'title', 'desc', or ARIA label. Which success criterion is violated?",
        options: ["1.1.1 Non-text Content", "4.1.2 Name, Role, Value", "1.3.1 Info and Relationships", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 36,
        question: "What is the best way to test for 'Reflow' (WCAG 2.1)?",
        options: ["Zoom the page to 400% on a desktop browser with a width of 1280px and check for horizontal scrolling", "Test on a mobile phone", "Use an automated tool", "Check the CSS"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Zoom the page to 400% on a desktop browser with a width of 1280px and check for horizontal scrolling (Violation of 1.4.10 if horizontal scrolling occurs for blocks of text)"
      },
      {
        id: 37,
        question: "During testing, you find that a 'Search' button is marked with 'aria-hidden=\"true\"' but it is visually visible and clickable. Is this a violation?",
        options: ["Yes, it's a failure of 4.1.2 and 1.1.1", "No, it's fine", "Only if it's the only search button", "Yes, it violates 2.1.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, it's a failure of 4.1.2 and 1.1.1 (Interactive elements must not be hidden from assistive technologies)"
      },
      {
        id: 38,
        question: "While testing with a screen reader, you find that a table is used for layout and it is announced as a table with rows and columns. Which success criterion is violated?",
        options: ["1.3.1 Info and Relationships", "1.1.1 Non-text Content", "4.1.2 Name, Role, Value", "None, but it's a best practice to use role=\"presentation\""],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "None, but it's a best practice to use role=\"presentation\" (though some flag it under 1.3.1 if it's confusing)"
      },
      {
        id: 39,
        question: "Which of the following is a common issue for users with motor disabilities?",
        options: ["Tiny clickable areas", "Short timeout limits", "Interactions that require precise mouse movements", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 40,
        question: "While auditing, you find that a page has a 'Language' selector, but the language names are only written in the current page's language (e.g., 'French' instead of 'Français'). Is this an accessibility issue?",
        options: ["Yes, it's a usability issue for people who don't speak the current language", "No, it's fine", "Yes, it violates 3.1.1", "No, only the 'lang' attribute matters"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, it's a usability issue for people who don't speak the current language"
      },
      {
        id: 41,
        question: "What is the purpose of 'Automated Scanning'?",
        options: ["To find all accessibility issues", "To quickly find obvious technical violations (like missing alt text or low contrast) across many pages", "To replace manual testing", "To fix the code"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To quickly find obvious technical violations (like missing alt text or low contrast) across many pages"
      },
      {
        id: 42,
        question: "When testing a site with a screen reader, you find that a custom dropdown menu doesn't announce how many items are in the list. Which ARIA attribute is likely missing?",
        options: ["aria-setsize", "aria-posinset", "aria-level", "aria-label"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "aria-setsize"
      },
      {
        id: 43,
        question: "While testing a mobile site, you find that you cannot zoom the page because of a 'user-scalable=no' meta tag. Which success criterion is violated?",
        options: ["1.4.4 Resize Text", "1.4.10 Reflow", "1.3.4 Orientation", "4.1.2 Name, Role, Value"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.4.4 Resize Text"
      },
      {
        id: 44,
        question: "If a webpage uses a color-only indicator for a mandatory field (e.g., red text), which success criterion is violated?",
        options: ["1.4.1 Use of Color", "3.3.2 Labels or Instructions", "1.3.1 Info and Relationships", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 45,
        question: "What is the purpose of 'Usability Testing' with people with disabilities?",
        options: ["To find technical bugs", "To identify real-world barriers and understand the user's journey", "To check for contrast", "To speed up the audit"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To identify real-world barriers and understand the user's journey"
      },
      {
        id: 46,
        question: "During testing, you find that a page has a 'Submit' button that is disabled until all fields are valid, but there is no explanation of why it is disabled. Which success criterion is primarily affected?",
        options: ["3.3.2 Labels or Instructions", "4.1.2 Name, Role, Value", "3.2.2 On Input", "2.1.1 Keyboard"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.3.2 Labels or Instructions"
      },
      {
        id: 47,
        question: "While testing, you find that a site uses a 'breadcrumb' navigation, but it's just a series of links without any landmark or list structure. Which success criterion is violated?",
        options: ["1.3.1 Info and Relationships", "2.4.1 Bypass Blocks", "2.4.4 Link Purpose", "4.1.2 Name, Role, Value"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.1 Info and Relationships"
      },
      {
        id: 48,
        question: "Which tool is best for checking the accessibility of a complex web widget?",
        options: ["Manual testing with multiple screen readers and keyboard", "Automated scanner", "HTML validator", "Color contrast checker"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Manual testing with multiple screen readers and keyboard"
      },
      {
        id: 49,
        question: "You are testing a page with a video and find that there are no captions, but there is a sign language version. Does this meet Level AA?",
        options: ["No, captions are required for Level A (1.2.2)", "Yes, sign language is better", "No, captions are only for Level AAA", "Yes, if the sign language is synchronized"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "No, captions are required for Level A (1.2.2)"
      },
      {
        id: 50,
        question: "What is the role of 'Accessibility Quality Assurance (QA)'?",
        options: ["To find bugs at the end of the project", "To integrate accessibility testing throughout the development lifecycle", "To write the code", "To fix the design"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To integrate accessibility testing throughout the development lifecycle"
      },
      {
        id: 51,
        question: "While auditing, you find that a site has a 'search' feature that doesn't return any results if there's a typo, and doesn't provide any suggestions. Which success criterion might be relevant?",
        options: ["3.3.3 Error Suggestion", "3.3.1 Error Identification", "3.1.1 Language", "4.1.2 Name, Role, Value"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.3.3 Error Suggestion"
      },
      {
        id: 52,
        question: "What is the benefit of testing with 'Voiceover' on an iPhone?",
        options: ["It's the only way to test for mobile accessibility", "It helps identify issues specific to touch-based screen reader interactions", "It's faster than testing on desktop", "It finds contrast issues"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "It helps identify issues specific to touch-based screen reader interactions"
      },
      {
        id: 53,
        question: "During testing, you find that a page uses 'role=\"button\"' on a <div>, but doesn't have any keyboard event listeners. Is this a violation?",
        options: ["Yes, violates 2.1.1 Keyboard and 4.1.2 Name, Role, Value", "No, it's fine", "Only if it's not labeled", "Yes, violates 1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, violates 2.1.1 Keyboard and 4.1.2 Name, Role, Value"
      },
      {
        id: 54,
        question: "Which of the following is a common issue for users with low vision?",
        options: ["Fixed-width layouts that don't reflow", "Low color contrast", "Content that disappears when zoomed", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 55,
        question: "While testing, you find that a page has a 'Time Limit' that is less than 20 hours. Which success criterion might be relevant?",
        options: ["2.2.1 Timing Adjustable", "2.2.3 No Timing (AAA)", "2.2.6 Timeouts (AAA)", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 56,
        question: "If a webpage has a complex graphic that is described in the text immediately following it, does the graphic need a long 'alt' text?",
        options: ["No, a short alt text like 'Chart of Sales' is sufficient as long as the text describes it (1.1.1)", "Yes, always", "No, it needs no alt text at all", "Yes, but only for Level AAA"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "No, a short alt text like 'Chart of Sales' is sufficient as long as the text describes it (1.1.1)"
      },
      {
        id: 57,
        question: "What is the purpose of testing with 'High Contrast Mode' in Windows?",
        options: ["To check if the site is visually appealing in black and white", "To ensure that all information and controls are still visible when the user overrides colors", "To check for keyboard traps", "To test for mobile responsiveness"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To ensure that all information and controls are still visible when the user overrides colors"
      },
      {
        id: 58,
        question: "During testing, you find that a page has a 'form' but the error messages are only provided as a list at the top after submission. Is this acceptable?",
        options: ["Yes, it meets 3.3.1 Error Identification", "No, they must be next to the fields", "Yes, but only if they are linked to the fields", "No, they must be announced immediately"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, it meets 3.3.1 Error Identification (though linking them to fields is a best practice/often required for 3.3.2)"
      },
      {
        id: 59,
        question: "While testing, you find that a page has a 'marquee' element. Which success criterion is violated?",
        options: ["2.2.2 Pause, Stop, Hide", "2.3.1 Three Flashes", "1.1.1 Non-text Content", "1.3.1 Info and Relationships"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.2.2 Pause, Stop, Hide"
      },
      {
        id: 60,
        question: "Which tool is best for checking the tab order of a page?",
        options: ["Keyboard (using the Tab key)", "Automated scanner", "HTML validator", "Color contrast checker"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Keyboard (using the Tab key)"
      }
    ]
  },
  {
    set: 4,
    domain: "Domain III: Remediating issues in web solutions (20%)",
    questions: [
      {
        id: 61,
        question: "How should a developer remediate a custom 'slider' widget?",
        options: ["Add role=\"slider\" and the appropriate aria-valuemin, aria-valuemax, and aria-valuenow attributes, and handle keyboard arrow keys", "Use an <input type=\"range\">", "Add a text input", "Both A and B (but B is best)"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "Both A and B (but B is best)"
      },
      {
        id: 62,
        question: "What is a key consideration when remediating a site for 'Cognitive' disabilities?",
        options: ["Using clear and simple language", "Providing consistent navigation", "Avoiding flickering content", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 63,
        question: "When remediating a missing 'alt' text for a decorative image, what should the alt text contain?",
        options: ["A description of the image", "The word 'decorative'", "Nothing (alt=\"\")", "A link to the image"],
        distractors: [1, 2, 4],
        answer: 3,
        answerText: "Nothing (alt=\"\")"
      },
      {
        id: 64,
        question: "How can you remediate a form that doesn't have any error messages?",
        options: ["Implement server-side or client-side validation and provide clear text descriptions of any errors", "Highlight the fields in red only", "Reset the form", "Tell users to be careful"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Implement server-side or client-side validation and provide clear text descriptions of any errors"
      },
      {
        id: 65,
        question: "To remediate an issue where the focus is not managed after opening a modal, what should a developer do?",
        options: ["Move the focus to the first interactive element within the modal", "Leave the focus where it is", "Move the focus to the top of the page", "Move the focus to the 'Close' button only"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Move the focus to the first interactive element within the modal"
      },
      {
        id: 66,
        question: "What is the best way to remediate a page with inconsistent navigation?",
        options: ["Ensure that navigation elements that are repeated on multiple pages appear in the same relative order each time (3.2.3)", "Remove the navigation", "Change the navigation on every page", "Use different colors for navigation on each page"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Ensure that navigation elements that are repeated on multiple pages appear in the same relative order each time (3.2.3)"
      },
      {
        id: 67,
        question: "When remediating an issue where content is not accessible to screen readers, what is the first thing to check?",
        options: ["If the content is in the DOM and not hidden with CSS (e.g., display: none) or ARIA (e.g., aria-hidden=\"true\")", "The color of the content", "The font size", "The background contrast"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "If the content is in the DOM and not hidden with CSS (e.g., display: none) or ARIA (e.g., aria-hidden=\"true\")"
      },
      {
        id: 68,
        question: "How should a developer fix a site that has no 'Skip Link'?",
        options: ["Add a 'Skip to Main Content' link at the very beginning of the page", "Tell users to use landmarks", "Add more buttons", "Remove the header"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Add a 'Skip to Main Content' link at the very beginning of the page"
      },
      {
        id: 69,
        question: "What is a common remediation for a site that uses font-size in 'px'?",
        options: ["Change font-size to 'rem' or 'em' to allow better scaling in all browsers", "Increase the 'px' value", "Decrease the 'px' value", "Use 'pt' instead"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Change font-size to 'rem' or 'em' to allow better scaling in all browsers"
      },
      {
        id: 70,
        question: "When remediating a site for 'Screen Reader' users, what should you ensure about data tables?",
        options: ["They have proper <th> headers with scope attributes (or id/headers)", "They are only used for data, not layout", "They have a caption", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 71,
        question: "How can you remediate a complex interaction that is impossible to make accessible?",
        options: ["Provide a 'Conforming Alternate Version' (WCAG Conformance Requirement 1)", "Remove the interaction", "Ignore the issue", "Tell users to use a different browser"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Provide a 'Conforming Alternate Version' (WCAG Conformance Requirement 1)"
      },
      {
        id: 72,
        question: "What is the role of an 'Accessibility Auditor'?",
        options: ["To identify accessibility issues and provide recommendations for remediation", "To fix the code", "To design the site", "To manage the project"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To identify accessibility issues and provide recommendations for remediation"
      },
      {
        id: 73,
        question: "When a developer is given a list of accessibility issues, how should they prioritize them?",
        options: ["By ease of fix", "By impact on the user (e.g., blockers first) and conformance level (e.g., Level A first)", "By date reported", "By alphabetical order"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "By impact on the user (e.g., blockers first) and conformance level (e.g., Level A first)"
      },
      {
        id: 74,
        question: "How should you remediate a site that has 'Auto-playing' video?",
        options: ["Provide a way to pause or stop the video, or ensure it lasts less than 5 seconds", "Remove the video", "Make the video faster", "Hide the video"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Provide a way to pause or stop the video, or ensure it lasts less than 5 seconds (2.2.2)"
      },
      {
        id: 75,
        question: "In the context of remediation, what does 'Inclusive Design' mean?",
        options: ["Designing for as many people as possible from the start", "Fixing issues later", "Designing for a specific disability", "Adding an accessibility overlay"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Designing for as many people as possible from the start"
      }
    ]
  },
  {
    set: 5,
    domain: "Domain I: Creating Accessible Web Solutions (40%)",
    questions: [
      {
        id: 1,
        question: "Which WCAG 2.2 success criterion requires 'Redundant Entry'?",
        options: ["3.3.7", "3.3.8", "3.3.9", "3.3.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.3.7 Redundant Entry - Level A"
      },
      {
        id: 2,
        question: "What is the primary purpose of the 'aria-details' attribute?",
        options: ["To provide a short label", "To reference an element that provides a detailed description (more extensive than aria-describedby)", "To hide an element", "To set the focus"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To reference an element that provides a detailed description (more extensive than aria-describedby)"
      },
      {
        id: 3,
        question: "Which WCAG principle ensures that users can sense information and the user interface?",
        options: ["Perceivable", "Operable", "Understandable", "Robust"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Perceivable"
      },
      {
        id: 4,
        question: "In ARIA, which role is used for a section of the page that contains links to other pages or sections?",
        options: ["navigation", "link", "menu", "list"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "navigation"
      },
      {
        id: 5,
        question: "Which success criterion addresses 'Captions (Prerecorded)' at Level A?",
        options: ["1.2.2", "1.2.1", "1.2.3", "1.2.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.2.2"
      },
      {
        id: 6,
        question: "What is the primary goal of ATAG?",
        options: ["To make authoring tools accessible and help authors create accessible content", "To replace WCAG", "To focus only on mobile apps", "To define internet protocols"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To make authoring tools accessible and help authors create accessible content"
      },
      {
        id: 7,
        question: "Which WCAG Level AA success criterion requires that 'Text Spacing' can be overridden by the user?",
        options: ["1.4.12", "1.4.8", "1.4.4", "1.4.10"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.4.12 (Level AA, introduced in WCAG 2.1)"
      },
      {
        id: 8,
        question: "What does the 'aria-live' value 'assertive' do?",
        options: ["Interrupts the user immediately to announce the change", "Wait for the screen reader to finish its current task", "Does nothing", "Highlights the change visually"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Interrupts the user immediately to announce the change"
      },
      {
        id: 9,
        question: "Which WCAG success criterion requires that 'Page Titled' describes the topic or purpose?",
        options: ["2.4.2", "2.4.1", "2.4.6", "1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.2"
      },
      {
        id: 10,
        question: "What is the purpose of 'aria-readonly'?",
        options: ["To make an element invisible", "To indicate that the user cannot edit the value of a form widget", "To make an element focusable", "To change the role"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To indicate that the user cannot edit the value of a form widget"
      },
      {
        id: 11,
        question: "Which success criterion was introduced in WCAG 2.1 to address 'Reflow'?",
        options: ["1.4.10", "1.4.4", "1.4.12", "1.3.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.4.10"
      },
      {
        id: 12,
        question: "What does 'aria-label' do for a button that only has an icon?",
        options: ["Provides the text name for the button that is announced by screen readers", "Provides a tooltip", "Changes the icon's color", "Makes the button bigger"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Provides the text name for the button that is announced by screen readers"
      },
      {
        id: 13,
        question: "Which WCAG success criterion addresses 'Parsing'?",
        options: ["4.1.1 (deprecated in 2.2)", "4.1.2", "1.3.1", "1.1.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "4.1.1 (Note: This has been deprecated in WCAG 2.2 because it is handled by modern browsers and other SCs)"
      },
      {
        id: 14,
        question: "What is the purpose of the 'search' ARIA role?",
        options: ["To identify a section of the page that contains search functionality", "To identify a search result", "To identify a sidebar", "To identify the main content"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To identify a section of the page that contains search functionality"
      },
      {
        id: 15,
        question: "Which WCAG success criterion requires that 'Multiple Ways' exist to find a page?",
        options: ["2.4.5", "2.4.1", "2.4.4", "2.4.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.5 (Level AA)"
      },
      {
        id: 16,
        question: "What does 'aria-invalid' indicate?",
        options: ["The element is broken", "The value entered by the user is not in the correct format for the field", "The element is hidden", "The element is a link"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "The value entered by the user is not in the correct format for the field"
      },
      {
        id: 17,
        question: "Which WCAG 2.2 success criterion addresses 'Accessible Authentication (Enhanced)'?",
        options: ["3.3.9", "3.3.8", "3.3.7", "3.3.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.3.9 (Level AAA)"
      },
      {
        id: 18,
        question: "What is the purpose of the 'banner' ARIA role?",
        options: ["To identify the site-oriented content, usually the header", "To identify a sidebar", "To identify the main content", "To identify the footer"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To identify the site-oriented content, usually the header"
      },
      {
        id: 19,
        question: "Which WCAG success criterion requires 'Identify Purpose'?",
        options: ["1.3.6", "1.3.5", "1.3.1", "1.3.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.6 (Level AAA)"
      },
      {
        id: 20,
        question: "What is the primary focus of UAAG?",
        options: ["Making browsers and other user agents accessible", "Making websites accessible", "Making authoring tools accessible", "Making PDF files accessible"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Making browsers and other user agents accessible"
      },
      {
        id: 21,
        question: "Which success criterion requires 'Focus Order'?",
        options: ["2.4.3", "2.4.7", "2.1.1", "2.4.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.3"
      },
      {
        id: 22,
        question: "What is the purpose of 'aria-current=\"page\"'?",
        options: ["To set the current page time", "To indicate the link that represents the current page within a set of links", "To refresh the page", "To hide the current page"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "To indicate the link that represents the current page within a set of links"
      },
      {
        id: 23,
        question: "Which WCAG success criterion addresses 'Language of Page'?",
        options: ["3.1.1", "3.1.2", "3.1.3", "3.1.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.1.1"
      },
      {
        id: 24,
        question: "What does 'aria-expanded' do for a menu button?",
        options: ["Indicates if the menu is currently visible or not", "Changes the menu's size", "Adds items to the menu", "Makes the menu faster"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Indicates if the menu is currently visible or not"
      },
      {
        id: 25,
        question: "Which WCAG success criterion addresses 'On Focus' behavior?",
        options: ["3.2.1", "3.2.2", "3.2.3", "3.2.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.2.1"
      },
      {
        id: 26,
        question: "What is the purpose of the 'complementary' ARIA role?",
        options: ["To identify a sidebar or content that is auxiliary to the main content", "To identify the main content", "To identify the navigation", "To identify the footer"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To identify a sidebar or content that is auxiliary to the main content"
      },
      {
        id: 27,
        question: "Which WCAG principle ensures that users can operate the interface?",
        options: ["Operable", "Perceivable", "Understandable", "Robust"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Operable"
      },
      {
        id: 28,
        question: "What is 'aria-busy' used for in a live region?",
        options: ["To indicate that updates are currently being made and the screen reader should wait", "To stop all updates", "To set the focus", "To hide the region"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To indicate that updates are currently being made and the screen reader should wait"
      },
      {
        id: 29,
        question: "Which WCAG success criterion requires 'Error Identification'?",
        options: ["3.3.1", "3.3.2", "3.3.3", "3.3.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.3.1"
      },
      {
        id: 30,
        question: "What is the purpose of 'aria-atomic' in a live region?",
        options: ["To indicate if the entire region should be announced, even if only part of it changed", "To stop the region from updating", "To hide the region", "To set the focus"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To indicate if the entire region should be announced, even if only part of it changed"
      }
    ]
  },
  {
    set: 5,
    domain: "Domain II: Identify accessibility issues in web solutions (40%)",
    questions: [
      {
        id: 31,
        question: "While testing a site, you find that an error message is displayed in red text, but it is not announced by a screen reader. Which success criterion is violated?",
        options: ["3.3.1 Error Identification", "1.4.1 Use of Color", "4.1.2 Name, Role, Value", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 32,
        question: "During a manual audit, you find that a page's main navigation is not consistent across different pages of the site. Which success criterion is violated?",
        options: ["3.2.3 Consistent Navigation", "3.2.4 Consistent Identification", "1.3.1 Info and Relationships", "2.4.1 Bypass Blocks"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.2.3 Consistent Navigation (Level AA)"
      },
      {
        id: 33,
        question: "When testing a page's color contrast, you find that the contrast ratio is 4:1 for normal text. Does this meet Level AA?",
        options: ["No, Level AA requires 4.5:1 for normal text", "Yes, it's fine", "Only if the text is bold", "No, it requires 7:1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "No, Level AA requires 4.5:1 for normal text (1.4.3)"
      },
      {
        id: 34,
        question: "While testing with a keyboard, you find that you can't reach a 'Cancel' button using the 'Tab' key. Which success criterion is violated?",
        options: ["2.1.1 Keyboard", "2.4.3 Focus Order", "2.4.7 Focus Visible", "3.2.1 On Focus"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.1.1 Keyboard"
      },
      {
        id: 35,
        question: "You are testing a site and find that it uses an 'aria-live' region to announce updates, but the 'aria-live' attribute is only added after the update occurs. Is this correct?",
        options: ["No, 'aria-live' must be present on the page (or on the container) before the update happens to be reliable", "Yes, it's fine", "Only if it's 'assertive'", "No, 'aria-live' is not for updates"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "No, 'aria-live' must be present on the page (or on the container) before the update happens to be reliable"
      },
      {
        id: 36,
        question: "What is the best way to test for 'Keyboard accessibility'?",
        options: ["Use only the keyboard (Tab, Enter, Space, Arrows) to navigate and interact with all elements of the page", "Use an automated tool", "Use a screen reader", "Check the HTML"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Use only the keyboard (Tab, Enter, Space, Arrows) to navigate and interact with all elements of the page"
      },
      {
        id: 37,
        question: "During testing, you find that a page has a 'Skip Link' but it doesn't actually work when you press 'Enter'. Is this a violation?",
        options: ["Yes, it violates 2.4.1 Bypass Blocks and 2.1.1 Keyboard", "No, it's fine", "Only if it's invisible", "Yes, it violates 1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, it violates 2.4.1 Bypass Blocks and 2.1.1 Keyboard"
      },
      {
        id: 38,
        question: "While testing with a screen reader, you find that a list of items is not announced as a list. Which success criterion is violated?",
        options: ["1.3.1 Info and Relationships", "1.1.1 Non-text Content", "4.1.2 Name, Role, Value", "2.4.6 Headings and Labels"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.1 Info and Relationships"
      },
      {
        id: 39,
        question: "Which of the following is a common issue for users who are blind?",
        options: ["Images without alt text", "Inaccessible forms", "Content that is not structured with headings", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 40,
        question: "While auditing, you find that a page's primary language is not defined in the HTML. Which success criterion is violated?",
        options: ["3.1.1 Language of Page", "3.1.2 Language of Parts", "1.3.1 Info and Relationships", "4.1.2 Name, Role, Value"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.1.1 Language of Page"
      },
      {
        id: 41,
        question: "What is the primary purpose of 'Manual Accessibility Testing'?",
        options: ["To find issues that automated tools cannot, like meaningful alt text and logical flow", "To speed up the audit", "To replace user testing", "To check the design"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To find issues that automated tools cannot, like meaningful alt text and logical flow"
      },
      {
        id: 42,
        question: "When testing a site with a screen reader, you find that a 'Save' button is announced as 'Save link'. Is this an issue?",
        options: ["Yes, if it's coded as a link but acts like a button, it's confusing and may violate 4.1.2", "No, it's fine", "Only if it doesn't work", "No, screen readers are just tools"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, if it's coded as a link but acts like a button, it's confusing and may violate 4.1.2"
      },
      {
        id: 43,
        question: "While testing a site, you find that it doesn't work well when the device is rotated to landscape mode. Which success criterion is violated?",
        options: ["1.3.4 Orientation", "1.4.10 Reflow", "1.4.4 Resize Text", "2.1.1 Keyboard"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.4 Orientation (WCAG 2.1)"
      },
      {
        id: 44,
        question: "If a webpage uses 'drag and drop' as the only way to reorder items, which success criterion is violated?",
        options: ["2.1.1 Keyboard", "2.5.1 Pointer Gestures", "2.5.7 Dragging Movements (WCAG 2.2)", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 45,
        question: "What is the purpose of testing with 'JAWS' on Windows?",
        options: ["To verify the accessibility experience for a large segment of screen reader users on Windows", "To test for mobile", "To check for contrast", "To test for keyboard traps only"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To verify the accessibility experience for a large segment of screen reader users on Windows"
      },
      {
        id: 46,
        question: "During testing, you find that a page has a 'form' but the labels are only visible when the user hovers over the input fields. Which success criterion is violated?",
        options: ["3.3.2 Labels or Instructions", "1.3.1 Info and Relationships", "2.4.7 Focus Visible", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 47,
        question: "While testing, you find that a site uses 'h3' for the main title and 'h1' for the sub-titles. Which success criterion is primarily affected?",
        options: ["1.3.1 Info and Relationships", "2.4.6 Headings and Labels", "2.4.2 Page Titled", "4.1.2 Name, Role, Value"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.1 Info and Relationships (Heading hierarchy is not logical)"
      },
      {
        id: 48,
        question: "Which tool is best for checking the 'DOM' structure and ARIA attributes?",
        options: ["Browser DevTools (Elements tab)", "Automated scanner", "HTML validator", "Color contrast checker"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Browser DevTools (Elements tab)"
      },
      {
        id: 49,
        question: "You are testing a page with an audio file and find that there is no transcript. Does this meet Level A?",
        options: ["No, a transcript is required for Level A (1.2.1)", "Yes, if the audio is clear", "No, transcripts are Level AAA", "Yes, if it's under 1 minute"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "No, a transcript is required for Level A (1.2.1)"
      },
      {
        id: 50,
        question: "What is the role of 'Accessibility Auditing' in the product lifecycle?",
        options: ["To evaluate the accessibility of the product at a specific point in time and provide a roadmap for fixes", "To write the code", "To design the site", "To manage the budget"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To evaluate the accessibility of the product at a specific point in time and provide a roadmap for fixes"
      },
      {
        id: 51,
        question: "While auditing, you find that a site has a 'form' but no instructions on which fields are required. Which success criterion is violated?",
        options: ["3.3.2 Labels or Instructions", "3.3.1 Error Identification", "1.3.1 Info and Relationships", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 52,
        question: "What is the benefit of testing with 'TalkBack' on Android?",
        options: ["To verify the accessibility experience for screen reader users on Android devices", "To test for desktop", "To check for contrast", "To test for keyboard traps"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To verify the accessibility experience for screen reader users on Android devices"
      },
      {
        id: 53,
        question: "During testing, you find that a page has a 'modal' but the background content is still focusable with a keyboard. Is this a violation?",
        options: ["Yes, violates 2.4.3 Focus Order and general accessibility for modals", "No, it's fine", "Only if it's not labeled", "Yes, violates 1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, violates 2.4.3 Focus Order and general accessibility for modals"
      },
      {
        id: 54,
        question: "Which of the following is a common issue for users with auditory disabilities?",
        options: ["Videos without captions", "Audio files without transcripts", "Alerts that only use sound", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 55,
        question: "While testing, you find that a page has a 'Submit' button that is visually hidden but still in the tab order. Is this an issue?",
        options: ["Yes, violates 2.4.7 Focus Visible and can be confusing for keyboard users", "No, it's fine", "Only if it doesn't work", "Yes, violates 1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, violates 2.4.7 Focus Visible and can be confusing for keyboard users"
      },
      {
        id: 56,
        question: "If a webpage has a set of tabs, how should the keyboard interaction work according to best practices?",
        options: ["Use 'Tab' to reach the tablist, and 'Arrow' keys to move between tabs, and 'Space' or 'Enter' to select a tab", "Use 'Tab' to move through every tab", "Use only the mouse", "Use keyboard shortcuts"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Use 'Tab' to reach the tablist, and 'Arrow' keys to move between tabs, and 'Space' or 'Enter' to select a tab"
      },
      {
        id: 57,
        question: "What is the purpose of testing with 'NVDA' on Windows?",
        options: ["To verify the experience for users who use this free, popular screen reader on Windows", "To test for mobile", "To check for contrast", "To test for keyboard traps"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To verify the experience for users who use this free, popular screen reader on Windows"
      },
      {
        id: 58,
        question: "During testing, you find that a page has a 'form' and an error occurs. The focus is moved automatically to the first field with an error. Is this acceptable?",
        options: ["Yes, this is an excellent practice for accessibility", "No, it's confusing", "Yes, but only for screen readers", "No, it violates 3.2.1 On Focus"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, this is an excellent practice for accessibility"
      },
      {
        id: 59,
        question: "While testing, you find that a page has a 'pop-up' that appears on hover and disappears as soon as the mouse is moved. Is this a violation?",
        options: ["Yes, violates 1.4.13 Content on Hover or Focus (WCAG 2.1)", "No, it's fine", "Only if it's not labeled", "Yes, violates 1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, violates 1.4.13 Content on Hover or Focus (WCAG 2.1)"
      },
      {
        id: 60,
        question: "Which tool is best for checking 'Conformance' levels?",
        options: ["Manual audit against the WCAG checklist", "Automated scanner", "HTML validator", "Color contrast checker"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Manual audit against the WCAG checklist"
      }
    ]
  },
  {
    set: 5,
    domain: "Domain III: Remediating issues in web solutions (20%)",
    questions: [
      {
        id: 61,
        question: "How should a developer remediate a custom 'toggle' switch?",
        options: ["Use <button role=\"switch\" aria-checked=\"true|false\"> and handle the click event", "Use a checkbox", "Use a link", "Both A and B (but B is often easier)"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "Both A and B (but B is often easier)"
      },
      {
        id: 62,
        question: "What is a key consideration when remediating a site for 'Mobile' accessibility?",
        options: ["Ensuring touch targets are large enough", "Ensuring the site works in both orientations", "Avoiding gestures that cannot be performed with a single pointer", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 63,
        question: "When remediating an image that contains text, what is the best approach?",
        options: ["Provide the same text in the 'alt' attribute", "Replace the image with actual text styled with CSS (best approach)", "Remove the image", "Leave the alt text empty"],
        distractors: [1, 3, 4],
        answer: 2,
        answerText: "Replace the image with actual text styled with CSS (best approach)"
      },
      {
        id: 64,
        question: "How can you remediate a form that has complex instructions?",
        options: ["Provide the instructions at the beginning of the form and link them to relevant fields using aria-describedby", "Put instructions in a tooltip", "Remove the instructions", "Use small font for instructions"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Provide the instructions at the beginning of the form and link them to relevant fields using aria-describedby"
      },
      {
        id: 65,
        question: "To remediate an issue where a screen reader does not announce that a menu is open, what should a developer do?",
        options: ["Update 'aria-expanded=\"true\"' when the menu opens", "Add 'aria-label=\"menu open\"'", "Change the color of the menu", "Make the menu faster"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Update 'aria-expanded=\"true\"' when the menu opens"
      },
      {
        id: 66,
        question: "What is the best way to remediate a page with inconsistent identification of components?",
        options: ["Ensure that components that have the same functionality within a set of webpages are identified consistently (3.2.4)", "Use different names for everything", "Remove the components", "Use different icons"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Ensure that components that have the same functionality within a set of webpages are identified consistently (3.2.4)"
      },
      {
        id: 67,
        question: "When remediating an issue with 'Focus Visibility', what is the first thing to check?",
        options: ["If CSS 'outline: none' or 'outline: 0' is being used without providing a visible alternative focus style", "The color of the button", "The font size", "The background contrast"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "If CSS 'outline: none' or 'outline: 0' is being used without providing a visible alternative focus style"
      },
      {
        id: 68,
        question: "How should a developer fix a site that uses color alone to convey meaning (e.g., 'Required fields are in red')?",
        options: ["Add a text indicator (e.g., 'Required') or an icon with alt text to each field", "Change the red to blue", "Make the red text bold", "Remove the red text"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Add a text indicator (e.g., 'Required') or an icon with alt text to each field"
      },
      {
        id: 69,
        question: "What is a common remediation for a site that doesn't support 'Text Spacing' (1.4.12)?",
        options: ["Ensure that the layout doesn't break and content doesn't overlap when the user increases line height, paragraph spacing, and letter spacing", "Force the user to use one set of metrics", "Remove the text", "Use images for text"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Ensure that the layout doesn't break and content doesn't overlap when the user increases line height, paragraph spacing, and letter spacing"
      },
      {
        id: 70,
        question: "When remediating a site for 'Low Vision' users, what should you ensure about 'Reflow'?",
        options: ["The content should reflow into a single column at 400% zoom without horizontal scrolling for blocks of text", "The content should disappear", "The user should use a magnifying glass", "The font should be very small"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "The content should reflow into a single column at 400% zoom without horizontal scrolling for blocks of text"
      },
      {
        id: 71,
        question: "How can you remediate a site that uses 'CAPTCHA'?",
        options: ["Provide an alternative form of CAPTCHA that uses different senses (e.g., audio) or use a non-CAPTCHA alternative (like a checkbox or honey pot)", "Remove the CAPTCHA", "Ignore the issue", "Make the CAPTCHA harder"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Provide an alternative form of CAPTCHA that uses different senses (e.g., audio) or use a non-CAPTCHA alternative (like a checkbox or honey pot)"
      },
      {
        id: 72,
        question: "What is the purpose of 'Accessibility Guidelines' within a company?",
        options: ["To provide clear standards and best practices for developers, designers, and content creators", "To slow down the project", "To satisfy legal requirements only", "To increase the budget"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To provide clear standards and best practices for developers, designers, and content creators"
      },
      {
        id: 73,
        question: "When a developer finds that a third-party library is not accessible, what should they do?",
        options: ["Try to find an accessible alternative, or fix the library if possible, or provide an accessible wrapper/alternative", "Ignore the issue", "Tell the user it's not their fault", "Remove the library"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Try to find an accessible alternative, or fix the library if possible, or provide an accessible wrapper/alternative"
      },
      {
        id: 74,
        question: "How should you remediate a site that has a 'Session Timeout'?",
        options: ["Provide a way for the user to extend the session before the timeout occurs, and warn them in advance (2.2.1)", "Let the session expire", "Make the session longer", "Hide the timeout warning"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Provide a way for the user to extend the session before the timeout occurs, and warn them in advance (2.2.1)"
      },
      {
        id: 75,
        question: "In the context of remediation, what does 'Graceful Degradation' mean?",
        options: ["The site still works for users with older technology or disabilities, even if the experience is not as rich", "The site breaks gracefully", "The site is only for new browsers", "The site is deleted"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "The site still works for users with older technology or disabilities, even if the experience is not as rich"
      }
    ]
  },
  {
    set: 6,
    domain: "Domain I: Creating Accessible Web Solutions (40%)",
    questions: [
      {
        id: 1,
        question: "Which WCAG 2.2 success criterion requires 'Target Size (Minimum)'?",
        options: ["2.5.8", "2.5.5", "2.5.3", "2.5.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.5.8 Target Size (Minimum) - Level AA"
      },
      {
        id: 2,
        question: "What is the purpose of the 'aria-live=\"polite\"' attribute?",
        options: ["To announce updates when the user is idle", "To announce updates immediately", "To hide updates", "To set the focus"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To announce updates when the user is idle"
      },
      {
        id: 3,
        question: "Which WCAG principle ensures that users can understand the information and the operation of the user interface?",
        options: ["Understandable", "Perceivable", "Operable", "Robust"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Understandable"
      },
      {
        id: 4,
        question: "In ARIA, which role is used for a container whose content is an alert message?",
        options: ["alert", "status", "log", "marquee"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "alert"
      },
      {
        id: 5,
        question: "Which success criterion addresses 'Audio Description (Prerecorded)' at Level AA?",
        options: ["1.2.5", "1.2.3", "1.2.2", "1.2.8"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.2.5"
      },
      {
        id: 6,
        question: "What is the purpose of the Authoring Tool Accessibility Guidelines (ATAG) Part A?",
        options: ["To make the authoring tool user interface accessible", "To support the production of accessible content", "To define WCAG", "To regulate browsers"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To make the authoring tool user interface accessible"
      },
      {
        id: 7,
        question: "Which WCAG Level AAA success criterion requires a contrast ratio of at least 7:1 for normal text?",
        options: ["1.4.6", "1.4.3", "1.4.11", "1.4.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.4.6 Contrast (Enhanced)"
      },
      {
        id: 8,
        question: "What does the 'aria-hidden' attribute do?",
        options: ["Hides an element and its children from the accessibility tree", "Hides an element visually only", "Makes an element focusable", "Changes the element's role"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Hides an element and its children from the accessibility tree"
      },
      {
        id: 9,
        question: "Which WCAG success criterion requires that 'Bypass Blocks' are provided?",
        options: ["2.4.1", "2.4.2", "2.4.3", "2.4.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.1"
      },
      {
        id: 10,
        question: "What is the purpose of 'aria-required'?",
        options: ["To indicate that user input is required on an element before a form may be submitted", "To make an element visible", "To set the focus", "To change the role"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To indicate that user input is required on an element before a form may be submitted"
      },
      {
        id: 11,
        question: "Which success criterion was introduced in WCAG 2.1 to address 'Pointer Cancellation'?",
        options: ["2.5.2", "2.5.1", "2.5.3", "2.5.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.5.2"
      },
      {
        id: 12,
        question: "What does 'aria-describedby' do?",
        options: ["Identifies the element (or elements) that describes the object", "Identifies the element that labels the object", "Hides the object", "Sets the focus to the object"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Identifies the element (or elements) that describes the object"
      },
      {
        id: 13,
        question: "Which WCAG success criterion addresses 'Name, Role, Value'?",
        options: ["4.1.2", "4.1.1", "1.3.1", "1.1.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "4.1.2"
      },
      {
        id: 14,
        question: "What is the purpose of the 'contentinfo' ARIA role?",
        options: ["To identify the footer area of a page", "To identify the header", "To identify the main content", "To identify a sidebar"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To identify the footer area of a page"
      },
      {
        id: 15,
        question: "Which WCAG success criterion requires that 'Focus Visible' is meet at Level AA?",
        options: ["2.4.7", "2.4.11", "2.4.3", "2.4.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.7"
      },
      {
        id: 16,
        question: "What does 'aria-valuemin' indicate?",
        options: ["The minimum allowed value for a range widget", "The maximum value", "The current value", "The font size"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "The minimum allowed value for a range widget"
      },
      {
        id: 17,
        question: "Which WCAG 2.2 success criterion addresses 'Dragging Movements'?",
        options: ["2.5.7", "2.5.8", "2.5.1", "2.5.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.5.7 (Level AA)"
      },
      {
        id: 18,
        question: "What is the purpose of the 'document' ARIA role?",
        options: ["To identify a region that contains content that is relevant to a specific document or application", "To identify a link", "To identify a button", "To identify a list"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To identify a region that contains content that is relevant to a specific document or application"
      },
      {
        id: 19,
        question: "Which WCAG success criterion requires 'Info and Relationships'?",
        options: ["1.3.1", "1.1.1", "1.3.2", "4.1.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.1"
      },
      {
        id: 20,
        question: "What is the primary focus of EN 301 549?",
        options: ["Accessibility requirements for ICT products and services", "Web accessibility only", "Mobile app accessibility only", "Hardware accessibility only"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Accessibility requirements for ICT products and services"
      },
      {
        id: 21,
        question: "Which success criterion requires 'Link Purpose (In Context)'?",
        options: ["2.4.4", "2.4.9", "2.4.1", "2.4.2"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.4"
      },
      {
        id: 22,
        question: "What is the purpose of 'aria-valuenow'?",
        options: ["To indicate the current value for a range widget", "To set the minimum value", "To set the maximum value", "To set the focus"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To indicate the current value for a range widget"
      },
      {
        id: 23,
        question: "Which WCAG success criterion addresses 'Headings and Labels'?",
        options: ["2.4.6", "2.4.1", "2.4.2", "1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.6"
      },
      {
        id: 24,
        question: "What does 'aria-checked' indicate?",
        options: ["The current 'checked' state of checkboxes, radio buttons, and other widgets", "The field is required", "The field is invalid", "The field is hidden"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "The current 'checked' state of checkboxes, radio buttons, and other widgets"
      },
      {
        id: 25,
        question: "Which WCAG success criterion addresses 'Consistent Navigation'?",
        options: ["3.2.3", "3.2.1", "3.2.2", "3.2.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.2.3"
      },
      {
        id: 26,
        question: "What is the purpose of the 'main' ARIA role?",
        options: ["To identify the primary content of the body of a document", "To identify the header", "To identify the footer", "To identify a sidebar"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To identify the primary content of the body of a document"
      },
      {
        id: 27,
        question: "Which WCAG principle ensures that content can be interpreted reliably by a wide variety of user agents, including assistive technologies?",
        options: ["Robust", "Perceivable", "Operable", "Understandable"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Robust"
      },
      {
        id: 28,
        question: "What is 'aria-modal' used for?",
        options: ["To indicate that an element is a modal dialog", "To make an element invisible", "To set the focus", "To change the background color"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To indicate that an element is a modal dialog"
      },
      {
        id: 29,
        question: "Which WCAG success criterion requires 'Error Suggestion'?",
        options: ["3.3.3", "3.3.1", "3.3.2", "3.3.4"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.3.3"
      },
      {
        id: 30,
        question: "What is the purpose of 'aria-owns'?",
        options: ["To define a logical parent-child relationship between elements that are not children in the DOM", "To set the CSS owner", "To hide the element", "To set the focus"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To define a logical parent-child relationship between elements that are not children in the DOM"
      }
    ]
  },
  {
    set: 6,
    domain: "Domain II: Identify accessibility issues in web solutions (40%)",
    questions: [
      {
        id: 31,
        question: "While testing a site, you find that a page has a 'Search' button that is an <img> tag without any alt text. Which success criterion is violated?",
        options: ["1.1.1 Non-text Content", "4.1.2 Name, Role, Value", "1.3.1 Info and Relationships", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 32,
        question: "During a manual audit, you find that a form uses only color to indicate error fields. Which success criterion is violated?",
        options: ["1.4.1 Use of Color", "3.3.1 Error Identification", "1.3.1 Info and Relationships", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 33,
        question: "When testing a page's color contrast, you find that the contrast ratio is 2:1 for large text. Does this meet Level AA?",
        options: ["No, Level AA requires 3:1 for large text", "Yes, it's fine", "Only if the text is bold", "No, it requires 4.5:1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "No, Level AA requires 3:1 for large text (1.4.3)"
      },
      {
        id: 34,
        question: "While testing with a keyboard, you find that you can't see where the focus is when tabbing through the page. Which success criterion is violated?",
        options: ["2.4.7 Focus Visible", "2.1.1 Keyboard", "2.4.3 Focus Order", "3.2.1 On Focus"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.7 Focus Visible"
      },
      {
        id: 35,
        question: "You are testing a site and find that it uses a custom 'checkbox' built with a <div>, and while it looks like a checkbox, it is not announced as one by a screen reader. Which success criterion is violated?",
        options: ["4.1.2 Name, Role, Value", "1.3.1 Info and Relationships", "1.1.1 Non-text Content", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 36,
        question: "What is the best way to test for 'Screen Reader' compatibility?",
        options: ["Use multiple screen readers (e.g., NVDA, JAWS, VoiceOver) to navigate and interact with the page", "Use an automated tool", "Check the HTML", "Check the contrast"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Use multiple screen readers (e.g., NVDA, JAWS, VoiceOver) to navigate and interact with the page"
      },
      {
        id: 37,
        question: "During testing, you find that a page has a 'Skip Link' that is always visible. Is this acceptable?",
        options: ["Yes, this is an excellent practice for accessibility", "No, it must be hidden", "No, it's confusing", "Yes, but only if it's blue"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, this is an excellent practice for accessibility"
      },
      {
        id: 38,
        question: "While testing with a screen reader, you find that a data table is missing its headers. Which success criterion is violated?",
        options: ["1.3.1 Info and Relationships", "1.1.1 Non-text Content", "4.1.2 Name, Role, Value", "2.4.6 Headings and Labels"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.1 Info and Relationships"
      },
      {
        id: 39,
        question: "Which of the following is a common issue for users with cognitive disabilities?",
        options: ["Complex language", "Inconsistent navigation", "Unpredictable behavior", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 40,
        question: "While auditing, you find that a page has a 'title' tag that is the same for every page on the site. Which success criterion is violated?",
        options: ["2.4.2 Page Titled", "2.4.1 Bypass Blocks", "1.3.1 Info and Relationships", "4.1.2 Name, Role, Value"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "2.4.2 Page Titled"
      },
      {
        id: 41,
        question: "What is the primary purpose of 'Accessibility Testing Tools'?",
        options: ["To assist in the identification of accessibility issues", "To replace manual testing", "To fix the code", "To design the site"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To assist in the identification of accessibility issues"
      },
      {
        id: 42,
        question: "When testing a site with a screen reader, you find that a 'Delete' button is announced as 'Button 123'. Is this an issue?",
        options: ["Yes, it violates 4.1.2 because the name is not meaningful", "No, it's fine", "Only if it doesn't work", "No, screen readers are just tools"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, it violates 4.1.2 because the name is not meaningful"
      },
      {
        id: 43,
        question: "While testing a site, you find that it doesn't support 'Orientation' changes. Which success criterion is violated?",
        options: ["1.3.4 Orientation (WCAG 2.1)", "1.4.10 Reflow", "1.4.4 Resize Text", "2.1.1 Keyboard"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.4 Orientation (WCAG 2.1)"
      },
      {
        id: 44,
        question: "If a webpage has a video that starts playing automatically with sound, which success criterion is violated?",
        options: ["1.4.2 Audio Control", "2.2.2 Pause, Stop, Hide", "1.2.1 Audio-only and Video-only", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 45,
        question: "What is the purpose of testing with 'VoiceOver' on macOS?",
        options: ["To verify the accessibility experience for screen reader users on Mac", "To test for mobile", "To check for contrast", "To test for keyboard traps only"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To verify the accessibility experience for screen reader users on Mac"
      },
      {
        id: 46,
        question: "During testing, you find that a page has a 'form' and when an error occurs, the error message is placed at the bottom of the page and focus is not moved. Is this a violation?",
        options: ["Yes, it may violate 3.3.1 and is a poor experience for users", "No, it's fine", "Only if it's not labeled", "Yes, it violates 1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, it may violate 3.3.1 and is a poor experience for users"
      },
      {
        id: 47,
        question: "While testing, you find that a site uses 'div' tags for all headings instead of <h1>-<h6>. Which success criterion is primarily affected?",
        options: ["1.3.1 Info and Relationships", "2.4.6 Headings and Labels", "2.4.2 Page Titled", "4.1.2 Name, Role, Value"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "1.3.1 Info and Relationships"
      },
      {
        id: 48,
        question: "Which tool is best for checking the 'Accessibility Tree'?",
        options: ["Browser DevTools (Accessibility tab)", "Automated scanner", "HTML validator", "Color contrast checker"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Browser DevTools (Accessibility tab)"
      },
      {
        id: 49,
        question: "You are testing a page with a video and find that there is no audio description. Does this meet Level AA?",
        options: ["No, audio description is required for Level AA (1.2.5)", "Yes, if there are captions", "No, audio description is Level AAA", "Yes, if it's a short video"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "No, audio description is required for Level AA (1.2.5)"
      },
      {
        id: 50,
        question: "What is the role of 'Accessibility Usability Testing'?",
        options: ["To evaluate how easy it is for people with disabilities to use the site", "To find technical bugs", "To check the code", "To manage the project"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To evaluate how easy it is for people with disabilities to use the site"
      },
      {
        id: 51,
        question: "While auditing, you find that a site has a 'form' but the error messages are vague (e.g., 'Invalid input'). Which success criterion might be relevant?",
        options: ["3.3.3 Error Suggestion", "3.3.1 Error Identification", "3.1.1 Language", "4.1.2 Name, Role, Value"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "3.3.3 Error Suggestion"
      },
      {
        id: 52,
        question: "What is the benefit of testing with 'Narrator' on Windows?",
        options: ["To verify the experience for users who use the built-in Windows screen reader", "To test for mobile", "To check for contrast", "To test for keyboard traps"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To verify the experience for users who use the built-in Windows screen reader"
      },
      {
        id: 53,
        question: "During testing, you find that a page has a 'tab' widget that doesn't work with arrow keys. Is this a violation?",
        options: ["Yes, violates 2.1.1 Keyboard and general accessibility for tabs", "No, it's fine", "Only if it's not labeled", "Yes, violates 1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, violates 2.1.1 Keyboard and general accessibility for tabs"
      },
      {
        id: 54,
        question: "Which of the following is a common issue for users with low vision?",
        options: ["Low color contrast", "Content that disappears when zoomed", "Small font sizes", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 55,
        question: "While testing, you find that a page has a 'Submit' button that is disabled and there's no visible focus indicator. Is this a violation?",
        options: ["Yes, it may violate 2.4.7 if it can be reached via keyboard but has no focus indicator", "No, it's fine", "Only if it's not labeled", "Yes, violates 1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, it may violate 2.4.7 if it can be reached via keyboard but has no focus indicator"
      },
      {
        id: 56,
        question: "If a webpage has a set of radio buttons, how should the keyboard interaction work?",
        options: ["Use 'Tab' to reach the group, and 'Arrow' keys to move between radio buttons", "Use 'Tab' to move through every radio button", "Use only the mouse", "Use keyboard shortcuts"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Use 'Tab' to reach the group, and 'Arrow' keys to move between radio buttons"
      },
      {
        id: 57,
        question: "What is the purpose of testing with 'ZoomText'?",
        options: ["To verify the experience for users who use screen magnification software", "To test for mobile", "To check for contrast", "To test for keyboard traps"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To verify the experience for users who use screen magnification software"
      },
      {
        id: 58,
        question: "During testing, you find that a page has a 'form' and when a field is focused, the page reloads. Is this a violation?",
        options: ["Yes, violates 3.2.1 On Focus", "No, it's fine", "Only if it's not labeled", "Yes, violates 1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, violates 3.2.1 On Focus"
      },
      {
        id: 59,
        question: "While testing, you find that a page has a 'pop-up' that cannot be closed with the 'Esc' key. Is this a violation?",
        options: ["Yes, violates 2.1.1 Keyboard and general accessibility for pop-ups", "No, it's fine", "Only if it's not labeled", "Yes, violates 1.3.1"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Yes, violates 2.1.1 Keyboard and general accessibility for pop-ups"
      },
      {
        id: 60,
        question: "Which tool is best for checking 'Contrast' ratios?",
        options: ["Color Contrast Analyzer", "Automated scanner", "HTML validator", "A screen reader"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Color Contrast Analyzer"
      }
    ]
  },
  {
    set: 6,
    domain: "Domain III: Remediating issues in web solutions (20%)",
    questions: [
      {
        id: 61,
        question: "How should a developer remediate a custom 'radio group'?",
        options: ["Use <input type=\"radio\"> or add the appropriate ARIA roles (radiogroup, radio) and handle keyboard arrow keys", "Use a list of links", "Use a checkbox", "Both A and B (but A is best)"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Use <input type=\"radio\"> or add the appropriate ARIA roles (radiogroup, radio) and handle keyboard arrow keys"
      },
      {
        id: 62,
        question: "What is a key consideration when remediating a site for 'Auditory' disabilities?",
        options: ["Providing captions for videos", "Providing transcripts for audio", "Ensuring alerts don't rely only on sound", "All of the above"],
        distractors: [1, 2, 3],
        answer: 4,
        answerText: "All of the above"
      },
      {
        id: 63,
        question: "When remediating an issue where content is difficult to read due to low contrast, what is the best approach?",
        options: ["Change the colors to meet WCAG contrast requirements", "Increase the font size only", "Make the font bold only", "Tell users to use a magnifier"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Change the colors to meet WCAG contrast requirements"
      },
      {
        id: 64,
        question: "How can you remediate a form that has multiple errors after submission?",
        options: ["Provide a summary of errors at the top of the form and link each error to the corresponding field", "Highlight the fields in red only", "Reset the form", "Show an alert box for each error"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Provide a summary of errors at the top of the form and link each error to the corresponding field"
      },
      {
        id: 65,
        question: "To remediate an issue where a modal dialog doesn't close with the 'Esc' key, what should a developer do?",
        options: ["Add a keyboard event listener for the 'Esc' key that closes the modal", "Add a 'Close' button only", "Change the color of the modal", "Make the modal faster"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Add a keyboard event listener for the 'Esc' key that closes the modal"
      },
      {
        id: 66,
        question: "What is the best way to remediate a page with missing primary language definition?",
        options: ["Add the 'lang' attribute to the <html> element (e.g., <html lang=\"en\">)", "Add it to every paragraph", "Remove the text", "Use a different font"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Add the 'lang' attribute to the <html> element (e.g., <html lang=\"en\">)"
      },
      {
        id: 67,
        question: "When remediating an issue with 'Focus Order', what is the first thing to check?",
        options: ["The DOM order of interactive elements", "The color of the button", "The font size", "The background contrast"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "The DOM order of interactive elements"
      },
      {
        id: 68,
        question: "How should a developer fix a site that has images with 'alt' text like 'image1.jpg'?",
        options: ["Replace the alt text with a meaningful description or set alt=\"\" if it's decorative", "Remove the images", "Change the filename", "Hide the images"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Replace the alt text with a meaningful description or set alt=\"\" if it's decorative"
      },
      {
        id: 69,
        question: "What is a common remediation for a site that uses 'justify' text alignment?",
        options: ["Change text-align to 'left' (or 'right' for RTL languages)", "Increase the font size", "Decrease the font size", "Use 'pt' instead"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Change text-align to 'left' (or 'right' for RTL languages)"
      },
      {
        id: 70,
        question: "When remediating a site for 'Screen Reader' users, what should you ensure about 'Landmarks'?",
        options: ["Use semantic HTML elements (<header>, <nav>, <main>, <footer>) or ARIA roles to identify regions of the page", "Remove all landmarks", "Use only one landmark", "Hide the landmarks"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Use semantic HTML elements (<header>, <nav>, <main>, <footer>) or ARIA roles to identify regions of the page"
      },
      {
        id: 71,
        question: "How can you remediate a site that has a 'Keyboard Trap' in a third-party widget?",
        options: ["Modify the widget's code to allow focus to leave, or replace the widget with an accessible alternative", "Remove the widget", "Ignore the issue", "Tell users to use a different browser"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Modify the widget's code to allow focus to leave, or replace the widget with an accessible alternative"
      },
      {
        id: 72,
        question: "What is the purpose of an 'Accessibility Policy' for a website?",
        options: ["To state the site's commitment to accessibility and define the standards it aims to meet", "To slow down the project", "To satisfy legal requirements only", "To increase the budget"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "To state the site's commitment to accessibility and define the standards it aims to meet"
      },
      {
        id: 73,
        question: "When a developer finds that a complex interaction is difficult to use for people with motor disabilities, what should they do?",
        options: ["Simplify the interaction or provide a simpler keyboard-accessible alternative", "Ignore the issue", "Tell the user it's not their fault", "Remove the feature"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Simplify the interaction or provide a simpler keyboard-accessible alternative"
      },
      {
        id: 74,
        question: "How should you remediate a site that has 'flashing' content?",
        options: ["Remove the flashing or ensure it flashes less than 3 times per second (2.3.1)", "Make the flashing faster", "Change the color of the flashing", "Hide the flashing"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Remove the flashing or ensure it flashes less than 3 times per second (2.3.1)"
      },
      {
        id: 75,
        question: "In the context of remediation, what does 'Shift Left' mean?",
        options: ["Integrating accessibility testing and consideration earlier in the development lifecycle", "Moving all buttons to the left", "Focusing only on mobile", "Fixing issues at the end"],
        distractors: [2, 3, 4],
        answer: 1,
        answerText: "Integrating accessibility testing and consideration earlier in the development lifecycle"
      }
    ]
  }
];
