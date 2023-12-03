import { ToastContainer } from 'react-toastify';
import ContactCard from './ContactCard';
import ContactHeader from './ContactHeader';

function ContactPage() {
  return (
    <main className="mx-auto max-h-[700px] max-w-xl animate-fade-down gap-x-8 px-8 py-8 animate-duration-1000">
      <ContactHeader />
      <ContactCard />
    </main>
  );
}

export default ContactPage;
