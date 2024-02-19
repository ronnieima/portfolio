import { notoSerif } from '@/utils/fonts';
import React from 'react';
import { MotionDiv } from '../MotionDiv';

function Greeting() {
  return (
    <MotionDiv
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="col-span-2 flex  flex-col justify-end"
    >
      <h1 className={`text-2xl leading-5 ${notoSerif.className} `}>
        hello, my name is <br />
        <span className="text-5xl text-primary"> Ronnie Kaito</span>.
      </h1>
    </MotionDiv>
  );
}

export default Greeting;
