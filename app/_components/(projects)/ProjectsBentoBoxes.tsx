import React from 'react';
import BentoBox from './BentoBox';
import Image from 'next/image';
import {
  animePomodoroUrl,
  calculatorUrl,
  portfolioImageUrl,
  selfieBoothUrl,
} from '@/utils/imageUrls';
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
    TailwindCSS.`,

    links: {
      url: 'https://www.usafptcalculator.com',
      githubUrl: 'https://github.com/ronnieima/usaf-pt-calculator',
      imageUrl: calculatorUrl,
    },

    imageAltText: 'My Portfolio Website',
    className: 'md:row-span-2 animate-fade-up',
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'animepomodoro',
    title: 'Anime Pomodoro Timer',
    description:
      'Anime Pomodoro Timer is an innovative app designed to blend the efficiency of the Pomodoro technique with the captivating world of anime. This unique productivity tool is perfect for anime enthusiasts who want to stay focused and manage their time effectively.',
    links: {
      url: 'https://www.animepomodoro.com/',
      githubUrl: 'https://github.com/ronnieima/animepomodoro',
      imageUrl: animePomodoroUrl,
    },

    imageAltText: 'Anime Pomodoro Timer',
    className: 'md:col-span-2 animate-fade-left',
    technologies: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'MyAnimeList API',
    ],
  },
  {
    id: 'selfieboothguam',
    title: 'Selfiebooth Guam Landing Page',
    description:
      "A multilingual landing page for my parents' photobooth business, based in Guam, my hometown.",
    links: {
      url: 'https://www.selfieboothguam.com/',
      githubUrl: 'https://github.com/ronnieima/selfieboothguam',
      imageUrl: selfieBoothUrl,
    },
    imageAltText: 'selfieboothguam',
    className: 'animate-fade-up',
    technologies: ['next-intl', 'Next.js', 'React.js', 'Tailwind CSS'],
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
                  style={{ objectFit: 'cover' }}
                  className="-z-50 rounded-3xl p-2 transition-all duration-500 group-hover:blur-sm"
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
