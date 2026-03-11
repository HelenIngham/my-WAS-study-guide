// components/ExamTakeaway.jsx
import React from 'react';
import './ExamTakeaway.css';

/**
 * Reusable Exam Takeaway component
 *
 * Props:
 * - title?: string (heading for the takeaway section)
 * - text?: string (optional simple text content)
 * - children?: React.ReactNode (the content of the takeaway, typically a list or paragraphs)
 * - classNamePrefix?: string (BEM-style prefix to match page-specific CSS, e.g., 'en301549')
 */
export default function ExamTakeaway({
  title = 'Exam / practice takeaway',
  text,
  children,
  classNamePrefix,
}) {
  const baseCls = classNamePrefix ? `${classNamePrefix}__takeaway` : 'exam-takeaway';
  const titleCls = classNamePrefix ? `${classNamePrefix}__takeawayTitle` : 'exam-takeaway__title';
  const textCls = classNamePrefix ? `${classNamePrefix}__takeawayText` : 'exam-takeaway__text';

  return (
    <div className={baseCls} aria-label="Study takeaway">
      <h2 className={titleCls}>{title}</h2>
      {text ? <p className={textCls}>{text}</p> : null}
      {children}
    </div>
  );
}
