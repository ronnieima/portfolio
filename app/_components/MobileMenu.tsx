'use client';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import NavLinks from './ui/NavLinks';
import SocialLinks from './ui/SocialLinks';
import Crest from './ui/Crest';

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <MenuIcon size={32} />
      </SheetTrigger>
      <SheetContent
        className="flex flex-col items-center justify-between gap-8"
        side="top"
      >
        <SheetHeader>
          <SheetTitle>
            <Crest size={60} />
          </SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col items-center justify-center gap-8">
          <NavLinks mobile={true} />
        </ul>
        <ul className="flex items-center justify-center">
          <SocialLinks />
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
