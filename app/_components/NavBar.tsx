import Link from "next/link";

import Crest from "./ui/Crest";
import MobileMenu from "./MobileMenu";
import NavLinks from "./ui/NavLinks";
import SocialLinks from "./ui/SocialLinks";
import { ModeToggle } from "./ui/ModeToggle";

function NavBar() {
  return (
    <nav className="flex justify-between h-[64px] items-center gap-32 px-4 max-w-screen-2xl mx-auto bg-transparent animate-fade-down animate-duration-[2000ms]">
      <Link href="/" className="flex gap-4 items-center">
        <Crest />
        <h2 className="hover:scale-[1.02]">ronnie kaito imagawa.</h2>
      </Link>

      <ul className="lg:flex hidden gap-16">
        <NavLinks />
      </ul>

      <div className="flex align-middle gap-3">
        <ul className="lg:flex hidden gap-2">
          <SocialLinks />
        </ul>
        <ModeToggle />
        <MobileMenu />
      </div>
    </nav>
  );
}

export default NavBar;
