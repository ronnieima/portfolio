import Kanji from './Kanji';
import MaxWidthWrapper from './MaxWidthContainer';
import Greeting from './ui/Greeting';
import HeroSubtitle from './ui/HeroSubtitle';

function Hero() {
  return (
    <section className="relative  flex h-full flex-col justify-center overflow-hidden pb-1 pt-32">
      <MaxWidthWrapper>
        <Greeting />
        <Kanji />
        <HeroSubtitle />
      </MaxWidthWrapper>
    </section>
  );
}

export default Hero;
