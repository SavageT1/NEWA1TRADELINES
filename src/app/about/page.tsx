import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Shield, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'About Us | A1 Tradelines',
  description:
    'Learn about A1 Tradelines — our mission, values, and commitment to helping clients achieve financial freedom through premium authorized user tradelines.',
};

const values = [
  {
    icon: Shield,
    title: 'Transparency',
    desc: 'We are upfront about how tradelines work, realistic about results, and clear about pricing — no hidden fees, no misleading claims.',
  },
  {
    icon: Award,
    title: 'Quality',
    desc: 'Every tradeline in our inventory is hand-verified for account age, credit limit, payment history, and confirmed bureau reporting.',
  },
  {
    icon: Users,
    title: 'Client-First',
    desc: "We take time to understand your credit goals before recommending any tradeline. Your success is our reputation.",
  },
  {
    icon: TrendingUp,
    title: 'Results',
    desc: 'Our clients average an 87-point improvement. We track every placement and follow up to ensure accounts report as promised.',
  },
];

const team = [
  {
    name: 'Anthony Rivera',
    role: 'Founder & CEO',
    bio: '10+ years in credit services and financial consulting. Built A1 Tradelines to bring institutional credit-building strategies to everyday consumers.',
  },
  {
    name: 'Melissa Chen',
    role: 'Head of Compliance',
    bio: 'Former credit analyst with deep expertise in FCRA regulations and consumer credit law. Ensures every placement meets legal and ethical standards.',
  },
  {
    name: 'David Okafor',
    role: 'Client Success Manager',
    bio: 'Personally guides each client through the tradeline selection process. Over 500 successful placements managed.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <div className="relative bg-[#080d1a] border-b border-[#1e2d40] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 100% at 80% 50%, rgba(163,230,53,0.05) 0%, transparent 60%)' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="max-w-2xl">
              <p className="text-[#a3e635] text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                We Help Real People Build Real Credit
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                A1 Tradelines was founded on a simple belief: the credit-building strategies used
                by wealthy families and financial insiders should be accessible to everyone. We
                bridge the gap by connecting clients with high-quality authorized user tradelines
                from verified account holders.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#0d1526] border-b border-[#1e2d40]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Clients Served' },
                { value: '+87', label: 'Avg. Point Increase' },
                { value: '100%', label: 'Verified Tradelines' },
                { value: 'A+', label: 'BBB Rating' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-[#a3e635] mb-1">{s.value}</div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-[#a3e635] text-sm font-semibold uppercase tracking-widest">Our Mission</p>
                <h2 className="text-3xl font-bold text-white">
                  Democratizing Credit Building for Everyone
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  The credit system can feel like a rigged game — you need credit to get credit.
                  Authorized user tradelines are a perfectly legal tool that has been used for
                  decades, but most people simply don&apos;t know about it.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  A1 Tradelines exists to change that. We vet every account in our inventory,
                  educate our clients on exactly how the process works, and guide them toward the
                  tradelines most likely to make a meaningful difference in their score.
                </p>
                <div className="space-y-3 pt-2">
                  {[
                    'FCRA-compliant authorized user placements',
                    'No hard inquiries — ever',
                    'Every account verified with all 3 bureaus',
                    'Dedicated support throughout the process',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#a3e635] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#111827] border border-[#1e2d40] rounded-2xl p-8 space-y-6">
                <h3 className="text-white font-bold text-lg">The A1 Difference</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Most tradeline companies are marketplaces. We are a boutique service. Every
                  client gets a personal consultation to understand their goals. Every tradeline is
                  matched to their specific profile. And we follow up after reporting to confirm
                  everything posted correctly.
                </p>
                <div className="bg-[#a3e635]/5 border border-[#a3e635]/20 rounded-xl p-5">
                  <p className="text-[#a3e635] font-semibold mb-2">Our Guarantee</p>
                  <p className="text-slate-400 text-sm">
                    If a tradeline we place fails to report to at least one bureau within 60 days,
                    we will replace it at no additional charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#080d1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#a3e635] text-sm font-semibold uppercase tracking-widest mb-3">Core Values</p>
              <h2 className="text-3xl font-bold text-white">What We Stand For</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-[#111827] border border-[#1e2d40] rounded-2xl p-6 space-y-4 card-hover">
                    <div className="w-12 h-12 rounded-xl bg-[#a3e635]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#a3e635]" />
                    </div>
                    <h3 className="text-white font-bold">{v.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#a3e635] text-sm font-semibold uppercase tracking-widest mb-3">Our Team</p>
              <h2 className="text-3xl font-bold text-white">The People Behind A1 Tradelines</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member) => (
                <div key={member.name} className="bg-[#111827] border border-[#1e2d40] rounded-2xl p-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#a3e635]/30 to-[#1e2d40] flex items-center justify-center">
                    <span className="text-[#a3e635] text-lg font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{member.name}</h3>
                    <p className="text-[#a3e635] text-sm">{member.role}</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#080d1a]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">Ready to Work With Us?</h2>
            <p className="text-slate-400">
              Browse our inventory or reach out to a specialist to find the right tradelines for
              your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/buy" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#a3e635] text-[#0a0f1e] font-bold hover:bg-[#b5f53f] transition-colors">
                Browse Inventory <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#1e2d40] text-slate-300 font-semibold hover:border-[#a3e635]/40 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
