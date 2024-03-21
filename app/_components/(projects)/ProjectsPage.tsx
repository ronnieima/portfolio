import { projects } from '@/config/content';
import MaxWidthWrapper from '../MaxWidthContainer';
import SectionHeader from '../SectionHeader';
import Project from './Project';

function ProjectsPage() {
  return (
    <section id="projects" className=" relative bg-neutral-200/50 py-16">
      <MaxWidthWrapper className="">
        <SectionHeader
          header="Websites I Have Deployed"
          subtitle="Each project is a unique piece of development."
        />
        {/* <ProjectsBentoBoxes /> */}
        <div className="space-y-32 py-16">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default ProjectsPage;
