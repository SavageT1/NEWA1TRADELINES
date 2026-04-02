'use client';

import { useState } from 'react';
import { CreditCard, Calendar, BarChart2, Clock } from 'lucide-react';
import { cn, formatCurrency, formatMonthsToYears } from '@/lib/utils';
import type { Tradeline } from '@/lib/tradelines';
import ContactModal from './ContactModal';

const cardTypeConfig = {
  Visa: { color: 'bg-blue-500/20 text-blue-300 border-blue-500/30', dot: 'bg-blue-400' },
  Mastercard: { color: 'bg-orange-500/20 text-orange-300 border-orange-500/30', dot: 'bg-orange-400' },
  Amex: { color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', dot: 'bg-emerald-400' },
  Discover: { color: 'bg-purple-500/20 text-purple-300 border-purple-500/30', dot: 'bg-purple-400' },
};

interface TradelineCardProps {
  tradeline: Tradeline;
}

export default function TradelineCard({ tradeline }: TradelineCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const config = cardTypeConfig[tradeline.cardType];

  return (
    <>
      <div className="bg-[#111827] border border-[#1e2d40] rounded-2xl p-6 card-hover flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border',
                  config.color
                )}
              >
                <span className={cn('w-1.5 h-1.5 rounded-full', config.dot)} />
                {tradeline.cardType}
              </span>
            </div>
            <p className="text-slate-300 text-sm font-medium">{tradeline.bankName}</p>
          </div>
          <CreditCard className="w-7 h-7 text-[#1e2d40]" />
        </div>

        {/* Credit Limit */}
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Credit Limit</p>
          <p className="text-3xl font-bold text-white">
            {formatCurrency(tradeline.creditLimit)}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#0d1526] rounded-xl p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-xs text-slate-500">Account Age</span>
            </div>
            <p className="text-sm font-semibold text-slate-200">
              {formatMonthsToYears(tradeline.ageMonths)}
            </p>
          </div>
          <div className="bg-[#0d1526] rounded-xl p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-xs text-slate-500">Utilization</span>
            </div>
            <p className={cn(
              'text-sm font-semibold',
              tradeline.utilization <= 5 ? 'text-[#a3e635]' : tradeline.utilization <= 10 ? 'text-yellow-400' : 'text-orange-400'
            )}>
              {tradeline.utilization}%
            </p>
          </div>
          <div className="bg-[#0d1526] rounded-xl p-3 col-span-2">
            <div className="flex items-center gap-1.5 mb-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-xs text-slate-500">Reporting Date</span>
            </div>
            <p className="text-sm font-semibold text-slate-200">
              Reports on the {tradeline.reportingDate} of each month
            </p>
          </div>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto pt-2 border-t border-[#1e2d40] flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500">Price</p>
            <p className="text-2xl font-bold text-[#a3e635]">
              {formatCurrency(tradeline.price)}
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-[#a3e635] text-[#0a0f1e] text-sm font-bold hover:bg-[#b5f53f] transition-colors glow-lime-sm hover:glow-lime"
          >
            Request This
          </button>
        </div>
      </div>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        tradeline={tradeline}
      />
    </>
  );
}
