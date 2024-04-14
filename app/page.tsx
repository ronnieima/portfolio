import Hero from './_components/Hero';
import ProjectSection from './_components/(projects)/ProjectSection';
import AboutMeSection from './_components/(aboutMe)/AboutMeSection';
import SkillsSection from './_components/(skills)/SkillsSection';

export default function Home() {
  return (
    <main className="relative space-y-32">
      <Hero />
      <SkillsSection />
      <AboutMeSection />
      <ProjectSection />
    </main>
  );
}
