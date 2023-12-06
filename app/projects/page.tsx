import { notoSerif } from '@/utils/fonts';
import ProjectsBentoBoxes from './ProjectsBentoBoxes';
import { Metadata } from 'next';

function ProjectsPage() {
  return (
    <main className=" my-8 flex flex-col items-center justify-center gap-8">
      <h1 className={`${notoSerif.className} animate-fade-down text-6xl`}>
        My projects.
      </h1>

      <ProjectsBentoBoxes />
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Ronnie Kaito Imagawa | Projects',
  description: 'Explore the projects I have built!',
};

export default ProjectsPage;
