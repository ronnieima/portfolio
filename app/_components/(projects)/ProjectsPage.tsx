import { projects } from '@/config/content';
import MaxWidthWrapper from '../MaxWidthContainer';
import SectionHeader from '../SectionHeader';
import Project from './Project';
import { Separator } from '@/components/ui/separator';
import React from 'react';

function ProjectsPage() {
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

export default ProjectsPage;
