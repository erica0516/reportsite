
import React from 'react';
import { Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-24 text-slate-300 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="max-w-sm mb-16 md:mb-0">
            <h2 className="text-4xl font-black mb-8 tracking-tighter text-white">Motix Lab</h2>
            <p className="text-base text-slate-200 leading-relaxed mb-10 font-normal">
              Motix Lab 以電信數據研究人潮線上線下行為，解析渠道影響與流動路徑，幫助品牌做出前瞻性的商業決策。
            </p>
            <p className="text-base text-[#397bff] font-bold tracking-widest">Powered by MESh+</p>
          </div>
          <div className="flex flex-col items-end w-full md:w-auto md:pt-40">
            <a 
              href="https://www.facebook.com/linkgoods2023/?locale=zh_TW" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 hover:bg-[#397bff] transition-all shadow-[0_0_15px_rgba(0,0,0,1)] group"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 fill-white stroke-none group-hover:fill-black" />
            </a>
            <div className="text-right space-y-3">
              <a href="#" className="text-base text-white hover:text-[#397bff] transition-colors block font-bold tracking-wider">
                隱私政策
              </a>
              <p className="text-base text-slate-300 tracking-widest font-normal">
                © MOTIX LAB 2026. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
