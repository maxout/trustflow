
import React from 'react';

const KeyBenefits: React.FC = () => {
  const benefits = [
    {
      icon: "🚀",
      title: "Blitzschnell",
      description: "Ein extrem leichtes Script sorgt für Social Proof ohne Kompromisse bei der Ladezeit."
    },
    {
      icon: "⚡",
      title: "Sofort bereit",
      description: "Integration in Sekunden. Ein Snippet kopieren, Events definieren, fertig."
    },
    {
      icon: "🔒",
      title: "Sicher & Konform",
      description: "100% DSGVO-konform. Hosting in der EU, anonymisierte Datenverarbeitung."
    },
    {
      icon: "🎨",
      title: "Voll Anpassbar",
      description: "Passt sich deinem Design an. CSS-Injections, Custom Themes und API-Support."
    },
    {
      icon: "📊",
      title: "Echtzeit Analytics",
      description: "Sieh genau, welche Benachrichtigungen zu wie vielen Conversions führen."
    },
    {
      icon: "🔌",
      title: "API First",
      description: "Steuere alles programmatisch über unsere moderne REST API oder Webhooks."
    }
  ];

  return (
    <section className="py-32 px-6 bg-brand-deep">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-glass p-8 rounded-2xl border border-white/5 hover:border-brand-purple/50 transition-all group hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform shadow-inner shadow-brand-purple/20">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
