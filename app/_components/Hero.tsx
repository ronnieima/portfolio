import Kanji from './Kanji';
import Greeting from './ui/Greeting';
import HeroSubtitle from './ui/HeroSubtitle';

function Hero() {
  return (
    <section className="relative  flex h-full flex-col justify-center overflow-hidden pb-1 pt-32">
      <div className='lg:px-8" -z-10 mx-auto flex max-w-[70rem] flex-col gap-y-8  px-6  font-semibold  sm:grid sm:grid-cols-[1fr_6fr_6fr_1fr] sm:grid-rows-[1fr_336px_1fr] sm:px-4'>
        <Greeting />
        <Kanji />
        <HeroSubtitle />
      </div>
    </section>
  );
}

export default Hero;
