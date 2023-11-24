import Link from "next/link";
import BentoBox from "./BentoBox";
import NavBar from "./NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8 grid-cols-10 grid-rows-[12] auto-rows-fr grid gap-2 bg-neutral-950">
      <BentoBox className="flex justify-between items-center  col-span-10">
        <NavBar />
      </BentoBox>

      <BentoBox className="md:col-span-6 row-span-4">
        <h1 className="text-6xl flex flex-col">
          <span title='"Hello" in Japanese!'>こんにちは。 👋</span>
          <span>Hi, I&apos;m Ronnie Kaito,</span>
          <p className="text-4xl">I am a full stack web developer.</p>
        </h1>

        <p className="mt-10">
          Welcome to my portfolio! Scroll down, explore my work, and let&apos;s
          team up to create something amazing together.
        </p>
      </BentoBox>

      <BentoBox className="md:col-span-4 row-span-4">
        <p className="text-4xl">Contact me at</p>
      </BentoBox>
      <BentoBox className="col-span-full">
        <p>Hi</p>
      </BentoBox>
      <BentoBox className="col-start-4 col-end-11 row-span-5 relative z-0 p-0">
        <Link href="https://www.usafptcalculator.com" target="_blank">
          <Image
            src="https://res.cloudinary.com/dfpbpun9z/image/upload/v1700147529/ogImage/ogimage.png"
            alt="USAF PT Calculator Project"
            fill={true}
            objectFit="cover"
            className="rounded-3xl -z-10 p-4 peer" // just an example
          />
          <figcaption className="z-50 w-full h-full flex-col justify-end p-4 flex">
            <section className="bg-slate-950/70 h-[33%] rounded-b-lg p-8 max-h-full">
              <h2 className="text-2xl font-semibold">USAF PT Calculator</h2>
              <p>
                A modern web app simplifying PT test score calculations for US
                Air Force service members. Built with Next.js, React.js,
                TypeScript, TailwindCSS, and Supabase.
              </p>
            </section>
          </figcaption>
        </Link>
      </BentoBox>
    </main>
  );
}
