
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Einbinden",
      description: "Füge ein Script zu deiner Website hinzu. Einmalig, leichtgewichtig und ohne Speed-Verlust."
    },
    {
      number: "02",
      title: "Events empfangen",
      description: "Käufe, Signups oder Bewertungen werden automatisch via Webhooks oder API erfasst."
    },
    {
      number: "03",
      title: "Vertrauen anzeigen",
      description: "Social Proof erscheint genau dort, wo er wirkt. Vollautomatisch und intelligent gesteuert."
    }
  ];

  return (
    <section id="how-it-works" className="py-48 px-6 bg-[#080112]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24">
          <span className="text-brand-purple font-black text-xs tracking-[5px] uppercase mb-6 block">The Process</span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight">Einfachheit als <span className="text-gradient">Standard.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 group">
              <div className="text-6xl lg:text-7xl font-black text-white/5 mb-8 select-none group-hover:text-brand-purple/10 transition-colors">
                {step.number}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-5 text-white tracking-tight">{step.title}</h3>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
