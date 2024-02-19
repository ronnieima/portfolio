import React from 'react';
import Kanji from './Kanji';
import HeroSubtitle from './ui/HeroSubtitle';
import Greeting from './ui/Greeting';
import { LayoutGroupClient } from './MotionDiv';

function Hero() {
  return (
    <LayoutGroupClient >
      <section className="flex max-w-screen-lg flex-col gap-y-8 px-6 font-semibold  sm:grid sm:grid-cols-[1fr_6fr_6fr_1fr]  sm:grid-rows-[1fr_336px_1fr] sm:px-4 lg:px-8">
        <Greeting />
        <Kanji />
        <HeroSubtitle />
      </section>
    </LayoutGroupClient>
  );
}

export default Hero;
