import Image from 'next/image';
import Link from 'next/link';
import BentoBox from './BentoBox';
import { cn } from '@/lib/utils';
import {
  calculatorUrl,
  portfolioImageUrl,
  selfieBoothUrl,
  animePomodoroUrl,
  spaceTourismUrl,
} from '@/utils/imageUrls';

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

export const projects: Project[] = [
  {
    id: 'usafptcalculator',
    title: 'USAF PT Fitness Exam Calculator',
    description: `A modern web app simplifying PT test score calculations for US Air
      Force service members. Built with Next.js, React.js, TypeScript,
      TailwindCSS.`,

    links: {
      url: 'https://www.usafptcalculator.com',
      githubUrl: 'https://github.com/ronnieima/usaf-pt-calculator',
      imageUrl: calculatorUrl,
    },

    imageAltText: 'My Portfolio Website',
    className: 'col-span-full ',

    technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
  },
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
    className: 'md:row-span-2 ',
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
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
    className: 'md:col-span-2',

    technologies: ['next-intl', 'Next.js', 'React.js', 'Tailwind CSS'],
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
    className: '',
    technologies: [
      'PostgreSQL',
      'Drizzle ORM',
      'Zustand',
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'MyAnimeList API',
    ],
  },
  {
    id: 'spacetourism',
    title: 'Space Tourism Page',
    description: '',
    links: {
      url: 'https://space-tourism-delta-blush.vercel.app/',
      githubUrl: 'https://github.com/ronnieima/space-tourism',
      imageUrl: spaceTourismUrl,
    },
    imageAltText: 'Space Tourism Page',
    className: '',
    technologies: ['React.js', 'Vite', 'Tanstack Router', 'TailwindCSS'],
  },
];

function ProjectsBentoBoxes() {
  return (
    <section className="my-4 grid h-full w-full auto-rows-[200px] grid-cols-1 gap-4 px-4  md:mx-auto md:my-8 md:max-w-5xl md:grid-cols-3 md:grid-rows-3">
      {projects.map((project) => {
        return (
          <Link href={`/${project.id}`} key={project.title!} className="z-10">
            <BentoBox
              className={cn(
                `group relative animate-duration-[1000ms] `,
                project.className,
              )}
            >
              <div
                className={`  flex h-full items-center justify-center p-8 text-center text-2xl font-semibold tracking-wide text-foreground opacity-0 group-hover:animate-fade-up group-hover:opacity-100 sm:text-3xl md:text-4xl`}
              >
                {project.title}
              </div>
              {project.links.imageUrl && project.imageAltText && (
                <Image
                  src={project.links.imageUrl}
                  alt={project.imageAltText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="absolute rounded-3xl p-2 transition-all duration-500 group-hover:cursor-pointer group-hover:opacity-40 group-hover:blur-sm"
                />
              )}
            </BentoBox>
          </Link>
        );
      })}
    </section>
  );
}

export default ProjectsBentoBoxes;
