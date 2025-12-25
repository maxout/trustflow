
import React from 'react';

const TrustCompliance: React.FC = () => {
  return (
    <section className="py-32 bg-brand-deep px-6 border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-16 mb-16">
           <div className="text-center group">
             <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🇪🇺</div>
             <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">EU-Hosting</p>
           </div>
           <div className="text-center group">
             <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🔒</div>
             <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">DSGVO-konform</p>
           </div>
           <div className="text-center group">
             <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">💎</div>
             <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Zero Cookies</p>
           </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-8 text-white leading-tight">Datenschutz ist ein Versprechen.</h2>
        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
          TrustFlow wurde nach dem Prinzip „Privacy by Design“ entwickelt. Wir speichern keine personenbezogenen Daten ohne Erlaubnis und hosten ausschließlich in der EU. Deine Kunden können dir blind vertrauen.
        </p>
      </div>
    </section>
  );
};

export default TrustCompliance;
