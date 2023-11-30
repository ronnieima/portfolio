import { notoSerif } from '@/utils/fonts';
import ProjectsBentoBoxes from './ProjectsBentoBoxes';

function ProjectsPage() {
  return (
    <main className=" my-8 flex flex-col items-center justify-center">
      <h1 className={`${notoSerif.className} text-6xl`}>my projects.</h1>

      <ProjectsBentoBoxes />
    </main>
  );
}

export default ProjectsPage;
