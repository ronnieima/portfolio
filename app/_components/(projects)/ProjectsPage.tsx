import MaxWidthWrapper from '../MaxWidthContainer';
import SectionHeader from '../SectionHeader';
import ProjectsBentoBoxes from './ProjectsBentoBoxes';

function ProjectsPage() {
  return (
    <section id="projects" className=" relative  py-[8rem]">
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
