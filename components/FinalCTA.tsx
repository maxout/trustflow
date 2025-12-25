
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 px-6 text-center bg-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto border border-gray-100 dark:border-dark-border p-16 rounded-[40px] bg-light-card dark:bg-dark-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 blur-[80px] rounded-full"></div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-10 dark:text-white leading-[1.1]">
            Bereit für den <span className="text-gradient">nächsten Level?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-brand text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl shadow-brand-purple/20 hover:scale-105 transition-transform w-full sm:w-auto">
              Jetzt kostenlos starten
            </button>
            <button className="bg-white dark:bg-dark-bg text-[#213547] dark:text-white px-10 py-4 rounded-full font-bold text-xl border border-gray-200 dark:border-dark-border hover:border-brand-blue transition-colors w-full sm:w-auto">
              Demo buchen
            </button>
          </div>
          <p className="mt-8 text-gray-500 dark:text-gray-500 font-medium">In weniger als 5 Minuten einsatzbereit. Keine Verpflichtung.</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
