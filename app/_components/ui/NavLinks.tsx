'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export type LinkType = { label: string; href: string };

const links: LinkType[] = [
  {
    label: 'home',
    href: '/',
  },
  {
    label: 'meet ronnie kaito',
    href: '/#about-me',
  },
  {
    label: 'projects',
    href: '/#projects',
  },
  {
    label: 'contact',
    href: '/#contact',
  },
];

const mobileStyles =
  'hover:opacity-80  rounded-lg text-center text-xl sm:text-lg lg:text-4xl px-6 py-2';

const desktopStyles = 'hover:text-secondary';

function NavLinks({ mobile }: { mobile?: boolean }) {
  const currentPath = usePathname();
  return (
    <>
      {links.map((link, i) => (
        <li
          key={link.label}
          className={`
          ${mobile ? mobileStyles : desktopStyles}
          `}
        >
          <Link href={link.href}>
            <span className="text-xs">0{i + 1}</span> &#47;&#47; {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
