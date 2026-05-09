export default function DisclaimerPage() {
  return (
    <div className="container py-24">
      <article className="max-w-3xl mx-auto prose prose-invert prose-slate">
        <h1 className="text-4xl font-black mb-8 uppercase tracking-tighter text-white">Financial Disclaimer</h1>
        <p className="text-gold font-bold italic mb-8 uppercase tracking-widest text-xs">Strict Compliance Standards</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Not Financial Advice</h2>
          <p className="text-slate-400">
            The information provided on <strong>Capital Pulse</strong> is for general informational and educational purposes only. It is not intended to be, and should not be construed as, financial, legal, or tax advice. 
          </p>
          <p className="text-slate-400">
            Investing in financial markets involves high risk. You should always perform your own due diligence and consult with a licensed professional before making any investment decisions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">No Guarantee of Results</h2>
          <p className="text-slate-400">
            Past performance is not indicative of future results. Any earnings or income statements are only estimates of what we think is possible. We make no guarantees that you will achieve similar results or any results at all.
          </p>
        </section>

        <section className="mb-12 text-center p-8 bg-gold/5 border border-gold/10 rounded-sm">
          <p className="text-xs font-black uppercase tracking-widest text-gold">
            BY ACCESSING THIS WEBSITE, YOU AGREE TO OUR TERMS OF USE AND FULL RISK DISCLOSURE.
          </p>
        </section>
      </article>
    </div>
  );
}
