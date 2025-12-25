
import React from 'react';

const Features: React.FC = () => {
  const features = [
    "Echtzeit‑Kauf‑ & Aktivitätsanzeigen",
    "Automatische Testimonial‑Sammlung",
    "Widget‑Editor (Farben, Positionen, Trigger)",
    "Events via API, Webhooks oder JS",
    "Analytics & Conversion‑Tracking"
  ];

  return (
    <section id="features" className="py-32 bg-[#080112]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-white tracking-tighter">Das Arsenal.</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-5">
              <div className="w-7 h-7 rounded-full bg-brand-purple/20 flex items-center justify-center shrink-0 border border-brand-purple/30">
                <svg className="w-4 h-4 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-lg font-medium text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
