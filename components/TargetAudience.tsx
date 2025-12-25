
import React from 'react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-32 bg-[#080112] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="text-brand-purple font-black text-xs tracking-[5px] uppercase mb-4 block">Ecosystem</span>
          <h2 className="text-4xl font-black text-white tracking-tighter">Für jeden Anwendungsfall.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-glass p-10 rounded-[40px] border border-white/5 flex flex-col h-full hover:border-brand-purple/30 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-white">Für Shops</h3>
            <p className="text-gray-400 font-light mb-8 flex-1 leading-relaxed">Mehr Vertrauen, mehr Verkäufe – ohne großen Setup‑Aufwand. Integriert mit allen gängigen E-Commerce Systemen.</p>
            <div className="h-40 bg-white/5 rounded-3xl flex items-center justify-center text-4xl grayscale hover:grayscale-0 transition-all">🛒</div>
          </div>
          <div className="bg-glass p-10 rounded-[40px] border border-white/5 flex flex-col h-full hover:border-brand-purple/30 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-white">Für Agenturen</h3>
            <p className="text-gray-400 font-light mb-8 flex-1 leading-relaxed">White‑Label‑fähig, Multi‑Site‑Management und attraktive wiederkehrende Einnahmen für deine Kundenprojekte.</p>
            <div className="h-40 bg-white/5 rounded-3xl flex items-center justify-center text-4xl grayscale hover:grayscale-0 transition-all">🏢</div>
          </div>
          <div className="bg-glass p-10 rounded-[40px] border border-white/5 flex flex-col h-full hover:border-brand-purple/30 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-white">Für SaaS & Startups</h3>
            <p className="text-gray-400 font-light mb-8 flex-1 leading-relaxed">Perfekt für Landing Pages & Funnels, um Signups zu maximieren und die „Nobody-is-home“ Stimmung zu vertreiben.</p>
            <div className="h-40 bg-white/5 rounded-3xl flex items-center justify-center text-4xl grayscale hover:grayscale-0 transition-all">🚀</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
