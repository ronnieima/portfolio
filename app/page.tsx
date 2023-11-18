import Link from "next/link";
import BentoBox from "./BentoBox";

export default function Home() {
  return (
    <main className="min-h-screen p-8 grid-cols-10 grid-rows-[64px_400px] grid gap-2 bg-neutral-950">
      <BentoBox className="flex justify-between items-center  col-span-10">
        <h2>ronnie kaito imagawa.</h2>
        <ul className="flex gap-16">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </BentoBox>
      <BentoBox className="md:col-span-6">
        <h1 className="text-6xl ">こんにちは</h1>
      </BentoBox>
      <BentoBox className="md:col-span-4">
        <p className="text-4xl">Contact me at</p>
      </BentoBox>
    </main>
  );
}
