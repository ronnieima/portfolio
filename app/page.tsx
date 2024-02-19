import Hero from './_components/Hero';
import ContactPage from './_components/(contact)/ContactPage';
import ProjectsPage from './_components/(projects)/ProjectsPage';
import AboutMeSection from './_components/(aboutMe)/AboutMeSection';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <AboutMeSection />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}
