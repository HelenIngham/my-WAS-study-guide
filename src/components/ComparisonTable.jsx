// components/ComparisonTable.jsx
import React from 'react';
import './ComparisonTable.css';

/**
 * ComparisonTable component for displaying data in a structured table.
 * 
 * @param {string} title - The title of the table.
 * @param {Array} headers - An array of header strings for the first row.
 * @param {Array} rows - An array of row objects. Each row is an object with a 'rowHeader' and 'data' (array of strings).
 * @param {string} classNamePrefix - Optional BEM-style prefix.
 */
export default function ComparisonTable({ title, headers, rows, classNamePrefix }) {
  const containerClass = classNamePrefix ? `${classNamePrefix}__table` : 'comparison-table';
  
  return (
    <div className={containerClass}>
      {title && <h3>{title}</h3>}
      <table>
        {headers && (
          <thead>
            <tr>
              {headers.map((header, idx) => {
                const isObject = typeof header === 'object' && header !== null;
                const content = isObject ? header.text : header;
                const colSpan = isObject ? header.colspan : undefined;
                const style = isObject && header.align ? { textAlign: header.align } : undefined;

                return (
                  <th key={idx} scope="col" colSpan={colSpan} style={style}>
                    {content}
                  </th>
                );
              })}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.rowHeader && <th scope="row">{row.rowHeader}</th>}
              {row.data.map((cell, cellIdx) => (
                <td key={cellIdx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
