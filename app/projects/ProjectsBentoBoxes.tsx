import React from 'react';
import BentoBox from './BentoBox';
import Image from 'next/image';
import { calculatorUrl, portfolioImageUrl } from '@/utils/imageUrls';
import Link from 'next/link';

export type Project = {
  title?: string;
  url: string;
  imageUrl?: string;
  imageAltText?: string;
  className?: string;
};

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    url: '#',
    imageUrl: portfolioImageUrl,
    imageAltText: 'My Portfolio Website',
    className: 'col-span-full animate-fade-right',
  },
  {
    title: 'USAF PT Calculator',
    url: 'https://www.usafptcalculator.com',
    imageUrl: calculatorUrl,
    imageAltText: 'My Portfolio Website',
    className: 'md:row-span-2 animate-fade-up',
  },
  {
    url: '#',
    className: 'md:col-span-2 animate-fade-left',
  },
  {
    url: '#',
    className: 'animate-fade-up',
  },
  {
    url: '#',
    className: 'animate-fade-left ',
  },
];

function ProjectsBentoBoxes() {
  return (
    <section className="my-4 grid h-full w-full auto-rows-[200px] grid-cols-1 gap-4 px-4  md:mx-auto md:my-8 md:max-w-5xl md:grid-cols-3 md:grid-rows-3">
      {projects.map((project) => {
        return (
          <BentoBox
            key={project.title}
            className={`group relative ${project.className} animate-duration-[2000ms] `}
          >
            <Link href={project.url}>
              <h2
                className={` z-50  flex h-full items-center justify-center text-center text-5xl font-semibold tracking-wide text-foreground opacity-0 group-hover:animate-fade-up group-hover:opacity-100`}
              >
                {project.title}
              </h2>
              {project.imageUrl && project.imageAltText && (
                <Image
                  src={project.imageUrl}
                  alt={project.imageAltText}
                  fill
                  objectFit="cover"
                  className="rounded-3xl p-2 transition-opacity duration-500 group-hover:opacity-0"
                />
              )}
            </Link>
          </BentoBox>
        );
      })}
    </section>
  );
}

export default ProjectsBentoBoxes;
