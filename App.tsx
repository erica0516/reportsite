
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import FeatureCards from './components/FeatureCards';
import InsightHighlight from './components/InsightHighlight';
import AboutSection from './components/AboutSection';
import DynamicModel from './components/DynamicModel';
import ContactForm from './components/ContactForm';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'services'>('home');
  const [activeAnchor, setActiveAnchor] = useState<string>('');
  
  const isLockedRef = useRef(false);
  const lockTimerRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  // 全站進場動畫觀察器
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentView]);

  useEffect(() => {
    if (currentView !== 'home') {
      setActiveAnchor('');
      return;
    }

    const groups = [
      { id: 'intro', group: 'report' },
      { id: 'features', group: 'report' },
      { id: 'insights', group: 'report' },
      { id: 'about', group: 'about' },
      { id: 'capabilities', group: 'about' },
      { id: 'download-form', group: 'about' }
    ];

    const handleScroll = () => {
      if (isLockedRef.current) return;

      const scrollPos = window.scrollY;
      
      if (Math.abs(scrollPos - lastScrollY.current) < 5) return;
      lastScrollY.current = scrollPos;

      if (scrollPos < 100) {
        if (activeAnchor !== '') setActiveAnchor('');
        return;
      }

      const windowHeight = window.innerHeight;
      const scanLine = scrollPos + (windowHeight * 0.3);
      
      let candidate = '';
      
      for (let i = groups.length - 1; i >= 0; i--) {
        const el = document.getElementById(groups[i].id);
        if (el) {
          if (scanLine >= el.offsetTop) {
            candidate = groups[i].group;
            break;
          }
        }
      }

      if (candidate !== activeAnchor) {
        setActiveAnchor(candidate);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView, activeAnchor]);

  const handleManualNavigate = (group: string) => {
    setActiveAnchor(group);
    isLockedRef.current = true;
    if (lockTimerRef.current) window.clearTimeout(lockTimerRef.current);
    
    lockTimerRef.current = window.setTimeout(() => {
      isLockedRef.current = false;
      window.dispatchEvent(new Event('scroll'));
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col font-['Noto_Sans_TC']">
      <Navbar 
        onNavigate={(view) => setCurrentView(view)} 
        currentView={currentView} 
        activeAnchor={activeAnchor}
        onAnchorChange={handleManualNavigate}
      />
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero />
            <IntroSection />
            <FeatureCards />
            <InsightHighlight />
            <AboutSection />
            <DynamicModel onNavigate={() => setCurrentView('services')} />
            <ContactForm />
          </>
        ) : (
          <ServicesSection />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
