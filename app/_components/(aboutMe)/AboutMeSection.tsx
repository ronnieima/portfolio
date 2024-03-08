import MaxWidthWrapper from '../MaxWidthWrapper';
import Headshot from './Headshot';

import SectionHeader from '../SectionHeader';

function AboutMeSection() {
  return (
    <section id="about-me" className=" relative overflow-x-hidden py-24">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black"></div>

      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-8 px-16 lg:flex-row">
        <Headshot />

        <div className="flex h-full flex-col items-start justify-start gap-6">
          <SectionHeader
            header="Who is Ronnie Kaito Imagawa?"
            subtitle="A dedicated full stack developer who turns ideas into digitized
              realities."
          />
          <p className="prose mb-16 text-left text-lg text-muted-foreground sm:mb-0 sm:text-lg lg:pr-48">
            I am an active duty service member from Dededo, Guam who loves
            transforming concepts into captivating digital experiences. Coding
            has developed into a fun hobby of mine, and I wish to transition
            this passion into a career.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default AboutMeSection;
