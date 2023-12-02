import { notoSerif } from '@/utils/fonts';
import React from 'react';

function ContactHeader() {
  return (
    <header className={`space-y-4 py-8 text-center`}>
      <h1 className={`${notoSerif.className}  text-6xl`}>
        I&apos;d love to hear from you.
      </h1>
      <p className="text-lg text-muted-foreground">
        Leave a message below, and I&apos;ll get back to you as soon as
        possible.
      </p>
    </header>
  );
}

export default ContactHeader;
