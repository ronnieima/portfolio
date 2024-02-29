import { guamFlagUrl, headshotUrl } from '@/utils/imageUrls';
import Image from 'next/image';

async function Headshot() {
  return (
    <div className="pointer-events-none relative flex flex-col items-center justify-self-end  ">
      {/* <header className="relative">
        <h2
          className={`text-2xl tracking-widest ${notoSerif.className} mb-4 w-fit`}
        >
          ABOUT ME
        </h2>
        <Image
          src={arrowUrl}
          alt="arrow"
          width={40}
          height={40}
          className="absolute -left-12 right-24 top-8 -rotate-12 invert-0 dark:invert"
        />
      </header> */}

      <Image
        src={headshotUrl}
        alt="My Headshot Photo"
        width={400}
        height={300}
        priority={true}
        className=" mx-auto w-3/5 rounded-3xl lg:w-4/5"
      />

      <Image
        src={guamFlagUrl}
        alt="Flag of Guam"
        width={100}
        height={50}
        className="absolute -bottom-2 right-14 w-1/5 lg:bottom-0 lg:right-0 lg:w-2/5"
      />
    </div>
  );
}

export default Headshot;
