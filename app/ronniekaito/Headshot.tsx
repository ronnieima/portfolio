import getBase64 from '@/lib/getLocalBase64';
import { notoSerif } from '@/utils/fonts';
import Image from 'next/image';
import React from 'react';

async function Headshot() {
  const headshotBlurUrl = await getBase64(
    'https://res.cloudinary.com/dfpbpun9z/image/upload/v1701265416/headshot_qjs2sx.jpg',
  );
  const guamFlagBlurUrl = await getBase64(
    'https://res.cloudinary.com/dfpbpun9z/image/upload/v1701265415/Flag_of_Guam_ffy2ym.svg',
  );
  return (
    <div className="pointer-events-none relative col-start-2 flex animate-fade-left flex-col items-center self-center justify-self-end animate-duration-1000">
      <header className="relative">
        <p
          className={`text-2xl tracking-widest ${notoSerif.className} mb-4 w-fit`}
        >
          ABOUT ME
        </p>
        <Image
          src="/arrow.svg"
          alt="arrow"
          width={40}
          height={40}
          className="absolute -left-12 right-24 top-8 -rotate-12 invert-0 dark:invert"
        />
      </header>
      <Image
        src="https://res.cloudinary.com/dfpbpun9z/image/upload/v1701265416/headshot_qjs2sx.jpg"
        alt="My Headshot Photo"
        width={200}
        height={200}
        priority={true}
        placeholder="blur"
        blurDataURL={headshotBlurUrl}
        className=" mx-auto rounded-full sm:w-4/5"
      />
      <Image
        src="https://res.cloudinary.com/dfpbpun9z/image/upload/v1701265415/Flag_of_Guam_ffy2ym.svg"
        alt="Flag of Guam"
        width={100}
        height={50}
        placeholder="blur"
        className="absolute bottom-0 right-0 w-2/5"
        blurDataURL={guamFlagBlurUrl}
      />
    </div>
  );
}

export default Headshot;
