import BadgeList from '@/app/[projectId]/BadgeList';
import { Button } from '@/components/ui/button';
import { notoSerif } from '@/utils/fonts';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '../MaxWidthContainer';
import { Project as ProjectType } from '@/config/content';
import { Separator } from '@/components/ui/separator';

type Props = {
  project: ProjectType;
};

export default function Project({ project }: Props) {
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-4 px-16  lg:flex-row lg:gap-16 lg:even:flex-row-reverse">
      <Link
        href={project.links.url}
        target="_blank"
        className="relative aspect-video h-32 sm:h-64"
      >
        <Image
          className="absolute h-full w-auto"
          src={project.links.imageUrl}
          alt={project.imageAltText}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>

      <div className="flex flex-col gap-2 py-8 text-center sm:text-left  lg:flex lg:flex-col lg:gap-8">
        <h3
          className={`${notoSerif.className} text-center  text-2xl font-bold sm:text-left lg:text-5xl`}
        >
          {project.title}
        </h3>
        <div className="order-last flex flex-col  justify-center gap-4 sm:flex-row  sm:justify-start">
          <Link href={project.links.url} target="_blank">
            <Button>Visit the website</Button>
          </Link>
          <Link href={project.links.githubUrl} target="_blank">
            <Button>View the GitHub repository</Button>
          </Link>
        </div>
        {project.technologies && (
          <div className="space-y-2 ">
            <h2 className="font-semibold">Technologies</h2>
            <BadgeList technologies={project.technologies} />
          </div>
        )}
        <div className="space-y-2">
          <h2 className="font-semibold">Description</h2>
          <p>{project.description}</p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
