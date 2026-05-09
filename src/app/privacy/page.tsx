export default function PrivacyPage() {
  return (
    <div className="container py-24">
      <article className="max-w-3xl mx-auto prose prose-invert prose-slate">
        <h1 className="text-4xl font-black mb-8 uppercase tracking-tighter text-white">Privacy Policy</h1>
        <p className="text-gold font-bold italic mb-8 uppercase tracking-widest text-xs">Effective: May 2026</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Data Protection Mandate</h2>
          <p className="text-slate-400">
            At Capital Pulse, we prioritize the security of your financial data and personal information. This policy outlines our standards for collection, storage, and processing.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Advertising & Cookies</h2>
          <p className="text-slate-400">
            We utilize Google AdSense for monetization. Google and its partners use cookies to serve personalized advertisements based on your browsing behavior. You can manage these settings via your browser or Google's advertising dashboard.
          </p>
        </section>
      </article>
    </div>
  );
}
