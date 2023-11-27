import Image from "next/image";
import React from "react";

function Crest() {
  return (
    <Image
      className="col-start-4 hover:scale-110"
      src="/imagawa.png"
      width={30}
      height={30}
      alt="Imagawa Crest"
    />
  );
}

export default Crest;
