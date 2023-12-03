import { notoSerifJapanese } from '@/utils/fonts';
import React from 'react';

function Kanji() {
  return (
    <div className="col-start-2 col-end-4 row-start-2 flex items-center justify-center">
      <h2
        className={`${notoSerifJapanese.className} block animate-fade text-center text-[12rem] animate-duration-[4000ms] sm:text-[14rem] md:text-[16rem] lg:text-[21rem]`}
        title="Imagawa in Japanese Kanji"
      >
        今川
      </h2>
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
