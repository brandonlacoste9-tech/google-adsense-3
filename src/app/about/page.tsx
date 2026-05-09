import Link from "next/link";
import { ArrowLeft, Shield, Target, Users, Globe } from "lucide-react";
import MarketTicker from "@/components/MarketTicker";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <MarketTicker />
      
      <div className="container py-24 px-6 max-w-5xl mx-auto">
        <Link href="/" className="text-gold flex items-center gap-2 mb-16 font-black uppercase text-[10px] tracking-widest hover:-translate-x-1 transition-transform">
          <ArrowLeft size={16} /> Back to Terminal
        </Link>

        <section className="mb-24">
          <span className="text-gold font-black uppercase text-[10px] tracking-[0.3em] mb-6 block">Our Foundation // Est. 2026</span>
          <h1 className="text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">
            The Architecture of <span className="text-gold italic">Market Alpha.</span>
          </h1>
          <p className="text-2xl text-slate-400 font-bold leading-relaxed mb-12">
            Capital Pulse was founded on a singular premise: that institutional-grade market intelligence should not be siloed within the walls of high-frequency trading firms.
          </p>
          <div className="h-64 bg-white/5 border border-white/10 flex items-center justify-center italic text-gold/20 text-4xl font-black uppercase">
             Institutional Research Desk
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { icon: Shield, title: "Sovereign Intelligence", desc: "Protecting generational wealth through deep macro analysis." },
            { icon: Target, title: "Precision Alpha", desc: "Identifying structural market imbalances before they become consensus." },
            { icon: Globe, title: "Global Mandate", desc: "Monitoring 24/7 liquidity shifts across every major financial hub." }
          ].map((pill, i) => (
            <div key={i} className="p-8 border border-white/5 bg-white/5">
              <pill.icon size={32} className="text-gold mb-6" />
              <h3 className="text-white font-black uppercase tracking-tight mb-4">{pill.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{pill.desc}</p>
            </div>
          ))}
        </div>

        <section className="prose prose-invert prose-slate max-w-none prose-p:text-slate-400 prose-p:text-lg">
          <h3>The Founding Vision</h3>
          <p>
            In an era of unprecedented volatility and structural monetary shifts, the need for clarity is paramount. Capital Pulse serves as the digital bridge between retail capital and institutional intelligence. We leverage advanced semantic analysis and on-chain metrics to decode the noise of modern markets.
          </p>
          <p>
            Our team consists of veteran macro strategists, quantitative analysts, and tech-sector experts dedicated to providing a "Sovereign View" of global finance. We do not provide advice; we provide the architecture for institutional understanding.
          </p>
        </section>

        <div className="mt-32 p-12 bg-gold text-black text-center">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Join the Inner Circle.</h2>
          <p className="font-bold uppercase tracking-widest text-[10px] mb-8">Access the Full Research Repository</p>
          <button className="bg-black text-gold px-12 py-4 font-black uppercase tracking-widest text-[10px]">Apply for Access</button>
        </div>
      </div>
    </main>
  );
}
