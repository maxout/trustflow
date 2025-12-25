
import React from 'react';

const LogoCloud: React.FC = () => {
  const logos = ["Shopware", "Shopify", "WooCommerce", "Headless", "Webflow"];
  
  return (
    <section className="py-20 bg-brand-deep border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-[10px] font-black text-gray-500 uppercase tracking-[5px] mb-12">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {logos.map(logo => (
            <span key={logo} className="text-xl md:text-2xl font-black tracking-tighter text-white opacity-20 hover:opacity-100 transition-opacity cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
