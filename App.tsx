
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Storytelling from './components/Storytelling';
import KeyBenefits from './components/KeyBenefits';
import DemoSection from './components/DemoSection';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import Pricing from './components/Pricing';
import TrustCompliance from './components/TrustCompliance';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SocialProofNotification from './components/SocialProofNotification';

const App: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initial theme set based on dark state
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen selection:bg-brand-purple/30 overflow-x-hidden">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <LogoCloud />
        <Storytelling />
        <KeyBenefits />
        <DemoSection />
        <Features />
        <HowItWorks />
        <TargetAudience />
        <Pricing />
        <TrustCompliance />
        <FinalCTA />
      </main>
      <Footer />
      
      {showNotification && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <SocialProofNotification 
            onClose={() => setShowNotification(false)}
            name="Lukas"
            location="Berlin"
            action="nutzt jetzt TrustFlow Pro"
            time="vor 1 Minute"
          />
        </div>
      )}
    </div>
  );
};

export default App;
