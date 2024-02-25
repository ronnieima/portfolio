import { notoSerif } from '@/utils/fonts';
import ProjectsBentoBoxes from './ProjectsBentoBoxes';

function ProjectsPage() {
  return (
    <section className=" relative flex flex-col items-center justify-center gap-8 py-[8rem]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div>
        <h2
          id="projects"
          className={`${notoSerif.className} animate-fade-down text-center text-6xl`}
        >
          Projects
        </h2>
        <ProjectsBentoBoxes />
      </div>
    </section>
  );
}

export default ProjectsPage;
