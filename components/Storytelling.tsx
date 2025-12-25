
import React from 'react';

const Storytelling: React.FC = () => {
  return (
    <section className="py-48 bg-[#080112]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div className="space-y-10">
            <span className="text-brand-purple font-black text-xs tracking-[5px] uppercase">The Insight</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-white tracking-tighter">
              Stille tötet deine <span className="text-gradient">Conversion.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
              Klassische Bewertungstools sind oft statisch und teuer. Kunden brauchen heute soziale Bestätigung in Echtzeit, um sich sicher zu fühlen.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-[40px] blur-2xl opacity-10 group-hover:opacity-25 transition duration-700"></div>
            <div className="relative bg-glass p-12 lg:p-16 rounded-[40px] border border-white/5 shadow-2xl">
              <span className="text-brand-blue font-bold text-[10px] tracking-[4px] uppercase mb-8 block opacity-70">The Solution</span>
              <h3 className="text-3xl lg:text-4xl font-black mb-8 text-white leading-tight tracking-tight">
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
