
import React from 'react';

const Hero: React.FC = () => {
  const mockActivities = [
    { name: "Max", action: "hat gerade gekauft", time: "vor 2 Min", icon: "🛍️", delay: "0s" },
    { name: "Sarah", action: "neue Bewertung ⭐⭐⭐⭐⭐", time: "vor 5 Min", icon: "✨", delay: "2s" },
    { name: "Lukas", action: "nutzt jetzt TrustFlow Pro", time: "vor 10 Sek", icon: "🚀", delay: "4s" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-brand-deep">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-purple/20 blur-[140px] rounded-full opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-deep to-transparent"></div>
        <div className="absolute inset-0 flex justify-around opacity-10 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-px h-full bg-brand-purple"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="mb-12 flex gap-10 text-[10px] font-bold tracking-[5px] text-gray-500 uppercase">
          <a href="#" className="hover:text-brand-purple transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Twitter</a>
          <a href="#" className="hover:text-brand-purple transition-colors">LinkedIn</a>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black tracking-tighter text-white mb-10 leading-[0.85]">
          Trust that <span className="font-decorative text-brand-purple italic tracking-normal px-2">converts</span><br />
          in real time.
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto mb-14 font-light tracking-wide leading-relaxed">
          Belebe deinen Shop mit echter Aktivität. <br className="hidden md:block"/>
          Vollautomatisch integriert in Sekunden.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
          <button className="bg-brand-purple text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl shadow-brand-purple/40 hover:scale-105 transition-transform">
            Kostenlos starten
          </button>
          <button className="bg-glass text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all border border-white/10">
            Live-Demo ansehen
          </button>
        </div>

        <div className="relative w-full h-32 flex justify-center items-center">
          {mockActivities.map((activity, idx) => (
            <div 
              key={idx}
              className="absolute animate-float-proof bg-glass p-4 rounded-2xl flex items-center gap-4 min-w-[280px] border border-white/5"
              style={{ animationDelay: activity.delay }}
            >
              <div className="w-10 h-10 bg-brand-purple/20 rounded-lg flex items-center justify-center text-xl">
                {activity.icon}
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white">{activity.name} {activity.action}</p>
                <p className="text-[10px] text-brand-purple font-black uppercase tracking-widest mt-0.5">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5 text-gray-600">
        <div className="w-px h-16 bg-gradient-to-b from-gray-700 to-transparent"></div>
        <span className="text-[9px] font-bold tracking-[4px] uppercase opacity-50">Scroll for more</span>
      </div>
    </section>
  );
};

export default Hero;
