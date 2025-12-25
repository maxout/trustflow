
import React from 'react';

const TrustCompliance: React.FC = () => {
  const points = [
    {
      label: "EU-Hosting",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    },
    {
      label: "DSGVO-konform",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
      label: "Zero Cookies",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    }
  ];

  return (
    <section className="py-32 bg-brand-deep px-6 border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-12 md:gap-20 mb-16">
           {points.map((p, i) => (
             <div key={i} className="text-center group">
               <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-brand-purple group-hover:border-brand-purple/50 group-hover:bg-brand-purple/10 transition-all mb-4">
                 {p.icon}
               </div>
               <p className="text-[9px] font-black text-gray-500 group-hover:text-gray-300 uppercase tracking-[3px] transition-colors">{p.label}</p>
             </div>
           ))}
        </div>
        <h2 className="text-3xl md:text-6xl font-black mb-8 text-white leading-tight tracking-tighter italic">Datenschutz ist ein Versprechen.</h2>
        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
          TrustFlow wurde nach dem Prinzip „Privacy by Design“ entwickelt. Wir speichern keine personenbezogenen Daten ohne Erlaubnis und hosten ausschließlich in der EU. Deine Kunden können dir blind vertrauen.
        </p>
      </div>
    </section>
  );
};

export default TrustCompliance;
