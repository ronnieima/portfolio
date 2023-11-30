import React from 'react';
import BentoBox from './BentoBox';
import Image from 'next/image';

function ProjectsBentoBoxes() {
  return (
    <section className="my-4 grid h-full w-full grid-cols-1 grid-rows-[200px_200px_200px_200px] gap-4 px-4 sm:grid-cols-2 md:mx-auto md:my-8 md:max-w-5xl md:grid-cols-3 md:grid-rows-3">
      <BentoBox className="relative col-span-full transition-opacity hover:cursor-pointer hover:opacity-40 hover:duration-500">
        <Image
          src="https://res.cloudinary.com/dfpbpun9z/image/upload/v1701335356/portfolio/portfolio.png"
          alt="My Portfolio Website"
          fill
          objectFit="cover"
          className="rounded-3xl p-2"
        />
      </BentoBox>
      <BentoBox className="col-span-1 md:row-span-2">Test</BentoBox>
      <BentoBox className="md:col-span-2">Test</BentoBox>
      <BentoBox>Test</BentoBox>
      <BentoBox className="sm:col-span-1 md:col-span-2">Test</BentoBox>
    </section>
  );
}

export default ProjectsBentoBoxes;
