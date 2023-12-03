import React from 'react';
import { projects } from '../ProjectsBentoBoxes';

function ProjectPage({ params, searchParams }) {
  console.log(params);
  return <div>Test{params}</div>;
}

export default ProjectPage;
