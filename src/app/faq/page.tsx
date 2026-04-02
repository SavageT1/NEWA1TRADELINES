import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const metadata = {
  title: 'FAQ | A1 Tradelines',
  description:
    'Answers to common questions about authorized user tradelines, how they work, legality, timing, and more.',
};

const faqCategories = [
  {
    category: 'Understanding Tradelines',
    questions: [
      {
        q: 'What are authorized user tradelines?',
        a: "An authorized user tradeline is an established credit card account that you are added to as an authorized user. When added, the primary account holder's positive credit history — including the account age, credit limit, and on-time payment record — appears on your credit report. This can significantly boost your credit score.",
      },
      {
        q: 'How is this different from piggybacking credit?',
        a: "Authorized user tradelines are sometimes called 'piggybacking' — and they are completely synonymous. This strategy has been legal and recognized by all three major credit bureaus since the 1970s. The Credit CARD Act of 2009 actually reinforced the practice by clarifying that authorized user accounts must continue to be reported.",
      },
      {
        q: 'Do I get a physical card or access to the account?',
        a: 'No. As an authorized user in this context, you are added to the account by name only. You receive no physical card and have no access to the account. The purpose is solely to benefit from the account history appearing on your credit report.',
      },
      {
        q: 'Which credit bureaus will the tradeline report to?',
        a: 'Every tradeline in our inventory is pre-verified to report to at least one — and usually all three — major bureaus: Equifax, Experian, and TransUnion. We confirm bureau reporting before listing any account.',
      },
    ],
  },
  {
    category: 'Legality & Safety',
    questions: [
      {
        q: 'Is buying tradelines legal?',
        a: "Yes. Being added as an authorized user is a legal credit strategy. It is recognized and permitted by Equifax, Experian, and TransUnion. Millions of people are added to credit accounts as authorized users every year — the most common example is parents adding their children. Paying for this service does not make it illegal.",
      },
      {
        q: 'Will this hurt my credit score?',
        a: "Adding an authorized user tradeline does not involve a hard inquiry, so it will not lower your score. In the vast majority of cases, it improves your score. The only scenario where it could be neutral is if you already have a very strong credit profile with low utilization and long history.",
      },
      {
        q: 'Is my personal information safe?',
        a: 'Absolutely. We use industry-standard 256-bit SSL encryption on all data transmissions. We never share or sell your personal information. Account holders receive only the minimum information required to add you as an authorized user — typically your name and date of birth.',
      },
    ],
  },
  {
    category: 'Process & Timing',
    questions: [
      {
        q: 'How long does it take to see results?',
        a: "Most clients see their scores update within 30–45 days. This typically happens after the card's next billing cycle closes and the issuer reports to the credit bureaus. We will tell you the exact reporting date for your tradeline at purchase, so you know when to check.",
      },
      {
        q: 'What happens after I purchase?',
        a: 'After payment, our team contacts the account holder to initiate the authorized user addition. You will receive a confirmation email. The account holder typically completes the addition within 2–5 business days. We then notify you when to expect bureau reporting.',
      },
      {
        q: 'How long does the tradeline stay on my credit report?',
        a: 'Tradelines are typically rented for a defined period (usually 1–2 reporting cycles, about 60–90 days). After that, you are removed from the account. However, the positive account history you benefited from may continue to influence your score for some time.',
      },
    ],
  },
  {
    category: 'Pricing & Results',
    questions: [
      {
        q: 'How much can my credit score improve?',
        a: "Results vary widely depending on your current credit profile. People with thin files, high utilization, or few accounts tend to see the most dramatic gains. Our clients average an 87-point improvement, but we have seen gains of 100+ points for clients in the right circumstances. Use our free Credit Score Simulator for a personalized estimate.",
      },
      {
        q: 'What determines the price of a tradeline?',
        a: 'Tradeline pricing is based on three main factors: credit limit (higher limit = more impact = higher price), account age (older accounts carry more weight in the FICO algorithm), and utilization (lower utilization is better and commands a premium).',
      },
      {
        q: 'Do you offer refunds?',
        a: "If a tradeline we place fails to report to at least one credit bureau within 60 days of the stated reporting date, we will replace it at no additional charge. We do not offer cash refunds after placement has been initiated, but we stand behind every placement we make.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-[#111827] border border-[#1e2d40] rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer text-white font-medium text-sm hover:text-[#a3e635] transition-colors list-none">
        {q}
        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-6 pb-5">
        <p className="text-slate-400 text-sm leading-relaxed border-t border-[#1e2d40] pt-4">{a}</p>
      </div>
    </details>
  );
}

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <div className="bg-[#080d1a] border-b border-[#1e2d40]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-[#a3e635] text-sm font-semibold uppercase tracking-widest mb-3">
              Got Questions?
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-400 text-lg max-w-xl">
              Everything you need to know about authorized user tradelines, the process, and what to expect.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-[#a3e635] rounded-full" />
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.questions.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="py-16 bg-[#080d1a]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <h2 className="text-2xl font-bold text-white">Still Have Questions?</h2>
            <p className="text-slate-400">
              Our specialists are happy to walk you through anything. Reach out and we will get back to you within a few hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#a3e635] text-[#0a0f1e] font-bold hover:bg-[#b5f53f] transition-colors">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/buy" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#1e2d40] text-slate-300 font-semibold hover:border-[#a3e635]/40 hover:text-white transition-colors">
                Browse Inventory
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
