import { notoSerif } from '@/utils/fonts';
import ProjectsBentoBoxes from './ProjectsBentoBoxes';
import MaxWidthWrapper from '../MaxWidthWrapper';
import SectionHeader from '../SectionHeader';

function ProjectsPage() {
  return (
    <section className=" relative  px-8 py-[8rem]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black"></div>
      <MaxWidthWrapper>
        <SectionHeader
          id="projects"
          header="Portfolio Projects"
          subtitle="Each project is a unique piece of development."
        />

        <ProjectsBentoBoxes />
      </MaxWidthWrapper>
    </section>
  );
}

export default ProjectsPage;
