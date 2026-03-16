import React, { useState } from 'react';
import './ClearContentSimulator.css';

/**
 * ClearContentSimulator component
 * 
 * Illustrates the difference between complex/unclear content and 
 * clear/concise content, which is crucial for users with cognitive or learning disabilities.
 */
export default function ClearContentSimulator() {
  const [isSimplified, setIsSimplified] = useState(false);

  const complexContent = {
    title: "Terms and Conditions of Service Utilization",
    instructions: "In order to proceed with the initialization of your user profile, it is imperative that you furnish us with all the requisite details as enumerated in the subsequent fields. Failure to provide comprehensive data may result in the deferral of your account activation.",
    label: "Please input your legal nomenclature as it appears on your birth certificate",
    button: "Initiate Registration Process",
    feedback: "The credentials provided do not correspond with our historical data records. Please rectify the discrepancies and re-submit."
  };

  const simplifiedContent = {
    title: "Sign Up",
    instructions: "Please fill out the form below to create your account. We need this information to set up your profile.",
    label: "Full Name",
    button: "Sign Up",
    feedback: "The name you entered does not match our records. Please check it and try again."
  };

  const current = isSimplified ? simplifiedContent : complexContent;

  return (
    <section className="clear-content-simulator" aria-labelledby="cc-sim-title">
      <h3 id="cc-sim-title">Activity: Writing for Clarity</h3>
      <p>Users with cognitive and learning disabilities benefit from clear, concise language and consistent layout. Compare the "Complex" version with the "Clear" version.</p>
      
      <div className="cc-controls">
        <button 
          className={`cc-toggle-btn ${!isSimplified ? 'active' : ''}`}
          onClick={() => setIsSimplified(false)}
          aria-pressed={!isSimplified}
        >
          Complex Version
        </button>
        <button 
          className={`cc-toggle-btn ${isSimplified ? 'active' : ''}`}
          onClick={() => setIsSimplified(true)}
          aria-pressed={isSimplified}
        >
          Clear Version
        </button>
      </div>

      <div className={`cc-preview-area ${isSimplified ? 'simplified' : 'complex'}`} aria-live="polite">
        <div className="cc-form-mockup">
          <h4>{current.title}</h4>
          <p className="cc-instructions">{current.instructions}</p>
          
          <div className="cc-input-group">
            <label htmlFor="cc-mock-input">{current.label}:</label>
            <input type="text" id="cc-mock-input" placeholder={isSimplified ? "e.g. John Smith" : ""} />
          </div>
          
          <button className="cc-submit-mock" type="button">{current.button}</button>
          
          <div className="cc-feedback-mock" role="alert">
            <p>{current.feedback}</p>
          </div>
        </div>
      </div>

      <div className="cc-reflection">
        <p><strong>Takeaway:</strong> {isSimplified 
          ? "Clear headings, simple instructions, and concise error messages reduce the cognitive load needed to understand and use a page." 
          : "Complex language, 'jargon', and long sentences can be a major barrier for people with cognitive disabilities, causing frustration and abandonment."}
        </p>
      </div>
    </section>
  );
}
