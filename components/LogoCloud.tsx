
import React from 'react';

const LogoCloud: React.FC = () => {
  const logos = ["Shopware", "Shopify", "WooCommerce", "Headless", "Webflow"];
  
  return (
    <section className="py-16 border-t border-gray-100 dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-[13px] font-bold text-[#476582] dark:text-gray-500 uppercase tracking-widest mb-10">
          Built for modern shops & teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 dark:opacity-40">
          {logos.map(logo => (
            <span key={logo} className="text-2xl md:text-3xl font-black tracking-tighter text-[#213547] dark:text-white">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
