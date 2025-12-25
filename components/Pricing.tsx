
import React from 'react';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: "Sandbox",
      price: "0",
      features: ["1 Website", "Essential Widgets", "Community Docs"],
      cta: "Free Start",
      highlight: false
    },
    {
      name: "Growth",
      price: "19",
      features: ["1 Website", "5.000 Views", "Custom CSS", "Edge-Delivery"],
      cta: "Select Plan",
      highlight: false
    },
    {
      name: "Scale",
      price: "49",
      features: ["5 Websites", "50.000 Views", "Full Analytics", "REST API"],
      cta: "Most Popular",
      highlight: true
    },
    {
      name: "Custom",
      price: "99+",
      features: ["Unlimited Sites", "White Label", "Priority SLA", "Dedicated Account"],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 bg-brand-deep">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-brand-purple font-black text-xs tracking-[5px] uppercase mb-6 block">Investment</span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">Wähle deinen <span className="text-gradient">Impact.</span></h2>
          <p className="text-xl text-gray-400 font-light">Transparente Preise für Teams jeder Größe.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-[32px] border flex flex-col transition-all duration-500 group ${tier.highlight ? 'border-brand-purple bg-brand-purple/5 shadow-[0_0_50px_rgba(189,52,254,0.1)]' : 'border-white/5 bg-white/5 hover:border-white/10'}`}
            >
              <h3 className={`text-[10px] font-black uppercase tracking-[3px] mb-8 ${tier.highlight ? 'text-brand-purple' : 'text-gray-500'}`}>{tier.name}</h3>
              <div className="mb-10 flex items-baseline">
                <span className="text-5xl font-black text-white tracking-tighter">{tier.price}€</span>
                <span className="text-gray-500 text-xs ml-2 font-bold uppercase tracking-widest">/ Mo</span>
              </div>
              <ul className="space-y-5 mb-12 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
                    <svg className="w-4 h-4 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[2px] transition-all ${tier.highlight ? 'bg-brand-purple text-white shadow-xl shadow-brand-purple/30' : 'bg-white/10 text-white hover:bg-white/20 border border-white/5'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
