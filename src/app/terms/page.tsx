import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MarketTicker from "@/components/MarketTicker";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black">
      <MarketTicker />
      <div className="container py-24 px-6 max-w-4xl mx-auto">
        <Link href="/" className="text-gold flex items-center gap-2 mb-16 font-black uppercase text-[10px] tracking-widest">
          <ArrowLeft size={16} /> Terminal
        </Link>
        <h1 className="text-5xl font-black text-white uppercase tracking-tighter mb-12">Institutional <span className="text-gold">Mandate</span> (Terms)</h1>
        <div className="prose prose-invert prose-slate max-w-none prose-p:text-slate-400 prose-headings:text-white prose-headings:uppercase prose-headings:font-black">
          <p>By accessing the Capital Pulse Terminal, you agree to the following institutional mandates.</p>
          <h3>1. Non-Reliance</h3>
          <p>The content provided on this platform is for institutional intelligence purposes only and does not constitute financial, investment, or legal advice.</p>
          <h3>2. Intellectual Property</h3>
          <p>All research briefings, market tickers, and proprietary analysis are the property of Capital Pulse Media Group.</p>
          <h3>3. Acceptable Use</h3>
          <p>Users are prohibited from using automated bots to scrape institutional intelligence from this terminal without explicit written consent.</p>
        </div>
      </div>
    </main>
  );
}
