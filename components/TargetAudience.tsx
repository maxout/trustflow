
import React from 'react';

const TargetAudience: React.FC = () => {
  const groups = [
    {
      title: "Für Shops",
      desc: "Mehr Vertrauen, mehr Verkäufe – ohne großen Setup‑Aufwand. Integriert mit allen gängigen E-Commerce Systemen.",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    },
    {
      title: "Für Agenturen",
      desc: "White‑Label‑fähig, Multi‑Site‑Management und attraktive wiederkehrende Einnahmen für deine Kundenprojekte.",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    },
    {
      title: "Für SaaS & Startups",
      desc: "Perfekt für Landing Pages & Funnels, um Signups zu maximieren und die „Nobody-is-home“ Stimmung zu vertreiben.",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    }
  ];

  return (
    <section className="py-32 bg-[#080112] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="text-brand-purple font-black text-xs tracking-[5px] uppercase mb-4 block">Ecosystem</span>
          <h2 className="text-4xl font-black text-white tracking-tighter">Für jeden Anwendungsfall.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((group, i) => (
            <div key={i} className="bg-glass p-10 rounded-[40px] border border-white/5 flex flex-col h-full hover:border-brand-purple/30 transition-all group">
              <h3 className="text-2xl font-bold mb-4 text-white">{group.title}</h3>
              <p className="text-gray-400 font-light mb-8 flex-1 leading-relaxed">{group.desc}</p>
              <div className="h-48 bg-white/5 rounded-3xl flex items-center justify-center text-brand-purple opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all">
                {group.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
