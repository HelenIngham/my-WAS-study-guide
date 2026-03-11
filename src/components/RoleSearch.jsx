// components/RoleSearch.jsx
import React, { useState, useMemo } from 'react';
import Grid from './Grid';
import Card from './Card';
import './RoleSearch.css';

/**
 * Reusable Role Search component
 *
 * Props:
 * - roles: Array<{ name: string, htmlEquiv: string, description: string, usage: string }>
 * - title: string
 * - description: string
 * - category: string (for unique IDs)
 */
export default function RoleSearch({
  roles = [],
  title,
  description,
  category,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRole, setExpandedRole] = useState(null);

  const filteredRoles = useMemo(() => {
    return roles.filter(
      (role) =>
        role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [roles, searchTerm]);

  return (
    <div className="role-search-panel">
      <div className="panel-header">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="search-box">
          <label
            htmlFor={`role-search-${category}`}
            className="visually-hidden"
          >
            Search roles
          </label>
          <input
            type="search"
            id={`role-search-${category}`}
            placeholder="Search roles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Grid
        classNamePrefix="roles"
        role="list"
        ariaLabel={`Filtered ${title}`}
      >
        {filteredRoles.map((role) => (
          <Card
            key={role.name}
            classNamePrefix="role"
            role="listitem"
          >
            <button
              className="role-header"
              onClick={() =>
                setExpandedRole(expandedRole === role.name ? null : role.name)
              }
              aria-expanded={expandedRole === role.name}
            >
              <span className="role-name">{role.name}</span>
              <span className="expand-icon" aria-hidden="true">
                {expandedRole === role.name ? '−' : '+'}
              </span>
            </button>

            {expandedRole === role.name && (
              <div className="role-details">
                <dl>
                  <dt>HTML Equivalent:</dt>
                  <dd>
                    <code>{role.htmlEquiv}</code>
                  </dd>

                  <dt>Description:</dt>
                  <dd>{role.description}</dd>

                  <dt>Usage Notes:</dt>
                  <dd>{role.usage}</dd>
                </dl>
              </div>
            )}
          </Card>
        ))}
      </Grid>

      {filteredRoles.length === 0 && (
        <p className="no-results">No roles match your search.</p>
      )}
    </div>
  );
}
