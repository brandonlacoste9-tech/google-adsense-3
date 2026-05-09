"use client";

import { useEffect, useState } from "react";

export default function MarketTicker() {
  const [stocks, setStocks] = useState([
    { symbol: "BTC/USD", price: "82,412.00", change: "+4.2%" },
    { symbol: "ETH/USD", price: "2,412.50", change: "+2.1%" },
    { symbol: "GOLD", price: "2,350.20", change: "-0.5%" },
    { symbol: "S&P 500", price: "5,412.30", change: "+1.2%" },
    { symbol: "NASDAQ", price: "18,212.45", change: "+1.8%" },
    { symbol: "DXY", price: "104.20", change: "-0.1%" },
    { symbol: "OIL", price: "78.45", change: "+0.4%" },
    { symbol: "SOL/USD", price: "145.20", change: "+5.6%" },
  ]);

  return (
    <div className="bg-black border-y border-gold/10 py-3 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee gap-12 px-4">
        {[...stocks, ...stocks].map((stock, i) => (
          <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest">
            <span className="text-gold">{stock.symbol}</span>
            <span className="text-white">{stock.price}</span>
            <span className={stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
              {stock.change}
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
