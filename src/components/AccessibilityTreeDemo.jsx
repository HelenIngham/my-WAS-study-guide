// components/AccessibilityTreeDemo.jsx
import React, { useState } from 'react';
import './AccessibilityTreeDemo.css';

/**
 * Reusable Accessibility Tree Demo component
 *
 * Props:
 * - nodes: Array<{ id: string, html: string, role: string, name: string, states: string[], description: string }>
 * - title?: string
 * - intro?: string
 * - classNamePrefix?: string
 */
export default function AccessibilityTreeDemo({
  nodes = [],
  title = 'Interactive: DOM to Accessibility Tree',
  intro = 'Click on each HTML example to see how it appears in the accessibility tree:',
  classNamePrefix,
}) {
  const [selectedNode, setSelectedNode] = useState(null);

  const p = classNamePrefix;
  const sectionCls = p ? `${p}__treeDemoSection` : 'tree-demo-section';
  const containerCls = p ? `${p}__treeDemo` : 'tree-demo';
  const examplesCls = p ? `${p}__htmlExamples` : 'html-examples';
  const exampleItemCls = p ? `${p}__htmlExample` : 'html-example';
  const outputCls = p ? `${p}__treeOutput` : 'tree-output';
  const detailsCls = p ? `${p}__nodeDetails` : 'node-details';
  const roleBadgeCls = p ? `${p}__roleBadge` : 'role-badge';
  const stateBadgeCls = p ? `${p}__stateBadge` : 'state-badge';
  const noStatesCls = p ? `${p}__noStates` : 'no-states';
  const nodeDescCls = p ? `${p}__nodeDescription` : 'node-description';
  const promptCls = p ? `${p}__selectPrompt` : 'select-prompt';

  return (
    <section className={sectionCls} aria-labelledby="tree-demo-heading">
      <h2 id="tree-demo-heading">{title}</h2>
      <p>{intro}</p>

      <div className={containerCls}>
        <div className={examplesCls}>
          <h3 id="examples-list">HTML Examples</h3>
          <ul aria-labelledby="examples-list">
            {nodes.map((node) => (
              <li
                key={node.id}
                className={`${exampleItemCls} ${selectedNode?.id === node.id ? 'selected' : ''}`}
              >
                <button
                  type="button"
                  aria-pressed={selectedNode?.id === node.id}
                  onClick={() => setSelectedNode(node)}
                  className="html-example-button"
                >
                  <code>{node.html}</code>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={outputCls} aria-live="polite">
          <h3>Accessibility Tree Node</h3>
          {selectedNode ? (
            <div className={detailsCls}>
              <dl>
                <dt>Role:</dt>
                <dd><span className={roleBadgeCls}>{selectedNode.role}</span></dd>

                <dt>Name:</dt>
                <dd>{selectedNode.name}</dd>

                <dt>States:</dt>
                <dd>
                  {selectedNode.states.length > 0
                    ? selectedNode.states.map((state, i) => (
                      <span key={i} className={stateBadgeCls}>{state}</span>
                    ))
                    : <span className={noStatesCls}>(none)</span>
                  }
                </dd>
              </dl>
              <p className={nodeDescCls}>{selectedNode.description}</p>
            </div>
          ) : (
            <p className={promptCls}>← Select an HTML example to see its accessibility tree node</p>
          )}
        </div>
      </div>
    </section>
  );
}
