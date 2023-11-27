import Link from "next/link";
import React, { ReactNode } from "react";

function Footer() {
  return (
    <footer className=" animate-duration-[2000ms] sm:grid grid-cols-3 grid-rows-2 px-8 animate-fade-up mt-auto pb-8  ">
      <p className="col-start-1 row-start-2 text-sm text-neutral-400">
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
      className="hover:text-neutral-50 text-neutral-200"
    >
      {children}
    </Link>
  );
}