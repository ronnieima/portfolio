import Image from "next/image";
import React from "react";
import logo from "../../public/imagawa.svg";

function Kanji() {
  return (
    <div className="col-start-2 col-end-4 row-start-2 animate-fade animate-duration-[4000ms]">
      <Image
        src={logo}
        className="pointer-events-none"
        alt="Imagawa Kanji"
        title="imagawa"
      />
      <p className="text-right">&#40;imagawa&#41;</p>
    </div>
  );
}

export default Kanji;
