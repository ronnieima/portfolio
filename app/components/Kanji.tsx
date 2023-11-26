import Image from "next/image";
import React from "react";
import logo from "../../public/imagawa.svg";

function Kanji() {
  return (
    <>
      <Image src={logo} className="pointer-events-none" alt="Imagawa Kanji" />
      <p className="text-right">&#40;imagawa&#41;</p>
    </>
  );
}

export default Kanji;
