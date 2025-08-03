import { guamFlagUrl, headshotUrl } from '@/utils/imageUrls';
import Image from 'next/image';

async function Headshot() {
  return (
    <div className="pointer-events-none relative flex flex-col items-center justify-self-end  ">
      <Image
        src={headshotUrl}
        alt="My Headshot Photo"
        width={400}
        height={300}
        priority={true}
        className=" mx-auto w-3/5 rounded-3xl lg:w-4/5"
      />
    </div>
  );
}

export default Headshot;
