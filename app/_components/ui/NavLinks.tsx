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
    href: '/ronniekaito',
  },
  {
    label: 'projects',
    href: '/projects',
  },
  {
    label: 'contact',
    href: '/contact',
  },
];

const mobileStyles = 'hover:bg-slate-600 rounded-lg text-center text-xl';

const desktopStyles = 'hover:text-slate-400';

function NavLinks({ mobile }: { mobile?: boolean }) {
  const currentPath = usePathname();
  return (
    <>
      {links.map((link) => (
        <li key={link.label} className="">
          <Link
            href={link.href}
            className={`inline-block ${
              currentPath === link.href && 'underline underline-offset-2'
            } ${mobile ? mobileStyles : desktopStyles}`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
