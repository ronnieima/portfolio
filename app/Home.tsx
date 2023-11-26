import NavBar from "./NavBar";
import Kanji from "./components/Kanji";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div>
      <NavBar />

      <main>
        <section className="flex flex-col gap-y-16 sm:grid sm:grid-cols-[1fr_1fr_1fr_1fr] sm:grid-rows-[1fr_2fr_1fr] font-semibold h-full max-w-screen-md mx-auto py-8 px-4">
          <div className="col-span-2">
            <h1 className="text-3xl">
              hi, my name is <br />
              <span className="text-blue-400 text-5xl"> ronnie kaito</span>.
            </h1>
          </div>

          <section className="col-start-2 col-end-4 row-start-2">
            <Kanji />
          </section>

          <div className="col-start-3 col-span-2 row-start-3">
            <TypeAnimation
              sequence={["full stack web developer."]}
              className="text-5xl text-right"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
