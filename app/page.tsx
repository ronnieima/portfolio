import Hero from "./components/Hero";
import Kanji from "./components/Kanji";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />

      <main>
        <Hero />
      </main>
    </>
  );
}
