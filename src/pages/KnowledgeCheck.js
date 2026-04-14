import React from 'react';
import KnowledgeRanker from '../components/KnowledgeRanker';
import { routes } from '../routesMeta';

const KnowledgeCheck = () => {
  // Filter out non-exam paths (Home, Resources, Site Map, Test Questions)
  const nonExamPaths = ['/', '/resources', '/site-map', '/test-questions', '/knowledge-check'];
  const examTopics = routes.filter(route => !nonExamPaths.includes(route.path));

  return (
    <div className="container py-4">
      <h1>Knowledge Level Tracker</h1>
      <p className="lead">
        Assess your current knowledge level for each exam topic. Use the traffic light system: 
        <strong> Red</strong> (Needs Study), <strong>Amber</strong> (Getting There), and <strong>Green</strong> (Mastered).
      </p>
      
      <section aria-label="Ranking List">
        <KnowledgeRanker topics={examTopics} />
      </section>
    </div>
  );
};

export default KnowledgeCheck;
