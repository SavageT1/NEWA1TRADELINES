import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, CreditCard, BarChart3, Users, PhoneCall, CheckCircle, Star } from 'lucide-react';

export const metadata = {
  title: 'Our Services | A1 Tradelines',
  description:
    'Explore A1 Tradelines services: premium authorized user tradelines, credit score consulting, and personalized credit-building strategy.',
};

const services = [
  {
    icon: CreditCard,
    title: 'Authorized User Tradelines',
    tagline: 'The Core Service',
    desc: 'Get added as an authorized user to high-limit, aged, low-utilization credit accounts from top U.S. banks. These accounts report to the major credit bureaus and boost your score — no hard inquiry required.',
    features: [
      'Accounts aged 3–10+ years',
      'Credit limits from $8,000 to $50,000+',
      'Utilization under 15% on all accounts',
      'Verified bureau reporting (Equifax, Experian, TransUnion)',
      'Results typically within 30–45 days',
    ],
    cta: { label: 'Browse Inventory', href: '/buy' },
    highlight: true,
  },
  {
    icon: BarChart3,
    title: 'Credit Score Simulation',
    tagline: 'Free Tool',
    desc: 'Before you purchase, use our free Credit Score Simulator to model the projected impact of different tradeline combinations on your score. No sign-up required.',
    features: [
      'Model 1–4 tradelines at once',
      'Adjust by credit limit, age, and utilization',
      'Instant projected score improvement',
      'Completely free, no account needed',
    ],
    cta: { label: 'Try the Simulator', href: '/simulator' },
    highlight: false,
  },
  {
    icon: Users,
    title: 'Personalized Consultation',
    tagline: '1-on-1 Guidance',
    desc: 'Not sure which tradelines are right for you? Book a free consultation with one of our credit specialists. We will review your current profile and recommend the optimal tradeline strategy.',
    features: [
      'Free 30-minute call with a specialist',
      'Credit profile analysis',
      'Personalized tradeline recommendations',
      'Goal-based strategy (home loan, auto, business credit)',
    ],
    cta: { label: 'Schedule a Call', href: '/contact' },
    highlight: false,
  },
  {
    icon: PhoneCall,
    title: 'Ongoing Support',
    tagline: 'We Don\'t Disappear',
    desc: 'After placement, we monitor your tradeline status, notify you when it reports, and are available to answer questions throughout the process.',
    features: [
      'Email and phone support',
      'Reporting date notifications',
      'Bureau confirmation check-in',
      'Replacement guarantee if account fails to report',
    ],
    cta: { label: 'Contact Us', href: '/contact' },
    highlight: false,
  },
];

const packages = [
  {
    name: 'Starter',
    price: '$119',
    desc: 'Best for beginners with thin credit files',
    features: [
      '1 tradeline (aged 3–4 years)',
      'Up to $10,000 credit limit',
      'Under 15% utilization',
      '30-day placement',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Builder',
    price: '$299',
    desc: 'Most popular — for serious score improvement',
    features: [
      '1 tradeline (aged 5–8 years)',
      'Up to $30,000 credit limit',
      'Under 8% utilization',
      '45-day placement',
      'Priority support',
      'Score impact consultation',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Elite',
    price: '$499+',
    desc: 'Maximum impact — premium aged accounts',
    features: [
      '1 tradeline (aged 8–10+ years)',
      'Up to $50,000+ credit limit',
      'Under 5% utilization',
      '60-day placement',
      'Dedicated account manager',
      'Custom strategy consultation',
      'Replacement guarantee',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <div className="bg-[#080d1a] border-b border-[#1e2d40]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-[#a3e635] text-sm font-semibold uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-slate-400 text-lg max-w-xl">
              From individual tradeline placements to personalized credit strategy — everything
              you need to build a stronger credit profile.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className={`rounded-2xl p-8 space-y-6 ${
                      service.highlight
                        ? 'bg-[#0d1a0a] border border-[#a3e635]/30'
                        : 'bg-[#111827] border border-[#1e2d40]'
                    } card-hover`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#a3e635]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#a3e635]" />
                      </div>
                      <div>
                        <p className="text-[#a3e635] text-xs font-semibold uppercase tracking-wider mb-1">
                          {service.tagline}
                        </p>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-slate-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#a3e635] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.cta.href}
                      className="inline-flex items-center gap-2 text-[#a3e635] hover:text-[#b5f53f] font-semibold text-sm transition-colors"
                    >
                      {service.cta.label} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20 bg-[#080d1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#a3e635] text-sm font-semibold uppercase tracking-widest mb-3">
                Pricing
              </p>
              <h2 className="text-3xl font-bold text-white">Simple, Transparent Packages</h2>
              <p className="text-slate-400 mt-3 max-w-xl mx-auto">
                No hidden fees. Pick the level of impact that fits your goals and budget.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl p-8 space-y-6 relative ${
                    pkg.popular
                      ? 'bg-[#111827] border-2 border-[#a3e635]/50'
                      : 'bg-[#111827] border border-[#1e2d40]'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1 bg-[#a3e635] text-[#0a0f1e] text-xs font-bold px-4 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-current" /> Most Popular
                      </div>
                    </div>
                  )}
                  <div>
                    <h3 className="text-white font-bold text-xl">{pkg.name}</h3>
                    <p className="text-slate-400 text-sm mt-1">{pkg.desc}</p>
                  </div>
                  <div>
                    <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
                    <span className="text-slate-400 text-sm ml-1">/ tradeline</span>
                  </div>
                  <ul className="space-y-2.5">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#a3e635] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pkg.cta === 'Contact Us' ? '/contact' : '/buy'}
                    className={`block w-full text-center py-3 rounded-xl font-bold transition-colors ${
                      pkg.popular
                        ? 'bg-[#a3e635] text-[#0a0f1e] hover:bg-[#b5f53f] glow-lime-sm'
                        : 'border border-[#1e2d40] text-slate-300 hover:border-[#a3e635]/40 hover:text-white'
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-xs mt-8">
              Prices shown are starting rates for individual tradelines. Volume discounts available. Contact us for custom packages.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
            <p className="text-slate-400">Browse our full inventory or talk to a specialist about the best strategy for your credit goals.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/buy" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#a3e635] text-[#0a0f1e] font-bold hover:bg-[#b5f53f] transition-colors">
                Browse Inventory <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#1e2d40] text-slate-300 font-semibold hover:border-[#a3e635]/40 hover:text-white transition-colors">
                Talk to a Specialist
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
