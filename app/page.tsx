import Hero from './_components/Hero';
import ContactPage from './_components/(contact)/ContactPage';
import ProjectsPage from './_components/(projects)/ProjectsPage';
import AboutMePage from './_components/(aboutMe)/AboutMePage';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-80 py-32">
      <Hero />
      <AboutMePage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}
