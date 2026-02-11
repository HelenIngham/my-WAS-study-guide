import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';

// Pages
import Home from './pages/Home';
import Resources from './pages/Resources';

// Domain One - A
import DomainOne from './pages/DomainOne';
import GuidelinePrinciples from './pages/DomainOne/A-Guidelines-principles-and-techniques-for-meeting-success-criteria';
import W3CGuidelinesandSpecifications from './pages/DomainOne/A-Guidelines-principles-and-techniques-for-meeting-success-criteria/1W3CGuidelinesandSpecifications';
import EuropeanAccessibilityStandardEN301549 from './pages/DomainOne/A-Guidelines-principles-and-techniques-for-meeting-success-criteria/2EuropeanAccessibilityStandardEN301549';

// Domain One - B
import BasicKnowledgeOfProgramming from './pages/DomainOne/B-Basic-knowledge-of-programming';
import SupportForJavaScriptInAccessibilityAPIsAssistiveTechnologies from './pages/DomainOne/B-Basic-knowledge-of-programming/1SupportForJavaScriptInAccessibilityAPIsAssistiveTechnologies';
import SemanticHTMLandCustomControls from './pages/DomainOne/B-Basic-knowledge-of-programming/2SemanticHTMLandCustomControls';
import DeviceIndependentEventHandlers from './pages/DomainOne/B-Basic-knowledge-of-programming/3DeviceIndependentEventHandlers';
import SimplifyEvents from './pages/DomainOne/B-Basic-knowledge-of-programming/4SimplifyEvents';
import DynamicContent from './pages/DomainOne/B-Basic-knowledge-of-programming/5DynamicContent';
import ManagingFocus from './pages/DomainOne/B-Basic-knowledge-of-programming/6ManagingFocus';
import ManagingState from './pages/DomainOne/B-Basic-knowledge-of-programming/7ManagingState';

// Domain One - C
import InteractiveWidgets from './pages/DomainOne/C-Create-Interactive-Controls-Widgets-Based-On-Accessibility-Best-Practices';

// Domain One - D
import UsingAria from './pages/DomainOne/D-Using-ARIA';
import UnderstandingAccessibleNamesAndDescriptions from './pages/DomainOne/D-Using-ARIA/1UnderstandingAccessibleNamesAndDescriptions';
import ARIAAuthoringPracticeGuide from './pages/DomainOne/D-Using-ARIA/2ARIAAuthoringPracticeGuide';
import KeyboardInteractionAndFocusManagementWithinComponents from './pages/DomainOne/D-Using-ARIA/3KeyboardInteractionAndFocusManagementWithinComponents';
import TheAccessibilityTreeAndItsImpactOnUsersOfAssistiveTechnology from './pages/DomainOne/D-Using-ARIA/4TheAccessibilityTreeAndItsImpactOnUsersOfAssistiveTechnology';
import WAIARIARolesStatesAndProperties from './pages/DomainOne/D-Using-ARIA/5WAI-ARIARolesStatesAndProperties';

// Domain One - E
import AccessibilitySupportedTechnologies from './pages/DomainOne/E-Accessibility-supported-technologies';
import ScreenReaders from './pages/DomainOne/E-Accessibility-supported-technologies/1ScreenReaders';

// Domain One - F
import StandardControlsVsCustomControls from './pages/DomainOne/F-Standard-controls-vs-custom-controls';
import StandardControls from './pages/DomainOne/F-Standard-controls-vs-custom-controls/1StandardControls';
import CustomControls from './pages/DomainOne/F-Standard-controls-vs-custom-controls/2CustomControls';

// Domain One - G
import SinglePageApplications from './pages/DomainOne/G-Single-page-applications';

