import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";
import MarketTicker from "@/components/MarketTicker";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <MarketTicker />
      
      <div className="container py-24 px-6 max-w-6xl mx-auto">
        <Link href="/" className="text-gold flex items-center gap-2 mb-16 font-black uppercase text-[10px] tracking-widest hover:-translate-x-1 transition-transform">
          <ArrowLeft size={16} /> Back to Terminal
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-gold font-black uppercase text-[10px] tracking-[0.3em] mb-6 block">Communication Terminal</span>
            <h1 className="text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">
              Connect with <span className="text-gold italic">Intelligence.</span>
            </h1>
            <p className="text-xl text-slate-400 font-bold leading-relaxed mb-16">
              Our research desk is available for institutional inquiries, media requests, and collaborative intelligence gathering.
            </p>

            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-2">Electronic Mail</h4>
                  <p className="text-slate-400 font-bold">desk@capital-pulse.com</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-2">HQ Operations</h4>
                  <p className="text-slate-400 font-bold">Financial District // World HQ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-12">
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-10">Send Briefing Request</h3>
            <form className="space-y-8">
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Institutional Identity</label>
                <input type="text" className="w-full bg-black border border-white/10 px-6 py-4 outline-none focus:border-gold text-white font-bold" placeholder="NAME / FIRM" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Terminal Address</label>
                <input type="email" className="w-full bg-black border border-white/10 px-6 py-4 outline-none focus:border-gold text-white font-bold" placeholder="EMAIL@INSTITUTION.COM" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Intelligence Requirement</label>
                <textarea className="w-full bg-black border border-white/10 px-6 py-4 outline-none focus:border-gold text-white font-bold h-40" placeholder="DESCRIBE YOUR REQUEST..."></textarea>
              </div>
              <button className="w-full bg-gold text-black py-6 font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform">
                Transmit Briefing <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
