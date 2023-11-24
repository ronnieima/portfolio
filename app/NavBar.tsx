import Link from "next/link";
import React from "react";

const links: { label: string; href: string }[] = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Projects",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];

function NavBar() {
  return (
    <>
      <h2>ronnie kaito imagawa.</h2>
      <ul className="flex gap-16">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavBar;
