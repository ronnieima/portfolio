import { notoSerif } from '@/utils/fonts';
import ProjectsBentoBoxes from './ProjectsBentoBoxes';

function ProjectsPage() {
  return (
    <section
      id="projects"
      className=" relative flex flex-col items-center justify-center gap-8"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <h2 className={`${notoSerif.className} animate-fade-down text-6xl`}>
        My projects.
      </h2>

      <ProjectsBentoBoxes />
    </section>
  );
}

export default ProjectsPage;
