import Image from "next/image";
import React from "react";
import imagawaCrest from "@/public/imagawa.png";

function Crest() {
  return (
    <Image
      className="col-start-4"
      src="/imagawa.png"
      width={30}
      height={30}
      alt="Imagawa Crest"
    />
  );
}

export default Crest;
