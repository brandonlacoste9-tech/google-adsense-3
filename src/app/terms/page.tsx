export default function TermsPage() {
  return (
    <div className="container py-24">
      <article className="max-w-3xl mx-auto prose prose-invert prose-slate">
        <h1 className="text-4xl font-black mb-8 uppercase tracking-tighter text-white">Terms of Use</h1>
        <p className="text-gold font-bold italic mb-8 uppercase tracking-widest text-xs">Revised: May 2026</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">1. Service Agreement</h2>
          <p className="text-slate-400">
            By accessing Capital Pulse, you acknowledge that you have read, understood, and agreed to be bound by these terms, which constitute a legally binding agreement between you and Capital Pulse Media Group.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">2. Proprietary Research</h2>
          <p className="text-slate-400">
            All research, analysis, and data visualizations on this platform are the property of Capital Pulse and are protected by international copyright laws.
          </p>
        </section>
      </article>
    </div>
  );
}
