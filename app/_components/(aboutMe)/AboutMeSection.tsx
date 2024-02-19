import { notoSerif } from '@/utils/fonts';
import Headshot from './Headshot';
import { MotionDiv, MotionP } from '../MotionDiv';

function AboutMeSection() {
  return (
    <section className=" relative py-[12rem]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div
        id="about-me"
        className="mx-auto flex max-w-screen-xl scroll-mt-32 grid-cols-[0.5fr_1fr_1fr_0.5fr] flex-col justify-center gap-8 px-8 text-center md:grid md:gap-0 md:gap-x-2 md:gap-y-8 md:text-left"
      >
        <Headshot />

        <MotionDiv
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 100 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="-z-10 flex flex-col items-center justify-center gap-2  md:items-start md:self-end"
        >
          <h3 className={`text-5xl sm:text-5xl ${notoSerif.className}`}>
            <span className="text-lg sm:text-2xl">
              it&apos;s nice to meet you, i&apos;m
              <br />
            </span>
            <span className="bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text font-bold text-transparent">
              Ronnie Kaito <br />
            </span>
            <span className="bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text font-bold text-transparent">
              Imagawa,
            </span>
            <br />
            <span className="text-lg sm:text-3xl">
              full stack web developer.
            </span>
          </h3>
        </MotionDiv>

        <MotionP
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="-z-10 col-span-2 col-start-2  mb-16 self-start text-lg  sm:mb-0 sm:text-lg"
        >
          I am an active duty Air Force IT technician stationed in Ramstein,
          Germany with 3 years of experience. As a recent Computer Science
          graduate born and raised from the beautiful, tiny island of Guam, I
          love turning ideas into digitized realities. Coding has developed into
          a fun hobby of mine, and I wish to transition this passion into a
          career.
        </MotionP>
      </div>
    </section>
  );
}

export default AboutMeSection;
