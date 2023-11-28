import Image from 'next/image';
import React from 'react';
import logo from '../../public/imagawa.svg';

function Kanji() {
  return (
    <div className="col-start-2 col-end-4 row-start-2 flex justify-center gap-4 ">
      <Image
        src={logo}
        className="pointer-events-none animate-fade invert animate-duration-[4000ms] dark:invert-0"
        alt="Imagawa Kanji"
        title="imagawa"
      />
      <p
        className=" animate-fade-left text-center text-lg text-secondary animate-duration-[2000ms]"
        style={{ writingMode: 'vertical-rl' }}
      >
        &#40; imagawa &#41;
      </p>
    </div>
  );
}

export default Kanji;
