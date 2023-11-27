import Footer from "./_components/Footer";
import Link from "next/link";
import Hero from "./_components/Hero";
import { PropsWithChildren, ReactNode } from "react";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
