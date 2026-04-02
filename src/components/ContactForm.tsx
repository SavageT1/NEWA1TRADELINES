'use client';

import { useState } from 'react';
import { CheckCircle, Loader2, Mail, Phone, MapPin, Calendar } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ firstname: '', lastname: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="grid lg:grid-cols-5 gap-12">
      {/* Contact Info */}
      <div className="lg:col-span-2 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Get in Touch</h2>
          <p className="text-slate-400 leading-relaxed">
            Ready to boost your credit? Our specialists are standing by to help you find the
            perfect tradelines for your goals. We typically respond within a few hours.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-[#111827] border border-[#1e2d40] rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-[#a3e635]/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-[#a3e635]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-0.5">Email Us</p>
              <a
                href="mailto:info@a1tradelines.com"
                className="text-slate-400 hover:text-[#a3e635] transition-colors text-sm"
              >
                info@a1tradelines.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-[#111827] border border-[#1e2d40] rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-[#a3e635]/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-[#a3e635]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-0.5">Call Us</p>
              <a
                href="tel:+18005551234"
                className="text-slate-400 hover:text-[#a3e635] transition-colors text-sm"
              >
                (800) 555-1234
              </a>
              <p className="text-xs text-slate-500 mt-0.5">Mon–Fri, 9am–6pm EST</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-[#111827] border border-[#1e2d40] rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-[#a3e635]/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#a3e635]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-0.5">Office</p>
              <p className="text-slate-400 text-sm">
                100 Financial District Blvd<br />
                Suite 200<br />
                Miami, FL 33131
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-[#111827] border border-[#1e2d40] rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-[#a3e635]/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-[#a3e635]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-0.5">Book a Consultation</p>
              <a
                href="#"
                className="text-[#a3e635] hover:text-[#b5f53f] transition-colors text-sm font-medium"
              >
                Schedule a free 30-min call →
              </a>
              <p className="text-xs text-slate-500 mt-0.5">Calendly booking coming soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="lg:col-span-3 bg-[#111827] border border-[#1e2d40] rounded-2xl p-8">
        {status === 'success' ? (
          <div className="text-center py-12 space-y-5">
            <div className="w-20 h-20 rounded-full bg-[#a3e635]/10 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-[#a3e635]" />
            </div>
            <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
            <p className="text-slate-400 max-w-sm mx-auto">
              Thank you for reaching out. A member of our team will get back to you within 24
              hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-8 py-3 rounded-xl bg-[#a3e635] text-[#0a0f1e] font-bold hover:bg-[#b5f53f] transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.firstname}
                  onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                  className="w-full bg-[#0d1526] border border-[#1e2d40] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#a3e635]/60 focus:ring-1 focus:ring-[#a3e635]/30 transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.lastname}
                  onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                  className="w-full bg-[#0d1526] border border-[#1e2d40] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#a3e635]/60 focus:ring-1 focus:ring-[#a3e635]/30 transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#0d1526] border border-[#1e2d40] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#a3e635]/60 focus:ring-1 focus:ring-[#a3e635]/30 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-[#0d1526] border border-[#1e2d40] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#a3e635]/60 focus:ring-1 focus:ring-[#a3e635]/30 transition-colors"
                placeholder="(555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Message *
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#0d1526] border border-[#1e2d40] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#a3e635]/60 focus:ring-1 focus:ring-[#a3e635]/30 transition-colors resize-none"
                placeholder="Tell us about your credit goals and how we can help..."
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#a3e635] text-[#0a0f1e] font-bold hover:bg-[#b5f53f] transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-base glow-lime-sm hover:glow-lime"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Message...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            <p className="text-xs text-slate-500 text-center">
              By submitting, you agree to our Privacy Policy. Your info is never sold or shared.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
