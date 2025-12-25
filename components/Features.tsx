
import React from 'react';

const Features: React.FC = () => {
  const highlights = [
    {
      title: "Edge Activity Engine",
      tag: "Infrastructure",
      desc: "Latenzfreie Ausspielung über unser globales Edge-Netzwerk. Events werden in Millisekunden synchronisiert und weltweit verteilt.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    },
    {
      title: "Adaptive Triggers",
      tag: "Intelligence",
      desc: "Unsere Engine erkennt 'Micro-Hesitations' im Nutzerverhalten und spielt Social Proof genau dann aus, wenn Zweifel entstehen.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: "Universal API Bridge",
      tag: "Integration",
      desc: "Nahtlose Verbindung zu jedem CRM oder Shop-System. Dokumentiert nach modernsten Standards für schnelle Integration.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    }
  ];

  return (
    <section id="features" className="py-48 bg-[#080112] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-40 gap-12">
          <div className="max-w-3xl">
            <span className="text-brand-purple font-black text-xs tracking-[5px] uppercase mb-8 block">The Tech Suite</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-10">
              Mehr als nur <br /> <span className="text-gradient">Widgets.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 font-light max-w-xl leading-relaxed">
              Wir haben die Infrastruktur für Trust komplett neu gedacht. Skalierbar, sicher und verdammt schnell.
            </p>
          </div>
        </div>

        <div className="space-y-56">
           {highlights.map((h, i) => (
             <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-8">
                   <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
                         {h.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[4px] text-gray-500">{h.tag}</span>
                   </div>
                   <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">{h.title}</h3>
                   <p className="text-lg lg:text-xl text-gray-400 font-light leading-relaxed max-w-lg">{h.desc}</p>
                   <div className="flex flex-wrap gap-4 pt-4">
                      {['DSGVO-Konform', 'Edge-Optimized', 'No-Code Setup'].map(item => (
                        <div key={item} className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[11px] text-white/60 font-bold uppercase tracking-widest">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-purple"></div>
                           {item}
                        </div>
                      ))}
                   </div>
                </div>
                <div className="flex-1 w-full">
                   <div className="aspect-video bg-glass rounded-[48px] border border-white/5 relative overflow-hidden group shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="relative w-2/3 h-1/2 flex justify-center gap-1.5 items-end">
                            {[...Array(12)].map((_, idx) => (
                              <div 
                                key={idx} 
                                className="w-full bg-gradient-to-t from-brand-purple to-brand-blue rounded-full transition-all duration-700"
                                style={{ 
                                  height: `${25 + Math.random() * 75}%`,
                                  opacity: 0.2 + (idx / 12) * 0.5
                                }}
                              />
                            ))}
                         </div>
                      </div>
                      <div className="absolute top-10 right-10 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                         <span className="text-[10px] font-bold text-white uppercase tracking-[2px]">Global Nodes Active</span>
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
