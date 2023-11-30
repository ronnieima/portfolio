import React from 'react';
import UnderConstructionPage from '../_components/UnderConstructionPage';
import { notoSerif } from '@/utils/fonts';
import BentoBox from './BentoBox';
import Image from 'next/image';

function ProjectsPage() {
  return (
    <main className=" my-8  flex flex-col items-center justify-center">
      <h1 className={`${notoSerif.className} text-6xl`}>my projects.</h1>
      <section className="mx-auto my-8 grid h-full w-full max-w-5xl grid-cols-3 grid-rows-3 gap-4">
        <BentoBox className="relative col-span-3 transition-opacity hover:cursor-pointer hover:opacity-40 hover:duration-500">
          <Image
            src="https://res.cloudinary.com/dfpbpun9z/image/upload/v1701335356/portfolio/portfolio.png"
            alt="My Portfolio Website"
            fill
            objectFit="cover"
            className="rounded-3xl p-2"
          />
        </BentoBox>
        <BentoBox className="row-span-2">Test</BentoBox>
        <BentoBox className="col-span-2">Test</BentoBox>
        <BentoBox>Test</BentoBox>
        <BentoBox>Test</BentoBox>
      </section>
    </main>
  );
}

export default ProjectsPage;
