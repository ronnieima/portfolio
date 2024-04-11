import { notoSerif } from '@/utils/fonts';
import React from 'react';
import { MotionDiv } from '../MotionDiv';

function HeroSubtitle() {
  return (
    <div>
      <h2 className={`${notoSerif.className} text-right text-5xl`}>
        full stack web
        <br />
        developer.
      </h2>
    </div>
  );
}

export default HeroSubtitle;
