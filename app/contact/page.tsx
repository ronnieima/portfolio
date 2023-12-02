import { ToastContainer } from 'react-toastify';
import ContactCard from './ContactCard';
import ContactHeader from './ContactHeader';
import 'react-toastify/dist/ReactToastify.css';


function ContactPage() {
  return (
    <main className="px-8">
      <ToastContainer/>
      <ContactHeader />
      <ContactCard />
    </main>
  );
}

export default ContactPage;
