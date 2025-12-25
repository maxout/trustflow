
import React from 'react';

const DemoSection: React.FC = () => {
  return (
    <section className="py-32 bg-brand-deep overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">Überall zu Hause.</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Alles ist konfigurierbar – Design, Texte, Trigger, Timing. Passt sich nahtlos an dein Branding an.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          <div className="aspect-[16/9] bg-white/5 rounded-[40px] border border-white/10 p-4 md:p-8 flex items-center justify-center overflow-hidden shadow-inner">
             <div className="relative w-full h-full bg-[#161618] rounded-[24px] shadow-2xl border border-white/5 overflow-hidden flex flex-col">
                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#1e1e20]">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  <div className="ml-4 flex-1 h-5 bg-white/5 rounded" />
                </div>
                <div className="flex-1 p-10">
                  <div className="h-8 w-1/3 bg-white/10 rounded mb-6" />
                  <div className="h-4 w-full bg-white/5 rounded mb-3" />
                  <div className="h-4 w-5/6 bg-white/5 rounded mb-10" />
                  
                  <div className="grid grid-cols-3 gap-6">
                    <div className="h-48 bg-white/5 rounded-2xl border border-white/5" />
                    <div className="h-48 bg-white/5 rounded-2xl border border-white/5" />
                    <div className="h-48 bg-white/5 rounded-2xl border border-white/5" />
                  </div>
                  
                  {/* Floating Mock Notification in the Browser Mockup */}
                  <div className="absolute bottom-10 left-10 animate-pulse">
                    <div className="bg-glass p-5 rounded-2xl shadow-2xl border border-brand-purple/20 flex items-center gap-4 max-w-xs">
                       <div className="w-12 h-12 bg-brand-purple text-white rounded-full flex items-center justify-center text-xl shadow-lg shadow-brand-purple/40">🛒</div>
                       <div>
                         <p className="text-sm font-bold text-white">Max aus Berlin</p>
                         <p className="text-xs text-gray-400">hat gerade zugeschlagen!</p>
                         <p className="text-[10px] text-brand-purple font-bold mt-1 uppercase tracking-wider">vor 15 Sek.</p>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
          
          <div className="mt-12 text-center md:absolute md:top-1/2 md:-right-12 md:-translate-y-1/2 md:max-w-xs md:text-left">
            <div className="bg-glass p-8 rounded-3xl border border-white/10 shadow-2xl">
              <p className="text-xl font-bold text-white mb-4 italic">Vorschau</p>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Wähle aus hunderten von Templates oder erstelle dein eigenes. Farben, Eckenradius und Schriften sind komplett anpassbar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
