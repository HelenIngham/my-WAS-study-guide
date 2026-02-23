// components/PageNav.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPrevNext, routes } from '../routesMeta';
import './PageNav.css';

function labelFor(path) {
  const meta = routes.find(r => r.path === path);
  return meta ? meta.label : path;
}

export default function PageNav() {
  const { pathname } = useLocation();

  // Compute defaults from global order
  let { prev, next } = getPrevNext(pathname);

  // Special-case: on section overview pages, Back should go to the parent domain overview
  // e.g., /domain-one/d -> /domain-one
  const domainSectionMatch = pathname.match(/^\/(domain-one|domain-two|domain-three)\/[a-h]$/);
  if (domainSectionMatch) {
    const domain = domainSectionMatch[1];
    prev = routes.find(r => r.path === `/${domain}`) || prev;
  }

  // Special-case: on top-level domain overview, Back should go to Home
  if (pathname === '/domain-one' || pathname === '/domain-two' || pathname === '/domain-three') {
    prev = routes.find(r => r.path === '/') || prev;
  }

  // If neither prev nor next, render nothing
  if (!prev && !next) return null;

  return (
    <nav className="page-navigation" aria-label="Page navigation">
      {prev ? (
        <Link to={prev.path} className="nav-link prev">
          {/* exact phrasing per Domain D style */}
          ← Previous: {labelFor(prev.path)}
        </Link>
      ) : <span />}
      {next ? (
        <Link to={next.path} className="nav-link next">
          Next: {labelFor(next.path)} →
        </Link>
      ) : <span />}
    </nav>
  );
}
