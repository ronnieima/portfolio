import React from 'react';
import BentoBox from './BentoBox';
import Image from 'next/image';
import { portfolioImageUrl } from '@/utils/imageUrls';

function ProjectsBentoBoxes() {
  return (
    <section className="my-4 grid h-full w-full grid-cols-1 grid-rows-[200px_200px_200px_200px] gap-4 px-4  md:mx-auto md:my-8 md:max-w-5xl md:grid-cols-3 md:grid-rows-3">
      <BentoBox className="group relative col-span-full transition-opacity hover:cursor-pointer hover:opacity-40 hover:duration-500">
        <Image
          src={portfolioImageUrl}
          alt="My Portfolio Website"
          fill
          objectFit="cover"
          className="rounded-3xl p-2 "
        />
        <h2 className="z-10 hidden h-full text-4xl text-foreground  transition-all group-hover:flex group-hover:items-center group-hover:justify-center">
          Portfolio Website
        </h2>
      </BentoBox>
      <BentoBox className="md:row-span-2"></BentoBox>
      <BentoBox className="md:col-span-2"></BentoBox>
      <BentoBox></BentoBox>
      <BentoBox className=" "></BentoBox>
    </section>
  );
}

export default ProjectsBentoBoxes;
