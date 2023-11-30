import { notoSerif } from '@/utils/fonts';
import React from 'react';

function Greeting() {
  return (
    <div className=" col-span-2 flex animate-fade-right flex-col justify-end animate-duration-[2000ms]">
      <h1 className={`text-2xl  ${notoSerif.className}`}>
        hello, my name is <br />
        <span className="text-5xl text-primary"> Ronnie Kaito</span>.
      </h1>
    </div>
  );
}

export default Greeting;
