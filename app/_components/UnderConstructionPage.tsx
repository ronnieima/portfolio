import { notoSerif } from '@/utils/fonts';
import React from 'react';

function UnderConstructionPage() {
  return (
    <div
      className={`${notoSerif.className} flex h-full items-center justify-center text-center text-4xl`}
    >
      <h1>under construction.</h1>
    </div>
  );
}

export default UnderConstructionPage;
