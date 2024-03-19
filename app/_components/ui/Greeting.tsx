import { notoSerif } from '@/utils/fonts';
import React from 'react';
import { MotionDiv } from '../MotionDiv';

function Greeting() {
  return (
    <div className="col-span-2 flex  flex-col justify-end">
      <h1 className={`text-2xl leading-5 ${notoSerif.className} `}>
        hello, my name is <br />
        <span className="text-5xl text-primary"> Ronnie Kaito</span>.
      </h1>
    </div>
  );
}

export default Greeting;
