import Link from 'next/link';
import {
  ArrowRight,
  Star,
  ChevronDown,
  CheckCircle,
  CreditCard,
  UserCheck,
  TrendingUp,
  Shield,
  Clock,
  BarChart3,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrustBar from '@/components/TrustBar';
import TradelineCard from '@/components/TradelineCard';
import { getTradelines } from '@/lib/tradelines';

const faqs = [
  {
    q: 'What are authorized user tradelines?',
    a: "Authorized user tradelines are established credit card accounts where you are added as an authorized user. When you are added, the account history — including the credit limit, age, and payment record — appears on your credit report, potentially boosting your score.",
  },
  {
    q: 'Is buying tradelines legal?',
    a: "Yes. Being added as an authorized user to someone else's credit account is a completely legal strategy recognized by all major credit bureaus. Many parents add their children as authorized users to help them build credit.",
  },
  {
    q: 'How long does it take to see results?',
    a: "Most clients see their scores update within 30–45 days — typically after the card's next billing cycle closes and reports to the credit bureaus. Our team will notify you of the reporting date when you purchase.",
  },
  {
    q: 'Which credit bureaus will this report to?',
    a: 'Our tradelines are verified to report to all three major credit bureaus: Equifax, Experian, and TransUnion. We confirm bureau reporting before listing any tradeline in our inventory.',
  },
  {
    q: 'How much can my score improve?',
    a: "Results vary based on your current credit profile. Clients with thin files or high utilization tend to see the largest gains — our average client sees an 87-point improvement. Use our Credit Simulator to get a personalized estimate.",
  },
];

const testimonials = [
  {
    name: 'Marcus T.',
    location: 'Atlanta, GA',
    stars: 5,
    text: 'I went from a 598 to a 712 in less than 60 days. A1 Tradelines was transparent throughout the whole process and the results were exactly what they promised. Finally qualified for my first home loan!',
  },
  {
    name: 'Priya S.',
    location: 'Houston, TX',
    stars: 5,
    text: 'Super professional team. They helped me pick the right tradelines for my goals and my score jumped 94 points. The process was smooth and stress-free. Highly recommend.',
  },
  {
    name: 'James R.',
    location: 'Chicago, IL',
    stars: 5,
    text: 'Was skeptical at first but this is 100% legit. Added two tradelines and watched my Experian score go from 611 to 720. The dashboard made everything easy to track. Will be back.',
  },
];

const steps = [
  {
    icon: CreditCard,
    step: '01',
    title: 'Pick a Tradeline',
    desc: 'Browse our verified inventory of high-limit, low-utilization tradelines. Filter by limit, age, card type, and price to find the perfect fit.',
  },
  {
    icon: UserCheck,
    step: '02',
    title: 'Get Added as AU',
    desc: 'Once you purchase, our account holders add you as an authorized user. No hard inquiry. No access to the physical card.',
  },
  {
    icon: TrendingUp,
    step: '03',
    title: 'Your Score Updates',
    desc: 'After the billing cycle closes and reports to the bureaus — usually within 30–45 days — your score reflects the new positive account history.',
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
        <p className="text-slate-400 text-sm leading-relaxed border-t border-[#1e2d40] pt-4">
          {a}
        </p>
      </div>
    </details>
  );
}

export default async function HomePage() {
  const allTradelines = await getTradelines();
  const previewTradelines = allTradelines.slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center pt-20" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(163,230,53,0.07) 0%, transparent 60%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 w-full">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#a3e635]/10 border border-[#a3e635]/25 rounded-full px-4 py-2 text-sm text-[#a3e635] font-medium">
                <CheckCircle className="w-4 h-4" />
                BBB Accredited · 500+ Clients Served · Results in 30–45 Days
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                Boost Your Credit Score{' '}
                <span className="text-[#a3e635]">with Premium</span>{' '}
                Authorized User Tradelines
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Access verified, high-limit tradelines from top U.S. banks. Get added as an
                authorized user and watch your score climb — safely, legally, and fast.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link
                  href="/buy"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#a3e635] text-[#0a0f1e] font-bold text-base hover:bg-[#b5f53f] transition-colors glow-lime"
                >
                  Browse Inventory <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/simulator"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent border border-[#1e2d40] text-slate-300 font-semibold text-base hover:border-[#a3e635]/40 hover:text-white transition-colors"
                >
                  <BarChart3 className="w-5 h-5" />
                  Try the Simulator
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#a3e635] text-[#a3e635]" />
                ))}
                <span className="text-slate-400 text-sm ml-1">4.9 / 5 — 200+ reviews</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-slate-500" />
          </div>
        </section>

        {/* Trust Bar */}
        <TrustBar />

        {/* How It Works */}
        <section id="how-it-works" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-[#a3e635] text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">How It Works</h2>
              <p className="text-slate-400 mt-4 max-w-xl mx-auto">
                Three straightforward steps from browsing to a better credit score.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative text-center space-y-5">
                    <div className="relative inline-block">
                      <div className="w-24 h-24 rounded-2xl bg-[#111827] border-2 border-[#1e2d40] flex items-center justify-center mx-auto">
                        <Icon className="w-10 h-10 text-[#a3e635]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#a3e635] flex items-center justify-center">
                        <span className="text-[#0a0f1e] text-xs font-black">{step.step}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link href="/buy" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#a3e635] text-[#0a0f1e] font-bold hover:bg-[#b5f53f] transition-colors">
                Get Started Today <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Inventory Preview */}
        <section className="py-24 bg-[#080d1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-[#a3e635] text-sm font-semibold uppercase tracking-widest mb-3">Available Now</p>
                <h2 className="text-4xl font-bold text-white">Featured Tradelines</h2>
                <p className="text-slate-400 mt-2">Verified, high-impact tradelines ready for immediate placement.</p>
              </div>
              <Link href="/buy" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1e2d40] text-slate-300 hover:border-[#a3e635]/40 hover:text-white transition-colors text-sm font-medium">
                View All 12+ Listings <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {previewTradelines.map((tl) => (
                <TradelineCard key={tl.id} tradeline={tl} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/buy" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#a3e635] text-[#0a0f1e] font-bold hover:bg-[#b5f53f] transition-colors">
                Browse Full Inventory <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Simulator Teaser */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111827] border border-[#a3e635]/20 rounded-3xl p-10 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(163,230,53,0.06) 0%, transparent 60%)' }} />
              <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-[#a3e635]/10 border border-[#a3e635]/25 rounded-full px-4 py-2 text-sm text-[#a3e635] font-medium">
                    <BarChart3 className="w-4 h-4" /> Free Tool
                  </div>
                  <h2 className="text-4xl font-bold text-white">
                    See Your Score <span className="text-[#a3e635]">Before You Buy</span>
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    Our credit score simulator lets you model the impact of adding tradelines before you spend a single dollar.
                  </p>
                  <ul className="space-y-3">
                    {['No sign-up required', 'Instant projected improvement', 'Model 1–4 tradelines at once'].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#a3e635] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/simulator" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#a3e635] text-[#0a0f1e] font-bold hover:bg-[#b5f53f] transition-colors">
                    Try the Simulator Free <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-[#0d1526] border border-[#1e2d40] rounded-2xl p-8 space-y-5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Current Score</span>
                      <span className="text-white font-bold">620</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#1e2d40]">
                      <div className="h-full w-[45%] rounded-full bg-gradient-to-r from-orange-400 to-yellow-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">After 2 Tradelines</span>
                      <span className="text-[#a3e635] font-bold">+89 pts</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#1e2d40]">
                      <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-[#a3e635] to-[#84cc16]" />
                    </div>
                    <div className="flex items-center justify-between bg-[#a3e635]/10 border border-[#a3e635]/25 rounded-xl px-4 py-3">
                      <span className="text-slate-300 text-sm font-medium">Projected Score</span>
                      <span className="text-3xl font-black text-[#a3e635]">709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-[#080d1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-[#a3e635] text-sm font-semibold uppercase tracking-widest mb-3">Client Stories</p>
              <h2 className="text-4xl font-bold text-white">Real Results, Real People</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-[#111827] border border-[#1e2d40] rounded-2xl p-6 card-hover space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#a3e635] text-[#a3e635]" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div className="pt-2 border-t border-[#1e2d40]">
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-[#a3e635] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-4xl font-bold text-white">Common Questions</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/faq" className="inline-flex items-center gap-2 text-[#a3e635] hover:text-[#b5f53f] font-medium transition-colors">
                View all FAQs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-16 bg-[#080d1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: 'BBB Accredited', desc: 'We maintain an A+ rating with the Better Business Bureau.' },
                { icon: Clock, title: '30–45 Day Results', desc: 'Tradelines report within one billing cycle. We notify you every step.' },
                { icon: CheckCircle, title: 'Verified Accounts Only', desc: 'Every tradeline is vetted for age, limit, payment history, and bureau reporting.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-[#111827] border border-[#1e2d40] rounded-2xl p-6 flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#a3e635]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#a3e635]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden border border-[#a3e635]/20" style={{ background: 'linear-gradient(135deg, #0d1a0a 0%, #111827 50%, #0a0f1e 100%)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(163,230,53,0.07) 0%, transparent 60%)' }} />
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Boost Your Score?</h2>
                <p className="text-slate-400 max-w-xl mx-auto text-lg">
                  Join 500+ clients who have used A1 Tradelines to unlock better rates, higher limits, and financial freedom.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <Link href="/buy" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#a3e635] text-[#0a0f1e] font-bold hover:bg-[#b5f53f] transition-colors glow-lime text-base">
                    Browse Inventory <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#1e2d40] text-slate-300 font-semibold hover:border-[#a3e635]/40 hover:text-white transition-colors text-base">
                    Talk to a Specialist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
