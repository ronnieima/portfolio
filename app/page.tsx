import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";

export default function Home() {
  return (
    <main className="dark:bg-neutral-800 dark:text-zinc-300  bg-slate-200 text-foreground min-h-screen  p-8">
      <h1 className="text-6xl ">こんにちは</h1>
      <ThemeSwitch />
    </main>
  );
}
