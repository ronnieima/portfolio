import { notoSerif } from "@/utils/fonts";
import React from "react";

function HeroSubtitle() {
  return (
    <div className="col-start-3 col-span-2 row-start-3 animate-fade-left animate-duration-[2000ms]">
      <h2 className={`${notoSerif.className} text-5xl text-right`}>
        full stack web developer.
      </h2>
    </div>
  );
}

export default HeroSubtitle;
