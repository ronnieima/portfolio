"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import NavLinks from "./ui/NavLinks";
import SocialLinks from "./ui/SocialLinks";

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <MenuIcon size={32} />
      </SheetTrigger>
      <SheetContent
        className="h-[70%] flex flex-col justify-between"
        side="top"
      >
        <SheetHeader>
          <SheetTitle>navigation.</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col justify-center items-center gap-8">
          <NavLinks mobile={true} />
        </ul>
        <ul className="flex justify-center items-center">
          <SocialLinks />
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
