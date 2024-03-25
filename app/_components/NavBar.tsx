import Link from 'next/link';

import Crest from './ui/Crest';
import MobileMenu from './MobileMenu';
import NavLinks from './ui/NavLinks';
import SocialLinks from './ui/SocialLinks';
import { ModeToggle } from './ui/ModeToggle';

function NavBar() {
  return (
    <nav className="absolute top-0 z-10 w-full">
      <div className="flex w-full  items-center justify-between gap-10 bg-transparent px-4 ">
        <Link href="/" className="flex items-center gap-4">
          <Crest size={30} />
          <h2>ronnie kaito imagawa.</h2>
        </Link>

        <ul className="hidden md:gap-5 lg:flex xl:gap-16">
          <NavLinks />
        </ul>

        <div className="flex gap-3 align-middle">
          <ul className="hidden gap-2 lg:flex">
            <SocialLinks />
          </ul>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