// Domain One - H
import StrategiesOfPersonsWithDisabilities from './pages/DomainOne/H-Strategies-of-persons-with-disabilities-in-using-web-solutions';
import UsersWithoutVision from './pages/DomainOne/H-Strategies-of-persons-with-disabilities-in-using-web-solutions/1UsersWithoutVision';
import UsersWithLowVision from './pages/DomainOne/H-Strategies-of-persons-with-disabilities-in-using-web-solutions/2UsersWithLowVision';
import UsersWithLimitedReadingCapacities from './pages/DomainOne/H-Strategies-of-persons-with-disabilities-in-using-web-solutions/3UsersWithLimitedReadingCapacities';
import UsersWithCognitiveDisabilities from './pages/DomainOne/H-Strategies-of-persons-with-disabilities-in-using-web-solutions/4UsersWithCognitiveDisabilities';
import UsersWithMotorDisabilities from './pages/DomainOne/H-Strategies-of-persons-with-disabilities-in-using-web-solutions/5UsersWithMotorDisabilities';
import UsersWithAuditoryDisabilities from './pages/DomainOne/H-Strategies-of-persons-with-disabilities-in-using-web-solutions/6UsersWithAuditoryDisabilities';

// Domain Two - A
import DomainTwo from './pages/DomainTwo';
import InteroperabilityAndCompatibilityIssues from './pages/DomainTwo/A-Interoperability-and-compatibility-issues';

// Domain Two - B
import IdentifyingGuidelinesAndPrinciplesRegardingIssues from './pages/DomainTwo/B-Identifying-guidelines-and-principles-regarding-issues';
import AccessibilityTargetLevel from './pages/DomainTwo/B-Identifying-guidelines-and-principles-regarding-issues/1AccessibilityTargetLevel';
import ConformanceRequirements from './pages/DomainTwo/B-Identifying-guidelines-and-principles-regarding-issues/2ConformanceRequirements';
import WCAGEM from './pages/DomainTwo/B-Identifying-guidelines-and-principles-regarding-issues/3WCAG-EM';
import AssigningSuccessCriteriaAndFailures from './pages/DomainTwo/B-Identifying-guidelines-and-principles-regarding-issues/4AssigningSuccessCriteriaAndFailures';
import AccessibilityGuidelineLimitations from './pages/DomainTwo/B-Identifying-guidelines-and-principles-regarding-issues/5AccessibilityGuidelineLimitations';

// Domain Two - C
import TestingWithAssistiveTechnologies from './pages/DomainTwo/C-Testing-with-assistive-technologies';
import IdentifyIssuesForScreenReaderUsers from './pages/DomainTwo/C-Testing-with-assistive-technologies/1IdentifyIssuesForScreenReaderUsers';
import IdentifyIssuesForUsersWhoUseAKeyboardOrAlternativeInputDevice from './pages/DomainTwo/C-Testing-with-assistive-technologies/2IdentifyIssuesForUsersWhoUseAKeyboardOrAlternativeInputDevice';
import IdentifyIssuesForUsersWithAuditoryDisabilities from './pages/DomainTwo/C-Testing-with-assistive-technologies/3IdentifyIssuesForUsersWithAuditoryDisabilities';
import IdentifyIssuesForUsersWithLowVision from './pages/DomainTwo/C-Testing-with-assistive-technologies/4IdentifyIssuesForUsersWithLowVision';
import IdentifyIssuesForUsersWithCognitiveOrLearningDisabilities from './pages/DomainTwo/C-Testing-with-assistive-technologies/5IdentifyIssuesForUsersWithCognitiveOrLearningDisabilities';
import IdentifyIssuesForTouchUsers from './pages/DomainTwo/C-Testing-with-assistive-technologies/6IdentifyIssuesForTouchUsers';

// Domain Two - D
import TestingToolsForTheWeb from './pages/DomainTwo/D-Testing-tools-for-the-web';
import ACTRules from './pages/DomainTwo/D-Testing-tools-for-the-web/1ACTRules';
import AutomatedTestingTools from './pages/DomainTwo/D-Testing-tools-for-the-web/2AutomatedTestingTools';

