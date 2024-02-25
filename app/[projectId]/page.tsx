import { Button } from '@/components/ui/button';
import { notoSerif } from '@/utils/fonts';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../_components/(projects)/ProjectsBentoBoxes';
import BadgeList from './BadgeList';
import { notFound } from 'next/navigation';

function ProjectDetailPage({
  params,
}: {
  params: {
    projectId: string;
  };
}) {
  const projectId = params.projectId;
  const project = projects.find((p) => p.id === projectId);

  if (!project) notFound();
  return (
    <main className="px-4 py-[4rem] lg:mx-auto">
      <Link href={'/#projects'}>
        <Button className="flex gap-4">
          <ArrowLeft /> Back to projects
        </Button>
      </Link>

      <section className="flex flex-col items-center  py-8 lg:relative lg:mx-auto  lg:max-w-screen-xl lg:gap-8">
        <Image
          className=" w-full animate-fade-right animate-duration-1000"
          src={project.links.imageUrl}
          alt={project.imageAltText}
          width={1920}
          height={1080}
        />

        <div className="flex animate-fade-left flex-col gap-8 py-8 text-center animate-duration-1000 lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:gap-8 lg:text-left">
          <h1 className={`${notoSerif.className} text-4xl  lg:text-5xl`}>
            {project.title}
          </h1>
          <div className="flex flex-col gap-4 lg:flex-row">
            <Link href={project.links.url} target="_blank">
              <Button>Visit the website</Button>
            </Link>
            <Link href={project.links.githubUrl} target="_blank">
              <Button>View the GitHub repository</Button>
            </Link>
          </div>
          {project.technologies && (
            <div className="mx-auto lg:mx-0 lg:self-start">
              <BadgeList technologies={project.technologies} />
            </div>
          )}

          <p>{project.description}</p>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetailPage;
