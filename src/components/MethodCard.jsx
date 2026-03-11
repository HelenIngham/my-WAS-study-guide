// components/MethodCard.jsx
import React from 'react';
import './MethodCard.css';

/**
 * Reusable MethodCard component for documenting accessibility labeling methods
 *
 * Props:
 * - title: string (the name of the method)
 * - useWhen: string (description of when to use the method)
 * - code: string (example code block)
 * - pros: Array<string> (list of advantages)
 * - cons: Array<string> (list of disadvantages)
 * - role?: string (ARIA role, defaults to 'listitem')
 * - classNamePrefix?: string (optional BEM prefix)
 */
export default function MethodCard({
  title,
  useWhen,
  code,
  pros = [],
  cons = [],
  role = 'listitem',
  classNamePrefix,
}) {
  const base = classNamePrefix ? `${classNamePrefix}__methodCard` : 'method-card';
  const titleCls = classNamePrefix ? `${classNamePrefix}__methodTitle` : 'method-card__title';
  const codeCls = classNamePrefix ? `${classNamePrefix}__methodCode` : 'method-card__code';
  const listCls = classNamePrefix ? `${classNamePrefix}__prosCons` : 'pros-cons';

  return (
    <div className={base} role={role}>
      {title ? <h3 className={titleCls}>{title}</h3> : null}
      {useWhen ? <p><strong>Use when:</strong> {useWhen}</p> : null}
      
      {code ? (
        <pre className={codeCls}>
          <code>{code}</code>
        </pre>
      ) : null}

      {(pros.length > 0 || cons.length > 0) && (
        <ul className={listCls}>
          {pros.map((pro, index) => (
            <li key={`pro-${index}`} className="pro">✓ {pro}</li>
          ))}
          {cons.map((con, index) => (
            <li key={`con-${index}`} className="con">✗ {con}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
