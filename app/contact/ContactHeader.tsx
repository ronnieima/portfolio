import { notoSerif } from '@/utils/fonts';
import React from 'react';

function ContactHeader() {
  return (
    <header className={`space-y-4 py-8 text-center`}>
      <h1 className={`${notoSerif.className}  text-6xl`}>
        Let&apos;s connect!
      </h1>
      <p className="text-lg text-muted-foreground">
        I&apos;m excited to explore potential collaborations, discuss projects,
        or simply chat about the latest in the tech world.
      </p>
    </header>
  );
}

export default ContactHeader;
