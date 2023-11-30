import React from 'react';
import Image from 'next/image';
import { notoSerif } from '@/utils/fonts';
import Headshot from './Headshot';

function AboutMePage() {
  return (
    <main className="mx-auto flex max-w-screen-xl grid-cols-[0.5fr_1fr_1fr_0.5fr] flex-col justify-center gap-8 px-8 text-center md:grid md:gap-0 md:gap-x-2 md:gap-y-8 md:text-left">
      <Headshot />
      <header className="flex animate-fade-right flex-col items-center justify-center gap-2 animate-duration-1000 md:items-start md:self-end">
        <h1 className={`order-2 text-5xl sm:text-5xl ${notoSerif.className}`}>
          Ronnie Kaito <br />
          Imagawa,
        </h1>
        <h2 className="order-1 text-lg sm:text-2xl">
          it&apos;s nice to meet you, i&apos;m
        </h2>
        <h3 className="order-3 text-lg sm:text-3xl">
          full stack web developer.
        </h3>
      </header>

      <p className="col-span-2 col-start-2  mb-16 animate-fade-down self-start text-lg animate-duration-1000 sm:mb-0 sm:text-lg">
        I am an active duty Air Force IT technician stationed in Ramstein,
        Germany with 3 years of experience. As a recent Computer Science
        graduate born and raised from the beautiful, tiny island of Guam, I love
        turning ideas into digitized realities. Coding has developed into a fun
        hobby of mine, and I wish to transition this passion into a career.
      </p>
    </main>
  );
}

export default AboutMePage;