// Domain Two - E
import AccessibilityQualityAssurance from './pages/DomainTwo/E-Accessibility-quality-assurance';
import PlanningManagingAndImplementingAccessibility from './pages/DomainTwo/E-Accessibility-quality-assurance/1PlanningManagingAndImplementingAccessibility';

// Domain Two - F
import TestingWithAssistiveTechnologiesF from './pages/DomainTwo/F-Testing-with-assistive-technologies';
import ScreenReaderTesting from './pages/DomainTwo/F-Testing-with-assistive-technologies/1ScreenReaderTesting';
import KeyboardTesting from './pages/DomainTwo/F-Testing-with-assistive-technologies/2KeyboardTesting';
import ContentTesting from './pages/DomainTwo/F-Testing-with-assistive-technologies/3ContentTesting';
import UsabilityTesting from './pages/DomainTwo/F-Testing-with-assistive-technologies/4UsabilityTesting';

// Domain Two - G
import TestingForEndUserImpact from './pages/DomainTwo/G-Testing-for-end-user-impact';

// Domain Two - H
import TestingToolsForTheWebH from './pages/DomainTwo/H-Testing-tools-for-the-web';

// Domain Three - A
import DomainThree from './pages/DomainThree';
import LevelsOfSeverityAndPrioritizationOfIssues from './pages/DomainThree/A-Level-of-severity-and-prioritization-of-issues';
import PrioritizingAccessibilityIssues from './pages/DomainThree/A-Level-of-severity-and-prioritization-of-issues/1PrioritizingAccessibilityIssues';
import RecommendStrategiesAndOrTechniquesForFixingAccessibilityIssues from './pages/DomainThree/A-Level-of-severity-and-prioritization-of-issues/2RecommendStrategiesAndOrTechniquesForFixingAccessibilityIssues';

// Domain Three - B
import RecommendationOfStrategiesAndTechniquesForFixingIssues from './pages/DomainThree/B-Recommending-strategies-and-or-techniques-for-fixing-issue';
import DistinguishingBetweenFailuresAndOptionalBestPractices from './pages/DomainThree/B-Recommending-strategies-and-or-techniques-for-fixing-issue/1DistinguishingBetweenFailuresAndOptionalBestPractices';
import FixingVsRedesign from './pages/DomainThree/B-Recommending-strategies-and-or-techniques-for-fixing-issue/2FixingVsRedesign';

// Domain Three - C
import IntegrateAccessibilityIntoTheProcurementProcess from './pages/DomainThree/C-Integrate-Accessibility-into-the-Procurement-Process';
import RoleOfAccessibilityExperts from './pages/DomainThree/C-Integrate-Accessibility-into-the-Procurement-Process/1RoleOfAccessibilityExperts';
import AccessibilityConformanceReports from './pages/DomainThree/C-Integrate-Accessibility-into-the-Procurement-Process/2AccessibilityConformanceReports';
import MitigatingAccessibilityDefects from './pages/DomainThree/C-Integrate-Accessibility-into-the-Procurement-Process/3MitigatingAccessibilityDefects';
import UsingAnAccessibleProcurementMaturityModel from './pages/DomainThree/C-Integrate-Accessibility-into-the-Procurement-Process/4UsingAnAccessibleProcurementMaturityModel';

