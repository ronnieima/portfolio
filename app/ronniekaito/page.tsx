import React from 'react';
import UnderConstructionPage from '../_components/UnderConstructionPage';
import Image from 'next/image';
import { notoSerif } from '@/utils/fonts';

function AboutMePage() {
  return (
    <main className="flex max-w-screen-xl animate-fade-down grid-cols-[0.5fr_1fr_2fr_0.5fr] grid-rows-2 flex-col items-center gap-8 px-16 animate-duration-1000 md:mx-auto md:grid md:gap-0">
      <div className="relative col-start-2 flex w-full flex-col items-center gap-4 self-center text-2xl tracking-widest">
        <p>ABOUT ME</p>
        <Image
          src="/headshot.png"
          alt="My Headshot Photo"
          width={200}
          height={200}
          className=" rounded-full"
        />
        <Image
          src="/Flag_of_Guam.svg"
          alt="Flag of Guam"
          width={100}
          height={50}
          className="absolute bottom-0 right-5"
        />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <h2 className="text-lg md:text-3xl">
          it&apos;s nice to meet you, i&apos;m
        </h2>
        <h1 className={`text-5xl md:text-7xl ${notoSerif.className}`}>
          Ronnie Kaito <br />
          Imagawa.
        </h1>
        <h3 className="text-lg md:text-3xl">full stack web developer</h3>
      </div>
      <p className="col-span-2 col-start-2 row-start-2 self-start">
        I am an active duty Air Force IT technician stationed in Ramstein,
        Germany with 3 years of experience. As a recent Computer Science
        graduate born and raised from the beautiful, tiny island of Guam, I
        bring a diverse perspective and problem-solving passion to any team.
        Coding has developed into a fun hobby of mine, and wish to transition
        this passion into a career.
      </p>
    </main>
  );
}

export default AboutMePage;
