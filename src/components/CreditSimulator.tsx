'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { TrendingUp, Info, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

function ScoreGauge({ score }: { score: number }) {
  const min = 300;
  const max = 850;
  const pct = Math.min(Math.max((score - min) / (max - min), 0), 1);
  const angle = -135 + pct * 270;

  const getScoreColor = () => {
    if (score >= 750) return '#a3e635';
    if (score >= 700) return '#86efac';
    if (score >= 650) return '#fbbf24';
    if (score >= 600) return '#fb923c';
    return '#f87171';
  };

  const getScoreLabel = () => {
    if (score >= 750) return 'Excellent';
    if (score >= 700) return 'Good';
    if (score >= 650) return 'Fair';
    if (score >= 600) return 'Poor';
    return 'Very Poor';
  };

  const color = getScoreColor();

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-48 h-28">
        <svg viewBox="0 0 200 120" className="w-full h-full">
          {/* Background arc */}
          <path
            d="M 20 110 A 80 80 0 0 1 180 110"
            fill="none"
            stroke="#1e2d40"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <path
            d="M 20 110 A 80 80 0 0 1 180 110"
            fill="none"
            stroke={color}
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray={`${pct * 251.2} 251.2`}
            style={{ transition: 'stroke-dasharray 0.6s ease, stroke 0.4s ease' }}
          />
          {/* Score text */}
          <text
            x="100"
            y="85"
            textAnchor="middle"
            fill="white"
            fontSize="32"
            fontWeight="bold"
            fontFamily="Inter, system-ui"
          >
            {score}
          </text>
        </svg>
        {/* Needle-like indicator */}
        <div
          className="absolute bottom-2 left-1/2 w-1 h-12 origin-bottom rounded-full"
          style={{
            background: color,
            transform: `translateX(-50%) rotate(${angle}deg)`,
            transition: 'transform 0.6s ease',
            transformOrigin: '50% 100%',
          }}
        />
      </div>
      <span className="text-sm font-semibold" style={{ color }}>
        {getScoreLabel()}
      </span>
    </div>
  );
}

export default function CreditSimulator() {
  const [currentScore, setCurrentScore] = useState(620);
  const [utilization, setUtilization] = useState(45);
  const [tradelinesCount, setTradelinesCount] = useState(1);
  const [tradelineAge, setTradelineAge] = useState(3);

  const projected = useMemo(() => {
    let improvement = 0;

    // Utilization benefit (each tradeline adds limit, reducing overall utilization)
    const utilizationDrop = Math.min(utilization * 0.4 * tradelinesCount, utilization * 0.8);
    improvement += Math.round(utilizationDrop * 1.2);

    // Age benefit
    if (tradelineAge >= 7) improvement += 30 * tradelinesCount;
    else if (tradelineAge >= 5) improvement += 22 * tradelinesCount;
    else if (tradelineAge >= 3) improvement += 15 * tradelinesCount;
    else if (tradelineAge >= 1) improvement += 8 * tradelinesCount;

    // Diminishing returns for multiple
    if (tradelinesCount > 1) improvement = Math.round(improvement * 0.85);

    // Score ceiling
    const cap = Math.min(850 - currentScore, 150);
    improvement = Math.min(improvement, cap);

    return Math.round(currentScore + improvement);
  }, [currentScore, utilization, tradelinesCount, tradelineAge]);

  const gain = projected - currentScore;

  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          {/* Current Score */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-300">Current Credit Score</label>
              <span className="text-lg font-bold text-white">{currentScore}</span>
            </div>
            <input
              type="range"
              min={300}
              max={800}
              step={5}
              value={currentScore}
              onChange={(e) => setCurrentScore(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #a3e635 0%, #a3e635 ${((currentScore - 300) / 500) * 100}%, #1e2d40 ${((currentScore - 300) / 500) * 100}%, #1e2d40 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>300</span><span>800</span>
            </div>
          </div>

          {/* Current Utilization */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-300">Current Credit Utilization</label>
              <span className="text-lg font-bold text-white">{utilization}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={90}
              step={5}
              value={utilization}
              onChange={(e) => setUtilization(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #a3e635 0%, #a3e635 ${(utilization / 90) * 100}%, #1e2d40 ${(utilization / 90) * 100}%, #1e2d40 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>0%</span><span>90%</span>
            </div>
          </div>

          {/* Tradelines to Add */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-300">Tradelines to Add</label>
              <span className="text-lg font-bold text-white">{tradelinesCount}</span>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((n) => (
                <button
                  key={n}
                  onClick={() => setTradelinesCount(n)}
                  className={cn(
                    'flex-1 py-2 rounded-xl text-sm font-medium border transition-all',
                    tradelinesCount === n
                      ? 'bg-[#a3e635]/15 border-[#a3e635]/50 text-[#a3e635]'
                      : 'bg-[#0d1526] border-[#1e2d40] text-slate-400 hover:border-[#2a3d54] hover:text-white'
                  )}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Age of Tradelines */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-300">Age of Tradelines</label>
              <span className="text-lg font-bold text-white">{tradelineAge} yrs</span>
            </div>
            <div className="flex gap-2">
              {[1, 3, 5, 7, 10].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setTradelineAge(yr)}
                  className={cn(
                    'flex-1 py-2 rounded-xl text-xs font-medium border transition-all',
                    tradelineAge === yr
                      ? 'bg-[#a3e635]/15 border-[#a3e635]/50 text-[#a3e635]'
                      : 'bg-[#0d1526] border-[#1e2d40] text-slate-400 hover:border-[#2a3d54] hover:text-white'
                  )}
                >
                  {yr}yr
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#0d1526] rounded-2xl border border-[#1e2d40] p-8 flex flex-col items-center justify-center gap-6">
          <div className="text-center space-y-1">
            <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">
              Projected Score
            </p>
          </div>

          <ScoreGauge score={projected} />

          {gain > 0 && (
            <div className="flex items-center gap-2 bg-[#a3e635]/10 border border-[#a3e635]/25 rounded-xl px-5 py-3">
              <TrendingUp className="w-5 h-5 text-[#a3e635]" />
              <span className="text-[#a3e635] font-bold text-lg">+{gain} Points</span>
              <span className="text-slate-400 text-sm">estimated improvement</span>
            </div>
          )}

          <div className="w-full grid grid-cols-2 gap-3">
            <div className="bg-[#111827] rounded-xl p-3 text-center">
              <p className="text-xs text-slate-500 mb-1">Before</p>
              <p className="text-xl font-bold text-slate-300">{currentScore}</p>
            </div>
            <div className="bg-[#111827] rounded-xl p-3 text-center">
              <p className="text-xs text-slate-500 mb-1">After</p>
              <p className="text-xl font-bold text-[#a3e635]">{projected}</p>
            </div>
          </div>

          <Link
            href="/buy"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#a3e635] text-[#0a0f1e] font-bold hover:bg-[#b5f53f] transition-colors"
          >
            Browse Inventory <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-3 bg-[#0d1526] border border-[#1e2d40] rounded-xl p-4">
        <Info className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-slate-500 leading-relaxed">
          <strong className="text-slate-400">Disclaimer:</strong> This simulator provides
          estimated projections only. Actual credit score changes depend on your complete credit
          profile, the bureaus reporting, timing of updates, and other factors. Individual results
          will vary. This tool is for educational purposes and does not guarantee any specific
          outcome.
        </p>
      </div>
    </div>
  );
}