function App() {
    return (
        <Router>
            <div className="app-shell">
                <Menu />
                <Breadcrumbs />
                <main className="app-main">
                    <Routes>
                        {/* Home and Resources */}
                        <Route path="/" element={<Home />} />
                        <Route path="/resources" element={<Resources />} />

                        {/* Domain One */}
                        <Route path="/domain-one" element={<DomainOne />} />

                        {/* Domain One - A */}
                        <Route path="/domain-one/a" element={<GuidelinePrinciples />} />
                        <Route path="/domain-one/a/w3c-guidelines" element={<W3CGuidelinesandSpecifications />} />
                        <Route path="/domain-one/a/en301-standard" element={<EuropeanAccessibilityStandardEN301549 />} />

                        {/* Domain One - B */}
                        <Route path="/domain-one/b" element={<BasicKnowledgeOfProgramming />} />
                        <Route path="/domain-one/b/javascript-support" element={<SupportForJavaScriptInAccessibilityAPIsAssistiveTechnologies />} />
                        <Route path="/domain-one/b/semantic-html" element={<SemanticHTMLandCustomControls />} />
                        <Route path="/domain-one/b/event-handlers" element={<DeviceIndependentEventHandlers />} />
                        <Route path="/domain-one/b/simplify-events" element={<SimplifyEvents />} />
                        <Route path="/domain-one/b/dynamic-content" element={<DynamicContent />} />
                        <Route path="/domain-one/b/managing-focus" element={<ManagingFocus />} />
                        <Route path="/domain-one/b/managing-state" element={<ManagingState />} />

                        {/* Domain One - C */}
                        <Route path="/domain-one/c" element={<InteractiveWidgets />} />

                        {/* Domain One - D */}
                        <Route path="/domain-one/d" element={<UsingAria />} />
                        <Route path="/domain-one/d/accessible-names" element={<UnderstandingAccessibleNamesAndDescriptions />} />
                        <Route path="/domain-one/d/authoring-practices" element={<ARIAAuthoringPracticeGuide />} />
                        <Route path="/domain-one/d/keyboard-interaction" element={<KeyboardInteractionAndFocusManagementWithinComponents />} />
                        <Route path="/domain-one/d/accessibility-tree" element={<TheAccessibilityTreeAndItsImpactOnUsersOfAssistiveTechnology />} />
                        <Route path="/domain-one/d/aria-roles" element={<WAIARIARolesStatesAndProperties />} />

                        {/* Domain One - E */}
                        <Route path="/domain-one/e" element={<AccessibilitySupportedTechnologies />} />
                        <Route path="/domain-one/e/screen-readers" element={<ScreenReaders />} />

                        {/* Domain One - F */}
                        <Route path="/domain-one/f" element={<StandardControlsVsCustomControls />} />
                        <Route path="/domain-one/f/standard-controls" element={<StandardControls />} />
                        <Route path="/domain-one/f/custom-controls" element={<CustomControls />} />

                        {/* Domain One - G */}
                        <Route path="/domain-one/g" element={<SinglePageApplications />} />

                        {/* Domain One - H */}
                        <Route path="/domain-one/h" element={<StrategiesOfPersonsWithDisabilities />} />
                        <Route path="/domain-one/h/users-without-vision" element={<UsersWithoutVision />} />
                        <Route path="/domain-one/h/users-low-vision" element={<UsersWithLowVision />} />
                        <Route path="/domain-one/h/users-limited-reading" element={<UsersWithLimitedReadingCapacities />} />
                        <Route path="/domain-one/h/users-cognitive-disabilities" element={<UsersWithCognitiveDisabilities />} />
                        <Route path="/domain-one/h/users-motor-disabilities" element={<UsersWithMotorDisabilities />} />
                        <Route path="/domain-one/h/users-auditory-disabilities" element={<UsersWithAuditoryDisabilities />} />

                        {/* Domain Two */}
                        <Route path="/domain-two" element={<DomainTwo />} />

                        {/* Domain Two - A */}
                        <Route path="/domain-two/a" element={<InteroperabilityAndCompatibilityIssues />} />

                        {/* Domain Two - B */}
                        <Route path="/domain-two/b" element={<IdentifyingGuidelinesAndPrinciplesRegardingIssues />} />
                        <Route path="/domain-two/b/accessibility-target-level" element={<AccessibilityTargetLevel />} />
                        <Route path="/domain-two/b/conformance-requirements" element={<ConformanceRequirements />} />
                        <Route path="/domain-two/b/wcag-em" element={<WCAGEM />} />
                        <Route path="/domain-two/b/success-criteria-failures" element={<AssigningSuccessCriteriaAndFailures />} />
                        <Route path="/domain-two/b/guideline-limitations" element={<AccessibilityGuidelineLimitations />} />

                        {/* Domain Two - C */}
                        <Route path="/domain-two/c" element={<TestingWithAssistiveTechnologies />} />
                        <Route path="/domain-two/c/screen-reader-issues" element={<IdentifyIssuesForScreenReaderUsers />} />
                        <Route path="/domain-two/c/keyboard-issues" element={<IdentifyIssuesForUsersWhoUseAKeyboardOrAlternativeInputDevice />} />
                        <Route path="/domain-two/c/auditory-issues" element={<IdentifyIssuesForUsersWithAuditoryDisabilities />} />
                        <Route path="/domain-two/c/low-vision-issues" element={<IdentifyIssuesForUsersWithLowVision />} />
                        <Route path="/domain-two/c/cognitive-issues" element={<IdentifyIssuesForUsersWithCognitiveOrLearningDisabilities />} />
                        <Route path="/domain-two/c/touch-issues" element={<IdentifyIssuesForTouchUsers />} />

                        {/* Domain Two - D */}
                        <Route path="/domain-two/d" element={<TestingToolsForTheWeb />} />
                        <Route path="/domain-two/d/act-rules" element={<ACTRules />} />
                        <Route path="/domain-two/d/automated-testing-tools" element={<AutomatedTestingTools />} />

                        {/* Domain Two - E */}
                        <Route path="/domain-two/e" element={<AccessibilityQualityAssurance />} />
                        <Route path="/domain-two/e/planning-managing" element={<PlanningManagingAndImplementingAccessibility />} />

                        {/* Domain Two - F */}
                        <Route path="/domain-two/f" element={<TestingWithAssistiveTechnologiesF />} />
                        <Route path="/domain-two/f/screen-reader-testing" element={<ScreenReaderTesting />} />
                        <Route path="/domain-two/f/keyboard-testing" element={<KeyboardTesting />} />
                        <Route path="/domain-two/f/content-testing" element={<ContentTesting />} />
                        <Route path="/domain-two/f/usability-testing" element={<UsabilityTesting />} />

                        {/* Domain Two - G */}
                        <Route path="/domain-two/g" element={<TestingForEndUserImpact />} />

                        {/* Domain Two - H */}
                        <Route path="/domain-two/h" element={<TestingToolsForTheWebH />} />

                        {/* Domain Three */}
                        <Route path="/domain-three" element={<DomainThree />} />

                        {/* Domain Three - A */}
                        <Route path="/domain-three/a" element={<LevelsOfSeverityAndPrioritizationOfIssues />} />
                        <Route path="/domain-three/a/prioritizing-issues" element={<PrioritizingAccessibilityIssues />} />
                        <Route path="/domain-three/a/recommend-strategies" element={<RecommendStrategiesAndOrTechniquesForFixingAccessibilityIssues />} />

                        {/* Domain Three - B */}
                        <Route path="/domain-three/b" element={<RecommendationOfStrategiesAndTechniquesForFixingIssues />} />
                        <Route path="/domain-three/b/failures-vs-practices" element={<DistinguishingBetweenFailuresAndOptionalBestPractices />} />
                        <Route path="/domain-three/b/fixing-vs-redesign" element={<FixingVsRedesign />} />

                        {/* Domain Three - C */}
                        <Route path="/domain-three/c" element={<IntegrateAccessibilityIntoTheProcurementProcess />} />
                        <Route path="/domain-three/c/accessibility-experts" element={<RoleOfAccessibilityExperts />} />
                        <Route path="/domain-three/c/conformance-reports" element={<AccessibilityConformanceReports />} />
                        <Route path="/domain-three/c/mitigating-defects" element={<MitigatingAccessibilityDefects />} />
                        <Route path="/domain-three/c/procurement-maturity-model" element={<UsingAnAccessibleProcurementMaturityModel />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;