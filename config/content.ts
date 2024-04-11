import { cld } from '@/lib/utils';

export type Project = (typeof projects)[0];
export const projects = [
  {
    id: 'usafptcalculator',
    title: 'USAF PT Fitness Exam Calculator',
    description: `A modern web app simplifying PT test score calculations for US Air
      Force service members. Built with Next.js, React.js, TypeScript,
      TailwindCSS.`,

    links: {
      url: 'https://www.usafptcalculator.com',
      githubUrl: 'https://github.com/ronnieima/usaf-pt-calculator',
      imageUrl: cld.image('portfolio/usafptcalculator_dd3hnp').toURL(),
    },

    imageAltText: 'My Portfolio Website',
    className: 'col-span-full animate-fade-right',

    technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'audiophile-ecommerce',
    title: 'Audiophile Ecommerce',
    description:
      "This full-stack web application is a challenge from Frontend Mentor, a site that provides professional designs that allows developers to practice building websites in a realistic workflow. In this project, I've implemented an immersive ecommerce platform tailored specifically for audiophiles. With Audiophile, I aimed to create a seamless and intuitive shopping experience for customers interested in high-quality audio equipment.",
    links: {
      url: 'https://audiophile-ecommerce-peach.vercel.app/',
      githubUrl: 'https://github.com/ronnieima/audiophile-ecommerce',
      imageUrl: cld.image('portfolio/audiophile-ecommerce').toURL(),
    },
    imageAltText: 'Audiophile',
    className: 'md:row-span-2 animate-fade-up',
    technologies: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'NextAuth',
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
      imageUrl: cld.image('portfolio/selfiebooth').toURL(),
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
      imageUrl: cld.image('portfolio/animepomodoro').toURL(),
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
    id: 'devlinks',
    title: 'Devlinks - Link Sharing App',
    description:
      "This full-stack web application is a challenge from Frontend Mentor, a site that provides professional designs that allows developers to practice building websites in a realistic workflow. In this project, I've implemented an full stack link-sharing app that allows developers to share links to their socials all in one centralized platform.",
    links: {
      url: 'https://devlinks-drab.vercel.app/',
      githubUrl: 'https://github.com/ronnieima/link-sharing-app',
      imageUrl: cld.image('portfolio/devlinks').toURL(),
    },
    imageAltText: 'Devlinks',
    className: 'animate-fade-left',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS'],
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
