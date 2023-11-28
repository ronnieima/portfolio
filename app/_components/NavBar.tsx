import Link from "next/link";

import Crest from "./ui/Crest";
import MobileMenu from "./MobileMenu";
import NavLinks from "./ui/NavLinks";
import SocialLinks from "./ui/SocialLinks";

function NavBar() {
  return (
    <nav className="flex justify-between h-[64px] items-center px-4 bg-transparent animate-fade-down animate-duration-[2000ms]">
      <Link href="/" className="flex gap-4 items-center">
        <Crest />
        <h2 className="hover:scale-[1.02]">ronnie kaito imagawa.</h2>
      </Link>

      <ul className="lg:flex hidden gap-16">
        <NavLinks />
      </ul>

      <ul className="lg:flex hidden gap-2">
        <SocialLinks />
      </ul>

      <MobileMenu />
    </nav>
  );
}

export default NavBar;
