import Link from "next/link";
import { ArrowLeft, Clock, User, Share2, Bookmark, BarChart3, ShieldCheck } from "lucide-react";
import MarketTicker from "@/components/MarketTicker";
import AdSlot from "@/components/AdSlot";

export default function ArticleDetail() {
  return (
    <main className="min-h-screen bg-black">
      <MarketTicker />
      
      <article className="container py-24 px-6 max-w-6xl mx-auto">
        {/* Navigation */}
        <Link href="/news" className="text-gold flex items-center gap-2 mb-16 font-black uppercase text-[10px] tracking-widest hover:-translate-x-1 transition-transform">
          <ArrowLeft size={16} /> Return to Terminal
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <header className="mb-16 border-b border-white/5 pb-16">
              <span className="text-gold font-black uppercase text-[10px] tracking-[0.3em] mb-6 block">
                Macro Strategy // Sector Analysis
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">
                The Sovereign Debt Reset: <span className="text-gold italic">Liquidity 2026.</span>
              </h1>
              <div className="flex flex-wrap gap-8 items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
                <div className="flex items-center gap-3"><User size={16} className="text-gold" /> By David Vance</div>
                <div className="flex items-center gap-3"><Clock size={16} className="text-gold" /> 20 Min Read</div>
                <div className="flex items-center gap-3 text-white border-l border-white/10 pl-8">Published May 9, 2026</div>
              </div>
            </header>

            <div className="prose prose-invert prose-slate max-w-none 
              prose-p:text-slate-400 prose-p:text-lg prose-p:leading-relaxed
              prose-headings:text-white prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight
              prose-strong:text-gold prose-blockquote:border-gold prose-blockquote:bg-white/5 prose-blockquote:p-8">
              
              <p className="text-2xl text-white font-bold mb-12 leading-snug">
                As we approach the mid-point of 2026, the global financial system is facing a structural reconfiguration of unprecedented scale. The "Sovereign Debt Reset" is no longer a fringe hypothesis; it is the operational reality for central banks worldwide.
              </p>

              <h3>The Liquidity Imbalance</h3>
              <p>
                The primary driver of current market volatility is the widening gap between state liability and real-world productivity. As interest payments on global sovereign debt exceed military spending for the first time in modern history, the "Fiscal Cliff" has become a "Fiscal Canyon."
              </p>

              <blockquote>
                "We are moving from a world of abundant liquidity and low inflation to a world of structural scarcity and secular inflationary pressure." — Global Macro Outlook 2026
              </blockquote>

              <AdSlot type="in-article" className="my-16" />

              <h3>Hedging the Reset</h3>
              <p>
                For institutional portfolios, the traditional 60/40 model is effectively dead. Alpha generation now requires a sophisticated mix of decentralized assets, commodity-backed securities, and short-duration volatility hedges.
              </p>
              
              <div className="bg-gold/5 border border-gold/20 p-10 my-16">
                <h4 className="text-white font-black mb-4 flex items-center gap-3"><BarChart3 className="text-gold" /> Institutional Action Plan</h4>
                <ul className="text-sm text-slate-400 space-y-4">
                  <li><strong>I. Diversification into Hard Assets:</strong> Increase allocation to physical bullion and tokenized real estate.</li>
                  <li><strong>II. Volatility Arbitrage:</strong> Utilizing AI-driven models to capture edge in high-frequency liquidity spikes.</li>
                  <li><strong>III. Decentralized Sovereignty:</strong> Holding a percentage of tier-1 digital assets outside the legacy banking perimeter.</li>
                </ul>
              </div>

              <p>
                The transition will be volatile, but for those with the correct architectural framework, it represents the single greatest wealth transfer opportunity of the century.
              </p>
            </div>
          </div>

          {/* Article Sidebar */}
          <div className="lg:w-1/3 space-y-12">
            <div className="sticky top-24 space-y-12">
              <AdSlot type="sidebar" />
              
              <div className="glass-panel p-8 border-gold/20">
                <h4 className="text-xs font-black uppercase tracking-widest text-gold mb-8 flex items-center gap-2">
                  <ShieldCheck size={16} /> Terminal Verification
                </h4>
                <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase tracking-widest">
                  This intelligence briefing has been verified for institutional accuracy by the Capital Pulse Research Desk. 
                </p>
                <div className="mt-8 pt-8 border-t border-white/5 flex gap-4">
                   <button className="flex-1 bg-white/5 p-4 flex items-center justify-center text-white hover:bg-white/10 transition-all"><Share2 size={16} /></button>
                   <button className="flex-1 bg-white/5 p-4 flex items-center justify-center text-white hover:bg-white/10 transition-all"><Bookmark size={16} /></button>
                </div>
              </div>

              <div className="p-8 border border-white/5">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">Related Briefings</h4>
                <div className="space-y-6">
                  {[
                    "Bitcoin Accumulation: The ETF Feedback Loop",
                    "The Death of the Dollar: BRICS+ Momentum",
                    "AI in Banking: Structural Workforce Reduction"
                  ].map((t, i) => (
                    <a key={i} href="#" className="block group">
                      <h5 className="text-sm font-bold text-white group-hover:text-gold transition-colors">{t}</h5>
                      <span className="text-[9px] text-slate-600 font-bold uppercase tracking-widest mt-2 block">May 2026 // Intelligence Brief</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
