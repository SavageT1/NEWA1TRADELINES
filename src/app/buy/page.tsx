'use client';

import { useState, useMemo, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TradelineCard from '@/components/TradelineCard';
import TradelineFilters, { FilterState } from '@/components/TradelineFilters';
import type { Tradeline } from '@/lib/tradelines';
import { ArrowRight, SlidersHorizontal, X, Loader2 } from 'lucide-react';
import Link from 'next/link';

const DEFAULT_FILTERS: FilterState = {
  minLimit: 0,
  minAge: 0,
  maxUtilization: 100,
  cardType: '',
  sortBy: 'price-asc',
};

export default function BuyPage() {
  const [tradelines, setTradelines] = useState<Tradeline[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    fetch('/api/tradelines')
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: Tradeline[]) => {
        setTradelines(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load tradelines:', err);
        setError('Unable to load inventory. Please refresh.');
        setLoading(false);
      });
  }, []);

  const filtered = useMemo(() => {
    let items = tradelines.filter((t) => {
      if (t.creditLimit < filters.minLimit) return false;
      if (t.ageMonths < filters.minAge) return false;
      if (t.utilization > filters.maxUtilization) return false;
      if (filters.cardType && t.cardType !== filters.cardType) return false;
      return true;
    });

    items = [...items].sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'age-desc') return b.ageMonths - a.ageMonths;
      if (filters.sortBy === 'limit-desc') return b.creditLimit - a.creditLimit;
      return 0;
    });

    return items;
  }, [tradelines, filters]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page Hero */}
        <div className="bg-[#080d1a] border-b border-[#1e2d40]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
              <div>
                <p className="text-[#a3e635] text-sm font-semibold uppercase tracking-widest mb-3">
                  Live Inventory
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  Browse Tradelines
                </h1>
                <p className="text-slate-400 mt-3 max-w-xl">
                  All tradelines are verified to report to Equifax, Experian, and TransUnion.
                  Select the perfect account for your credit goals.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2 bg-[#111827] border border-[#1e2d40] rounded-xl px-4 py-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
                  <span className="text-sm text-slate-300 font-medium">
                    {loading ? '—' : `${filtered.length} Available`}
                  </span>
                </div>
                <Link
                  href="/simulator"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#1e2d40] text-slate-300 hover:border-[#a3e635]/40 hover:text-white transition-colors text-sm font-medium"
                >
                  Try Simulator <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden sticky top-16 z-40 bg-[#0a0f1e] border-b border-[#1e2d40] px-4 py-3">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#a3e635]" />
            Filters &amp; Sort
            {mobileFiltersOpen ? <X className="w-4 h-4 ml-1" /> : null}
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="hidden lg:block w-72 flex-shrink-0 sticky top-24 self-start">
              <TradelineFilters
                filters={filters}
                onChange={setFilters}
                count={filtered.length}
              />
            </div>

            {/* Mobile filters */}
            {mobileFiltersOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div
                  className="absolute inset-0 bg-black/60"
                  onClick={() => setMobileFiltersOpen(false)}
                />
                <div className="absolute left-0 top-0 bottom-0 w-80 bg-[#0a0f1e] overflow-y-auto p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-white font-bold">Filters</h2>
                    <button onClick={() => setMobileFiltersOpen(false)}>
                      <X className="w-5 h-5 text-slate-400" />
                    </button>
                  </div>
                  <TradelineFilters
                    filters={filters}
                    onChange={(f) => {
                      setFilters(f);
                      setMobileFiltersOpen(false);
                    }}
                    count={filtered.length}
                  />
                </div>
              </div>
            )}

            {/* Grid */}
            <div className="flex-1 min-w-0">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-32 gap-4">
                  <Loader2 className="w-10 h-10 text-[#a3e635] animate-spin" />
                  <p className="text-slate-400 text-sm">Loading live inventory…</p>
                </div>
              ) : error ? (
                <div className="text-center py-24">
                  <p className="text-red-400 text-lg">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-4 text-[#a3e635] hover:text-[#b5f53f] font-medium transition-colors"
                  >
                    Retry
                  </button>
                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center py-24 space-y-4">
                  <p className="text-slate-400 text-lg">No tradelines match your filters.</p>
                  <button
                    onClick={() => setFilters(DEFAULT_FILTERS)}
                    className="text-[#a3e635] hover:text-[#b5f53f] font-medium transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {visible.map((tl) => (
                      <TradelineCard key={tl.id} tradeline={tl} />
                    ))}
                  </div>

                  {hasMore && (
                    <div className="text-center mt-10">
                      <button
                        onClick={() => setVisibleCount((c) => c + 6)}
                        className="px-8 py-3.5 rounded-xl border border-[#1e2d40] text-slate-300 font-semibold hover:border-[#a3e635]/40 hover:text-white transition-colors"
                      >
                        Load More ({filtered.length - visibleCount} remaining)
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
