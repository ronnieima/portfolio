import React from 'react';
import Image from 'next/image';
import { notoSerif } from '@/utils/fonts';

function AboutMePage() {
  return (
    <main className="mx-auto flex max-w-screen-xl grid-cols-[0.5fr_1fr_1fr_0.5fr] flex-col justify-center gap-8 px-8 text-center md:grid md:gap-0 md:gap-x-2 md:text-left">
      <div className="pointer-events-none relative col-start-2 flex animate-fade-left flex-col items-center self-center justify-self-end animate-duration-1000">
        <header className="relative">
          <p
            className={`text-2xl tracking-widest ${notoSerif.className} mb-4 w-fit`}
          >
            ABOUT ME
          </p>
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={40}
            height={40}
            className="absolute -left-12 right-24 top-8 -rotate-12 invert-0 dark:invert"
          />
        </header>
        <Image
          src="/headshot.png"
          alt="My Headshot Photo"
          width={200}
          height={200}
          priority={true}
          className=" mx-auto rounded-full sm:w-4/5"
        />
        <Image
          src="/Flag_of_Guam.svg"
          alt="Flag of Guam"
          width={100}
          height={50}
          className="absolute bottom-0 right-0 w-2/5"
        />
      </div>
      <header className="flex animate-fade-right flex-col items-center justify-center gap-2 animate-duration-1000 md:items-start">
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

      <p className="col-span-2 col-start-2 row-start-2 mb-16 animate-fade-down self-start text-lg animate-duration-1000 sm:mb-0 sm:text-lg">
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
