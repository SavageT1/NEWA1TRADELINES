'use client';

import { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import type { Tradeline } from '@/lib/tradelines';
import { formatCurrency, formatMonthsToYears } from '@/lib/utils';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  tradeline?: Tradeline;
}

export default function ContactModal({ open, onClose, tradeline }: ContactModalProps) {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: tradeline
      ? `I'm interested in the ${tradeline.bankName} ${tradeline.cardType} tradeline (${formatCurrency(tradeline.creditLimit)} limit, ${formatMonthsToYears(tradeline.ageMonths)} old, $${tradeline.price}).`
      : '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  if (!open) return null;

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
      } else {
        setStatus('error');
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network error. Please try again.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#111827] border border-[#1e2d40] rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-[#1e2d40]">
          <div>
            <h2 className="text-xl font-bold text-white">Request a Tradeline</h2>
            <p className="text-slate-400 text-sm mt-0.5">
              {tradeline
                ? `${tradeline.bankName} ${tradeline.cardType} — ${formatCurrency(tradeline.creditLimit)}`
                : "We'll reach out within 24 hours"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {status === 'success' ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#a3e635]/10 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-[#a3e635]" />
              </div>
              <h3 className="text-xl font-bold text-white">Request Sent!</h3>
              <p className="text-slate-400 text-sm max-w-xs mx-auto">
                Thank you! Our team will review your request and reach out within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#a3e635] text-[#0a0f1e] font-bold hover:bg-[#b5f53f] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full bg-[#0d1526] border border-[#1e2d40] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#a3e635]/60 focus:ring-1 focus:ring-[#a3e635]/30 transition-colors"
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
                    className="w-full bg-[#0d1526] border border-[#1e2d40] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#a3e635]/60 focus:ring-1 focus:ring-[#a3e635]/30 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#0d1526] border border-[#1e2d40] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#a3e635]/60 focus:ring-1 focus:ring-[#a3e635]/30 transition-colors"
                  placeholder="john@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#0d1526] border border-[#1e2d40] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#a3e635]/60 focus:ring-1 focus:ring-[#a3e635]/30 transition-colors"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#0d1526] border border-[#1e2d40] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#a3e635]/60 focus:ring-1 focus:ring-[#a3e635]/30 transition-colors resize-none"
                  placeholder="Tell us about your credit goals..."
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
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#a3e635] text-[#0a0f1e] font-bold hover:bg-[#b5f53f] transition-colors disabled:opacity-70 disabled:cursor-not-allowed glow-lime-sm"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Request'
                )}
              </button>

              <p className="text-xs text-slate-500 text-center">
                Your information is encrypted and never shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
