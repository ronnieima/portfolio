import React from 'react';
import Image from 'next/image';
import { notoSerif } from '@/utils/fonts';

function AboutMePage() {
  return (
    <main className="mx-auto flex max-w-screen-xl animate-fade-down grid-cols-[0.5fr_1fr_1fr_0.5fr] flex-col justify-center gap-8 px-8 text-center animate-duration-1000 sm:grid sm:gap-0 sm:gap-x-2 sm:text-left">
      <div className="pointer-events-none relative col-start-2 self-center justify-self-end text-2xl ">
        <p className="text-center tracking-widest">ABOUT ME</p>
        <Image
          src="/headshot.png"
          alt="My Headshot Photo"
          width={200}
          height={200}
          className=" rounded-full sm:w-full"
        />
        <Image
          src="/Flag_of_Guam.svg"
          alt="Flag of Guam"
          width={100}
          height={50}
          className="absolute bottom-0 right-0 w-2/5"
        />
      </div>
      <header className="flex flex-col items-center justify-center gap-1 sm:items-start">
        <h1 className={`order-2 text-5xl sm:text-7xl${notoSerif.className}`}>
          Ronnie Kaito <br />
          Imagawa.
        </h1>
        <h2 className="order-1 text-lg sm:text-3xl">
          it&apos;s nice to meet you, i&apos;m
        </h2>
        <h3 className="order-3 text-lg sm:text-3xl">
          full stack web developer
        </h3>
      </header>

      <p className="col-span-2 col-start-2 row-start-2 mb-16 self-start text-lg sm:mb-0 sm:text-3xl">
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
