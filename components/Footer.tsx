
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-deep py-24 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h3 className="text-2xl font-black text-white tracking-tighter">TrustFlow</h3>
            <p className="text-gray-500 font-light max-w-sm leading-relaxed">
              Wir helfen E-Commerce Brands dabei, authentisches Vertrauen durch Echtzeit-Aktivitäten aufzubauen.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-brand-purple transition-all">TW</a>
               <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-brand-purple transition-all">LI</a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[4px] mb-8">Rechtliches</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">AGB</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[4px] mb-8">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-brand-purple transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 text-[11px] font-bold text-gray-600 tracking-[2px] uppercase flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} TrustFlow. Made for beautiful experiences.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Berlin</a>
            <a href="#" className="hover:text-white">San Francisco</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
