import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import MarketTicker from "@/components/MarketTicker";

export const metadata: Metadata = {
  title: "Capital Pulse | Premier Financial Intelligence & Market News",
  description: "Your daily pulse on the global markets. Expert analysis on stocks, crypto, and wealth management for the modern investor.",
  other: {
    "google-adsense-account": "ca-pub-4276130467303652"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const stocks = [
    { symbol: "AAPL", price: "242.12", change: "+1.2%" },
    { symbol: "TSLA", price: "198.45", change: "-0.4%" },
    { symbol: "BTC", price: "84,231", change: "+4.5%" },
    { symbol: "SPY", price: "582.10", change: "+0.1%" },
    { symbol: "NVDA", price: "145.67", change: "+2.3%" },
    { symbol: "ETH", price: "3,124", change: "+1.8%" },
  ];

  return (
    <html lang="en">
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4276130467303652"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <MarketTicker />
        <div className="flex flex-col pt-[44px]">
          <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-[44px] z-50">
          <div className="container py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gold rounded-sm rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90">
                <div className="-rotate-45 font-black text-black text-xl">C</div>
              </div>
              <span className="font-black text-2xl uppercase tracking-tighter text-white">Capital <span className="text-gold">Pulse</span></span>
            </Link>
            <div className="hidden md:flex gap-8 text-xs font-black uppercase tracking-widest text-slate-400">
              <Link href="/" className="hover:text-gold">Markets</Link>
              <Link href="/news" className="hover:text-gold">News</Link>
              <Link href="/investing" className="hover:text-gold">Investing</Link>
              <Link href="/about" className="hover:text-gold">About</Link>
            </div>
            <button className="bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-gold hover:text-black transition-all">
              Newsletter
            </button>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="bg-black border-t border-white/5 py-20 mt-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="col-span-2">
                <h3 className="font-black text-xl mb-6 text-white uppercase tracking-tighter">Capital <span className="text-gold">Pulse</span></h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
                  Providing institutional-grade market intelligence to the modern retail investor. Our mission is to democratize financial data and empower wealth creation.
                </p>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                </div>
              </div>
              <div>
                <h4 className="text-gold font-bold text-[10px] uppercase tracking-[0.2em] mb-6">Market Intel</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><Link href="/" className="hover:text-white transition-colors">Equity Markets</Link></li>
                  <li><Link href="/" className="hover:text-white transition-colors">Digital Assets</Link></li>
                  <li><Link href="/" className="hover:text-white transition-colors">Wealth Strategy</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-gold font-bold text-[10px] uppercase tracking-[0.2em] mb-6">Institution</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
                  <li><Link href="/disclaimer" className="hover:text-white transition-colors">Financial Disclaimer</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              <p>© 2026 Capital Pulse Media Group. All rights reserved.</p>
              <p>Publisher ID: ca-pub-4276130467303652</p>
            </div>
          </div>
        </footer>
      </div>
      </body>
    </html>
  );
}
