import React from 'react';
import BentoBox from './BentoBox';
import Image from 'next/image';
import { calculatorUrl, portfolioImageUrl } from '@/utils/imageUrls';
import Link from 'next/link';

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    url: string;
    githubUrl: string;
    imageUrl: string;
  };
  imageAltText: string;
  className: string;
};

// might have to migrate this to an actual database to scale more
export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: '',
    links: {
      url: 'https://www.imagawa.dev',
      githubUrl: 'https://github.com/ronnieima/portfolio',
      imageUrl: portfolioImageUrl,
    },
    imageAltText: 'My Portfolio Website',
    className: 'col-span-full animate-fade-right',
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'usafptcalculator',
    title: 'USAF Physical Training Fitness Exam Calculator',
    description: `A modern web app simplifying PT test score calculations for US Air
    Force service members. Built with Next.js, React.js, TypeScript,
    TailwindCSS, and Supabase.`,

    links: {
      url: 'https://www.usafptcalculator.com',
      githubUrl: 'https://github.com/ronnieima/usaf-pt-calculator',
      imageUrl: calculatorUrl,
    },

    imageAltText: 'My Portfolio Website',
    className: 'md:row-span-2 animate-fade-up',
    technologies: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
    ],
  },
  {
    id: '',
    title: '',
    description: '',
    links: {
      url: '#',
      githubUrl: '',
      imageUrl: '',
    },

    imageAltText: '',
    className: 'md:col-span-2 animate-fade-left',
    technologies: [],
  },
  {
    id: '',
    title: '',
    description: '',
    links: {
      url: '#',
      githubUrl: '',
      imageUrl: '',
    },
    imageAltText: '',
    className: 'animate-fade-up',
    technologies: [],
  },
  {
    id: '',
    title: '',
    description: '',
    links: {
      url: '#',
      githubUrl: '',
      imageUrl: '',
    },
    imageAltText: '',
    className: 'animate-fade-left',
    technologies: [],
  },
];

function ProjectsBentoBoxes() {
  return (
    <section className="my-4 grid h-full w-full auto-rows-[200px] grid-cols-1 gap-4 px-4  md:mx-auto md:my-8 md:max-w-5xl md:grid-cols-3 md:grid-rows-3">
      {projects.map((project) => {
        return (
          <BentoBox
            key={project.title!}
            className={`group relative ${project.className} animate-duration-[2000ms] `}
          >
            <Link href={`/projects/${project.id}`}>
              <h2
                className={` z-50  flex h-full items-center justify-center text-center text-2xl font-semibold tracking-wide text-foreground opacity-0 group-hover:animate-fade-up group-hover:opacity-100 sm:text-3xl md:text-5xl`}
              >
                {project.title}
              </h2>
              {project.links.imageUrl && project.imageAltText && (
                <Image
                  src={project.links.imageUrl}
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
