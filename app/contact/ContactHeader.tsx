import { notoSerif } from '@/utils/fonts';
import React from 'react';

function ContactHeader() {
  return (
    <header className={`space-y-4 py-8 text-center`}>
      <h1 className={`${notoSerif.className}  text-4xl`}>
        I&apos;d love to hear from you.
      </h1>
    </header>
  );
}

export default ContactHeader;
