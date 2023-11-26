import React from "react";
import Kanji from "./Kanji";

function Hero() {
  return (
    <section className="flex flex-col gap-y-16 sm:grid sm:grid-cols-[1fr_1fr_1fr_1fr] sm:grid-rows-[1fr_2fr_1fr] font-semibold h-full max-w-screen-md mx-auto py-8 px-4">
      <div className="col-span-2 animate-fade-right animate-duration-[2000ms]">
        <h1 className="text-3xl">
          hi, my name is <br />
          <span className="text-blue-400 text-5xl"> ronnie kaito</span>.
        </h1>
      </div>

      <section className="col-start-2 col-end-4 row-start-2 animate-fade animate-duration-[2000ms]">
        <Kanji />
      </section>

      <div className="col-start-3 col-span-2 row-start-3 animate-fade-left animate-duration-[2000ms]">
        <h1 className="text-5xl text-right">full stack web developer.</h1>
      </div>
    </section>
  );
}

export default Hero;
