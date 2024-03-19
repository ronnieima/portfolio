import MaxWidthWrapper from '../MaxWidthContainer';
import SectionHeader from '../SectionHeader';
import SkillCard from './SkillCard';

export default function SkillsSection() {
  return (
    <section className="w-full py-16">
      <MaxWidthWrapper>
        <SectionHeader
          header="My Skills"
          subtitle="A snapshot of my tech toolkit."
          className="py-4"
        />
        <div className="flex flex-col gap-8 sm:flex-row">
          <SkillCard system="front_end" />
          <SkillCard system="back_end" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
