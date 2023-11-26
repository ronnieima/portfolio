import Hero from "./_components/Hero";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
      </main>
      <footer className=" animate-duration-[2000ms] grid grid-cols-3 grid-rows-2 px-8 animate-fade-up ">
        <p className="col-start-1 row-start-2 text-sm text-neutral-400">
          Coded in Visual Studio Code by yours truly. Built with Next.js and
          Tailwind CSS, deployed with Vercel. All text is set in the Inter
          typeface.
        </p>
      </footer>
    </>
  );
}
