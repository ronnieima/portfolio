import { notoSerif } from "@/utils/fonts";
import React from "react";

function Greeting() {
  return (
    <div className=" flex flex-col justify-end col-span-2 animate-fade-right animate-duration-[2000ms]">
      <h1 className={`text-4xl  ${notoSerif.className}`}>
        hello, my name is <br />
        <span className="text-primary text-5xl"> Ronnie Kaito</span>.
      </h1>
    </div>
  );
}

export default Greeting;
