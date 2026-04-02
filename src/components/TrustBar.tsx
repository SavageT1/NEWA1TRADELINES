import { Users, Shield, TrendingUp, Lock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Clients Served',
  },
  {
    icon: Shield,
    value: 'BBB',
    label: 'Accredited Business',
  },
  {
    icon: TrendingUp,
    value: '+87 Pts',
    label: 'Average Score Increase',
  },
  {
    icon: Lock,
    value: '256-bit',
    label: 'SSL Secure Checkout',
  },
];

export default function TrustBar() {
  return (
    <div className="bg-[#0d1526] border-y border-[#1e2d40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#a3e635]" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white leading-none">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
