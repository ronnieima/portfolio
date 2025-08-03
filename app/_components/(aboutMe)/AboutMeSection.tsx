import MaxWidthWrapper from '../MaxWidthContainer';
import Headshot from './Headshot';

import SectionHeader from '../SectionHeader';

function AboutMeSection() {
  return (
    <section id="about-me" className=" relative overflow-x-hidden ">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-8  lg:flex-row">
        <Headshot />

        <div className="flex h-full max-w-[60ch] flex-col items-start justify-start gap-8 p-4">
          <SectionHeader
            header="Who is Ronnie Kaito Imagawa?"
            subtitle="A dedicated full stack developer who turns ideas into digitized
              realities."
          />
          <p className="prose rounded-3xl border bg-white px-7 py-5 text-lg leading-relaxed text-foreground shadow-sm sm:text-left sm:text-lg">
            I&apos;m a software developer and U.S. Air Force veteran passionate
            about building engaging digital experiences. I bring a strong
            foundation in software development, problem-solving, and the same
            discipline I learned in the military to every project.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default AboutMeSection;
