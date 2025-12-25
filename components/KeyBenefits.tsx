
import React from 'react';

const KeyBenefits: React.FC = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Edge-Performance",
      description: "Unser Script lädt asynchron in unter 10ms. Null Einfluss auf dein Google Lighthouse Score oder PageSpeed."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Privacy First",
      description: "Vollständige Anonymisierung am Edge. Keine Cookies, kein Fingerprinting – 100% konform mit DSGVO & ePrivacy."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-6 8a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1zm12 0a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1z" />
        </svg>
      ),
      title: "Intelligent Chaining",
      description: "Unsere KI erkennt Abbruchmomente und spielt Social Proof genau dann aus, wenn der Kunde zögert."
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-deep">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="relative group p-10 rounded-[32px] bg-glass border border-white/5 hover:border-brand-purple/40 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple mb-8 group-hover:shadow-[0_0_20px_rgba(189,52,254,0.3)] transition-all">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{benefit.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
