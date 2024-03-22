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
      'Audiophile is an ecommerce platform I developed for audio enthusiasts. It showcases my skills in web development, database management, and user experience design. With Audiophile, I aimed to create a seamless and intuitive shopping experience for customers interested in high-quality audio equipment.',
    links: {
      url: 'https://audiophile-ecommerce-peach.vercel.app/',
      githubUrl: 'https://github.com/ronnieima/audiophile-ecommerce',
      imageUrl: cld.image('portfolio/audiophile-ecommerce').toURL(),
    },
    imageAltText: 'My Portfolio Website',
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
    id: 'spacetourism',
    title: 'Space Tourism Page',
    description:
      'The Space Tourism Website project showcases my frontend development skills by translating a provided design into a fully functional webpage. This project aimed to create an engaging and responsive platform for users interested in space tourism, allowing them to explore different aspects of space travel and experience optimal viewing across various devices.',
    links: {
      url: 'https://space-tourism-delta-blush.vercel.app/',
      githubUrl: 'https://github.com/ronnieima/space-tourism',
      imageUrl: cld.image('portfolio/space-tourism').toURL(),
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
