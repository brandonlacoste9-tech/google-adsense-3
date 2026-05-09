"use client";

export default function MarketTicker() {
  const stocks = [
    { symbol: "BTC", price: "82,412", change: "+4.2%" },
    { symbol: "ETH", price: "2,412", change: "+2.1%" },
    { symbol: "GOLD", price: "2,350", change: "-0.5%" },
    { symbol: "S&P", price: "5,412", change: "+1.2%" },
    { symbol: "NSDQ", price: "18,212", change: "+1.8%" },
    { symbol: "DXY", price: "104.2", change: "-0.1%" },
    { symbol: "OIL", price: "78.4", change: "+0.4%" },
    { symbol: "SOL", price: "145.2", change: "+5.6%" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-black/60 backdrop-blur-md border-b border-gold/10 py-1.5 overflow-hidden whitespace-nowrap pointer-events-none">
      <div className="flex animate-marquee gap-10 px-4 items-center">
        {[...stocks, ...stocks].map((stock, i) => (
          <div key={i} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest">
            <span className="text-gold/60">{stock.symbol}</span>
            <span className="text-white/80">{stock.price}</span>
            <span className={stock.change.startsWith('+') ? 'text-green-500/80' : 'text-red-500/80'}>
              {stock.change}
            </span>
            <span className="ml-8 text-white/10">|</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
