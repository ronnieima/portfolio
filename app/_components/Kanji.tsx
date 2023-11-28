import Image from "next/image";
import React from "react";
import logo from "../../public/imagawa.svg";

function Kanji() {
  return (
    <div className="col-start-2 col-end-4 row-start-2 flex gap-4 justify-center ">
      <Image
        src={logo}
        className="pointer-events-none animate-fade animate-duration-[4000ms]"
        alt="Imagawa Kanji"
        title="imagawa"
      />
      <p
        className=" animate-fade-left animate-duration-[2000ms] text-center text-lg"
        style={{ writingMode: "vertical-rl" }}
      >
        &#40; imagawa &#41;
      </p>
    </div>
  );
}

export default Kanji;
