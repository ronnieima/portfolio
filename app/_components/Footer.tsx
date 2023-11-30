import Link from 'next/link';
import React, { ReactNode } from 'react';

function Footer() {
  return (
    <footer className="m-auto max-w-screen-lg animate-fade-up grid-cols-8 px-4 pb-1 text-center  animate-duration-[2000ms]">
      <p className="text-xs text-muted-foreground">
        Coded in{' '}
        <HoverableLink url="https://code.visualstudio.com/">
          Visual Studio Code
        </HoverableLink>{' '}
        by yours truly. Built with{' '}
        <HoverableLink url="https://nextjs.org/">Next.js</HoverableLink> and{' '}
        <HoverableLink url="https://tailwindcss.com/">
          Tailwind CSS
        </HoverableLink>
        , deployed with{' '}
        <HoverableLink url="https://vercel.com/">Vercel</HoverableLink>. All
        text is set in the{' '}
        <HoverableLink url="https://fonts.google.com/specimen/Inter">
          Inter
        </HoverableLink>{' '}
        and{' '}
        <HoverableLink url="https://fonts.google.com/noto/specimen/Noto+Serif">
          Noto Serif
        </HoverableLink>{' '}
        typeface.
      </p>
    </footer>
  );
}

export default Footer;

interface HoverableLinkProps {
  children: ReactNode;
  url: string;
}

function HoverableLink({ children, url }: HoverableLinkProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className="italic text-primary hover:opacity-80"
    >
      {children}
    </Link>
  );
}
