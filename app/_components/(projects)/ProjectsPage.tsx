import MaxWidthWrapper from '../MaxWidthContainer';
import SectionHeader from '../SectionHeader';
import ProjectsBentoBoxes from './ProjectsBentoBoxes';

function ProjectsPage() {
  return (
    <section id="projects" className=" relative  py-[8rem]">
      <div className="pointer-events-none absolute inset-0  hidden items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)] dark:bg-black sm:flex"></div>
      <MaxWidthWrapper className="px-4">
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
