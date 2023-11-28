import React from "react";
import Kanji from "./Kanji";
import HeroSubtitle from "./ui/HeroSubtitle";
import Greeting from "./ui/Greeting";

function Hero() {
  return (
    <section className="flex flex-col gap-y-8 sm:grid sm:grid-cols-[1fr_6fr_6fr_1fr] sm:grid-rows-[1fr_2fr_1fr] font-semibold h-full max-w-screen-md mx-auto py-8 px-6 lg:px-8 sm:px-4">
      <Greeting />
      <Kanji />
      <HeroSubtitle />
    </section>
  );
}

export default Hero;
