import ContactCard from './ContactCard';
import ContactHeader from './ContactHeader';

function ContactPage() {
  return (
    <section className="relative pb-32">
      <div className="pointer-events-none absolute inset-0  hidden items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black sm:flex"></div>
      <div className=" mx-auto max-w-xl animate-fade-down gap-x-8 p-8 py-16 animate-duration-1000">
        <ContactHeader />
        <ContactCard />
      </div>
    </section>
  );
}

export default ContactPage;
