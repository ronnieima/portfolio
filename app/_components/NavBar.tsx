"use client";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/x";
import Crest from "./ui/Crest";

type LinksType = { label: string; href: string }[];

type SocialsType = {
  network: string;
  url: string;
}[];

const links: LinksType = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "meet ronnie kaito",
    href: "/ronniekaito",
  },
  {
    label: "projects",
    href: "/projects",
  },
  {
    label: "contact",
    href: "/contact",
  },
];

const socials: SocialsType = [
  {
    network: "linkedin",
    url: "https://www.linkedin.com/in/ronnie-kaito-imagawa/",
  },
  {
    network: "x",
    url: "https://twitter.com/imagawaDev",
  },
  {
    network: "github",
    url: "https://github.com/ronnieima",
  },
];

function NavBar() {
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <nav className="flex justify-between h-[64px] items-center px-4 bg-transparent animate-fade-down animate-duration-[2000ms]">
      <div className="flex gap-4 items-center">
        <Crest />
        <Link href="/">
          <h2 className="hover:scale-[1.02]">ronnie kaito imagawa.</h2>
        </Link>
      </div>

      {/* MOBILE MENU */}
      <MenuIcon className="md:hidden" />

      {/* NAV LINKS */}
      <ul className="md:flex hidden gap-16">
        {links.map((link) => (
          <li
            key={link.label}
            className={`${
              currentPath === link.href && "underline"
            } hover:scale-[1.02] `}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* SOCIAL MEDIA LINKS */}
      <ul className="md:flex hidden gap-2">
        {socials.map((social) => (
          <li key={social.url}>
            <Link href={social.url} target="_blank">
              <SocialIcon
                as="div"
                network={social.network}
                bgColor="transparent"
                className="hover:scale-110"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
