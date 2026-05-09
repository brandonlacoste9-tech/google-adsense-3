import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import MarketTicker from "@/components/MarketTicker";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-black">
      <MarketTicker />
      <div className="container py-24 px-6 max-w-4xl mx-auto">
        <Link href="/" className="text-gold flex items-center gap-2 mb-16 font-black uppercase text-[10px] tracking-widest">
          <ArrowLeft size={16} /> Terminal
        </Link>
        <div className="bg-red-500/10 border border-red-500/20 p-8 mb-12 flex items-center gap-6">
          <AlertTriangle size={32} className="text-red-500" />
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Financial <span className="text-gold">Disclaimer</span></h1>
        </div>
        <div className="prose prose-invert prose-slate max-w-none prose-p:text-slate-400 prose-headings:text-white prose-headings:uppercase prose-headings:font-black">
          <p>Capital Pulse is a publisher of financial news and institutional intelligence. We are not a registered investment advisor, broker-dealer, or financial analyst.</p>
          <h3>Risk of Loss</h3>
          <p>Trading financial markets involves a high degree of risk. You should only trade with capital you can afford to lose.</p>
          <h3>No Performance Guarantees</h3>
          <p>Past performance is not indicative of future results. Any "Alpha" identified in our research briefings is based on historical data and semantic analysis, not guaranteed returns.</p>
        </div>
      </div>
    </main>
  );
}
