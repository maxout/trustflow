
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
    <div className="bg-white dark:bg-dark-card p-4 pr-12 rounded-xl shadow-2xl border border-gray-200 dark:border-dark-border flex items-center gap-4 max-w-[340px] relative group pointer-events-auto backdrop-blur-sm bg-white/90 dark:bg-dark-card/90">
      <button 
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-brand-purple opacity-40 group-hover:opacity-100 transition-all"
        aria-label="Close"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-brand-purple/20">
        <span className="text-xl">🚀</span>
      </div>
      <div className="overflow-hidden">
        <p className="text-sm font-bold text-[#213547] dark:text-white truncate">
          {name} aus {location}
        </p>
        <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-tight mt-0.5">
          {action}
        </p>
        <p className="text-[11px] text-brand-purple font-bold mt-1.5 uppercase tracking-wider">
          {time}
        </p>
      </div>
    </div>
  );
};

export default SocialProofNotification;
