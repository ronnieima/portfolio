import Hero from './_components/Hero';
import ContactPage from './_components/(contact)/ContactPage';
import ProjectsPage from './_components/(projects)/ProjectsPage';
import AboutMeSection from './_components/(aboutMe)/AboutMeSection';
import SkillsSection from './_components/(skills)/SkillsSection';

export default function Home() {
  return (
    <main className="relative space-y-32">
      <Hero />
      <SkillsSection />
      <AboutMeSection />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}
