
import React from 'react';

const Hero: React.FC = () => {
  // Mock-Daten für die schwebenden Social-Proof-Elemente
  const mockActivities = [
    { name: "Max", action: "hat gerade gekauft", time: "vor 2 Min", icon: "🛍️", delay: "0s" },
    { name: "Sarah", action: "neue Bewertung ⭐⭐⭐⭐⭐", time: "vor 5 Min", icon: "✨", delay: "2s" },
    { name: "Lukas", action: "nutzt jetzt TrustFlow Pro", time: "vor 10 Sek", icon: "🚀", delay: "4s" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-brand-deep">
      {/* Atmosphärisches Licht-Design */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-purple/20 blur-[140px] rounded-full opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-deep to-transparent"></div>
        
        {/* Subtile vertikale Linien wie im Screenshot */}
        <div className="absolute inset-0 flex justify-around opacity-10 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-px h-full bg-brand-purple"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Navigation/Social Header (Adaption vom Screenshot) */}
        <div className="mb-16 flex gap-8 text-[10px] font-bold tracking-[4px] text-gray-500 uppercase">
          <a href="#" className="hover:text-brand-purple transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Twitter</a>
          <a href="#" className="hover:text-brand-purple transition-colors">LinkedIn</a>
        </div>

        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
          Trust that <span className="font-decorative text-brand-purple italic tracking-normal px-4">converts</span><br />
          in real time.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
          Belebe deinen Shop mit echter Aktivität. <br className="hidden md:block"/>
          Vollautomatisch integriert in Sekunden.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <button className="bg-brand-purple text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl shadow-brand-purple/40 hover:scale-105 transition-transform">
            Kostenlos starten
          </button>
          <button className="bg-glass text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all border border-white/10">
            Live-Demo ansehen
          </button>
        </div>

        {/* Die "Software-Animation": Schwebende Social Proof Kacheln */}
        <div className="relative w-full h-40 flex justify-center items-center">
          {mockActivities.map((activity, idx) => (
            <div 
              key={idx}
              className="absolute animate-float-proof bg-glass p-4 rounded-2xl flex items-center gap-4 min-w-[280px]"
              style={{ animationDelay: activity.delay }}
            >
              <div className="w-10 h-10 bg-brand-purple/20 rounded-lg flex items-center justify-center text-xl">
                {activity.icon}
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white">{activity.name} {activity.action}</p>
                <p className="text-[10px] text-brand-purple font-bold uppercase tracking-wider">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Element vom Screenshot inspiriert */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-gray-600">
        <div className="w-px h-12 bg-gradient-to-b from-gray-800 to-transparent"></div>
        <span className="text-[9px] font-bold tracking-[3px] uppercase">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
