export default function ContactPage() {
  return (
    <div className="container py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter text-white">Contact Terminal</h1>
        <p className="text-slate-500 mb-12 uppercase tracking-widest text-xs font-black">Institutional Support & Inquiries</p>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Full Name</label>
              <input 
                type="text" 
                placeholder="Institutional Name"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 outline-none focus:border-gold transition-all text-white font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Email Address</label>
              <input 
                type="email" 
                placeholder="Corporate Email"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 outline-none focus:border-gold transition-all text-white font-bold"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Message Payload</label>
            <textarea 
              rows={8}
              placeholder="Detailed Inquiry..."
              className="w-full bg-white/5 border border-white/10 px-6 py-4 outline-none focus:border-gold transition-all text-white font-bold resize-none"
            ></textarea>
          </div>
          <button className="btn-luxury w-full py-6 text-lg">
            Send Transmission
          </button>
        </form>

        <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
          <div>
            <h4 className="text-white mb-4">Electronic Mail</h4>
            <p className="text-slate-400">HQ: terminal@capitalpulse.io</p>
            <p className="text-slate-400">Media: news@capitalpulse.io</p>
          </div>
          <div>
            <h4 className="text-white mb-4">Operations</h4>
            <p className="text-slate-400">Digital-First Architecture</p>
            <p className="text-slate-400">Global Node Coverage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
