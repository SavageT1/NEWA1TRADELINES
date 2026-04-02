import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditSimulator from '@/components/CreditSimulator';
import { BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Credit Score Simulator | A1 Tradelines',
  description:
    'Use our free credit score simulator to project the impact of adding authorized user tradelines before you buy.',
};

export default function SimulatorPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <div className="bg-[#080d1a] border-b border-[#1e2d40]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#a3e635]/10 border border-[#a3e635]/25 rounded-full px-4 py-2 text-sm text-[#a3e635] font-medium mb-5">
                <BarChart3 className="w-4 h-4" />
                Free Tool — No Sign-Up Required
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Credit Score Simulator
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                Model the impact of adding authorized user tradelines before you spend a dollar.
                Adjust your current score, utilization, and tradeline parameters to see a
                projected improvement.
              </p>
            </div>
          </div>
        </div>

        {/* Simulator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <CreditSimulator />
        </div>

        {/* How scores improve */}
        <section className="py-16 bg-[#080d1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              What Drives Score Improvement?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Lower Utilization',
                  pct: '30%',
                  desc: 'Adding a high-limit tradeline increases your total available credit, which reduces your overall utilization ratio — one of the biggest score factors.',
                },
                {
                  title: 'Older Average Age',
                  pct: '15%',
                  desc: 'Tradelines with long history raise the average age of your accounts. FICO rewards older credit histories with higher scores.',
                },
                {
                  title: 'Credit Mix',
                  pct: '10%',
                  desc: 'Adding a different card type or bank diversifies your credit mix, which can positively impact your score composition.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#111827] border border-[#1e2d40] rounded-2xl p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <span className="text-[#a3e635] font-bold text-lg">{item.pct}</span>
                  </div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">of FICO score</p>
                  <div className="h-1.5 rounded-full bg-[#1e2d40]">
                    <div
                      className="h-full rounded-full bg-[#a3e635]"
                      style={{ width: item.pct }}
                    />
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">Like What You See?</h2>
            <p className="text-slate-400">
              Browse our verified inventory and find the tradelines that match your simulation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/buy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#a3e635] text-[#0a0f1e] font-bold hover:bg-[#b5f53f] transition-colors glow-lime"
              >
                Browse Inventory <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#1e2d40] text-slate-300 font-semibold hover:border-[#a3e635]/40 hover:text-white transition-colors"
              >
                Talk to a Specialist
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 pt-2 text-sm text-slate-500">
              {['No hard inquiry', 'Results in 30–45 days', 'BBB Accredited'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#a3e635]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
