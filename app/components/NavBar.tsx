import Link from "next/link";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/x";
import "react-social-icons/github";

type LinksType = { label: string; href: string }[];

type SocialsType = {
  network: string;
  url: string;
}[];

const links: LinksType = [
  {
    label: "meet ronnie kaito",
    href: "#",
  },
  {
    label: "projects",
    href: "#",
  },
  {
    label: "contact",
    href: "#",
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
  return (
    <nav className="flex justify-between h-[64px] items-center px-4 bg-transparent animate-fade-down animate-duration-[2000ms]">
      <h2>ronnie kaito imagawa.</h2>
      <ul className="md:flex hidden gap-16">
        {links.map((link) => (
          <li key={link.label}>
            <Link className="hover:underline hover:scale-110" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
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
