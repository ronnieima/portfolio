import { projects } from '@/config/content';
import React from 'react';
import MaxWidthWrapper from '../MaxWidthContainer';
import SectionHeader from '../SectionHeader';
import Project from './Project';

function ProjectSection() {
  return (
    <section id="projects" className=" relative bg-neutral-200/50 py-16">
      <MaxWidthWrapper className="">
        <SectionHeader
          header="Websites I Have Deployed"
          subtitle="View my featured projects."
        />
        <div className="space-y-32 py-16">
          {projects.map((project) => (
            <React.Fragment key={project.id}>
              <Project project={project} />
            </React.Fragment>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default ProjectSection;
