
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-48 px-6 text-center bg-brand-deep">
      <div className="max-w-6xl mx-auto border border-white/5 p-16 md:p-32 rounded-[64px] bg-glass relative overflow-hidden group">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-purple/20 blur-[150px] rounded-full -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-1000"></div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-16 text-white leading-[0.85]">
            Trust that <br className="hidden md:block"/> <span className="text-gradient">wins.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
            <button className="bg-brand-purple text-white px-12 py-6 rounded-full font-black text-xl shadow-2xl shadow-brand-purple/40 hover:scale-105 transition-transform w-full sm:w-auto">
              Jetzt kostenlos starten
            </button>
            <button className="bg-white/5 text-white px-12 py-6 rounded-full font-bold text-xl border border-white/10 hover:bg-white/10 transition-all w-full sm:w-auto">
              API Dokumentation
            </button>
          </div>
          <p className="text-gray-500 font-bold uppercase tracking-[4px] text-[10px] opacity-60">Einsatzbereit in unter 5 Minuten. Keine Kreditkarte erforderlich.</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
