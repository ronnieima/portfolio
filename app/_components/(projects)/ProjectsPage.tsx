import MaxWidthWrapper from '../MaxWidthContainer';
import SectionHeader from '../SectionHeader';
import ProjectsBentoBoxes from './ProjectsBentoBoxes';

function ProjectsPage() {
  return (
    <section id="projects" className=" relative bg-neutral-200/50 py-16">
      <MaxWidthWrapper className="">
        <SectionHeader
          header="Websites I Have Deployed"
          subtitle="Each project is a unique piece of development."
        />
        <ProjectsBentoBoxes />
      </MaxWidthWrapper>
    </section>
  );
}

export default ProjectsPage;
