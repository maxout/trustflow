
import React from 'react';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: "Community",
      price: "0",
      features: ["1 Website", "Basis Widgets", "Community Support"],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Starter",
      price: "19",
      features: ["1 Website", "5k Views/Monat", "Custom CSS", "Alle Widgets"],
      cta: "Jetzt wählen",
      highlight: false
    },
    {
      name: "Pro",
      price: "49",
      features: ["5 Websites", "50k Views/Monat", "Analytics", "API Zugriff"],
      cta: "Jetzt wählen",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "99+",
      features: ["Unbegrenzt", "White Label", "Priority Support", "SLA"],
      cta: "Kontakt aufnehmen",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 bg-light-card dark:bg-[#161618]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 dark:text-white">Fair & Skalierbar.</h2>
          <p className="text-xl text-[#476582] dark:text-gray-400 font-medium">Kostenlos starten, wachsen nach Bedarf.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-2xl border flex flex-col transition-transform hover:-translate-y-1 ${tier.highlight ? 'border-brand-purple bg-white dark:bg-dark-card ring-1 ring-brand-purple/20 shadow-2xl shadow-brand-purple/10' : 'border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg'}`}
            >
              <h3 className={`text-sm font-bold uppercase tracking-widest mb-6 ${tier.highlight ? 'text-brand-purple' : 'text-gray-500'}`}>{tier.name}</h3>
              <div className="mb-8 flex items-baseline">
                <span className="text-4xl font-black dark:text-white">{tier.price}€</span>
                <span className="text-gray-500 text-sm ml-1 font-medium">/ Monat</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2.5 rounded-lg font-bold text-sm transition-all ${tier.highlight ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/30' : 'bg-[#213547] dark:bg-dark-card text-white hover:opacity-90 border border-transparent dark:border-dark-border'}`}>
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
