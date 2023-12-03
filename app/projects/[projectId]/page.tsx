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
    <main className="flex flex-col items-center gap-8 px-8">
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

      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde vel
        delectus repellat dolore fugiat tempora ducimus maiores aliquam ab
        dolores possimus nihil, corrupti repudiandae quo inventore libero
        tenetur harum dolorum expedita sit laudantium nam. Assumenda animi
        accusamus voluptatum atque repudiandae! Incidunt exercitationem,
        voluptatum aliquid explicabo asperiores aperiam voluptate consequuntur
        vel numquam illum sint nesciunt eveniet culpa nihil reprehenderit
        laudantium perferendis maiores earum ducimus dolorem. Obcaecati nihil
        reiciendis sequi ab. Nihil aliquid quia veritatis officiis labore
        quaerat, modi ab tempora in numquam ex aspernatur dolorum, nobis, nisi
        dolorem! Nisi eaque facilis quasi, nesciunt nam odio saepe voluptatum ut
        sed voluptas!
      </p>
      {/* Render other details of the project */}
    </main>
  );
}

export default ProjectDetailPage;
