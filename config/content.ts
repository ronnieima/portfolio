import { Project } from '@/app/_components/(projects)/ProjectsBentoBoxes';
import {
  calculatorUrl,
  portfolioImageUrl,
  selfieBoothUrl,
  animePomodoroUrl,
} from '@/utils/imageUrls';

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
    className: 'col-span-full animate-fade-right',

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
    className: 'md:row-span-2 animate-fade-up',
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
    className: 'md:col-span-2 animate-fade-left',

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
    className: 'animate-fade-up',
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
    id: 'spacetourism',
    title: 'Space Tourism Page',
    description: '',
    links: {
      url: 'https://space-tourism-delta-blush.vercel.app/',
      githubUrl: 'https://github.com/ronnieima/space-tourism',
      imageUrl: '',
    },
    imageAltText: 'Space Tourism Page',
    className: 'animate-fade-left',
    technologies: ['React.js', 'Vite', 'Tanstack Router', 'TailwindCSS'],
  },
];

export const icons = {
  front_end: [
    { icon: 'devicon-react-original colored', label: 'React' },
    {
      icon: 'devicon-javascript-plain colored',
      label: 'JavaScript',
    },
    {
      icon: 'devicon-typescript-plain colored',
      label: 'TypeScript',
    },
    { icon: 'devicon-nextjs-plain colored', label: 'Next.js' },
    { icon: 'devicon-html5-plain colored', label: 'HTML' },
    { icon: 'devicon-css3-plain colored', label: 'CSS' },
    {
      icon: 'devicon-tailwindcss-plain-wordmark colored',
      label: 'TailwindCSS',
    },
  ],
  back_end: [
    {
      icon: 'devicon-nodejs-plain-wordmark colored',
      label: 'Node.js',
    },
    {
      icon: 'devicon-express-original-wordmark colored',
      label: 'Express.js',
    },
    {
      icon: 'devicon-postgresql-plain-wordmark colored',
      label: 'PostgreSQL',
    },
  ],
};
