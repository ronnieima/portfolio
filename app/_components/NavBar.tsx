import Link from 'next/link';

import Crest from './ui/Crest';
import MobileMenu from './MobileMenu';
import NavLinks from './ui/NavLinks';
import SocialLinks from './ui/SocialLinks';
import { ModeToggle } from './ui/ModeToggle';

function NavBar() {
  return (
    <nav className="flex max-w-screen-2xl animate-fade-down items-center justify-between gap-10 bg-transparent px-4 animate-duration-[2000ms] lg:mx-auto ">
      <Link href="/" className="flex items-center gap-4">
        <Crest />
        <h2>ronnie kaito imagawa.</h2>
      </Link>

      <ul className="hidden gap-16 lg:flex">
        <NavLinks />
      </ul>

      <div className="flex gap-3 align-middle">
        <ul className="hidden gap-2 lg:flex">
          <SocialLinks />
        </ul>
        <ModeToggle />
        <MobileMenu />
      </div>
    </nav>
  );
}

export default NavBar;
