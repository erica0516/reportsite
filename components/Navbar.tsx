
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'services') => void;
  currentView: 'home' | 'services';
  activeAnchor?: string;
  onAnchorChange?: (anchor: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView, activeAnchor, onAnchorChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const smoothScrollTo = (id: string, group: string) => {
    setIsMenuOpen(false);
    if (currentView !== 'home') {
      onNavigate('home');
    }
    if (onAnchorChange) onAnchorChange(group);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  const handleDownloadClick = () => smoothScrollTo('download-form', 'report');

  const linkBaseClass = "text-base font-bold tracking-[0.1em] transition-all duration-300 whitespace-nowrap uppercase";
  const mobileLinkClass = "text-base font-bold tracking-[0.1em] text-white py-8 border-b border-white/5 w-full text-center hover:text-[#397bff] transition-colors uppercase";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-xl z-[100] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex justify-between items-center h-20 md:h-24">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer group"
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              <span className="text-xl font-black tracking-widest text-white group-hover:text-[#397bff] transition-colors uppercase">Motix Lab</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-12">
              <button 
                onClick={handleDownloadClick}
                className={`${linkBaseClass} text-white hover:text-[#397bff]`}
              >
                下載《年度產業前瞻報告》
              </button>

              <button 
                onClick={() => onNavigate('services')}
                className={`px-8 py-3 rounded-full text-base font-black tracking-[0.1em] transition-all border uppercase ${
                  currentView === 'services' 
                  ? 'bg-[#397bff] text-white border-[#397bff]' 
                  : 'bg-transparent text-white border-white/40 hover:border-[#397bff] hover:text-[#397bff]'
                }`}
              >
                客製化服務
              </button>
            </div>

            <div className="flex md:hidden items-center space-x-3">
              <button 
                onClick={() => onNavigate('services')}
                className={`px-6 py-2 rounded-full text-base font-black tracking-[0.1em] transition-all border uppercase ${
                  currentView === 'services' 
                  ? 'bg-[#397bff] text-white border-[#397bff]' 
                  : 'bg-transparent text-white border-white/40'
                }`}
              >
                客製化服務
              </button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white hover:text-[#397bff] transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden absolute top-20 md:top-24 left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/5 transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="flex flex-col items-center py-6 px-4">
            <button onClick={handleDownloadClick} className={`${mobileLinkClass} border-none`}>下載《年度產業前瞻報告》</button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden" onClick={() => setIsMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
