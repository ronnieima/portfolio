import Link from "next/link";
import { usePathname } from "next/navigation";

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

      {/* NAV LINKS */}
      <ul className="lg:flex hidden gap-16">
        <NavLinks />
      </ul>

      {/* SOCIAL MEDIA LINKS */}
      <ul className="lg:flex hidden gap-2">
        <SocialLinks />
      </ul>

      {/* MOBILE MENU */}
      <MobileMenu />
    </nav>
  );
}

export default NavBar;
