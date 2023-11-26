import Link from "next/link";
import BentoBox from "./BentoBox";
import NavBar from "./NavBar";
import Image from "next/image";
import logo from "../public/imagawa.svg";

export default function Home() {
  return (
    <>
      <nav className="flex justify-between items-center px-4 h-[64px] bg-transparent">
        <p>imagawa.</p>
      </nav>

      <main className="min-h-[100svh] p-8 bg-[#121212] flex flex-col gap-4 md:grid md:grid-cols-3 font-semibold">
        <div className="flex flex-col md:pr-8 md:pt-16">
          <p>hi,</p>
          <h1 className="text-3xl">my name is ronnie kaito.</h1>
        </div>
        <section>
          <Image
            src={logo}
            className="pointer-events-none"
            alt="Imagawa Kanji"
          />
        </section>
        <div className="flex flex-col justify-end md:pl-8 ,md:pt-16">
          <h1 className="text-3xl">full stack web developer.</h1>
        </div>
      </main>
    </>
  );
}
