import getBase64 from '@/lib/getLocalBase64';
import Image from 'next/image';
import React from 'react';

const imageUrl =
  'https://res.cloudinary.com/dfpbpun9z/image/upload/v1701267923/imagawa_2_fgwmwj.png';
function Crest({ size }: { size: number }) {
  return (
    <Image
      src={imageUrl}
      className="pointer-events-none"
      width={size}
      height={size}
      alt="Imagawa Crest"
    />
  );
}

export default Crest;
