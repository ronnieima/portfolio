import Hero from './_components/Hero';
import ContactPage from './_components/(contact)/ContactPage';
import ProjectsPage from './_components/(projects)/ProjectsPage';
import AboutMeSection from './_components/(aboutMe)/AboutMeSection';

export default function Home() {
  return (
    <main className="relative flex flex-col gap-8 py-16">
      <Hero />
      <AboutMeSection />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}
