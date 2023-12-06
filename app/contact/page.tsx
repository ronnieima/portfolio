import { Metadata } from 'next';
import ContactCard from './ContactCard';
import ContactHeader from './ContactHeader';

function ContactPage() {
  return (
    <main className="mx-auto max-w-xl animate-fade-down gap-x-8 p-8 animate-duration-1000">
      <ContactHeader />
      <ContactCard />
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Ronnie Kaito Imagawa | Contact',
  description: 'Feel free to reach out!',
};

export default ContactPage;
