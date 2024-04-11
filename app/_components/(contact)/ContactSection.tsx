import MaxWidthWrapper from '../MaxWidthContainer';
import ContactCard from './ContactCard';
import ContactHeader from './ContactHeader';

function ContactSection() {
  return (
    <section className="relative pb-32">
      <MaxWidthWrapper className="gap-x-8 py-16">
        <ContactHeader />
        <ContactCard />
      </MaxWidthWrapper>
    </section>
  );
}

export default ContactSection;
