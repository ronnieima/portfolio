import Link from "next/link";
import React, { ReactNode } from "react";

function Footer() {
  return (
    <footer className=" animate-duration-[2000ms] sm:grid grid-cols-8 px-4 animate-fade-up mt-auto pb-4 h-fit  ">
      <p className="col-span-3 row-start-3 text-xs text-zinc-300">
        Coded in{" "}
        <HoverableLink url="https://code.visualstudio.com/">
          Visual Studio Code
        </HoverableLink>{" "}
        by yours truly. Built with{" "}
        <HoverableLink url="https://nextjs.org/">Next.js</HoverableLink> and{" "}
        <HoverableLink url="https://tailwindcss.com/">
          Tailwind CSS
        </HoverableLink>
        , deployed with{" "}
        <HoverableLink url="https://vercel.com/">Vercel</HoverableLink>. All
        text is set in the{" "}
        <HoverableLink url="https://fonts.google.com/specimen/Inter">
          Inter
        </HoverableLink>{" "}
        and{" "}
        <HoverableLink url="https://fonts.google.com/noto/specimen/Noto+Serif">
          Noto Serif
        </HoverableLink>{" "}
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
    <Link href={url} target="_blank" className="hover:opacity-80 text-blue-300">
      {children}
    </Link>
  );
}
