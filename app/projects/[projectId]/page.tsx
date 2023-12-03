'use client';

import { useParams } from 'next/navigation';
import { projects } from '../ProjectsBentoBoxes';
import Image from 'next/image';
import { notoSerif } from '@/utils/fonts';
import BadgeList from './BadgeList';

function ProjectDetailPage() {
  const { projectId } = useParams();

  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="flex flex-col items-center gap-8 px-4 py-8">
      <Image
        src={project.imageUrl}
        alt={project.imageAltText}
        width={500}
        height={358}
      />
      <h1 className={`${notoSerif.className} text-5xl`}>{project.title}</h1>
      {project.technologies && (
        <BadgeList technologies={project.technologies} />
      )}

      <p className="text-center">{project.description}</p>
    </main>
  );
}

export default ProjectDetailPage;
