import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MarketTicker from "@/components/MarketTicker";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black">
      <MarketTicker />
      <div className="container py-24 px-6 max-w-4xl mx-auto">
        <Link href="/" className="text-gold flex items-center gap-2 mb-16 font-black uppercase text-[10px] tracking-widest">
          <ArrowLeft size={16} /> Terminal
        </Link>
        <h1 className="text-5xl font-black text-white uppercase tracking-tighter mb-12">Data <span className="text-gold">Sovereignty</span> Policy</h1>
        <div className="prose prose-invert prose-slate max-w-none prose-p:text-slate-400 prose-headings:text-white prose-headings:uppercase prose-headings:font-black">
          <p>Effective Date: May 9, 2026</p>
          <p>At Capital Pulse, we prioritize the integrity and sovereignty of your data. This policy outlines how we handle institutional and personal information.</p>
          <h3>1. Intelligence Gathering</h3>
          <p>We collect only the data necessary to provide institutional-grade market briefings. This includes email addresses for newsletter delivery and anonymous terminal usage metrics.</p>
          <h3>2. Data Protection</h3>
          <p>Your data is secured using military-grade encryption standards. We do not sell or trade institutional intelligence or user data to third-party entities.</p>
          <h3>3. Cookies & Analytics</h3>
          <p>We use high-performance tracking nodes to optimize terminal latency and improve the delivery of financial news.</p>
        </div>
      </div>
    </main>
  );
}
