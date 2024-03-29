import MaxWidthWrapper from '../MaxWidthContainer';
import Headshot from './Headshot';

import SectionHeader from '../SectionHeader';

function AboutMeSection() {
  return (
    <section id="about-me" className=" relative overflow-x-hidden ">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-8  lg:flex-row">
        <Headshot />

        <div className="flex h-full flex-col items-start justify-start gap-6">
          <SectionHeader
            header="Who is Ronnie Kaito Imagawa?"
            subtitle="A dedicated full stack developer who turns ideas into digitized
              realities."
          />
          <p className="prose mb-16 text-lg text-muted-foreground sm:mb-0 sm:text-left sm:text-lg lg:pr-48">
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
