
import React, { useState } from 'react';

type Template = 'minimal' | 'glass' | 'bold' | 'stealth';

const DemoSection: React.FC = () => {
  const [activeTemplate, setActiveTemplate] = useState<Template>('glass');

  const templates = [
    { id: 'minimal' as const, label: 'Minimal', desc: 'Sauber & Dezent' },
    { id: 'glass' as const, label: 'Modern Glass', desc: 'Trendiger Frost-Look' },
    { id: 'bold' as const, label: 'Brand Bold', desc: 'Auffällig & Farbstark' },
    { id: 'stealth' as const, label: 'Dark Stealth', desc: 'Edel & Unaufdringlich' },
  ];

  const renderNotification = () => {
    switch (activeTemplate) {
      case 'minimal':
        return (
          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center gap-4 border border-gray-100 min-w-[300px]">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Jemand aus Hamburg...</p>
              <p className="text-xs text-gray-500">hat gerade bestellt</p>
            </div>
          </div>
        );
      case 'bold':
        return (
          <div className="bg-brand-purple p-4 rounded-2xl shadow-xl flex items-center gap-4 min-w-[300px] text-white">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">🔥</div>
            <div>
              <p className="font-black text-sm uppercase tracking-tight">Heiß begehrt!</p>
              <p className="text-xs opacity-90">Sarah hat sich gerade angemeldet</p>
            </div>
          </div>
        );
      case 'stealth':
        return (
          <div className="bg-[#0b0118] p-4 rounded-full border border-brand-purple/30 flex items-center gap-4 min-w-[300px] shadow-[0_0_30px_rgba(189,52,254,0.2)]">
            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white scale-90">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-widest">Neues Review</p>
              <p className="text-[10px] text-gray-400">"Absolut empfehlenswert!"</p>
            </div>
          </div>
        );
      default: // glass
        return (
          <div className="bg-glass p-5 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-4 min-w-[320px] backdrop-blur-xl">
             <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-blue text-white rounded-xl flex items-center justify-center text-xl shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
             </div>
             <div>
               <p className="text-sm font-bold text-white">Trend-Alarm 🚀</p>
               <p className="text-xs text-gray-400">12 Personen schauen sich das gerade an</p>
               <p className="text-[10px] text-brand-purple font-bold mt-1 uppercase tracking-wider">Live Activity</p>
             </div>
          </div>
        );
    }
  };

  return (
    <section className="py-32 bg-brand-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-4 space-y-12">
            <div>
              <span className="text-brand-purple font-black text-xs tracking-[5px] uppercase mb-6 block">Personalization</span>
              <h2 className="text-5xl font-black tracking-tighter text-white mb-6 leading-tight">Überall zu Hause.</h2>
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                Wähle aus kuratierten Design-Systemen oder erstelle dein eigenes. TrustFlow passt sich deiner Marke an, nicht umgekehrt.
              </p>
            </div>

            <div className="space-y-4">
              {templates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTemplate(t.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${activeTemplate === t.id ? 'bg-brand-purple/10 border-brand-purple/40 shadow-lg' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className={`font-bold text-sm uppercase tracking-widest ${activeTemplate === t.id ? 'text-brand-purple' : 'text-gray-400'}`}>
                      {t.label}
                    </span>
                    {activeTemplate === t.id && (
                      <div className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 font-light">{t.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
               {/* Decorative background element */}
               <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-brand-blue/10 blur-[100px] rounded-full"></div>
               
               <div className="aspect-[16/10] bg-white/5 rounded-[48px] border border-white/10 p-4 md:p-6 shadow-2xl relative overflow-hidden">
                  <div className="w-full h-full bg-[#161618] rounded-[32px] border border-white/5 flex flex-col relative overflow-hidden">
                     {/* Browser Header */}
                     <div className="h-12 border-b border-white/5 flex items-center px-6 gap-3 bg-[#1e1e20]">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-500/30" />
                           <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                           <div className="w-3 h-3 rounded-full bg-green-500/30" />
                        </div>
                        <div className="flex-1 h-6 bg-white/5 rounded-full flex items-center px-4">
                           <div className="w-4 h-4 text-gray-600 mr-2">
                              <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                           </div>
                           <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">your-premium-shop.com</div>
                        </div>
                     </div>

                     {/* Website Content Mockup */}
                     <div className="flex-1 p-12 overflow-hidden opacity-40 select-none">
                        <div className="flex justify-between items-center mb-20">
                           <div className="w-32 h-6 bg-white/10 rounded" />
                           <div className="flex gap-8">
                              <div className="w-12 h-2 bg-white/5 rounded" />
                              <div className="w-12 h-2 bg-white/5 rounded" />
                              <div className="w-12 h-2 bg-white/5 rounded" />
                           </div>
                        </div>
                        
                        <div className="grid grid-cols-12 gap-12">
                           <div className="col-span-7 space-y-6">
                              <div className="h-16 w-full bg-white/10 rounded-2xl" />
                              <div className="h-16 w-3/4 bg-white/10 rounded-2xl" />
                              <div className="h-4 w-full bg-white/5 rounded mt-12" />
                              <div className="h-4 w-5/6 bg-white/5 rounded" />
                              <div className="h-14 w-48 bg-brand-purple/20 rounded-full mt-12" />
                           </div>
                           <div className="col-span-5">
                              <div className="aspect-square bg-white/5 rounded-3xl border border-white/5" />
                           </div>
                        </div>
                     </div>

                     {/* The Living Notification Preview */}
                     <div className="absolute bottom-10 left-10 transition-all duration-500 transform hover:scale-105">
                        <div className="animate-[float_4s_infinite_ease-in-out]">
                          {renderNotification()}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Stats Overlay */}
               <div className="absolute -bottom-10 -right-10 bg-glass p-8 rounded-3xl border border-white/10 shadow-2xl hidden md:block">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                     </div>
                     <div>
                        <p className="text-2xl font-black text-white">+24%</p>
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Conversion Uplift</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DemoSection;
