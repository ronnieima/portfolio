'use client';

import { useParams } from 'next/navigation';
import { projects } from '../ProjectsBentoBoxes';
import Image from 'next/image';
import { notoSerif } from '@/utils/fonts';
import BadgeList from './BadgeList';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function ProjectDetailPage() {
  const { projectId } = useParams();
  console.log(projectId);

  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    return <div>Project not found</div>;
  }
  console.log(project.links.url);
  return (
    <main className="flex flex-col items-center px-4 py-8 lg:relative lg:mx-auto lg:grid lg:max-w-screen-xl lg:grid-cols-2 lg:gap-8">
      <Image
        className=" w-full"
        src={project.links.imageUrl}
        alt={project.imageAltText}
        width={500}
        height={358}
      />
      <div className="flex flex-col gap-8 py-8 text-center lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:gap-8 lg:text-left">
        <h1 className={`${notoSerif.className}  text-5xl`}>{project.title}</h1>
        {project.technologies && (
          <div className="mx-auto lg:mx-0 lg:self-start">
            <BadgeList technologies={project.technologies} />
          </div>
        )}
        <p>{project.description}</p>
        <div className="flex flex-col gap-4 lg:flex-row">
          <Button asChild>
            <Link href={project.links.url} target="_blank">
              Visit the website
            </Link>
          </Button>
          <Button>
            <Link href={project.links.githubUrl} target="_blank">
              View the GitHub repository
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetailPage;
