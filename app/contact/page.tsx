import ContactCard from './ContactCard';
import ContactHeader from './ContactHeader';

function ContactPage() {
  return (
    <main className="mx-auto min-h-[100svh] max-w-xl gap-x-8 px-8 ">
      <ContactHeader />
      <ContactCard />
    </main>
  );
}

export default ContactPage;
