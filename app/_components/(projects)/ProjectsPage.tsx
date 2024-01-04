import { notoSerif } from '@/utils/fonts';
import ProjectsBentoBoxes from './ProjectsBentoBoxes';

function ProjectsPage() {
  return (
    <section
      id="projects"
      className=" my-8 flex flex-col items-center justify-center gap-8"
    >
      <h2 className={`${notoSerif.className} animate-fade-down text-6xl`}>
        My projects.
      </h2>

      <ProjectsBentoBoxes />
    </section>
  );
}

export default ProjectsPage;
