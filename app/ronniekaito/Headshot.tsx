import { notoSerif } from '@/utils/fonts';
import { arrowUrl, guamFlagUrl, headshotUrl } from '@/utils/imageUrls';
import Image from 'next/image';
import React from 'react';

async function Headshot() {
  return (
    <div className="pointer-events-none relative col-start-2 flex animate-fade-left flex-col items-center justify-self-end  animate-duration-1000 md:self-end">
      <header className="relative">
        <p
          className={`text-2xl tracking-widest ${notoSerif.className} mb-4 w-fit`}
        >
          ABOUT ME
        </p>
        <Image
          src={arrowUrl}
          alt="arrow"
          width={40}
          height={40}
          className="absolute -left-12 right-24 top-8 -rotate-12 invert-0 dark:invert"
        />
      </header>
      <Image
        src={headshotUrl}
        alt="My Headshot Photo"
        width={200}
        height={200}
        priority={true}
        className=" mx-auto rounded-full sm:w-4/5"
      />
      <Image
        src={guamFlagUrl}
        alt="Flag of Guam"
        width={100}
        height={50}
        className="absolute bottom-0 right-0 w-2/5"
      />
    </div>
  );
}

export default Headshot;
