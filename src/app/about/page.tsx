import { ShieldCheck, TrendingUp, BarChart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-black mb-8 uppercase tracking-tighter text-white">The Pulse of <span className="text-gold">Capital.</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Capital Pulse is the definitive source for institutional-grade market intelligence, tailored for the sophisticated modern investor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="finance-card p-10">
            <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold mb-8">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-black text-white mb-4 uppercase tracking-tight">Integrity</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Unbiased, data-driven analysis that cuts through the market noise.</p>
          </div>
          <div className="finance-card p-10">
            <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold mb-8">
              <TrendingUp size={24} />
            </div>
            <h3 className="font-black text-white mb-4 uppercase tracking-tight">Alpha</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Identifying non-obvious market opportunities before they go mainstream.</p>
          </div>
          <div className="finance-card p-10">
            <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold mb-8">
              <BarChart size={24} />
            </div>
            <h3 className="font-black text-white mb-4 uppercase tracking-tight">Precision</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Institutional-grade quantitative research for the retail desk.</p>
          </div>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-lg leading-relaxed text-slate-400">
            Founded in 2026, Capital Pulse was born from a simple observation: the gap between institutional information and retail access was widening. We built this platform to level the playing field, providing the same high-fidelity research used by hedge funds to the everyday investor.
          </p>
        </div>
      </div>
    </div>
  );
}
