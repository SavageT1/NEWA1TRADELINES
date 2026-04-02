import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | A1 Tradelines',
  description:
    'Get in touch with the A1 Tradelines team. We help you find the right tradelines for your credit goals.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <div className="bg-[#080d1a] border-b border-[#1e2d40]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-[#a3e635] text-sm font-semibold uppercase tracking-widest mb-3">
              We&apos;re Here to Help
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-slate-400 text-lg max-w-xl">
              Have questions about tradelines, pricing, or your credit goals? Our team of
              specialists is ready to help you get started.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
