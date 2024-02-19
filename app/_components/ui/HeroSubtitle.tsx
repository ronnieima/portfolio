import { notoSerif } from '@/utils/fonts';
import React from 'react';
import { MotionDiv } from '../MotionDiv';

function HeroSubtitle() {
  return (
    <MotionDiv
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="col-span-2 col-start-3 row-start-3 "
    >
      <h2 className={`${notoSerif.className} text-right text-5xl`}>
        full stack web
        <br />
        developer.
      </h2>
    </MotionDiv>
  );
}

export default HeroSubtitle;
