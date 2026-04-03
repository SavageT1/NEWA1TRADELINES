'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Buy Tradelines', href: '/buy' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Simulator', href: '/simulator' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0a0f1e]/95 backdrop-blur-md border-b border-[#1e2d40] shadow-xl'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              alt="A1 Tradelines"
              width={44}
              height={44}
              className="object-contain"
            />
            <span className="text-xl font-bold text-white tracking-tight">
              A1 <span className="text-[#a3e635]">Tradelines</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-[#a3e635] bg-[#a3e635]/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/buy"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#a3e635] text-[#0a0f1e] text-base font-bold hover:bg-[#b5f53f] transition-colors glow-lime-sm hover:glow-lime"
            >
              Get Started
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0d1526] border-t border-[#1e2d40]">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block px-4 py-3.5 rounded-lg text-base font-medium transition-colors',
                  pathname === link.href
                    ? 'text-[#a3e635] bg-[#a3e635]/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#1e2d40]">
              <Link
                href="/buy"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-5 py-4 rounded-xl bg-[#a3e635] text-[#0a0f1e] text-base font-bold hover:bg-[#b5f53f] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
