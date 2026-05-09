import Link from "next/link";
import { ArrowLeft, Search, Filter, TrendingUp } from "lucide-react";
import MarketTicker from "@/components/MarketTicker";

export default function NewsIndex() {
  const categories = ["Macro", "Markets", "Policy", "Banking", "VC", "Real Estate", "Energy", "Tech"];
  
  const newsItems = [
    { category: "Macro", title: "The Sovereign Debt Reset: Navigating the Liquidity Crisis", time: "20 min read", date: "May 9, 2026" },
    { category: "Markets", title: "Automated Alpha: How LLMs are Redefining Algorithmic Trading", time: "15 min read", date: "May 8, 2026" },
    { category: "Policy", title: "Carbon Credits 2.0: The Tokenization of Environmental Assets", time: "12 min read", date: "May 8, 2026" },
    { category: "Banking", title: "The Death of the Traditional Branch: Neo-Banks Reach 60%", time: "10 min read", date: "May 7, 2026" },
    { category: "VC", title: "Defense Tech: The New Frontier for Institutional Capital", time: "14 min read", date: "May 6, 2026" },
    { category: "Energy", title: "Nuclear Renaissance: The Case for Uranium in 2026", time: "12 min read", date: "May 5, 2026" }
  ];

  return (
    <main className="min-h-screen bg-black">
      <MarketTicker />
      
      <div className="container py-20 px-6">
        <Link href="/" className="text-gold flex items-center gap-2 mb-12 font-black uppercase text-[10px] tracking-widest hover:-translate-x-1 transition-transform">
          <ArrowLeft size={16} /> Back to Terminal
        </Link>

        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <h1 className="text-6xl font-black text-white uppercase tracking-tighter mb-4">Intelligence <span className="text-gold">Terminal</span></h1>
            <p className="text-slate-500 font-bold max-w-xl">The definitive archive of institutional research and market analysis.</p>
          </div>
          
          <div className="flex gap-4 w-full lg:w-auto">
            <div className="relative flex-grow lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input 
                type="text" 
                placeholder="SEARCH INTELLIGENCE..." 
                className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-6 text-xs font-bold text-white outline-none focus:border-gold transition-all"
              />
            </div>
            <button className="bg-white/5 border border-white/10 px-6 flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10">
              <Filter size={14} /> Filter
            </button>
          </div>
        </div>

        {/* Category Ticker */}
        <div className="flex gap-4 overflow-x-auto pb-8 mb-12 scrollbar-hide border-b border-white/5">
          {categories.map((cat) => (
            <button key={cat} className="px-6 py-2 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-gold hover:border-gold whitespace-nowrap transition-all">
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {newsItems.map((item, i) => (
            <article key={i} className="group cursor-pointer flex gap-8 pb-12 border-b border-white/5 last:border-0">
              <div className="w-40 h-40 bg-slate-900 flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-all" />
                <div className="w-full h-full flex items-center justify-center text-gold/20 text-2xl font-black italic uppercase">
                   {item.category}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[9px] font-black text-gold uppercase tracking-widest mb-4 block">{item.category} // {item.date}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors leading-tight mb-4">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                  <span>{item.time}</span>
                  <span className="w-1 h-1 bg-slate-800 rounded-full" />
                  <span className="text-white">Read Briefing →</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Sidebar-style Monetization */}
        <div className="mt-20 p-12 bg-white/5 border border-white/10 text-center">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Market Opportunity</p>
          <div className="text-gold text-2xl font-black uppercase tracking-tighter mb-8 italic">Institutional Liquidity Access</div>
          <button className="bg-gold text-black px-12 py-4 font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform">
             Request Prospectus
          </button>
        </div>
      </div>
    </main>
  );
}
