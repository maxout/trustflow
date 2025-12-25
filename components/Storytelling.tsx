
import React from 'react';

const Storytelling: React.FC = () => {
  return (
    <section className="py-32 bg-[#080112]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <span className="text-brand-purple font-black text-xs tracking-[5px] uppercase">Analysis</span>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] text-white">
              Stille tötet deine <span className="text-gradient">Conversion.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Klassische Bewertungstools sind oft statisch und teuer. Kunden brauchen heute soziale Bestätigung in Echtzeit, um sich sicher zu fühlen.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
            <div className="relative bg-glass p-12 rounded-3xl border border-white/5 shadow-2xl">
              <span className="text-brand-blue font-bold text-xs tracking-[4px] uppercase mb-6 block">Solution</span>
              <h3 className="text-3xl font-bold mb-6 text-white leading-tight">
                Der "Puls" für deinen digitalen Shop.
              </h3>
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                TrustFlow erweckt deine Seite zum Leben. Zeige echte Interaktionen, Käufe und Anmeldungen – dort wo sie passieren. Ein Skript, unendliche Wirkung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
