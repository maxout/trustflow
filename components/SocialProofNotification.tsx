
import React from 'react';

interface SocialProofNotificationProps {
  name: string;
  location: string;
  action: string;
  time: string;
  onClose: () => void;
}

const SocialProofNotification: React.FC<SocialProofNotificationProps> = ({ 
  name, 
  location, 
  action, 
  time, 
  onClose 
}) => {
  return (
    <div className="bg-[#161618] p-5 pr-12 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 flex items-center gap-4 max-w-[340px] relative group pointer-events-auto backdrop-blur-xl bg-opacity-90">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-brand-purple opacity-40 group-hover:opacity-100 transition-all"
        aria-label="Close"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-blue rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-purple/20 text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
      </div>
      <div className="overflow-hidden">
        <p className="text-sm font-bold text-white truncate">
          {name} aus {location}
        </p>
        <p className="text-[13px] text-gray-400 leading-tight mt-0.5">
          {action}
        </p>
        <div className="flex items-center gap-2 mt-2">
           <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
           <p className="text-[10px] text-brand-purple font-black uppercase tracking-widest leading-none">
             {time}
           </p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
