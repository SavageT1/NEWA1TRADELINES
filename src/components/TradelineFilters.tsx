'use client';

import { cn } from '@/lib/utils';

export interface FilterState {
  minLimit: number;
  minAge: number;
  maxUtilization: number;
  cardType: string;
  sortBy: 'price-asc' | 'price-desc' | 'age-desc' | 'limit-desc';
}

interface TradelineFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  count: number;
}

const limitOptions = [
  { label: 'Any', value: 0 },
  { label: '$5k+', value: 5000 },
  { label: '$10k+', value: 10000 },
  { label: '$15k+', value: 15000 },
  { label: '$25k+', value: 25000 },
  { label: '$50k+', value: 50000 },
];

const ageOptions = [
  { label: 'Any', value: 0 },
  { label: '1yr+', value: 12 },
  { label: '2yr+', value: 24 },
  { label: '3yr+', value: 36 },
  { label: '5yr+', value: 60 },
];

const utilizationOptions = [
  { label: 'Any', value: 100 },
  { label: 'Under 20%', value: 20 },
  { label: 'Under 10%', value: 10 },
  { label: 'Under 5%', value: 5 },
];

const cardTypeOptions = [
  { label: 'All', value: '' },
  { label: 'Visa', value: 'Visa' },
  { label: 'Mastercard', value: 'Mastercard' },
  { label: 'Amex', value: 'Amex' },
  { label: 'Discover', value: 'Discover' },
];

const sortOptions = [
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Oldest First', value: 'age-desc' },
  { label: 'Highest Limit', value: 'limit-desc' },
];

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-3 py-1.5 rounded-lg text-xs font-medium border transition-all',
        active
          ? 'bg-[#a3e635]/15 border-[#a3e635]/50 text-[#a3e635]'
          : 'bg-[#0d1526] border-[#1e2d40] text-slate-400 hover:text-white hover:border-[#2a3d54]'
      )}
    >
      {children}
    </button>
  );
}

export default function TradelineFilters({ filters, onChange, count }: TradelineFiltersProps) {
  return (
    <div className="bg-[#111827] border border-[#1e2d40] rounded-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-bold">Filters</h2>
        <span className="text-sm text-slate-400">{count} results</span>
      </div>

      <FilterGroup label="Credit Limit">
        {limitOptions.map((opt) => (
          <FilterChip
            key={opt.value}
            active={filters.minLimit === opt.value}
            onClick={() => onChange({ ...filters, minLimit: opt.value })}
          >
            {opt.label}
          </FilterChip>
        ))}
      </FilterGroup>

      <FilterGroup label="Account Age">
        {ageOptions.map((opt) => (
          <FilterChip
            key={opt.value}
            active={filters.minAge === opt.value}
            onClick={() => onChange({ ...filters, minAge: opt.value })}
          >
            {opt.label}
          </FilterChip>
        ))}
      </FilterGroup>

      <FilterGroup label="Max Utilization">
        {utilizationOptions.map((opt) => (
          <FilterChip
            key={opt.value}
            active={filters.maxUtilization === opt.value}
            onClick={() => onChange({ ...filters, maxUtilization: opt.value })}
          >
            {opt.label}
          </FilterChip>
        ))}
      </FilterGroup>

      <FilterGroup label="Card Type">
        {cardTypeOptions.map((opt) => (
          <FilterChip
            key={opt.value}
            active={filters.cardType === opt.value}
            onClick={() => onChange({ ...filters, cardType: opt.value })}
          >
            {opt.label}
          </FilterChip>
        ))}
      </FilterGroup>

      <div className="space-y-2">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Sort By</p>
        <select
          value={filters.sortBy}
          onChange={(e) =>
            onChange({ ...filters, sortBy: e.target.value as FilterState['sortBy'] })
          }
          className="w-full bg-[#0d1526] border border-[#1e2d40] rounded-xl px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-[#a3e635]/60 cursor-pointer"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={() =>
          onChange({
            minLimit: 0,
            minAge: 0,
            maxUtilization: 100,
            cardType: '',
            sortBy: 'price-asc',
          })
        }
        className="w-full text-center text-sm text-slate-500 hover:text-slate-300 transition-colors py-1"
      >
        Clear all filters
      </button>
    </div>
  );
}
