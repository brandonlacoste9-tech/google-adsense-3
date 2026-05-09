import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Clock, ArrowUpRight, BarChart2, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Capital Pulse",
    "description": "Institutional-grade market intelligence and financial news.",
    "url": "https://capital-pulse.vercel.app"
  };

  const articles = [
    {
      category: "Markets",
      title: "The Fed's Interest Rate Pivot: What It Means for Your Portfolio in 2026",
      desc: "Analyzing the macroeconomic shift and how to hedge against inflation in a high-rate environment.",
      time: "10 min read",
      author: "David Vance"
    },
    {
      category: "Digital Assets",
      title: "Bitcoin at $80k: Is the Institutional Accumulation Phase Just Beginning?",
      desc: "On-chain data suggests a massive supply crunch as ETF inflows reach record highs.",
      time: "8 min read",
      author: "Sarah Chen"
    },
    {
      category: "Wealth",
      title: "Tax Optimization Strategies for High Net Worth Individuals",
      desc: "Legal frameworks and offshore structures to protect your generational wealth.",
      time: "15 min read",
      author: "Michael Sterling"
    },
    {
      category: "Energy",
      title: "Nuclear Renaissance: The Investment Case for Uranium in 2026",
      desc: "Why clean energy mandates are driving a massive supply-demand gap in nuclear fuels.",
      time: "12 min read",
      author: "Robert Pike"
    },
    {
      category: "Tech",
      title: "Quantum Computing: The Imminent Threat to Global Encryption",
      desc: "Financial institutions must transition to post-quantum standards before the 'Q-Day' threshold.",
      time: "18 min read",
      author: "Elena Vance"
    }
  ];

  const intelligenceBriefs = [
    { category: "Macro", title: "The Sovereign Debt Reset: Navigating the Liquidity Crisis", desc: "Detailed analysis of central bank balance sheets and the transition to a new monetary regime.", time: "20 min read" },
    { category: "Markets", title: "Automated Alpha: How LLMs are Redefining Algorithmic Trading", desc: "The shift from statistical arbitrage to semantic-driven market execution.", time: "15 min read" },
    { category: "Policy", title: "Carbon Credits 2.0: The Tokenization of Environmental Assets", desc: "How blockchain is bringing transparency to the voluntary carbon market.", time: "12 min read" },
    { category: "Banking", title: "The Death of the Traditional Branch: Neo-Banks Reach 60% Market Share", desc: "Evaluating the structural decline of retail banking legacy systems.", time: "10 min read" },
    { category: "VC", title: "Defense Tech: The New Frontier for Institutional Capital", desc: "Why Silicon Valley is pivoting towards national security and dual-use technologies.", time: "14 min read" },
    { category: "Real Estate", title: "Tokenized Property: Liquidity comes to the World's Largest Asset Class", desc: "Analyzing the fractional ownership revolution in commercial real estate.", time: "16 min read" }
  ];

  return (
    <div className="pt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Top Ad Unit */}
      <div className="container mb-12">
        <div className="ad-slot-luxury">
          Premium Ad Placement - 728x90 Leaderboard
        </div>
      </div>

      {/* Main Hero */}
      <section className="mb-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="relative group cursor-pointer overflow-hidden finance-card">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-80" />
                <Image 
                  src="/hero_news.png" 
                  alt="Market Analysis" 
                  width={1200} 
                  height={800} 
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 p-12 z-20">
                  <span className="bg-gold text-black text-[10px] font-black px-3 py-1 uppercase tracking-widest mb-6 inline-block">
                    Exclusive Analysis
                  </span>
                  <h2 className="text-5xl font-black text-white leading-tight mb-6 max-w-2xl tracking-tighter">
                    Global Markets Brace for the <span className="text-gold italic underline">Sovereign Debt Reset.</span>
                  </h2>
                  <div className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Clock size={14} /> 2 Hours Ago</span>
                    <span className="flex items-center gap-2"><BarChart2 size={14} /> Macro Strategy</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="glass-panel p-8 flex-grow border-gold/20">
                <h3 className="font-black text-xs uppercase tracking-[0.2em] text-gold mb-8 flex items-center gap-2">
                  <TrendingUp size={16} /> Market Momentum
                </h3>
                <div className="space-y-8">
                  {articles.map((art, i) => (
                    <div key={i} className="group cursor-pointer">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-2">{art.category}</span>
                      <h4 className="text-lg font-bold text-white group-hover:text-gold transition-colors leading-snug">
                        {art.title}
                      </h4>
                      <div className="mt-2 flex justify-between items-center text-[10px] font-bold text-slate-600">
                        <span>{art.author}</span>
                        <span>{art.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ad-slot-luxury flex-grow flex items-center justify-center">
                Sidebar Ad - 300x250
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Services */}
      <section className="py-24 bg-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Risk Mitigation", desc: "Advanced algorithmic hedging for volatile markets." },
              { icon: BarChart2, title: "Asset Allocation", desc: "Optimizing portfolios for maximum alpha generation." },
              { icon: Zap, title: "Market Alpha", desc: "Early-stage identification of disruptive market trends." }
            ].map((service, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/20">
                  <service.icon size={28} className="text-gold" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News Grid */}
      <section className="py-24">
        <div className="container">
          <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Deep Intelligence</h2>
              <p className="text-slate-500 text-sm">Institutional analysis for the retail desk.</p>
            </div>
            <Link href="/news" className="text-gold font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group">
              View All Intelligence <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {intelligenceBriefs.map((brief, i) => (
              <Link key={i} href="/briefing" className="finance-card group cursor-pointer p-6 flex flex-col h-full">
                <div className="h-48 bg-slate-900 mb-6 relative overflow-hidden rounded-sm">
                  <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors" />
                  <div className="w-full h-full flex items-center justify-center text-gold/20 text-4xl font-black italic uppercase">
                    {brief.category}
                  </div>
                </div>
                <span className="text-[9px] font-black text-gold uppercase tracking-widest mb-2 block">{brief.category}</span>
                <h4 className="text-xl font-bold text-white mb-4 leading-tight group-hover:underline flex-grow">
                  {brief.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                  {brief.desc}
                </p>
                <div className="flex justify-between items-center text-[10px] font-black uppercase text-slate-600 border-t border-white/5 pt-6">
                  <span>{brief.time}</span>
                  <span className="text-white group-hover:text-gold transition-colors">Read Briefing →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-24 bg-white/5 border border-white/10 p-12">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gold mb-10 text-center">Economic Calendar // May 11 - 15</h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                { date: "May 11", event: "US CPI Inflation Data (April)", impact: "HIGH", forecast: "3.2%" },
                { date: "May 12", event: "UK Unemployment Rate", impact: "MED", forecast: "4.2%" },
                { date: "May 14", event: "US PPI Data", impact: "HIGH", forecast: "0.3% MoM" },
                { date: "May 15", event: "G7 Finance Ministers Meeting", impact: "HIGH", forecast: "N/A" }
              ].map((ev, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                  <div className="flex gap-8 items-center">
                    <span className="text-[10px] font-black text-slate-600 w-16">{ev.date}</span>
                    <span className="text-sm font-bold text-white">{ev.event}</span>
                  </div>
                  <div className="flex gap-12 items-center text-[10px] font-black uppercase tracking-widest">
                    <span className={ev.impact === 'HIGH' ? 'text-red-500' : 'text-gold'}>{ev.impact} IMPACT</span>
                    <span className="text-slate-400 w-20 text-right">{ev.forecast}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Newsletter */}
      <section className="py-32 bg-[#D4AF37] relative overflow-hidden">
        <div className="container text-center relative z-10">
          <h2 className="text-5xl font-black text-black mb-6 tracking-tighter">Subscribe to the Pulse.</h2>
          <p className="text-black/80 text-lg mb-12 max-w-2xl mx-auto font-bold uppercase tracking-widest text-xs">
            Institutional Market Alpha. Delivered Daily. Directly to Your Inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="INSTITUTIONAL EMAIL ADDRESS" 
              className="flex-1 bg-white/20 border-2 border-black/10 px-6 py-4 outline-none font-bold text-black placeholder:text-black/60 focus:border-black transition-all"
            />
            <button className="bg-black text-[#D4AF37] px-10 py-4 font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
              Join Terminal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
