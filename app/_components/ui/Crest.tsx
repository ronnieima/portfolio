import { logo } from '@/utils/imageUrls';
import Image from 'next/image';
import React from 'react';

function Crest({ size }: { size: number }) {
  return (
    <Image
      src={logo}
      className="pointer-events-none"
      width={size}
      height={size}
      alt="Imagawa Crest"
    />
  );
}

export default Crest;
