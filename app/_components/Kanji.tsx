import { notoSerifJapanese } from '@/utils/fonts';
import React from 'react';
import { MotionDiv, MotionH2, MotionP } from './MotionDiv';

function Kanji() {
  return (
    <div className="col-start-2 col-end-4 row-start-2 flex items-center justify-center">
      <MotionH2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className={`${notoSerifJapanese.className} block  text-center text-[9rem] sm:text-[14rem] md:text-[16rem] lg:text-[21rem]`}
        title="Imagawa in Japanese Kanji"
      >
        今川
      </MotionH2>
      <MotionP
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="text-center text-lg text-secondary"
        style={{ writingMode: 'vertical-rl' }}
      >
        &#40; imagawa &#41;
      </MotionP>
    </div>
  );
}

export default Kanji;
