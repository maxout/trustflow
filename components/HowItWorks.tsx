
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
    <section id="how-it-works" className="py-32 px-6 bg-[#080112]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="text-brand-purple font-black text-xs tracking-[5px] uppercase mb-4 block">Process</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Einfachheit als <span className="text-gradient">Standard.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-16 relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
          {steps.map((step, i) => (
            <div key={i} className="relative z-10">
              <div className="text-5xl font-black text-white/5 mb-6 select-none">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">
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
