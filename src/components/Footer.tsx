import Link from 'next/link';
import { TrendingUp, Shield, Mail, Phone } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Buy Tradelines', href: '/buy' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Credit Simulator', href: '/simulator' },
    { label: 'Services', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Disclaimer', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#080d1a] border-t border-[#1e2d40] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-9 h-9 rounded-lg bg-[#a3e635] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#0a0f1e]" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white">
                A1 <span className="text-[#a3e635]">Tradelines</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Premium authorized user tradelines to help you build and boost your credit profile.
              Trusted by 500+ clients nationwide.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:info@a1tradelines.com"
                className="flex items-center gap-2 text-slate-400 hover:text-[#a3e635] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@a1tradelines.com
              </a>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2 text-slate-400 hover:text-[#a3e635] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                (800) 555-1234
              </a>
            </div>
            {/* Trust badges */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 bg-[#111827] border border-[#1e2d40] rounded-lg px-3 py-1.5">
                <Shield className="w-4 h-4 text-[#a3e635]" />
                <span className="text-xs text-slate-300 font-medium">BBB Accredited</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#111827] border border-[#1e2d40] rounded-lg px-3 py-1.5">
                <span className="text-xs text-[#a3e635] font-bold">SSL</span>
                <span className="text-xs text-slate-300 font-medium">Secured</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-white font-semibold text-sm tracking-wide uppercase">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-[#a3e635] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[#1e2d40] space-y-4">
          <p className="text-xs text-slate-500 leading-relaxed max-w-4xl">
            <strong className="text-slate-400">Disclaimer:</strong> Tradelines are for authorized
            user purposes only. Results may vary. Adding authorized user tradelines is a legal
            credit-building strategy; however, individual credit score improvements depend on your
            full credit profile. A1 Tradelines does not guarantee specific score increases. We are
            not a credit repair organization and do not provide legal or financial advice.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} A1 Tradelines. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
