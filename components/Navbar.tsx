
import React from 'react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-24 flex items-center">
      <div className="max-w-7xl mx-auto px-10 w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-blue rounded-xl flex items-center justify-center text-white shadow-lg">
            <span className="font-black text-xl tracking-tighter italic">TF</span>
          </div>
          <span className="font-black text-2xl tracking-tighter text-white">TrustFlow</span>
        </a>
        
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[3px] uppercase text-gray-400">
            <a href="#features" className="hover:text-brand-purple transition-colors">Features</a>
            <a href="#pricing" className="hover:text-brand-purple transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Login</a>
          </div>
          <button 
            onClick={onToggleTheme}
            className="p-3 rounded-full bg-glass text-white hover:bg-white/10 transition-colors"
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
