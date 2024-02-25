import React from 'react';
import Kanji from './Kanji';
import HeroSubtitle from './ui/HeroSubtitle';
import Greeting from './ui/Greeting';
import { LayoutGroupClient } from './MotionDiv';

function Hero() {
  return (
    <section className="relative  flex h-[100svh] flex-col justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] dark:bg-black"></div>
      <LayoutGroupClient>
        <div className='lg:px-8" -z-10 mx-auto flex max-w-screen-lg flex-col gap-y-8  px-6  font-semibold  sm:grid sm:grid-cols-[1fr_6fr_6fr_1fr] sm:grid-rows-[1fr_336px_1fr] sm:px-4'>
          <Greeting />
          <Kanji />
          <HeroSubtitle />
        </div>
      </LayoutGroupClient>
    </section>
  );
}

export default Hero;
