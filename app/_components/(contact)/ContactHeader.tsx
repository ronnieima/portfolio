import { notoSerif } from '@/utils/fonts';
import React from 'react';

function ContactHeader() {
  return (
    <header id="contact" className={`space-y-4 py-8 text-center`}>
      <h2 className={`${notoSerif.className}  text-6xl text-secondary`}>
        Let&apos;s connect!
      </h2>
      <p className="text-lg text-muted-foreground">
        I&apos;m excited to explore potential collaborations, discuss projects,
        or simply chat about the latest in the tech world.
      </p>
    </header>
  );
}

export default ContactHeader;
