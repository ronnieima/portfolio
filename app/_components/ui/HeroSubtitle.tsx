import { notoSerif } from '@/utils/fonts';
import React from 'react';

function HeroSubtitle() {
  return (
    <div className="col-span-2 col-start-3 row-start-3 animate-fade-left animate-duration-[2000ms]">
      <h2 className={`${notoSerif.className} text-right text-5xl`}>
        full stack web developer.
      </h2>
    </div>
  );
}

export default HeroSubtitle;
